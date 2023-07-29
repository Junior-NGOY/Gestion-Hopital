import  { useEffect, useContext, React } from 'react';
import ProduitContext from '../../contexts/ProduitContext';
import{ NavLink}  from 'react-router-dom';
import {
  faEdit,
  faPlusCircle,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProduitIndex() {
  const {produits,getProduits,deleteProduit}=useContext(ProduitContext);

  useEffect(()=>{
      getProduits();
  }, [])
  return (
  <>
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Produit</h1> 
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><NavLink href="#">Accueil</NavLink></li>
              <li className="breadcrumb-item active">Produit</li>
            </ol>
          </div>
        </div>
      </div> 
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="card card-primary card-outline">
          <div className="card-header">
            <h3 className="card-title"><NavLink to="/produit/create"><button className='btn btn-outline-info'>
              <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>  Produit</button></NavLink></h3>
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
                <th scope="col">Designation</th>
                <th scope="col">Quantité</th>
                <th scope="col">Seuil</th>
                <th scope="col">Peremption</th>
                <th scope="col">Conditionnement</th>
                <th scope="col">Catégorie</th>
                <th scope="col">Action</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {produits?.map((produit, index)=>{
                return(
                  <tr key={produit.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{produit.designation}</td>
                    <td>{produit.qte}</td>
                    <td>{produit.seuil}</td>
                    <td>{produit.peremption}</td>
                    <td>{produit.conditionnement}</td>
                    <td>{produit.categorie.libelle}</td>
                    <td><NavLink to={`/produit/${produit.id}/edit`} ><button className='btn btn-outline-success btn-sm'>
                      <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                    </button></NavLink></td>   
                    <td><button className='btn btn-outline-danger btn-sm' onClick={() => deleteProduit(produit.id)}>
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

export default ProduitIndex