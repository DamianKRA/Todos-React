import React from 'react';

function List(props) {

  let tableColor = props.theme ? "tableStyle" : null;
  
  return (
    <div className="ListComp col">
      <table className={`table table-striped ${tableColor}`}>
        <thead className="">
          <tr>
            <th>#</th>
            <th>Treść</th>
            <th>Od</th>
            <th>Do</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map((element, index) =>
            <tr
              className={index === props.selectedRow.row ? "table-active" : null}
              key={index}
              onClick={() => props.getRow(index, element)}>
              <td>{index + 1}</td>
              <td>{element.content}</td>
              <td>{element.start}</td>
              <td>{element.stop}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;