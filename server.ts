document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('transferForm') as HTMLFormElement;

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const recipientInput = document.getElementById('recipient') as HTMLInputElement;
        const amountInput = document.getElementById('amount') as HTMLInputElement;
        const messageInput = document.getElementById('message') as HTMLTextAreaElement;

        const recipient = recipientInput.value;
        const amount = amountInput.value;
        const message = messageInput.value;

        // Send form data to the server
        try {
            const response = await fetch('/transfer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ recipient, amount, message })
            });

            if (!response.ok) {
                throw new Error('Failed to transfer money');
            }

            const data = await response.text();
            console.log(data); // Log server response
            // You can update the UI or show a success message here
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show an error message to the user)
        }
    });
});
