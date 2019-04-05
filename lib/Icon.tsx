import React from 'react';
import './importAll';
import './icon.scss';
import classnames from './helpers/combineClass';
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const {className, ...ohersProp} = props;
  return (
    <svg className={classnames('customer-icon', className)}
         {...ohersProp}
    >
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;