import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import logo from './logo.svg';
import icon1 from '../mile2-aseets/icons/1.svg';
import icon2 from '../mile2-aseets/icons/2.svg';
import icon3 from '../mile2-aseets/icons/3.svg';
import icon4 from '../mile2-aseets/icons/4.svg';
import icon5 from '../mile2-aseets/icons/5.svg';
import icon6 from '../mile2-aseets/icons/6.svg';

const customButtonStyle = {
  marginTop: '1rem',
  display: 'inline-block',
  padding: '10px 40px',
  borderRadius: '20px',
  backgroundColor: '#fdc913',
  color: 'black',
  textDecoration: 'none',
  fontSize: 'large',
};

export default function AdvMain() {
  return (
    <div className="AdvContainer">
      <header>
        <div className="AdvMain">
          <section>
            <img className="logo" src={logo} alt="" />
          </section>
          <p className="mainP">KOD ACIKTIRIR </p>
          <p className="mainP">PIZZA, DOYURUR</p>
          <Link to="/order">
            <Button style={customButtonStyle}>Acıktım</Button>
          </Link>
        </div>
        <section className="headBot">
          <img src={icon1} alt="Your Icon" />
          <img src={icon2} alt="Your Icon" />
          <img src={icon3} alt="Your Icon" />
          <img src={icon4} alt="Your Icon" />
          <img src={icon5} alt="Your Icon" />
          <img src={icon6} alt="Your Icon" />
        </section>
        <section className="cards">
          <div className="leftCard">
            <legend>deneme</legend>
            <p>denem</p>
            <button>deneme</button>
          </div>
          <div className="rightCard">
            <div className="rightTop">
              <legend>deneme</legend>
              <p>denem</p>
              <button>deneme</button>
            </div>{' '}
            <div className="rightBot">
              <legend>deneme</legend>
              <p>deneme</p>
              <button>deneme</button>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}
