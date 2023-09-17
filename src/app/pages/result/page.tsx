"use client"
import React, { useEffect } from 'react';
import { Item } from '../../components/CarouselComponents';
import Carousel from '../../components/Carousel';
import { TypeAnimation } from 'react-type-animation';
import LoadingText from '@/app/components/LoadingText';
import axios from 'axios';

type ResultState = 'loading' | 'success';

type StoryBoard = {
    narration: string;
    dalleImage: string; // URL to image
}

function SimpleCarousel() {
    const texts = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 500, "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",500, "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]
    const [story, setStory] = React.useState<StoryBoard[]>([]);
    const [state, setState] = React.useState<ResultState>('loading');

    useEffect(() => {
        (async () => {
            // Orchestrate requests based on the state of local storage
            console.log("Starting request with");
            const imageURI = localStorage.getItem("imageURI");
            const topic = localStorage.getItem("topic");
            console.log(localStorage.getItem("imageURI"));
            console.log(localStorage.getItem("maskURI"));
            console.log(localStorage.getItem("topic"));

            // Step 1: Get astica caption
            // const caption = await axios.post("/api/caption", {
            //     imageURI
            // });
            // console.log(caption.data);

            // // Step 2: Get GPT story script
            // const narrations = await axios.post("/api/story", {
            //     caption: caption.data.caption,
            //     topic
            // });
            // console.log(narrations.data);

            // setState('success');

            // Step 3: Get DALL-E frames for each story board
            
        })();
    }, [])

    return (
        <>
        {
            state === 'success' &&
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
                    {/* <Item img="/icecube.jpg" />
                    <Item img="/icecube.jpg" />
                    <Item img="/icecube.jpg" />
                    <Item img="/icecube.jpg" /> */}
                    {
                        story.map((value: StoryBoard, index: number) => {
                            return (
                                <>
                                    <Item img={value.dalleImage} />
                                    <div style = {{textAlign: "center", width: "80%"}}>
                                        <TypeAnimation sequence = {[value.narration]} omitDeletionAnimation = {true} style={{fontFamily: 'Storytime', fontWeight: 'lighter'}}/>
                                    </div>
                                </>
                            )
                        })
                    }
                </Carousel>
                </div>
            </main>
        }
        {
            <main className="flex min-h-screen items-center flex-col">
                <div style = {{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    left: "45%",
                    fontFamily: "Storytime"
                }}>
                    <LoadingText />
                    
                    <p className="text-base italic text-center">This may take a minute or two!</p>
                </div>
            </main>
        }
        </>
    );
}

export default SimpleCarousel;