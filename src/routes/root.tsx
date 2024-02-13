import { Todo } from '../components/todo'
import { FormEvent, useState } from 'react'
import { TodoListProps } from '../types/todo'
import { SquaresPlusIcon } from '@heroicons/react/24/outline'
import { variantsCard, variantsForm, variantsHome, variantsNot, variantsTitle } from '../styles/variants'

const { card } = variantsCard()
const { not, first, work } = variantsNot()
const { info, created, finished } = variantsTitle()
const { form, field, write, squares, add } = variantsForm()
const { base, header, container, content, title } = variantsHome()

export function Root() {
  const [check, setCheck] = useState<number>(0)
  const [input, setInput] = useState<string>('')
  const [todos, setTodos] = useState<TodoListProps[]>([])


  const handleCreatedTodo = (e: FormEvent<HTMLFormElement>, task: string) => {
    e.preventDefault()
    const createdTodo: TodoListProps = { id: Date.now(), task, selected: false }
    setTodos(prev => [...prev, createdTodo])
    setInput('')
  }

  const handleDeletedTodo = (id: number) => {
    const deletedTodo = todos.filter(todo => todo.id !== id)
    setTodos(deletedTodo)
  }

  const handleCheckedTodo = (selected: boolean) => {
    selected ? setCheck(prev => prev + 1) : setCheck(prev => prev - 1)
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
          <form className={form()} onSubmit={(e) => handleCreatedTodo(e, input)}>
            <div className={field()}>
              <input className={write()} onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Adicionar nova tarefa' />
              <SquaresPlusIcon className={squares()} />
            </div>
            <button className={add()} disabled={!input ? true : false} type='submit'>
              Adicionar
            </button>
          </form>
          <div className={info()}>
            <p><span className={created()}>Tarefas criadas: </span>{todos.length}</p>
            <p><span className={finished()}>Concluídas: </span>{todos.length === 0 ? 0 : `${check} de ${todos.length}`}</p>
          </div>
          <ul className={card()}>
            {todos.map(todo => (
              <Todo key={todo.id} todo={todo} handleDeletedTodo={handleDeletedTodo} handleCheckedTodo={handleCheckedTodo} />
            ))}
          </ul>
          {!todos.length &&
            <div className={not()}>
              <p className={first()}>Crie suas primeiras To-Do List.</p>
              <p className={work()}>To-Do List é uma ferramenta para planejar e organizar seu fluxo de trabalho.</p>
            </div>
          }
        </div>
      </div>
    </div>
  )
}