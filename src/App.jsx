
import './App.css'
import LikeButton from './components/LikeButton'
import UserCard from './components/UserCard'

function App() {
 
  return (
    <>
     <UserCard nombre="Sofia De Alessandre" edad="33" profesion="Desarrolladora web"/>
     <hr/>
     <LikeButton />
    </>
  )
}

export default App
