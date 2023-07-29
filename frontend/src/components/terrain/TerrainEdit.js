import React, { useContext, useEffect, useState } from 'react'
import TerrainContext from '../../contexts/TerrainContext';
import { useParams, NavLink } from 'react-router-dom';

function TerrainEdit() {
  const { updateTerrain, getTerrain, terrain, errors} = useContext(TerrainContext);
  const { id } = useParams();

  const [t, setT] = useState({
    libelle:'',
  });

  const handleUpdateTerrain =  (event) => {
    event.preventDefault();
    const terr  = JSON.stringify (
      { 
       id,
       libelle:t.libelle,
    }
    
    );
    console.log(terr);
    updateTerrain(terr);
  };
  useEffect(() => {
    getTerrain(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(()=>{
    setT(terrain);
  },[terrain]);
  return (
<section class="content-header">
<div className="container-fluid">
  <div className="row mb-2">
  <div className="col-sm-6">
    <h1>Edit terrain</h1>
  </div>
  <div className="col-sm-6">
    <ol className="breadcrumb float-sm-right">
      <li className="breadcrumb-item"><a href="/">Accueil</a></li>
      <li className="breadcrumb-item active">Edit terrain</li>
    </ol>
  </div>
  </div>
</div>
<div className="card card-primary"> 
<div className="card-header"><h3 class="card-title">Ajout d'un terrain {id}</h3></div>
<div className="card-body">  
  <form  >
  <div className="row">
    <div className="col-md-8">
      <div class="form-group">
        <label htmlFor="nom">Libelle</label>
        <input name='prenom' value={t.libelle} onChange={({ target: { value }}) => setT({...t, libelle: value })}type="text" className="form-control" id=" " placeholder="Entrer libelle" />
      </div> 
    </div>
  </div>
  </form>
</div>
<div class="card-footer"><button type="submit" onClick={handleUpdateTerrain} className="btn btn-outline-primary">Enregistrer</button>
    <NavLink to="/terrains"><button type="submit" className="btn btn-outline-danger float-right"> 
    Annuler</button></NavLink>
</div>
</div>
</section>
  )
}

export default TerrainEdit