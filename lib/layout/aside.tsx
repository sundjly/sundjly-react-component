import React, {HTMLAttributes} from 'react';
import {formatClass} from '../helpers/generateCustomClass';

interface IProps extends HTMLAttributes<HTMLElement>{
}
const formatAside = formatClass('sundjly-layout');
const FA = formatAside;
const Aside: React.FunctionComponent<IProps> = (props) => {
	const {className, ...rest} = props;
	return (
		<div
			className={FA('aside', {extra: className})}
			{...rest}
		>
			{props.children}
		</div>
	);
};

export default Aside;