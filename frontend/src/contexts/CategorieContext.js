import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CategorieContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const CategorieProvider = ({children}) =>{
  
    //const [patients, setPatients]=useState([]);
    const [categories, setCategories]=useState([]);
    const [categorie, setCategorie]=useState([]);
    const [errors, setErrors]=useState([]);
    const navigate = useNavigate();
   
    const storeCategorie = async (data)=>{
        try {
            //console.log(data);
            await axios.post('categories',data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
            console.log("Catégorie ajouté avec succès");
                navigate('/categories');
              })
              .catch(function (err) {
                console.log(err.response.errors);
              });
         
        } catch (e) {
           // if(e.response.status === 422){
               //     setErrors(e.response.data.errors)
               // console.log(e.response.data.errors)
               // }
               console.log(e.response)
            }
        const apiCategories = await axios.get('categories');
        setCategories(apiCategories.data.data);
    };
    const updateCategorie = async (data)=> {
        try {
            console.log(data)
            await axios.put('categories/'+categorie.id, data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
                console.log(resp.data);
                console.log("Catégorie modifié avec succès");
                navigate('/categories');
              })
              .catch(function (err) {
                console.error(err.response.data);
              });
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
        const apiTerrains = await axios.get('terrains');
        setCategories(apiTerrains.data.data);
    };
   
    async function getCategories(){
        try {
            const apiCategories = await axios.get('categories');
            //console.log("Ok")
            setCategories(apiCategories.data.data);
        } catch (error) {
            console.error(error.response.data); 
        }
    };
    const getCategorie = async (id)=> {
        try {
            const response = await axios.get('categories/' + id);
            const apiCategorie=response.data.data
           // const apiUser=response.data
            console.log(apiCategorie)
            setCategorie(apiCategorie);
        } catch (error) {
            
        }
    };
    const deleteCategorie = async (id)=> {
        try {
            if(!window.confirm("Voulez-vous supprimer cette catégorie ?")){
                return;
            }
            await axios.delete('categories/' + id);
            navigate('/categories');
            console.log("c'est fait ....ok")
            getCategories();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <CategorieContext.Provider 
        value={{categorie,categories,getCategorie,getCategories,
             storeCategorie, errors,setErrors, updateCategorie,deleteCategorie}}
    >
        {children}
    </CategorieContext.Provider>)
};
export default  CategorieContext;