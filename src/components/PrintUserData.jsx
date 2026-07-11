import Loading from "./Loading"

const PrintUserData = (props) => {
    let printUserData = <Loading userData ={props.userData}/>
    return (
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4'>
            {printUserData}
        </div>
  )
}

export default PrintUserData


