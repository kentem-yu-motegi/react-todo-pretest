import { useInputAtom } from "./inputAtom";

export const InputContainer = () => {
  const { todoValue, setTodoValue } = useInputAtom();

  const onSubmit = (data: FormData) => {
    const formData = Object.fromEntries(data.entries());
    const title = formData.title as string;

    if (title === "" || title.trim() === "") {
      return;
    }

    if (formData.indDate === ""){
      formData.endDate = "なし";
    }

    setTodoValue((prev) => [
      ...prev,
      {
        title: formData.title as string,
        endDate: formData.endDate as string,
        isCompleted: false,
      },
    ]);
  };

  return (
    <form className="flex gap-4" action={onSubmit}>
      <input
        name="title"
        type="text"
        className="p-2 border-2 border-slate-500 rounded"
      />
      <input
        name="endDate"
        type="date"
        className="p-2 border-2 border-slate-500 rounded"
      ></input>
      <button
        type="submit"
        className="px-4 py-2 bg-slate-700 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};
