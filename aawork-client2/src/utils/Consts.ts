export const DEFAULT_USER_AUTH = { userid: 0, email: "", token: "" };

export enum UserRoles {
    superAdmin = 'superAdmin',
    admin = 'admin',
    nonAdmin = 'nonAdmin'
}

export enum AuthRoutes {
    home = '/home',
    dashboard = '/dashboard',
    preferences = '/preferences',
    account= '/account'
}

export enum NonAuthRoutes {
    landing = '/',
    login = '/signin',
    signup = '/signup',
    support = '/support',
    account = '/account'
}

// Some views will be for admins only, some for users(non-admins)
// and then the rest is available for all roles
const userRoles = {
    admins: [String(UserRoles.superAdmin), String(UserRoles.admin)],
    users: [String(UserRoles.nonAdmin)],
    all: [
        String(UserRoles.superAdmin),
        String(UserRoles.admin),
        String(UserRoles.nonAdmin)
    ]
}