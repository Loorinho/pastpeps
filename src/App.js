// import { BrowserRouter as Router, Switch } from "react-router-dom";
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Package from "./Package";
import Login from "./Login";
import Courses from "./Courses";
import Course from "./Course";
import Semester from "./Semester";
import Pdf from "./Pdf";
import Years from "./Years";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PdfsPerYear from "./PdfsPerYear";
import CourseUnit from "./CourseUnit";
import CourseList from './CourseList';

function App() {
  return (
    // Route -> each defines a path to a different page in ur application
    // --> Each must define a path that we go to together with the "component called when that route is run"
   <div>
    <Header />
   <Routes>
      
      <Route exact path='/' element={<Home />}/>
     
      <Route path='/login' element={<Login />}/>
      <Route path='/about' element={<About />}/>

      <Route path='/courses' element={<Courses />}/> 
      <Route path='/courses/:course' element={<Course />}/>

      <Route path='/courses/:course/:year/:semester/:yearzy/:cunit' element={<Semester />}/>
      
      <Route path='/courses/:course/:year/:semester/:yearzy' element={<CourseUnit />}/>
     
      {/* For the available years */}
      <Route exact path='/courses/:course/:year/:semester' element={<PdfsPerYear />}/>
      {/* For either pdf or exam */}
      <Route path='/courses/:course/:year/:semester/:yearzy/:cunit/:choice' element={<Pdf />}/>
        
      {/* For packages */}
      <Route path='/packages' element={<Package />}/>
      
    </Routes>
    </div>

    // <Router>
    //   <div>
    //     <Header />
    //     <Switch>
    //       <Route exact path="/login">
    //         <Login />
    //       </Route>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route exact path="/about">
    //         <About />
    //       </Route>
    //       {/* Route to all availabel courses*/}
    //       <Route exact path="/courses">
    //         <Courses />
    //       </Route>
    //       {/* Route to a particular course */}
    //       <Route exact path="/courses/:course">
    //         <Course />
    //       </Route>
    //       <Route exact path="/courses/:course/:year/:semester">
    //         {/* <Semester /> */}
    //         <PdfsPerYear />
    //         {/* <Pdf /> */}
    //       </Route>

    //       {/* For the course unit */}
    //       <Route exact path="/courses/:course/:year/:semester/:yearzy">
    //         <CourseUnit />
    //         {/* <Semester /> */}
    //       </Route>

    //       {/* For the semester options */}
    //       <Route exact path="/courses/:course/:year/:semester/:yearzy/:cunit">
    //         {/* <CourseUnit /> */}
    //         <Semester />
    //       </Route>

    //       {/* For the exam and test pdf preview */}
    //       <Route
    //         exact
    //         path="/courses/:course/:year/:semester/:yearzy/:cunit/:choice"
    //       >
    //         <Pdf />
    //       </Route>
    //       {/* Packages route */}
    //       <Route exact path="/packages">
    //         <Package />
    //       </Route>
    //     </Switch>
    //     <Footer />
    //   </div>
    // </Router>

  );
}

export default App;
