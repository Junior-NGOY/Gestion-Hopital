import { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TerrainContext = createContext();
axios.defaults.baseURL='http://127.0.0.1:8000/api/';//lien vers le backend

export const TerrainProvider = ({children}) =>{
  
    //const [patients, setPatients]=useState([]);
    const [terrains, setTerrains]=useState([]);
    const [terrain, setTerrain]=useState([]);
    const [errors, setErrors]=useState([]);
    const navigate = useNavigate();
   
    const storeTerrain = async (data)=>{
        try {
            //console.log(data);
            await axios.post('terrains',data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
            console.log("Terrain ajouté avec succès");
                navigate('/terrains');
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
        const apiTerrains = await axios.get('terrains');
        setTerrains(apiTerrains.data.data);
    };
    const updateTerrain = async (data)=> {
        try {
            console.log(data)
            await axios.put('terrains/'+terrain.id, data,{
                headers: { "Content-Type": "aplication/json" },
              }).then(function (resp) {
                console.log(resp.data);
                console.log("Terrain modifié avec succès");
                navigate('/terrains');
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
        setTerrains(apiTerrains.data.data);
    };
   
    async function getTerrains(){
        try {
            const apiTerrains = await axios.get('terrains');
            //console.log("Ok")
            setTerrains(apiTerrains.data.data);
        } catch (error) {
            console.error(error.response.data); 
        }
    };
    const getTerrain = async (id)=> {
        try {
            const response = await axios.get('terrains/' + id);
            const apiTerrain=response.data.data
           // const apiUser=response.data
            console.log(apiTerrain)
            setTerrain(apiTerrain);
        } catch (error) {
            
        }
    };
    const deleteTerrain = async (id)=> {
        try {
            if(!window.confirm("Voulez-vous supprimer user ?")){
                return;
            }
            await axios.delete('terrains/' + id);
            navigate('/terrains');
            console.log("c'est fait ....ok")
            getTerrains();
        } catch (error) {
            console.error(error.response.data);
        }
        
    };
    return  (
    <TerrainContext.Provider 
        value={{terrain,terrains,getTerrain,getTerrains,
             storeTerrain, errors,setErrors, updateTerrain,deleteTerrain}}
    >
        {children}
    </TerrainContext.Provider>)
};
export default  TerrainContext;