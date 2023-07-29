import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import DropdownList from "react-widgets/DropdownList";
import Multiselect from "react-widgets/Multiselect";
import DetailContext from '../../contexts/DetailContext';
import ProduitContext from '../../contexts/ProduitContext';
import "react-widgets/styles.css";


function Prescription(props) {
    const { getDetails, details} = useContext(DetailContext);
    const { getProduits, produits} = useContext(ProduitContext);
    const { produit, inputs, removeOrdonnace,handleChange, onChange, ordonnance,
         onClick, cleanOrdonnance, selectedExam,selectedExams  } = props;

    useEffect(()=>{
        getDetails();
        getProduits();
      }, [])
  return (
    <div className='row'>
       
        <div className='col-6'>
            <h3>Examen demandé</h3>
            <div className="form-group">
            <Multiselect
                dataKey="id"
                textField= {item => typeof item === 'string' ? item : item.detailexam + ' / ' + item.examen.partie}
                filter='contains' //filtrer le contenu
                groupBy='examen_id'
                // textField="nom"
                // value={consultation.terrain_id}
                // onChange={(nextValue) => setConsultation(nextValue.id)}
                //onChange={({target:{value}}) => setConsultation({...consultation, terrain_id: value})}
                //onChange={({ id,libelle }) => setConsultation({...consultation, terrain_id: id, libTerrain:libelle})}
                onChange={selectedExam}
                data={details}
            />
            </div>
            {
        selectedExams.map((examen, index)=>{
            return(
                <tr key={examen.id}>
                <th scope="row">{index + 1}</th>
                <td>{examen.detailexam}</td> 
                <td>{examen.id}</td> 
                </tr>
        )})
    }
            <DropdownList
                dataKey="id"
                // textField="libelle" //afficher rien que le libellé dans le combobox
                textField= {item => typeof item === 'string' ? item : item.designation + ' - ' + '(' + item.qte + ')' + ' - ' + item.categorie.libelle }
                filter='contains' //filtrer le contenu
                defaultValue="Selectionner un produit pour la prescription"
                value={produit.id}
                groupBy='categorie_id'
                onChange={(value) => handleChange(value)}
                data={produits}
            />
            <div class="form-group">
                    <label>Produits pharmaceutiques</label>
           
            </div>
            <div>
            <h3>
                Produit : {produit.designation}
            </h3>
            </div>
            <div class="col-md-12 mb-3 d-grid">
                    <input type="text" class="form-control" value={inputs.posologie} 
                    onChange={onChange} name='posologie' placeholder='Posologie' />
            </div>
            <div class="col-md-12 mb-3 d-grid">
                <input type="text" class="form-control" value={inputs.unite} 
                    onChange={onChange} name='unite' placeholder='unité'  />
            </div>
            <div class="col-md-12 mb-3 d-grid">
                <input type="text" class="form-control" value={inputs.qsp} 
                onChange={onChange} name='qsp' placeholder='qsp'/>
            </div>
            <div class="col-md-12 mb-3 d-grid">
                <input type="text" class="form-control" value={inputs.qsp}
                onChange={onChange} name='qsp' placeholder='qsp'/>
            </div>
            <div class="col-md-12 mb-3 d-grid">
                    <button class="btn btn-outline-success float-right" onClick={onClick} id="">
                        Ajouter</button>
            </div>
        </div>
        <div className='col-6'>
            <div class="">
                <h1>Ordonnance</h1>
                <table class="table table-sm table-bordered">
                    <thead class="">
                        <th>N°</th>
                        <th>Médicament</th>
                        <th>Posologie</th>
                        <th>Action</th>
                    </thead>
                    <tbody >
                    {ordonnance?.map( (e,index) =>(
                        <tr class="" key={index}>
                            <td  v-if="index">{++index}</td>
                            <td class="text-green">{e.designation}</td>
                            <td class="text-danger">{e.posologie} </td>
                            <td class="text-danger">{e.id} </td>
                            <td class=""> 
                            <button className="btn btn-outline-danger btn-sm" onClick={removeOrdonnace}>Supprimer</button>
                            </td>
                        </tr>
                          ))}
                    </tbody>
                </table>
                <button className="btn btn-outline-danger float-right" onClick={cleanOrdonnance}>Vider</button>
                <button className="btn btn-outline-success">Imprimer</button>
            </div>
        </div>
    </div>
  )
}

export default Prescription