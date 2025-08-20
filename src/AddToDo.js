import { useState } from 'react';
import { callCreateApi, callAllApi } from './BackendAPI.js';

function AddToDo(props) {
  const todo = props.todo;
  const setTodo = props.setTodo;

  const [formData, setFormData] = useState({
    todoTitle: "",
    DueDate: "",
  });

  function handleChange(e) {
    const inputTagName = e.target.name;
    const inputTagValue = e.target.value;

    setFormData((previousObject) => ({
      ...previousObject,
      [inputTagName]: inputTagValue,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("form submitted,data=" + JSON.stringify(formData));
    let newTask = {
      todoId: Date.now().toString(),
      todoTitle: formData.todoTitle,
      dueDate: formData.DueDate,
      status: "pending",
    };
    await callCreateApi('/create-todo', newTask);

    const todoList = await callAllApi('/read-todos');
    setTodo(todoList);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-200 bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">✨ Add a New Task</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Task Title</label>
          <input
            type="text"
            name="todoTitle"
            placeholder="Enter task title..."
            value={formData.todoTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-purple-400 focus:ring-2 focus:ring-purple-500 rounded-lg outline-none"
          />
        </div>

        <div>
          <label className="block font-semibold text-gray-700 mb-1">Due Date</label>
          <input
            type="date"
            name="DueDate"
            value={formData.DueDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-purple-400 focus:ring-2 focus:ring-blue-500 rounded-lg outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2.5 rounded-lg font-semibold shadow-md hover:opacity-90 transition"
        >
          ➕ Add Task
        </button>
      </form>
    </div>
  );
}

export default AddToDo;
