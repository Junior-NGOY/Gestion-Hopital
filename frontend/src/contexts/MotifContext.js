import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const MotifContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const MotifProvider = ({children}) =>{
  
    //const [patients, setPatients]=useState([]);
    const [motifs, setMotifs]=useState([]);
    const [motif, setMotif]=useState([]);
    const [errors, setErrors]=useState([]);
    const navigate = useNavigate();
   
    const storeMotif = async (data)=>{
        try {
            //console.log(data);
            await axios.post('motifs',data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
            console.log("motif ajouté avec succès");
                navigate('/motifs');
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
        const apiMotifs = await axios.get('motifs');
        setMotifs(apiMotifs.data.data);
    };
    const updateMotif = async (data)=> {
        try {
            console.log(data)
            await axios.put('motifs/'+motif.id, data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
                console.log(resp.data);
                console.log("Motif modifié avec succès");
                navigate('/motifs');
              })
              .catch(function (err) {
                console.error(err.response.data);
              });
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
        const apiMotifs = await axios.get('motifs');
        setMotifs(apiMotifs.data.data);
    };
   
    async function getMotifs(){
        try {
            const apiMotifs = await axios.get('motifs');
            //console.log("Ok")
            setMotifs(apiMotifs.data.data);
        } catch (error) {
            console.error(error.response.data); 
        }
    };
    const getMotif = async (id)=> {
        try {
            const response = await axios.get('motifs/' + id);
            const apiMotif=response.data.data
           // const apiUser=response.data
            console.log(apiMotif)
            setMotif(apiMotif);
        } catch (error) {
            
        }
    };
    const deleteMotif = async (id)=> {
        try {
            if(!window.confirm("Voulez-vous supprimer ce motif ?")){
                return;
            }
            await axios.delete('motifs/' + id);
            navigate('/motifs');
            console.log("c'est fait ....ok")
            getMotifs();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <MotifContext.Provider 
        value={{motif,motifs,getMotif,getMotifs,
             storeMotif, errors,setErrors, updateMotif,deleteMotif}}
    >
        {children}
    </MotifContext.Provider>)
};
export default  MotifContext;