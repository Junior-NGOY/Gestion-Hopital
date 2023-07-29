import React, { useContext, useEffect, useState } from 'react'
import DetailContext from '../../contexts/DetailContext';
import ExamenContext from '../../contexts/ExamenContext';
import{ NavLink}  from 'react-router-dom';
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";


function DetailCreate() {
  const { storeDetail, errors} = useContext(DetailContext);
  const { getExamens, examens} = useContext(ExamenContext);
  const [detail, setDetail] = useState({
    detailexam:'detailexam',
    examen_id:0,
  });
  useEffect(()=>{
    getExamens();
  }, [])
  const handleSaveDetail =  (event) => {
    event.preventDefault();
    //const user = JSON.stringify (user);
    storeDetail(detail);
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
      <li className="breadcrumb-item active">Nouveau Detail</li>
    </ol>
  </div>
  </div>
</div>
<div className="card card-primary"> 
<div className="card-header"><h3 class="card-title">Ajout d'un detail</h3></div>
<div className="card-body">  
  <form  >
  <div className="row">
    <div className="col-md-6">
      <div class="form-group">
        <label htmlFor="detailexam">Detail</label>
        <input name='detailexam' value={detail.detailexam} onChange={({ target: { value }}) => setDetail({...detail, detailexam: value })}type="text" className="form-control" id=" " placeholder="Entre nom" />
      </div> 
       Current Value: <strong>{detail.examen_id}</strong>
       <DropdownList
        dataKey="id"
        //textField="nom" afficher rien le nom dans le combobox
        textField= {item => typeof item === 'string' ? item : item.partie + ' / ' + item.type}
        filter='contains' //filtrer le contenu
       // groupBy='categorie'
       // textField="nom"
        value={detail.patient}
        //onChange={(nextValue) => setValue(nextValue.id)}
       // onChange={({target:{value}}) => setRdv({...rdv, patient: value})}
        onChange={({ id }) => setDetail({...detail, examen_id: id})}
        data={examens}
      />
    </div>
  </div>
  </form>
</div>
<div class="card-footer"><button type="submit" onClick={handleSaveDetail} className="btn btn-outline-primary">Enregistrer</button>
    <NavLink to="/details"><button type="submit" className="btn btn-outline-danger float-right"> 
    Annuler</button></NavLink>
</div>
</div>
</section>
  )
}

export default DetailCreate