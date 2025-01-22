'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';

const TextTyper = ({
                       words,
                       speedAdd = 50,
                       speedRemove = 50,
                       delayAfter = 2000,
                       delayBefore = 1000
                   }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isAdding, setIsAdding] = useState(true);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    // Refs to store latest state values for use inside the recursive function
    const displayedTextRef = useRef(displayedText);
    const isAddingRef = useRef(isAdding);
    const currentWordIndexRef = useRef(currentWordIndex);

    // Update refs whenever state changes
    useEffect(() => {
        displayedTextRef.current = displayedText;
    }, [displayedText]);

    useEffect(() => {
        isAddingRef.current = isAdding;
    }, [isAdding]);

    useEffect(() => {
        currentWordIndexRef.current = currentWordIndex;
    }, [currentWordIndex]);

    useEffect(() => {
        let timeout;

        const typeWord = () => {
            const idx = currentWordIndexRef.current;
            const currentWord = words[idx];

            if (isAddingRef.current) {
                // Typing letters one by one
                if (displayedTextRef.current.length < currentWord.length) {
                    const nextText = currentWord.slice(0, displayedTextRef.current.length + 1);
                    setDisplayedText(nextText);
                    timeout = setTimeout(typeWord, speedAdd);
                } else {
                    // Word fully typed, wait before removing letters
                    timeout = setTimeout(() => {
                        setIsAdding(false);
                        // Update ref immediately for consistency
                        isAddingRef.current = false;
                        typeWord();
                    }, delayAfter);
                }
            } else {
                // Removing letters one by one
                if (displayedTextRef.current.length > 0) {
                    const nextText = currentWord.slice(0, displayedTextRef.current.length - 1);
                    setDisplayedText(nextText);
                    timeout = setTimeout(typeWord, speedRemove);
                } else {
                    // Word fully removed, move to the next word and start typing again
                    timeout = setTimeout(() => {
                        setIsAdding(true);
                        setCurrentWordIndex((prevIndex) => {
                            const newIndex = (prevIndex + 1) % words.length;
                            return newIndex;
                        });
                        isAddingRef.current = true;
                        typeWord();
                    }, delayBefore);
                }
            }
        };

        typeWord();

        return () => clearTimeout(timeout);
    }, [words, speedAdd, speedRemove, delayAfter, delayBefore]);

    return <span className={styles.container}>{displayedText}</span>;
};

export default TextTyper;
