import React from "react";

const USAState = (props) => {
  return (
    <div className="tooltip">
        <path d={props.dimensions} fill={props.fill} data-name={props.state} className={`${props.state} state`} onClick={props.onClickState} />
        <span className="tooltiptext">Testing the tooltip text</span>
    </div>
  );
}
export default USAState;
