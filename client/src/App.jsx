import { useEffect, useState } from 'react'
import Regis from './Forms/Regis'
import Login from './Forms/Login'
import Logined from './Forms/Logined'
import {userApi} from './api/userSlice/userApi'
import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const {auth} = useSelector(state => state.userSlice)

  const [refreshFunc, {isLoading}] = userApi.useLazyRefreshQuery()

  const [mood, setMood] = useState(0)
  const [enable, setEnable] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('refresh') && localStorage.getItem('access')){
      refreshFunc()
    }
    setEnable(true)
  }, [])

  if(isLoading){
    return <div className='mainCss'>
      <h3>Loading!</h3>
    </div>
  }
  else if(auth){
    return <div className='mainCss'>
      <Logined/>
    </div>
  }
  else if(!auth && enable){
    return <div className='mainCss'>
      <button onClick={() => setMood(12345)}>Regis</button>
      <button onClick={() => setMood(23456)}>Login</button>
      {mood===12345?<Regis/>:mood === 23456?<Login/>:null}
    </div>
  }
}

export default App
