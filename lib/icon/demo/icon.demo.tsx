import IconExample from './icon.example';
import Demo from '../../helpers/demo/demo';
import * as React from 'react';
import Icon from '../Icon';
import './icon.demo.scss'

// raw-loader 的特定用法 require 里面
const code = require('!!raw-loader!./icon.example.tsx').default;
const ICON_EXAMPLES: string[] = ["iconcheck-circle","iconCI","iconDollar","iconcompass","iconclose-circle","iconfrown","iconinfo-circle","iconleft-circle","icondown-circle","iconEURO","iconcopyright","iconminus-circle","iconmeh","iconplus-circle","iconplay-circle","iconquestion-circle","iconPound","iconright-circle","iconsmile","iconearth","icontransaction","iconundo","iconredo","iconreload","iconmessage","iconlogout","iconsetting","iconeye","iconlocation","iconedit-square","iconImport","iconclose-square","icondown-square","iconleft-square","iconcodelibrary","iconplus-square","icondropbox","icondingtalk","iconandroid-fill","iconapple-fill","iconHTML-fill","iconwindows-fill","iconQQ","icontwitter","iconskype-fill","iconalipay-circle-fill","iconaliwangwang-fill","iconbehance-circle-fill","iconamazon-circle-fill","iconcodepen-circle-fill","iconCodeSandbox-circle-f","icondropbox-circle-fill","icongithub-fill","icondribbble-circle-fill","icongoogleplus-circle-f","iconmedium-circle-fill","iconQQ-circle-fill","iconIE-circle-fill","icongoogle-circle-fill","icondingtalk-circle-fill","iconsketch-circle-fill","iconslack-circle-fill","icontwitter-circle-fill","icontaobao-circle-fill","iconweibo-circle-fill","iconzhihu-circle-fill","iconreddit-circle-fill","iconalipay-square-fill","icondingtalk-square-fill","iconCodeSandbox-square-f","iconbehance-square-fill","iconamazon-square-fill","iconfacebook-fill","icongoogleplus-square-f","icongoogle-square-fill","iconinstagram-fill","iconIE-square-fill","iconmedium-square-fill","iconlinkedin-fill","iconQQ-square-fill","iconreddit-square-fill","icontwitter-square-fill","iconsketch-square-fill","icontaobao-square-fill","iconweibo-square-fill","iconzhihu-square-fill","iconzoomout","iconzoomin","iconcaret-down","iconbackward","iconcaret-up","iconcaret-right","iconcaret-left","iconfast-backward","iconforward","iconfast-forward","iconsearch","iconstep-backward","iconeye-close","iconclear","iconcollapse"];

export default () => {
	return (
		<section className={'icon-demo-section'}>
			<Demo
				code={code}
				title={'Icon 展示'}
				description={'Icon 展示组件可以点击查看右侧代码'}
			>
				<IconExample/>
			</Demo>
			<section className={'all-icon-demo'}>
				<h3>组件默认添加的 Icon</h3>
				<ul className={'icons-list'}>
					{
						ICON_EXAMPLES.map(val => (
							<li key={val}>
								<Icon className={'sdj-icon'} name={val} style={{fontSize:18}}/>
								<span>{val}</span>
							</li>
						))
					}
				</ul>
			</section>
		</section>
	);
}