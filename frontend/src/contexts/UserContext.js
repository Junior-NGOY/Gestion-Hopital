import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UserContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const UserProvider = ({children}) =>{
  
   // const [formValues, setFormValues] = useState(initialFom);
    const [patients, setPatients]=useState([]);
    const [users, setUsers]=useState([]);
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
   
    async function getUsers(){
        try {
            const apiUsers = await axios.get('users');
            //console.log("Ok")
            setUsers(apiUsers.data.data);
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
            getUsers();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <UserContext.Provider 
        value={{user,users,getUser,getUsers,
             storeUser, errors,setErrors, updateUser,deleteUser}}
    >
        {children}
    </UserContext.Provider>)
};
export default  UserContext;