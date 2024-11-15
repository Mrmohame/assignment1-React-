import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'

function App() {
  const [count, setCount] = useState(0)
let x= createBrowserRouter([
  {path:"",element:<Layout/>,children:[
  {index:true,element:<Home/>},
    {path:"About",element:<About/>},
    {path:"Portfolio",element:<Portfolio/>},
    {path:"Contact",element:<Contact/>}
  ]}
])
  return (
<>

<RouterProvider router={x}></RouterProvider>
</>
  )
}

export default App
