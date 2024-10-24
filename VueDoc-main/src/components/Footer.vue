<template>
    <footer id="footer">
      <div class="container">
        <div class="footer-content">
          <!-- Company Info Section -->
          <div class="footer-section">
            <h2>About Us</h2>
            <p>
              We are dedicated to providing exceptional service and solutions for all your document management needs.
            </p>
          </div>
  
          <!-- Services Section -->
          <div class="footer-section">
            <h2>Our Services</h2>
            <p>Document Management</p>
            <p>Secure Storage</p>
            <p>Collaboration Tools</p>
            <p>Data Analytics</p>
          </div>
  
          <!-- Contact Section -->
          <div class="footer-section">
            <h2>Contact Us</h2>
            <p>Email: contact@yourcompany.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Your Street, Your City, Your Country</p>
          </div>
  
          <!-- Social Media Links Section -->
          <div class="footer-section">
            <h2>Follow Us</h2>
            <div class="social-icons">
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
  
        <div class="footer-bottom">
          <p>© 2024 ManageDoc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'); /* Font Awesome for social icons */
  * {
        margin: 0;
        padding: 0;
        
        box-sizing: border-box; /* Ajoute cette ligne pour éviter des soucis de mise en page */
    }
  #footer {
    background-color: #c9909a;
    color: #fff;
    padding: 0px 0;
  }
  
  .container {
    width: 90%;
    max-width: 1200px; /* Limit max width for larger screens */
    margin: 0 auto;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family: 'Poppins', sans-serif;
  }
  
  .footer-section {
    flex: 1;
    margin: 20px;
    min-width: 250px;
  }
  
  .footer-section h2 {
    margin-bottom: 15px;
    font-size: 18px;
  }
  
  .footer-section p {
    margin-bottom: 10px;
    line-height: 1.5;
  }
  
  .social-icons {
    display: flex;
    margin-top: 10px;
  }
  
  .social-icons a {
    color: #fff;
    font-size: 24px;
    margin-right: 15px;
    transition: color 0.3s ease;
  }
  
  .social-icons a:hover {
    color: #f97c92; /* Change to highlight color on hover */
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 40px;
    font-size: 14px;
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      align-items: center;
    }
  
    .footer-section {
      text-align: center;
      margin: 10px 0; /* Adjust margin for smaller screens */
    }
  
    .footer-bottom {
      margin-top: 20px;
      font-size: 12px;
    }
  }
  </style>
  