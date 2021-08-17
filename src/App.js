import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import TodoList from "./TodoList";
import CreateTodo from "./CreateTodo";
import EditTodo from "./EditTodo";

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link className="nav-link" to="/">
              Todos
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/create">
              Create
            </Link>
          </li>
        </ul>
  
      </nav>
      <Switch>
          <Route exact path="/" component={TodoList}></Route>
          <Route path="/edit/:id" component={EditTodo}></Route>
          <Route path="/create" component={CreateTodo}></Route>
        </Switch>
    </div>
  );
}

export default App;
