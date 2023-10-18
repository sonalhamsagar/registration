document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;

    // You can send the data to a server for registration here

    // Display a success message
    alert("Registration successful!\nName: " + name + "\nEmail: " + email + "\nPhone: " + phone + "\nGender: " + gender);
});
