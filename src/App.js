
import './App.css';
import Form from './components/form';
import { Provider } from 'react-redux';
import { store } from './components/redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <Form></Form>
    <Router>
      <Routes>
        <Route exact path="/" component={Form} />
        <Route exact path="/profile" component={Profile} />
      </Routes>
    </Router>
    
    </div>
    </Provider>
  );
}

export default App;
