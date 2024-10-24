<template>
    <section id="services">
        <div class="container service-row">
            <!-- Colonne gauche : Texte de présentation des services -->
            <div class="service-left-col">
                <div class="service-text">
                    <h1>Browse Our Top Services</h1>
                    <p>Découvrez nos services les plus demandés, spécialement conçus pour répondre à vos besoins professionnels et personnels. Nous offrons une large gamme de solutions pour vous accompagner dans vos projets.</p>
                
                    <!-- Bouton d'appel à l'action -->
                    <button class="common-btn">Explore Now</button>
                </div>
            </div>
            
            <!-- Colonne droite : Image illustrant les services -->
            <div class="service-right-col">
                <img src="../assets/images/course.png" alt="Illustration des services">
            </div>
        </div>
    </section>
    </template>
    
    <script setup>
    // Il n'y a pas de script pour cette partie actuellement, tout semble correct
    </script>
    
    <style scoped>
    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box; /* Ajoute cette ligne pour éviter des soucis de mise en page */
    }
    
    #services {
        padding: 100px 0;
        /* background-color: #f9f9f9; Ajout d'une couleur de fond légère pour contraster */
    }
    
    .service-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .service-right-col {
        flex-basis: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .service-right-col img {
        max-width: 90%; /* Limiter la taille de l'image pour éviter qu'elle ne déborde */
        height: auto;
        transition: transform 0.3s ease; /* Ajoute une transition pour l'animation */
    }
    
    .service-left-col {
        flex-basis: 50%;
    }
    
    .service-text {
        max-width: 500px;
        margin-right: 20px;
    }
    
    h1 {
        color: rgb(174, 95, 135);
        font-size: 36px; /* Taille de police ajustée pour un meilleur affichage */
        margin-bottom: 20px;
    }
    
    p {
        color: #555;
        font-size: 18px;
        line-height: 1.6;
    }
    
    .service-text button {
        margin: 30px 0;
    }
    
    .common-btn {
    padding: 18px 40px;
    background: transparent;
    outline: none;
    border: 2px solid #f97c92;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.4s ease; /* Transition pour l'animation */
    position: relative; /* Nécessaire pour le positionnement de l'effet 3D */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Ombre par défaut */
}

.common-btn:hover {
    background-color: #f97c92; /* Couleur de fond au survol */
    color: white; /* Couleur du texte au survol */
    transform: translateY(8px) rotateZ(360deg); /* Élévation et rotation autour de l'axe Z */
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3); /* Ombre plus prononcée au survol */
}

/* Effet de pulsation */
.common-btn:active {
    transform: scale(0.95); /* Réduction de la taille au clic */
}
    
    /* Animation 3D au survol pour l'image */
    .service-right-col img:hover {
        transform: rotateY(10deg) scale(1.05); /* Rotation 3D et zoom */
    }
    
    /* Responsivité pour petits écrans */
    @media screen and (max-width: 768px) {
        .service-row {
            flex-direction: column;
        }
    
        .service-left-col, .service-right-col {
            flex-basis: 100%;
            text-align: center;
        }
    
        .service-text {
            margin: 0 auto;
        }
    
        .service-right-col img {
            max-width: 80%;
        }
    }
    </style>
    