import  { useEffect, useContext, React } from 'react';
import ExamenContext from '../../contexts/ExamenContext';
import{ NavLink}  from 'react-router-dom';
import {
  faEdit,
  faPlusCircle,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExamenIndex() {
    const {examens,getExamens,deleteExamen} = useContext(ExamenContext);
  useEffect(()=>{
    getExamens();
  }, [])
  return (
    <div>
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Examens</h1> 
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><NavLink href="#">Accueil</NavLink></li>
                <li className="breadcrumb-item active">Examens</li>
              </ol>
            </div>
          </div>
        </div> 
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title"><NavLink to="/examen/create"><button className='btn btn-outline-info'>
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>  Examen</button></NavLink></h3>
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
                  <th scope="col">Partie</th>
                  <th scope="col">Type</th>
                  <th scope="col">Action</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {examens?.map((examen, index)=>{
                  return(
                    <tr key={examen.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{examen.partie}</td>
                      <td>{examen.type}</td>
                      <td><NavLink to={`/examen/${examen.id}/edit`} ><button className='btn btn-outline-success btn-sm'>
                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                      </button></NavLink></td>   
                      <td><button className='btn btn-outline-danger btn-sm' onClick={() => deleteExamen(examen.id)}>
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

export default ExamenIndex