import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Hello from '../../src/components/hello';

describe('Lets write tests!', () => {
  describe('Hello', () => {
    let component;

    beforeEach(() => {
      component = shallow(<Hello />);
    });

    it('renders something', () => {
      expect(component).to.exist(); // note use of dirty chai - exist() instead of exist
    });
  });
});
