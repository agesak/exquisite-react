import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

{/* <PlayerSubmissionForm
  index={1}
  sendSubmission={() => { }}
  fields={FIELDS}
/> */}

const PlayerSubmissionForm = ({fields, index, sendSubmission}) => {

  const [boxFields, setBoxFields] = useState({
    boxOne: '',
    boxTwo: '',
    boxThree: '',
    boxFour: '',
    boxFive: '',
    boxSix: ''
  })

  const onBoxUpdate = (event) => {
    const newBoxFields = {
      ...boxFields
    }

    newBoxFields[event.target.name] = event.target.value
    setBoxFields(newBoxFields)
  }

  // const [firstField, updateField] = useState('')

  // const onFieldUpdate = (event) => {
  //   updateField(event.target.value)
  //   console.log(firstField)
  // }

  // onPlayerType = (event) => {

  // }

  const onFormSubmit = (event) => {
    event.preventDefault();
    sendSubmission(boxFields);

    setBoxFields({
      boxOne: '',
      boxTwo: '',
      boxThree: '',
      boxFour: '',
      boxFive: '',
      boxSix: ''
    })

  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          
            The <input name="boxOne" placeholder={fields[1].placeholder} type="text" value={boxFields.boxOne} onChange={onBoxUpdate} />
            <input name="boxTwo" placeholder={fields[2].placeholder} type="text" value={boxFields.boxTwo} onChange={onBoxUpdate} />
            <input name="boxThree" placeholder={fields[3].placeholder}  type="text" value={boxFields.boxThree} onChange={onBoxUpdate} />
            <input name="boxFour" placeholder={fields[4].placeholder}  type="text" value={boxFields.boxFour} onChange={onBoxUpdate} />
            the <input name="boxFive" placeholder={fields[6].placeholder}  type="text" value={boxFields.boxFive} onChange={onBoxUpdate} />
            <input name="boxSix" placeholder={fields[7].placeholder}  type="text" value={boxFields.boxSix} onChange={onBoxUpdate} />
          


        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
