import  { useEffect, useContext, React } from 'react';
import RdvContext from '../../contexts/RdvContext';
import{ NavLink}  from 'react-router-dom';
import {
  faEdit,
  faPlusCircle,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RendezVousIndex() {
    const {rdvs,getRdvs,deleteRdv}=useContext(RdvContext);

    useEffect(()=>{
        getRdvs();
    }, [getRdvs])
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Rendez-vous</h1> 
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><NavLink href="#">Accueil</NavLink></li>
                <li className="breadcrumb-item active">Rendez-vous</li>
              </ol>
            </div>
          </div>
        </div> 
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title"><NavLink to="/rdv/create"><button className='btn btn-outline-info'>
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>  Rendez-vous</button></NavLink></h3>
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
                  <th scope="col">Date</th>
                  <th scope="col">Heure</th>
                  <th scope="col">Type</th>
                  <th scope="col">Patient</th>
                  <th scope="col">Médecin</th>
                  <th scope="col">Action</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {rdvs?.map((rdv, index)=>{
                  return(
                    <tr key={rdv.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{rdv.dateRDV}</td>
                      <td>{rdv.heureRDV}</td>
                      <td>{rdv.type}</td>
                      <td>{rdv.patient.prenom} {rdv.patient.nom}</td>
                      <td>{rdv.user.prenom}  {rdv.user.nom}</td>
                      <td><NavLink to={`/rdv/${rdv.id}/edit`} ><button className='btn btn-outline-success btn-sm'>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                      </button></NavLink></td>   
                      <td><button className='btn btn-outline-danger btn-sm' onClick={() => deleteRdv(rdv.id)}>
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

export default RendezVousIndex