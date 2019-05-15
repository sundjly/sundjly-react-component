import React, {HTMLAttributes} from 'react';
import {formatLayout} from './layout';

interface IProps extends HTMLAttributes<HTMLElement> {
}

const Aside: React.FunctionComponent<IProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div
      className={formatLayout('aside', {extra: className})}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default Aside;