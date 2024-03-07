import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import logo from './logo.svg';
export default function Success() {
  return (
    <div className="suc">
      <section>
        <img className="logoSuc " src={logo} alt="" />
      </section>
      <p className="mainP">TEBRIKLER!</p>
      <p className="mainP">SİPARIŞİNİZ ALINDI!</p>
    </div>
  );
}
