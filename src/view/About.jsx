import React from 'react'
import A from './A';
import { Box, Typography, Button, IconButton, Grid } from '@mui/material'
import { Link } from 'react-router-dom';
function About() {
  return (
    <>
      <A />

      <Box
        sx={{
          width: "80%",
          mt: "120px",
          ml: "10%",
          display: "flex",
          flexDirection: "column",

          padding: "20px",
        }}>
        <Grid container spacing={0} columns={16}>
          <Grid size={6} sx={{}}>
            <Typography variant="h1" align="left" sx={{ width: "100%" }}>
              About Me

            </Typography>
            <hr />
            <br />
          </Grid>

          <Grid size={10} sx={{}}>

          </Grid>

          <Grid size={6} sx={{}}>
            <Typography variant="h4" align="left" sx={{ width: "100%" }}>
              Kasidit Somphot
            </Typography>
            <Typography variant="h5" align="left" sx={{ width: "100%" }}>
              นาย กษิดิศ สมพจน์
            </Typography>
          </Grid>

          <Grid size={10} sx={{}}>
            <Typography variant="body1" align="left">
              สวัสดีครับ ผมชื่อ <strong>กษิดิศ สมพจน์</strong> ชื่อเล่นว่า<strong>กานต์</strong> ปัจจุบันกำลังศึกษาอยู่ที่ มหาวิทยาลัยเอเชียอาคเนย์ ชั้นปีที่ 2
              ผมสนใจด้านเทคโนโลยีและการเขียนโปรแกรมเป็นพิเศษ โดยเฉพาะวิชาที่เกี่ยวข้องกับการพัฒนาและออกแบบระบบ เช่น <strong>  Microcontroller, Database, Coding, และ Data Structure</strong>
              <br />
              ภาษาโปรแกรมที่ใช้งานบ่อยคือ <strong>JavaScript, HTML, Python, และ C </strong>ซึ่งช่วยให้ผมสามารถพัฒนาทักษะและสร้างโปรเจกต์ต่าง ๆ ได้ตามที่สนใจ
              <br />
              นอกจากนี้
              ผมยังมีงานอดิเรกที่ช่วยเพิ่มความคิดสร้างสรรค์ เช่น เล่นเกม ดูหนัง ออกแบบกราฟิก และ การทำเว็ปไซต์ ซึ่งช่วยให้ผมผ่อนคลายและเปิดโลกทัศน์ใหม่ ๆ
              <strong>
                ไผมหวังว่าจะได้นำความรู้ที่มีไปใช้ในงานจริงและสามารถพัฒนาผลิตภัณฑ์หรือบริการที่สามารถตอบโจทย์ความต้องการของผู้คนได้
              </strong>


            </Typography>

          </Grid>

          <Grid size={16} sx={{ mt: '30px' }}>

            <Box textAlign="right">
              <Button
                component={Link}
                to="#"
                sx={{
                  mt: 2,
                  backgroundColor: 'black',
                  color: 'white',
                  width: '270px',
                  height: '50px',
                  borderRadius: '50px',
                  fontSize: '1.25rem', // ทำให้มีขนาดเท่ากับ h6
                  fontWeight: '500'
                }}
              >
                Download my resume
              </Button>
            </Box>

            <br /><br />
            <hr />
          </Grid>

        </Grid>

      </Box>






      <Box
        sx={{
          width: "80%",
          mt: "60px",
          ml: "10%",
          display: "flex",
          flexDirection: "column",

          padding: "20px",
        }}>
        <Grid container spacing={0} columns={16}>
          {/* A */}
          <Grid size={6} sx={{}}>
            <Typography variant="h1" align="right" sx={{ width: "100%" }}>
              My Capablities

            </Typography>


            <br />
          </Grid>


          {/* B */}
          <Grid size={10} sx={{}}>

            {/* Box1 */}
            <Box sx={{ display: 'flex', gap: 2, mt: '50px', mr: '25%', justifyContent: 'end' }}>
              <Typography variant="body1" align="center"
                sx={{
                  color: 'black', width: '100px', height: '50px',
                  borderRadius: '50px', border: '2px solid black',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                JavaScript
              </Typography>
              <Typography variant="body1" align="right"
                sx={{
                  color: 'black', width: '100px', height: '50px',
                  borderRadius: '50px', border: '2px solid black',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                HTML
              </Typography>

              <Typography
                variant="body1" align="right"
                sx={{
                  color: 'black', width: '100px', height: '50px',
                  borderRadius: '50px', border: '2px solid black',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                CSS
              </Typography>
            </Box>

            {/* Box2 */}
            <Box sx={{ display: 'flex', gap: 2, mt: '30px', mr: '25%', justifyContent: 'end' }}>
              <Typography variant="body1" align="right"
                sx={{
                  color: 'black', width: '100px', height: '50px',
                  borderRadius: '50px', border: '2px solid black',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                Phython
              </Typography>
              <Typography variant="body1" align="right"
                sx={{
                  color: 'black', width: '100px', height: '50px',
                  borderRadius: '50px', border: '2px solid black',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                Java
              </Typography>

              <Typography
                variant="body1" align="right"
                sx={{
                  color: 'black', width: '100px', height: '50px',
                  borderRadius: '50px', border: '2px solid black',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                C/C++
              </Typography>
            </Box>



          </Grid>
          {/* C */}
          <Grid size={16} sx={{ mt: '30px' }}>
            <br /><br />
            <hr />
            <br /><br /><br />
          </Grid>

        </Grid>
        <Box>
                {/* fakeBox */}
        </Box>
      </Box>
    </>
  )
}

export default About