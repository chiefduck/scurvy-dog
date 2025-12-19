// Contact Form Handler for The Scurvy Dog Tattoo
// Handles form submission via Netlify Functions + Resend (NO GHL)

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('#contact-form');
  const submitButton = document.querySelector('#submit-button');
  const successMessage = document.querySelector('#form-success-message');
  const fileInput = document.querySelector('#tattoo_image');
  const fileNameDisplay = document.querySelector('#file-name-display');

  if (!form) {
    console.log('Contact form not found');
    return;
  }

  // Handle file input display
  if (fileInput && fileNameDisplay) {
    fileInput.addEventListener('change', function(e) {
      const fileName = e.target.files[0]?.name;
      if (fileName) {
        fileNameDisplay.textContent = `Selected: ${fileName}`;
      } else {
        fileNameDisplay.textContent = '';
      }
    });
  }

  // Clear error messages
  function clearErrors() {
    document.querySelectorAll('.form-error').forEach(error => {
      error.classList.remove('active');
    });
  }

  // Show error message
  function showError(fieldId, message) {
    const errorElement = document.querySelector(`#${fieldId}-error`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add('active');
    }
  }

  // Validate form
  function validateForm() {
    clearErrors();
    let isValid = true;

    const firstName = document.getElementById('first_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const budget = document.getElementById('tattoo_budget').value;
    const termsAccepted = document.getElementById('terms_and_conditions').checked;

    if (!firstName) {
      showError('first_name', 'Please enter your first name');
      isValid = false;
    }

    if (!email) {
      showError('email', 'Please enter your email address');
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
      }
    }

    if (!phone) {
      showError('phone', 'Please enter your phone number');
      isValid = false;
    }

    if (!budget) {
      showError('tattoo_budget', 'Please select a budget');
      isValid = false;
    }

    if (!termsAccepted) {
      showError('terms', 'Please accept the terms and conditions');
      isValid = false;
    }

    return isValid;
  }

  // Handle form submission
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    e.stopPropagation();

    // Hide success message if visible
    if (successMessage) {
      successMessage.classList.remove('active');
    }

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Disable submit button
    submitButton.disabled = true;
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';

    try {
      // Collect form data
      const formData = {
        first_name: document.getElementById('first_name').value.trim(),
        last_name: document.getElementById('last_name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        tattoo_budget: document.getElementById('tattoo_budget').value,
        description: document.getElementById('description').value.trim(),
        has_image: fileInput?.files?.length > 0,
        image_filename: fileInput?.files[0]?.name || null
      };

      // Submit to Netlify Function (Resend email)
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
      if (successMessage) {
        successMessage.classList.add('active');
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Reset the form
      form.reset();
      if (fileNameDisplay) {
        fileNameDisplay.textContent = '';
      }

    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred: ' + (error.message || 'Please try again or call us at (720) 398-8051'));
    } finally {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
});
