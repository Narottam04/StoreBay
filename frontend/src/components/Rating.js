import React from 'react'
import PropTypes from 'prop-types'


const Rating = ({value,text}) => {
    return (
        <div className='rating '>
            <span>
                <i className={value >= 1 ? `fas fa-star  text-yellow-300` : value >= 0.5 ? `fas fa-star-half-alt  text-yellow-300`: 'far fa-star text-yellow-300' }></i>
            </span>
            <span>
                <i className={value >= 2 ? 'fas fa-star  text-yellow-300' : value >= 1.5 ? 'fas fa-star-half-alt text-yellow-300': 'far fa-star text-yellow-300' }></i>
            </span>
            <span>
                <i className={value >= 3 ? 'fas fa-star text-yellow-300' : value >= 2.5 ? 'fas fa-star-half-alt text-yellow-300': 'far fa-star text-yellow-300' }></i>
            </span>
            <span>
                <i className={value >= 4 ? 'fas fa-star text-yellow-300' : value >= 3.5 ? 'fas fa-star-half-alt text-yellow-300': 'far fa-star text-yellow-300' }></i>
            </span>
            <span>
                <i className={value >= 5 ? 'fas fa-star text-yellow-300' : value >= 4.5 ? 'fas fa-star-half-alt text-yellow-300': 'far fa-star text-yellow-300' }></i>
            </span>
            <span className='pl-2'>{text && text}</span>
        </div>
    )
}

// Rating.PropTypes = {
//     value: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
// }

export default Rating
