// stores/passwordStore.js
import { makeAutoObservable } from 'mobx';

class PasswordStore {
  newPassword = '';
  reNewPassword = '';
  passwordsMatch = true;

  constructor() {
    makeAutoObservable(this, {
      setNewPassword: true,
      setReNewPassword: true,
      checkPasswordsMatch: true,
    });
  }

  setNewPassword = (value) => {
    this.newPassword = value;
    this.checkPasswordsMatch();
  };

  setReNewPassword = (value) => {
    this.reNewPassword = value;
    this.checkPasswordsMatch();
  };

  checkPasswordsMatch = () => {
    if (this.newPassword !== '' && this.reNewPassword !== '' && this.newPassword !== this.reNewPassword) {
      this.passwordsMatch = false;
    } else {
      this.passwordsMatch = true;
    }
  };
}

const passwordStore = new PasswordStore();
export default passwordStore;
