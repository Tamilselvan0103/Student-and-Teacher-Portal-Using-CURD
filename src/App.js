import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Create from "./Component/Create";
import { Read } from "./Component/Read";
import { EditStudent } from "./Component/Update";
import { useState } from "react";
import { data } from "./Component/data";
import { Route, Switch } from "react-router-dom";
import StudentProfile from "./Component/profile";
import { Home } from "./Component/Home";
import TeacherCreating from "./TeacherComponent/TeacherCreating";
import TeacherEditing from "./TeacherComponent/TeacherEditing";
import TeacherReading from "./TeacherComponent/TeacherReading";
import { data2 } from "./Component/Teachersdata";
import TeacherProfile from "./TeacherComponent/TeacherProfile";

function App() {
  const [Studentdata, setStudentdata] = useState(data);
  const[TeacherData, setTeacherdata] = useState(data2);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Read setStudentdata={setStudentdata} studentdata={Studentdata} />
        </Route>

        <Route path="/create-user">
          <Create setStudentdata={setStudentdata} studentdata={Studentdata} />
        </Route>

        <Route path="/edit-user/:id">
          <EditStudent
            setStudentdata={setStudentdata}
            studentdata={Studentdata}
          />
        </Route>
        <Route path="/profile/:id">
          <StudentProfile
            setStudentdata={setStudentdata}
            studentdata={Studentdata}
          />
        </Route>
        <Route path="/edit-profile/:id">
          <EditStudent
            setStudentdata={setStudentdata}
            studentdata={Studentdata}
          />
        </Route>
        <Route path = "/create-teacher">
           <TeacherCreating TeacherData={TeacherData} 
           setTeacherdata={setTeacherdata} />
        </Route>
        <Route path = "/teacher-user">
            <TeacherReading TeacherData={TeacherData} 
           setTeacherdata={setTeacherdata}/>
        </Route>
        <Route path="/teacher-profile/:id">
          <TeacherProfile
           TeacherData={TeacherData} 
           setTeacherdata={setTeacherdata}/>
        </Route>
        <Route path="/edit-teacher-user/:id">
            <TeacherEditing TeacherData={TeacherData} 
           setTeacherdata={setTeacherdata}/>
        </Route>
       
      </Switch>
    </div>
  );
}

export default App;
