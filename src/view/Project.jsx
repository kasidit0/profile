import React, { useState, useRef } from 'react';
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
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import A from './A';

// ข้อมูลรูปภาพสำหรับ Popup Slide
const projectSlides = [
    {
        id: 1,
        title: 'ภาพรวมโปรเจกต์ (Project Overview)',
        description: 'ภาพรวมอุปกรณ์สวมใส่ตรวจจับการล้มและระบบการทำงานของเซนเซอร์',
        src: '/project.jpg'
    },
    {
        id: 2,
        title: 'Use Case Diagram',
        description: 'แผนผัง Use Case แสดงบทบาทผู้ใช้งาน และการทำงานของระบบ',
        src: '/usecase_diagram.PNG'
    }
];

function Project() {
    const [openImageModal, setOpenImageModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? projectSlides.length - 1 : prev - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projectSlides.length);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 50) {
            handleNextSlide();
        } else if (diff < -50) {
            handlePrevSlide();
        }
    };

    return (
        <>
            {/* Top Navigation Bar is now in Main.jsx */}

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
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ width: '100%' }}>
                        {/* Header Section */}
                        <Box sx={{ mb: 4 }}>
                            <Typography
                                variant="h2"
                                align="left"
                                sx={{
                                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' },
                                    fontWeight: 400,
                                    color: 'black'
                                }}
                            >
                                Graduation Project
                            </Typography>
                            <Box sx={{ width: '100%', height: '1px', backgroundColor: '#ccc', mt: 1.5, mb: 3 }} />
                        </Box>

                        {/* Centered Image with View More Button */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
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
                                    boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
                                    cursor: 'pointer',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.01)',
                                        boxShadow: '0px 15px 35px rgba(0,0,0,0.15)'
                                    }
                                }}
                                onClick={() => {
                                    setCurrentSlide(0);
                                    setOpenImageModal(true);
                                }}
                            />

                            {/* ปุ่มดูข้อมูลเพิ่มเติม ใต้รูป project.jpg */}
                            <Box sx={{ width: '100%', maxWidth: '900px', display: 'flex', justifyContent: 'flex-end' }}>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setCurrentSlide(0);
                                        setOpenImageModal(true);
                                    }}
                                    startIcon={<ZoomInIcon />}
                                    sx={{
                                        mt: 2.5,
                                        backgroundColor: 'black',
                                        color: 'white',
                                        borderRadius: '50px',
                                        px: 3.5,
                                        py: 1.2,
                                        textTransform: 'none',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                                        '&:hover': {
                                            backgroundColor: '#222',
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
                                        },
                                        transition: 'all 0.25s ease'
                                    }}
                                >
                                    ดูข้อมูลเพิ่มเติม
                                </Button>
                            </Box>
                        </Box>

                        {/* Project Details & Information (อยู่ใต้รูป) */}
                        <Box sx={{ maxWidth: '900px', mx: 'auto', mb: 8, textAlign: 'center' }}>


                            {/* Project Title */}
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 400,
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




                        </Box>


                        <Box sx={{ width: '100%', height: '1px', backgroundColor: '#e0e0e0', mt: 4 }} />
                    </Box>
                </Box>
            </Box>

            {/* Full-Screen Image Lightbox Modal with Slide */}
            <Dialog
                open={openImageModal}
                onClose={() => setOpenImageModal(false)}
                maxWidth="lg"
                fullWidth
                TransitionComponent={Fade}
                PaperProps={{
                    sx: {
                        backgroundColor: '#121214',
                        color: 'white',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
                        p: { xs: 2, sm: 3 },
                        position: 'relative'
                    }
                }}
            >
                {/* Header: Title & Close Button */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, px: 1 }}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                            {projectSlides[currentSlide].title}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#888' }}>
                            รูปภาพ {currentSlide + 1} จาก {projectSlides.length}
                        </Typography>
                    </Box>

                    <IconButton
                        onClick={() => setOpenImageModal(false)}
                        sx={{
                            color: '#aaa',
                            backgroundColor: 'rgba(255,255,255,0.08)',
                            '&:hover': {
                                color: 'white',
                                backgroundColor: 'rgba(255,255,255,0.18)'
                            }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                {/* Slide Viewport */}
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        overflow: 'hidden',
                        borderRadius: '16px',
                        backgroundColor: '#0a0a0c',
                        minHeight: { xs: '260px', sm: '420px', md: '480px' },
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Slides Track */}
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            transition: 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
                            transform: `translateX(-${currentSlide * 100}%)`
                        }}
                    >
                        {projectSlides.map((slide) => (
                            <Box
                                key={slide.id}
                                sx={{
                                    minWidth: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    p: { xs: 1.5, sm: 2 },
                                    boxSizing: 'border-box'
                                }}
                            >
                                <Box
                                    component="img"
                                    src={slide.src}
                                    alt={slide.title}
                                    sx={{
                                        maxWidth: '100%',
                                        maxHeight: { xs: '45vh', md: '55vh' },
                                        objectFit: 'contain',
                                        borderRadius: '12px',
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                                        backgroundColor: '#ffffff'
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#bbb',
                                        mt: 2,
                                        textAlign: 'center',
                                        px: 2,
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    {slide.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Left & Right Slide Navigation Arrows */}
                    <IconButton
                        onClick={handlePrevSlide}
                        aria-label="Previous Slide"
                        sx={{
                            position: 'absolute',
                            left: 12,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.65)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.15)',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                transform: 'translateY(-50%) scale(1.08)'
                            },
                            zIndex: 2
                        }}
                    >
                        <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
                    </IconButton>

                    <IconButton
                        onClick={handleNextSlide}
                        aria-label="Next Slide"
                        sx={{
                            position: 'absolute',
                            right: 12,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.65)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.15)',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                transform: 'translateY(-50%) scale(1.08)'
                            },
                            zIndex: 2
                        }}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                </Box>

                {/* Bottom Slide Indicators & Quick Selector */}
                <Stack
                    direction="row"
                    spacing={1.5}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mt: 2.5 }}
                >
                    {projectSlides.map((slide, index) => (
                        <Button
                            key={slide.id}
                            onClick={() => setCurrentSlide(index)}
                            variant={currentSlide === index ? 'contained' : 'outlined'}
                            size="small"
                            sx={{
                                borderRadius: '30px',
                                textTransform: 'none',
                                fontSize: '0.82rem',
                                px: 2,
                                py: 0.5,
                                borderColor: 'rgba(255,255,255,0.3)',
                                color: currentSlide === index ? 'black' : '#ccc',
                                backgroundColor: currentSlide === index ? 'white' : 'transparent',
                                '&:hover': {
                                    backgroundColor: currentSlide === index ? '#eee' : 'rgba(255,255,255,0.1)',
                                    borderColor: 'white'
                                }
                            }}
                        >
                            {slide.title}
                        </Button>
                    ))}
                </Stack>
            </Dialog>


        </>
    );
}

export default Project;
