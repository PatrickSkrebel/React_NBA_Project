import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Roster() {
    const [players, setPlayers] = useState([]);
    const query = useQuery();
    const teamId = query.get('teamId');
    const [error, setError] = useState(null);

    // Navigate
    const Navigate = useNavigate();

    function goBack(){
        Navigate(-1);
    }

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get(`https://api.balldontlie.io/v1/players?team_ids[]=${teamId}`, { // Corrected to template literals
                    headers: {
                        'Authorization': 'd599cf75-13b3-413a-a46e-a13fca488265' // Adjust the header as per the API's requirement
                    }
                });
                setPlayers(response.data.data); // Assuming the data is stored in `data.data`
            } catch (err) {
                setError('Failed to fetch data');
                console.error('Error fetching team data:', err);
            }
        };

        fetchPlayers();
    }, [teamId]); // Dependency on id to re-fetch when it changes

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <div>
                <button onClick={goBack}>Back</button>
                <b><p>* Players with no position are players who are retired and prevously played for the team</p></b>
                <h1 style={{ textAlign: 'center'}}>Roster</h1>
            </div>

            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <table style={{ marginLeft: 'auto', marginRight: 'auto', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th style={{ border: '1px solid black', padding: '8px' }}>#</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Position</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>College</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                           
                            <tr key={player.id} style={{ border: '1px solid black', padding: '8px' }}>
                                <td>{player.jersey_number}</td>
                                <td><Link to={`/playerStat?playerId=${player.id}`}>{player.first_name} {player.last_name}</Link></td>
                                <td>{player.position}</td>
                                <td>{player.college}</td> {/* Assuming you'll update this later */}
                                <td>{player.country}</td> {/* Assuming you'll update this later */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Roster;
