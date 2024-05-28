import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Navigation.css';

function Navigation() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('https://api.balldontlie.io/v1/teams', {
          headers: {
            'Authorization': `d599cf75-13b3-413a-a46e-a13fca488265`  // Adjust the header as per the API's requirement
          }
        });

        setTeams(response.data.data); // Assuming the data is stored in `data.data`
      } catch (err) {
        setError('Failed to fetch data');
        console.error('Error fetching teams:', err);
      }
    };

    fetchTeams();
  }, []);

  const handleSelectChange = (event) => {
    const teamId = event.target.value;
    if (teamId) {
      navigate(`/roster?teamId=${teamId}`);
    }
  };

  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Standings" className="nav-link">Standings</Link>
          </li>
          <li className="nav-item">
            <Link to="/PlayerList" className="nav-link">League</Link>
          </li>
          <li className="nav-item">
            <select onChange={handleSelectChange} className="nav-select">
              <option value="">Select Team</option>
              {teams.slice(0, 30).map(team => (
                <option key={team.id} value={team.id}>{team.full_name}</option>
              ))}
            </select>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
