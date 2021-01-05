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
    sendSubmission(boxFields);

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
        return <input key={i} name={field.key} placeholder={field.placeholder} type="text" value={boxFields[field.key]} onChange={onBoxUpdate} />
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




          
            {/* The <input name="adj1" placeholder={fields[1].placeholder} type="text" value={boxFields.adj1} onChange={onBoxUpdate} />
            <input name="noun1" placeholder={fields[2].placeholder} type="text" value={boxFields.noun1} onChange={onBoxUpdate} />
            <input name="adv" placeholder={fields[3].placeholder}  type="text" value={boxFields.adv} onChange={onBoxUpdate} />
            <input name="verb" placeholder={fields[4].placeholder}  type="text" value={boxFields.verb} onChange={onBoxUpdate} />
            the <input name="adj2" placeholder={fields[6].placeholder}  type="text" value={boxFields.adj2} onChange={onBoxUpdate} />
            <input name="noun2" placeholder={fields[7].placeholder}  type="text" value={boxFields.noun2} onChange={onBoxUpdate} /> */}
          


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
