import React, {useContext, useEffect, useState} from 'react'
import DropdownList from "react-widgets/DropdownList";
import ConsultationContext from '../../contexts/ConsultationContext';


function InfoGenerales(props) {
    const { inputs, handleChange } = props;

  return (
    <div className="col-md-12">
        <h3>
            Constantes Vitales
        </h3>
        <table className="table table-sm">
            <tr>
                <td><label for="poids">Poids</label></td>
                <td><input type="number" id="poids" name="poids" value={inputs.poids} onChange={handleChange}
                      className="form-control" placeholder="Poids en Kg" /></td>
                <td><label for="Taille">Taille</label></td>
                <td><input type="number" value={inputs.taille} onChange={handleChange} id="Taille" name="taille" className="form-control" placeholder="Taille en Cm" /></td>
            </tr>
            <tr>
                <td><label for="temperature">Température</label></td>
                <td><input type="number" id="temperature" name="temperature" className="form-control" value={ inputs.temperature }
                        onChange={handleChange}   placeholder="Température en Celsius" /></td>
                <td><label for="imc">IMC (Kg/m)</label></td>
                <td><input type="number" id="imc" name="imc" className="form-control"
                      value={inputs.imc} onChange={handleChange}  placeholder="Saisir la taille et le poids"/></td>
            </tr>
            <tr>
                <td><label for="fc">Fréquence Cardiaque</label></td>
                <td><input type="number" id="fc" name="fc" className="form-control" placeholder="Ex: 70"
                    value={inputs.fc} onChange={handleChange}/></td>
                <td><label for="pa">Pression artérielle</label></td>
                <td><input type="number" id="pa" name="pa" className="form-control" placeholder="Ex: 8/12"
                    value={inputs.pa} onChange={handleChange}
                />
                </td>
            </tr>
            <tr>
                <td><label for="glycemie">Glycémie</label></td>
                <td><input type="number" id="glycemie" name="glycemie" className="form-control"placeholder="G/L"
                value={inputs.glycemie} onChange={handleChange}
                /></td>
                <td><label for="cholesterole">Cholestérole</label></td>
                <td><input type="number" id="cholesterole" name="cholesterole" className="form-control"
                   value={inputs.cholesterole} onChange={handleChange} placeholder="mmo/l"/></td>
            </tr>
            <tr>
                
            </tr>
            <tr>
                <td><label for="pas">PAS (mmHg)</label></td>
                <td><input type="number" id="pas" name="pas" className="form-control" placeholder="pas"
                    value={inputs.pas} onChange={handleChange}
                />
                </td>
                <td><label for="pad">PAD (mmHg)</label></td>
                <td><input type="number" id="pad" name="pad" className="form-control" placeholder="pad"
                    value={inputs.pad} onChange={handleChange}
                /></td>
            </tr>
            <tr>
                <td><label for="pouls">POULS (bpm)</label></td>
                <td><input type="number" id="pouls" name="pouls" className="form-control" placeholder="pouls"
                    value={inputs.pouls} onChange={handleChange}
                    />
                </td>
                <td><label for="fr">FR (cycl/min)</label></td>
                <td><input type="number" id="fr" name="fr" className="form-control"
                    value={inputs.fr} onChange={handleChange}
                /></td>
            </tr>
            <tr>
                <td><label for="diurese">Diurèse (mml)</label></td>
                <td><input type="number" id="diurese" name="diurese" className="form-control"
                    value={inputs.diurese} onChange={handleChange}
                />
                </td>
                <td><label for="pc">PC</label></td>
                <td><input type="number" id="pc" name="pc" className="form-control"
                    value={inputs.pc} onChange={handleChange}/></td>
            </tr>
            <tr>
                <td><label for="spo2">SPO2</label></td>
                <td><input type="number" id="spo2" name="spo2" className="form-control"
                    value={inputs.spo2} onChange={handleChange}/>
                </td>
                <td><label for="ta">TA (mmhg)</label></td>
                <td><input type="number" id="ta" name="ta" className="form-control"
                        value={inputs.ta} onChange={handleChange}/>
                </td>
            </tr>
            <tr>
                <td><label for="ddr">DDR</label></td>
                <td><input type="date" id="ddr" name="ddr" className="form-control"
                    value={inputs.ddr} onChange={handleChange}/></td>
                <td><label for="dpa">DPA</label></td>
                <td><input type="date" id="dpa" name="dpa" className="form-control"
                    value={inputs.dpa} onChange={handleChange}/></td>
            </tr>
        </table>
    </div>
  )
}

export default InfoGenerales