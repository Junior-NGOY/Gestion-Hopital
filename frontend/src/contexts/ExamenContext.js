import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ExamenContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const ExamenProvider = ({children}) =>{
  
    //const [patients, setPatients]=useState([]);
    const [examens, setExamens]=useState([]);
    const [examen, setExamen]=useState([]);
    const [errors, setErrors]=useState([]);
    const navigate = useNavigate();
   
    const storeExamen = async (data)=>{
        try {
            //console.log(data);
            await axios.post('examens',data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
            console.log("Examen ajouté avec succès");
                navigate('/examens');
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
        const apiExamens = await axios.get('examens');
        setExamens(apiExamens.data.data);
    };
    const updateExamen = async (data)=> {
        try {
            console.log(data)
            await axios.put('examens/'+examen.id, data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
                console.log(resp.data);
                console.log("Examen modifié avec succès");
                navigate('/examens');
              })
              .catch(function (err) {
                console.error(err.response.data);
              });
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
        const apiExamens = await axios.get('examens');
        setExamens(apiExamens.data.data);
    };
   
    async function getExamens(){
        try {
            const apiExamens = await axios.get('examens');
            //console.log("Ok")
            setExamens(apiExamens.data.data);
        } catch (error) {
            console.error(error.response.data); 
        }
    };
    const getExamen = async (id)=> {
        try {
            const response = await axios.get('examens/' + id);
            const apiExamen=response.data.data
           // const apiUser=response.data
            console.log(apiExamen)
            setExamen(apiExamen);
        } catch (error) {
            
        }
    };
    const deleteExamen = async (id)=> {
        try {
            if(!window.confirm("Voulez-vous supprimer user ?")){
                return;
            }
            await axios.delete('examens/' + id);
            navigate('/examens');
            console.log("c'est fait ....ok")
            getExamens();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <ExamenContext.Provider 
        value={{examen,examens,getExamen,getExamens,
             storeExamen, errors,setErrors, updateExamen,deleteExamen}}
    >
        {children}
    </ExamenContext.Provider>)
};
export default  ExamenContext;