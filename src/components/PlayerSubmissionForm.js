import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = ({fields, index, sendSubmission}) => {

  const [boxFields, setBoxFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: ''
  })

  const onBoxUpdate = (event) => {
    const newBoxFields = {
      ...boxFields
    }

    newBoxFields[event.target.name] = event.target.value
    setBoxFields(newBoxFields)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const submittedFields = {...boxFields};
    const poem = fields.map(field => {
      if (field.key) {
        return submittedFields[field.key]
      } else {
        return field
      }
    }).join(' ');
    console.log(poem)
  
    sendSubmission(poem);

    setBoxFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: ''
    })
  }

  const generateForm = () => {

    return (fields.map((field, i) => {
      if (typeof field === 'string' || field instanceof String) {
        return <span key={i}>{field}</span>
      } else {
        return <input key={i} name={field.key} placeholder={field.placeholder} type="text" value={boxFields[field.key]} onChange={onBoxUpdate} className={boxFields[field.key]==='' ? 'PlayerSubmissionForm__input--invalid' : 'PlayerSubmissionForm__input--valid'} />
      }
    })
    )
  }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          {generateForm()}
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
