// script.js
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        if (response.ok) {
            window.location.href = '/dashboard'; // Redirect to dashboard on successful login
        } else {
            document.getElementById('message').textContent = result.message; // Display error message
        }
    } catch (error) {
        document.getElementById('message').textContent = 'An error occurred. Please try again.'; // Handle any errors
    }
});
// script.js

// Google Sign-In
document.getElementById('googleLogin').addEventListener('click', () => {
    window.location.href = '/auth/google';
});

// Apple Sign-In
document.getElementById('appleLogin').addEventListener('click', () => {
    window.location.href = '/auth/apple';
});
// Forgot Password
document.getElementById('forgotPassword').addEventListener('click', () => {
    window.location.href = '/forgot-password';
});

// Sign Up
document.getElementById('signUp').addEventListener('click', () => {
    window.location.href = '/sign-up';
});