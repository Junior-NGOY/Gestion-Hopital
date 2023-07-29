import React, { useContext, useState } from 'react'
import TerrainContext from '../../contexts/TerrainContext';

import{ NavLink}  from 'react-router-dom';

function TerrainCreate() {
  const { storeTerrain, errors} = useContext(TerrainContext);
  const [t, setT] = useState({
    libelle:'',
  });
 
  const handleSaveTerrain =  (event) => {
    event.preventDefault();
    //const user = JSON.stringify (user);
    storeTerrain(t);
  };
  return (
    <section class="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
      <div className="col-sm-6">
        <h1>Nouveau terrain</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="/">Accueil</a></li>
          <li className="breadcrumb-item active">Nouveau terrain</li>
        </ol>
      </div>
      </div>
    </div>
    <div className="card card-primary"> 
    <div className="card-header"><h3 class="card-title">Ajout d'un terrain</h3></div>
    <div className="card-body">  
      <form  >
      <div className="row">
        <div className="col-md-8">
          <div class="form-group">
            <label htmlFor="libelle">Partie</label>
            <input name='libelle' value={t.libelle} onChange={({ target: { value }}) => setT({...t, libelle: value })}type="text" className="form-control" id=" " placeholder="Entrer libellé" />
          </div> 
        </div>
      </div>
      </form>
    </div>
    <div class="card-footer"><button type="submit" onClick={handleSaveTerrain} className="btn btn-outline-primary">Enregistrer</button>
        <NavLink to="/terrains"><button type="submit" className="btn btn-outline-danger float-right"> 
        Annuler</button></NavLink>
    </div>
    </div>
    </section>
  )
}

export default TerrainCreate