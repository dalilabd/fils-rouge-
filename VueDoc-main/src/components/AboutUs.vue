<template>
    <section id="about">
        <div class="about-left-col">
            <img src="../assets/images/about.png" alt="Image à propos de nous">
        </div>
        <div class="about-right-col">
            <div class="about-text">
                <h1>About Us</h1>
                <br>
                <p>
                  Cette plateforme simplifie la gestion et le suivi de vos documents en centralisant leur accès et leur organisation.<br>
                  Vous pouvez facilement consulter, modifier et suivre l'état de vos documents en toute sécurité.
                </p>
                <br>
                <p>
                  Nous offrons une interface conviviale qui vous permet de gérer vos documents de manière efficace. 
                  Grâce à notre technologie avancée, vous pouvez collaborer avec votre équipe en temps réel, 
                  ce qui facilite le partage d'informations et améliore la productivité.
                </p>
            </div>
        </div>
    </section>
    </template>
    
    <script setup>
    // Pas de script spécifique requis pour ce composant
    </script>
    
    <style scoped>
    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box; /* Assure un bon alignement des éléments */
    }
    
    #about {
        padding: 100px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        /* background-color: #f9f9f9; Ajout d'une légère couleur de fond */
    }
    
    .about-left-col {
        flex-basis: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .about-left-col img {
        max-width: 90%; /* Limite la taille de l'image pour éviter qu'elle ne déborde */
        height: auto;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animation au survol */
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Ombre par défaut de l'image */
    }
    
    .about-right-col {
        flex-basis: 50%;
        padding: 20px; /* Ajout d'espace pour une meilleure lisibilité */
    }
    
    .about-text {
        max-width: 600px; /* Limite la largeur du texte pour une meilleure lecture */
    }
    
    h1 {
        font-size: 36px; /* Taille de police ajustée */
        color: rgb(174, 95, 135);
        margin-bottom: 20px;
    }
    
    p {
        font-size: 18px;
        line-height: 1.6;
        color: #555;
        margin-bottom: 20px;
    }
    
    /* Animation 3D au survol de l'image */
    .about-left-col img:hover {
        transform: scale(1.05) rotateY(10deg); /* Zoom et rotation 3D légère */
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3); /* Ombre plus prononcée au survol */
    }
    
    /* Responsivité pour petits écrans */
    @media screen and (max-width: 768px) {
        #about {
            flex-direction: column;
        }
    
        .about-left-col, .about-right-col {
            flex-basis: 100%;
            text-align: center;
        }
    
        .about-left-col img {
            max-width: 80%;
        }
    }
    </style>
    