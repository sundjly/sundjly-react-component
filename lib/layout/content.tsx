import React from 'react';
import {formatLayout} from './layout';

interface IProps extends React.HTMLAttributes<HTMLElement> {
}

const Content: React.FunctionComponent<IProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <main
      className={formatLayout('content', {extra: className})}
      {...rest}
    >
      {props.children}
    </main>
  );
};

export default Content;