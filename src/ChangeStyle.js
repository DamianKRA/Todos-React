import React from 'react';

export default function ChangeStyle(props) {

  return (
    <div className="ChangeStyleComp">
      <span>Zmien styl</span>
      <div className="custom-control custom-switch">
        <input type="checkbox" onChange={props.setTheme} className="custom-control-input" id="customSwitch1" />
        <label className="custom-control-label" htmlFor="customSwitch1"></label>
      </div>
    </div>
  );
}