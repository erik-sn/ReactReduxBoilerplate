import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { Link } from 'react-router';

import { addThing, removeThing } from '../actions/index';

export const Thing = (props) => {
  let things = List.of();
  for (let i = 1; i <= props.things; i += 1) {
    things = things.push(<div key={i}>{`Thing #${i}`}</div>);
  }
  return (
    <div className="thing-container">
      <Link to="/">Home</Link>
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

function mapStateToProps(state) {
  return { things: state.get('things') };
}

const ThingContainer = connect(mapStateToProps, { addThing, removeThing })(test);

export default ThingContainer;
