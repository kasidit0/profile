import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    IconButton,
    Card,
    Chip,
    Stack,
    Grid,
    Dialog,
    DialogContent,
    Tab,
    Tabs,
    Paper,
    Divider,
    Fade
} from '@mui/material';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import MemoryIcon from '@mui/icons-material/Memory';
import SensorsIcon from '@mui/icons-material/Sensors';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CodeIcon from '@mui/icons-material/Code';
import TuneIcon from '@mui/icons-material/Tune';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import A from './A';

function Project() {
    const [openImageModal, setOpenImageModal] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <>
            {/* Top Navigation Bar */}
            <A />

            <Box
                sx={{
                    minHeight: '100vh',
                    width: '100%',
                    backgroundColor: '#fafafa',
                    pt: '120px',
                    pb: '80px',
                    px: { xs: 2, sm: 4, md: 8 },
                    boxSizing: 'border-box'
                }}
            >
                <Box sx={{ maxWidth: '85%', mx: 'auto' }}>
                    {/* Header Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="h1"
                            align="left"
                            sx={{
                                width: "100%",
                                color: 'black'
                            }}
                        >
                            Graduation Project
                        </Typography>
                        <hr />
                        <br />
                    </Box>

                    {/* Centered Image */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                        <Box
                            component="img"
                            src="/project.jpg"
                            alt="Project Hero Banner"
                            sx={{
                                width: '100%',
                                maxWidth: '900px',
                                height: 'auto',
                                borderRadius: '25px',
                                objectFit: 'cover',
                                boxShadow: '0px 10px 30px rgba(0,0,0,0.1)'
                            }}
                        />
                    </Box>

                    {/* Project Details & Information (อยู่ใต้รูป) */}
                    <Box sx={{ maxWidth: '900px', mx: 'auto', mb: 8, textAlign: 'center' }}>
                        {/* Category & Status Chips
                        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" gap={1} sx={{ mb: 3 }}>
                            <Chip
                                icon={<EngineeringIcon sx={{ fontSize: 16 }} />}
                                label="Computer Engineering"
                                size="small"
                                sx={{
                                    backgroundColor: '#f0f4f8',
                                    color: '#0d47a1',
                                    fontWeight: 500
                                }}
                            />
                            <Chip
                                icon={<SensorsIcon sx={{ fontSize: 16 }} />}
                                label="IoT & Wearable Sensors"
                                size="small"
                                sx={{
                                    backgroundColor: '#fff3e0',
                                    color: '#e65100',
                                    fontWeight: 500
                                }}
                            />
                            <Chip
                                icon={<CheckCircleOutlineIcon sx={{ fontSize: 16 }} />}
                                label="Project Completed"
                                size="small"
                                sx={{
                                    backgroundColor: '#e8f5e9',
                                    color: '#2e7d32',
                                    fontWeight: 500
                                }}
                            />
                        </Stack> */}

                        {/* Project Title */}
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 700,
                                color: '#111',
                                fontSize: { xs: '1.6rem', sm: '2.2rem', md: '2.5rem' },
                                lineHeight: 1.3,
                                mb: 2
                            }}
                        >
                            ระบบตรวจจับการล้มด้วยอุปกรณ์สวมใส่
                        </Typography>



                        <Typography
                            variant="body1"
                            sx={{
                                color: '#444',
                                lineHeight: 1.8,
                                fontSize: '1.05rem',
                                mb: 4,
                                textAlign: 'justify',
                                textIndent: '2.5rem'
                            }}
                        >
                            ระบบตรวจจับการล้ม ทำงานโดยการตรวจวัดและวิเคราะห์การเคลื่อนไหวของร่างกายพร้อมกัน 3 จุด
                            ได้แก่ บริเวณหน้าอก เอว และต้นขา ผ่านเซนเซอร์วัดความเร่งและการหมุนตัว
                            ตัวระบบจะนำระยะความเคลื่อนไหวสัมพัทธ์ระหว่างแต่ละตำแหน่งมาคำนวณหาค่าเฉลี่ยและความแปรปรวนทางสถิติ
                            เพื่อกำหนดเป็นเส้นแบ่งเกณฑ์การเคลื่อนไหวที่ผิดปกติพร้อมทั้งใช้กลไกการตัดสินใจแบบเสียงส่วนใหญ่สองในสามจุดร่วมกับการผสานสัญญาณเซนเซอร์
                            เพื่อช่วยคัดกรองท่าทางในชีวิตประจำวันทั่วไปออกและยืนยันการหกล้มได้อย่างแม่นยำโดยไม่แจ้งเตือนผิดพลาด และส่งแจ้งเตือนไปยังผู้ดูแล
                        </Typography>

                        {/* Quick Meta Details (4 columns on desktop)
                        <Paper
                            variant="outlined"
                            sx={{
                                p: 3,
                                borderRadius: '16px',
                                backgroundColor: '#fbfbfb',
                                borderColor: '#eee',
                                mb: 5,
                                textAlign: 'left'
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography variant="caption" sx={{ color: '#888', textTransform: 'uppercase', fontWeight: 600 }}>
                                        หน้าที่รับผิดชอบ
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 600, color: '#222', mt: 0.5 }}>
                                        จัดทำเอกสารโครงการ
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#666' }}>
                                        Southeast Asia University
                                    </Typography>
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography variant="caption" sx={{ color: '#888', textTransform: 'uppercase', fontWeight: 600 }}>
                                        ผู้พัฒนาโครงงาน
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 600, color: '#222', mt: 0.5 }}>
                                        นาย กษิดิศ สมพจน์
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#666' }}>
                                        Kasidit Somphot
                                    </Typography>
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography variant="caption" sx={{ color: '#888', textTransform: 'uppercase', fontWeight: 600 }}>
                                        บทบาทและความรับผิดชอบ
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#222', mt: 0.5 }}>
                                        Hardware Design, Sensor Wiring, Firmware & Testing
                                    </Typography>
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                                    <Typography variant="caption" sx={{ color: '#888', textTransform: 'uppercase', fontWeight: 600 }}>
                                        ความเชี่ยวชาญหลัก
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#222', mt: 0.5 }}>
                                        Microcontroller, IoT, C/C++, Data Analysis
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper> */}


                    </Box>

                    {/* Navigation & Footer CTA
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2,
                            pt: 3,
                            borderTop: '1px solid #eee'
                        }}
                    >
                        <Button
                            component={Link}
                            to="/jobexp"
                            startIcon={<ArrowBackIcon />}
                            sx={{
                                borderRadius: '50px',
                                color: '#333',
                                px: 3,
                                py: 1,
                                textTransform: 'none',
                                fontWeight: 500,
                                '&:hover': {
                                    backgroundColor: '#eee'
                                }
                            }}
                        >
                            หน้าก่อนหน้า: Job Experience
                        </Button>

                        <Button
                            component={Link}
                            to="/contact"
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                borderRadius: '50px',
                                px: 4,
                                py: 1.3,
                                textTransform: 'none',
                                fontWeight: 500,
                                '&:hover': {
                                    backgroundColor: '#333'
                                }
                            }}
                        >
                            ติดต่อสอบถาม (Contact Me)
                        </Button>
                    </Box> */}
                </Box>
            </Box>

            {/* Full-Screen Image Lightbox Modal */}
            <Dialog
                open={openImageModal}
                onClose={() => setOpenImageModal(false)}
                maxWidth="lg"
                fullWidth
                TransitionComponent={Fade}
                PaperProps={{
                    sx: {
                        backgroundColor: '#0a0a0c',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.8)'
                    }
                }}
            >


            </Dialog>


        </>
    );
}

export default Project;
