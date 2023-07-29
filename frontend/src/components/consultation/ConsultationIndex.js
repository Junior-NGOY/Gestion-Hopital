import  { useEffect, useContext, React } from 'react';
import ConsultationContext from '../../contexts/ConsultationContext';
import{ NavLink}  from 'react-router-dom';
import {
  faEdit,
  faPrint,
  faPlusCircle,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ConsultationIndex() {
    const {consultations,getConsultations,deleteConsultation}=useContext(ConsultationContext);

    useEffect(()=>{
        getConsultations();
    }, [])
  return (
    <>
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Consultation</h1> 
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><NavLink href="#">Accueil</NavLink></li>
              <li className="breadcrumb-item active">Consultation</li>
            </ol>
          </div>
        </div>
      </div> 
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="card card-primary card-outline">
          <div className="card-header">
            <h3 className="card-title"><NavLink to="/consultation/create"><button className='btn btn-outline-info'>
              <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>  Consultation</button></NavLink></h3>
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
                <th scope="col">Patient</th>
                <th scope="col">Motif</th>
                <th scope="col">Taille</th>
                <th scope="col">Poids</th>
                <th scope="col">Température</th>
                <th scope="col">Glycémie</th>
                <th scope="col">Choléstérole</th>
                <th scope="col">Structure</th>
                <th scope="col">Médecin</th>
                <th scope="col">Action</th>
                <th scope="col">Action</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {consultations?.map((consultation, index)=>{
                return(
                  <tr key={consultation.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{consultation.patient_id}</td>
                    <td>{consultation.motif_id}</td>
                    <td>{consultation.taille}cm</td>
                    <td>{consultation.poids}g</td>
                    <td>{consultation.temperature}</td>
                    <td>{consultation.glycemie}</td>
                    <td>{consultation.cholesterole}</td>
                    <td>{consultation.structure.nom}</td>
                    <td>{consultation.user.prenom}</td>
                    <td><NavLink to={`/consultation/${consultation.id}/edit`} ><button className='btn btn-outline-info btn-sm'>
                      <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon>
                    </button></NavLink></td>   
                    <td><NavLink to={`/consultation/${consultation.id}/edit`} ><button className='btn btn-outline-success btn-sm'>
                      <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                    </button></NavLink></td>   
                    <td><button className='btn btn-outline-danger btn-sm' onClick={() => deleteConsultation(consultation.id)}>
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

export default ConsultationIndex