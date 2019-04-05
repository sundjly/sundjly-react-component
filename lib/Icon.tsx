import React from 'react';
import './importAll';
import './icon.scss';

interface IconProps {
  name: string;
  onClick?: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className={'customer-icon'} onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  );
};

export default Icon;