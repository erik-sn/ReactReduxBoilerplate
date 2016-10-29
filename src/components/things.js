import React from 'react';
import { connect } from 'react-redux';

import { addThing, removeThing } from '../actions/index';

export const Things = (props) => {
  const things = [];
  for (let i = 1; i <= props.things; i += 1) {
    things.push(<div key={i}>{`Thing #${i}`}</div>);
  }
  return (
    <div className="thing-container">
      <button onClick={props.addThing}>Add</button>
      <button onClick={props.removeThing}>Remove</button>
      <div>
        {things}
      </div>
      <h3>Test Image:</h3>
      <img src="/static/media/tictactoe.png" alt="Tictactoe" />
    </div>
  );
};

function mapStateToProps({ things }) {
  return { things };
}

export default connect(mapStateToProps, { addThing, removeThing })(Things);
