const permissions = [
  'view_dashboard',
  'view_order',
  'edit_order',
  'view_payment',
  'view_report',
];

class UserRole {
  constructor(data) {
    this.name = data.name;
    this.appMenu = data.appMenu;
    this.permissions = permissions;
  }
}

export default UserRole;
