import * as React from 'react';
import Link from '../React.link';
import * as renderer from 'react-test-renderer';

test('link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page='http://wwww.facebook.com'>facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // @ts-ignore
  tree.props.onMouseEnter();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // @ts-ignore
  tree.props.onMouseLeave();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});