import { atom } from 'jotai';
import { Todo } from '../../types';

// Todoリストの初期値
export const todosAtom = atom<Todo[]>([]);
