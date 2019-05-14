import React from 'react';
import {formatClass} from '../helpers/generateCustomClass';
import './layout.scss'

const formatLayout = formatClass('sundjly-layout');
const FL = formatLayout;

interface IProps extends React.HTMLAttributes<HTMLElement>{
}
const Layout: React.FunctionComponent<IProps> = (props) => {
	const {className, ...rest} = props;
	return (
		<div className={FL({'':true},{extra: className})}{...rest}>
			{props.children}
		</div>
	);
};

export default Layout;