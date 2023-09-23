"use client"

import {useEffect, useRef, useState} from 'react';
import parse from "html-react-parser";

const FaqItem = ({content}) => {
    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        contentRef.current.style.maxHeight = active ? `${contentRef.current.scrollHeight}px` : '0px';
    }, [active]);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <button
            className={active ? 'question-section active' : 'question-section'}
            onClick={toggleAccordion}
        >
            <div style={{width: '100%'}}>
                <div className="question-align">
                    <p className="question-style">{content.question}</p>
                    <svg
                        className={active ? 'question-icon rotate' : 'question-icon'}
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
                <div ref={contentRef} className={active ? 'answer answer-divider' : 'answer'}>
                    {parse(content.answer)}
                </div>
            </div>
        </button>
    );
};

export default FaqItem;
