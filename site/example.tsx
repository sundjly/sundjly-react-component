import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconDemo from '../lib/icon/demo/icon.demo';
import ButtonDemo from '../lib/button/demo/button.demo';
import DialogExample from '../lib/dialog/demo/dialog.example';
import LayoutExample from '../lib/layout/demo/layout.example';
import '../lib/index.scss';
import './example.scss';
import {Layout, Aside, Content, Header, Footer} from '../lib/layout/layout';
// import * as logo from './Logo.png';
const logo = require('./Logo.png');// 换成动态导入，这样 ts 就不会检查它的问题
ReactDOM.render(
  <Router>
    <Layout className="theme-container">
      <Header className="nav-bar">
        <div className="logo">
          <img src={logo} alt="sundjly React UI"/>
          <span className={"logo-title"}>SUNDJLY React UI</span>
        </div>
      </Header>
      <Layout className="main-container">
        <Aside className={'main-side'}>
          <p className="header">组件</p>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to={'/layout'}>Layout</NavLink>
            </li>
          </ul>
        </Aside>
        <Content className={'main-content'}>
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonDemo}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="main-footer">
        &copy; sundjly
      </Footer>
    </Layout>
  </Router>
  , document.querySelector('#app'));