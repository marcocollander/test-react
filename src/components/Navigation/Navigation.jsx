const Navigation = () => {
  const list = [['/', 'Strona domowa'], ['#', 'O mnie'], ['#', 'Blog'], ['#', 'Kontakt']];

  const listItems = list.map((item, i) => {
    return (
      <li className='menu__item' key={i}>
        <a className='menu__link' href={item[0]}>{item[1]}</a>
      </li>);
  });

  return (
    <nav className="menu">
      <ul className="menu__list">
        {listItems}
      </ul>
    </nav>
  );
};

export default Navigation;
