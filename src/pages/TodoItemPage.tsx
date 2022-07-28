import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getTodo } from "../store/actions/todoActions";
type IParams = {
  id: string;
}
const TodoItemPage = () => {
  const { todo, loading } = useAppSelector(state => state.todoState);
  const { id } = useParams<IParams>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(id) dispatch(getTodo(+id));
  }, [id])
  if(loading){
    return <h3>Loading...</h3>
  }
  return (
    <div>
      <h1>TodoItemPage</h1>
      <h2>ID : {todo.id}</h2>
      <h3>Title : {todo.title}</h3>
      <h4>Completed : {`${todo.completed}`}</h4>
    </div>
  )
}

export default TodoItemPage