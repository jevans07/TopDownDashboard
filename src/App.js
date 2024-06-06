import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LearnMore from './components/pages/LearnMore';
import Outreach from './components/pages/Outreach';
import Pathogen from './components/pages/Pathogen';
import Resistance from './components/pages/Resistance';
import Specifics from './components/pages/Specifics';
import PSelection from './components/pages/PSelection';
import PMaps from './components/pages/PMaps';
import PProfiles from './components/pages/PProfiles';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
<Navbar />
<Routes>
  <Route path='/' exact component={Home} />
  <Route path='/learn-more' exact component={LearnMore} />
  <Route path='/outreach' exact component={Outreach} />
  <Route path='/pathogen' exact component={Pathogen} />
  <Route path='/resistance' exact component={Resistance} />
  <Route path='/specifics' exact component={Specifics} />
  <Route path='/pathogen-selection' exact component={PSelection} />
  <Route path='/pathogen-maps' exact component={PMaps} />
  <Route path='/pathogen-profiles' exact component={PProfiles} />
</Routes>
    </Router>

  );
}

export default App;
