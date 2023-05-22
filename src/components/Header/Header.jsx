import logo from '../../images/logo.png';


const Header = ({title}) => (
  <>
    <header className="header">

      <h1 className="header__heading">{title}</h1>
      <img src={logo} alt="logo" className="header__logo"/>

      <a href="https://raubuc.net" target="_blank" rel="noopener noreferrer"
         className="header__link">
        Programista hobbysta
      </a>
    </header>
  </>
);


export default Header




