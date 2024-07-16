import React from 'react';
import {useState} from 'react';
import MovieSelector from './MovieSelector.js';
export default function RateMovieButton(){
    const [rating, setRating]=useState(1);
    const [feedback, setFeedback] = useState('');
    const handleRatingChange = (e)=>{
        setRating(e.target.value);
    };
    const handleFeedbackChange = (e)=>{
        setFeedback(e.target.value);
    };
    const handleFeedbackSubmission = ()=>{
        alert('Submitted successfully! Thank you for your time!');
    };
    const [selected, setSelected]=useState('Terminator');
    

    return(
        <div>
            <MovieSelector/>
            <h3>Please submit your rating:</h3>
            <form>
                <select value={rating} onChange={handleRatingChange}>
                    <option value='1'>⭐</option>
                    <option value='2'>⭐⭐</option>
                    <option value='3'>⭐⭐⭐</option>
                    <option value='4'>⭐⭐⭐⭐</option>
                    <option value='5'>⭐⭐⭐⭐⭐</option>
                </select><br/>
                <p>Please share your experience. Feedback box:</p>
                <input type='textarea' class='feedbackComments' onChange={handleFeedbackChange}></input><br/>
                <button onClick={handleFeedbackSubmission}>Submit Feedback</button>
            </form>
        </div>
    )
}