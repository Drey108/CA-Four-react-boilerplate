import React from 'react';

export default function Result(props) {
    const result = props.stateScore;
    const totalQuestion = 5;

    return (
        <div id='result-container'>
            <div className='question-modal'>
                <div className='nav-bar'>
                    <span id='zaQuiz'>ZaQuiz</span>
                    <button className='dark-mode-btn' onClick={props.changeMode}>
                        {props.screenColor ? 'Light' : 'Dark'}
                    </button>
                </div>
            </div>
            <div id='resultCard'>
                <h3>Final result</h3>
                <div className='result-report'>
                    <div className='report'>{result} out of {totalQuestion} correct - {(result / totalQuestion) * 100}% </div>
                </div>
                <button id='Restart-btn' onClick={props.reset}>
                    Again?
                </button>
            </div>
        </div>
    );
}
