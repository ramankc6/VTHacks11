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
    const [title, setTitle] = React.useState<string>("");

    useEffect(() => {
        (async () => {
            // Orchestrate requests based on the state of local storage
            console.log("Starting request with");
            const imageURI = localStorage.getItem("imageURI") as string;
            const topic = localStorage.getItem("topic") as string;
            const maskURI = localStorage.getItem("maskURI") as string;
            
            console.log(topic, imageURI, maskURI);
            
            setTitle(topic);
            setStory([
                {
                    dalleImage: imageURI,
                    narration: "Lorem ipsum dolor sit amet blah blah blah blah blah blah"
                },
                {
                    dalleImage: imageURI,
                    narration: "Lorem ipsum dolor sit amet blah blah blah blah blah blah"
                },
                {
                    dalleImage: imageURI,
                    narration: "Lorem ipsum dolor sit amet blah blah blah blah blah blah"
                },
            ]);
            setState("success");

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

            // const img = await axios.post("/api/frame", {
            //     imageURI,
            //     maskURI: "data:image/png;base64,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gACBcgIGs3KROTABAgQIECBAgAABAt0EDGbdEnUfAgQIECBAgAABAgTKCRjMykXmwAQIECBAgAABAgQIdBMwmHVL1H0IECBAgAABAgQIECgnYDArF5kDEyBAgAABAgQIECDQTcBg1i1R9yFAgAABAgQIECBAoJyAwaxcZA5MgAABAgQIECBAgEA3AYNZt0TdhwABAgQIECBAgACBcgIGs3KROTABAgQIECBAgAABAt0EDGbdEnUfAgQIECBAgAABAgTKCRjMykXmwAQIECBAgAABAgQIdBMwmHVL1H0IECBAgAABAgQIECgnYDArF5kDEyBAgAABAgQIECDQTcBg1i1R9yFAgAABAgQIECBAoJyAwaxcZA5MgAABAgQIECBAgEA3AYNZt0TdhwABAgQIECBAgACBcgIGs3KROTABAgQIECBAgAABAt0EDGbdEnUfAgQIECBAgAABAgTKCRjMykXmwAQIECBAgAABAgQIdBMwmHVL1H0IECBAgAABAgQIECgnYDArF5kDEyBAgAABAgQIECDQTcBg1i1R9yFAgAABAgQIECBAoJyAwaxcZA5MgAABAgQIECBAgEA3AYNZt0TdhwABAgQIECBAgACBcgIGs3KROTABAgQIECBAgAABAt0EDGbdEnUfAgQIECBAgAABAgTKCRjMykXmwAQIECBAgAABAgQIdBMwmHVL1H0IECBAgAABAgQIECgnYDArF5kDEyBAgAABAgQIECDQTcBg1i1R9yFAgAABAgQIECBAoJzA/wODqI/CZyTKoQAAAABJRU5ErkJgggAA",
            //     description: "the cat is a king in a kingdom"
            // });

            console.log(img);

            setState('success');

            // Step 3: Get DALL-E frames for each story board
            
        })();
    }, [])

    return (
        <>
        {
            state === 'success' &&
            <main className="flex min-h-screen min-w-screen items-center flex-col">
                <h1 className="font-bold">
                    Let's learn about <span className="italic shadow-sm">{title}</span>
                </h1>
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
                                    <Item img={value.dalleImage} className="h-10"/>
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
                    justifyContent: "center",
                    fontFamily: "Storytime",
                    flexDirection: "column"
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