import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Typography,
    IconButton,
    Card,
    Chip,
    Stack,
    Button,
    Dialog,
    DialogContent,
    Fade
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import A from './A';

// ข้อมูลประสบการณ์การทำงานและบริษัทที่เคยร่วมงาน
const experiences = [
    {
        id: 1,
        company: 'DJI Phantom Thailand',
        role: 'Agricultural Drone Technician Intern',
        period: '3 months',
        location: 'Bangkok, Thailand',
        logo: '/png/djiphantomthailand-Photoroom.png',
        tags: ['Agricultural Drone Technician', 'Problem analysis', 'Maintenance', 'Hardware Support'],
        description:
            'ดำเนินการตรวจสอบ วิเคราะห์ปัญหา และซ่อมบำรุงเปลี่ยนอะไหล่ สำหรับโดรนการเกษตร DJI พร้อมทั้งทดสอบระบบการทำงานก่อนส่งมอบ เพื่อให้โรนทำงานได้อย่างปลอดภัยและเต็มประสิทธิภาพ',
        details: [
            'วิเคราะห์อาการเสียและประเมินความเสียหายทางกายภาพ',
            'ซ่อมบำรุงและเปลี่ยนอะไหล่ฮาร์ดแวร์โตามความเหมาะสมของแต่ละอาการ',
            'ทดสอบระบบการหว่าน และระบบการฉีดพ่นหลังซ่อม เพื่อการันตีความปลอดภัย และประสิทธิภาพสูงสุด'
        ]
    },
    {
        id: 2,
        company: 'Beyond Godlike',
        role: 'IT Support & Staff',
        period: 'part-time',
        location: 'Bangkok, Thailand',
        logo: '/png/BeyondGodlike-Photoroom.png',
        tags: ['IT Support', 'Hardware', 'Problem analysis', 'Install Program', 'PC Setup', 'Network'],
        description:
            'ดูแล และติดตั้งระบบคอมพิวเตอร์ อุปกรณ์ IT ในการจัดงานอีเวนท์ พร้อมทั้งแก้ไขปัญหาที่เกิดขึ้นระหว่างดำเนินการ',
        details: [
            'ติดตั้งระบบคอมพิวเตอร์และอุปกรณ์ IT',
            'ดูแล และแก้ไขปัญหาที่เกิดขึ้นระหว่างการจัดงานอีเวนท์',
            'กำหนด IP ให้กับคอมพิวเตอร์สำหรับการแข่งขัน',
            'ดูแลโทรศัพท์มือถือสำหรับใช้ในการแข่งขัน',
        ]
    },
    {
        id: 3,
        company: '100PRO',
        role: 'Robot Installation & Demo Intern',
        period: '3 months',
        location: 'Bangkok, Thailand',
        logo: '/png/100pro.png',
        tags: ['Problem analysis', 'Remote Assistance', 'Maintenance'],
        description:
            'รีโมท และเข้าไปที่หน้างาน เพื่อแก้ไขปัญหาของหุ่นยนต์ให้กับลูกค้า เช่น แก้ไขตั้งค่าการทำงานของหุ่นยนต์ ตรวจสอบปัญหาจากสภาพแวดล้อม',
        details: [
            'การรีโมทแก้ปัญหา เช่น ปรับแก้การตั้งค่าการทำงานของหุ่นยนต์  ',
            'การแก้ไขปัญหาที่หน้างานของลูกค้า เช่น สำรวจสภาพแวดล้อม การติดตั้งแผ่นสะท้อนแสง และ โค้ดบอกพิกัด ',
            'ติดต่อประสานงานกับผู้ผลิต เพื่อหาทางออกร่วมกัน'
        ]
    },
    {
        id: 4,
        company: 'CS IT System',
        role: 'Computer Technician Intern',
        period: '1 month',
        location: 'Bangkok, Thailand',
        logo: '/png/LOGO_CS.png',
        tags: ['Hardware Assembly', 'Troubleshooting', 'Install Program', 'Install Window'],
        description:
            'ประกอบคอมพิวเตอร์ ติดตั้งโปรแกรม และระบบปฏิบัติการให้แก่ลูกค้า พร้อมทั้งคอยให้ความช่วยเหลือเมื่อเกิดปัญหาในการใช้งานเบื้องต้น',
        details: [
            'ประกอบคอมพิวเตอร์ และติดตั้งระบบปฏิบัติการ',
            'ติดตั้งโปรแกรมตามความต้องการของลูกค้า',
            'ให้คำแนะนำสเปคคอมพิวเตอร์ตามความต้องการของลูกค้า',

        ]
    }
];

