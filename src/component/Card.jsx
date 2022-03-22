import React, { useState } from 'react';

import { images } from '../constants/index';
import './Card.css'

const Card = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rate, setRate] = useState(0);
  const [rateBtnStyle, setRateBtnStyle] = useState('rating-btn');

  const handleSubmit = () => {
    if (rate === 0) {
      alert(`Please select Rating point before submitting review`);
    } else {
      setIsSubmitted(true);
      console.log(rate)
    }
  }

  const rateBtn = document.querySelectorAll('.rating-points button')

  const handleBtnStyle = (rating) => {
    rateBtn.forEach(function (val) {
      val.classList.remove('active-btn');
      val.classList.add('rating-btn');
      
      if (rating == val.innerHTML) {
        val.classList.add('active-btn')
        val.classList.remove('rating-btn')
      }
    })
  }

  return (
      <div className='card'>
      {
        !isSubmitted
          ? <><div className="star">
              <img
                src={images.star}
                alt="star"
              />
            </div>

            <div className="card-info">
              <h1>How did we do?</h1>
              <p>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
              </p>
            </div>

            <div className="rating-points">
              {[1, 2, 3, 4, 5].map((rating, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setRate(rating);
                    handleBtnStyle(rating);
                    
                  }}
                  className={rateBtnStyle}
                >
                  {rating}
                </button>
              ))}
            </div>

            <div className="btn">
              <button
                onClick={handleSubmit}
              >
                <p>S U B M I T</p>
              </button>
            </div></>
          : <><div className="thankyou-img">
              <img
                src={images.thankYou}
                alt="Thank You"
              />
            </div>
            
            <div className="rating">
              <h4>You selected {rate} out of 5</h4>
            </div>
          
            <h2 className='thankyou'>Thank you!</h2>

            <p className='thankyou-desc'>
              We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>
          </>
      }
      </div>
  )
}

export default Card