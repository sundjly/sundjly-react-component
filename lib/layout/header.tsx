import React, {HTMLAttributes} from 'react';
import {formatLayout} from './layout';



interface IProps extends HTMLAttributes<HTMLElement> {}

const Header: React.FunctionComponent<IProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <header
      className={formatLayout('header', {extra: className})}
      {...rest}
    >
      {props.children}
    </header>
  );
};

export default Header;