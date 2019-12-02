import React, { useState } from 'react';

export default function Add(props) {
  const [start, setStart] = useState("");
  const [stop, setStop] = useState("");
  const [content, setContent] = useState("");

  function handleStart(e) {
    setStart(e.target.value);
  }

  function handleStop(e) {
    setStop(e.target.value);
  }

  function handleContent(e) {
    setContent(e.target.value);
  }

  const rightTheme = props.theme ? "text-light bg-dark" : null;
  const clsName = `form-control mt-1 ${rightTheme}`;
  
  return (
    <div className="AddComp">
      <input className={clsName} type="date" value={start} onChange={handleStart} />
      <input className={clsName} type="date" value={stop} onChange={handleStop} min={start} />
      <input className={clsName} type="text" value={content} onChange={handleContent} placeholder="Treść" />
      <button className="btn btn-primary mt-1" onClick={() => props.addNewTodoItem(start, stop, content)}>Dodaj</button>
    </div>
  );
}