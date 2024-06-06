import React from 'react';
import Teams from './pages/teams';
import Home from './pages/home';
import Roster from './pages/roster';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Navigation from './components/Navigation';
import PlayerList from './pages/playerList';
import PlayerStat from './pages/playerStat';
import Test from "./pages/test";


function App() {


        return (
          <Router>
          <div >
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Standings" element={<Teams />}/>
              <Route path="/roster" element={<Roster />}/>
              <Route path="/playerStat" element={<PlayerStat />}/>
              <Route path="/PlayerList"element={<PlayerList />} />
              <Route path="/Test" element={<Test />}/>
            </Routes>
          </div>
        </Router>
        );
}

export default App;
