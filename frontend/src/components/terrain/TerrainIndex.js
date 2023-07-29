import  { useEffect, useContext, React } from 'react';
import TerrainContext from '../../contexts/TerrainContext';
import{ NavLink}  from 'react-router-dom';
import {
  faEdit,
  faPlusCircle,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TerrainIndex() {
  const {terrains,getTerrains,deleteTerrain} = useContext(TerrainContext);
  useEffect(()=>{
    getTerrains();
  }, [])
  return (
    <div>
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Terrains</h1> 
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><NavLink href="#">Accueil</NavLink></li>
                <li className="breadcrumb-item active">Terrains</li>
              </ol>
            </div>
          </div>
        </div> 
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title"><NavLink to="/terrain/create"><button className='btn btn-outline-info'>
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>  Terrain</button></NavLink></h3>
              <form  className="row float-right">
                    <div className="col-auto">
                      <input
                        className="form-control"
                        type="text"
                      ></input>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-outline-info">
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                      </button>
                    </div>
            </form>
            </div>  
            <div className="card-body">
           
            <table className="table table-bordered table-hover table-sm">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Libellé</th>
                  <th scope="col">Action</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {terrains?.map((terrain, index)=>{
                  return(
                    <tr key={terrain.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{terrain.libelle}</td>
                      <td><NavLink to={`/terrain/${terrain.id}/edit`} ><button className='btn btn-outline-success btn-sm'>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                      </button></NavLink></td>   
                      <td><button className='btn btn-outline-danger btn-sm' onClick={() => deleteTerrain(terrain.id)}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </button></td>  
                  </tr>
                  )})}
              </tbody>
            </table>
            </div> 
          </div>
        </div> 
      </section>
    </>
    </div>
  )
}

export default TerrainIndex