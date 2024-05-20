import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './shared/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { Me } from './pages/Me';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from './context/AuthContext/AuthProvider';
import SearchResults from './pages/SearchResults';
import Artist from './pages/Artist';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/sign-in" element={ <SignIn /> } />
          <Route path="/" element={  <PrivateRoutes /> }>
            <Route  element={ <Layout /> }>
              <Route path="/" index element={ <Home /> } />
              <Route path="/me" element={ <Me /> }  />
              <Route path="/search">
                <Route path="results" element={ <SearchResults /> } />
              </Route>
              <Route path="/artist/:id" element={<Artist />}/>
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  )
}