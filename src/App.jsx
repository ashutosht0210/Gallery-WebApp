import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './components/Footer'
import PrintUserData from './components/PrintUserData'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(3)

  const getData = async () => {
    const data = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=24`
    )
    setUserData(data.data)
  }

  useEffect(() => {
    getData()
  }, [index])

  return (
    <div className='bg-black min-h-screen p-4 text-white'>
      <PrintUserData userData={userData} />
      <Button
        index={index}
        setIndex={setIndex}
        setUserData={setUserData}
      />
    </div>
  )
}

export default App