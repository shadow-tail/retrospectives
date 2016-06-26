import React from 'react';
import {render} from 'react-dom';

class SafetyCheckInstructions extends React.Component {
  render () {
    return (
      <div>
        <h1>How to use</h1>
        <ul>
          <li>Select the option that best describes how you feel. If you have selected the wrong option, select 'Reset scores' (be aware that this resets all scores, so voting must start again.)</li>
          <li>Select 'Pass it on', which will hide the option you selected.</li>
          <li>Pass the device to the next person.</li>
          <li>Once the device is returned to the facilitator, select 'Determine' to determine if the retrospective should be postponed due to any participants feeling unsafe.</li>
        </ul>
      </div>
    );
  }
}

export default SafetyCheckInstructions;
