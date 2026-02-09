import React, { use, useState ,useEffect} from 'react'
import axios from 'axios'
import Card from './Card.jsx'

const App = () => {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  let printUserData = <h2 className='text-white font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Loading...</h2>;

  const fetchData = async () => {
    try{
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
      
      setUserData(response.data);
      console.log(response.data);
    } catch(error){
      console.error("Error fetching data:", error);
    }
  }
  
  
  if(userData.length > 0){
    printUserData = userData.map((user,idx) => {
      return (
        <Card key={idx} user={user} />
      )
      
    })
  }

  useEffect(() => {
    fetchData();
  },[index]);

  return (
    <div className='bg-black text-white h-screen overflow-auto p-10'>
      {/* <button onClick={fetchData} className='bg-blue-400 px-5 py-4 mb-5 rounded cursor-pointer active:scale-110 hover:bg-green-500 transition-all duration-300'>Get Data</button> */}
      <div className='flex flex-wrap h-[85%] gap-7 ml-12 overflow-auto'>{printUserData}</div>
      <div className='flex justify-center items-center gap-5 mt-10'>
        <button disabled={index === 1}
        onClick={() => {
          if(index > 1){
            setIndex(index - 1);
            setUserData([]);
          }
        }} 
        className='bg-amber-400 px-5 py-3 text-sm rounded-lg font-semibold active:scale-95 cursor-pointer text-black'>Prev</button>
        <h4 className='text-white font-bold text-lg'>Page {index}</h4>
        <button onClick={() => {
          setIndex(index + 1);
          setUserData([]);
        }} 
        className='bg-amber-400 px-5 py-3 text-sm rounded-lg font-semibold active:scale-95 cursor-pointer text-black'>Next</button>
      </div>
    </div>
  )
}

export default App
