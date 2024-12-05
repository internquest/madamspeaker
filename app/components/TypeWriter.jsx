'use client'
import { useState, useEffect } from 'react';

export default function TypeWriter({ text, speed = 50 }) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [parsedChars, setParsedChars] = useState([]);

    useEffect(() => {
        // Parse the text into an array of characters and HTML tags
        const parseText = () => {
            const chars = [];
            let inTag = false;
            let currentTag = '';
            
            for (let i = 0; i < text.length; i++) {
                if (text[i] === '<') {
                    inTag = true;
                    currentTag = '<';
                } else if (text[i] === '>' && inTag) {
                    inTag = false;
                    currentTag += '>';
                    chars.push(currentTag);
                    currentTag = '';
                } else if (inTag) {
                    currentTag += text[i];
                } else {
                    chars.push(text[i]);
                }
            }
            setParsedChars(chars);
        };

        parseText();
    }, [text]);

    useEffect(() => {
        if (currentIndex < parsedChars.length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => {
                    const nextChar = parsedChars[currentIndex];
                    // If it's an HTML tag, add it without animation
                    // if (nextChar.startsWith('<')) {
                    //     return prev + nextChar;
                    // }
                    return prev + nextChar;
                });
                setCurrentIndex(prev => prev + 1);
                
            }, speed);

            return () => clearTimeout(timer);
        }
    }, [currentIndex, parsedChars, speed]);

    return (
        <span dangerouslySetInnerHTML={{ __html: displayText + '<span class="animate-cursor-blink" aria-hidden="true">|</span>' }} />
    );
}
