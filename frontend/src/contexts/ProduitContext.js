import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ProduitContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const ProduitProvider = ({children}) => {

    const [produits, setProduits]=useState([]);
    const [produit, setProduit]=useState([]);
    const [errors, setErrors]=useState([]);
    const navigate = useNavigate();
   
    const storeProduit = async (data)=>{
        try {
            console.log(data);
            await axios.post('produits',data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
            console.log("produit ajouté avec succès");
                navigate('/produits');
              })
              .catch(function (err) {
                console.log(err.response);
              });
         
        } catch (e) {
           // if(e.response.status === 422){
               //     setErrors(e.response.data.errors)
               // console.log(e.response.data.errors)
               // }
               console.log(e.response)
            }
        const apiProduits = await axios.get('produits');
        setProduits(apiProduits.data.data);
    };
    const updateProduit = async (data)=> {
        try {
            console.log(data)
            await axios.put('produits/'+produit.id, data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
                console.log(resp.data);
                navigate('/produits');
              })
              .catch(function (err) {
                console.error(err.response.data);
              });
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
        const apiProduits = await axios.get('rdvs');
        setProduits(apiProduits.data.data);
    };
       
    async function getProduits(){
        try {
            const apiProduits = await axios.get('produits');
             setProduits(apiProduits.data.data);
        } catch (error) {
            console.error(error.response.data); 
        }
    };
    const getProduit = async (id)=> {
        try {
            const response = await axios.get('produits/' + id);
            const apiProduit=response.data.data
           // const apiUser=response.data
            console.log(apiProduit)
            setProduit(apiProduit);
        } catch (error) {
            
        }
       
    };
    const deleteProduit = async (id)=> {
        try {
            if(!window.confirm("Voulez-vous supprimer ce produit ?")){
                return;
            }
            await axios.delete('produits/' + id);
            navigate('/produits');
            console.log("c'est fait ....ok")
            getProduits();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <ProduitContext.Provider 
        value={{produit,produits,getProduit,getProduits,
             storeProduit, errors,setErrors, updateProduit,deleteProduit}}
    >
        {children}
    </ProduitContext.Provider>)
};
export default  ProduitContext;