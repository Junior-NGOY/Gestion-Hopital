import React, {useState,useContext} from 'react';
import{ NavLink}  from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function UserCreate() {
  const { storeUser, errors} = useContext(UserContext);
  //const [swalProps, setSwalProps] = useState({});
  //const MySwal = withReactContent(Swal)
  const [user, setUser] = useState({
    nom:'nom',
    prenom:'prenom',
    postnom:'postnom',
    sexe:'sexe',
    datenais:'datenais',
    lieunais:'lieunais',
    etatcivil:'',
    telephone:'telephone',
    email:'email',
    adresse:'adresse',
    fonction:'fonction',
    specialite:'specialite',
    numord:'numord',
    nationalite:'nationalite',
    password:'password',
  });
  
  const alert = () =>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const handleSaveUser =  (event) => {
    event.preventDefault();
    //const user = JSON.stringify (user);
    storeUser(user);
  };
  return (
    <section class="content-header">

        <div>
            <button className='btn btn-primary' onClick={alert}>
                Open
            </button>
        </div>

    <div className="container-fluid">
      <div className="row mb-2">
      <div className="col-sm-6">
        <h1>Nouvel Utilisateur</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="/">Accueil</a></li>
          <li className="breadcrumb-item active">Nouveau user</li>
        </ol>
      </div>
      </div>
    </div>
    <div className="card card-primary"> 
    <div className="card-header"><h3 class="card-title">Ajout d'un utilisateur</h3></div>
    <div className="card-body">  
      <form  >
      <div className="row">
        <div className="col-md-4">
          <div class="form-group">
            <label htmlFor="nom">Prénom</label>
            <input name='prenom' value={user.prenom} onChange={({ target: { value }}) => setUser({...user, prenom: value })}type="text" className="form-control" id=" " placeholder="Entre nom" />
          </div>
          <div class="form-group">
            <label htmlFor="nom">Nom  </label>
            <input name='nom'  value={user.nom} onChange={({ target: { value }}) => setUser({...user, nom: value })} type="text" className="form-control" id=" " placeholder="Entre nom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Postnom</label>
            <input name='postnom' value={user.postnom} onChange={({ target: { value }}) => setUser({...user, postnom: value })} type="text" className="form-control" id=" " placeholder="Entrer Postnom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Sexe</label>
            <select className="form-control" value={user.sexe} onChange={({target:{value}}) => setUser({...user, sexe: value})}>
              <option>Choisir genre</option>
              <option value="Feminin">Feminin</option>
              <option value="Masculin">Masculin</option>
            </select>
          </div>
          <div class="form-group">
            <label for="nom">Lieu de Naissance</label>
            <input name='lieunais' value={user.lieunais} onChange={({target:{value}}) => setUser({...user, lieunais:value})} type="text" className="form-control" id=" " placeholder="Entre lieu de naissance" />
          </div>
        </div>
        <div className="col-md-4">
          <div class="form-group">
            <label for="">Date de naissance</label>
            <input name='datenais'  value={user.datenais} onChange={({target:{value}}) => setUser({...user, datenais:value})} type="date" className="form-control" id=" " placeholder="Entrer Adresse" />
          </div>
          <div class="form-group">
            <label htmlFor="etatcivil">Etat-civil</label>
            <select className="form-control" value={user.etatcivil} onChange={({target:{value}}) => setUser({...user, etatcivil:value})}>
              <option>Choisir Etat-civil</option>
              <option value="Marié">Marié</option>
              <option value="Célibataire">Célibataire</option>
              <option value="Veuf">Veuf</option>
              <option value="Divorcé">Divorcé</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="nom">Fonction  </label>
            <select className="form-control" value={user.fonction} onChange={({target:{value}}) => setUser({...user, fonction:value})}>
              <option>Choisir la fonction</option>
              <option value="Médecin">Médecin</option>
              <option value="Infirmier">Infirmier</option>
              <option value="Administratif">Administratif</option>
            </select>
          </div>
          <div class="form-group">
            <label htmlFor="">Téléphone</label>
            <input name='postnome' value={user.telephone} onChange={({target:{value}}) => setUser({...user, telephone:value})} type="number" className="form-control" id=" " placeholder="Entrer Postnom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Email</label>
            <input name='email'value={user.email} onChange={({target:{value}}) => setUser({...user, email:value})} type="email" className="form-control" id=" " placeholder="Entrer Adresse" />
          </div>
        </div>
        <div className="col-md-4">
          <div class="form-group">
            <label htmlFor="nom">Adresse</label>
            <input name='nom'  value={user.adresse} onChange={({target:{value}}) => setUser({...user, adresse:value})} type="text" className="form-control" id=" " placeholder="Entre nom" />
          </div>
          <div class="form-group">
            <label htmlFor="">Spécialité</label>
            <input name='adresse' value={user.specialite} onChange={({target:{value}}) => setUser({...user, specialite:value})} type="text" className="form-control" id=" " placeholder="Entrer Adresse" />
          </div>
          <div class="form-group">
            <label htmlFor="numord">Numéro Ord.</label>
              <input name='numord'  value={user.numord} onChange={({target:{value}}) => setUser({...user, numord:value})} type="text" className="form-control" id=""/>
          </div>
          <div class="form-group">
            <label htmlFor="nationalite">Nationalité</label>
            <input name='password'  value={user.nationalite} onChange={({target:{value}}) => setUser({...user, nationalite:value})} type="text" className="form-control" id=""/>
          </div>
          <div class="form-group">
            <label htmlFor="password">Mot de passe.</label>
            <input name='password'  value={user.password} onChange={({target:{value}}) => setUser({...user, password:value})} type="text" className="form-control" id=" " placeholder="Entrer mot de passe" />
          </div>
        
        </div>
      
      </div>
    
      </form>
    </div>
    <div class="card-footer"><button type="submit" onClick={handleSaveUser} className="btn btn-outline-primary">Enregistrer</button>
        <NavLink to="/users"><button type="submit" className="btn btn-outline-danger float-right"> 
        Annuler</button></NavLink>
    </div>
    </div>
    </section>
  )
}

export default UserCreate