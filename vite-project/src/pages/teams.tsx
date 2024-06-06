import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../css/team.css";


function Teams () {
    const [teams, setTeams] = useState([]);
    const [error, setError] = useState(null);
    const { data } = useFetch('teamstats');
  
    if (error) {
      return <p>{error}</p>;
    }

    return(
        <>

<main className="st_viewport">
  <div className="st_wrap_table" data-table_id="0">
    <header className="st_table_header">
      <h2>Eastern</h2>
          <div className="st_row">
        <div className="st_column _section">Rank</div>
        <div className="st_column _section">Name</div>
        <div className="st_column _section">W</div>
        <div className="st_column _section">L</div>
        <div className="st_column _section">Pct</div>
        <div className="st_column _section">GB</div>
        <div className="st_column _section">Conf</div>
        <div className="st_column _section">Home</div>
        <div className="st_column _section">Away</div>
        <div className="st_column _section">L10</div>
        <div className="st_column _section">Strk</div>
      </div>
    </header>
    
    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">1</div>
        <div className="st_column _section">Celtics</div>
        <div className="st_column _section">64</div>
        <div className="st_column _section">18</div>
        <div className="st_column _section">.780</div>
        <div className="st_column _section">-</div>
        <div className="st_column _section">41-11</div>
        <div className="st_column _section">37-4</div>
        <div className="st_column _section">27-14</div>
        <div className="st_column _section">7-3</div>
        <div className="st_column _section">W2</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">2</div>
        <div className="st_column _section">Knicks</div>
        <div className="st_column _section">50</div>
        <div className="st_column _section">32</div>
        <div className="st_column _section">.610</div>
        <div className="st_column _section">14.0</div>
        <div className="st_column _section">35-17</div>
        <div className="st_column _section">27-14</div>
        <div className="st_column _section">23-18</div>
        <div className="st_column _section">6-4</div>
        <div className="st_column _section">W5</div>

      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">3</div>
        <div className="st_column _section">Bucks</div>
        <div className="st_column _section">49</div>
        <div className="st_column _section">33</div>
        <div className="st_column _section">.598</div>
        <div className="st_column _section">15.0</div>
        <div className="st_column _section">34-8</div>
        <div className="st_column _section">31-11</div>
        <div className="st_column _section">18-22</div>
        <div className="st_column _section">3-7</div>
        <div className="st_column _section">L2</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">4</div>
        <div className="st_column _section">Cavaliers</div>
        <div className="st_column _section">48</div>
        <div className="st_column _section">34</div>
        <div className="st_column _section">.585</div>
        <div className="st_column _section">16.0</div>
        <div className="st_column _section">31-21</div>
        <div className="st_column _section">26-15</div>
        <div className="st_column _section">22-19</div>
        <div className="st_column _section">4-6</div>
        <div className="st_column _section">L1</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">5</div>
        <div className="st_column _section">Magic</div>
        <div className="st_column _section">47</div>
        <div className="st_column _section">35</div>
        <div className="st_column _section">.573</div>
        <div className="st_column _section">17.0</div>
        <div className="st_column _section">32-20</div>
        <div className="st_column _section">29-12</div>
        <div className="st_column _section">18-23</div>
        <div className="st_column _section">5-5</div>
        <div className="st_column _section">W1</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">6</div>
        <div className="st_column _section">Pacers</div>
        <div className="st_column _section">47</div>
        <div className="st_column _section">35</div>
        <div className="st_column _section">.573</div>
        <div className="st_column _section">17.0</div>
        <div className="st_column _section">32-20</div>
        <div className="st_column _section">26-15</div>
        <div className="st_column _section">21-20</div>
        <div className="st_column _section">7-3</div>
        <div className="st_column _section">W1</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">7</div>
        <div className="st_column _section">76ers</div>
        <div className="st_column _section">47</div>
        <div className="st_column _section">35</div>
        <div className="st_column _section">.573</div>
        <div className="st_column _section">17.0</div>
        <div className="st_column _section">31-21</div>
        <div className="st_column _section">25-16</div>
        <div className="st_column _section">22-19</div>
        <div className="st_column _section">B-2</div>
        <div className="st_column _section">W8</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">8</div>
        <div className="st_column _section">Heat</div>
        <div className="st_column _section">46</div>
        <div className="st_column _section">36</div>
        <div className="st_column _section">.561</div>
        <div className="st_column _section">18.0</div>
        <div className="st_column _section">32-20</div>
        <div className="st_column _section">22-19</div>
        <div className="st_column _section">24-17</div>
        <div className="st_column _section">7-3</div>
        <div className="st_column _section">W2</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">9</div>
        <div className="st_column _section">Bulls</div>
        <div className="st_column _section">39</div>
        <div className="st_column _section">43</div>
        <div className="st_column _section">.476</div>
        <div className="st_column _section">25.0</div>
        <div className="st_column _section">22-29</div>
        <div className="st_column _section">20-21</div>
        <div className="st_column _section">19-22</div>
        <div className="st_column _section">5-5</div>
        <div className="st_column _section">L1</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">10</div>
        <div className="st_column _section">Hawks</div>
        <div className="st_column _section">36</div>
        <div className="st_column _section">46</div>
        <div className="st_column _section">.439</div>
        <div className="st_column _section">28.0</div>
        <div className="st_column _section">22-30</div>
        <div className="st_column _section">21-20</div>
        <div className="st_column _section">15-26</div>
        <div className="st_column _section">3-7</div>
        <div className="st_column _section">L6</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">11</div>
        <div className="st_column _section">Nets</div>
        <div className="st_column _section">32</div>
        <div className="st_column _section">50</div>
        <div className="st_column _section">.390</div>
        <div className="st_column _section">32.0</div>
        <div className="st_column _section">24-28</div>
        <div className="st_column _section">20-21</div>
        <div className="st_column _section">12-29</div>
        <div className="st_column _section">5-5</div>
        <div className="st_column _section">L2</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">12</div>
        <div className="st_column _section">Raptors</div>
        <div className="st_column _section">25</div>
        <div className="st_column _section">57</div>
        <div className="st_column _section">.305</div>
        <div className="st_column _section">39.0</div>
        <div className="st_column _section">18-34</div>
        <div className="st_column _section">14-27</div>
        <div className="st_column _section">11-30</div>
        <div className="st_column _section">2-8</div>
        <div className="st_column _section">L4</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">13</div>
        <div className="st_column _section">Hornets</div>
        <div className="st_column _section">21</div>
        <div className="st_column _section">61</div>
        <div className="st_column _section">.256</div>
        <div className="st_column _section">43.0</div>
        <div className="st_column _section">14-38</div>
        <div className="st_column _section">11-30</div>
        <div className="st_column _section">10-31</div>
        <div className="st_column _section">3-7</div>
        <div className="st_column _section">W1</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">14</div>
        <div className="st_column _section">Wizards</div>
        <div className="st_column _section">15</div>
        <div className="st_column _section">67</div>
        <div className="st_column _section">.183</div>
        <div className="st_column _section">49.0</div>
        <div className="st_column _section">11-41</div>
        <div className="st_column _section">7-34</div>
        <div className="st_column _section">8-33</div>
        <div className="st_column _section">1-9</div>
        <div className="st_column _section">L6</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">15</div>
        <div className="st_column _section">Pistons</div>
        <div className="st_column _section">14</div>
        <div className="st_column _section">68</div>
        <div className="st_column _section">.171</div>
        <div className="st_column _section">50.0</div>
        <div className="st_column _section">10-41</div>
        <div className="st_column _section">7-33</div>
        <div className="st_column _section">7-35</div>
        <div className="st_column _section">2-8</div>
        <div className="st_column _section">L1</div>
      </div>
    </div>

  </div>


  <div className="st_wrap_table" data-table_id="1">
    <header className="st_table_header">
      <h2>Western</h2>
      <div className="st_row">
      <div className="st_column _section">Rank</div>
        <div className="st_column _section">Name</div>
        <div className="st_column _section">W</div>
        <div className="st_column _section">L</div>
        <div className="st_column _section">Pct</div>
        <div className="st_column _section">GB</div>
        <div className="st_column _section">Conf</div>
        <div className="st_column _section">Home</div>
        <div className="st_column _section">Away</div>
        <div className="st_column _section">L10</div>
        <div className="st_column _section">Strk</div>
      </div>
    </header>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">1</div>
        <div className="st_column _section">Thunder</div>
        <div className="st_column _section">57</div>
        <div className="st_column _section">25</div>
        <div className="st_column _section">.695</div>
        <div className="st_column _section">-</div>
        <div className="st_column _section">36-16</div>
        <div className="st_column _section">33-8</div>
        <div className="st_column _section">24-17</div>
        <div className="st_column _section">7-3</div>
        <div className="st_column _section">W5</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">2</div>
        <div className="st_column _section">Nuggets</div>
        <div className="st_column _section">57</div>
        <div className="st_column _section">25</div>
        <div className="st_column _section">.695</div>
        <div className="st_column _section">-</div>
        <div className="st_column _section">33-19</div>
        <div className="st_column _section">33-8</div>
        <div className="st_column _section">24-17</div>
        <div className="st_column _section">6-4</div>
        <div className="st_column _section">W1</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">3</div>
        <div className="st_column _section">Timberwolve</div>
        <div className="st_column _section">56</div>
        <div className="st_column _section">26</div>
        <div className="st_column _section">.683</div>
        <div className="st_column _section">1.0</div>
        <div className="st_column _section">37-15</div>
        <div className="st_column _section">30-11</div>
        <div className="st_column _section">26-15</div>
        <div className="st_column _section">6-4</div>
        <div className="st_column _section">L1</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">4</div>
        <div className="st_column _section">Clippers</div>
        <div className="st_column _section">51</div>
        <div className="st_column _section">31</div>
        <div className="st_column _section">.622</div>
        <div className="st_column _section">6.0</div>
        <div className="st_column _section">30-22</div>
        <div className="st_column _section">25-16</div>
        <div className="st_column _section">26-15</div>
        <div className="st_column _section">6-4</div>
        <div className="st_column _section">L3</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">5</div>
        <div className="st_column _section">Mavericks</div>
        <div className="st_column _section">50</div>
        <div className="st_column _section">32</div>
        <div className="st_column _section">.610</div>
        <div className="st_column _section">7.0</div>
        <div className="st_column _section">31-21</div>
        <div className="st_column _section">25-16</div>
        <div className="st_column _section">25-16</div>
        <div className="st_column _section">7-3</div>
        <div className="st_column _section">L2</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">6</div>
        <div className="st_column _section">Suns</div>
        <div className="st_column _section">49</div>
        <div className="st_column _section">33</div>
        <div className="st_column _section">.598</div>
        <div className="st_column _section">8.0</div>
        <div className="st_column _section">29-23</div>
        <div className="st_column _section">25-16</div>
        <div className="st_column _section">24-17</div>
        <div className="st_column _section">7-3</div>
        <div className="st_column _section">W3</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">7</div>
        <div className="st_column _section">Lakers</div>
        <div className="st_column _section">47</div>
        <div className="st_column _section">35</div>
        <div className="st_column _section">.573</div>
        <div className="st_column _section">10.0</div>
        <div className="st_column _section">27-25</div>
        <div className="st_column _section">28-14</div>
        <div className="st_column _section">19-21</div>
        <div className="st_column _section">7-3</div>
        <div className="st_column _section">W2</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">8</div>
        <div className="st_column _section">Pelicans</div>
        <div className="st_column _section">49</div>
        <div className="st_column _section">33</div>
        <div className="st_column _section">.598</div>
        <div className="st_column _section">8.0</div>
        <div className="st_column _section">30-22</div>
        <div className="st_column _section">21-19</div>
        <div className="st_column _section">28-14</div>
        <div className="st_column _section">5-5</div>
        <div className="st_column _section">L1</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">9</div>
        <div className="st_column _section">Kings</div>
        <div className="st_column _section">46</div>
        <div className="st_column _section">36</div>
        <div className="st_column _section">.561</div>
        <div className="st_column _section">11.0</div>
        <div className="st_column _section">30-22</div>
        <div className="st_column _section">24-17</div>
        <div className="st_column _section">22-19</div>
        <div className="st_column _section">4-6</div>
        <div className="st_column _section">W1</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">10</div>
        <div className="st_column _section">Warriors</div>
        <div className="st_column _section">46</div>
        <div className="st_column _section">36</div>
        <div className="st_column _section">.561</div>
        <div className="st_column _section">11.0</div>
        <div className="st_column _section">26-26</div>
        <div className="st_column _section">21-20</div>
        <div className="st_column _section">25-16</div>
        <div className="st_column _section">8-2</div>
        <div className="st_column _section">W1</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">11</div>
        <div className="st_column _section">Rockets</div>
        <div className="st_column _section">41</div>
        <div className="st_column _section">41</div>
        <div className="st_column _section">.500</div>
        <div className="st_column _section">16.0</div>
        <div className="st_column _section">28-24</div>
        <div className="st_column _section">27-14</div>
        <div className="st_column _section">14-27</div>
        <div className="st_column _section">4-6</div>
        <div className="st_column _section">W2</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">12</div>
        <div className="st_column _section">Jazz</div>
        <div className="st_column _section">31</div>
        <div className="st_column _section">51</div>
        <div className="st_column _section">.378</div>
        <div className="st_column _section">26.0</div>
        <div className="st_column _section">16-36</div>
        <div className="st_column _section">21-20</div>
        <div className="st_column _section">10-31</div>
        <div className="st_column _section">2-8</div>
        <div className="st_column _section">L1</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">13</div>
        <div className="st_column _section">Grizzlies</div>
        <div className="st_column _section">27</div>
        <div className="st_column _section">55</div>
        <div className="st_column _section">.329</div>
        <div className="st_column _section">30.0</div>
        <div className="st_column _section">14-37</div>
        <div className="st_column _section">9-32</div>
        <div className="st_column _section">18-23</div>
        <div className="st_column _section">3-7</div>
        <div className="st_column _section">L5</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">14</div>
        <div className="st_column _section">Spurs</div>
        <div className="st_column _section">22</div>
        <div className="st_column _section">60</div>
        <div className="st_column _section">.268</div>
        <div className="st_column _section">35.0</div>
        <div className="st_column _section">14-37</div>
        <div className="st_column _section">12-29</div>
        <div className="st_column _section">10-31</div>
        <div className="st_column _section">6-4</div>
        <div className="st_column _section">W2</div>
      </div>
    </div>

    <div className="st_table">
      <div className="st_row">
        <div className="st_column _section">15</div>
        <div className="st_column _section">Trail Blazers</div>
        <div className="st_column _section">21</div>
        <div className="st_column _section">61</div>
        <div className="st_column _section">.256</div>
        <div className="st_column _section">36.0</div>
        <div className="st_column _section">8-44</div>
        <div className="st_column _section">11-30</div>
        <div className="st_column _section">10-31</div>
        <div className="st_column _section">2-8</div>
        <div className="st_column _section">L5</div>
      </div>
    </div>
  </div>
</main>
<footer>
  <pre>

  </pre>
</footer>
        </>
    );
}

export default Teams;