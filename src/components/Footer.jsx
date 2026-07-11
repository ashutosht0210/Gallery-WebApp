const Button = (props) => {
  const isFirstPage = props.index === 1

  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex items-center gap-6 bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 px-5 py-2.5 rounded-full shadow-xl">
        <button
          disabled={isFirstPage}
          className="bg-transparent hover:bg-amber-400 hover:text-black text-amber-400 text-xs tracking-wide uppercase px-4 py-2 rounded-full font-bold cursor-pointer transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-amber-400 active:scale-95"
          onClick={() => {
            if (!isFirstPage) {
              props.setIndex(props.index - 1)
              props.setUserData([])
            }
          }}
        >
          Prev
        </button>

        <span className="text-zinc-400 text-xs font-semibold select-none">
          Page <span className="text-amber-400 font-bold text-sm ml-0.5">{props.index}</span>
        </span>

        <button
          className="bg-transparent hover:bg-amber-400 hover:text-black text-amber-400 text-xs tracking-wide uppercase px-4 py-2 rounded-full font-bold cursor-pointer transition-all duration-200 active:scale-95"
          onClick={() => {
            props.setIndex(props.index + 1)
            props.setUserData([])
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Button

