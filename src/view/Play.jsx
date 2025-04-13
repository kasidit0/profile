import React from 'react'
import { Box, Typography, Button, IconButton, Avatar, Grid, TextField, TextareaAutosize } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



import { Link } from 'react-router-dom';
import A from './A'; // import AppBar
import profileImg from './../assets/profileImg.jpg'




function Play() {
  return (
    <>
      {/* AppBar ด้านบน */}
      <A />

      {/* 1 */}
      <Grid container spacing={0} columns={16}>
        <Grid size={8} sx={{}}>
          <Box
            sx={{
              width: "80%",
              mt: "120px",
              ml: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "20px",
              
            }}
          >
            <Typography variant="h1" align="left" sx={{
              width: "100%", borderBottom: '1px solid black',
              display: 'inline-block'
            }} >
              Let's Connect
            </Typography>

            <Typography sx={{ ml: 2,mt:2 }}>
              Say Hello at KasiditSomphot@gmail.com <br />
              for moor information, here's my resume
            </Typography>




            {/* btn */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 2 }}>
              {/* github */}
              <IconButton
                component="a"
                href="https://github.com/kasidit0"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 2,
                  backgroundColor: 'black',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50px',display: 'flex', justifyContent: 'center'
                }}
              >
                <GitHubIcon />
              </IconButton>
              {/* Linkedin */}
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/kasidit-somphot-169463259/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 2,
                  ml: 2,
                  backgroundColor: 'black',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50px',display: 'flex', justifyContent: 'center'
                }}
              >
                <LinkedInIcon />
              </IconButton>
              {/* Facebook */}
              <IconButton
                component="a"
                href="https://www.facebook.com/kasidit.karn.7/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 2,
                  ml: 2,
                  backgroundColor: 'black',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50px',display: 'flex', justifyContent: 'center'
                }}
              >
                <FacebookOutlinedIcon />
              </IconButton>
              {/* Instagram */}
              <IconButton
                component="a"
                href="https://www.instagram.com/kst.kxsidit/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 2,
                  ml: 2,
                  backgroundColor: 'black',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50px',display: 'flex', justifyContent: 'center'
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>

           

          </Box>

        </Grid>



        {/* 2*/}
        <Grid size={8} sx={{}}>
        <Box
            sx={{
              ml: '10%',
              mt: '120px',
             
              color: 'white',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 3,
              
            }}
          >
            <Box sx={{ backgroundColor: 'black', padding: '20px', borderRadius: '20px' }}>
              <Typography >Name</Typography>
              <TextField sx={{ width: '600px', backgroundColor: 'white', mb: 2, borderRadius: '5px' }} id="Name" />

              <Typography >Email</Typography>
              <TextField sx={{ width: '600px', backgroundColor: 'white', mb: 2, borderRadius: '5px' }} id="Email" />

              <Typography >Subject</Typography>
              <TextField sx={{ width: '600px', backgroundColor: 'white', mb: 2, borderRadius: '5px' }} id="Subject" />

              <Typography >Message</Typography>
              <TextareaAutosize minRows={10} style={{ width: 600, backgroundColor: 'white', mb: 2 }} />

              <Button variant="contained" sx={{
                backgroundColor: 'white', color: 'black', width: '100px',
                mt: 2, display: 'block', borderRadius: '10px', borderColor: 'white', ml: 'auto'
              }}>Send</Button>


            </Box>


          </Box>
        </Grid>


      </Grid>

    </>
  )
}

export default Play