import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import DropdownList from "react-widgets/DropdownList";
import Multiselect from "react-widgets/Multiselect";
import TerrainContext from '../../contexts/TerrainContext';
import MotifContext from '../../contexts/MotifContext';
import DetailContext from '../../contexts/DetailContext';
import ProduitContext from '../../contexts/ProduitContext';
import "react-widgets/styles.css";
import Select from 'react-select';

function ExamenDMD(props) {
    const { getMotifs, motifs} = useContext(MotifContext);
    const { getTerrains, terrains} = useContext(TerrainContext);
    const { motif, inputs, handleChange, onChange, selected,selectedOptions } = props;
    const [consultation, setConsultation] = useState({
        patient_id:0,
        motif_id:0,
        produit_id:0,
        libelle:'',
        antecedant:'',
        ca:'',
        examen:'',
        libTerrain:'',
        libProduit:'',
        terrain_id:0,
      });

    useEffect(()=>{
        getMotifs();
        getTerrains();
        //getDetails();
        //getProduits();
      }, [])
  return (
    <div className='row'>
        <div class="col-md-6">
        <h3>Motif principal</h3>
        <p>
        <h4> <strong>{motif.libelle}</strong></h4>
            </p>
            <div class="row col-md-12">
            <DropdownList
        dataKey="id"
        textField="libelle" //afficher rien que le libellé dans le combobox
        // textField= {item => typeof item === 'string' ? item : item.prenom + ' ' + item.nom}
        filter='contains' //filtrer le contenu
        defaultValue="Selectionner un motif principal"
        value={motif.id}
        onChange={(value) => handleChange(value)}
        data={motifs}
        />
            </div>
            <table class="table table-sm">
                <td>
                    <label for="hma">Histoire de la maladie actuelle</label>
                </td>
                <tr>
                    <td>
                        <textarea name="hma" id="" cols="30" rows="5" class="form-control"
                            placeholder="Brève historique de la maladie"
                            value={inputs.hma} onChange={onChange}
                            ></textarea>
                    </td>
                </tr>
                <td><label for="motif">Antécédents</label></td>
                <tr>
                    <td>
                        <textarea name="antecedant" id="" cols="30" rows="5" class="form-control"
                            placeholder="Les antécédents du malade"
                            value={inputs.antecedant} onChange={onChange}></textarea>
                    </td>
                </tr>
            </table>
        </div>
        <div class="col-md-6">
            <table class="table table-sm">
                <div class="form-group">
                    <label>Terrain {consultation.libTerrain}</label>
                </div>
                <tr>
                    <div class="form-group">
                    <Multiselect
                dataKey="id"
                textField="libelle" //afficher rien que le libellé dans le combobox
            // textField= {item => typeof item === 'string' ? item : item.libelle + ' ' + item.libelle}
                filter='contains' //filtrer le contenu
                //groupBy='categorie'
               // onChange={({ id,libelle }) => setConsultation({...consultation, terrain_id: id, libTerrain:libelle})}
               onChange={selected}
               data={terrains}
            /><hr/>
    {
        selectedOptions.map((terrain, index)=>{
            return(
                <tr key={terrain.id}>
                <th scope="row">{index + 1}</th>
                <td>{terrain.libelle}</td> 
                <td>{terrain.id}</td> 
                </tr>
        )})
    }
        </div>
                </tr>
                <td><label for="ca">Complément d'anamnèse (CA)</label></td>
                <tr>
                    <td>
                        <textarea name="ca" id="" cols="20" rows="5" class="form-control"
                            placeholder="Complement d'anamnèse"  value={inputs.ca} onChange={onChange}
                            ></textarea>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default ExamenDMD