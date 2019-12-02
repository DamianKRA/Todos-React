import React, { useState, useEffect } from 'react';

import Todo from "./todo";
import List from "./List";
import Menu from "./Menu";
import ChangeStyle from "./ChangeStyle";

import './Styles/style.css';

import JSONTodoList from './todos.json';

export default function App() {
  //tablica todos(objects)
  const [todos, setTodos] = useState([]);
  //"" lub { row: row, todo: todo }
  const [selectedRow, setSelectedRow] = useState("");
  //zmiana theme'u. false-jasny, true-ciemny
  const [theme, setTheme] = useState(false);

  //Uzupelnienie tabeli "todos" elementami z pliku JSON
  useEffect(() => {
    setTodos(JSONTodoList);
  }, []);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("darkBackground");
    } else {
      document.body.classList.remove("darkBackground");
    }
  }, [theme]);

  //dodanie nowego elementu do tablicy
  function addNewTodoItem(start, stop, content) {
    if (start !== "" && stop !== "" && content !== "") {
      let todo = new Todo(content, start, stop);
      let newTodos = [...todos];
      newTodos.push(todo);
      setTodos(newTodos);
      setSelectedRow("");
    }
  }

  //usuniecie wybranego elementu z tablicy
  function removeTodoItem(number) { //int number
    let newTodos = [...todos];
    if (number === 0)
      newTodos.splice(newTodos.length - 1, 1);
    else if (!isNaN(number))
      newTodos.splice(number - 1, 1);
    setTodos(newTodos);
    setSelectedRow("");
  }

  //edycja wybranego elementu z tablicy
  function editTodoItem(row, start, stop, content) {
    let newTodos = [...todos];
    newTodos[row - 1] = {
      content: content,
      start: start,
      stop: stop
    };
    setTodos(newTodos);
    setSelectedRow("");
  }

  //wybranie wiersza z listy zadan
  function getRow(_row, _todo) {
    if (_row >= 0)
      setSelectedRow({ row: _row, todo: _todo });
  }

  return (
    <div className="AppComp container">

      <div className="row">
        <div className="logo col m-4">
          <h1>Moje zadania</h1>
        </div>
      </div>

      <div className="row">
        {todos.length > 0 ?
          <List
            todos={todos}
            getRow={getRow}
            selectedRow={selectedRow}
            theme={theme} />
          :
          <div className="col jumbotron">
            <h3 className="display-4">Lista zadań jest pusta!</h3>
            <hr />
            <h5>Dodaj nowe zadanie w sekcji <span className="badge badge-info">Dodawanie</span></h5>
          </div>}
      </div>

      <div className="row">
        <Menu
          theme={theme}
          todos={todos}
          getRow={getRow}
          addNewTodoItem={addNewTodoItem}
          removeTodoItem={removeTodoItem}
          editTodoItem={editTodoItem}
          selectedRow={selectedRow} />
      </div>
      <ChangeStyle
        theme={theme}
        setTheme={() => setTheme(!theme)} />
    </div>
  );
}