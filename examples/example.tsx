import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from '../lib/icon/icon.example';
import ButtonExample from '../lib/button.example';
import DialogExample from '../lib/dialog/dialog.example';
import LayoutExample from '../lib/layout/layout.example';
import '../lib/index.scss';
import './example.scss';
import {Layout, Aside, Content, Header} from '../lib/layout/layout';

ReactDOM.render(
  <Router>
    <Layout className="theme-container">
      <Header className="nav-bar">
        <div className="logo">sundjly's Component</div>
      </Header>
      <Layout className="main-container">
        <Aside className={'main-side'}>
          <p className="header">组件</p>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
            <li>
              <Link to={'/layout'}>Layout</Link>
            </li>
          </ul>
        </Aside>
        <Content className={'main-content'}>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
    </Layout>
  </Router>
  , document.querySelector('#app'));