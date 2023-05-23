const Line = ({bgc, click, show='showL'}) => (
  <>
    <p className={`line ${show}`} style={{backgroundColor: bgc}} onClick={click}>
    </p>
  </>
);

export default Line;

