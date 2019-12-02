import React, { useState, useEffect } from 'react';

export default function Remove(props) {
  const [number, setNumber] = useState("");

  //Jesli zmienie "number" to ustaw nowy selectedRow przez funkcje getRow()
  useEffect(() => {
    if (number <= props.todos.length && number >= 0)
      props.getRow(parseInt(number) - 1, props.todos[parseInt(number) - 1]);
  }, [number]);

  //Jesli zmieni sie selectedRow np: przez klikniecie na liste,
  //to wstaw odpowiednie dane do pol tekstowych
  useEffect(() => {
    if (typeof props.selectedRow === "object")
      setNumber(props.selectedRow.row + 1);
  }, [props.selectedRow]);

  function handleNumber(e) {
    let number = e.target.value;
    if (parseInt(number) > props.todos.length) {
      number = props.todos.length;
    }
    setNumber(number);
  }

  const rightTheme = props.theme ? "text-light bg-dark" : null;
  const clsName = `form-control mt-1 ${rightTheme}`;

  return (
    <div className="RemoveComp">
      <input className={clsName} placeholder="Który wiersz usunąć" type="number" value={number} onChange={handleNumber} min={1} max={props.todos.length} />
      <button className="btn btn-primary mt-1" onClick={() => props.removeTodoItem(parseInt(number))} disabled={props.todos.length > 0 ? false : true}>Usuń</button>
    </div >
  );
}