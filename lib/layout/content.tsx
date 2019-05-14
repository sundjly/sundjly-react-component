import React from 'react';
import {formatClass} from '../helpers/generateCustomClass';

interface IProps extends React.HTMLAttributes<HTMLElement> {
}
const formatContent = formatClass('sundjly-layout')
const Content: React.FunctionComponent<IProps> = (props) => {
	const {className, ...rest} = props;
	return (
		<div
			className={formatContent('content', {extra: className})}
			{...rest}
		>
			{props.children}
		</div>
	);
};

export default Content;