import React, {useContext, useEffect, useState} from 'react'
import DropdownList from "react-widgets/DropdownList";
import PatientContext from '../../contexts/PatientContext';
import StructureContext from '../../contexts/StructureContext';
import { Link } from 'react-router-dom';

function InfoPatient(props) {
    const { patient, structure,handleChangeStructure, handleChange } = props;
    const { getPatients, patients} = useContext(PatientContext);
    const { getStructures, structures} = useContext(StructureContext);
    useEffect(()=>{
        getPatients();
        getStructures();
      }, [])
  return (
    <div>
        <br/>
        <div className='row'>
        <div className='col-6'>
        <DropdownList
            dataKey="id"
        // textField="nom" //afficher rien que le libellé dans le combobox
            textField= {item => typeof item === 'string' ? item : item.nom + ' / ' + item.adresse}
            filter='contains' //filtrer le contenu
            //groupBy='sexe'
            defaultValue="Selectionner une structure sanitaire sur la liste"
            value={structure.id}
            onChange={(value) => handleChangeStructure(value)}
            data={structures}
        />
        </div>
            <div className='col-6'>
                <DropdownList
                dataKey="id"
            // textField="nom" //afficher rien que le libellé dans le combobox
                textField= {item => typeof item === 'string' ? item : item.prenom + ' ' + item.nom}
                filter='contains' //filtrer le contenu
                defaultValue="Selectionner un patient sur la liste"
                //value={patient.id}
                value={patient.id}
                groupBy='sexe'
                onChange={(value) => handleChange(value)}
                data={patients}
                />
            </div>  
        </div>
        <br/>
        <div class="row"> 
            <div class="col-3">
                <h4 class="">Patient N°: <strong>00{patient.id}</strong></h4>
            </div>
            <div class="col-6">
                <h5>Patient : <strong>{patient.prenom} {patient.nom} </strong> </h5>
            </div>
            <div class="col-3">
                Age: <strong> {patient.datenais} ans </strong>
            </div>
        </div>
        <div class="col-md-12">
            <h3>
                Informations Générales
            </h3>
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Lieu de Naissance :</td>
                                <td><strong> {patient.nom}</strong></td>
                                <td>Sexe :</td>
                                <td><strong> {patient.sexe }</strong></td>
                            </tr>
                            <tr>
                                <td>Etat-civil :</td>
                                <td><strong> {patient.etatcivil }</strong></td>
                                <td>Profession : </td>
                                <td><strong>{ patient.profession}</strong></td>
                            </tr>
                            <tr>
                                <td>Téléphone : </td>
                                <td><strong>{patient.telephone }</strong></td>
                                <td>Email : </td>
                                <td><strong>{ patient.email}</strong></td>
                            </tr>
                            <tr>
                                <td>Adresse : </td>
                                <td><strong>{patient.adresse }</strong></td>
                                <td>Quartier : </td>
                                <td><strong>{ patient.quartier}</strong></td>
                            </tr>
                            <tr>
                                <td>Commune : </td>
                                <td><strong>{patient.commune }</strong></td>
                                <td>Ville : </td>
                                <td><strong>{ patient.ville}</strong></td>
                            </tr>
                            <tr>
                                <td>Province : </td>
                                <td><strong>{ patient.province}</strong></td>
                                <td>Nationalité : </td>
                                <td><strong>{patient.nationalite }</strong></td>
                            </tr>
                        </tbody>
                    </table>
        </div>
    </div>
  )
}

export default InfoPatient