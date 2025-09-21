import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchPage from './pages/SearchPage';
import NavbarComponent from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResults from './pages/SearchResultsPage';
import FooterComponent from './components/Footer';
import NonProfitWebPage from './pages/NonProfitWebPage';

function App() {
  return (
    <div className="pageContainer">
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="search" element={<SearchPage />} />
          <Route path="searchresults" element={<SearchResults />} />
          <Route path="nonprofitwebpage" element={<NonProfitWebPage />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  );
}

export default App;
