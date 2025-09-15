import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchPage from './pages/SearchPage';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from './pages/SearchResultsPage';
import FooterComponent from './components/Footer';


function App() {
  return (
    <Container fluid className="p-0 m-0">
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="search" element={<SearchPage />} />
          <Route path="searchresults" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </Container>
  );
}

export default App;
