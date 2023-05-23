import { useState, useEffect } from 'react';

const ExampleTwo = () => {
  const [count, setCount] = useState(0);

  const click = () => setCount(count + 1);

  useEffect(() => {
    // Zaktualizuj tytuł dokumentu, korzystając z interfejsu API przeglądarki
    document.title = `Naciśnięto ${count} razy`;
  });


  return (
    <div className='example'>
      <p className='example__paragraph'>Licznik: {count}</p>
      <button className="example__button" onClick={click}>Start</button>
    </div>
  );
};

export default ExampleTwo;