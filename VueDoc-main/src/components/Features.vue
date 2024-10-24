<template>
    <section id="features">
  <div class="feature-row">
    <div class="feature-col">
      <img src="../assets/images/pic-1.png" alt="Access Anywhere">
      <h4>Access Anywhere</h4>
      <p>Switch between your computer, tablet, or mobile device with ease.</p>
    </div>
    <div class="feature-col">
      <img src="../assets/images/pic-2.png" alt="Secure Storage">
      <h4>Secure Storage</h4>
      <p>Your documents are stored securely with the latest encryption technology.</p>
    </div>
    <div class="feature-col">
      <img src="../assets/images/pic-3.png" alt="Collaboration Tools">
      <h4>Collaboration Tools</h4>
      <p>Collaborate with your team in real time, no matter where you are.</p>
    </div>
  </div>
  <div class="feature-btn">
    <button class="common-btn">Start Now</button>
  </div>
</section>

</template>

<script setup>

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}
#features{
    padding-top: 50px;
    padding-bottom: 50px;
}
.feature-row{
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;  
  flex-wrap: wrap;
}
.feature-col{
    flex-basis: 25%;
    text-align: center;
}
.feature-col img{
    width: 100px;
}
.feature-col h4{
    margin-bottom: 15px;
    font-size: 20px;
    font-weight: 400;
}
.feature-btn{
    margin:80px auto 0 ;
    display: flex;
    align-items: flex-end;
    justify-content: center;
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

</style>