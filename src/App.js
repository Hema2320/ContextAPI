import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import Allstudents from './components/Allstudents';
import Addstudents from './components/Addstudents';
import Hooks from './components/Hooks';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Editstudents from './components/Editstudents';
import React,{useState} from 'react'

export const StudentContext = React.createContext();
function App() {
  let data = {
    earning:"1,00,000",
    annual:"2,50,00000",
    task:20,
    pending:26,
  }
  let [students,setStudents] = useState([]);

  return <>
    <BrowserRouter>
        <div id="design" style={{display:"grid",gridTemplateColumns:"20% 80%"}}>
            <div >
                <Sidebar/>
            </div>
            <div>
            <StudentContext.Provider value={{students,setStudents}}>
                <Routes>
                      <Route path='/dashboard' element={<Dashboard data={data}/>}/>
                      <Route path ='/all-students' element={<Allstudents />}/>
                      <Route path = '/add-student' element={<Addstudents />}/>
                      <Route path='/edit-student/:id' element={<Editstudents />}/>                      
                       <Route path='/hooks' element={<Hooks/>}/>
                       <Route path = '/' element={<Dashboard data={data}/>}/>
                </Routes>
                </StudentContext.Provider>
            </div>
        </div>
    </BrowserRouter>
  </>
}

export default App;