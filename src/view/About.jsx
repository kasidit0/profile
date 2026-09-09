import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Divider, useMediaQuery, useTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const skills = [
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'TailwindCSS',
  'Python',
  'Set up robot',
  'Maintenance',
  'Photoshop',
  'After Effects',
  'Premiere Pro',
  'Microsoft Office'
];

function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [showAllSkills, setShowAllSkills] = useState(false);

  const displayedSkills = isMobile && !showAllSkills ? skills.slice(0, 6) : skills;
  return (
    <Box
      sx={{
        backgroundColor: '#fafafa',
        minHeight: '100vh',
        width: '100%',
        py: { xs: 8, md: 12 },
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
        {/* Section 1: About Me Header */}
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
            About Me
          </Typography>
          <Divider sx={{ mt: 1.5, mb: 3, borderColor: '#ccc', borderWidth: 1 }} />
        </Box>

        {/* Section 1: Content Grid */}
        <Grid container spacing={{ xs: 3, md: 5 }}>
          {/* Left: Name & Title */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: { xs: 2, md: 0 } }}>
              <Typography
                variant="h4"
                align="left"
                sx={{
                  fontSize: { xs: '1.6rem', md: '2.1rem' },
                  fontWeight: 400,
                  color: '#111',
                  mb: 0.5,
                }}
              >
                Kasidit Somphot
              </Typography>
              <Typography
                variant="h5"
                align="left"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  fontWeight: 300,
                  color: '#666',
                }}
              >
                นาย กษิดิศ สมพจน์
              </Typography>
            </Box>
          </Grid>

          {/* Right: Bio Text */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="body1"
              sx={{
                color: '#333',
                fontSize: { xs: '1rem', md: '1.05rem' },
                lineHeight: 1.85,
                mb: 3,
              }}
            >
              สวัสดีครับ ผมชื่อ <strong>กษิดิศ สมพจน์</strong> ชื่อเล่นว่า <strong>กานต์</strong> ปัจจุบันผมเป็นนักศึกษาจบใหม่จากมหาวิทยาลัยเอเชียอาคเนย์ สาขาวิศวกรรมคอมพิวเตอร์
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#333',
                fontSize: { xs: '1rem', md: '1.05rem' },
                lineHeight: 1.85,
                mb: 3,
              }}
            >
              ผมสนใจด้านเทคโนโลยีเป็นพิเศษ โดยเฉพาะด้านที่เกี่ยวข้องกับการพัฒนาและออกแบบระบบ เช่น{' '}
              <strong>Microcontroller, Robotics, IoT Automation รวมไปถึง IT Support, งานเอกสาร/งานออฟฟิศ และอื่น ๆ ที่เกี่ยวข้อง</strong>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#333',
                fontSize: { xs: '1rem', md: '1.05rem' },
                lineHeight: 1.85,
                mb: 3,
              }}
            >
              ภาษาโปรแกรมที่ใช้งานบ่อยคือ <strong>JavaScript, HTML, และ Python</strong> ซึ่งช่วยให้ผมสามารถพัฒนาทักษะและสร้างโปรเจกต์ต่าง ๆ ได้ตามที่สนใจ
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#333',
                fontSize: { xs: '1rem', md: '1.05rem' },
                lineHeight: 1.85,
                mb: 4,
              }}
            >
              นอกจากนี้ ผมยังมีงานอดิเรกที่ช่วยเพิ่มความคิดสร้างสรรค์ เช่น เล่นเกม ดูหนัง และออกแบบกราฟิก ซึ่งช่วยให้ผมผ่อนคลายและเปิดโลกทัศน์ใหม่ ๆ รวมถึงมีทักษะในการใช้โปรแกรมคอมพิวเตอร์และจัดการงานเอกสารออฟฟิศต่าง ๆ ได้เป็นอย่างดี <br />
              <strong>
                ผมหวังว่าจะได้นำความรู้ที่มีไปใช้ในงานจริงและสามารถพัฒนาผลิตภัณฑ์หรือบริการที่สามารถตอบโจทย์ความต้องการของผู้คนได้
              </strong>
            </Typography>

            {/* Resume Download Button */}
            {/* <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                href="#"
                sx={{
                  backgroundColor: 'black',
                  color: 'white',
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                  '&:hover': {
                    backgroundColor: '#222',
                  },
                }}
              >
                Download my resume
              </Button>
            </Box> */}
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 6, md: 8 }, borderColor: '#e0e0e0' }} />

        {/* Section 2: Skills */}
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h2"
              align="left"
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                fontWeight: 400,
                color: 'black',
                lineHeight: 1.2,
              }}
            >
              Skill
            </Typography>
          </Grid>

          {/* Skill Pills in JobExp style */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 1.25, sm: 1.5, md: 2 },
                justifyContent: { xs: 'flex-start', md: 'flex-start' },
                pt: { xs: 1, md: 1 },
              }}
            >
              {displayedSkills.map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    borderRadius: '50px',
                    border: '2px solid black',
                    px: { xs: 2.2, sm: 2.5, md: 3 },
                    py: { xs: 0.9, sm: 1, md: 1.2 },
                    fontSize: { xs: '0.88rem', sm: '0.95rem', md: '1rem' },
                    fontWeight: 500,
                    color: 'black',
                    backgroundColor: 'white',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      backgroundColor: 'black',
                      color: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                    },
                  }}
                >
                  {skill}
                </Box>
              ))}

              {/* Mobile "..." / "ดูเพิ่มเติม" button */}
              {isMobile && (
                <Box
                  component="button"
                  onClick={() => setShowAllSkills((prev) => !prev)}
                  sx={{
                    borderRadius: '50px',
                    border: '2px dashed black',
                    px: { xs: 2.2, sm: 2.5 },
                    py: { xs: 0.9, sm: 1 },
                    fontSize: { xs: '0.88rem', sm: '0.95rem' },
                    fontWeight: 500,
                    color: 'black',
                    backgroundColor: '#f5f5f5',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    transition: 'all 0.25s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    '&:hover': {
                      backgroundColor: 'black',
                      color: 'white',
                      borderColor: 'black',
                    },
                  }}
                >
                  {showAllSkills ? 'ย่อลง' : '... ดูเพิ่มเติม'}
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;