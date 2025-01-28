document.addEventListener("DOMContentLoaded", () => {
  
    // Select elements
    const navbarLinks = document.querySelectorAll(".navbar ul li a");
    const loginButton = document.querySelector(".st-btn");
    const signUpButton = document.querySelector(".navbar button[type='submit']:nth-of-type(2)");
    const searchButton = document.querySelector(".search-btn");
    const subscribeButton = document.querySelector(".Subscribe-btn");
  
    
    // Event listener for login button
    loginButton.addEventListener("click", () => {
      alert("Login button clicked!");
    });
  
  
    // Event listener for sign-up button
    signUpButton.addEventListener("click", () => {
      alert("Sign-Up button clicked!");
    });
  
  
    // Event listener for search button
    searchButton.addEventListener("click", () => {
      const doctorName = document.querySelector("select:nth-of-type(1)").value;
      const location = document.querySelector("select:nth-of-type(2)").value;
      alert(`Search clicked! Doctor: ${doctorName}, Location: ${location}`);
    });
  
  
    // Event listener for subscribe button
    subscribeButton.addEventListener("click", () => {
      alert("Subscribed to Newsletter!");
    });
  
  
    // Event listener for navbar links
    navbarLinks.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        alert(`${link.textContent} link clicked!`);
      });
    });
  });
  