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

import FIcon1 from '../mile2-aseets/footer/icons/icon-1.png';
import FIcon2 from '../mile2-aseets/footer/icons/icon-2.png';
import FIcon3 from '../mile2-aseets/footer/icons/icon-3.png';
import FLogo from '../mile2-aseets/footer/logo-footer.svg';

import IPic0 from '../mile2-aseets/footer/insta/li-0.png';
import IPic1 from '../mile2-aseets/footer/insta/li-1.png';
import IPic2 from '../mile2-aseets/footer/insta/li-2.png';
import IPic3 from '../mile2-aseets/footer/insta/li-3.png';
import IPic4 from '../mile2-aseets/footer/insta/li-4.png';
import IPic5 from '../mile2-aseets/footer/insta/li-5.png';

import p1 from '../mile2-aseets/pictures/food-1.png';
import p2 from '../mile2-aseets/pictures/food-2.png';
import p3 from '../mile2-aseets/pictures/food-3.png';

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
          <span>
            <img src={icon1} alt="Your Icon" />
            YENI Kore
          </span>
          <span>
            <img src={icon2} alt="Your Icon" />
            Pizza
          </span>
          <span>
            <img src={icon3} alt="Your Icon" />
            Burger
          </span>
          <span>
            <img src={icon4} alt="Your Icon" />
            Kızartmalar
          </span>
          <span>
            <img src={icon5} alt="Your Icon" />
            Fast Food
          </span>
          <span>
            <img src={icon6} alt="Your Icon" />
            Gazlı İçecekler
          </span>
        </section>
      </header>
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
      <section className="cards2">
        <p>deneme</p>
        <h3>deneme</h3>
        <div className="bodyBot">
          <span>
            <img src={icon1} alt="Your Icon" />
            YENI Kore
          </span>
          <div className="darkicon">
            <img className="darkicon" src={icon2} alt="Your Icon" />
            Pizza
          </div>
          <span>
            <img src={icon3} alt="Your Icon" />
            Burger
          </span>
          <span>
            <img src={icon4} alt="Your Icon" />
            Kızartmalar
          </span>
          <span>
            <img src={icon5} alt="Your Icon" />
            Fast Food
          </span>
          <span>
            <img src={icon6} alt="Your Icon" />
            Gazlı İçecekler
          </span>
        </div>
        <div className="products">
          <span className="productCard">
            <img src={p1} alt="" />
            <div className="productDis">
              <h4>deneme</h4>
              <p>deneme</p>
              <p>deneme</p>
            </div>
          </span>
          <span className="productCard">
            <img src={p2} alt="" />
            <div className="productDis">
              <h4>deneme</h4>
              <p>deneme</p>
              <p>deneme</p>
            </div>
          </span>
          <span className="productCard">
            <img src={p3} alt="" />
            <div className="productDis">
              <h4>deneme</h4>
              <p>deneme</p>
              <p>deneme</p>
            </div>
          </span>
        </div>
      </section>
      <footer>
        <div className="F1">
          <img className="logoF" src={FLogo} alt="" />
          <span>
            <img src={FIcon1} alt="" />
            <p>deneme</p>
          </span>
          <span>
            <img src={FIcon2} alt="" />
            <p>deneme</p>
          </span>
          <span>
            <img src={FIcon3} alt="" />
            <p>deneme</p>
          </span>
        </div>
        <div className="F2">
          <h4>Deneme</h4>
          <p>deneme</p>
          <p>deneme</p>
          <p>deneme</p>
          <p>deneme</p>
          <p>deneme</p>
          <p>deneme</p>
        </div>
        <div className="F3">
          <h4>instagram</h4>
          <span>
            <img src={IPic0} alt="" />
            <img src={IPic1} alt="" />
            <img src={IPic2} alt="" />
          </span>
          <span>
            <img src={IPic3} alt="" />
            <img src={IPic4} alt="" />
            <img src={IPic5} alt="" />
          </span>
        </div>
        <div className="F4">
          <p>deneme</p>
        </div>
      </footer>
    </div>
  );
}
