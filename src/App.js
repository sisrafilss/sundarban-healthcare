import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './pages/Login/Register/Register';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About/About';
import Services from './pages/Services/Services/Services';
import Contact from './pages/Contact/Contact/Contact';
import ServiceDetail from './pages/Shared/Header/ServiceDetail/ServiceDetail';
import Footer from './pages/Shared/Footer/Footer/Footer';
import PrivatRoute from './PrivatRoute/PrivatRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <PrivatRoute path="/service/:serviceId">
            <ServiceDetail />
          </PrivatRoute>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
