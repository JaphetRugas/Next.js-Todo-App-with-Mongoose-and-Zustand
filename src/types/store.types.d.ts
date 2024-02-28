type Todo = {
  id: string;
  desc: string;
  completed?: boolean;
};

type EditedTodoProps = {
  editedTodo: Todo;
  setEditedTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
  updateTodo: () => void;
};

type InputTodoProps = {
  inputText: string;
  addTodo: () => void;
  clearTodos: () => void;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

type ListTodoProps = {
  todo: Todo;
  handleCheckboxChange: (todoId: string, completed: boolean) => void;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  setEditedTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
  deleteTodo: (todoId: string) => void;
};
