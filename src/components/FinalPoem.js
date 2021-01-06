import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = ({isSubmitted, submissions, revealPoem}) => {

  const formattedPoem = submissions.map((submission) => {
    return <p>{submission}</p>
  })

  if (isSubmitted){
    return(
    <div className="FinalPoem">
    <section className="FinalPoem__poem">
      <h3>Final Poem</h3>
      {formattedPoem}
    </section>
    </div>)
  }
  return (
    <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={revealPoem}/>
      </div>
  )
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
