import * as React from 'react';
import {FunctionComponent} from 'react';

import './apiContainer.scss'
interface IProps {
	title?: string;
	thead?: Array<string>;
	tbody: Array<Array<string>>

}
const defaultHead: Array<string> = ['参数', '说明', '类型', '默认值'];
const ApiContainer: FunctionComponent<IProps> = (props) => {
	const {title, thead, tbody} = props;
	const THEAD = thead || defaultHead;
	return (
		<section className={'api-container'}>
			<h2>
				<span>{title}</span>
				<a href="#API" className={'anchor'}>#</a>
			</h2>
			<table>
				<thead>
				<tr>
					{THEAD.map((val, index) => (<th key={index}>{val}</th>))}
				</tr>
				</thead>
				<tbody>
				{
					tbody.map((val,index)=>{
						return (
							<tr key={`tr-${index}`}>
								{
									val.map((item, tdIndex)=>(
										<td key={`td-${tdIndex}`}>{item}</td>
									))
								}
							</tr>
						)
					})
				}
				</tbody>
			</table>
		</section>
	);
};

ApiContainer.defaultProps = {
	title: 'API',
	thead: ['参数', '说明', '类型', '默认值']
};
export default ApiContainer;