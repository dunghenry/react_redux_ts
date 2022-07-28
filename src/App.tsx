import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoItemPage from './pages/TodoItemPage';
import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
import Header from './components/Header';
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/todos/:id" element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App