// Global config object
let config = {};

// Fetch configuration from server
async function initializeApp() {
    try {
        const response = await fetch('/config');
        config = await response.json();
        
        // Initialize EmailJS
        emailjs.init(config.emailjs.publicKey);
        
        // Enable the form
        document.getElementById('bookingForm').disabled = false;
    } catch (error) {
        console.error('Error loading configuration:', error);
        showError('Error initializing application. Please refresh the page.');
    }
}

// Form Elements
const form = document.getElementById('bookingForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const notesInput = document.getElementById('notes');
const submitButton = form.querySelector('button[type="submit"]');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;

// Form Validation
function validateForm() {
    // Basic validation
    if (!nameInput.value.trim()) {
        showError('Please enter your name');
        return false;
    }

    if (!phoneInput.value.trim()) {
        showError('Please enter your phone number');
        return false;
    }

    if (!dateInput.value) {
        showError('Please select a date');
        return false;
    }

    if (!timeInput.value) {
        showError('Please select a time');
        return false;
    }

    return true;
}

// Show error message
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
}

// Show success message
function showSuccess(message) {
    successMessage.textContent = message || 'Your appointment has been successfully booked! Check your email for confirmation.';
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
}

// Update button state
function updateButtonState(isLoading, text) {
    submitButton.disabled = isLoading;
    submitButton.textContent = text;
}

// Handle form submission
form.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
        return;
    }

    // Show loading state
    updateButtonState(true, 'Sending...');

    // Prepare form data
    const formData = {
        name: nameInput.value.trim(),
        phone: phoneInput.value.trim(),
        date: dateInput.value,
        time: timeInput.value,
        notes: notesInput.value.trim(),
        to_name: nameInput.value.trim(),
        from_name: config.app.adminName,
    };

    try {
        // Send email using EmailJS
        await emailjs.send(
            config.emailjs.serviceId,
            config.emailjs.templateId,
            formData
        );

        // Show success state
        showSuccess();
        updateButtonState(true, 'Request Sent!');
        form.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            updateButtonState(false, 'Book Appointment');
        }, 3000);

    } catch (error) {
        console.error('Error:', error);
        showError('Failed to book appointment. Please try again.');
        updateButtonState(false, 'Book Appointment');
    }
});

// Initialize the application
initializeApp();

// Additional event listeners remain the same...