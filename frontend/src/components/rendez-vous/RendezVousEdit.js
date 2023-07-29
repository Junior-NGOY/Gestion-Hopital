import React, { useContext, useEffect, useState } from 'react';
import RdvContext from '../../contexts/RdvContext';
import { NavLink, useParams } from 'react-router-dom';
import DropdownList from "react-widgets/DropdownList";
import PatientContext from '../../contexts/PatientContext';

function RendezVousEdit() {
  const { updateRdv, getRdv, rdv, errors} = useContext(RdvContext);
  const { getPatients, patients} = useContext(PatientContext);
  const { id } = useParams();
  const handleUpdateRdv =  (event) => {
    event.preventDefault();
    const rendez  = JSON.stringify (
      { 
       id,
       dateRDV:rendezvous.dateRDV, 
       heureRDV:rendezvous.heureRDV, 
       type:rendezvous.type, 
       patient_id:rendezvous.patient_id, 
       user_id:rendezvous.user_id, 
    }
    
    );
    //console.log(patient);
    updateRdv(rendez);
  };
  const [rendezvous, setRendezvous] = useState({
    dateRDV:'',
    heureRDV:'',
    type:'',
    patient_id:0,
    user_id:7,
  });
  useEffect(()=>{
    getPatients();
  }, [])
  useEffect(() => {
    getRdv(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(()=>{
    setRendezvous(rdv);
  },[rdv])
  return (
<section class="content-header">
<div className="container-fluid">
  <div className="row mb-2">
  <div className="col-sm-6">
    <h1>Nouveau rendez-vous</h1>
  </div>
  <div className="col-sm-6">
    <ol className="breadcrumb float-sm-right">
      <li className="breadcrumb-item"><a href="/">Accueil</a></li>
      <li className="breadcrumb-item active">Nouveau rendez-vous</li>
    </ol>
  </div>
  </div>
</div>
<div className="card card-primary"> 
<div className="card-header"><h3 class="card-title">Ajout d'un rendez-vous {id}</h3></div>
<div className="card-body">  
  <form  >
  <div className="row">
    <div className="col-md-6">
      <div class="form-group">
        <label htmlFor="nom">Date Rendez-vous</label>
        <input name='prenom' value={rendezvous.dateRDV} onChange={({ target: { value }}) => setRendezvous({...rendezvous, dateRDV: value })}type="date" className="form-control" id=" " placeholder="Entre nom" />
      </div>
      <div class="form-group">
        <label htmlFor="nom">Heure du rendez-vous {rendezvous.heureRDV} </label>
        <input name='nom'  value={rendezvous.heureRDV} onChange={({ target: { value }}) => setRendezvous({...rendezvous, heureRDV: value })} type="text" className="form-control" id=" " placeholder="Entre nom" />
      </div>
      <div className="form-group">
        <label htmlFor="">Type de rendez-vous </label>
        <select className="form-control" value={rendezvous.type} onChange={({target:{value}}) => setRendezvous({...rendezvous, type: value})}>
          <option>Choisir type rendez-vous</option>
          <option value="Consultation">Consultation</option>
          <option value="Controle">Controle</option>
        </select>
      </div>  
       Current Value: <strong>{rendezvous.patient_id}</strong>
       <DropdownList
        dataKey="id"
        //textField="nom" afficher rien le nom dans le combobox
        textField= {item => typeof item === 'string' ? item : item.nom + ' ' + item.prenom}
        filter='contains' //filtrer le contenu
        groupBy='categorie'
       // textField="nom"
        value={rendezvous.patient_id}
        //onChange={(nextValue) => setValue(nextValue.id)}
       // onChange={({target:{value}}) => setRdv({...rdv, patient: value})}
        onChange={({ id }) => setRendezvous({...rendezvous, patient_id: id})}
        data={patients}
      />
    </div>
  </div>
  </form>
</div>
<div class="card-footer"><button type="submit" onClick={handleUpdateRdv} className="btn btn-outline-primary">Enregistrer</button>
    <NavLink to="/rdvs"><button type="submit" className="btn btn-outline-danger float-right"> 
    Annuler</button></NavLink>
</div>
</div>
</section>
  )
}

export default RendezVousEdit