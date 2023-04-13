import { useState } from "react";

function NumberDisplay(props) {
  const [editing, setEditing] = useState(false);
  const { value, setValue } = props;
  const handleClick = () => {
    setEditing(true);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
  };

  if (editing) {
    return (
      <input
        type="number"
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    );
  }

  return <span onClick={handleClick}>{value}</span>;
}

export default NumberDisplay;
