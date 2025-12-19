// Contact Form Handler for The Scurvy Dog Tattoo
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#_builder-form');

  if (!form) {
    console.log('Form not found');
    return;
  }

  // Find or create submit button
  const submitButton = form.querySelector('button[type="submit"]');

  if (!submitButton) {
    console.log('Submit button not found');
    return;
  }

  // Handle form submission
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    e.stopPropagation();

    // Disable submit button to prevent double submission
    submitButton.disabled = true;
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';

    try {
      // Collect form data
      const formData = {
        first_name: document.getElementById('first_name')?.value || '',
        last_name: document.getElementById('last_name')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        tattoo_budget: document.querySelector('[name="wTbNy6MQxfAQ5qt7J3fu"]')?.value || '',
        description: document.getElementById('r46aoHYnW03OsOXzBiVy')?.value || '',
        terms_accepted: document.getElementById('terms_and_conditions_1_xh7g6dhs55s')?.checked || false
      };

      // Basic validation
      if (!formData.first_name || !formData.email || !formData.phone || !formData.tattoo_budget) {
        throw new Error('Please fill in all required fields');
      }

      if (!formData.terms_accepted) {
        throw new Error('Please accept the terms and conditions');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Submit to Netlify Function
      const response = await fetch('/.netlify/functions/submit-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      // Success! Show success message
      alert('Thank you! Your request has been submitted successfully. We will contact you soon!');

      // Reset the form
      form.reset();

    } catch (error) {
      console.error('Form submission error:', error);
      alert(error.message || 'An error occurred while submitting the form. Please try again.');
    } finally {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
});
