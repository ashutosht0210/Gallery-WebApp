import Loading from "./Loading"

const PrintUserData = (props) => {
    let printUserData = <Loading userData ={props.userData}/>
    return (
        <div className='flex flex-wrap gap-4 p-2 h-[82%]'>
            {printUserData}
        </div>
  )
}

export default PrintUserData
