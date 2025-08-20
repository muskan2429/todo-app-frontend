import { callAllApi, callUpdateApi } from "./BackendAPI";
function DoneTodopage(props) {
  const Arr = props.todo;
  console.log(JSON.stringify(Arr))

    async function handleClick(e, todoId) {
    await callUpdateApi(
      '/update-todo',
      { 'todoId': todoId },
      { status: 'pending', completionDate: new Date() }
    )

    let todoList = await callAllApi('/read-todos')
    props.setTodo(todoList);
  }


  return (
    <div className="bg-purple-100 min-h-[300px] flex justify-center items-center py-10">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-purple-300 text-white">
            <tr>
              <th className="py-3 px-4 text-left border border-gray-300">Todo Title</th>
              <th className="py-3 px-4 text-left border border-gray-300">Status</th>
              <th className="py-3 px-4 text-center border border-gray-300">Completed On</th>
              <th className="py-3 px-4 text-center border border-gray-300">Undo</th>

            </tr>
          </thead>
          <tbody>
            {
              Arr
              .filter(todo => todo.status === 'completed')
              .map((todo, index) => {
                  return (
                    <tr key={todo.todoId}>
                      <td className="py-3 px-4 border border-gray-300">{todo.todoTitle}</td>
                      <td className="py-3 px-4 border border-gray-300">{todo.status}</td>
                      <td className="py-3 px-4 border border-gray-300 text-center">{new Date(todo.completionDate).toLocaleDateString()}</td>
                      <button
                          onClick={(e) => handleClick(e, todo.todoId)}
                          className="text-green-600 hover:text-green-800 text-xl"
                          title="Mark as Done"
                        >
                          undo
                        </button>
                    </tr>
                  );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoneTodopage;