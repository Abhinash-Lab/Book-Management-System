import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LearningUseState from './LearningUseState'
import { LearningUseEffect, LearningUseEffect2, LearningUseEffect3 } from './LearningUseEffect'
import HomePage from './pages/HomePage'
import SinglePage from './pages/SinglePage'
import EditPage from './pages/EditPage'
import CreatePage from './pages/CreatePage'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>


      <Route path='/' element={<HomePage />}></Route>
      <Route path='/single-page/:id' element={<SinglePage />}></Route>
      <Route path='/edit-page/:id' element={<EditPage />}></Route>
      <Route path='/create-page' element={<CreatePage />}></Route>






      <Route path='/useState' element={<LearningUseState />} />
      <Route path='/useEffect' element={<LearningUseEffect />} />
      <Route path='/useEffect2' element={<LearningUseEffect2 />} />
      <Route path='/useEffect3' element={<LearningUseEffect3 />} />


    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
