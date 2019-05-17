import * as React from 'react';
import {CSSProperties, useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import './demo.scss';

interface IProps {
	code: string;
}

const preStyle: CSSProperties = {
	lineHeight: '16px',
	textAlign: 'left',
	padding: '16px 16px'
};

const Demo: React.FunctionComponent<IProps> = (props) => {
	const [codeVisible, setCodeVisible] = useState(false);
	const code = (
		<Highlight
			{...defaultProps}
			code={props.code}
			language={'jsx'}
		>
			{
				({className, style, tokens, getLineProps, getTokenProps}) => (
					<pre className={className} style={{...style, ...preStyle}}>
							{
								tokens.map((line, i) => (
									<div {...getLineProps({line, key: i})}>
										{
											line.map((token, key) => (
												<span {...getTokenProps({token, key})}/>
											))
										}
									</div>
								))
							}
						</pre>
				)
			}
		</Highlight>
	);
	return (
		<div>
			<div>{props.children}</div>
			<div>
				<button
					className={'code-btn'}
					onClick={() => {setCodeVisible(!codeVisible);}}
				>
					查看代码
				</button>
			</div>
			{
				codeVisible && code
			}
		</div>
	);
};

export default Demo;