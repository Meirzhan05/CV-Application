import { useState } from 'react'
import './App.css'


function App() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    if (isDisabled) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <General isDisabled={isDisabled}/>
      <Education isDisabled={isDisabled} />
      <Experience isDisabled={isDisabled} />
      <button type="submit" onClick={handleClick}> {isDisabled ? 'Edit' : 'Submit'} </button>
    </form>
  )
}

function General({ isDisabled }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" required disabled={isDisabled}/>
      </div>
      <div className="form-group">
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" required disabled={isDisabled}/>
      </div>
    </>
  )
}

function Education({ isDisabled }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="school-name">School Name</label>
        <input type="text" id="school-name" required disabled={isDisabled}/>
      </div>
      <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <select selected id="options" disabled={isDisabled} required name="options">
            <option value="option1">Select</option>
            <option value="bachelors">Bachelor's</option>
            <option value="masters">Master's</option>
            <option value="phd">Ph.D.</option>
          </select>
      </div>
      <div className="form-group">
        <label htmlFor="">Graduation Date</label>
        <input type="date" required disabled={isDisabled}/>
      </div>
    </>
  )
}

function Experience({ isDisabled }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor="">Company Name</label>
        <input type="text" required disabled={isDisabled}/>
      </div>
      <div className="form-group">
        <label htmlFor="">Position Title</label>
        <input type="text" required disabled={isDisabled}/>
      </div>
      <div className="form-group">
        <label htmlFor="">Start Date</label>
        <input type="date" required disabled={isDisabled}/>
        <label htmlFor="">End Date</label>
        <input type="date" required disabled={isDisabled}/>
      </div>
    </>

  )
}

export default App
