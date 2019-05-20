import DialogExample from './dialog.example';
import Demo from '../../helpers/demo/demo';
import * as React from 'react';
import ApiContainer from '../../helpers/api-container/apiContainer';

const code = require('!!raw-loader!./dialog.example.tsx').default;

export default () => {
	return (
		<section>
			<Demo
				code={code}
				title={'Dialog 组件'}
				description={'Dialog 简单使用'}
			>
				<DialogExample/>
			</Demo>
			<ApiContainer
				tbody={[
					['type','button 类型','string','-'],
				]}
			/>
		</section>
	);
}