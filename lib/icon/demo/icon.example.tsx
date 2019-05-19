import React from 'react';
import Icon from '../Icon';

const ICON_EXAMPLES: string[] = ['wechat', 'banana', 'qq','panda','close'];
const IconExample: React.FunctionComponent = () => {
  return (
    <div className={'icon-demo-code'}>
      {
        ICON_EXAMPLES.map((name, index) => (<Icon name={name} key={index}/>))
      }
    </div>
  )
}

export default IconExample;