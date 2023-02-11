import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Base from "./Base";
import { useHistory, useParams } from "react-router-dom";

export function EditStudent({ studentdata, setStudentdata }) {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [idx, setIdx] = useState([id]);
  // console.log(idx)
  const [batch, setbatch] = useState("");
  const [age, setage] = useState("");
  const [img, setimg] = useState("");
  const [gender, setgender] = useState("");
  const [bloodGroup, setbloodgroup] = useState("");
  const history = useHistory();
  const student = studentdata[id];

  useEffect(() => {
    // setIdx(id)
    setName(student.name);
    setbatch(student.batch);
    setage(student.age);
    setimg(student.img);
    setgender(student.gender);
    setbloodgroup(student.bloodGroup);
  }, []);

  function UpdateStudentdata() {
    const newstudent = {
      name,
      batch,
      age,
      img,
      gender,
      bloodGroup,
    };
    // console.log(newstudent)
    studentdata[idx] = newstudent;
    setName("");
    setbatch("");
    setage("");
    setimg("");
    setgender("");
    setbloodgroup("");
    history.push("/users");
  }

  return (
    <Base>
      <Box className="Createstudentfield">
        <Box className="studenttitle">
          <Typography variant="h2" component="h6">
            Edit Student Details
          </Typography>
        </Box>
        <Box className="textfield">
          <TextField
            className="InputText"
            helperText="Please enter your Name"
            id="demo-helper-text-aligned"
            onChange={(event) => setName(event.target.value)}
            value={name}
            label="Name"
          />
          <TextField
            className="InputText"
            helperText="Please enter your Batch"
            id="demo-helper-text-aligned"
            onChange={(event) => setbatch(event.target.value)}
            value={batch}
            label="Batch"
          />
          <TextField
            className="InputText"
            helperText="Please enter your Age"
            id="demo-helper-text-aligned"
            onChange={(event) => setage(event.target.value)}
            value={age}
            label="Age"
          />
          <TextField
            className="InputText"
            helperText="Mention Gender"
            id="demo-helper-text-aligned"
            onChange={(event) => setgender(event.target.value)}
            value={gender}
            label="Gender"
          />
          <TextField
            className="InputText"
            helperText="Attach your Image"
            id="demo-helper-text-aligned"
            onChange={(event) => setimg(event.target.value)}
            value={img}
            label="Image"
          />
          <TextField
            className="InputText"
            helperText="Please enter your Bloodgroup"
            id="demo-helper-text-aligned"
            onChange={(event) => setbloodgroup(event.target.value)}
            value={bloodGroup}
            label="Bloodgroup"
          />
          <br />
          <Box>
            <Button
              size="small"
              color="primary"
              onClick={UpdateStudentdata}
              variant="contained"
            >
              Update Student
            </Button>
          </Box>
        </Box>
      </Box>
    </Base>
  );
}
