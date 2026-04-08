import { Page } from '@playwright/test';
import { ENV } from '../utils/env';  // updated path

export class LoginPage {
   usernameInput;
   passwordInput;
  loginButton;

  constructor(private page: Page) {
    this.usernameInput = this.page.locator('#txtUsername');
    this.passwordInput = this.page.locator('#txtPassword');
    this.loginButton = this.page.locator('#btnLogin');
  }

  async goto() {
    await this.page.goto(ENV.baseURL);
  }

  async login(username = ENV.username, password = ENV.password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}