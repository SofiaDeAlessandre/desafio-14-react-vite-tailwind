
import './App.css'
import LikeButton from './components/LikeButton'
import UserCard from './components/UserCard'
import Product from './Product'

function App() {
 
  return (
    <>
     <UserCard name="Sofia De Alessandre" age="33" profession="Desarrolladora web"/>
     <hr/>
     <LikeButton />
     <hr/>
     <Product productName="Computadora" productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsam."/>
     
    </>
  )
}

export default App
