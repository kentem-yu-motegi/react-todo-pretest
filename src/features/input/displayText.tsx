import { useInputAtom } from "./inputAtom";

export const DisplayText = () => {
  const { todoValue } = useInputAtom();

  return (
    <div className="space-y-2 border-t-2 pt-4 w-full max-w-md">
      {todoValue.map((todo) => (
        <div key={todo.title} className="flex items-center gap-2">
          <h2 className="text-2xl text-sky-700 font-bold">{todo.title}</h2>
          <span className="text-gray-500">締切: {todo.endDate}</span>
          <span className="text-gray-500">
            {todo.isCompleted ? "✓ 完了" : "未完了"}
          </span>
          <button
            type="button"
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            {todo.isCompleted ? "未完了にする" : "完了にする"}
          </button>
          <button
            type="button"
            className="px-2 py-1 bg-red-500 text-white rounded"
          >
            削除する
          </button>
        </div>
      ))}
    </div>
  );
};
