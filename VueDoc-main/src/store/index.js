import { createStore } from 'vuex';
import axios from 'axios';
const url='http://127.0.0.1:8000/api';
const store = createStore({
  state() {
    return {
      user:[],
      authMessage:'',
      Message:'',
      messageErreur:'',
      permissions:'',
      roles:'',
      Categories:'',
      Users:'',
      Documents:''
    };
  },
  mutations: {
    setAuthForm(state,value){
      state.user=value
    },
    setAuth(state,value){
      state.authMessage=value
    },
    setMessage(state,value){
       state.Message=value
    },
    setmessageErreur(state,value){
       state.messageErreur=value
    },
    setpermissions(state,value){
       state.permissions=value
    },
    setroles(state,value){
      state.roles=value
    },
    setCategories(state,value){
      state.Categories=value
    },
    setUsers(state,value){
      state.Users=value
    },
    setDocuments(state,value){
      state.Documents=value
    }
  },
  actions: {
     //sign up 
     async signUp(context,user){
        user.password_confirmation=user.password
      try {
        const response = await axios.post(url+'/register',user);
        sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('permissions', response.data.permissions);
        sessionStorage.setItem('roles', response.data.roles);
        sessionStorage.setItem('name_user', response.data.name_user);
        window.location.replace('/dashboard')
      } catch (error) {
          let errorMessage = "Une erreur s'est produite lors de la création du compte. Veuillez réessayer.";
          if (error.response && error.response.data && error.response.data.message) {
              errorMessage = error.response.data.message;
          } else if (error.response && error.response.data && typeof error.response.data === 'object') {
              errorMessage = Object.values(error.response.data).join(', ');
          }
          context.commit('setAuth',errorMessage );
      }
      },
      // sign in
      async signIn(context,user){
        try {
          const response = await axios.post(url+'/login',user);
          sessionStorage.setItem('token', response.data.token);
        sessionStorage.setItem('permissions', response.data.permissions);
        sessionStorage.setItem('roles', response.data.roles);
        sessionStorage.setItem('name_user', response.data.name_user);
        window.location.replace('/dashboard')
        } catch (error) {
            let errorMessage = "L'e-mail ou le mot de passe de l'utilisateur sont incorrects"; 
            context.commit('setAuth',errorMessage );
        }
      },
        // log out
        async logOut(context){
          console.log('ggg');
          
          try{
             await axios.post(url+'/logout',{},
              {
                headers: {
                  'Authorization': `Bearer ${sessionStorage.getItem('token')}`
                }
              }
            )
            sessionStorage.clear();
            localStorage.clear();
            window.location.replace('/');
  
          }catch(erreur){
            console.log(erreur);
          }
    },
    // add permission
    async AddPermission(context,name){
      console.log(name);
      
      try {
        await axios.post(url+'/permissions',{name},
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','permissions creee avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },
    //get permissions
    async getPermissions(context){
      try{
         const response=await axios.get(url+'/permissions',{
          headers: {
             'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        })
        context.commit('setpermissions',response.data);
    }catch(erreur){
        console.log(erreur); 
    }
    },
    // delete permission
    async deletePermission(context,id){
      try {
        await axios.delete(url+'/permissions/'+id,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','supprimer avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },
    // Edit permission
    async EditPermission(context,Permission){
      try {
        await axios.put(url+'/permissions/'+Permission.id,Permission,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','modifier avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },

    //roles --------------------------------------------------

    // add roles
    async AddRoles(context,role){
      try {
        await axios.post(url+'/roles',role,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','roles creee avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },
    //get roles
    async getRoles(context){
      try{
         const response=await axios.get(url+'/roles',{
          headers: {
             'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        })
        context.commit('setroles',response.data);
    }catch(erreur){
        console.log(erreur); 
    }
    },
    // delete roles
    async deleteRoles(context,id){
      try {
        await axios.delete(url+'/roles/'+id,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','roles avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },
    // Edit roles
    async EditRoles(context,roles){
      try {
        await axios.put(url+'/roles/'+roles.id,roles,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','modifier roles avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },


    //categories --------------------------------------------------

    // add categorie
    async AddCategorie(context,name){
      try {
        await axios.post(url+'/categories',{name},
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','Categorie creee avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },
    //get categorie
    async getCategorie(context){
      try{
         const response=await axios.get(url+'/categories',{
          headers: {
             'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        })
        context.commit('setCategories',response.data);
    }catch(erreur){
        console.log(erreur); 
    }
    },
    // delete categories
    async deleteCategorie(context,id){
      try {
        await axios.delete(url+'/categories/'+id,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','categorie avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },
    // Edit categories
    async EditCategories(context,categorie){
      try {
        await axios.put(url+'/categories/'+categorie.id,categorie,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','modifier categorie avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },


    //Users --------------------------------------------------

    // add User
    async AddUser(context,user){
      user.password_confirmation=user.password
      try {
        await axios.post(url+'/users',user,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','users creee avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },
    //get users
    async getUsers(context){
      try{
         const response=await axios.get(url+'/users',{
          headers: {
             'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        })
        context.commit('setUsers',response.data);
    }catch(erreur){
        console.log(erreur); 
    }
    },
    // delete users
    async deleteUsers(context,id){
      try {
        await axios.delete(url+'/users/'+id,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','users delete avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },


    //documents --------------------------------------------------

    // add Document
    async AddDocument(context,document){
      try {
        await axios.post(url+'/documents',document,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','document creee avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },
    //get documents
    async getDocuments(context){
      try{
         const response=await axios.get(url+'/documents',{
          headers: {
             'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          }
        })
        context.commit('setDocuments',response.data);
    }catch(erreur){
        console.log(erreur); 
    }
    },
    // delete document
    async deleteDocument(context,id){
      try {
        await axios.delete(url+'/documents/'+id,
          {
            headers: {
              'Authorization': `Bearer ${sessionStorage.getItem('token')}`
            }
          }
        )
          context.commit('setMessage','document delete avec succes' );
      } catch (error) {
          context.commit('setmessageErreur','Une erreur s\'est produite, réessayez' );
      }
    },

  },
  getters: {
    getMessage(state){
      return state.Message
    },
    getmessageErreur(state){
      return state.messageErreur
    },
    getpermissions(state){
      return state.permissions
    },
    getroles(state){
      return state.roles
    },
    getCategories(state){
     return state.Categories
    },
    getUsers(state){
       return state.Users
    },
    getDocuments(state){
      return state.Documents
    }
  },
});

export default store;
