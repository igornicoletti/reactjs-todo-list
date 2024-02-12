import { Todo } from '../components/Todo'
import { FormEvent, useState } from 'react'
import { TodoItemProps } from '../types/Todo'
import { SquaresPlusIcon } from '@heroicons/react/24/outline'
import { variantsCard, variantsForm, variantsHome, variantsNot, variantsTitle } from '../styles/Variants'

const { card } = variantsCard()
const { not, first, work } = variantsNot()
const { info, create, done } = variantsTitle()
const { form, field, write, squares, add } = variantsForm()
const { base, header, container, content, title } = variantsHome()

export function Root() {
  const [check, setCheck] = useState<number>(0)
  const [input, setInput] = useState<string>('')
  const [todos, setTodos] = useState<TodoItemProps[]>([])

  const handleCreatedTodo = (event: FormEvent<HTMLFormElement>, text: string,) => {
    event.preventDefault()
    const createdTodo: TodoItemProps = { id: Date.now(), text, checkbox: false }
    setTodos([...todos, createdTodo])
    setInput('')
  }

  const handleDeletedTodo = (id: number) => {
    const deletedTodo = todos.filter(todo => todo.id !== id)
    setTodos(deletedTodo)
  }

  const handleCheckedTodo = (checkbox: boolean) => {
    const checkedTodo = checkbox ? check + 1 : check - 1
    setCheck(checkedTodo)
  }

  return (
    <div className={base()}>
      <div className={header()}>
        <div className={container()}>
          <div className={content()}>
            <h1 className={title()}>To-Do List</h1>
          </div>
        </div>
      </div>
      <div className={container()}>
        <div className={content()}>
          <form className={form()} onSubmit={event => handleCreatedTodo(event, input)}>
            <div className={field()}>
              <input className={write()} onChange={event => setInput(event.target.value)} value={input} type='text' placeholder='Adicionar nova tarefa' />
              <SquaresPlusIcon className={squares()} />
            </div>
            <button className={add()} disabled={!input ? true : false} type='submit'>
              Adicionar
            </button>
          </form>
          <div className={info()}>
            <p><span className={create()}>Tarefas criadas: </span>{todos.length}</p>
            <p><span className={done()}>Concluídas: </span>{todos.length === 0 ? 0 : `${check} de ${todos.length}`}</p>
          </div>
          <ul className={card()}>
            {todos.map(todo => (
              <Todo key={todo.id} todo={todo} handleDeletedTodo={handleDeletedTodo} handleCheckedTodo={handleCheckedTodo} />
            ))}
          </ul>
          {!todos.length &&
            <div className={not()}>
              <p className={first()}>Crie suas primeiras ToDo List.</p>
              <p className={work()}>ToDo List é uma ferramenta para planejar e organizar seu fluxo de trabalho.</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}