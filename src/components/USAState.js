import React from "react";

const USAState = (props) => {
  return (
    <path d={props.dimensions} fill={props.fill} data-name={props.state} className={`${props.state} state tooltip`} onClick={props.onClickState}>
        <span className="tooltiptext">Testing the tooltip text</span>
    </path>
  );
}
export default USAState;