function JobExp() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedExp, setSelectedExp] = useState(null);
    const isModalOpen = Boolean(selectedExp);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    // Auto-play carousel ทุกๆ 6 วินาที (หยุดเมื่อ hover หรือเปิด popup)
    useEffect(() => {
        if (isPaused || isModalOpen) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % experiences.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [isPaused, isModalOpen]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % experiences.length);
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
            handleNext();
        } else if (diff < -50) {
            handlePrev();
        }
    };

    return (
        <>
            {/* Top Navbar is now in Main.jsx */}
            {/* <A /> */}

            <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh', width: '100%', py: { xs: 8, md: 12 } }}>
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
                    {/* Section Header */}
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
                            Job Experience
                        </Typography>
                        <Box sx={{ width: '100%', height: '1px', backgroundColor: '#ccc', mt: 1.5, mb: 3 }} />
                    </Box>

                    {/* Company Quick-Selector Pills (2 buttons per row on mobile, flex on desktop) */}
                    <Box
                        sx={{
                            display: { xs: 'grid', md: 'flex' },
                            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)' },
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: { xs: 1.25, sm: 1.5 },
                            mb: 4,
                        }}
                    >
                        {experiences.map((item, index) => (
                            <Button
                                key={item.id}
                                onClick={() => setCurrentIndex(index)}
                                variant={currentIndex === index ? 'contained' : 'outlined'}
                                sx={{
                                    borderRadius: '50px',
                                    px: { xs: 1.5, sm: 2.5 },
                                    py: { xs: 1, sm: 1 },
                                    minHeight: { xs: '44px', sm: '40px' },
                                    textTransform: 'none',
                                    fontSize: { xs: '0.82rem', sm: '0.88rem', md: '0.9rem' },
                                    fontWeight: 500,
                                    whiteSpace: { xs: 'normal', md: 'nowrap' },
                                    lineHeight: 1.25,
                                    textAlign: 'center',
                                    width: { xs: '100%', md: 'auto' },
                                    borderColor: 'black',
                                    backgroundColor: currentIndex === index ? 'black' : 'transparent',
                                    color: currentIndex === index ? 'white' : 'black',
                                    transition: 'all 0.25s ease',
                                    '&:hover': {
                                        backgroundColor: currentIndex === index ? '#222' : '#f0f0f0',
                                        borderColor: 'black'
                                    }
                                }}
                            >
                                {item.company}
                            </Button>
                        ))}
                    </Box>

                    {/* Carousel Wrapper */}
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%'
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Carousel Slides Viewport */}
                        <Box
                            sx={{
                                overflow: 'hidden',
                                borderRadius: '24px',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                    width: '100%'
                                }}
                            >
                                {experiences.map((exp) => (
                                    <Box
                                        key={exp.id}
                                        sx={{
                                            minWidth: '100%',
                                            boxSizing: 'border-box'
                                        }}
                                    >
                                        {/* Horizontal Card Layout */}
                                        <Card
                                            onClick={() => setSelectedExp(exp)}
                                            sx={{
                                                display: 'flex',
                                                flexDirection: { xs: 'column', md: 'row' },
                                                backgroundColor: 'white',
                                                borderRadius: '24px',
                                                border: '1px solid #e9ecef',
                                                minHeight: { md: '600px' },
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.12)',
                                                    borderColor: '#bbb'
                                                }
                                            }}
                                        >
                                            {/* Left: Company Logo Section */}
                                            <Box
                                                sx={{
                                                    width: { xs: '100%', md: '38%' },
                                                    backgroundColor: '#f8f9fa',
                                                    borderRight: { md: '1px solid #eee' },
                                                    borderBottom: { xs: '1px solid #eee', md: 'none' },
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    p: { xs: 4, sm: 5 },
                                                    position: 'relative'
                                                }}
                                            >
                                                {/* Company Logo Image */}
                                                <Box
                                                    component="img"
                                                    src={exp.logo}
                                                    alt={exp.company}
                                                    sx={{
                                                        maxWidth: { xs: '180px', sm: '220px', md: '240px' },
                                                        maxHeight: { xs: '130px', sm: '160px', md: '180px' },
                                                        width: 'auto',
                                                        height: 'auto',
                                                        objectFit: 'contain',
                                                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.06))',
                                                        transition: 'transform 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'scale(1.05)'
                                                        }
                                                    }}
                                                />

                                                {/* Location Subtext */}
                                                {/* <Stack
                                                    direction="row"
                                                    alignItems="center"
                                                    spacing={0.5}
                                                    sx={{ mt: 3, color: '#666' }}
                                                >
                                                    <LocationOnOutlinedIcon sx={{ fontSize: 18 }} />
                                                    <Typography variant="body2" sx={{ fontWeight: 400 }}>
                                                        {exp.location}
                                                    </Typography>
                                                </Stack> */}
                                            </Box>

                                            {/* Right: Company Info & Description Section */}
                                            <Box
                                                sx={{
                                                    width: { xs: '100%', md: '62%' },
                                                    p: { xs: 3, sm: 4, md: 5 },
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-between'
                                                }}
                                            >
                                                <Box>
                                                    {/* Period & Role Badges */}
                                                    <Stack
                                                        direction="row"
                                                        alignItems="center"
                                                        flexWrap="wrap"
                                                        gap={1}
                                                        sx={{ mb: 2 }}
                                                    >
                                                        <Chip
                                                            icon={<CalendarMonthIcon sx={{ fontSize: 16 }} />}
                                                            label={exp.period}
                                                            size="small"
                                                            sx={{
                                                                backgroundColor: '#f0f0f0',
                                                                color: '#333',
                                                                fontWeight: 500,
                                                                fontSize: '0.85rem'
                                                            }}
                                                        />
                                                        <Chip
                                                            label={exp.role}
                                                            size="small"
                                                            sx={{
                                                                backgroundColor: 'black',
                                                                color: 'white',
                                                                fontWeight: 500,
                                                                fontSize: '0.85rem'
                                                            }}
                                                        />
                                                    </Stack>

                                                    {/* Company Name as Title */}
                                                    <Typography
                                                        variant="h4"
                                                        align="left"
                                                        sx={{
                                                            fontWeight: 400,
                                                            color: '#111',
                                                            mb: 2
                                                        }}
                                                    >
                                                        {exp.company}
                                                    </Typography>

                                                    {/* Lorem Ipsum Description */}
                                                    <Typography
                                                        variant="body1"
                                                        align="left"
                                                        sx={{
                                                            color: '#333',
                                                            lineHeight: 1.8,
                                                            fontSize: '1rem',
                                                            mb: 2.5
                                                        }}
                                                    >
                                                        {exp.description}
                                                    </Typography>

                                                    {/* Detail Bullet Points */}
                                                    <Box component="ul" sx={{ pl: 2.5, m: 0, mb: 3 }}>
                                                        {exp.details.map((bullet, idx) => (
                                                            <Box
                                                                component="li"
                                                                key={idx}
                                                                sx={{
                                                                    color: '#444',
                                                                    fontSize: '0.95rem',
                                                                    lineHeight: 1.75,
                                                                    mb: 1
                                                                }}
                                                            >
                                                                {bullet}
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Box>

                                                {/* Tech / Skills Tags */}
                                                <Box sx={{ pt: 2, borderTop: '1px solid #f0f0f0' }}>
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            display: 'block',
                                                            color: '#888',
                                                            fontWeight: 600,
                                                            letterSpacing: 1,
                                                            textTransform: 'uppercase',
                                                            mb: 1
                                                        }}
                                                    >
                                                        Technologies & Skills
                                                    </Typography>
                                                    <Stack direction="row" flexWrap="wrap" gap={1}>
                                                        {exp.tags.map((tag, tIdx) => (
                                                            <Chip
                                                                key={tIdx}
                                                                label={tag}
                                                                size="small"
                                                                variant="outlined"
                                                                sx={{
                                                                    borderColor: '#ddd',
                                                                    color: '#333',
                                                                    fontSize: '0.78rem',
                                                                    '&:hover': {
                                                                        borderColor: 'black',
                                                                        backgroundColor: '#f8f9fa'
                                                                    }
                                                                }}
                                                            />
                                                        ))}
                                                    </Stack>

                                                    {/* View Details Button */}
                                                    <Box sx={{ mt: 2.5, display: 'flex', justifyContent: { xs: 'stretch', sm: 'flex-end' } }}>
                                                        <Button
                                                            variant="contained"
                                                            size="small"
                                                            endIcon={<OpenInNewIcon sx={{ fontSize: 16 }} />}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setSelectedExp(exp);
                                                            }}
                                                            sx={{
                                                                borderRadius: '50px',
                                                                backgroundColor: 'black',
                                                                color: 'white',
                                                                px: 2.5,
                                                                py: 0.8,
                                                                fontSize: '0.85rem',
                                                                fontWeight: 500,
                                                                textTransform: 'none',
                                                                width: { xs: '100%', sm: 'auto' },
                                                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                                                '&:hover': {
                                                                    backgroundColor: '#222'
                                                                }
                                                            }}
                                                        >
                                                            กดเพื่อดูรายละเอียด
                                                        </Button>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Card>
                                    </Box>
                                ))}
                            </Box>
                        </Box>

                        {/* Carousel Navigation Buttons (Left & Right Floating) */}
                        <IconButton
                            onClick={handlePrev}
                            aria-label="Previous Slide"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: { xs: '-15px', md: '-24px' },
                                transform: 'translateY(-50%)',
                                backgroundColor: 'black',
                                color: 'white',
                                width: { xs: 42, md: 48 },
                                height: { xs: 42, md: 48 },
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                zIndex: 10,
                                '&:hover': {
                                    backgroundColor: '#333',
                                    transform: 'translateY(-50%) scale(1.08)'
                                },
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <ArrowBackIosNewIcon sx={{ fontSize: { xs: 18, md: 20 } }} />
                        </IconButton>

                        <IconButton
                            onClick={handleNext}
                            aria-label="Next Slide"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                right: { xs: '-15px', md: '-24px' },
                                transform: 'translateY(-50%)',
                                backgroundColor: 'black',
                                color: 'white',
                                width: { xs: 42, md: 48 },
                                height: { xs: 42, md: 48 },
                                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                zIndex: 10,
                                '&:hover': {
                                    backgroundColor: '#333',
                                    transform: 'translateY(-50%) scale(1.08)'
                                },
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <ArrowForwardIosIcon sx={{ fontSize: { xs: 18, md: 20 } }} />
                        </IconButton>
                    </Box>

                    {/* Carousel Pagination Indicator Dots & Status */}
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1.5}
                        sx={{ mt: 4 }}
                    >
                        {experiences.map((_, index) => (
                            <Box
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                sx={{
                                    width: currentIndex === index ? '32px' : '10px',
                                    height: '10px',
                                    borderRadius: '10px',
                                    backgroundColor: currentIndex === index ? 'black' : '#ccc',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    '&:hover': {
                                        backgroundColor: currentIndex === index ? 'black' : '#888'
                                    }
                                }}
                            />
                        ))}
                    </Stack>

                    {/* Counter info */}
                    <Typography
                        align="center"
                        variant="body2"
                        sx={{ color: '#888', mt: 1.5, fontSize: '0.85rem' }}
                    >
                        {currentIndex + 1} / {experiences.length}
                    </Typography>

                    {/* Job Experience Detail Modal / Popup */}
                    <Dialog
                        open={isModalOpen}
                        onClose={() => setSelectedExp(null)}
                        maxWidth="md"
                        fullWidth
                        TransitionComponent={Fade}
                        PaperProps={{
                            sx: {
                                borderRadius: '24px',
                                p: { xs: 2.5, sm: 4 },
                                position: 'relative',
                                maxHeight: '90vh',
                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
                                border: '1px solid #e9ecef',
                            }
                        }}
                    >
                        {selectedExp && (
                            <DialogContent sx={{ p: 0 }}>
                                {/* Close Button */}
                                <IconButton
                                    onClick={() => setSelectedExp(null)}
                                    aria-label="Close"
                                    sx={{
                                        position: 'absolute',
                                        top: { xs: 12, sm: 20 },
                                        right: { xs: 12, sm: 20 },
                                        backgroundColor: '#f5f5f5',
                                        color: 'black',
                                        zIndex: 2,
                                        '&:hover': {
                                            backgroundColor: 'black',
                                            color: 'white',
                                        }
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>

                                {/* Header: Logo & Company info */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        alignItems: { xs: 'flex-start', sm: 'center' },
                                        gap: 3,
                                        mb: 3,
                                        pr: { xs: 5, sm: 6 }
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={selectedExp.logo}
                                        alt={selectedExp.company}
                                        sx={{
                                            width: { xs: '80px', sm: '100px' },
                                            height: { xs: '80px', sm: '100px' },
                                            objectFit: 'contain',
                                            backgroundColor: '#f8f9fa',
                                            p: 1.5,
                                            borderRadius: '16px',
                                            border: '1px solid #eee'
                                        }}
                                    />
                                    <Box>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 600,
                                                color: '#111',
                                                mb: 0.5,
                                                fontSize: { xs: '1.35rem', sm: '1.65rem' }
                                            }}
                                        >
                                            {selectedExp.company}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: '#555',
                                                fontWeight: 500,
                                                fontSize: { xs: '1rem', sm: '1.1rem' },
                                                mb: 1
                                            }}
                                        >
                                            {selectedExp.role}
                                        </Typography>
                                        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                            <Chip
                                                icon={<CalendarMonthIcon sx={{ fontSize: 16 }} />}
                                                label={selectedExp.period}
                                                size="small"
                                                sx={{ backgroundColor: '#f0f0f0', fontWeight: 500 }}
                                            />
                                            <Chip
                                                icon={<LocationOnOutlinedIcon sx={{ fontSize: 16 }} />}
                                                label={selectedExp.location}
                                                size="small"
                                                sx={{ backgroundColor: '#f0f0f0', fontWeight: 500 }}
                                            />
                                        </Stack>
                                    </Box>
                                </Box>

                                <Box sx={{ width: '100%', height: '1px', backgroundColor: '#eee', my: 2.5 }} />

                                {/* Description */}
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#333',
                                        fontSize: '1rem',
                                        lineHeight: 1.85,
                                        mb: 3
                                    }}
                                >
                                    {selectedExp.description}
                                </Typography>

                                {/* Responsibilities Details */}
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        fontWeight: 600,
                                        color: '#111',
                                        fontSize: '1rem',
                                        mb: 1.5
                                    }}
                                >
                                    หน้าที่และความรับผิดชอบ:
                                </Typography>
                                <Box component="ul" sx={{ pl: 2.5, m: 0, mb: 3.5 }}>
                                    {selectedExp.details.map((detail, dIdx) => (
                                        <Box
                                            component="li"
                                            key={dIdx}
                                            sx={{
                                                color: '#444',
                                                fontSize: '0.95rem',
                                                lineHeight: 1.8,
                                                mb: 1
                                            }}
                                        >
                                            {detail}
                                        </Box>
                                    ))}
                                </Box>

                                {/* Technologies & Skills */}
                                <Box sx={{ pt: 2, borderTop: '1px solid #f0f0f0' }}>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'block',
                                            color: '#888',
                                            fontWeight: 600,
                                            letterSpacing: 1,
                                            textTransform: 'uppercase',
                                            mb: 1.5
                                        }}
                                    >
                                        Technologies & Skills
                                    </Typography>
                                    <Stack direction="row" flexWrap="wrap" gap={1}>
                                        {selectedExp.tags.map((tag, tIdx) => (
                                            <Chip
                                                key={tIdx}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    border: '1px solid #ddd',
                                                    backgroundColor: 'white',
                                                    color: '#333',
                                                    fontWeight: 500,
                                                    fontSize: '0.85rem'
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </Box>
                            </DialogContent>
                        )}
                    </Dialog>
                </Box>
            </Box>
        </>
    );
}

export default JobExp;
