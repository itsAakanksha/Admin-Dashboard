import React ,{useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {Calendar, ColorPicker ,Customers , Ecommerce, Editors , Employee , Kanban , Orders , Area, Pie, Bar,Financial,Line,ColorMapping,Stacked,Pyramid } from './pages'
import {Footer,Header,Navbar,Sidebar,ThemmeSetting,UserProfile} from './components'
import './App.css';

export default function App() {
  const activemenu = true;
  return (
    <div>
    <BrowserRouter>
    <div  className='flex relative dark:bg-main-dark-bg'> 
    <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
    <TooltipComponent content = "Settings" position = "Top">
    <button className='text-3xl p-3 hover:drop-shadow-xl text-white hover:bg-dark-gray' style={{background:'blue',borderRadius:'50%'}}>
    <FiSettings/>
    </button>
    </TooltipComponent>
    </div>
    {activemenu ? (
      <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>sidebar</div>
    ):(
      <div className='w-0 dark:bg-secondary-dark-bg'>remove sidebar</div>
    )}
    <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activemenu ? 'md:ml-72' : 'flex-2'} `}>
    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>Navbar</div>
    </div>

    <Routes>
    { /* DASHBOARD*/}
    <Route path='/' element={<Ecommerce/>}/>
    // <Route path='/ecommerce' element={<Ecommerce/>}/>
    { /* PAGES*/}
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/employees' element={<Employee/>}/>
    <Route path='/customers' element={<Customers/>}/>
      { /* APPS*/}
    <Route path='/kanban' element={<Kanban/>}/>
    <Route path='/editors' element={<Editors/>}/>
    <Route path='/calenders' element={<Calendar/>}/>
    <Route path='/color-picker' element={<ColorPicker/>}/>

      { /* CHARTS*/}
    <Route path='/line' element={<Line/>}/>
    <Route path='/area' element={<Area/>}/>
    <Route path='/bar' element={<Bar/>}/>
    <Route path='/pie' element={<Pie/>}/>
    <Route path='/financial' element={<Financial/>}/>
    <Route path='/color-mapping' element={<ColorMapping/>}/>
    <Route path='/pyramid' element={<Pyramid/>}/>
    <Route path='/stacked' element={<Stacked/>}/>


    </Routes>

    </div>
    </BrowserRouter>
    </div>
  );
}
