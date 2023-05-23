const Hamburger = () => {
  const click = () => {
    const items = document.querySelectorAll('.hamburger__item');
    items[0].classList.toggle('rotate');
    items[1].classList.toggle('hidden');
    items[2].classList.toggle('reverse-rotate');
  };

  return (
    <button className="hamburger" onClick={click}>
      <span className="hamburger__item"></span>
      <span className="hamburger__item"></span>
      <span className="hamburger__item"></span>
    </button>
  );
};

export default Hamburger;
