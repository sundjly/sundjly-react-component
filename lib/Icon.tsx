import React from 'react';
import './importAll';
import './icon.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className={'customer-icon'}
         onClick={props.onClick}
         onMouseLeave={props.onMouseLeave}
         onMouseEnter={props.onMouseEnter}
    >
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;