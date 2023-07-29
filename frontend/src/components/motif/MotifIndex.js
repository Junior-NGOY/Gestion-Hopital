import  { useEffect, useContext, React } from 'react';
import MotifContext from '../../contexts/MotifContext';
import{ NavLink}  from 'react-router-dom';
import {
  faEdit,
  faPlusCircle,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MotifIndex() {
  const {motifs,getMotifs,deleteMotif} = useContext(MotifContext);
  useEffect(()=>{
    getMotifs();
  }, [])
  return (
    <>
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Motifs</h1> 
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><NavLink href="#">Accueil</NavLink></li>
              <li className="breadcrumb-item active">Motifs</li>
            </ol>
          </div>
        </div>
      </div> 
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="card card-primary card-outline">
          <div className="card-header">
            <h3 className="card-title"><NavLink to="/motif/create"><button className='btn btn-outline-info'>
              <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>  Motif</button></NavLink></h3>
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
              {motifs?.map((motif, index)=>{
                return(
                  <tr key={motif.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{motif.libelle}</td>
                    <td><NavLink to={`/motif/${motif.id}/edit`} ><button className='btn btn-outline-success btn-sm'>
                      <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                    </button></NavLink></td>   
                    <td><button className='btn btn-outline-danger btn-sm' onClick={() => deleteMotif(motif.id)}>
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
  )
}

export default MotifIndex