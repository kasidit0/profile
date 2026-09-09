import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  Chip,
  Snackbar,
  Alert,
  Tooltip
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'KasiditSomphot@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fafafa',
        minHeight: '100vh',
        width: '100%',
        py: { xs: 8, md: 12 },
        display: 'flex',
        alignItems: 'center',
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
        {/* Section Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h2"
            align="left"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
              fontWeight: 400,
              color: 'black',
            }}
          >
            Let's Connect
          </Typography>
          <Box sx={{ width: '100%', height: '1px', backgroundColor: '#ccc', mt: 1.5, mb: 3 }} />
          <Typography
            variant="body1"
            sx={{
              color: '#555',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              maxWidth: '720px',
            }}
          >
            หากคุณกำลังมองหานักพัฒนาด้าน <strong>IT Automation, IoT, Robotics</strong> หรือทีมงานด้าน <strong>IT Support และงานออฟฟิศ</strong> สามารถติดต่อพูดคุยหรือส่งข้อเสนอมาได้ผ่านช่องทางต่าง ๆ ด้านล่างนี้ได้ทันทีครับ
          </Typography>
        </Box>

        {/* 2x2 Contact Cards Grid */}
        <Grid container spacing={{ xs: 2.5, md: 3.5 }} sx={{ mt: 1 }}>
          {/* Card 1: Email */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                borderRadius: '24px',
                border: '1px solid #e9ecef',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 14px 35px rgba(0, 0, 0, 0.09)',
                  borderColor: '#ddd',
                },
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box
                    sx={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50px',
                      backgroundColor: '#f4f5f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'black',
                    }}
                  >
                    <EmailOutlinedIcon fontSize="medium" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#111' }}>
                    Email
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#222',
                    fontSize: { xs: '1.05rem', sm: '1.15rem' },
                    fontWeight: 500,
                    wordBreak: 'break-all',
                    mb: 3,
                  }}
                >
                  {email}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', pt: 1 }}>
                <Button
                  component="a"
                  href={`mailto:${email}`}
                  variant="contained"
                  startIcon={<SendOutlinedIcon />}
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '50px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 500,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    '&:hover': { backgroundColor: '#222' },
                  }}
                >
                  Send Email
                </Button>

                <Tooltip title="คัดลอกอีเมล">
                  <Button
                    onClick={handleCopyEmail}
                    variant="outlined"
                    startIcon={<ContentCopyIcon />}
                    sx={{
                      borderRadius: '50px',
                      borderColor: '#ccc',
                      color: '#333',
                      px: 2.5,
                      py: 1,
                      textTransform: 'none',
                      fontWeight: 500,
                      '&:hover': {
                        borderColor: 'black',
                        backgroundColor: '#f8f8f8',
                      },
                    }}
                  >
                    Copy
                  </Button>
                </Tooltip>
              </Box>
            </Card>
          </Grid>

          {/* Card 2: Location & Social Media */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                borderRadius: '24px',
                border: '1px solid #e9ecef',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 14px 35px rgba(0, 0, 0, 0.09)',
                  borderColor: '#ddd',
                },
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Box
                      sx={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50px',
                        backgroundColor: '#f4f5f7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'black',
                      }}
                    >
                      <LocationOnOutlinedIcon fontSize="medium" />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#111' }}>
                      Location & Socials
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOnOutlinedIcon sx={{ fontSize: '1.2rem', color: '#555' }} />
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#222',
                        fontSize: { xs: '1rem', sm: '1.05rem' },
                        fontWeight: 500,
                      }}
                    >
                      Bangkok, Thailand
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocalPhoneOutlinedIcon sx={{ fontSize: '1.2rem', color: '#555' }} />
                    <Typography
                      component="a"
                      href="tel:0944876413"
                      variant="body1"
                      sx={{
                        color: '#222',
                        fontSize: { xs: '1rem', sm: '1.05rem' },
                        fontWeight: 500,
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: '#ff6f00',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      094-487-6413
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pt: 1 }}>
                <Tooltip title="Facebook">
                  <IconButton
                    component="a"
                    href="https://www.facebook.com/kasidit.karn.7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    sx={{
                      backgroundColor: 'black',
                      color: 'white',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: '#222',
                        transform: 'scale(1.08)',
                      },
                    }}
                  >
                    <FacebookOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Instagram">
                  <IconButton
                    component="a"
                    href="https://www.instagram.com/kst.kxsidit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    sx={{
                      backgroundColor: 'black',
                      color: 'white',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50px',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: '#222',
                        transform: 'scale(1.08)',
                      },
                    }}
                  >
                    <InstagramIcon fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Typography variant="body2" sx={{ color: '#777', ml: 1 }}>
                  Connect with me
                </Typography>
              </Box>
            </Card>
          </Grid>

          {/* Card 3: GitHub */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                borderRadius: '24px',
                border: '1px solid #e9ecef',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 14px 35px rgba(0, 0, 0, 0.09)',
                  borderColor: '#ddd',
                },
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box
                    sx={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50px',
                      backgroundColor: '#f4f5f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'black',
                    }}
                  >
                    <GitHubIcon fontSize="medium" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#111' }}>
                    GitHub
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#222',
                    fontSize: { xs: '1.05rem', sm: '1.15rem' },
                    fontWeight: 500,
                    mb: 3,
                  }}
                >
                  github.com/kasidit0
                </Typography>
              </Box>

              <Box sx={{ pt: 1 }}>
                <Button
                  component="a"
                  href="https://github.com/kasidit0"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '50px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 500,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    '&:hover': { backgroundColor: '#222' },
                  }}
                >
                  Explore Repositories
                </Button>
              </Box>
            </Card>
          </Grid>

          {/* Card 4: LinkedIn */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                p: { xs: 3, sm: 4 },
                height: '100%',
                borderRadius: '24px',
                border: '1px solid #e9ecef',
                backgroundColor: '#ffffff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 14px 35px rgba(0, 0, 0, 0.09)',
                  borderColor: '#ddd',
                },
              }}
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box
                    sx={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50px',
                      backgroundColor: '#f4f5f7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'black',
                    }}
                  >
                    <LinkedInIcon fontSize="medium" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#111' }}>
                    LinkedIn
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#222',
                    fontSize: { xs: '1.05rem', sm: '1.15rem' },
                    fontWeight: 500,
                    mb: 3,
                  }}
                >
                  Kasidit Somphot
                </Typography>
              </Box>

              <Box sx={{ pt: 1 }}>
                <Button
                  component="a"
                  href="https://www.linkedin.com/in/kasidit-somphot-169463259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    borderRadius: '50px',
                    px: 3,
                    py: 1,
                    textTransform: 'none',
                    fontWeight: 500,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    '&:hover': { backgroundColor: '#222' },
                  }}
                >
                  View Profile
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Snackbar notification when email is copied */}
      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setCopied(false)}
          severity="success"
          sx={{
            width: '100%',
            borderRadius: '50px',
            backgroundColor: 'black',
            color: 'white',
            '& .MuiAlert-icon': { color: '#4caf50' },
          }}
        >
          คัดลอกอีเมล KasiditSomphot@gmail.com แล้ว!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;