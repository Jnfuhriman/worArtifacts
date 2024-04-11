import './App.css';
import MainTable from './components/MainTable';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App background">
      <MainTable className='background' />
    </div>
  );
}

export default App;
