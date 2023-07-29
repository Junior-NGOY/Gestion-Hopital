import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ConsultationContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const ConsultationProvider = ({children}) => {

    const [consultations, setConsultations]=useState([]);
    const [rdv, setRdv]=useState([]);
    const [terrain, setTerrain]=useState([3,4,5]);
   // let terrains = [3,4,5];
    const [errors, setErrors]=useState([]);
    const navigate = useNavigate();

    const [data, setData] = useState({
        poids: 0,
        temperature: 0,
    })


    const storeConsultation = async (data,terrain)=>{
        try {
            console.log(data);
            console.log(terrain);
            await axios.post('consultations', { terrains:terrain, ...data},{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
            console.log("Consultation ajouté avec succès");
                navigate('/consultations');
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
        const apiConsultations = await axios.get('consultations');
        setConsultations(apiConsultations.data.data);
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
        const apiConsultations = await axios.get('consultations');
        setConsultations(apiConsultations.data.data);
    };
       
    async function getConsultations(){
        try {
            const apiConsultations = await axios.get('consultations');
             setConsultations(apiConsultations.data.data);
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
    const deleteConsultation = async (id)=> {
        try {
            if(!window.confirm("Voulez-vous supprimer cette consultation ?")){
                return;
            }
            await axios.delete('consultations/' + id);
            navigate('/consultations');
            console.log("c'est fait ....ok")
            getConsultations();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <ConsultationContext.Provider 
        value={{data, setData,rdv,consultations,getRdv,getConsultations,
             storeConsultation, errors,setErrors, updateRdv,deleteConsultation}}
    >
        {children}
    </ConsultationContext.Provider>)
};
export default  ConsultationContext;