import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Hamburger from "./components/Hamburger/Hamburger";
import Button from "./components/Button/Button";

const App = () => {

  const click = () => {
    const showLine = document.querySelector('.show')
    const hamburger = document.querySelector('.hamburger')
    let classesHamburger = hamburger.classList
    classesHamburger.toggle('rotate')
    let classesLine = showLine.classList
    classesLine.toggle('hidden')
    // classesLine.toggle('show')

  }

  return (
    <div>
      <Hamburger click={click} show='show'/>
      <Header title='Testowa aplikacja w React'/>
      <Navigation/>
      <Button/>
    </div>
  )
};

export default App;
