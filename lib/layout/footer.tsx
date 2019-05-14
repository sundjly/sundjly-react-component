import React, {HTMLAttributes} from 'react';
import {formatClass} from '../helpers/generateCustomClass';

interface IProps extends HTMLAttributes<HTMLElement> {
}

const formatFooter = formatClass('sundjly-layout');

const Footer: React.FunctionComponent<IProps> = (props) => {
	const {className, ...rest} = props;
	return (
		<div
			className={formatFooter('footer', {extra: className})}
			{...rest}
		>
			{props.children}
		</div>
	);
};

export default Footer;