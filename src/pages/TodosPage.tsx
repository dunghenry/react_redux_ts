import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Link } from "react-router-dom";
import { getTodos, deleteTodo } from "../store/actions/todoActions";
const TodosPage = () => {
  const { todos, loading } = useAppSelector(state => state.todoState);
  const dispatch = useAppDispatch();
  useEffect(() =>{
    dispatch(getTodos());
  }, []);
  const handleDeleteTodo = (id : number) => {
    dispatch(deleteTodo(id));
  }
  if(loading){
    return <h3>Loading...</h3>
  }
  return (
    <div>
      <h1>TodosPage</h1>
      {
        todos.length && todos.map(todo => {
          return (
            <div className="todo_item" key={todo.id}>
              <h3>{todo.id}</h3> - &nbsp;&nbsp;
              <h3>{todo.title}</h3>
              <Link to={`${todo.id}`}>See more</Link>
              <button onClick={() => handleDeleteTodo(todo?.id)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodosPage