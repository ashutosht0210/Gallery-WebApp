const Card = (props) => {
  return (

    <div key='idx'>
        <a href={props.elem.url} target='_blank'>
            <div className='h-40 w-44 bg-white bg-cover overflow-hidden rounded-2xl'>
            <img className='h-full w-full object-cover ' src= {props.elem.download_url} alt='image' />
            </div>
            <h2 className='font-bold text-lg'>{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card
