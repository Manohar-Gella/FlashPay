document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('transferForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const recipient = document.getElementById('recipient').value;
        const amount = document.getElementById('amount').value;
        const message = document.getElementById('message').value;

        // Send form data to the server
        fetch('/transfer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ recipient, amount, message })
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Log server response
            // You can update the UI or show a success message here
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error (e.g., show an error message to the user)
        });
    });
});
