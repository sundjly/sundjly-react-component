import React from  'react';
import Icon from './Icon';

const ICON_EXAMPLES: string[] = ['wechat', 'banana', 'qq','panda'];
const IconExample: React.FunctionComponent = () => {
  return (
    <div>
      {
        ICON_EXAMPLES.map((name, index) => (<Icon name={name} key={index}/>))
      }
    </div>
  )
}

export default IconExample;