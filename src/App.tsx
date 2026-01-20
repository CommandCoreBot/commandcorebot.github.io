import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import DocsPage from './pages/DocsPage';
//import DeveloperPage from './pages/DeveloperPage';
//import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import DocsPage from './pages/DocsPage';
import DocArticle from './pages/DocArticle'; // Assuming you create this file
import DeveloperPage from './pages/DevPage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/docs" element={<DocsPage />}>
              <Route index element={<DocArticle />} />
              <Route path=":slug" element={<DocArticle />} />
            </Route>
            <Route path="/developer" element={<DeveloperPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
// ...



export default App;