"use client";
import React from 'react';
import { ChangeEvent, useRef } from "react";

function UploadButton(props: { onUpload: (uri: string) => void }) {
  const fileUploadRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <input 
                type="file" 
                accept=".png,.jpg" 
                ref={fileUploadRef} 
                style={{display: "none"}}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const reader = new FileReader();
                    reader.onload = (ev: ProgressEvent<FileReader>) => {
                        const img = ev.target?.result;
                        if (img) {
                            props.onUpload(img as string);
                        }
                        else {
                            console.error("Error uploading image");
                        }
                    }
                    const files = fileUploadRef.current?.files;
                    if (files && files.length > 0) {
                        reader.readAsDataURL(files[0]);
                    }
                }}
            />
            <button 
                className="flex flex-row bg-slate-200 hover:bg-slate-400 transition active:bg-slate-300 p-1 text-slate-800 font-bold rounded text-sm h-10" style={{
                    alignItems: "center"
                }}onClick={() => {
                    fileUploadRef.current?.click()
                }
            }> 
                <img src="/upload.png" className="w-4 mr-2"/> <span>Upload Image</span> 
            </button>
        </>
    )
    }

export { UploadButton };
