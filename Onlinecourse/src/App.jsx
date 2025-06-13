import { BrowserRouter, Routes, Route,Navigate  } from 'react-router-dom';
import CoursesPage from './pages/CoursesPage';
import CourseDetail from './components/CourseDetails';

import './App.css'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Navigate to="/courses" />} /> 
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
