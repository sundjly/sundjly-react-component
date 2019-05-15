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
  // let hasAside = false;
  // 断言
  const children = props.children as Array<ReactElement>;
  // if (children.length && children.some(node => node.type === Aside)) {
  //   hasAside = true;
  // }
  const hasAside = 'length' in children &&
    children.reduce((result, node) => result || node.type === Aside, false);
  return (
    <section className={formatLayout({'': true, 'has-aside': hasAside}, {extra: className})}{...rest}>
      {props.children}
    </section>
  );
};

export default Layout;
export {Layout};
export {default as Header} from './header';
export {default as Content} from './content';
export {default as Footer} from './footer';
export {default as Aside} from './aside';
