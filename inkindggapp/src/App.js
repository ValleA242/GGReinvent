import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchComponent from './components/SearchCard';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/navbar';

function App() {
  return (
    <Container fluid className="p-0 m-0">
      <NavbarComponent />
      <SearchComponent />
    </Container>
  );
}

export default App;
