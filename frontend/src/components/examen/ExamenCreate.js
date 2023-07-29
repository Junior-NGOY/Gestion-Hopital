import React, { useContext, useEffect, useState } from 'react'
import RdvContext from '../../contexts/RdvContext';
import ExamenContext from '../../contexts/ExamenContext';
import{ NavLink}  from 'react-router-dom';


function ExamenCreate() {
  const { storeExamen, errors} = useContext(ExamenContext);
  const [exam, setExam] = useState({
    partie:'',
    type:'',
  });
 
  const handleSaveExamen =  (event) => {
    event.preventDefault();
    //const user = JSON.stringify (user);
    storeExamen(exam);
  };
  return (
<section class="content-header">
<div className="container-fluid">
  <div className="row mb-2">
  <div className="col-sm-6">
    <h1>Nouvel examen</h1>
  </div>
  <div className="col-sm-6">
    <ol className="breadcrumb float-sm-right">
      <li className="breadcrumb-item"><a href="/">Accueil</a></li>
      <li className="breadcrumb-item active">Nouvel examen</li>
    </ol>
  </div>
  </div>
</div>
<div className="card card-primary"> 
<div className="card-header"><h3 class="card-title">Ajout d'un examen</h3></div>
<div className="card-body">  
  <form  >
  <div className="row">
    <div className="col-md-8">
      <div class="form-group">
        <label htmlFor="nom">Partie</label>
        <input name='prenom' value={exam.partie} onChange={({ target: { value }}) => setExam({...exam, partie: value })}type="text" className="form-control" id=" " placeholder="Entrer la partie" />
      </div>
      <div className="form-group">
        <label htmlFor="">Type </label>
        <select className="form-control" value={exam.type} onChange={({target:{value}}) => setExam({...exam, type: value})}>
          <option>Choisir type examen</option>
          <option value="Clinic">Clinic</option>
          <option value="paraclinic">paraclinic</option>
        </select>
      </div>  
    </div>
  </div>
  </form>
</div>
<div class="card-footer"><button type="submit" onClick={handleSaveExamen} className="btn btn-outline-primary">Enregistrer</button>
    <NavLink to="/examens"><button type="submit" className="btn btn-outline-danger float-right"> 
    Annuler</button></NavLink>
</div>
</div>
</section>
  )
}

export default ExamenCreate