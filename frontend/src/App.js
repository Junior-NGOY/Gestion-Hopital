
import './App.css';
import Content from './components/frame/Content';
import Footer from './components/frame/Footer';
import Header from './components/frame/Header';
import Sider from './components/frame/Sider';
import { UserProvider } from './contexts/UserContext';
import { PatientProvider } from './contexts/PatientContext';
import { StructureProvider } from './contexts/StructureContext';
import { RdvProvider } from './contexts/RdvContext';
import { ExamenProvider } from './contexts/ExamenContext';
import { DetailProvider } from './contexts/DetailContext';
import { TerrainProvider } from './contexts/TerrainContext';
import { CategorieProvider } from './contexts/CategorieContext';
import { ProduitProvider } from './contexts/ProduitContext';
import { MotifProvider } from './contexts/MotifContext';
import { ConsultationProvider } from './contexts/ConsultationContext';
//import { useAppState } from './repository/StructureRepository';


function App() {
  return (
    <StructureProvider >
    <RdvProvider >
    <UserProvider >
    <PatientProvider >
    <ExamenProvider >
    <DetailProvider >
    <TerrainProvider >
    <CategorieProvider >
    <ProduitProvider >
    <MotifProvider >
    <ConsultationProvider >
    <div>
      <Header/>
      <Sider/>
        <div className="content-wrapper">
            <Content/>
        </div>
      <Footer/>
    </div>
    </ConsultationProvider>
    </MotifProvider>
    </ProduitProvider>
    </CategorieProvider>
    </TerrainProvider>
    </DetailProvider>
    </ExamenProvider>
    </PatientProvider>
    </UserProvider>
    </RdvProvider>
    </StructureProvider>
  );
}

export default App;
