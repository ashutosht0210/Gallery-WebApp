const Button = (props) => {
  return (
    <div className='flex justify-center gap-6 items-center p-4'>
        <button
          style= {{opacity: props.index==1? 0.5:1}}
          className='bg-amber-400 text-sm cursor-pointer active:scale-90 text-black rounded px-4 py-2 font-semibold'
          onClick={()=>{
            if(props.index > 1){
              props.setIndex(props.index-1)
              props.setUserData([])
              console.log('click')
            }
          }}
        >Prev</button>
        <h3 className='text-gray-400 text-xs'>Page {props.index}</h3>
        <button 
          className='bg-amber-400 text-sm cursor-pointer active:scale-90 text-black rounded px-4 py-2 font-semibold'
          onClick={()=>{
            props.setIndex(props.index+1)
            props.setUserData([])
          }}
        >Next</button>
    </div>
  )
}

export default Button
