export const Tiquet = ({
  num,
  type,
  price,
}: {
  num: number;
  type: string;
  price: number;
}) => {
  return (
    <div className="tiquet">
      <div className="tiquet__icona">
        <img className="tiquet__logo" src="./logo.png" />
      </div>
      <div className="tiquet__titols">
        <h2 className="tiquet__titol">DINAR POPULAR</h2>
        <div className="tiquet__footer">
          <p>2 de Juny de 2024</p>
          <p>Parc d'Occitània (C/ de la Laura 19)</p>
        </div>
      </div>
      <div className="tiquet__info">
        <p className="tiquet__type">Menú {type}</p>
        <p className="tiquet__price">Preu: {price}€</p>
        <p className="tiquet__num">{num}</p>
      </div>
    </div>
  );
};
