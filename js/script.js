document.getElementById("wf-form-counselling").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(event.target); // Use FormData directly

    const webhookURL = "https://hook.eu2.make.com/k1rtvpxp5frd38fjawv9ly9uhbvphwt3";

    try {
        const response = await fetch(webhookURL, {
            method: "POST",
            body: formData, // No need for JSON.stringify or setting Content-Type
        });

        if (response.ok) {
            alert("Form submitted successfully!");
            document.getElementById("wf-form-counselling").style.display = "none" 
            document.getElementById("success").style.display = "block"
        } else {
            alert("There was an error submitting the form.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    }
});
