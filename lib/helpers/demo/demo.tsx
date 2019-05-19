import * as React from 'react';
import {CSSProperties, useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import './demo.scss';
import Icon from '../../icon/Icon';

interface IProps {
	code: string;
	title: string,
	description: string
}

const preStyle: CSSProperties = {
	lineHeight: '16px',
	textAlign: 'left',
	padding: '16px 16px'
};

const Demo: React.FunctionComponent<IProps> = (props) => {
	const [codeVisible, setCodeVisible] = useState(false);
	const {title, description} = props;
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
		<div className={'all-demo-box'}>
			<div className={'all-demo-example'}>{props.children}</div>
			<div className={'all-demo-code'}>
				<div className="code-title">{title}</div>
				<div className="code-description">
					{description}
					<span
						className="icon-wrapper"
						title={'show code'}
						onClick={() => {setCodeVisible(!codeVisible);}}
					>
						<Icon
							className={'code-btn'}
							name={'iconcodelibrary'}
						/>
					</span>
				</div>

			</div>
			<div className={'all-code-example'}>
				{
					codeVisible && code
				}
			</div>
		</div>
	);
};
Demo.defaultProps = {
	title: '组件标题',
	description: '组件具体的描述'
};
export default Demo;