import React from "react";

export default function EditTodo({
  editedTodo,
  setEditedTodo,
  updateTodo,
}:EditedTodoProps
) {
  return (
    <div className="flex flex-col items-center gap-8 pt-8 bg-gray-100 pb-32">
      <div className="text-3xl font-bold text-gray-800">Edit Todo</div>
      <div className="flex flex-col">
        <label htmlFor="editDesc" className="text-gray-800">
          Edit description:
        </label>
        <input
          type="text"
          id="editDesc"
          placeholder="Enter new description"
          value={editedTodo.desc}
          onChange={(e) =>
            setEditedTodo((prevTodo) => ({
              ...(prevTodo || { id: "", desc: "", completed: false }),
              id: prevTodo ? prevTodo.id : "",
              desc: e.target.value,
            }))
          }
          className="border border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="editCompleted" className="text-gray-800">
          Edit completion status:
        </label>
        <input
          type="checkbox"
          id="editCompleted"
          checked={editedTodo.completed}
          className="h-5 w-5 text-gray-800 mt-2"
          onChange={(e) =>
            setEditedTodo((prevTodo: Todo | null) => ({
              ...(prevTodo || { id: "", desc: "", completed: false }),
              completed: e.target.checked,
            }))
          }
        />
      </div>
      <button
        onClick={updateTodo}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out"
      >
        Submit
      </button>
    </div>
  );
}
