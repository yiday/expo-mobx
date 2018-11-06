import React, { Component } from 'react';
import { inject , observer} from 'mobx-react';
import LoginContainer from './LoginContainer';
import HomeContainer from './HomeContainer';

@inject('homeStore')
@observer
export default class MainContainer extends Component {

  render() {
    if (this.props.homeStore.isLogin) {
      return (
        <HomeContainer />
      );
    } else {
      return (
        <LoginContainer/>
      );
    }
  }
}
