import { tv } from 'tailwind-variants'

export const variantsError = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-center',
    container: 'w-full max-w-screen-xl mx-auto px-6',
    content: 'flex flex-col items-center text-center gap-16 py-16',
    wrapper: 'flex flex-col gap-4',
    status: 'text-xl',
    title: 'text-5xl font-medium',
    message: 'text-sm',
    back: 'flex items-center gap-2 text-sm',
    icon: 'size-4',
  }
})

export const variantsHome = tv({
  slots: {
    base: 'relative h-full min-h-screen w-full grid content-start overflow-x-hidden',
    header: 'w-full border-b border-b-dracula-line bg-dracula-line/10',
    container: 'w-full max-w-screen-xl mx-auto px-6',
    content: 'flex flex-col items-center gap-6 pt-6 pb-12',
    title: 'text-3xl font-semibold uppercase',
  }
})

export const variantsForm = tv({
  slots: {
    form: 'w-full flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center -mt-12',
    field: 'relative w-full h-12',
    write: 'w-full h-full py-2 pl-12 pr-4 rounded bg-dracula-dark border border-dracula-line hover:border-white focus:border-white placeholder:text-dracula-line focus:outline-none transition ease-in-out duration-300 peer',
    squares: 'absolute size-6 bottom-3 left-3 text-dracula-line peer-hover:text-white peer-focus:text-white transition ease-in-out duration-300',
    add: 'w-full md:max-w-44 flex items-center justify-center px-4 h-12 uppercase rounded font-medium text-dracula-line bg-dracula-cyan disabled:bg-dracula-line disabled:text-white disabled:cursor-not-allowed disabled:scale-100 active:scale-95 transition ease-in-out duration-300'
  }
})

export const variantsTitle = tv({
  slots: {
    info: 'w-full flex flex-col md:flex-row items-center justify-between font-medium uppercase pt-8 gap-2',
    created: 'text-dracula-cyan',
    finished: 'text-dracula-cyan',
  }
})

export const variantsCard = tv({
  slots: {
    card: 'w-full flex flex-col-reverse gap-2',
    list: 'w-full flex items-center justify-between gap-6 md:gap-16 rounded p-4 border border-dracula-line hover:border-dracula-cyan bg-dracula-line/10 hover:bg-dracula-line/25 transition ease-in-out duration-300',
    label: 'peer w-full flex items-center gap-2 md:gap-4 cursor-pointer',
    checkbox: 'peer min-h-4 min-w-4 appearance-none rounded border border-dracula-cyan accent-dracula-cyan cursor-pointer checked:appearance-auto transition ease-in-out duration-300',
    text: 'peer-checked:line-through',
    remove: 'peer-has-[:checked]:hidden hover:text-dracula-red transition ease-in-out duration-300',
    trash: 'size-4 md:size-5',
  }
})

export const variantsNot = tv({
  slots: {
    not: 'w-full flex flex-col text-center gap-4 text-dracula-line border-t border-dracula-line pt-16 -mt-6',
    first: 'text-xl uppercase font-medium',
    work: 'font-medium',
  }
})