// login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get username and password from the form
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Retrieve password from localStorage
        const storedPassword = localStorage.getItem(username);
        
        // Check if username exists and password matches
        if (storedPassword && password === storedPassword) {
            // If authentication is successful, navigate to the main page
            window.location.href = 'index.html';
        } else {
            // If authentication fails, display an error message
            alert('Invalid username or password. Please try again.');
        }
    });
});
