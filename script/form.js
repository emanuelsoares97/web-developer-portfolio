const contactForm = document.getElementById("contact-form");
const statusMessage = document.getElementById("status");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const accessKey = formData.get("access_key");

        if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
            statusMessage.textContent = "Configure your Web3Forms access key before publishing the form.";
            statusMessage.className = "status-message error";
            return;
        }

        statusMessage.textContent = "Sending...";
        statusMessage.className = "status-message";

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (response.ok && result.success) {
                statusMessage.textContent = "Message sent successfully!";
                statusMessage.className = "status-message success";
                contactForm.reset();
            } else {
                statusMessage.textContent = result.message || "Something went wrong. Please try again.";
                statusMessage.className = "status-message error";
            }
        } catch (error) {
            console.error(error);
            statusMessage.textContent = "Network error. Please try again later.";
            statusMessage.className = "status-message error";
        }
    });
}
