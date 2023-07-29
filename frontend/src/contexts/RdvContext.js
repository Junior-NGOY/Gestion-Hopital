import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const RdvContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const RdvProvider = ({children}) => {

    const [rdvs, setRdvs]=useState([]);
    const [rdv, setRdv]=useState([]);
    const [errors, setErrors]=useState([]);
    const navigate = useNavigate();
   
    const storeRdv = async (data)=>{
        try {
            console.log(data);
            await axios.post('rdvs',data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
            console.log("Rendez-vous ajouté avec succès");
                navigate('/rdvs');
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
        const apiRdvs = await axios.get('rdvs');
        setRdvs(apiRdvs.data.data);
    };
    const updateRdv = async (data)=> {
        try {
            console.log(data)
            await axios.put('rdvs/'+rdv.id, data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
                console.log(resp.data);
                navigate('/rdvs');
              })
              .catch(function (err) {
                console.error(err.response.data);
              });
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
        const apiRdvs = await axios.get('rdvs');
        setRdvs(apiRdvs.data.data);
    };
       
    async function getRdvs(){
        try {
            const apiRdvs = await axios.get('rdvs');
             setRdvs(apiRdvs.data.data);
        } catch (error) {
            console.error(error.response.data); 
        }
    };
    const getRdv = async (id)=> {
        try {
            const response = await axios.get('rdvs/' + id);
            const apiRdv=response.data.data
           // const apiUser=response.data
            console.log(apiRdv)
            setRdv(apiRdv);
        } catch (error) {
            
        }
       
    };
    const deleteRdv = async (id)=> {
        try {
            if(!window.confirm("Voulez-vous supprimer ce rendez-vous ?")){
                return;
            }
            await axios.delete('rdvs/' + id);
            navigate('/rdvs');
            console.log("c'est fait ....ok")
            getRdvs();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <RdvContext.Provider 
        value={{rdv,rdvs,getRdv,getRdvs,
             storeRdv, errors,setErrors, updateRdv,deleteRdv}}
    >
        {children}
    </RdvContext.Provider>)
};
export default  RdvContext;