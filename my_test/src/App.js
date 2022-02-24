import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/Layout'
import Landing from '../src/components/landing/Landing'

function App() {
  return (
    <Router>
   <Layout />
   </Router>
  );
}

export default App;
