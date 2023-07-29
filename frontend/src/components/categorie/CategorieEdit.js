import React, { useContext, useEffect, useState } from 'react'
import CategorieContext from '../../contexts/CategorieContext';
import { useParams, NavLink } from 'react-router-dom';

function CategorieEdit() {
  const { updateCategorie, getCategorie, categorie, errors} = useContext(CategorieContext);
  const { id } = useParams();

  const [category, setCategory] = useState({
    libelle:'libellé',
  });

  const handleUpdateCategorie =  (event) => {
    event.preventDefault();
    const cat  = JSON.stringify (
      { 
       id,
       libelle:category.libelle,
    }
    
    );
    console.log(cat);
    updateCategorie(cat);
  };
  useEffect(() => {
    getCategorie(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(()=>{
    setCategory(categorie);
  },[categorie]);
  return (
    <section class="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
      <div className="col-sm-6">
        <h1>Edit categorie</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="/">Accueil</a></li>
          <li className="breadcrumb-item active">Edit categorie</li>
        </ol>
      </div>
      </div>
    </div>
    <div className="card card-primary"> 
    <div className="card-header"><h3 class="card-title">Ajout d'une categorie {id}</h3></div>
    <div className="card-body">  
      <form  >
      <div className="row">
        <div className="col-md-8">
          <div class="form-group">
            <label htmlFor="nom">Libelle</label>
            <input name='prenom' value={category.libelle} onChange={({ target: { value }}) => setCategory({...category, libelle: value })}type="text" className="form-control" id=" " placeholder="Entrer categorie" />
          </div> 
        </div>
      </div>
      </form>
    </div>
    <div class="card-footer"><button type="submit" onClick={handleUpdateCategorie} className="btn btn-outline-primary">Enregistrer</button>
        <NavLink to="/categories"><button type="submit" className="btn btn-outline-danger float-right"> 
        Annuler</button></NavLink>
    </div>
    </div>
    </section>
  )
}

export default CategorieEdit