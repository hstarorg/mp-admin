import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

@inject('store')
@observer
export class HomePage extends Component {
  componentWillMount() {}
  render() {
    console.log('render');
    return (
      <div>
        Home- {String(this.props.store.isLogged)}
        <button onClick={() => this.props.store.toggle()}>SET</button>
      </div>
    );
  }
}
