import React, { useContext, useEffect, useState } from 'react'
import RdvContext from '../../contexts/RdvContext';
import PatientContext from '../../contexts/PatientContext';
import{ NavLink}  from 'react-router-dom';
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import TimeInput from "react-widgets/TimeInput";
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

function RendezVousCreate() {
  const { storeRdv, errors} = useContext(RdvContext);
  const { getPatients, patients} = useContext(PatientContext);
  const [rdv, setRdv] = useState({
    dateRDV:'01/01/2000',
    heureRDV:'00:00',
    type:'type',
    user_id:7,
    patient_id:0,
  });
  useEffect(()=>{
    getPatients();
  }, [])
  const handleSaveRdv =  (event) => {
    event.preventDefault();
    //const user = JSON.stringify (user);
    storeRdv(rdv);
  };
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
<div className="card-header"><h3 class="card-title">Ajout d'un rendez-vous</h3></div>
<div className="card-body">  
  <form  >
  <div className="row">
    <div className="col-md-6">
      <div class="form-group">
        <label htmlFor="nom">Date Rendez-vous</label>
        <input name='prenom' value={rdv.dateRDV} onChange={({ target: { value }}) => setRdv({...rdv, dateRDV: value })}type="date" className="form-control" id=" " placeholder="Entre nom" />
      </div>
      <div class="form-group">
        <label htmlFor="nom">Heure du rendez-vous {rdv.heureRDV} </label>
        <input name='nom'  value={rdv.heureRDV} onChange={({ target: { value }}) => setRdv({...rdv, heureRDV: value })} type="text" className="form-control" id=" " placeholder="Entre nom" />
      </div>
      <div className="form-group">
        <label htmlFor="">Type de rendez-vous </label>
        <select className="form-control" value={rdv.type} onChange={({target:{value}}) => setRdv({...rdv, type: value})}>
          <option>Choisir type rendez-vous</option>
          <option value="Consultation">Consultation</option>
          <option value="Controle">Controle</option>
        </select>
      </div>  
       Current Value: <strong>{rdv.patient_id}</strong>
       <DropdownList
        dataKey="id"
        //textField="nom" afficher rien le nom dans le combobox
        textField= {item => typeof item === 'string' ? item : item.nom + ' ' + item.prenom}
        filter='contains' //filtrer le contenu
        groupBy='categorie'
       // textField="nom"
        value={rdv.patient}
        //onChange={(nextValue) => setValue(nextValue.id)}
       // onChange={({target:{value}}) => setRdv({...rdv, patient: value})}
        onChange={({ id }) => setRdv({...rdv, patient_id: id})}
        data={patients}
      />
    </div>
  </div>
  </form>
</div>
<div class="card-footer"><button type="submit" onClick={handleSaveRdv} className="btn btn-outline-primary">Enregistrer</button>
    <NavLink to="/rdvs"><button type="submit" className="btn btn-outline-danger float-right"> 
    Annuler</button></NavLink>
</div>
</div>
</section>
  )
}

export default RendezVousCreate