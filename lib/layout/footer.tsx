import React, {HTMLAttributes} from 'react';
import {formatLayout} from './layout';

interface IProps extends HTMLAttributes<HTMLElement> {
}


const Footer: React.FunctionComponent<IProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <footer
      className={formatLayout('footer', {extra: className})}
      {...rest}
    >
      {props.children}
    </footer>
  );
};

export default Footer;