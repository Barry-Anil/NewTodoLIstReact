import React from "react";

function ListItem(props) {
  // const [checkItem, setCheckItem] = useState(false);
  // function handleCheck() {
  //   setCheckItem((preValue) => {
  //     return !preValue;
  //   });
  // }

  return (
    <div
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ListItem;
