const Button1 = ({ value }) => {
  return (
    <>
      <button className="classBtn1">
        <div className="classBtn1Value">{value}</div>
        <div className="classBtn1Animation"></div>
      </button>
    </>
  );
};
const Button2 = ({ value, classBtn2 }) => {
  return (
    <>
      <button className="classBtn2">{value}</button>
    </>
  );
};

const Button3 = ({ value, classBtn3, classBtn1Value, classBtn1Animation }) => {
  return (
    <>
      <button className="classBtn3">
        <div className="classBtn1Value">{value}</div>
        <div className="classBtn1Animation"></div>
      </button>
    </>
  );
};

const Button4 = ({ value }) => {
  return (
    <>
      <button className="classBtn4">
        <div className="classBtn1Value">{value}</div>
        <div className="classBtn1Animation"></div>
      </button>
    </>
  );
};



export { Button1, Button2, Button3, Button4};
