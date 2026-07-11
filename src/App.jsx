import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './components/Footer'
import PrintUserData from './components/PrintUserData'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(3)

  useEffect(() => {
    let active = true
    const getData = async () => {
      const data = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=12`
      )
      if (active) {
        setUserData(data.data)
      }
    }
    getData()
    return () => {
      active = false
    }
  }, [index])

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-400 selection:text-black pb-12">
      <header className="max-w-[90rem] mx-auto px-4 pt-12 pb-6 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-3 select-none">
          LUMINA
        </h1>
        <p className="text-zinc-400 text-sm md:text-base font-medium max-w-md mx-auto">
          Explore a curated collection of beautiful photography powered by Lorem Picsum.
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-800 to-transparent mx-auto mt-6" />
      </header>

      <main className="max-w-[90rem] mx-auto">
        <PrintUserData userData={userData} />
      </main>

      <Button
        index={index}
        setIndex={setIndex}
        setUserData={setUserData}
      />
    </div>
  )
}

export default App
