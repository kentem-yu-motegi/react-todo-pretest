import { atom, useAtomValue, useSetAtom } from "jotai";

// inputの状態を管理するatomを定義
const todoAtom = atom<Array<Todo>>([]);

type Todo = {
  id: string;
  title: string;
  endDate: string;
  isCompleted: boolean;
};
// 値とセット関数を返すカスタムフック
export const useInputAtom = () => {
  const todoValue = useAtomValue(todoAtom);
  const setTodoValue = useSetAtom(todoAtom);

  return { todoValue, setTodoValue };
};
