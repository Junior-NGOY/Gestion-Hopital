import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const DetailContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const DetailProvider = ({children}) => {

    const [details, setDetails]=useState([]);
    const [detail, setDetail]=useState([]);
    const [errors, setErrors]=useState([]);
    const navigate = useNavigate();
   
    const storeDetail = async (data)=>{
        try {
            console.log(data);
            await axios.post('details',data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
            console.log("Detail ajouté avec succès");
                navigate('/details');
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
        const apiDetails = await axios.get('details');
        setDetails(apiDetails.data.data);
    };
    const updateDetail = async (data)=> {
        try {
            console.log(data)
            await axios.put('details/'+detail.id, data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
                console.log(resp.data);
                navigate('/details');
              })
              .catch(function (err) {
                console.error(err.response.data);
              });
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
        const apiDetails = await axios.get('details');
        setDetails(apiDetails.data.data);
    };
       
    async function getDetails(){
        try {
            const apiDetails = await axios.get('details');
             setDetails(apiDetails.data.data);
        } catch (error) {
            console.error(error.response.data); 
        }
    };
    const getDetail = async (id)=> {
        try {
            const response = await axios.get('details/' + id);
            const apiDetail=response.data.data
           // const apiUser=response.data
            console.log(apiDetail)
            setDetail(apiDetail);
        } catch (error) {
            
        }
       
    };
    const deleteDetail = async (id)=> {
        try {
            if(!window.confirm("Voulez-vous supprimer ce detail ?")){
                return;
            }
            await axios.delete('details/' + id);
            navigate('/details');
            console.log("c'est fait ....ok")
            getDetails();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <DetailContext.Provider 
        value={{detail,details,getDetail,getDetails,
             storeDetail, errors,setErrors, updateDetail,deleteDetail}}
    >
        {children}
    </DetailContext.Provider>)
};
export default  DetailContext;