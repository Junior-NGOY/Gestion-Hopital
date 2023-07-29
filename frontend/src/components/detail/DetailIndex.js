import  { useEffect, useContext, React } from 'react';
import DetailContext from '../../contexts/DetailContext';
import{ NavLink}  from 'react-router-dom';
import {
  faEdit,
  faPlusCircle,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DetailIndex() {
  const {details,getDetails,deleteDetail}=useContext(DetailContext);

  useEffect(()=>{
      getDetails();
  }, [])
  return (
    <>
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Details</h1> 
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><NavLink href="#">Accueil</NavLink></li>
              <li className="breadcrumb-item active">Detail examen</li>
            </ol>
          </div>
        </div>
      </div> 
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="card card-primary card-outline">
          <div className="card-header">
            <h3 className="card-title"><NavLink to="/detail/create"><button className='btn btn-outline-info'>
              <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>  Detail</button></NavLink></h3>
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
                <th scope="col">Detail</th>
                <th scope="col">Examen</th>
                <th scope="col">Type</th>
                <th scope="col">Action</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {details?.map((detail, index)=>{
                return(
                  <tr key={detail.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{detail.detailexam}</td>
                    <td>{detail.examen.partie}</td>
                    <td>{detail.examen.type}</td>
                    <td><NavLink to={`/detail/${detail.id}/edit`} ><button className='btn btn-outline-success btn-sm'>
                      <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                    </button></NavLink></td>   
                    <td><button className='btn btn-outline-danger btn-sm' onClick={() => deleteDetail(detail.id)}>
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

export default DetailIndex