import * as renderer from 'react-test-renderer';
import React from 'react';
import Icon from '../Icon';
import {mount} from 'enzyme'; // 测试点击事件引入的库

describe('icon组件测试', () => {
  it('icon render successfully', () => {
    const json = renderer.create(<Icon name="qq"/>).toJSON();
    expect(json).toMatchSnapshot();
  });

  it('icon onClick', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="wechat" onClick={fn}/>);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });
});