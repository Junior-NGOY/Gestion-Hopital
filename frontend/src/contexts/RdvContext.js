import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const RdvContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const RdvProvider = ({children}) => {
    const [patients, setPatients]=useState([]);
    const [users, setUsers]=useState([]);
    const [rdvs, setRdvs]=useState([]);
    const [user, setUser]=useState([]);
    const [errors, setErrors]=useState([]);
    const navigate = useNavigate();
   
    const storeUser = async (data)=>{
        try {
            //console.log(data);
            await axios.post('users',data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
            console.log("User ajouté avec succès");
                navigate('/users');
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
        const apiUsers = await axios.get('users');
        setUsers(apiUsers.data.data);
    };
    const updateUser = async (data)=> {
        try {
            console.log(data)
            await axios.put('users/'+user.id, data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
                console.log(resp.data);
                navigate('/users');
              })
              .catch(function (err) {
                console.error(err.response.data);
              });
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
        const apiUsers = await axios.get('users');
        setPatients(apiUsers.data.data);
    };
   
    const getRdvs = async () =>{
        try {
            console.log("Ok je suis devant la requete")
        } catch (error) {
            
        }
    }
    
    async function getRdvss(){
        try {
            const apiRdvs = await axios.get('rdvs');
             setRdvs(apiRdvs.data.data);
        } catch (error) {
            console.error(error.response.data); 
        }
    };
    const getUser = async (id)=> {
        try {
            const response = await axios.get('users/' + id);
            const apiUser=response.data.data
           // const apiUser=response.data
            console.log(apiUser)
            setUser(apiUser);
        } catch (error) {
            
        }
       
    };
    const deleteUser = async (id)=> {
        try {
            if(!window.confirm("Voulez-vous supprimer user ?")){
                return;
            }
            await axios.delete('users/' + id);
            navigate('/users');
            console.log("c'est fait ....ok")
            getRdvs();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <RdvContext.Provider 
        value={{user,rdvs,getUser,getRdvs,
             storeUser, errors,setErrors, updateUser,deleteUser}}
    >
        {children}
    </RdvContext.Provider>)
};
export default  RdvContext;