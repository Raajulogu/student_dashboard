import './App.css';
import React,{useState} from 'react';
import { Route,Switch } from 'react-router-dom';
import Student from './Components/studentlist';
import Editstudent from './Components/editstudent';
import Addstudent from './Components/addstudent';
import data from './Basic/data';

function App() {
  let [students,setstudents]=useState(data);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Student
          students={students}
          setstudents={setstudents}
          />
        </Route>
        <Route  path="/edit/:id">
          <Editstudent
          students={students}
          setstudents={setstudents}
          />
        </Route>
        <Route  path="/add">
          <Addstudent
          students={students}
          setstudents={setstudents}
          />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
