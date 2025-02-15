document.addEventListener("DOMContentLoaded", function () { 
    document.getElementById('appointmentForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            area: document.getElementById('area').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            postCode: document.getElementById('post-code').value,
        };

        // ✅ Now formData is accessible, and localStorage will work.
        localStorage.setItem('appointmentData', JSON.stringify(formData));

        // ✅ Redirect after storing data
        window.location.href = 'confirmation.html';
    });
});
