// Wprowadzenie do JSX.
// JSX to rozszerzenie JS o możliwość wstawiania znaczników

function formatName() {
  return `${user.firstName} ${user.lastName}`;
}

const user = {
  firstName: 'Mark',
  lastName: 'Kovalsky'
}

const heading = <h1>Hello {formatName(user)}!</h1>

const element = (
  <h2 className="greeting">
    Witaj, świecie!
  </h2>
);

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Witaj, świecie!'
// );
//
// // Note: this structure is simplified
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Witaj, świecie'
//   }
// };