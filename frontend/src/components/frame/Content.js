import React from 'react';
import {  Route,Routes} from 'react-router-dom';
import StructureIndex from '../Structure/StructureIndex';
import StructureCreate from '../Structure/StructureCreate';
import StructureEdit from '../Structure/StructureEdit';
//Patient
import PatientIndex from '../patient/PatientIndex';
import PatientCreate from '../patient/PatientCreate';
import PatientEdit from '../patient/PatientEdit';

//User
import UserIndex from '../utilisateur/UserIndex';
import UserCreate from '../utilisateur/UserCreate';
import UserEdit from '../utilisateur/UserEdit';

//Rendez-vous
import RendezVousIndex from '../rendez-vous/RendezVousIndex';
import RendezVousCreate from '../rendez-vous/RendezVousCreate';
import RendezVousEdit from '../rendez-vous/RendezVousEdit';

//Examen
import ExamenIndex from '../examen/ExamenIndex';
import ExamenCreate from '../examen/ExamenCreate';
import ExamenEdit from '../examen/ExamenEdit';

//Detail examen
import DetailIndex from '../detail/DetailIndex';
import DetailCreate from '../detail/DetailCreate';
import DetailEdit from '../detail/DetailEdit';

//Terrain
import TerrainIndex from '../terrain/TerrainIndex';
import TerrainCreate from '../terrain/TerrainCreate';
import TerrainEdit from '../terrain/TerrainEdit';
//Catégorie
import CategorieIndex from '../categorie/CategorieIndex';
import CategorieCreate from '../categorie/CategorieCreate';
import CategorieEdit from '../categorie/CategorieEdit';
//Produit
import ProduitIndex from '../produit/ProduitIndex';
import ProduitCreate from '../produit/ProduitCreate';
import ProduitEdit from '../produit/ProduitEdit';

//Motif
import MotifIndex from '../motif/MotifIndex';
import MotifCreate from '../motif/MotifCreate';
import MotifEdit from '../motif/MotifEdit';

//Motif
import ConsultationIndex from '../consultation/ConsultationIndex';
import ConsultationCreate from '../consultation/ConsultationCreate';
//import ConsultationEdit from '../consultation/ConsultationEdit';

function Content() {
  return (
    <div> 
        <Routes>
            <Route path="/structures" element={<StructureIndex />}></Route>
            <Route path="/structure/create" element={<StructureCreate />}></Route>
            <Route path="/structure/:id/edit" element={<StructureEdit />}></Route>
          
            <Route path="/patients" element={<PatientIndex />}></Route>
            <Route path="/patient/create" element={<PatientCreate />}></Route>
            <Route path="/patient/:id/edit" element={<PatientEdit />}></Route>

            <Route path="/users" element={<UserIndex />}></Route>
            <Route path="/user/create" element={<UserCreate />}></Route>
            <Route path="/user/:id/edit" element={<UserEdit />}></Route>

            <Route path="/rdvs" element={<RendezVousIndex />}></Route>
            <Route path="/rdv/create" element={<RendezVousCreate />}></Route>
            <Route path="/rdv/:id/edit" element={<RendezVousEdit />}></Route>

            <Route path="/examens" element={<ExamenIndex />}></Route>
            <Route path="/examen/create" element={<ExamenCreate />}></Route>
            <Route path="/examen/:id/edit" element={<ExamenEdit />}></Route>

            <Route path="/details" element={<DetailIndex />}></Route>
            <Route path="/detail/create" element={<DetailCreate />}></Route>
            <Route path="/detail/:id/edit" element={<DetailEdit />}></Route>

            <Route path="/terrains" element={<TerrainIndex />}></Route>
            <Route path="/terrain/create" element={<TerrainCreate />}></Route>
            <Route path="/terrain/:id/edit" element={<TerrainEdit />}></Route>

            <Route path="/categories" element={<CategorieIndex />}></Route>
            <Route path="/categorie/create" element={<CategorieCreate />}></Route>
            <Route path="/categorie/:id/edit" element={<CategorieEdit />}></Route>

            <Route path="/produits" element={<ProduitIndex />}></Route>
            <Route path="/produit/create" element={<ProduitCreate />}></Route>
            <Route path="/produit/:id/edit" element={<ProduitEdit />}></Route>

            <Route path="/motifs" element={<MotifIndex />}></Route>
            <Route path="/motif/create" element={<MotifCreate />}></Route>
            <Route path="/motif/:id/edit" element={<MotifEdit />}></Route>

            <Route path="/consultations" element={<ConsultationIndex />}></Route>
            <Route path="/consultation/create" element={<ConsultationCreate />}></Route>
        </Routes>
    </div>
  )
}

export default Content