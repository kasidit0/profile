import React from 'react'
import { Box, Typography, Button, IconButton, Avatar, Grid } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import A from './A'; // import AppBar
import profileImg from './../assets/profileImg.jpg'



function Play() {
  return (
    <>
      {/* AppBar ด้านบน */}
      <A />

      {/* เนื้อหาหลัก */}
      <Grid container spacing={0} columns={16}>
        <Grid size={8} sx={{}}>
          <Box
            sx={{
              width: "800px",
              mt: "120px", // ลดลงจาก 286px เพราะมี AppBar แล้ว
              ml: "10%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <Typography variant="h1" align="left" sx={{ width: "100%" }}>
              Hello , My name is <br />
              Kasidit
            </Typography>

            <Typography align="right">
              สวัสดี ผมชื่อ กษิดิศ ผมเป็นนักศึกษาจากมหาวิทยาลัยเอเชียอาคเนย์ <br />
              ปัจจุบันกำลังศึกษาอยู่สาขาวิศวกรรมคอมพิวเตอร์
            </Typography>

            <Box>
              <Button
                component={Link}
                to="/contact"
                sx={{
                  mt: 2,
                  backgroundColor: 'black',
                  color: 'white',
                  width: '200px',
                  height: '50px',
                  borderRadius: '50px'
                }}
              >
                <Typography variant="h6">Contact</Typography>
              </Button>

              <IconButton
                component="a"
                href="https://github.com/kasidit0"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 2,
                  ml: 2,
                  backgroundColor: 'black',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50px'
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>



        {/* AVATAR*/}
        <Grid size={8} sx={{}}>
          <Box             
          sx={{
             
              mt: "85px", 
              display: "flex",
              justifyContent: "space-between",
              ml: "15%",
              padding: "20px",
              
            }} >
            <Avatar alt="profile" src={profileImg}
              sx={{
                width: 500,
                height: 700,
                borderRadius: 2, 
                boxShadow: 3
              }} />
          </Box>
        </Grid>


      </Grid>

    </>
  )
}

export default Play