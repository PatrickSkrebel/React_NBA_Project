import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/usersLogin.css'

const Cred = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");


    const handleSubmit = (event) => {

    }

  return (
    <>    

      <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input type="checkbox" className="toggle" />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className="flip-card__inner">
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form className="flip-card__form" action="">
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <button className="flip-card__btn">Let's go!</button>
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form className="flip-card__form" action="">
                <input
                  className="flip-card__input"
                  placeholder="Name"
                  type="text"
                />
                <input
                  className="flip-card__input"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <input
                  className="flip-card__input"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <button className="flip-card__btn">Confirm!</button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
    



    </>
  );
};

export default Cred;
