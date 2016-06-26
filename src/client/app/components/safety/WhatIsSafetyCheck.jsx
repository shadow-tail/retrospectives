import React from 'react';
import {render} from 'react-dom';

class WhatIsSafetyCheck extends React.Component {
  render () {
    return (
      <div>
        <h1>What is a safety check?</h1>
        <p>The safety check, typically performed at the start of a retrospective, is a tool often used by a facilitator to gauge the safety of the participants, to see how comfortable they feel in expressing their opinions and getting involved in discussion and is often used to make a judgement call on whether or not the retrospective should continue.</p>
        <p>If the safety is too low, well then it indicates that people aren’t really comfortable in expressing their thoughts, meaning that you can’t really expect any real value to come of the retrospective.</p>
        <p><a href="http://www.akashb.com/blog/2012/05/28/agile-retrospectives-the-safety-check/">More information on safety checks.</a></p>
      </div>
    );
  }
}

export default WhatIsSafetyCheck;
