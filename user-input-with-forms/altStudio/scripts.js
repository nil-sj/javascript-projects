// document.addEventListener("load", function () {

    const form = document.getElementById('form');
    // console.log(form);
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');

    function submitForm(formData) {
        fetch("https://r31jbh92tk.execute-api.us-east-1.amazonaws.com/dev/submit_message", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(curr => console.log("Successfully got the message"))
        .catch(err => console.log("Failed to get the messaged"))

    }

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        let name = nameInput.value;
        let email = emailInput.value;
        let message = messageInput.value;

        let formData = {
            name: name,
            email: email,
            message: message
        };

        console.log(formData);
        submitForm(formData);
        window.alert("Form Submitted");
        

    });

// });