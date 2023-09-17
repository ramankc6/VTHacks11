"use client"
import React from 'react';
import  LoadingText from "../../components/LoadingText"

export default function LoadingPage() {
    return(
        <main className="flex min-h-screen items-center flex-col">
            <div style = {{
                position: "absolute",
                width: "100%",
                height: "100%",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                left: "45%"
            }}>
                <LoadingText />
                

            </div>
        </main>
    )
}