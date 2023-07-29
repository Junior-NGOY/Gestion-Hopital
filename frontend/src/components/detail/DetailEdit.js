import React, { useContext, useEffect, useState } from 'react';
import DetailContext from '../../contexts/DetailContext';
import { NavLink, useParams } from 'react-router-dom';
import DropdownList from "react-widgets/DropdownList";
import ExamenContext from '../../contexts/ExamenContext';

function DetailEdit() {
  const { updateDetail, getDetail, detail, errors} = useContext(DetailContext);
  const { getExamens, examens} = useContext(ExamenContext);
  const { id } = useParams();
  const handleUpdateDetail =  (event) => {
    event.preventDefault();
    const detail  = JSON.stringify (
      { 
       id,
       detailexam:detailEx.detailexam, 
       examen_id:detailEx.examen_id, 
    }
    );
    //console.log(patient);
    updateDetail(detail);
  };
  const [detailEx, setDetailEx] = useState({
    detailexam:'',
    examen_id:'',
  });
  useEffect(()=>{
    getExamens();
  }, [])
  useEffect(() => {
    getDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(()=>{
    setDetailEx(detail);
  },[detail])
  return (
    <section class="content-header">
<div className="container-fluid">
  <div className="row mb-2">
  <div className="col-sm-6">
    <h1>Edition detail</h1>
  </div>
  <div className="col-sm-6">
    <ol className="breadcrumb float-sm-right">
      <li className="breadcrumb-item"><a href="/">Accueil</a></li>
      <li className="breadcrumb-item active">Edit Detail</li>
    </ol>
  </div>
  </div>
</div>
<div className="card card-primary"> 
<div className="card-header"><h3 class="card-title">Ajout d'un detail {id}</h3></div>
<div className="card-body">  
  <form  >
  <div className="row">
    <div className="col-md-6">
      <div class="form-group">
        <label htmlFor="detailexam">Detail</label>
        <input name='detailexam' value={detailEx.detailexam} onChange={({ target: { value }}) => setDetailEx({...detailEx, detailexam: value })}type="text" className="form-control" id=" " placeholder="Entrer detail" />
      </div>
      Type
       Current Value: <strong>{detailEx.examen_id}</strong>
       <DropdownList
        dataKey="id"
        //textField="nom" afficher rien le nom dans le combobox
        textField= {item => typeof item === 'string' ? item : item.partie + ' / ' + item.type}
        filter='contains' //filtrer le contenu
        groupBy='type'
       // textField="nom"
        value={detailEx.examen_id}
        //onChange={(nextValue) => setValue(nextValue.id)}
       // onChange={({target:{value}}) => setRdv({...rdv, patient: value})}
        onChange={({ id }) => setDetailEx({...detailEx, examen_id: id})}
        data={examens}
      />
    </div>
  </div>
  </form>
</div>
<div class="card-footer"><button type="submit" onClick={handleUpdateDetail} className="btn btn-outline-primary">Enregistrer</button>
    <NavLink to="/details"><button type="submit" className="btn btn-outline-danger float-right"> 
    Annuler</button></NavLink>
</div>
</div>
</section>
  )
}

export default DetailEdit