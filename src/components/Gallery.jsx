import React, { useState } from "react";
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import imag1 from "../assets/Gallery/i1.jpeg";
import imag2 from "../assets/Gallery/i3.jpg"; //
import imag3 from "../assets/Gallery/i4.jpg";
import imag4 from "../assets/Gallery/i5.jpeg"; //
import imag5 from "../assets/Gallery/i9.jpeg";
import imag6 from "../assets/Gallery/me1.jpeg"; //
import imag7 from "../assets/Gallery/me2.jpeg"; //
import imag8 from "../assets/Gallery/me3.jpeg"; //
import imag9 from "../assets/Gallery/me4.jpeg";
import imag10 from "../assets/Gallery/me5.jpeg"; //
import imag11 from "../assets/Gallery/i23.png";
import imag12 from "../assets/Gallery/me6.jpeg";
import imag13 from "../assets/Gallery/me7.jpeg";

import "../components/Styles/gallery.css";
import Navbar from "./Navbar";

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: imag1,
            caption: "Kokrajhar Orphan Centre Visit to distribute needy material to the children",
        },
        {
            id: 2,
            imgSrc: imag2,
            caption: "A pic with RNM Sir Theory of computation class ",
        },
        {
            id: 3,
            imgSrc: imag3,
            caption: "All Tech Clubs together in the Bodoland International Knowledge Fest ",
        },
        {
            id: 4,
            imgSrc: imag4,
            caption: "IoT course group pic with Pranav Singh",
           
        },
        {
            id: 5,
            imgSrc: imag5,
            caption: "My Major Project Group of the college after the presentation",
        },
        {
            id: 6,
            imgSrc: imag6,
            caption: "Celebrated Vishwakarma Puja at the workplace, enhancing team spirit through cultural participation.",
        },
        
        {
            id: 7,
            imgSrc: imag7,
            caption: "Provided IoT and Machine Learning instruction to students during the NIELIT Bootcamp program.",
        },
        {
            id: 8,
            imgSrc: imag8,
            caption: "Delivered hands-on IoT and Machine Learning sessions at Dimoria College as part of the NIELIT Bootcamp.",
        },
        {
            id: 9,
            imgSrc: imag9,
            caption: "Captured our final group moment with CSE classmates during the graduation ceremony at CITK — celebrating achievement and togetherness.",
        },
        {
            id: 10,
            imgSrc: imag10,
            caption: "Honored and expressed gratitude to our project mentor for exceptional guidance and support.",
        },
        {
            id: 11,
            imgSrc: imag12,
            caption: "Participated in face painting competition during cultural fest (Ecstacy'22)",
        },
        {
            id: 12,
            imgSrc: imag13,
            caption: "Convocation recognition — officially graduated with my B.Tech degree from CITK.",
        },
        {
            id: 13,
            imgSrc: imag11,
            caption: "Shopping of Puja vacation",
        },
        

    ]

    const [model, setModel] = useState(false);
    const [tempImgIndex, setTempImgIndex] = useState(0);

    const openModal = (index) => {
        setTempImgIndex(index);
        setModel(true);
    };

    const closeModal = () => {
        setModel(false);
    };

    const nextImg = () => {
        const nextIndex = (tempImgIndex + 1) % data.length;
        setTempImgIndex(nextIndex);
    };

    const prevImg = () => {
        const prevIndex = (tempImgIndex - 1 + data.length) % data.length;
        setTempImgIndex(prevIndex);
    };

    return (
        <>
            {/* Assume Navbar component is correctly implemented */}
            <Navbar />
            <div className={model ? 'model open' : 'model'}>
                <img src={data[tempImgIndex]?.imgSrc} alt="enlarged" />
                {/* CloseIcon component to close the modal */}
                <CancelPresentationIcon onClick={closeModal} />
                <p>{data[tempImgIndex]?.caption}</p>
                {/* Navigation for previous and next images */}
                <div className="nav-buttons">
                        <button className="prev-btn" onClick={prevImg}>Prev</button>
                        <button className="next-btn" onClick={nextImg}>Next</button>
                </div>
            </div>
            <div style={{ marginTop: "10px" }} className="gallery">
                {data.map((item, index) => (
                    <div className="pics" key={index} onClick={() => openModal(index)}>
                        <img src={item.imgSrc} style={{ width: '100%' }} alt={`img-${item.id}`} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;