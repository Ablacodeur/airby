import React from 'react'
import s from "./style.module.css"
import {Box, Button, Container, Stack} from '@mui/material'
import image from "../../assets/images/comment2-image.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination , A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CardCo from './CardCo'
import { useSelector } from 'react-redux';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useNavigate } from 'react-router-dom'


export default function Comments() {
    const navigate = useNavigate();
    const data = useSelector((store)=>store.COMMENTS.commentList);

  return (
    <Box     
    className={s.container}
    sx={{ 
        backgroundColor:'black.main',
        paddingTop:"8vh",
        paddingBottom:"8vh"
     }}
    >
    <Container
    sx={{ 
        fontFamily: 'Outfit, sans-serif',
        width:" 100%",
        display:"flex",
        direction:"row",
        color:'white.main',
        alignItems:'center',
        justifyContent: "space-between",
     }}
>
    <Stack
        sx={{ 
        display:"flex",
        flexDirection:{xs:"row"},
        alignItems:'center',
        justifyContent: "space-between",
     }}
    >
        <Box flex={0.6}>
            <img src={image}  alt='comment-img' style={{ width: "80%", objectFit:"cover"  }}  />
        </Box>
        <Box flex={1}
        sx={{ 
        display:"flex", 
        justifyContent:"center", 
        alignItems:"center",
        height:"100%"
        }}>
        <Stack
        >
        <Button 
            sx={{ 
            display:"flex",
            justifyContent:"flex-end",
            color:"white.main"
            }}  
            onClick={()=>navigate("/post")}
         >
            <EditNoteIcon></EditNoteIcon>
         </Button>
         
        <Swiper
            // install Swiper module
            spaceBetween={80}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, A11y]}
            className="mySwiper"

            pagination={{ clickable: 'false' }}
            style={{ 
                height:"100%", 
                width:"45vw",
                "--swiper-pagination-bullet-inactive-color": "black.main" ,
                "--swiper-pagination-bullet-active-color": "#ff5722",               
                "--swiper-pagination-bullet-inactive-opacity": "1",
                }}
            >
            
        {data.map((comment,index)=>(

        <SwiperSlide  style={{width:"100%",display:'flex', justifyContent:"center",alignItems:"center" }}>
            <CardCo  
                key={index}
                name= {comment.name}
                content={comment.comment}
            />
         </SwiperSlide>
         ))}

        </Swiper>
        </Stack>
        </Box>
    </Stack>
</Container>
</Box>

  )
}
