import {formatClass} from '../generateCustomClass';

describe('generateCustomClass', () => {
  it('接受字符串或者对象', function () {
    const testClass = formatClass('sundjly-layout');
    expect(testClass('')).toEqual('sundjly-layout');
    expect(testClass('content')).toEqual('sundjly-layout-content');
    expect(testClass({x: true, y: false})).toEqual('sundjly-layout-x');
    expect(testClass({x: true, y: true})).toEqual('sundjly-layout-x sundjly-layout-y');
    expect(testClass({x: true, y: true}, {extra: 'extra'})).toEqual('sundjly-layout-x sundjly-layout-y extra');
  });
});