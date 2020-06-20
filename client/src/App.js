import React, { useEffect } from 'react';
import "./css/style.css";
import AppNavbar from './components/AppNavbar';
import ToDoList from './components/ToDoList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './flux/store';
import { loadUser } from './flux/actions/authActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ToDoList />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
