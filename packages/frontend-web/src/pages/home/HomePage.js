import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

@inject('store')
@observer
export class HomePage extends Component {
  componentWillMount() {}
  render() {
    console.log('render');
    const { store } = this.props;
    return (
      <div>
        Home- {String(store.isLogged)}
        <h1>{store.userInfo.username}</h1>
        <button onClick={() => store.toggle()}>SET</button>
      </div>
    );
  }
}
