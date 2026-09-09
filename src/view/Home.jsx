import React from 'react'
import { Box, Typography, Button, IconButton, Avatar, Grid, colors } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import A from './A'; // import AppBar
import profileImg from './../assets/profileImg.jpg'



function Play() {
  return (
    <>
      {/* AppBar is now in Main.jsx */}

      <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh', width: '100%' }}>
        {/* เนื้อหาหลัก */}
        <Grid container spacing={0} columns={16}>
          <Grid size={{ xs: 16, md: 10 }} sx={{}}>
            <Box
              sx={{
                width: { xs: '100%', md: '80%' },
                mt: { xs: '100px', md: '290px' },
                mx: 'auto',
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: 'center', md: 'flex-start' },
                padding: "20px",
                textAlign: { xs: 'center', md: 'left' },

              }}
            >
              <Typography variant="h1" align="left" sx={{ width: "100%" }}>
                Hello , My name is <br />
                Kasidit
              </Typography>
              <Box sx={{
                mt: "20px",
                mb: "20px",
                width: "100%",
                textAlign: { xs: 'center', md: 'left' }
              }}>
                <Typography align="inherit">
                  สวัสดี ผมชื่อ กษิดิศ สมพจน์ จบการศึกษาจากมหาวิทยาลัยเอเชียอาคเนย์ <br />
                  กำลังมองหางานด้าน IT Automation IoT และ Robotics อยู่ครับ
                </Typography>
              </Box>


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
          <Grid size={{ xs: 16, md: 5 }} sx={{}}>
            <Box
              sx={{
                mt: { xs: '40px', md: '130px' },
                mb: { xs: '60px', md: 0 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
              }} >
              <Avatar alt="profile" src={profileImg}
                sx={{
                  width: { xs: '300px', sm: '400px', md: '500px' },
                  height: { xs: '420px', sm: '560px', md: '700px' },
                  borderRadius: 2,
                  boxShadow: 3
                }} />
            </Box>
          </Grid>


        </Grid>
      </Box>

    </>
  )
}

export default Play