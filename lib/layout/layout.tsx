import React, {ReactElement, ReactNodeArray} from 'react';
import {ClassToggles, formatClass, Options} from '../helpers/generateCustomClass';
import './layout.scss';
import Aside from './aside';

const formatLayout: (name: string | ClassToggles, option?: Options) => string = formatClass('sundjly-layout');
export {formatLayout};

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactNodeArray
}

const Layout: React.FunctionComponent<IProps> = (props) => {
  const {className, ...rest} = props;
  let hasAside = false;
  // 断言
  const children = props.children as Array<ReactElement>;
  if (children.length && children.some(node => node.type === Aside)) {
    hasAside = true;
  }
  return (
    <section className={formatLayout({'': true, hasAside}, {extra: className})}{...rest}>
      {props.children}
    </section>
  );
};

export default Layout;