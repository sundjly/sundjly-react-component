import IconExample from './icon.example';
import Demo from '../../helpers/demo/demo';
import * as React from 'react';
// raw-loader 的特定用法 require 里面
const code = require('!!raw-loader!./icon.example.tsx').default;

export default () => {
	return (
		<Demo code={code}>
			<IconExample/>
		</Demo>
	);
}