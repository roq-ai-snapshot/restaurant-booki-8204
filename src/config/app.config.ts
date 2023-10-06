interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager', 'Wait Staff', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read restaurant information',
    'Read menus',
    'Read table availability',
    'Read reservation details',
  ],
  ownerAbilities: [
    'Manage restaurant information',
    'Manage restaurant menus',
    'Manage restaurant bookings',
    'Manage restaurant tables',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/89b5f4f4-f55e-4c4b-8c79-47bffb8c1533',
};
