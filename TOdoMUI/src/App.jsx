import { useState, useEffect } from "react";
import classes from "./Styles.module.css";
import TodoItem from "./component/TodoItem";
import TodoDetail from "./component/TodoDetail";
import { Skeleton } from "@mui/material";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMssg, setErrorMssg] = useState(null);
  const [todoDetail, setTodoDetail] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/todos");
      const result = await response.json();

      console.log(result);

      if (result?.todos && result?.todos?.length > 0) {
        setTodolist(result?.todos);
        setLoading(false);
        setErrorMssg("");
      } else {
        setLoading(false);
        setErrorMssg("");
      }
    } catch (e) {
      console.log(e);
      setErrorMssg("error occured");
    }
  }

  async function fetchTodoDetail(getCurrentTodo) {
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${getCurrentTodo}`
      );

      const details = await apiResponse.json();

      if (details) {
        setTodoDetail(details);
        setOpenDialog(true);
      } else {
        setTodoDetail(null);
        setOpenDialog(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  if(loading) return <Skeleton variant="rectangular" width={650} height={650} />

  return (
    <>
      <div className={classes.mainwrapper}>
        <h1 className={classes.header}>Simple To do List</h1>
        <div className={classes.TodolistWrapper}>
          {todolist && todolist.length > 0
            ? todolist.map((todoItem) => (
                <TodoItem fetchTodoDetail={fetchTodoDetail} todo={todoItem} />
              ))
            : null}
        </div>
      </div>

      <TodoDetail 
      openDialog={openDialog} 
      todoDetail={todoDetail}
      setOpenDialog={setOpenDialog}
      setTodoDetail={setTodoDetail}
       />
      
    </>
  );
}

export default App;
