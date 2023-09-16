"use client"

import { useState } from "react";

type ResultState = 'loading' | 'success' | 'error';

export default function ResultPage() {
    const [state, setState] = useState<ResultState>("loading");

    return (
    <main>
        {
            state === 'loading' &&
            <>
                {
                    (() => { setTimeout(() => {setState('success')}, 1000); return "" })()
                }
            </>
        }
        {
            state === 'success' &&
            <>
                <div className="grid grid-cols-2 mx-auto w-1/2">
                    <div>
                        <img src="/placehoder.png" className="w-72 object-center"/>
                        <p className="text-sm">
                            First blah blah blah in the balh something lorem ipsum blah blah text and stuff goes here for the story yeah.
                        </p>
                    </div>
                    <div>
                        <img src="/placehoder.png" className="w-72 object-center"/>
                        <p className="text-sm">
                            First blah blah blah in the balh something lorem ipsum blah blah text and stuff goes here for the story yeah.
                        </p>
                    </div>
                    <div>
                        <img src="/placehoder.png" className="w-72 object-center"/>
                        <p className="text-sm">
                            First blah blah blah in the balh something lorem ipsum blah blah text and stuff goes here for the story yeah.
                        </p>
                    </div>
                    <div>
                        <img src="/placehoder.png" className="w-72 object-center"/>
                        <p className="text-sm">
                            First blah blah blah in the balh something lorem ipsum blah blah text and stuff goes here for the story yeah.
                        </p>
                    </div>
                </div>
            </>
        }
        {
            state === 'error' &&
            <h1 className="text-red-500">
                An error occurred
            </h1>
        }
    </main>
  )
}
