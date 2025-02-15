const appointmentData = JSON.parse(localStorage.getItem('appointmentData'));

        // Display the form data on the confirmation page
        const confirmationDetails = document.getElementById('confirmationDetails');
        if (appointmentData) {
            confirmationDetails.innerHTML = `
                <p><strong>Name:</strong> ${appointmentData.name}</p>
                <p><strong>Phone:</strong> ${appointmentData.phone}</p>
                <p><strong>Email:</strong> ${appointmentData.email}</p>
                <p><strong>Date:</strong> ${appointmentData.date}</p>
                <p><strong>Time:</strong> ${appointmentData.time}</p>
                <p><strong>Area:</strong> ${appointmentData.area}</p>
                <p><strong>City:</strong> ${appointmentData.city}</p>
                <p><strong>State:</strong> ${appointmentData.state}</p>
                <p><strong>Post Code:</strong> ${appointmentData.postCode}</p>
            `;
        } else {
            confirmationDetails.innerHTML = `<p>No appointment data found.</p>`;
        }