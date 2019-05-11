import {ReactNode, ReactElement} from 'react';
import * as React from 'react';
import './dialog.scss';
import Icon from '../icon/Icon';
import {formatClass} from '../utils/generateCustomClass';
import ReactDOM from 'react-dom';

const {Fragment} = React;

interface IProps {
	visible: boolean;
	children: ReactNode,
	title?: ReactNode,
	footer?: ReactElement[],
	onClose: React.MouseEventHandler,
	closeByMask?: boolean;
}

const formatDialog = formatClass('sundjly-dialog');
const FD = formatDialog;
const Dialog: React.FunctionComponent<IProps> = (props) => {

	const onClose: React.MouseEventHandler = (e) => {
		props.onClose(e);
	};

	const onClickMask: React.MouseEventHandler = (e) => {
		if (props.closeByMask) {
			props.onClose(e);
		}
	};

	const result = (
		props.visible ?
			<Fragment>
				<div className={FD('mask')} onClick={onClickMask}/>
				<div className={FD('wrap')}>
					<div
						onClick={onClose}
						className={FD('close')}>
						<Icon name="close"/>
					</div>
					<header className={FD('header')}>{props.title}</header>
					<main className={FD('main')}>
						{props.children}
					</main>
					<footer className={FD('footer')}>
						{props.footer && props.footer.map((button, index) => {
							return React.cloneElement(button, {key: index});
						})}
					</footer>
				</div>
			</Fragment>
			:
			null
	);

	return ReactDOM.createPortal(result, document.body);

};
Dialog.defaultProps = {
	closeByMask: true,
	title: '标题'
};

// 动态创建 Dialog 组件
const alert = (content: string) => {
	const component = (
		<Dialog
			onClose={() => {
				// 重新渲染，然后更改 visible 属性
				ReactDOM.render(React.cloneElement(component, {visible: false}), div);
				// 利用 ReactDOM 清理绑定的事件
				ReactDOM.unmountComponentAtNode(div);
				// 移除 div 元素
				div.remove();
			}}
			visible={true}
			title={''}
		>
			{content}
		</Dialog>
	);
	const div = document.createElement('div');
	document.body.append(div);
	ReactDOM.render(component, div);
};

interface ConfirmProps {
	title?: string;
	content: string;
	onOk?: () => void;
	onCancel?: () => void;
}


const confirm = (props: ConfirmProps) => {
	const {title, content, onOk, onCancel} = props;
	const okCallback = () => {
		onOk && onOk();
		onClose();
	};
	const cancleCallback = () => {
		onCancel && onCancel();
		onClose();
	};
	const onClose = () => {
		ReactDOM.render(React.cloneElement(component, {visible: false}), div);
		ReactDOM.unmountComponentAtNode(div);
		div.remove();
	};
	const component = (
		<Dialog
			title={title}
			visible={true}
			onClose={onClose}
			footer={[
				<button onClick={okCallback}>yes</button>,
				<button onClick={cancleCallback}>no</button>
			]}
		>
			{content}
		</Dialog>
	);

	const div = document.createElement('div');
	document.body.append(div);
	ReactDOM.render(component, div);
};
// 返回 onClose 的方法，方便在外部能够调用这个关闭的方法
const modal = (content: React.ReactNode | React.ReactFragment) => {
	const onClose = () => {
		ReactDOM.render(React.cloneElement(component, {visible: false}), div);
		ReactDOM.unmountComponentAtNode(div);
		div.remove();
	};

	const component = (
		<Dialog
			onClose={onClose}
			visible={true}
		>
			{content}
		</Dialog>
	);
	const div = document.createElement('div');
	document.body.append(div);
	ReactDOM.render(component, div);
	return onClose;
};

export {alert, confirm, modal};
export default Dialog;

