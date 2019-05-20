import LayoutExample from './layout.example';
import Demo from '../../helpers/demo/demo';

import * as React from 'react';
import ApiContainer from '../../helpers/api-container/apiContainer';

const code = require('!!raw-loader!./layout.example.tsx').default;

export default () => {
	return (
		<section>
			<Demo
				code={code}
				title={'Layout 组件'}
				description={'Layout 简单使用'}
			>
				<LayoutExample/>
			</Demo>
			<ApiContainer
				tbody={[
					['type','button 类型','string','-'],
				]}
			/>
		</section>
	);
}