import React, { useContext, useEffect, useState } from 'react';
import ProduitContext from '../../contexts/ProduitContext';
import { NavLink, useParams } from 'react-router-dom';
import DropdownList from "react-widgets/DropdownList";
import CategorieContext from '../../contexts/CategorieContext';

function ProduitEdit() {
  const { updateProduit, getProduit, produit, errors} = useContext(ProduitContext);
  const { getCategories, categories} = useContext(CategorieContext);
  const { id } = useParams();
  const handleUpdateProduit =  (event) => {
    event.preventDefault();
    const prod  = JSON.stringify (
      { 
       id,
       designation:product.designation, 
       qte:product.qte, 
       seuil:product.seuil, 
       peremption:product.peremption, 
       conditionnement:product.conditionnement, 
       categorie_id:product.categorie_id, 
    }
    
    );
    //console.log(patient);
    updateProduit(prod);
  };
  const [product, setProduct] = useState({
    designation:'designation',
    qte:0,
    seuil:0,
    peremption:'',
    conditionnement:'',
    categorie_id:7,
  });
  useEffect(()=>{
    getCategories();
  }, [])
  useEffect(() => {
    getProduit(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(()=>{
    setProduct(produit);
  },[produit])
  return (
    <section class="content-header">
<div className="container-fluid">
  <div className="row mb-2">
  <div className="col-sm-6">
    <h1>Edition Produit</h1>
  </div>
  <div className="col-sm-6">
    <ol className="breadcrumb float-sm-right">
      <li className="breadcrumb-item"><a href="/">Accueil</a></li>
      <li className="breadcrumb-item active">Edit produit</li>
    </ol>
  </div>
  </div>
</div>
<div className="card card-primary"> 
<div className="card-header"><h3 class="card-title">Editer un produit {id}</h3></div>
<div className="card-body">  
  <form  >
  <div className="row">
    <div className="col-md-6">
      <div class="form-group">
        <label htmlFor="designation">Designation</label>
        <input name='designation' value={product.designation} onChange={({ target: { value }}) => setProduct({...product, designation: value })}type="text" className="form-control" id=" " placeholder="Entrer designation" />
      </div>
      <div class="form-group">
        <label htmlFor="nom">Quantité  </label>
        <input name='qte'  value={product.qte} onChange={({ target: { value }}) => setProduct({...product, qte: value })} type="text" className="form-control" id=" " placeholder="Entre nom" />
      </div>
      <div class="form-group">
        <label htmlFor="nom">Seuil  </label>
        <input name='qte'  value={product.seuil} onChange={({ target: { value }}) => setProduct({...product, seuil: value })} type="text" className="form-control" id=" " placeholder="Entre nom" />
      </div>     
    </div>
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="">Conditionnement </label>
        <select className="form-control" value={product.conditionnement} onChange={({target:{value}}) => setProduct({...product, conditionnement: value})}>
          <option>Choisir Conditionnement</option>
          <option value="SACHET">Sachet</option>
          <option value="BOITE">Boite</option>
          <option value="SAC">SAC</option>
        </select>
      </div>  
      <div class="form-group">
        <label htmlFor="nom">Péremption  </label>
        <input name='peremption'  value={product.peremption} onChange={({ target: { value }}) => setProduct({...product, peremption: value })} type="date" className="form-control" id=" " placeholder="Entre nom" />
      </div>
       Catégorie: <strong>{product.categorie_id}</strong>
       <DropdownList
        dataKey="id"
        textField="libelle" //afficher rien le nom dans le combobox
       // textField= {item => typeof item === 'string' ? item : item.nom + ' ' + item.prenom}
        filter='contains' //filtrer le contenu
        groupBy='categorie'
       // textField="nom"
        value={product.categorie_id}
        //onChange={(nextValue) => setValue(nextValue.id)}
       // onChange={({target:{value}}) => setRdv({...rdv, patient: value})}
        onChange={({ id }) => setProduct({...product, categorie_id: id})}
        data={categories}
      />
    </div>
  </div>
  </form>
</div>
<div class="card-footer"><button type="submit" onClick={handleUpdateProduit} className="btn btn-outline-primary">Enregistrer</button>
    <NavLink to="/produits"><button type="submit" className="btn btn-outline-danger float-right"> 
    Annuler</button></NavLink>
</div>
</div>
</section>
  )
}

export default ProduitEdit