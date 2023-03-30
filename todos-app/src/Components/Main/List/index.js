import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  destroy,
  selectFilteredTodos,
  toggle,
} from "../../../Redux/Todos/todosSlice";

export const List = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectFilteredTodos);

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {filteredTodos.map((item) => (
          <li key={item.id} className={item.completed ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                checked={item.completed}
                onChange={() => dispatch(toggle({ id: item.id }))}
              />
              <label>{item.title}</label>
              <button
                className="destroy"
                onClick={() => dispatch(destroy(item.id))}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
