import React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';
import './layout.example.scss';
export default function () {
	return (
		<div>
			<section>
				<h3>第一个例子</h3>
				<Layout>
					<Header><div>header</div></Header>
					<Content>content</Content>
					<Footer><div>footer</div></Footer>
				</Layout>
			</section>
			<section>
				<h3>第二个例子</h3>
				<Layout>
					<Header><div>header</div></Header>
					<Layout>
						<Aside><div>aside</div></Aside>
						<Content><div>content</div></Content>
					</Layout>
					<Footer><div>footer</div></Footer>
				</Layout>
			</section>
			<section>
				<h3>第三个例子</h3>
				<Layout>
					<Header><div>header</div></Header>
					<Layout>
						<Content><div>content</div></Content>
						<Aside><div>aside</div></Aside>
					</Layout>
					<Footer><div>footer</div></Footer>
				</Layout>
			</section>
			<section>
				<h3>第四个例子</h3>
				<Layout>
					<Aside><div>aside</div></Aside>
					<Layout>
						<Header><div>header</div></Header>
						<Content><div>content</div></Content>
						<Footer><div>footer</div></Footer>
					</Layout>
				</Layout>

			</section>
		</div>
	);
};