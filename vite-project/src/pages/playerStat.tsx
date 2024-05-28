import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import '../css/playerStats.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Stats() {
    const [players, setPlayers] = useState([]);
    const query = useQuery();
    const playerId = query.get('playerId');
    const [error, setError] = useState(null);
    const [playerInfo, setPlayerInfo] = useState([]);

    // Navigate
    const Navigate = useNavigate();

    function goBack(){
        Navigate(-1);
    }

    // API calls player info
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await axios.get(`https://api.balldontlie.io/v1/season_averages?season=2023&player_ids[]=${playerId}`, { // Corrected to template literals
                    headers: {
                        'Authorization': 'd599cf75-13b3-413a-a46e-a13fca488265' // Adjust the header as per the API's requirement
                    }
                });
                setPlayers(response.data.data); // Assuming the data is stored in `data.data`
            } catch (err) {
                setError('Player Info Failed to fetch data'); //set error message
                console.error('Error fetching player info data:', err);
            }
        };

        fetchPlayers();
    }, []); // Dependency on id to re-fetch when it changes


    // API is calling player stats 
    useEffect(() => {
        const fetchPlayerStat = async () => {
            try {
                const response = await axios.get(`https://api.balldontlie.io/v1/players/${playerId}`, { // Corrected to template literals
                    headers: {
                        'Authorization': 'd599cf75-13b3-413a-a46e-a13fca488265' // Adjust the header as per the API's requirement
                    }
                });
                setPlayerInfo(response.data.data); // Assuming the data is stored in `data.data`
            } catch (err) {
                setError('Stats Failed to fetch data'); // set error message
                console.error('Error fetching player stat data:', err);
            }
        };

        fetchPlayerStat();
    }, [playerId]); // Dependency on id to re-fetch when it changes

    if(error) return <p>{error}</p> // displays error message if data cant be pulled

    return (
        <>
            <div>
                <button onClick={goBack}>Back</button>
                <h1 style={{ textAlign: 'center' }}>Player Stats</h1>
                <b><p>* Players with no stats are retired or don't have access to stats</p></b>
            </div>

            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                <table style={{ marginLeft: 'auto', marginRight: 'auto', borderCollapse: 'collapse', width: '80%' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Position</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>College</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{playerInfo.first_name} {playerInfo.last_name}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{playerInfo.position}</td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>{playerInfo.college}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <hr style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', border: 'none', margin: '0' }} />

            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                <table style={{ marginLeft: 'auto', marginRight: 'auto', borderCollapse: 'collapse', width: '80%' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Pts</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Ast</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Reb</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr key={player.id}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{parseFloat(player.pts).toFixed(1)}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{parseFloat(player.ast).toFixed(1)}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{parseFloat(player.reb).toFixed(1)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    );
}

export default Stats