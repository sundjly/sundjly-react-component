import React, {useEffect} from 'react';
import './importAll';
import './style/icon.scss';
import classnames from '../helpers/combineClass';
import {log} from 'util';

interface IconProps extends React.SVGAttributes<SVGElement> {
	name: string;
	scriptUrl?: string;
}

const customCache = new Set<string>();
const Icon: React.FunctionComponent<IconProps> = (props) => {
	const {className, name, scriptUrl, ...ohersProp} = props;
	useEffect(() => {
		log('111');
		if (typeof document !== 'undefined'
			&& typeof window !== 'undefined'
			&& typeof document.createElement === 'function'
			&& typeof scriptUrl === 'string'
			&& scriptUrl.length
			&& !customCache.has(scriptUrl)
		) {
			const script: HTMLElement = document.createElement('script');
			script.setAttribute('src', scriptUrl);
			script.setAttribute('data-namespance', scriptUrl);
			customCache.add(scriptUrl);
			document.body.appendChild(script);
			log('script')
		}
	}, []);
	return (
		<svg
			className={classnames('customer-icon', className)}
			{...ohersProp}
		>
			<use xlinkHref={`#${name}`}/>
		</svg>
	);
};
Icon.defaultProps={
	scriptUrl:'//at.alicdn.com/t/font_1198870_a7vz2zkwc3n.js'
}
export default Icon;