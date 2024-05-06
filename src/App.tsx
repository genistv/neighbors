import "./App.css";
import { Tiquet } from "./tiquet";

const tiquets = {
  ADULT: {
    total: 200,
    preu: 14,
  },
  INFANTIL: {
    total: 80,
    preu: 9,
  },
  VEGETARIÀ: {
    total: 40,
    preu: 14,
  },
};

function App() {
  return Object.keys(tiquets).map((el) => {
    console.log(el);
    const info = tiquets[el as keyof typeof tiquets];
    return (
      <div key={el}>
        {Array.from(Array(info.total).keys()).map((_, i) => {
          return <Tiquet key={i} price={info.preu} num={i + 1} type={el} />;
        })}
      </div>
    );
  });
}

export default App;
