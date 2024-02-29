import { useTodoStore } from "@/app/stores/todoStore";

export default function TodoInput() {
  const { inputText, setInputText, addTodo, clearTodos } = useTodoStore()
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Enter Todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
      />
      <button
        onClick={addTodo}
        className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded-md"
      >
        Add
      </button>
      <button
        onClick={clearTodos}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded-md ml-2"
      >
        Clear
      </button>
    </div>
  );
}
