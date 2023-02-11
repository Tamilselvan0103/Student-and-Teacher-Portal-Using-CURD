import React from 'react'
import Base from '../Component/Base'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
import { useHistory } from "react-router-dom";

const TeacherReading = ({setTeacherdata,TeacherData}) => {
    function deleteStudentdata(id) {
        let remaingdata = TeacherData.filter((data, idx) => idx !== id);
        setTeacherdata(remaingdata);
      }
    
      const history = useHistory();
    
  return (
    <Base>
    <Box className="HomeBox">
      <Box>
        <Typography variant="h2" component="h6"></Typography>
      </Box>

      <Box className="CardBox">
        {TeacherData.map((data, idx) => (
          <Card sx={{ maxWidth: 345 }} key={idx} className="studentCards">
            <CardMedia
              sx={{ height: 140 }}
              image={data.img}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Subject : {data.subject}
                <br />
                Gender : {data.gender}
                <br />
                Eperience : {data.experience}
               
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                variant="outlined"
                onClick={() => history.push(`/edit-teacher-user/${idx}`)}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="error"
                variant="outlined"
                onClick={() => {
                  deleteStudentdata(idx);
                }}
              >
                Delete
              </Button>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => history.push(`/teacher-profile/${idx}`)}
              >
                View
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  </Base>
  )
}

export default TeacherReading