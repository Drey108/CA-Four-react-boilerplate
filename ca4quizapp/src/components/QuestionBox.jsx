import React, { useState, useEffect } from 'react';
import questions from '../questions';
import './QuestionBox.css';
import Result from './Result';
import './WavyBackground.css';

export default function QuestionBox() {
    const [statequestion, setStatequestion] = useState(0);
    const [stateScore, setScore] = useState(0);
    const [screenColor, setscreenColor] = useState(false);

    const reset = () => {
        setScore(0);
        setStatequestion(0);
    };

    const moveNextQuestion = (isCorrect) => {
        if (isCorrect) {
            setScore(stateScore + 1);
        }
        setStatequestion(statequestion + 1);
    };

    useEffect(() => {
        const body = document.querySelector('body');

        if (screenColor) {
            body.style.backgroundColor = '#ECEFF4';
            body.style.color = '#2E3440';
        } else {
            body.style.backgroundColor = '#2E3440';
            body.style.color = '#ECEFF4';
        }
    }, [screenColor]);

    const changeMode = () => {
        setscreenColor((screenColor) => !screenColor);
    };

    return (
        <div id='main-container'>
            {statequestion < 5 ? (
                <div className={`question-modal ${screenColor ? 'dark-mode' : 'light-mode'}`}>
                    <div className='wavy-background'></div>
                    <div className='nav-bar'>
                        <span>ZaQuiz</span>
                        <button className='dark-mode-btn' onClick={changeMode}>
                            {screenColor ? 'Light' : 'Dark'}
                        </button>
                    </div>
                    <div className='question-box'>
                        <h4>Q:{statequestion + 1} out of 5</h4>
                        <h3 id='question'>{questions[statequestion].text}</h3>
                        <div id='option-div'>
                            {questions[statequestion].options.map((el, index) => (
                                <button key={index} onClick={() => moveNextQuestion(el.isCorrect)}>
                                    {el.text}
                                </button>
                            ))}
                        </div>
                        <div className='highlight-btn'>
                            <button
                                id='hightlight-btn'
                                onClick={() => {
                                    const element = document.getElementById('question');
                                    element.style.color = '#e64747';
                                }}
                            >
                                Highlight
                            </button>
                            <button
                                id='remove-highlight'
                                onClick={() => {
                                    const element = document.getElementById('question');
                                    if (screenColor) {
                                        element.style.color = '#2E3440';
                                    } else {
                                        element.style.color = '#ECEFF4';
                                    }
                                }}
                            >
                                Remove highlight
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Result stateScore={stateScore} reset={reset} changeMode={changeMode} screenColor={screenColor} />
            )}
        </div>
    );
}
