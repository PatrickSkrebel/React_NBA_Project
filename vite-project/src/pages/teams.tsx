import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../css/team.css";


function Teams () {
    const [teams, setTeams] = useState([]);
    const [error, setError] = useState(null);
    const { data } = useFetch('eastconf');


    const EastConf = data;
    const WestConf = data;

  if (error) {
      return <p>Error: {error}</p>;
  }

  if (!data) {
      return <p>No data found.</p>;
  }

  if (!WestConf) {
    return <p>No data found.</p>;
}

    return(
        <>

                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <table style={{ marginLeft: 'auto', marginRight: 'auto', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Team</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>W</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>L</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>WIN%</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>GB</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>CONF</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>HOME</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>AWAY</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>L10</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Strk</th>
                        </tr>

                    </thead>
                    <tbody>

                    {EastConf.slice(0, 15).sort((a, b) => b.pct - a.pct).map((team) => (
                      <tr key={team.id} style={{ border: '1px solid black', padding: '8px' }}>
                          <td>{team.team}</td>
                          <td>{team.w}</td>
                          <td>{team.l}</td>
                          <td>{team.pct}</td> {/* Assuming you'll update this later */}
                          <td>{team.gb}</td> {/* Assuming you'll update this later */}
                          <td>{team.conf}</td> {/* Assuming you'll update this later */}
                          <td>{team.home}</td> {/* Assuming you'll update this later */}
                          <td>{team.away}</td> {/* Assuming you'll update this later */}
                          <td>{team.L10}</td> {/* Assuming you'll update this later */}
                          <td>{team.Strk}</td> {/* Assuming you'll update this later */}
                      </tr>
                  ))}
                    </tbody>
                </table>
                <table style={{ marginLeft: 'auto', marginRight: 'auto', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f2f2f2' }}>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Team</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>W</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>L</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>WIN%</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>GB</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>CONF</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>HOME</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>AWAY</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>L10</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Strk</th>
                        </tr>

                    </thead>
                    <tbody>

                        {EastConf.slice(15,30).sort((a, b) => b.pct - a.pct).map((team)=> (
                            <tr key={team.id} style={{ border: '1px solid black', padding: '8px' }}>
                                <td>{team.team}</td>
                                <td>{team.w}</td>
                                <td>{team.l}</td>
                                <td>{team.pct}</td> {/* Assuming you'll update this later */}
                                <td>{team.gb}</td> {/* Assuming you'll update this later */}
                                <td>{team.conf}</td> {/* Assuming you'll update this later */}
                                <td>{team.home}</td> {/* Assuming you'll update this later */}
                                <td>{team.away}</td> {/* Assuming you'll update this later */}
                                <td>{team.L10}</td> {/* Assuming you'll update this later */}
                                <td>{team.Strk}</td> {/* Assuming you'll update this later */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    );
}

export default Teams;