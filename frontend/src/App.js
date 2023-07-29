
import './App.css';
import Content from './components/frame/Content';
import Footer from './components/frame/Footer';
import Header from './components/frame/Header';
import Sider from './components/frame/Sider';
import { UserProvider } from './contexts/UserContext';
import { PatientProvider } from './contexts/PatientContext';
import { StructureProvider } from './contexts/StructureContext';
import { RdvProvider } from './contexts/RdvContext';
//import { useAppState } from './repository/StructureRepository';


function App() {
  return (
    <StructureProvider >
    <RdvProvider >
    <UserProvider >
    <PatientProvider >
    <div>
      <Header/>
      <Sider/>
        <div className="content-wrapper">
            <Content/>
        </div>
      <Footer/>
    </div>
    </PatientProvider>
    </UserProvider>
    </RdvProvider>
    </StructureProvider>
  );
}

export default App;
