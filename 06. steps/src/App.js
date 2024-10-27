/*
  And so let's paste that out here outside of the component.So this data doesn't depend on anything that is inside the component. And so it should be located outside because otherwise each time that dysfunction here  is executed, this data, so this array will be created again  but we will learn all about that a bit later, of course.
  So when objects are created and when these functions are executed and so on. 
*/
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  return (
    <div>
      <Steps />
      {/* //child-props */}
      <StepMessage step={1}>
        <p>Pass in Content</p>
        <p>👶</p>
      </StepMessage>
      <StepMessage step={1}>
        <p>Reading child props</p>
        <p>😐</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function closeView() {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  }
  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((currentStep) => currentStep + 1);
      // setStep((currentStep) => currentStep + 1);//update value based on previous state like before this line
    }
  }
  return (
    // need this div to start JSX
    <div>
      <div className="close" onClick={closeView}>
        &times;
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3> Steps {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default App;
