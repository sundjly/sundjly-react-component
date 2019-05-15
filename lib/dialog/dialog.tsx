import {ReactNode, ReactElement} from 'react';
import * as React from 'react';
import './dialog.scss';
import Icon from '../icon/Icon';
import {formatClass} from '../helpers/generateCustomClass';
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

interface ConfirmProps {
	title?: string;
	content: string;
	onOk?: () => void;
	onCancel?: () => void;
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
	modal(content);
};

const confirm = (props: ConfirmProps) => {
	const {content, onOk, onCancel} = props;
	const okCallback = () => {
		onOk && onOk();
		onClose();
	};
	const cancelCallback = () => {
		onCancel && onCancel();
		onClose();
	};
	const footer = [
		<button onClick={okCallback}>yes</button>,
		<button onClick={cancelCallback}>no</button>
	];
	const onClose = modal(content, footer, onCancel);
};

const modal = (content: React.ReactNode, footer?: Array<ReactElement>, afterClose?: () => void, title?: string) => {
	const onClose = () => {
		// 重新渲染，然后更改 visible 属性
		ReactDOM.render(React.cloneElement(component, {visible: false}), div);
		// 利用 ReactDOM 清理绑定的事件
		ReactDOM.unmountComponentAtNode(div);
		console.log('sdj');
		// 移除 div 元素
		div.remove();
	};
	const close = () => {
		onClose();
		afterClose && afterClose();
	};
	const component = (
		<Dialog
			visible={true}
			onClose={close}
			footer={footer}
			title={title}
		>
			{content}
		</Dialog>
	);
	const div = document.createElement('div');
	document.body.append(div);
	ReactDOM.render(component, div);

	// 返回 onClose 的方法，方便在外部能够调用这个关闭的方法
	return onClose;
};

export {alert, confirm, modal};
export default Dialog;

