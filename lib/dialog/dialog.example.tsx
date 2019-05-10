import * as React from 'react';
import Dialog,{alert, confirm} from './dialog';
import './dialog.example.scss';

const {useState} = React;

export default function DialogExample() {
	const [isVisible, setVisible] = useState(false);
	const [isVisible2, setVisible2] = useState(false);
	return (
		<div>
			<section className="code-box">
				<h1>example 1</h1>
				<button onClick={() => {setVisible(!isVisible);}}>show dialog</button>
				<Dialog
					visible={isVisible}
					footer={[
						<button onClick={() => {setVisible(false);}}>ok</button>,
						<button onClick={() => {setVisible(false);}}>cancle</button>
					]}
					onClose={() => {setVisible(false);}}
				>
					<div>Some contents...</div>
				</Dialog>
			</section>
			<section className="code-box">
				<h1>example 2</h1>
				<button onClick={() => {setVisible2(!isVisible2);}}>show dialog2</button>
				<Dialog closeByMask={false} onClose={() => {setVisible2(false);}} visible={isVisible2}>
					<div>somde contents...</div>
				</Dialog>
			</section>
			<section className="code-box">
				<h1>example 3</h1>
				<button onClick={()=>{alert('alert content')}}>alert</button>
				<button onClick={()=>{confirm({content:'confirm'})}}>confirm</button>
			</section>
		</div>

	);
}