import React, { useContext, useState } from 'react'
import MotifContext from '../../contexts/MotifContext';
import{ NavLink}  from 'react-router-dom';

function MotifCreate() {
  const { storeMotif, errors} = useContext(MotifContext);
  const [motif, setMotif] = useState({
    libelle:'',
  });
  const handleSaveMotif =  (event) => {
    event.preventDefault();
    //const user = JSON.stringify (user);
    storeMotif(motif);
  };
  return (
    <section class="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
      <div className="col-sm-6">
        <h1>Nouveau Motif</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="/">Accueil</a></li>
          <li className="breadcrumb-item active">Nouvelle motif</li>
        </ol>
      </div>
      </div>
    </div>
    <div className="card card-primary"> 
    <div className="card-header"><h3 class="card-title">Ajout d'une motif</h3></div>
    <div className="card-body">  
      <form  >
      <div className="row">
        <div className="col-md-8">
          <div class="form-group">
            <label htmlFor="libelle">Libellé</label>
            <input name='libelle' value={motif.libelle} onChange={({ target: { value }}) => setMotif({...motif, libelle: value })}type="text" className="form-control" id=" " placeholder="Entrer libellé" />
          </div> 
        </div>
      </div>
      </form>
    </div>
    <div class="card-footer"><button type="submit" onClick={handleSaveMotif} className="btn btn-outline-primary">Enregistrer</button>
        <NavLink to="/motifs"><button type="submit" className="btn btn-outline-danger float-right"> 
        Annuler</button></NavLink>
    </div>
    </div>
    </section>
  )
}

export default MotifCreate