import React, { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CharacterWrapper from './components/CharacterWrapper';
import NotFound from './NotFound';

const App: React.FC = () => {
  return (
    <Router>

        <Navbar />

        <Layout>
          <ErrorBoundary fallback={<div>Error al cargar microfrontend.</div>}>
            <Suspense fallback={<div>Cargando remoto...</div>}>
              <Routes>
                <Route path="/" element={<CharacterWrapper />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Layout>

        <Footer />
    </Router>
  )
}

export default App
