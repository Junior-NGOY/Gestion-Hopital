import React, { useContext, useState } from 'react'
import CategorieContext from '../../contexts/CategorieContext';

import{ NavLink}  from 'react-router-dom';

function CategorieCreate() {
  const { storeCategorie, errors} = useContext(CategorieContext);
  const [category, setCategory] = useState({
    libelle:'',
  });
 
  const handleSaveCategory =  (event) => {
    event.preventDefault();
    //const user = JSON.stringify (user);
    storeCategorie(category);
  };
  return (
    <section class="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
      <div className="col-sm-6">
        <h1>Nouvelle catégorie</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="/">Accueil</a></li>
          <li className="breadcrumb-item active">Nouvelle catégorie</li>
        </ol>
      </div>
      </div>
    </div>
    <div className="card card-primary"> 
    <div className="card-header"><h3 class="card-title">Ajout d'une catégorie</h3></div>
    <div className="card-body">  
      <form  >
      <div className="row">
        <div className="col-md-8">
          <div class="form-group">
            <label htmlFor="libelle">Partie</label>
            <input name='libelle' value={category.libelle} onChange={({ target: { value }}) => setCategory({...category, libelle: value })}type="text" className="form-control" id=" " placeholder="Entrer libellé" />
          </div> 
        </div>
      </div>
      </form>
    </div>
    <div class="card-footer"><button type="submit" onClick={handleSaveCategory} className="btn btn-outline-primary">Enregistrer</button>
        <NavLink to="/categories"><button type="submit" className="btn btn-outline-danger float-right"> 
        Annuler</button></NavLink>
    </div>
    </div>
    </section>
  )
}

export default CategorieCreate