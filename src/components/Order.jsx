import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Button,
  FormFeedback,
  CardTitle,
  CardBody,
  Card,
  CardText,
} from 'reactstrap';
import axios from 'axios';
import './order.css';
import Header from './Header';

const initialForm = {
  fullName: '',
  size: '',
  thickness: '',
  material: [],
  text: '',
};

const materialOptions = [
  'Pepperoni',
  'Domates',
  'Biber',
  'Sosis',
  'Mısır',
  'Sucuk',
  'Kanada Jambonu',
  'Tavuk ızgara',
  'Jalepeno',
  'Kabak',
  'Ananas',
  'Zeytin',
  'Mantar',
];

export default function Order() {
  const [form, setForm] = useState(initialForm);
  const [formValid, setFormValid] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const updatedForm = {
      ...form,
      [name]: type === 'checkbox' ? [...form[name], value] : value,
    };

    setForm(updatedForm);
    validateForm(updatedForm);
  };

  const validateForm = (formData) => {
    const isNameValid = formData.fullName.length >= 3;
    const isMaterialValid =
      formData.material.length >= 4 && formData.material.length <= 10;

    setFormValid(isNameValid && isMaterialValid);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('https://reqres.in/api/pizza', form)
      .then((response) => {
        console.log('API Response:', response.data);

        // window.location.href = '/success';
      })
      .catch((error) => {
        console.error('API Request Error:', error);
      });
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="orderContainer">
        <Form onSubmit={handleSubmit} disabled={!formValid}>
          <FormGroup>
            <Label for="fullName">Ad Soyad:</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="ad ve soyadı"
              type="text"
              onChange={handleChange}
              invalid={form.fullName.length > 0 && form.fullName.length < 3}
            />
            <FormFeedback>En az 3 karakter girilmelidir.</FormFeedback>
          </FormGroup>

          <section className="pastry">
            <FormGroup tag="fieldset">
              <legend>Boyut Seç</legend>
              <FormGroup check>
                <Label check>
                  <Input
                    id="size"
                    name="size"
                    type="radio"
                    onChange={handleChange}
                  />{' '}
                  Küçük
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    id="size"
                    name="size"
                    type="radio"
                    onChange={handleChange}
                  />{' '}
                  Orta
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    id="size"
                    name="size"
                    type="radio"
                    onChange={handleChange}
                  />{' '}
                  Büyük
                </Label>
              </FormGroup>
            </FormGroup>

            <FormGroup>
              <Label for="thickness">Hamur Seç</Label>
              <Input
                id="thickness"
                name="thickness"
                type="select"
                onChange={handleChange}
              >
                <option>Ince</option>
                <option>Orta</option>
                <option>Kalın</option>
              </Input>
            </FormGroup>
          </section>

          <section className="materials">
            <FormGroup check>
              <legend>Ek Malzemeler</legend>
              {materialOptions.map((material, index) => (
                <div className="checkbox-row" key={index}>
                  <Label for={`material${index + 1}`} check>
                    <Input
                      id={`material${index + 1}`}
                      type="checkbox"
                      name="material"
                      value={material}
                      onChange={handleChange}
                    />{' '}
                    {material}
                  </Label>
                </div>
              ))}
              <FormText color="danger">
                En az 4, en fazla 10 malzeme seçimi yapmalısınız.
              </FormText>
            </FormGroup>
          </section>

          <FormGroup>
            <Label for="text">Sipariş Notu:</Label>
            <Input
              id="text"
              name="text"
              type="textarea"
              onChange={handleChange}
            />
          </FormGroup>

          <footer className="formCard">
            <section className="piecesBtn">
              <Button color="warning">-</Button>
              <span style={{ margin: '0 10px' }}>{'0'}</span>
              <Button color="warning">+</Button>
            </section>
            <section>
              <Card style={{ width: '18rem' }}>
                <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
                <CardBody>
                  <CardText>Seçimler{}</CardText>
                  <CardText>Toplam{}</CardText>
                </CardBody>
                <Button color="warning" type="submit" disabled={!formValid}>
                  Sipariş Ver
                </Button>
              </Card>
            </section>
          </footer>
        </Form>
      </div>
    </>
  );
}
