import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

// const StarRating = ({ rating, setRating }) => {
//     const [hover, setHover] = useState(null);

//     return (
//         <div className="star-rating">
//             {[...Array(5)].map((star, index) => {
//                 const ratingValue = index + 1;

//                 return (
//                     <label key={index}>
//                         <input
//                             type="radio"
//                             name="rating"
//                             value={ratingValue}
//                             onClick={() => setRating(ratingValue)}
//                             style={{ display: "none" }}
//                         />
//                         <FontAwesomeIcon
//                             icon={faStar}
//                             className="star"
//                             color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
//                             size="lg"
//                             onMouseEnter={() => setHover(ratingValue)}
//                             onMouseLeave={() => setHover(null)}
//                         />
//                     </label>
//                 );
//             })}
//         </div>
//     );
// };
const StarRating = ({ rating, onRatingChange }) => {
    return (
        <div className="star-rating">
            <p id='rating'>Rate The Book:</p>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    
                    
                    <span
                        key={index}
                        onClick={() => onRatingChange(index)}
                        style={{ cursor: 'pointer' }}
                    >
                        {index <= rating ? '★' : '☆'}
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
