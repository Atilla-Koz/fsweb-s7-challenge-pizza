import React from 'react';
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
import './order.css';
import Header from './Header';
export default function Order() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="orderContainer">
        <Form>
          <FormGroup>
            <Label for="ad">Ad:</Label>
            <Input />
            <FormFeedback>You will not be able to see this</FormFeedback>
            <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <section className="pastry">
            <FormGroup tag="fieldset">
              <legend>Boyut Seç</legend>
              <FormGroup check>
                <Label check>
                  <Input name="size" type="radio" /> Küçük
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input name="size" type="radio" /> Orta
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input name="size" type="radio" /> Büyük
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label for="thickness">Hamur Seç</Label>
              <Input id="thickness" name="thickness" type="select">
                <option>Ince</option>
                <option>Orta</option>
                <option>Kalın</option>
              </Input>
            </FormGroup>
          </section>
          <section className="materials">
            <FormGroup check>
              <div className="checkbox-row">
                <Label for="material1" check>
                  <Input id="material1" type="checkbox" /> Pepperoni
                </Label>
                <Label for="material2" check>
                  <Input id="material2" type="checkbox" /> Domates
                </Label>
                <Label for="material3" check>
                  <Input id="material3" type="checkbox" />
                  Biber
                </Label>
              </div>
              <div className="checkbox-row">
                <Label for="material4" check>
                  <Input id="material4" type="checkbox" /> Sosis
                </Label>
                <Label for="material5" check>
                  <Input id="material5" type="checkbox" /> Mısır
                </Label>
                <Label for="material6" check>
                  <Input id="material6" type="checkbox" /> Sucuk
                </Label>
              </div>
              <div className="checkbox-row">
                <Label for="material7" check>
                  <Input id="material7" type="checkbox" /> Kanada Jambonu
                </Label>
                <Label for="material8" check>
                  <Input id="material8" type="checkbox" /> Sucuk
                </Label>
                <Label for="material9" check>
                  <Input id="material9" type="checkbox" /> Ananas
                </Label>
              </div>
              <div className="checkbox-row">
                <Label for="material7" check>
                  <Input id="material7" type="checkbox" /> Tavuk ızgara
                </Label>
                <Label for="material8" check>
                  <Input id="material8" type="checkbox" /> Jalepeno
                </Label>
                <Label for="material9" check>
                  <Input id="material9" type="checkbox" /> Kabak
                </Label>
              </div>
            </FormGroup>
          </section>

          <FormGroup>
            <Label for="text">Sipariş Notu:</Label>
            <Input id="text" name="text" type="textarea" />
          </FormGroup>
        </Form>
      </div>
      <foother className="formCard">
        <section className="piecesBtn">
          <Button color="warning">-</Button>
          <span style={{ margin: '0 10px' }}>{'0'}</span>
          <Button color="warning">+</Button>
        </section>
        <section>
          <Card
            style={{
              width: '18rem',
              paddingLeft: '10px',
            }}
          >
            <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
            <CardBody>
              <CardText>Seçimler{}</CardText>
              <CardText>Toplam{}</CardText>
            </CardBody>
            <Button color="warning">Sipariş Ver</Button>
          </Card>
        </section>
      </foother>
    </>
  );
}
