import * as React from "react";
import AddToDo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App: React.FC = (props) => {
    return(
        <div className="App">
            <AddToDo />
            <TodoList />
        </div>
    );
};

export default App;
