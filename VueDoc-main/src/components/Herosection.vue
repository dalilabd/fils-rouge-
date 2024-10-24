<template>
    <section id="header">
        <div class="container">
        <img src="../assets/images/logo.png" class="logo">
        <div class="header-text">
            <h1>Welcome to our document management platform</h1>
            <span class="square"></span>
            <p>
              This platform simplifies the management and tracking of your documents by centralizing their access and organization.<br>
              You can easily view, edit, and track the status of your documents securely.
            </p>
            <button class="common-btn">Read More</button>
            <div class="line">
                <span class="line-1"></span>
                <span class="line-2"></span>
                <span class="line-3"></span>
            </div>
        </div>
    </div>
    </section>
    <nav id="sideNav" :style="{ right: sideNavPosition }" >
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#">Features</a></li>
            <li><RouterLink to="/Register">Register</RouterLink></li>
            <li><RouterLink to="/connecter">se connecter</RouterLink></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    <img
          :src="menuBtnSrc"
          alt="Menu Button"
          id="menuBtn"
          @click="toggleMenu"
    />
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import menuImage from '../assets/images/menu.png';
import { RouterLink } from 'vue-router';
    
    const sideNavPosition = ref('-250px');
    const menuBtnSrc = ref(menuImage); // Initial image
    
    const toggleMenu = () => {
      if (sideNavPosition.value === '-250px') {
        sideNavPosition.value = '0'; // Show sideNav
        menuBtnSrc.value = closeImage; // Change to close icon
      } else {
        sideNavPosition.value = '-250px'; // Hide sideNav
        menuBtnSrc.value = menuImage; // Change back to menu icon
      }
    };
    </script>
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    #header{
        height: 100vh;
        background-image: url(../assets/images/background.png);
        background-size: cover;
        background-position: center;
    }
    .container{
        margin-right: 100px;
        margin-left: 100px;
    }
    .logo{
        margin-top: 30px;
        width: 100px;
    }
    .header-text {
      margin-top: 140px;
      max-width: 400px;
      font-family: 'Poppins', sans-serif;
    }
    h1{
        font-size: 20px;
        color: rgb(174, 95, 135);
    }
    p{
      color: #edafba; 
      font-size: 15px;
      line-height: 18px; 
    }
    .square{
        height: 12px;
        width: 12px;
        display: inline-block;
        background: #f97c92;
        margin: 15px 0;
    }
    .common-btn {
        padding: 18px 40px;
        background: transparent;
        outline: none;
        border: 2px solid #f97c92;
        border-radius: 20px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.4s ease; 
        position: relative;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); 
    }
    
    .common-btn:hover {
        background-color: #f97c92; 
        color: white; 
        transform: translateY(8px) rotateZ(360deg); 
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3); 
    }
    
    .common-btn:active {
        transform: scale(0.95); 
    }
    .header-text button{
        margin-top: 20px;
        margin-bottom: 60px;
    }
    .line-1{
        width: 15px;
        height: 15px;
        background: #f97c92;
        display: inline-block;
    }
    .line-1{
        width: 60px;
        height: 6px;
        background: #f97c92;
        display: inline-block;
    }
    .line-3{
        width: 15px;
        height: 15px;
        background: #f97c92;
        display: inline-block;
    }
    #sideNav{
        width: 250px;
        height: 100vh;
        position: fixed;
        right: -250px;
        top: 0;
        background: #f97c92;
        z-index: 2;
        transition: 0.3s;
    }
    nav ul li {
       list-style: none;
       margin: 50px 20px; 
    }
    nav ul li a{
        text-decoration: none;
        color: #fff;
    }
    #menuBtn{
        width: 50px;
        position: fixed;
        right: 65px;
        top: 35px;
        z-index: 2;
        cursor: pointer;
    }
    
    /* Responsive design starts here */
    @media (max-width: 768px) {
        #header {
        background-image: none; /* Remove background image for tablet and smaller screens */
    }

        .container {
            margin-left: 20px;
            margin-right: 20px;
        }
        .header-text {
            margin-top: 100px;
            max-width: 100%;
            text-align: center;
        }
        .logo {
            width: 80px;
            margin-top: 20px;
        }
        h1 {
            font-size: 18px;
        }
        p {
            font-size: 14px;
        }
        .common-btn {
            padding: 12px 30px;
            font-size: 14px;
        }
        #sideNav {
            width: 200px;
        }
        #menuBtn {
            width: 40px;
            right: 30px;
            top: 20px;
        }
    }
    
    @media (max-width: 480px) {
        #header {
        background-image: none; /* Remove background image for tablet and smaller screens */
    }

        .container {
            margin-left: 10px;
            margin-right: 10px;
        }
        .header-text {
            margin-top: 80px;
        }
        h1 {
            font-size: 16px;
        }
        p {
            font-size: 12px;
            line-height: 16px;
        }
        .common-btn {
            padding: 10px 25px;
            font-size: 12px;
        }
        #sideNav {
            width: 180px;
        }
        #menuBtn {
            width: 35px;
            right: 20px;
            top: 15px;
        }
    }
    </style>
    