import {BrowserRouter, Routes, Route} from "react-router-dom"
import AdminLayout from "./components/Layout/AdminLayout";
import AddCourse from "./pages/Admin/AddCourse";
import CourseTable from "./pages/Admin/CourseTable";
import CourseUpdate from "./pages/Admin/CourseUpdate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout><AddCourse/></AdminLayout>}/>
        <Route path="/cource-table" element={<AdminLayout><CourseTable/></AdminLayout>}/>
        <Route path="/cource-update/:courseid" element={<AdminLayout><CourseUpdate/></AdminLayout>}/>

      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
