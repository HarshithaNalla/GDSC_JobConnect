import React from 'react';
import "./Loading.css";
const Loading = () => {
  const barColors = ['#4285F4', '#DB4437', '#F4C430', '#4CAF50'];

  const barStyle = {
    flex: 1,
    height: '100%',
    margin: '2px',
    borderRadius: '5px',
    animation: 'wave 1.5s ease-in-out infinite',
  };

  const waveAnimation = {
    from: {
      transform: 'translateY(0) scaleY(1)',
    },
    to: {
      transform: 'translateY(20px) scaleY(0.75)',
    },
  };

  return (
    <div className="bars-container">
      {barColors.map((color, index) => (
        <div
          key={index}
          style={{ ...barStyle, backgroundColor: color, animationDelay: `${index * 0.5}s` }}
        />
      ))}
    </div>
  );
};

export default Loading;
