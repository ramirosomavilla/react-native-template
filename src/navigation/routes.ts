export const ROUTES = {
  // Main Navigators
  AUTH: "Auth" as const,
  MAIN: "Main" as const,

  // Auth Routes
  LOGIN: "Login" as const,
  REGISTER: "Register" as const,
  FORGOT_PASSWORD: "ForgotPassword" as const,

  // Main Routes
  HOME: "Home" as const,
  PROFILE: "Profile" as const,
  SETTINGS: "Settings" as const,
  PRODUCT_DETAILS: "ProductDetails" as const,

  // Tab Routes
  TAB_HOME: "TabHome" as const,
  TAB_EXPLORE: "TabExplore" as const,
  TAB_NOTIFICATIONS: "TabNotifications" as const,
  TAB_PROFILE: "TabProfile" as const,
} as const;

// You can also export a type for use with navigation
export type AppRoutes = typeof ROUTES;
export type RouteNames = (typeof ROUTES)[keyof typeof ROUTES];
