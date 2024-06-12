import React, { useState, useEffect, useRef } from 'react';
import '../Style.css';

const CircularProgress = ({ progressEndValue = 60, speed = 50, title = "Progress", color = "#4d5bf9" }) => {
  const [progressValue, setProgressValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const circularProgressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is in view
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (circularProgressRef.current) {
      observer.observe(circularProgressRef.current);
    }

    return () => {
      if (circularProgressRef.current) {
        observer.unobserve(circularProgressRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const progressInterval = setInterval(() => {
        setProgressValue((prevValue) => {
          if (prevValue >= progressEndValue) {
            clearInterval(progressInterval);
            return prevValue;
          }
          return prevValue + 1;
        });
      }, speed);

      return () => {
        clearInterval(progressInterval);
      };
    }
  }, [isVisible, progressEndValue, speed]);

  return (
    <div className='col' ref={circularProgressRef}>
      <div className="circular-progress" style={{ background: `conic-gradient(${color} ${progressValue * 3.6}deg, #cadcff ${progressValue * 3.6}deg)` }}>
        <div className="value-container">{`${progressValue}%`}</div>
      </div>
      <div className='title'>
        <h2 className='skills-title'>{title}</h2>
      </div>
    </div>
  );
};

export default CircularProgress;
