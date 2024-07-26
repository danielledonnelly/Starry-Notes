const Color = ({ color }) => {
  const changeColor = () => {
      console.log("Change color clicked:", color);
  };

  return (
      <div
          onClick={changeColor}
          className="color"
          style={{ backgroundColor: color.colorHeader }}
      ></div>
  );
};

export default Color;