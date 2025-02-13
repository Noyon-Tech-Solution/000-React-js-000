import React, { useEffect, useState } from "react";

const FetchDataUseEffect = () => {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      });
  }, []);

  const todosElements =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Data Fetch</h1>
      {todosElements}
    </div>
  );
};

export default FetchDataUseEffect;

{
  /*  07 How to Fetching Data on useEffect in React.Js */
}
