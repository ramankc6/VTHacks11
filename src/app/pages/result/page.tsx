"use client"
import React from 'react';
import { Item } from '../../components/CarouselComponents';
import Carousel from '../../components/Carousel';
import { TypeAnimation } from 'react-type-animation';

function SimpleCarousel() {
    const texts = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 500, "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",500, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]
  return (
    <main className="flex min-h-screen min-w-screen items-center flex-col">
        <div style = {{
                position: "absolute",
                width: "90%",
                minHeight: "100%",
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top: "2%",
            }}>

        <Carousel>
            <Item img="/icecube.jpg" />
            <Item img="/icecube.jpg" />
            <Item img="/icecube.jpg" />
            <Item img="/icecube.jpg" />
        </Carousel>
        <div style = {{textAlign: "center", width: "80%"}}>
        <TypeAnimation sequence = {texts} omitDeletionAnimation = {true} style={{fontFamily: 'Storytime', fontWeight: 'lighter'}}/>
        </div>
        </div>
    </main>
  );
}

export default SimpleCarousel;