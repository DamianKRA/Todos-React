import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Add from "./MenuComps/Add";
import Remove from "./MenuComps/Remove";
import Edit from "./MenuComps/Edit";

export default function Menu(props) {

  //blokuj wejscie do sekcji Usun i Edytuj gdy lista zadan jest pusta
  function block(e) {
    if (props.todos.length <= 0) {
      e.preventDefault();
    }
  }

  const btnStyle = props.theme ? "btn-primary" : "btn-outline-primary";

  return (
    <div className="MenuComp col">

      <Router>
        <div className="row">
          <div className="offset-sm-3"></div>
          <Link className={`col-sm-12 col-md-2 m-1 btn ${btnStyle}`}
            to="/add">Dodawanie</Link>
          <Link className={`col-sm-12 col-md-2 m-1 btn ${btnStyle}`}
            onClick={block}
            to="/remove">Usuwanie</Link>
          <Link className={`col-sm-12 col-md-2 m-1 btn ${btnStyle}`}
            onClick={block}
            to="/edit">Edytowanie</Link>
        </div>

        <div className="action">
          <Switch>
            <Route exact path="/">
              <div></div>
            </Route>
            <Route path="/add">
              <Add addNewTodoItem={props.addNewTodoItem} theme={props.theme} />
            </Route>
            <Route path="/remove">
              <Remove
                removeTodoItem={props.removeTodoItem}
                todos={props.todos}
                getRow={props.getRow}
                theme={props.theme}
                selectedRow={props.selectedRow} />
            </Route>
            <Route path="/edit">
              <Edit
                selectedRow={props.selectedRow}
                editTodoItem={props.editTodoItem}
                getRow={props.getRow}
                theme={props.theme}
                todos={props.todos} />
            </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}