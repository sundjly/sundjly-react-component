import classnames from '../combineClass';

describe('combineClass', () => {
  it('接受一个className', () => {
    const result = classnames('sun');
    expect(result).toEqual('sun');
  });

  it('接受两个参数', () => {
    const result = classnames('1', 'cla');
    expect(result).toEqual('1 cla');
  });

  it('接受undefined', () => {
    const result = classnames('2', undefined);
    expect(result).toEqual('2');
  });

  it('接受各种参数', () => {
    const result = classnames('2', '', null, '中文', undefined);
    expect(result).toEqual('2 中文');
  });

  it('接受0个参数', () => {
    const result = classnames();
    expect(result).toEqual('');
  });

});