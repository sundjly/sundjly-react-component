import * as React from 'react';

interface IProps {
	code: string;
}

const Demo: React.FunctionComponent<IProps> = (props) => {
	return (
		<div>
			{props.children}
			<pre style={{lineHeight:'16px',textAlign:'left',padding:'16px 16px'}}>
				{props.code}
			</pre>
		</div>
	);
};

export default Demo;