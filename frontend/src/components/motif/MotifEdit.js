import React, { useContext, useEffect, useState } from 'react'
import MotifContext from '../../contexts/MotifContext';
import { useParams, NavLink } from 'react-router-dom';

function MotifEdit() {
  const { updateMotif, getMotif, motif, errors} = useContext(MotifContext);
  const { id } = useParams();

  const [raison, setRaison] = useState({
    libelle:'libellé',
  });

  const handleUpdateMotif =  (event) => {
    event.preventDefault();
    const mot  = JSON.stringify (
      { 
       id,
       libelle:raison.libelle,
    }
    
    );
    console.log(mot);
    updateMotif(mot);
  };
  useEffect(() => {
    getMotif(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(()=>{
    setRaison(motif);
  },[motif]);
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
          <li className="breadcrumb-item active">Edit Motif</li>
        </ol>
      </div>
      </div>
    </div>
    <div className="card card-primary"> 
    <div className="card-header"><h3 class="card-title">Ajout d'un motif {id}</h3></div>
    <div className="card-body">  
      <form  >
      <div className="row">
        <div className="col-md-8">
          <div class="form-group">
            <label htmlFor="nom">Libelle</label>
            <input name='prenom' value={raison.libelle} onChange={({ target: { value }}) => setRaison({...raison, libelle: value })}type="text" className="form-control" id=" " placeholder="Entrer categorie" />
          </div> 
        </div>
      </div>
      </form>
    </div>
    <div class="card-footer"><button type="submit" onClick={handleUpdateMotif} className="btn btn-outline-primary">Enregistrer</button>
        <NavLink to="/motifs"><button type="submit" className="btn btn-outline-danger float-right"> 
        Annuler</button></NavLink>
    </div>
    </div>
    </section>
  )
}

export default MotifEdit