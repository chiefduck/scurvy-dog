const { Resend } = require('resend');

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    // Parse the form data
    const data = JSON.parse(event.body);

    // Validate required fields
    const requiredFields = ['first_name', 'email', 'phone', 'tattoo_budget'];
    const missingFields = requiredFields.filter(field => !data[field]);

    if (missingFields.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: `Missing required fields: ${missingFields.join(', ')}`
        }),
      };
    }

    // Initialize Resend with API key from environment variable
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Prepare email content
    const emailHtml = `
      <h2>New Tattoo Appointment Request</h2>
      <p><strong>Name:</strong> ${data.first_name} ${data.last_name || ''}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Tattoo Budget:</strong> ${data.tattoo_budget}</p>
      ${data.description ? `<p><strong>Description:</strong> ${data.description}</p>` : ''}
      ${data.has_image && data.image_filename ? `<p><strong>Image File:</strong> ${data.image_filename} (customer has this file ready)</p>` : ''}
      <hr>
      <p><em>Submitted from The Scurvy Dog Tattoo website</em></p>
    `;

    // Send email via Resend
    const response = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'info@example.com',
      subject: `New Tattoo Appointment: ${data.first_name} ${data.last_name || ''}`,
      html: emailHtml,
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Form submitted successfully!',
        id: response.id
      }),
    };

  } catch (error) {
    console.error('Error processing form submission:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to submit form',
        details: error.message
      }),
    };
  }
};
