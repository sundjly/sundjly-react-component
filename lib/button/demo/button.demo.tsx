import ButtonExample from './button.example';
import Demo from '../../helpers/demo';

import * as React from 'react';

const code = require('!!raw-loader!./button.example.tsx').default;

export default () => {
	return (
		<Demo code={code}>
			<ButtonExample/>
		</Demo>
	);
}