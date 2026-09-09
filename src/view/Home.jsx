import React from 'react';
import { Box, Typography, Button, IconButton, Avatar, Grid, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import profileImg from '../assets/profileImg.jpg';

function Home() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fafafa',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 12, md: 8 },
      }}
    >
      <Box
        sx={{
          width: { xs: '92%', sm: '88%', md: '80%' },
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 1, sm: 2 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Text Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 500,
                  color: '#111',
                  lineHeight: 1.15,
                  mb: 2.5,
                  fontSize: { xs: '2.5rem', sm: '3.2rem', md: '4.2rem' },
                }}
              >
                Hello , My name is <br />
                Kasidit
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#444',
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  lineHeight: 1.8,
                  maxWidth: '560px',
                  mb: 4,
                }}
              >
                สวัสดี ผมชื่อ กษิดิศ สมพจน์ จบการศึกษาจากมหาวิทยาลัยเอเชียอาคเนย์ <br />
                กำลังมองหางานด้าน IT Automation, IoT, Robotics รวมทั้ง IT Support และงานเอกสาร/งานออฟฟิศอยู่ครับ
              </Typography>

              {/* Action Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  gap: 2,
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  onClick={scrollToContact}
                  variant="contained"
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    px: 4,
                    height: '50px',
                    borderRadius: '50px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                    '&:hover': {
                      backgroundColor: '#222',
                    },
                  }}
                >
                  Contact
                </Button>

                <IconButton
                  component="a"
                  href="https://github.com/kasidit0"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50px',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: '#222',
                      transform: 'scale(1.08)',
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>

                <Tooltip title="094-487-6413" arrow>
                  <IconButton
                    component="a"
                    href="tel:0944876413"
                    aria-label="Phone 094-487-6413"
                    sx={{
                      backgroundColor: 'black',
                      color: 'white',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: '#222',
                        transform: 'scale(1.08)',
                      },
                    }}
                  >
                    <LocalPhoneOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Grid>

          {/* Avatar Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Avatar
                alt="Kasidit Somphot"
                src={profileImg}
                variant="rounded"
                sx={{
                  width: { xs: '260px', sm: '320px', md: '380px' },
                  height: { xs: '350px', sm: '430px', md: '500px' },
                  borderRadius: '24px',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.12)',
                  objectFit: 'cover',
                  border: '4px solid #fff',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;