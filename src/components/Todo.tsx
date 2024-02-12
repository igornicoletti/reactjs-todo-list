import { TodoItemProps } from '../types/Todo'
import { variantsCard } from '../styles/Variants'
import { TrashIcon } from '@heroicons/react/24/outline'

const { list, label, checkbox, text, remove, trash } = variantsCard()

type TodoProps = {
  todo: TodoItemProps
  handleDeletedTodo: (id: number) => void
  handleCheckedTodo: (checkbox: boolean) => void
}

export const Todo: React.FC<TodoProps> = ({ todo, handleDeletedTodo, handleCheckedTodo }: TodoProps) => {
  return (
    <li className={list()}>
      <label className={label()} htmlFor={todo.text}>
        <input className={checkbox()} onChange={event => handleCheckedTodo(event.target.checked)} id={todo.text} type='checkbox' />
        <span className={text()}>{todo.text}</span>
      </label>
      <button className={remove()} onClick={() => handleDeletedTodo(todo.id)}>
        <TrashIcon className={trash()} />
      </button>
    </li>
  )
}