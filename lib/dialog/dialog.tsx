import {ReactNode, ReactElement} from 'react';
import * as React from 'react';
import './dialog.scss';
import Icon from '../icon/Icon';
import {formatClass} from '../utils/generateCustomClass';

const {Fragment} = React;

interface IProps {
	visible: boolean;
	children: ReactNode,
	footer: ReactElement[],
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
	return (
		props.visible ?
			<Fragment>
				<div className={FD('mask')} onClick={onClickMask}/>
				<div className={FD('wrap')}>
					<div
						onClick={onClose}
						className={FD('close')}>
						<Icon name="close"/>
					</div>
					<header className={FD('header')}>header</header>
					<main className={FD('main')}>
						{props.children}
					</main>
					<footer className={FD('footer')}>
						{props.footer.map((button, index) => {
							return React.cloneElement(button, {key: index});
						})}
					</footer>
				</div>
			</Fragment>
			:
			null
	);
};
Dialog.defaultProps = {
	closeByMask: false
};
export default Dialog;

