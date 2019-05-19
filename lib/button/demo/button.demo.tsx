import ButtonExample from './button.example';
import Demo from '../../helpers/demo/demo';

import * as React from 'react';

const code = require('!!raw-loader!./button.example.tsx').default;

export default () => {
	return (
		<Demo
			code={code}
			title={'Button 组件'}
			description={'Button 简单使用'}
		>
			<ButtonExample/>
		</Demo>
	);
}