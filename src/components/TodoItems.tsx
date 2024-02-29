import { useTodoStore } from "@/app/stores/todoStore";

export default function TodoItems({ todo }: { todo: Todo}) {
  const { handleCheckboxChange, setEditMode, setEditedTodo, deleteTodo } = useTodoStore() 
  return (
    <div className="flex items-center justify-between w-96 bg-white rounded-md mt-2 p-4 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          className="h-5 w-5 text-gray-800"
          checked={todo.completed}
          onChange={(e) => handleCheckboxChange(todo.id, e.target.checked)}
        />
        <div className="text-gray-800">{todo.desc}</div>
      </div>
      <div className="flex gap-2">
        <button
          className="text-sm text-gray-800 hover:text-gray-900 transition duration-300 ease-in-out"
          onClick={() => {
            setEditMode(true);
            setEditedTodo(todo);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-sm text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
