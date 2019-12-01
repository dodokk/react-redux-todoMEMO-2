import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todosModules from "../modules/todosModule";

const AddToDo: React.FC = props => {

   // local state
　const [input, setInput] = useState("");

  // dispatch を用意
  const dispatch = useDispatch();

  // ハンドラーを用意。タスクを追加したらテキストエリアのクリア
  const addTodo = () => {
    if (input !== "") {
      dispatch(todosModules.actions.addTodo(input));
      setInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button onClick={addTodo}>add</button>
    </div>
  );
};

export default AddToDo;