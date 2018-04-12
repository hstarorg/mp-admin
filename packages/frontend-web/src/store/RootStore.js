import { action, observable } from 'mobx';

export class RootStore {
  constructor() {}
  /**
   * 用户信息
   */
  @observable userInfo = {};

  /**
   * 是否已登录
   */
  @observable isLogged = false;

  @action
  toggle() {
    this.isLogged = !this.isLogged;
  }
}
