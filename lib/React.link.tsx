import React from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

interface Iprops {
  page: string;
}
interface Istate {
  className: string
}

export default class Link extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      className: STATUS.NORMAL,
    };
  }

  _onMouseEnter():void {
    this.setState({className: STATUS.HOVERED});
  }

  _onMouseLeave():void {
    this.setState({className: STATUS.NORMAL});
  }

  render() {
    return (
      <a
        className={this.state.className}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}
      >
        {this.props.children}
      </a>
    );
  }
}