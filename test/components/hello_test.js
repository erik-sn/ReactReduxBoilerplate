import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Hello from '../../src/components/hello';
import { test } from '../../src/components/things';

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

  describe('Things', () => {
    let component2;
    const things = 3;
    beforeEach(() => {
      component2 = shallow(<test things={things} />);
    });

    it('renders something', () => {
      expect(component2).to.exist();
    });
  });
});
