import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/home/header/header';
import HomePages from './components/pageContent/HomePages';



function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePages}/>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
