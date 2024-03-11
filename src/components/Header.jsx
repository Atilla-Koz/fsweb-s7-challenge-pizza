import { NavLink } from 'reactstrap';
import logo from './logo.svg';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <section className="headerLink">
        <NavLink href="/">Ana Sayfa</NavLink>
        <NavLink disabled>Seçenekler</NavLink>
        <NavLink href="/order">Sipariş Oluştur</NavLink>
      </section>
    </div>
  );
}
