import { useInputAtom } from "./inputAtom";

export const DisplayText = () => {
  const { todoValue, setTodoValue } = useInputAtom();

  const todoCompleted = (index: number) => {
    const newTodos = [...todoValue];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodoValue(newTodos);
  }

  const deleteTodo = (index: number) => {
    const newTodos = [...todoValue];
    if (newTodos[index].isCompleted === false) {
      alert("未完了のToDoを削除します。");
    }
    newTodos.splice(index, 1);
    setTodoValue(newTodos);
  }

  return (
    <div className="space-y-2 border-t-2 pt-4 w-full max-w-md">
      {todoValue.map((todo, index) => (
        <div key={todo.title} className="flex items-center gap-2">
          <h2 className="text-2xl text-sky-700 font-bold">{todo.title}</h2>
          <span className="text-gray-500">締切: {todo.endDate}</span>
          <span className="text-gray-500">
            {todo.isCompleted ? "✓ 完了" : "未完了"}
          </span>
          <button
            type="button" onClick={() => todoCompleted(index)}
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            {todo.isCompleted ? "未完了にする" : "完了にする"}
          </button>
          <button
            type="button" onClick={() => deleteTodo(index)}
            className="px-2 py-1 bg-red-500 text-white rounded"
          >
            削除する
          </button>
        </div>
      ))}
    </div>
  );
};
