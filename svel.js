// This is a sample JavaScript file with multiple sections and features

// 1. Constants and Variables
const appName = 'MyApp';
let isLoggedIn = false;
let currentUser = null;

// 2. Function Definitions
function greetUser(name) {
    return `Hello, ${name}! Welcome to ${appName}.`;
}

function login(username, password) {
    // Simulate login logic (e.g., API call)
    isLoggedIn = true;
    currentUser = username;
    return `User ${username} logged in successfully.`;
}

function logout() {
    // Simulate logout logic
    isLoggedIn = false;
    currentUser = null;
    return 'User logged out.';
}

// 3. Classes and Object Definitions
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    getUserInfo() {
        return `Username: ${this.username}, Email: ${this.email}`;
    }
}

// 4. Event Handling
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = login(username, password);
        alert(message);
    });

    const logoutButton = document.getElementById('logoutButton');
    logoutButton.addEventListener('click', () => {
        const message = logout();
        alert(message);
    });
});

// 5. API Requests (using Fetch API)
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Received data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// 6. Main Application Logic
function main() {
    console.log(greetUser('John'));
    const user1 = new User('john_doe', 'john@example.com');
    console.log(user1.getUserInfo());
    fetchData();
}

// 7. Execution
main();
