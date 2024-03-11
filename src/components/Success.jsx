import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import logo from './logo.svg';
import { useLocation } from 'react-router-dom';
export default function Success() {
  const location = useLocation();
  const responseData = location.state?.responseData;
  // {<div>{JSON.stringify(responseData)}</div>}

  return (
    <div className="suc">
      <section>
        <img className="logoSuc " src={logo} alt="teknolojik yemekker logo" />
      </section>
      <p className="satisfy-regular">lezzetin yolda</p>
      <p className="barlow-thin">SİPARIŞİNİZ ALINDI</p>
      <section className="sucText">
        <hr></hr>
        <legend>Position Absolute Acı Pizza</legend>
        {<p>Boyut:{JSON.stringify(responseData.size)}</p>}
        {<p>Hamur:{JSON.stringify(responseData.thickness)}</p>}
        {<p>Ek Malzemeler:{JSON.stringify(responseData.material)}</p>}
      </section>
      <footer>
        <Card
          style={{
            border: 'white 1px solid',
            backgroundColor: '#CE2829',
            color: '#FAF7F2',
            width: '18rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <CardTitle style={{ marginTop: '1rem' }} tag="h5">
            Sipariş Toplamı
          </CardTitle>
          <CardBody>
            <CardText>
              Seçimler: {JSON.stringify(responseData.totalPrice) - 85.5} ₺
            </CardText>
            <CardText>
              Toplam: {JSON.stringify(responseData.totalPrice)}
            </CardText>
          </CardBody>
        </Card>
      </footer>
    </div>
  );
}
