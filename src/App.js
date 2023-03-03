import './App.css';
import Header from './components/header-component/header';
import StationPage from './pages/station';
import ProjectPage from './pages/project';

function App() {
  return (
    <>
      <Header/>
      <main>
          <ProjectPage/>
          {/* <StationPage/> */}
      </main>
    </>
    
  );
}

export default App;
