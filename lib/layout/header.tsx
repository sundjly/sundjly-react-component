import React, {HTMLAttributes} from 'react';
import {formatClass} from '../helpers/generateCustomClass';


const formatHeader = formatClass('sundjly-layout')
interface IProps extends HTMLAttributes<HTMLElement> {}
const Header: React.FunctionComponent<IProps> = (props) => {
	const {className, ...rest} = props;
	return (
		<div
			className={formatHeader('header', {extra: className})}
			{...rest}
		>
			{props.children}
		</div>
	);
};

export default Header;