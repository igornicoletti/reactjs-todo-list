import { TodoListProps } from '../types/todo'
import { variantsCard } from '../styles/variants'
import { TrashIcon } from '@heroicons/react/24/outline'

const { list, label, checkbox, text, remove, trash } = variantsCard()

type TodoProps = {
  todo: TodoListProps
  handleDeletedTodo: (id: number) => void
  handleCheckedTodo: (selected: boolean) => void
}

export const Todo = ({ todo, handleDeletedTodo, handleCheckedTodo }: TodoProps) => {
  return (
    <li className={list()}>
      <label className={label()} htmlFor={todo.task}>
        <input className={checkbox()} onChange={(e) => handleCheckedTodo(e.target.checked)} id={todo.task} type='checkbox' />
        <span className={text()}>{todo.task}</span>
      </label>
      <button className={remove()} onClick={() => handleDeletedTodo(todo.id)}>
        <TrashIcon className={trash()} />
      </button>
    </li>
  )
}