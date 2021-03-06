import ButtonExample from './button.example';
import Demo from '../../helpers/demo/demo';
import * as React from 'react';
import ApiContainer from '../../helpers/api-container/apiContainer';

const code = require('!!raw-loader!./button.example.tsx').default;

export default () => {
	return (
		<section className={'button-demo-section'}>
			<Demo
				code={code}
				title={'Button 组件'}
				description={'Button 简单使用'}
			>
				<ButtonExample/>
			</Demo>
			<ApiContainer
				tbody={[
					['type','button 类型','string','-'],
				]}
			/>
		</section>
	);
}