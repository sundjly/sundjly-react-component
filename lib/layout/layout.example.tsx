import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

export default function () {
	return (
		<div>
			<section>
				<h3>第一个例子</h3>
				<Layout style={{height: 300}}>
					<Header>heder</Header>
					<Content>content</Content>
					<Footer>footer</Footer>
				</Layout>
			</section>
			<section>
				<h3>第二个例子</h3>
				<Layout style={{height: 300}}>
					<Header>header</Header>
					<Layout>
						<Aside>aside</Aside>
						<Content>content</Content>
					</Layout>
					<Footer>footer</Footer>
				</Layout>
			</section>
		</div>
	);
};