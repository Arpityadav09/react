import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import HomeLayout from './HomeLayout'
import Home from './components/Home'
import Aboutus from './components/Aboutus'
import Contact from './components/Contact'
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<HomeLayout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<Aboutus/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
