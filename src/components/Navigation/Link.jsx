const Link = ({href, destination}) => (
  <>
    <li className='menu__item'><a className='menu__link' href={href}>{destination}</a></li>
  </>
);

export default Link;