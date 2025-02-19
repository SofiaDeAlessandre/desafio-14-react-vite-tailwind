
import './App.css'
import LikeButton from './components/LikeButton'
import UserCard from './components/UserCard'
import Product from './components/Product'
import Count from './components/Count'

function App() {
 
  return (
    <>
     <UserCard name="Sofía De Alessandre" age="33" profession="Desarrolladora web"/>
     <hr className='my-4'/>
     <LikeButton />
     <hr className='my-4'/>
     <Product productName="Computadora" productDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsam."/>
     <hr className='my-4'/>
     <Count/>
    </>
  )
}

export default App
