<script setup>
import Lading from './Alerts/Lading.vue'
import { useStore } from 'vuex';
const store = useStore();
import { ref ,onMounted,computed } from "vue";

const isLoading=ref(false)

const showFormAdd =ref(false)
function closeFormAdd() {
    showFormAdd.value=false
}


function FormAddShow() {
  showFormAdd.value=true
}

const Document={
  name:'',
  document:null,
  category_id:'',
  user_id:''
}

const handleFileChange = (event) => {
   Document.document = event.target.files[0];
};

const AddDocument = async () => {
  const formData = new FormData();
  formData.append('name', Document.name);
  formData.append('document', Document.document);
  formData.append('category_id', Document.category_id);
  formData.append('user_id', Document.user_id);

  store.dispatch('AddDocument', formData);
  isLoading.value=true
   showFormAdd.value=false
   setTimeout(() => {
    Document.name=''
    Document.document=''
    Document.category_id=''
    Document.user_id=''
    store.dispatch('getDocuments')
     isLoading.value=false
     store.commit('setMessage','')
     store.commit('setmessageErreur','')
   }, 2000);
};


function deleteDocument(id) {
   store.dispatch('deleteDocument',id)
   isLoading.value=true
   setTimeout(() => {
    store.dispatch('getDocuments')
     isLoading.value=false
     store.commit('setMessage','')
     store.commit('setmessageErreur','')
   }, 2000);
}

onMounted(() => {
  store.dispatch('getCategorie')
  store.dispatch('getUsers')
  store.dispatch('getDocuments')
})

const Users=computed(()=>store.getters.getUsers)
const Categories=computed(()=>store.getters.getCategories)
const Documents=computed(()=>store.getters.getDocuments)
</script>
<template>
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div class="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <a href="/dashboard"><i class="fa-solid fa-arrow-right rotate-180 mb-3 font-bold text-lg"></i></a>
        
        <div class="flex justify-between">
          <h1 class="text-xl font-bold">Gestion Les Documents</h1>
          <button @click="FormAddShow" class="flex items-center text-white bg-[#f97c92] hover:bg-[#f67a88] focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-4 py-2">
            <span class="material-symbols-outlined mr-1">Add</span>
            Document
          </button>
        </div>
      </div>
  
      <!-- Table Data -->
      

      <div class="w-4/5 border-2 overflow-x-auto shadow-md sm:rounded-lg flex justify-center ml-auto mr-auto mt-6">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                  Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody class="bg-[#f97c92]">
            <tr v-for="Document in Documents" :key="Document.id" class="odd:bg-[#f97c92] even:bg-white border-b border-gray-300">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                   {{Document.name}}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                   {{Document.category.name}}
                </th>
                <td class="px-6 py-4">
                     <a :href="'http://127.0.0.1:8000/storage/'+Document.path" target="_blank"><button  type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Voir</button></a>
                     <button @click="deleteDocument(Document.id)"  type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
                </td>
            </tr>

        </tbody>
    </table>
</div>




  
      <!-- Add  Modal -->
      <div v-if="showFormAdd" class="w-full h-screen bg-black/60 z-50 fixed top-0" >
        <div class="flex items-center justify-center min-h-screen px-4 text-center">
          <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-lg" @click.stop>
            <div class="bg-white p-6">
              <h3 class="text-lg font-medium text-gray-900">Add Document</h3>
              <div class="flex flex-col gap-2">
                <label>Title</label>
                <input v-model="Document.name" class="border px-2 py-1 w-full" />
                <label>Category</label>
                <select v-model="Document.category_id" name="" id="" class="border px-2 py-1 w-full text-slate-800">
                  <option v-for="Categorie in Categories" :key="Categorie.id" :value="Categorie.id">{{Categorie.name}}</option>
                </select>
                <label>User</label>
                <select v-model="Document.user_id" name="" id="" class="border px-2 py-1 w-full text-slate-800">
                  <option v-for="User in Users" :key="User.id" :value="User.id">{{User.name}}</option>
                </select>
                <label>Fichier</label>
                <input @change="handleFileChange" class="border px-2 py-1 w-full" type="file" />
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 flex flex-row-reverse">
              <button @click="AddDocument" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 shadow-sm hover:bg-teal-700">Add</button>
              <button @click="closeFormAdd" class="inline-flex justify-center py-2 px-4 border mr-auto text-sm font-medium rounded-md text-gray-900 bg-white shadow-sm hover:bg-gray-100">Cancel</button>
            </div>
          </div>
        </div>
      </div>
  
    </div>
    <Lading v-show="isLoading"/>
  </template>
  