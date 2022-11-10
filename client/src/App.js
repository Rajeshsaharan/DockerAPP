
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState('')


  useEffect(()=>{
    const loadData = async() =>{
      const data = await fetch("/api/user")
      const realdata = await data.json()
      const {user} = realdata;
      console.log(realdata)
      setUser(user)
    
    }
    loadData()
    
  },[])



  return (
    <div className="App">
     <h1>{user}</h1>
    </div>
  );
}

export default App;
