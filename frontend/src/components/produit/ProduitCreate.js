import React, { useContext, useEffect, useState } from 'react'
import ProduitContext from '../../contexts/ProduitContext';
import CategorieContext from '../../contexts/CategorieContext';
import{ NavLink}  from 'react-router-dom';
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";


function ProduitCreate() {
  const { storeProduit, errors} = useContext(ProduitContext);
  const { getCategories, categories} = useContext(CategorieContext);
  const [produit, setProduit] = useState({
    designation:'',
    qte:0,
    seuil:10,
    peremption:'10/07/2023',
    conditionnement:'',
    categorie_id:0,
  });
  useEffect(()=>{
    getCategories();
  }, [])
  const handleSaveProduit =  (event) => {
    event.preventDefault();
    //const user = JSON.stringify (user);
    storeProduit(produit);
  };
  return (
<section class="content-header">
<div className="container-fluid">
  <div className="row mb-2">
  <div className="col-sm-6">
    <h1>Nouveau produit</h1>
  </div>
  <div className="col-sm-6">
    <ol className="breadcrumb float-sm-right">
      <li className="breadcrumb-item"><a href="/">Accueil</a></li>
      <li className="breadcrumb-item active">Nouveau produit</li>
    </ol>
  </div>
  </div>
</div>
<div className="card card-primary"> 
<div className="card-header"><h3 class="card-title">Ajout d'un produit</h3></div>
<div className="card-body">  
  <form  >
  <div className="row">
    <div className="col-md-6">
      <div class="form-group">
        <label htmlFor="nom">Designation</label>
        <input name='prenom' value={produit.designation} onChange={({ target: { value }}) => setProduit({...produit, designation: value })}type="texte" className="form-control" id=" " placeholder="Entrer designation" />
      </div>
      <div class="form-group">
        <label htmlFor="nom">Quatité  </label>
        <input name='nom'  value={produit.qte} onChange={({ target: { value }}) => setProduit({...produit, qte: value })} type="number" className="form-control" id=" " placeholder="Entre nom" />
      </div>
      <div class="form-group">
        <label htmlFor="nom">Seuil </label>
        <input name='nom'  value={produit.seuil} onChange={({ target: { value }}) => setProduit({...produit, seuil: value })} type="number" className="form-control" id=" " placeholder="" />
      </div>
    </div>
    <div className="col-md-6">
    <div className="form-group">
        <label htmlFor="">Conditionnement </label>
        <select className="form-control" value={produit.conditionnement} onChange={({target:{value}}) => setProduit({...produit, conditionnement: value})}>
          <option>Choisir type de conditionnement</option>
          <option value="SACHET">Sachet</option>
          <option value="BOITE">Boite</option>
          <option value="SAC">SAC</option>
        </select>
      </div>  
      <div class="form-group">
        <label htmlFor="peremption">Peremption </label>
        <input name='peremption'  value={produit.peremption} onChange={({ target: { value }}) => setProduit({...produit, peremption: value })} type="date" className="form-control" id=" " placeholder="" />
      </div>
       Catégorie: <strong>{produit.categorie_id}</strong>
       <DropdownList
        dataKey="id"
        textField="libelle" //afficher rien que le libellé dans le combobox
        //textField= {item => typeof item === 'string' ? item : item.libelle + ' ' + item.libelle}
        filter='contains' //filtrer le contenu
        //groupBy='categorie'
       // textField="nom"
        value={produit.categorie_id}
        //onChange={(nextValue) => setValue(nextValue.id)}
       // onChange={({target:{value}}) => setRdv({...rdv, patient: value})}
        onChange={({ id }) => setProduit({...produit, categorie_id: id})}
        data={categories}
      />
    </div>
  </div>
  </form>
</div>
<div class="card-footer"><button type="submit" onClick={handleSaveProduit} className="btn btn-outline-primary">Enregistrer</button>
    <NavLink to="/rdvs"><button type="submit" className="btn btn-outline-danger float-right"> 
    Annuler</button></NavLink>
</div>
</div>
</section>
  )
}

export default ProduitCreate