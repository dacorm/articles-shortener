import React from 'react';
import { Hero } from "@/modules/Hero";
import { Demo } from "@/modules/Demo";

import './App.css';

export const App = () => {
    return (
        <main>
            <div className='main'>
                <div className='gradient' />
            </div>

            <div className='app'>
                <Hero />
                <Demo />
            </div>
        </main>
    );
};