import Card from "./Card"

const Loading = (props) => {
    console.log(props)
    let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -traslate-y-1/2 font-semibold'>Loading...</h3>
    
    if(props.userData.length>0) {
        printUserData = props.userData.map((elem,idx)=>{
            return (
                <Card key={idx} elem = {elem} />
            )
        })
    }
    return printUserData
}

export default Loading
