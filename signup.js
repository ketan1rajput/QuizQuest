// signup.js

document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get username and passwords from the form
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        // Perform validation (e.g., check if passwords match)
        if (password !== confirmPassword) {
            // If passwords do not match, display an error message
            alert('Passwords do not match. Please try again.');
            return; // Stop further execution
        }
        
        // Check if user already exists
        if (localStorage.getItem(username)) {
            alert('User already exists. Please choose a different username.');
            return;
        }
        
        // Store user credentials in localStorage
        localStorage.setItem(username, password);
        
        // After successful signup, redirect to the login page
        window.location.href = 'login.html';
    });
});
