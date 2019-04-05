import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from './icon/Icon';

const svgClick = (e: React.MouseEvent<SVGElement | SVGUseElement>) => {
  console.log(e);
  console.log(e.target);
  console.log((e.target as SVGUseElement).href); // as进行断言
};
// 或者这样声明
// const svgClick2:React.MouseEventHandler<SVGElement> = (e) => {
// }

const svgMouseEnter: React.MouseEventHandler<SVGElement> = () => {
  console.log('enter');
};

const svgMouseLeave: React.MouseEventHandler<SVGElement> = () => {
  console.log('leave');
};

ReactDOM.render((<div>
    <Icon
      className="icon-wechat"
      name="wechat"
      onClick={svgClick}
      onMouseLeave={svgMouseLeave}
      onMouseEnter={svgMouseEnter}
    />
    <Icon name="qq" onClick={svgClick}/>
    <Icon name="banana" onClick={svgClick}/>
  </div>)
  , document.getElementById('app'));
