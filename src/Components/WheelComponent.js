import React, {useState, useRef, useEffect } from 'react';
import styles from '../Styles/KeyPad.module.css';
import styled from 'styled-components';

const Button = styled.div`
  position: relative;
  top: ${(props)=>(props.top)};
  left: ${(props)=>(props.left)};
  // letter-spacing: ${(props)=>(props.space)};
  color:  rgb(197, 203, 211);
`;

const WheelComponent = (props) => {
    const wheelRef = useRef(null);
    const [isRotating, setIsRotating] = useState(false);
    const [initialAngle, setInitialAngle] = useState(0);
  
    const handleRotationStart = (event) => {
      setIsRotating(true);
      setInitialAngle(event.clientX);
    };
  
    const handleRotationMove = (event) => {
      if (isRotating) {
        const currentAngle = event.clientX;
        const rotationDelta = currentAngle - initialAngle;
  
        // Use rotationDelta to update the rotation state or perform other actions
        let start = rotationDelta;
        // console.log(start);
        if (rotationDelta > 0) {
            if(props.active<3){
              props.setActive(props.active+1);
            }
            // console.log('Next'); // Log "Next" for increasing rotation
          } else if (rotationDelta < 0) {
            if(props.active>0){
              props.setActive(props.active-1);
            }
            // console.log('Previous'); // Log "Previous" for decreasing rotation
          }
          setInitialAngle(currentAngle);
      }
    };
  
    const handleRotationEnd = () => {
      setIsRotating(false);
    };
  
    useEffect(() => {
      const wheelElement = wheelRef.current;
  
      wheelElement.addEventListener('mousedown', handleRotationStart);
      window.addEventListener('mousemove', handleRotationMove);
      window.addEventListener('mouseup', handleRotationEnd);
  
      return () => {
        wheelElement.removeEventListener('mousedown', handleRotationStart);
        window.removeEventListener('mousemove', handleRotationMove);
        window.removeEventListener('mouseup', handleRotationEnd);
      };
    }, [isRotating]);

  return (
    <div ref={wheelRef} class={styles.wheel}>
      {/* Your wheel content */}
      <div class={styles.centerKey}>
            
        </div>
        <Button className='prevent-select' top="25px" left="80px" space="0px">MENU</Button>
        <Button className='prevent-select' top="65px" left="155px" space="-7px">►►❙</Button>
        <Button className='prevent-select' top="45px" left="5px" space="-7px">❙◄◄</Button>
        <Button className='prevent-select' top="90px" left="80px" space="-3px">►❙❙</Button>
    </div>
  );
};

export default WheelComponent;
