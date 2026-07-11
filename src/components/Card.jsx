const Card = (props) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:border-zinc-700 active:scale-98">
      <a href={props.elem.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-950">
          <img
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            src={props.elem.download_url}
            alt={props.elem.author}
            loading="lazy"
          />
        </div>
        <div className="p-4 bg-zinc-900/90 backdrop-blur-xs border-t border-zinc-800/50">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-0.5">Photographer</p>
          <h3 className="font-semibold text-sm text-zinc-100 truncate group-hover:text-amber-400 transition-colors duration-200">
            {props.elem.author}
          </h3>
        </div>
      </a>
    </div>
  )
}

export default Card

