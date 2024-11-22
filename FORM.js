document.getElementById("Register").addEventListener("submit",function(event)
{
    event.preventDefault();
    const first_name=document.getElementById("first_name").value.trim();
    const last_name=document.getElementById("last_name").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value;
    const confirm_password=document.getElementById("Confirm_Password").value;
    const terms=document.getElementById("checkbox").checked;

    const errorMessage = document.getElementById('error-message');
    errorMessage.style.display = 'none'; // Hide error message initially
  
    if (!first_name || !last_name || !email || !password || !confirm_password) {
      errorMessage.textContent = 'Please fill in all the fields.';
      errorMessage.style.display = 'block';
      return;
    }
  
    if (password !== confirm_password) {
      errorMessage.textContent = 'Passwords do not match.';
      errorMessage.style.display = 'block';
      return;
    }
  
    if (!terms) {
      errorMessage.textContent = 'You must accept the Terms of Use and Privacy Policy.';
      errorMessage.style.display = 'block';
      return;
    }
  
    alert('Registration successful!');
    document.getElementById('Register').reset();
});
