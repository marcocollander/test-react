import Link from "./Link";

const Navigation = () => (
  <>
    <nav className='menu'>
      <ul className='menu__list'>
        <Link href ='/' destination ='Strona domowa' />
        <Link href = '#' destination = 'O mnie'/>
        <Link href = '#' destination = 'blog'/>
        <Link href = '#' destination= 'kontakt'/>
      </ul>
    </nav>
  </>
);

export default Navigation;
