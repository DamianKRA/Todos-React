import React, { useState, useEffect } from 'react';

export default function Edit(props) {
  const [start, setStart] = useState("");
  const [stop, setStop] = useState("");
  const [content, setContent] = useState("");
  const [number, setNumber] = useState("");

  //Jesli zmienie "number" to ustaw nowy selectedRow przez funkcje getRow()
  useEffect(() => {
    if (number <= props.todos.length && number >= 0)
      props.getRow(parseInt(number) - 1, props.todos[parseInt(number) - 1]);
  }, [number]);

  //Jesli zmieni sie selectedRow np: przez klikniecie na liste,
  //to wstaw odpowiednie dane do pol tekstowych
  useEffect(() => {
    if (typeof props.selectedRow === "object") {
      setNumber(props.selectedRow.row + 1);
      setStart(props.selectedRow.todo.start);
      setStop(props.selectedRow.todo.stop);
      setContent(props.selectedRow.todo.content);
    }
  }, [props.selectedRow]);

  function handleNumber(e) {
    let validNumber = e.target.value;
    if (validNumber > props.todos.length)
      validNumber = props.todos.length;
    setNumber(validNumber);
  }

  function handleStart(e) {
    setStart(e.target.value);
  }

  function handleStop(e) {
    setStop(e.target.value);
  }

  function handleContent(e) {
    setContent(e.target.value);
  }

  let lockInput = number === "" ? true : false;
  const rightTheme = props.theme ? "text-light bg-dark" : null;
  const clsName = `form-control mt-1 ${rightTheme}`;

  return (
    <div className="EditComp">
      <input className={clsName} type="number" value={number} placeholder="który wiersz" onChange={handleNumber} min={1} max={props.todos.length} />
      <input className={clsName} type="date" value={start} onChange={handleStart} disabled={lockInput} />
      <input className={clsName} type="date" value={stop} onChange={handleStop} min={start} disabled={lockInput} />
      <input className={clsName} type="text" value={content} onChange={handleContent} disabled={lockInput} />
      <button className="btn btn-primary mt-1" onClick={() => props.editTodoItem(number, start, stop, content)} disabled={lockInput}>Edytuj</button>
    </div>
  );
}