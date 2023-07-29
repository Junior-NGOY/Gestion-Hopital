import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import { NavLink, useParams } from 'react-router-dom';

function UserEdit() {
  const { updateUser, getUser, user, errors} = useContext(UserContext);
  const [utilisateur, setUtilisateur] = useState({
    nom:'nom',
    prenom:'prenom',
    postnom:'post-nom',
    sexe:'',
    datenais:'',
    lieunais:'',
    etatcivil:'marié',
    telephone:'',
    email:'',
    adresse:'',
    fonction:'',
    specialite:'',
    numord:'',
    nationalite:'',
    password:'',
  });

  const { id } = useParams();
  const handleUpdateUser =  (event) => {
    event.preventDefault();
    const u = JSON.stringify (
      { 
       id,
       prenom:utilisateur.prenom, 
       nom:utilisateur.nom,
       postnom:utilisateur.postnom, 
       sexe:utilisateur.sexe, 
       datenais:utilisateur.datenais,
       lieunais:utilisateur.lieunais,
       etatcivil:utilisateur.etatcivil,
       specialite:utilisateur.specialite,
       telephone:utilisateur.telephone,
       adresse:utilisateur.adresse,
       email:utilisateur.email,
       nationalite:utilisateur.nationalite,
       fonction:utilisateur.fonction, 
       numord:utilisateur.numord, 
       password:utilisateur.password,
       //nationalite,photo,categorie
    }
    
    );
    //console.log(patient);
    updateUser(u);
  };
  useEffect(() => {
    getUser(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(()=>{
    setUtilisateur(user);
  },[user])
  return (
    <section class="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
      <div className="col-sm-6">
        <h1>Editer Utilisateur</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="/">Accueil</a></li>
          <li className="breadcrumb-item active">Editer utilisateur</li>
        </ol>
      </div>
      </div>
    </div>
    <div className="card card-primary"> 
    <div className="card-header"><h3 class="card-title">Edition d'un utilisateur</h3></div>
    <div className="card-body">  
      <form  >
      <div className="row">
        <div className="col-md-4">
          <div class="form-group">
            <label htmlFor="nom">Prénom</label>
            <input name='prenom' value={utilisateur.prenom} onChange={({ target: { value }}) => setUtilisateur({...utilisateur, prenom: value })}type="text" className="form-control" id=" " placeholder="Entre nom" />
          </div>
          <div class="form-group">
            <label htmlFor="nom">Nom  </label>
            <input name='nom'  value={utilisateur.nom} onChange={({ target: { value }}) => setUtilisateur({...utilisateur, nom: value })} type="text" className="form-control" id=" " placeholder="Entre nom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Postnom</label>
            <input name='postnom' value={utilisateur.postnom} onChange={({ target: { value }}) => setUtilisateur({...utilisateur, postnom: value })} type="text" className="form-control" id=" " placeholder="Entrer Postnom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Sexe</label>
            <select className="form-control" value={utilisateur.sexe} onChange={({target:{value}}) => setUtilisateur({...utilisateur, sexe: value})}>
              <option>Choisir genre</option>
              <option value="Feminin">Feminin</option>
              <option value="Masculin">Masculin</option>
            </select>
          </div>
          <div class="form-group">
            <label for="nom">Lieu de Naissance</label>
            <input name='lieunais' value={utilisateur.lieunais} onChange={({target:{value}}) => setUtilisateur({...utilisateur, lieunais:value})} type="text" className="form-control" id=" " placeholder="Entre lieu de naissance" />
          </div>
        </div>
        <div className="col-md-4">
          <div class="form-group">
            <label for="">Date de naissance</label>
            <input name='datenais'  value={utilisateur.datenais} onChange={({target:{value}}) => setUtilisateur({...utilisateur, datenais:value})} type="date" className="form-control" id=" " placeholder="Entrer Adresse" />
          </div>
          <div class="form-group">
            <label htmlFor="etatcivil">Etat-civil</label>
            <select className="form-control" value={utilisateur.etatcivil} onChange={({target:{value}}) => setUtilisateur({...utilisateur, etatcivil:value})}>
              <option>Choisir Etat-civil</option>
              <option value="Marié">Marié</option>
              <option value="Célibataire">Célibataire</option>
              <option value="Veuf">Veuf</option>
              <option value="Divorcé">Divorcé</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="nom">Fonction  </label>
            <select className="form-control" value={utilisateur.fonction} onChange={({target:{value}}) => setUtilisateur({...utilisateur, fonction:value})}>
              <option>Choisir la fonction</option>
              <option value="Médecin">Médecin</option>
              <option value="Infirmier">Infirmier</option>
              <option value="Administratif">Administratif</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="">Téléphone</label>
            <input name='postnom' value={utilisateur.telephone} onChange={({target:{value}}) => setUtilisateur({...utilisateur, telephone:value})} type="number" className="form-control" id=" " placeholder="Entrer Postnom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Email</label>
            <input name='email'value={utilisateur.email} onChange={({target:{value}}) => setUtilisateur({...utilisateur, email:value})} type="email" className="form-control" id=" " placeholder="Entrer Adresse" />
          </div>
        </div>
        <div className="col-md-4">
          <div class="form-group">
            <label htmlFor="nom">Adresse</label>
            <input name='nom'  value={utilisateur.adresse} onChange={({target:{value}}) => setUtilisateur({...utilisateur, adresse:value})} type="text" className="form-control" id=" " placeholder="Entre nom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Spécialité</label>
            <input name='adresse' value={utilisateur.specialite} onChange={({target:{value}}) => setUtilisateur({...utilisateur, specialite:value})} type="text" className="form-control" id=" " placeholder="Entrer Adresse" />
          </div>
          <div class="form-group">
            <label htmlFor="numord">Numéro Ord.</label>
              <input name='numord'  value={utilisateur.numord} onChange={({target:{value}}) => setUtilisateur({...utilisateur, numord:value})} type="text" className="form-control" id=""/>
          </div>
          <div class="form-group">
            <label htmlFor="nationalite">Nationalité</label>
            <input name='password'  value={utilisateur.nationalite} onChange={({target:{value}}) => setUtilisateur({...utilisateur, nationalite:value})} type="text" className="form-control" id=""/>
          </div>
          <div class="form-group">
            <label htmlFor="password">Mot de passe.</label>
            <input name='password'  value={utilisateur.password} onChange={({target:{value}}) => setUtilisateur({...utilisateur, password:value})} type="text" className="form-control" id=" " placeholder="Entrer mot de passe" />
          </div>
        
        </div>
      
      </div>
    
      </form>
    </div>
    <div class="card-footer"><button type="submit" onClick={handleUpdateUser} className="btn btn-outline-primary">Enregistrer</button>
        <NavLink to="/users"><button type="submit" className="btn btn-outline-danger float-right"> 
        Annuler</button></NavLink>
    </div>
    </div>
    </section>
  )
}

export default UserEdit