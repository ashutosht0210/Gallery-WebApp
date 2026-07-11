import Card from "./Card"

const Loading = (props) => {
  if (props.userData.length > 0) {
    return props.userData.map((elem, idx) => {
      return <Card key={elem.id || idx} elem={elem} />
    })
  }

  // Render 24 skeleton items when loading
  return Array.from({ length: 24 }).map((_, idx) => (
    <div
      key={`skeleton-${idx}`}
      className="overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-md animate-pulse"
    >
      <div className="aspect-[4/3] w-full bg-zinc-800/80" />
      <div className="p-4 bg-zinc-900/90 border-t border-zinc-800/50 space-y-2">
        <div className="h-2 w-1/3 bg-zinc-800 rounded-full" />
        <div className="h-4 w-2/3 bg-zinc-800 rounded-full" />
      </div>
    </div>
  ))
}

export default Loading
