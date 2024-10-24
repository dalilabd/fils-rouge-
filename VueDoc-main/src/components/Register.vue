<template>
	<body>
	  <div class="container" id="container">
		<div class="form-container sign-in">
		  <form>
			<h1>Register</h1>
      <span class="text-red-500">{{authMessage}}</span>
      <input v-model="user.name" type="name" placeholder="Name" />
			<input v-model="user.email" type="email" placeholder="Email" />
			<input v-model="user.password" type="password" placeholder="Password" />
			<button @click="sinUp" type="button" class="mb-3">Sign In</button>
       <div class="pt-3"><span>Vous avez déjà un compte ?</span>  <a href="/connecter" class="font-semibold">Se connecter</a> </div>
		  </form>
		</div>
		<div class="toggle-container">
		  <div class="toggle">
			<div class="toggle-panel toggle-right">
			  <h1>Welcome</h1>
			</div>
		  </div>
		</div>
	  </div>
	</body>
  </template>
  
  <script setup>
    import { useStore } from 'vuex';
    const store = useStore();
  import { ref, onMounted ,computed } from 'vue';
  const container = ref(null);
  const registerBtn = ref(null);
  const loginBtn = ref(null);
  
  onMounted(() => {
	container.value = document.getElementById('container');
  
	registerBtn.value.addEventListener('click', () => {
	  container.value.classList.add("active");
	});
  
	loginBtn.value.addEventListener('click', () => {
	  container.value.classList.remove("active");
	});
  });

  const user={
    name:'',
    email:'',
    password:"",
    password_confirmation:""
  }
const authMessage=computed(()=>store.state.authMessage)
  function sinUp() {
    store.dispatch('signUp',user)
  }
  </script>
  
  <style scoped>
 

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: #c9d6ff;
  background: linear-gradient(to right, #eddeef, #f97c92);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 90%;
  max-width: 768px; /* Max width for larger screens */
  min-height: 480px;
}

.container p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.container span {
  font-size: 12px;
}

.container a {
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}

.container button {
  background-color: #f97c92;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}

.container button.hidden {
  background-color: transparent;
  border-color: #fff;
}

.container form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px; /* Adjust padding for mobile */
  height: 100%;
}

.container input {
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.active .sign-in {
  transform: translateX(100%);
}

.sign-up {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.social-icons {
  margin: 20px 0;
}

.social-icons a {
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}

.toggle-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}

.container.active .toggle-container {
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}

.toggle {
  background-color: #f97c92;
  height: 100%;
  background: linear-gradient(to right, #c086c8, #f97c92);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.container.active .toggle {
  transform: translateX(50%);
}

.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.toggle-left {
  transform: translateX(-200%);
}

.container.active .toggle-left {
  transform: translateX(0);
}

.toggle-right {
  right: 0;
  transform: translateX(0);
}

.container.active .toggle-right {
  transform: translateX(200%);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .container {
    width: 90%; /* Adjust width for smaller screens */
    border-radius: 15px;
  }

  .container button {
    padding: 10px 30px; /* Adjust button padding for smaller screens */
  }

  .toggle-panel {
    padding: 0 15px; /* Adjust padding for toggle panels */
  }

  .social-icons a {
    width: 35px; /* Smaller social icons */
    height: 35px;
  }
}

  </style>
  