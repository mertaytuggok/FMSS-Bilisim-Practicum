import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeActiveFilter,
  clearCompleted,
  selectActiveFilter,
  selectTodos,
} from "../../../Redux/Todos/todosSlice";

export const FooterMain = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectTodos);
  const activeFilter = useSelector(selectActiveFilter);
  const itemList = items.filter((item) => !item.completed).length;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong> {itemList} </strong> item{itemList > 1 && "s"} left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        className="clear-completed"
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed
      </button>
    </footer>
  );
};
