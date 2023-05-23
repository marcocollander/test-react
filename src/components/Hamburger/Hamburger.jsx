import Line from './Line'
const Hamburger = ({click, show}) => {
    return (
      <div className='hamburger' onClick={click}>
        <Line bgc='white'/>
        <Line bgc='black'/>
        <Line bgc='white' click={click} show={show}/>
        <Line bgc='black'/>
        <Line bgc='white'/>
        <Line bgc='black'/>
    </div>
    );
};

export default Hamburger;
