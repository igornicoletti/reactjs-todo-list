import { tv } from 'tailwind-variants'

export const variantsError = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-center',
    container: 'w-full max-w-screen-xl mx-auto px-4',
    content: 'flex flex-col items-center text-center gap-16 py-16',
    wrapper: 'flex flex-col gap-4',
    status: 'text-xl',
    title: 'text-5xl font-medium',
    message: 'text-dracula-comment text-sm',
    back: 'flex items-center gap-2 text-sm',
    icon: 'h-4 w-4',
  }
})

export const variantsHome = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-start overflow-x-hidden',
    header: 'w-full border-b border-b-dracula-line bg-dracula-line/10',
    container: 'w-full max-w-screen-xl mx-auto px-4',
    content: 'flex flex-col items-start gap-8 py-16',
    title: 'w-full text-4xl text-center font-medium',
  }
})

export const variantsForm = tv({
  slots: {
    form: 'w-full flex flex-col md:flex-row items-center gap-2 md:gap-8 justify-center -mt-20',
    field: 'relative w-full h-12',
    write: 'w-full h-full py-2 pl-12 pr-4 rounded bg-dracula-bg border border-dracula-line hover:border-white focus:border-white placeholder:text-dracula-line focus:outline-none transition ease-in-out duration-300 peer',
    squares: 'absolute w-5 h-5 bottom-3.5 left-4 text-dracula-line peer-hover:text-white peer-focus:text-white transition ease-in-out duration-300',
    add: 'w-full md:max-w-44 flex items-center justify-center px-4 h-12 uppercase rounded font-medium text-dracula-line bg-dracula-cyan disabled:bg-dracula-line disabled:text-white disabled:cursor-not-allowed disabled:scale-100 active:scale-95 transition ease-in-out duration-300'
  }
})

export const variantsTitle = tv({
  slots: {
    info: 'w-full flex items-center justify-between pt-8 gap-2',
    create: 'text-dracula-cyan pr-1',
    done: 'text-dracula-purple pr-1',
  }
})

export const variantsCard = tv({
  slots: {
    card: 'w-full flex flex-col-reverse gap-2',
    list: 'w-full flex items-center justify-between gap-8 md:gap-16 rounded p-4 border border-dracula-line hover:border-white bg-dracula-line/10 transition ease-in-out duration-300',
    label: 'peer w-full flex items-center gap-4 cursor-pointer',
    checkbox: 'peer min-h-4 min-w-4 appearance-none rounded border border-dracula-cyan accent-dracula-purple cursor-pointer checked:appearance-auto transition ease-in-out duration-300',
    text: 'peer-checked:line-through peer-checked:text-dracula-comment',
    remove: 'peer-has-[:checked]:hidden hover:text-dracula-red transition ease-in-out duration-300',
    trash: 'h-5 w-5 ',
  }
})

export const variantsNot = tv({
  slots: {
    not: 'w-full flex flex-col text-center gap-2 text-dracula-line border-t border-dracula-line pt-8 md:pt-16 -mt-8',
    first: 'text-lg font-medium',
    work: 'text-sm',
  }
})