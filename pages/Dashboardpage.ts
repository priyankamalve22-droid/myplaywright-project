import { Page } from '@playwright/test';

export class DashboardPage {
  welcomeMessage;
  myInfoMenu;

  constructor(private page: Page) {
    this.welcomeMessage = this.page.locator('#welcome');
    this.myInfoMenu = this.page.locator('#menu_pim_viewMyDetails');
  }

  async isWelcomeVisible() {
    return await this.welcomeMessage.isVisible();
  }

  async openMyInfo() {
    await this.myInfoMenu.click();
  }
}