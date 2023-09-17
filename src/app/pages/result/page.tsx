"use client"
import React, { useEffect } from 'react';
import { Item } from '../../components/CarouselComponents';
import Carousel from '../../components/Carousel';
import { TypeAnimation } from 'react-type-animation';
import LoadingText from '@/app/components/LoadingText';
import axios from 'axios';
import { TypingAnimation } from '@/app/components/TypingAnimation';

type ResultState = 'loading' | 'success';

type StoryBoard = {
    narration: string;
    dalleImage: string; // URL to image
}

function ResultsPage() {
    const [story, setStory] = React.useState<StoryBoard[]>([]);
    const [state, setState] = React.useState<ResultState>('loading');
    const [title, setTitle] = React.useState<string>("");

    const [menuItem, setMenuItem] = React.useState<number>(0);

    useEffect(() => {
        (async () => {
            // Orchestrate requests based on the state of local storage
            console.log("Starting request with");
            const imageURI = localStorage.getItem("imageURI") as string;
            const topic = localStorage.getItem("topic") as string;
            
            console.log(topic, imageURI);

            setStory([
                {
                    dalleImage: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-TmJDI1qNxxPsvv0sGniSnxDc/user-2ZAislfGUDELTJww9nWltWKK/img-WEjWjd9xee1esgDZmlb1GuOx.png?st=2023-09-17T04%3A33%3A41Z&se=2023-09-17T06%3A33%3A41Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-16T23%3A05%3A29Z&ske=2023-09-17T23%3A05%3A29Z&sks=b&skv=2021-08-06&sig=Upb%2B/NR1XupuDQZGJ%2BbG78yc2RpRmbCWKyNcDCg/EFc%3D",
                    narration:"Once upon a time, during the Great Depression, there lived a determined woman named Clara. With her suits and ties, she defied the expectations of society and stepped into the bustling city. The streets were filled with hardship, yet Clara carried a glimmer of resilience in her eyes. She had a story to tell, a story of survival amidst the darkest days of economic turmoil."
                },
                {
                    dalleImage:"https://oaidalleapiprodscus.blob.core.windows.net/private/org-TmJDI1qNxxPsvv0sGniSnxDc/user-2ZAislfGUDELTJww9nWltWKK/img-U0EbRCJ9D6lYcRnKwx79rPQ1.png?st=2023-09-17T04%3A33%3A48Z&se=2023-09-17T06%3A33%3A48Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-16T23%3A11%3A26Z&ske=2023-09-17T23%3A11%3A26Z&sks=b&skv=2021-08-06&sig=xFE2q/rvqm7dradkKAur8A%2Bavyh9FpnISBaVAuhGB2g%3D",
                    narration:"Clara secured a job in a small, cramped office. There, she sat at a worn-out desk, surrounded by towering stacks of papers and financial documents. Day after day, she meticulously navigated through the numbers, striving to make sense of the chaos. She was determined to find a ray of hope amidst the sea of economic despair, for herself and for those around her."
                },
                {
                    dalleImage:"https://oaidalleapiprodscus.blob.core.windows.net/private/org-TmJDI1qNxxPsvv0sGniSnxDc/user-2ZAislfGUDELTJww9nWltWKK/img-l0g5VucfSVM4uPrvtSBMwzqY.png?st=2023-09-17T04%3A33%3A55Z&se=2023-09-17T06%3A33%3A55Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-16T23%3A24%3A01Z&ske=2023-09-17T23%3A24%3A01Z&sks=b&skv=2021-08-06&sig=zQopXggeSv0mtuzVHCUul%2BRm5I%2BWqt%2BATzhUZ04YT90%3D",
                    narration:"Amidst the hardship, Clara never forgot the importance of compassion. At the front of a long breadline, she stood with a tray of warm food, handing it out to the hungry with a kind-hearted smile. She understood the pain that each person felt, for she experienced it too. Through her actions, she showed that the strength of a community lies not only in its ability to endure, but also in its capacity to support one another."
                },
                {
                    dalleImage:"https://oaidalleapiprodscus.blob.core.windows.net/private/org-TmJDI1qNxxPsvv0sGniSnxDc/user-2ZAislfGUDELTJww9nWltWKK/img-da02UPXsIEdBBOEeuJz0Jsjj.png?st=2023-09-17T04%3A34%3A01Z&se=2023-09-17T06%3A34%3A01Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-09-16T23%3A20%3A24Z&ske=2023-09-17T23%3A20%3A24Z&sks=b&skv=2021-08-06&sig=ZxY6bbyG9s/TYEgA%2BIyaxQudNH9Y4nS9fWQBCS9VSm8%3D",
                    narration:"Clara's resolve was unyielding. She stood before a gathered crowd, her voice strong and resolute. With each word she spoke, Clara ignited a spark of hope within their hearts. She spoke of resilience, of perseverance, and reminded them that even in the darkest of times, they were capable of greatness. Her message rallied the spirits of the people, reminding them that together, they could overcome the tribulations that the Great Depression brought upon them."
                }
            ]);
            setState("success");
            
            // setTitle(topic);

            // // Step 1: Get astica caption
            // console.log("Getting caption for the image");
            // const caption = await axios.post("/api/caption", {
            //     imageURI
            // });
            // console.log(caption.data);

            // // // Step 2: Get GPT story script
            // console.log("Reaching out to GPT to write a story")
            // const narrations = await axios.post("/api/story", {
            //     caption: caption.data.caption,
            //     topic
            // });
            // const {title, parts} = narrations.data.story;
            // console.log(title, parts);

            // const newStory = [];
            // for (let i = 0; i < parts.length; i++) {
            //     const part = parts[i];
            //     // get image from dalle
            //     const image = (await axios.post('/api/frame', {
            //         description: part.prompt_for_dalle
            //     })).data.url[0].url as string;
            //     newStory.push({
            //         dalleImage: image,
            //         narration: part.script
            //     });
            // }

            // setStory(newStory);
            
            // console.log(newStory);

            setState('success');            
        })();
    }, [])

    return (
        <>
        {
            state === 'success' &&
            <main className="flex min-h-screen min-w-screen items-center flex-col">
                <h1 className="font-bold">
                    Let's learn about <span className="italic" style={{
                        textShadow: "#FC0 1px 0 10px"
                    }}>{title}</span>
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

                    <div className="flex flex-row">
                        <button disabled={menuItem === 0} className="mr-10 transition opacity-50 disabled:opacity-25 hover:opacity-100" 
                            style={{
                                pointerEvents: "all"
                            }}
                            onClick={() => {
                            setMenuItem(menuItem - 1);
                            console.log("hello");
                        }}>
                            <img src="/leftArrow.png" style={{
                                width: 50,
                                cursor: "pointer"
                            }}/>
                        </button>
                        <img src={story[menuItem].dalleImage} style={{
                            width: 400
                        }} />
                        <button disabled={menuItem === 3} className="ml-10 transition opacity-50 disabled:opacity-25 hover:opacity-100" 
                        style={{
                            pointerEvents: "all"
                        }}
                        onClick={() => {
                            setMenuItem(menuItem + 1);
                            console.log("hello");
                        }}>
                            <img src="/rightArrow.png" style={{
                                width: 50,
                                cursor: "pointer"
                            }}/>
                        </button>
                    </div>
                    
                <div style = {{textAlign: "justify", lineHeight: 1.2, width: "700px", fontFamily: "Storytime"}}>
                    <TypingAnimation text={story[menuItem].narration} />
                </div>
                </div>
            </main>
        }
        {
            state === 'loading' &&
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

export default ResultsPage;