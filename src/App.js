import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import PillsTaken from './pages/pills-taken/PillsTaken';
import PillsMissed from './pages/pills-missed/PillsMissed';
import MedicineTracker from './components/header/MedicineTracker';
import Number from './components/number/Number';



function App() {
  return (
    <div className="App">
      <MedicineTracker />
     <Switch>
       <Route exact path='/' component={PillsTaken} />
       <Route path='/missed' component={PillsMissed} />
     </Switch>
      {/* <Number /> */}
    </div>
  );
}

export default App;
