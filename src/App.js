import { useState } from 'react'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
]

export default function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePreviuos() {
    if (step > 1) setStep((s) => s - 1) // Update state using the current value od state using a callback function.
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1)
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) =>!is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
               bgColor= '#7950f2'
               textColor= '#fff'   
              onClick={handlePreviuos}
              text='Previous'
              emoji='👈'
               >          
            </Button>
            <Button
              bgColor= '#7950f2'
              textColor= '#fff'  
              onClick={handleNext}
              text='Next'
              emoji='👉'
               >          
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

function Button({textColor, bgColor, onClick, text, emoji}){
  return(
  <button 
  style={{ backgroundColor: bgColor, color: textColor }}
  onClick={onClick}><span>{emoji}</span>{text}</button>
  ) 
}