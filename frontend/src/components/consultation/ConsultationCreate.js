import React, { useEffect, useState, useContext } from 'react'
import InfoPatient from './InfoPatient'
import InfoGenerales from './InfoGenerales'
import ExamenDMD from './ExamenDMD'
import Prescription from './Prescription'
import ConsultationContext from '../../contexts/ConsultationContext'
import Stepper from "awesome-react-stepper";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ConsultationEdit() {
  const { storeConsultation, errors} = useContext(ConsultationContext);
  const [patient, setPatient ]= useState({ 
    prenom:"",
    nom:"",
    postnom:"",
  }) 
  const [structure, setStructure ]= useState({ 
    nom:"",
    adresse:"",
  }) 
  const [motif, setMotif ]= useState({}) 
  const [produit, setProduit ]= useState({}) 
  const [examen, setExamen ]= useState() 
  const [ordonnance, setOrdonnance ]= useState([]) 
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedExams, setSelectedExams] = useState([]);

  const handleMultiSelectExamChange = (selectedExams) => {
    setSelectedExams(selectedExams);
  };
  const handleMultiSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };
  const [data, setData]=useState({
    patient_id:0,
    motif_id:0,
    taille:0,
    poids:0,
    temperature:0,
    glycemie:0,
    cholesterole:0,
    pa:0,
    pas:0,
    pad:0,
    pouls:0,
    fc:0,
    fr:0,
    diurese:0,
    spo2:0,
    ta:0,
    ddr:0,
    dpa:0,
    pc:0,
    imc:0,
    signGen:0,
    hma:0,
    ca:0,
    antecedant:0,
    structure_id:0,
    user_id:0,
  })
  const [info, setInfo ]= useState({ 
    patient_id:1,
    motif_id:2,
    nom:"",
    poids: 0, 
    temperature: 0,
    taille: 0,
    imc: 0,
    fc: 0,
    pa: 0,
    glycemie: 0,
    cholesterole: 0,
    pas: 0,
    pad: 0,
    pouls: 0,
    fr: 0,
    diurese: 0,
    pc: 0,
    spo2: 0,
    ta: 0,
    ddr: 0,
    dpa: 0,
    hma:"",
    antecedant:"",
    ca:"",
    examen:[],
    terrain:[],
    produit:[],
    posologies:[],
    posologie:"",
    unite:0,
    qsp:[]
  }) 
  const handleAddOrdonnance = () => {
   // setOrdonnance( arr => [...arr, produit.designation]);
   info.produit=[]
   info.posologies=[]
  // info.posologie=[]
    setOrdonnance((prevOrdonnance) => [
      ...prevOrdonnance,
      {
          id: produit.id,
          designation: produit.designation,
          posologie: info.posologie, // 
      },
  ]);
  for(let value of ordonnance){
    //terrain=value.id
    info.produit.push(value.id)
    info.posologies.push(value.posologie)
  }
  alert(info.posologies)
};
const handleCleanOrdonnance=()=>{
  setOrdonnance({})
}
const handleRemoveItem = (e) => {
  const name = e.target.getAttribute("designation")
   setOrdonnance(ordonnance.filter(item => item.designation !== name));
 };
const handleChange = (event) => {
  // setName(event.target.value)
  event.preventDefault();
   const name = event.target.name;
   const value = event.target.value;
   setInfo({ ...info, [name]: value });
 
  // setInfo(prevData => ({...prevData,[name]: value }))
  //alert(value)
 }
const handleSave = ()=>{
  setData({ ...data, 
    patient_id: patient.id, 
    motif_id: motif.id,
    taille: info.taille,
    poids: info.poids,
    temperature: info.temperature,
    glycemie:info.glycemie,
    cholesterole:info.cholesterole,
    pa:info.pa,
    pas:info.pas,
    pad:info.pad,
    pouls:info.pouls,
    fc:info.fc,
    fr:info.fr,
    diurese:info.diurese,
    spo2:info.spo2,
    ta:info.ta,
    ddr:info.ddr,
    dpa:info.dpa,
    pc:info.pc,
    imc:info.imc,
    signGen:0,
    hma:info.hma,
    ca:info.ca,
    antecedant:info.antecedant,
    structure_id: structure.id,
    user_id: 7,
    examens:info.examen,
    produits:ordonnance,
    posologie:info.posologies,
  });
  info.examen=[]
  info.terrain=[]
  for(let value of selectedOptions){
    //terrain=value.id
    info.terrain.push(value.id)
    }
 for(let value of selectedExams){
  //terrain=value.id
  info.examen.push(value.id)
}
  alert(data.produits)
  //alert(data.patient_id)
  //handleAddData()
  //alert(data.motif_id)
 // alert(data.structure_id)
  storeConsultation(data, info.terrain)
 
  toast.success("Vous avez bien fini")
}

useEffect(()=>{
 
}, [])

 
  return (
  <div class="">
     <ToastContainer />
   <section class="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
      <div className="col-sm-6">
        <h1>Nouvelle consultation</h1>
      </div>
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="/">Accueil</a></li>
          <li className="breadcrumb-item active"><a href="/consultations">Liste des consultations</a></li>
        </ol>
      </div>
      </div>
    </div>
    <div className="card card-primary"> 
    <div className="card-header"><h3 class="card-title">Ajout d'une consultation</h3>
      <span className='float-right'>Structure sanitaire : {structure.nom} {structure.id} </span></div>
    <div className="card-body">  
      <div className="row">
        <div className="col-md-12">
          <div class="form-group">
            <Stepper
              strokeColor="#17253975"
              fillStroke="#6b63e2"
              activeColor="#f01237"
              activeProgressBorder="2px solid #6b63e2"
              submitBtn={<button className="btn btn-outline-primary">Enregistrer</button>}
              continueBtn={<button className="btn btn-outline-info">Suivant</button>}
              backBtn={<button className="btn btn-outline-info">Précédent</button>}
              onSubmit={handleSave}
            >
              <div>
                  <InfoPatient 
                  patient={patient} structure={structure}
                  handleChange={(patient) => setPatient(patient)} 
                  handleChangeStructure={(structure) => setStructure(structure)} />
                 
              </div>
              <div>
                <InfoGenerales inputs={info} handleChange={handleChange}/>
              </div>
              <div>
                  <ExamenDMD motif={motif} handleChange={(motif) => setMotif(motif)}
                  inputs={info} onChange={handleChange}
                 selectedOptions={selectedOptions} selected={handleMultiSelectChange}
                  />
              </div>
              <div>
                  <Prescription produit={produit} handleChange={(produit) => setProduit(produit)}
                  inputs={info} onChange={handleChange} examens={examen} 
                  handleChangeEx={(examen) => setExamen(examen)}
                  ordonnance={ordonnance} onClick={handleAddOrdonnance}
                  cleanOrdonnance = {handleCleanOrdonnance} 
                  removeOrdonnance = {handleRemoveItem}
                  selectedExams={selectedExams} selectedExam={handleMultiSelectExamChange}
                  />
              </div>
            </Stepper>
          </div> 
        </div>
      </div>
    </div>
    <div class="card-footer">
    </div>
    </div>
    </section> 
  </div>
  )
}

export default ConsultationEdit