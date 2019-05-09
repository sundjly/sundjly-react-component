import * as React from 'react';
import Dialog from './dialog';

const {useState} = React;

export default function () {
	const [isVisible, setVisible] = useState(false);
	return (
		<div>
			<button onClick={() => {setVisible(!isVisible);}}>show dialog</button>
			<Dialog
				visible={isVisible}
				footer={[
					<button onClick={() => {setVisible(false);}}>ok</button>,
					<button onClick={() => {setVisible(false);}}>cancle</button>
				]}
				onClose={() => {setVisible(false);}}
			>
				<strong>b</strong>
			</Dialog>
		</div>
	);
}