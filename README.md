# React Native Template

This repository contains a base template for React Native projects using TypeScript and Expo. It is modularly structured to facilitate development, maintenance, and scalability of the application.

## Project Structure

```
react-native-template/
├── src/
│   ├── api/
│   │   ├── config.ts        # API configuration
│   │   ├── endpoints.ts     # Endpoint definitions
│   │   ├── services/        # Specific services
│   │   │   ├── authService.ts
│   │   │   ├── userService.ts
│   │   │   └── index.ts      # Exports all services
│   │
│   ├── assets/              # Static resources
│   │   ├── fonts/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/          # Reusable components
│   │   ├── common/          # General components (buttons, modals, etc.)
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.styles.ts
│   │   │   │   └── index.ts
│   │   ├── forms/           # Form components
│   │   └── layout/          # Layout components
│   │
│   ├── navigation/          # Navigation setup
│   │   ├── types.ts         # Navigation parameter types
│   │   ├── routes.ts        # Route constants
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   ├── MainNavigator.tsx
│   │   ├── TabNavigator.tsx
│   │   └── navigationUtils.ts
│   │
│   ├── screens/             # Application screens
│   │   ├── auth/            # Authentication screens
│   │   │   ├── Login/
│   │   │   │   ├── LoginScreen.tsx
│   │   │   │   ├── LoginScreen.styles.ts
│   │   │   │   └── index.ts
│   │   ├── home/            # Home screens
│   │   ├── settings/        # Settings screens
│   │   └── index.ts         # Exports all screens
│   │
│   ├── store/               # Redux Toolkit configuration
│   │   ├── slices/          # Redux slices (state management)
│   │   │   ├── authSlice.ts
│   │   │   ├── userSlice.ts
│   │   │   └── ...
│   │   ├── hooks.ts         # Typed hooks for Redux
│   │   └── index.ts         # Store configuration
│   │
│   ├── styles/              # Global styles
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── theme.ts
│   │
│   ├── utils/               # General utilities
│   │   ├── validation.ts    # Validation functions
│   │   ├── storage.ts       # Local storage management
│   │   ├── helpers.ts       # Helper functions
│   │
│   ├── hooks/               # Custom hooks
│   │   ├── useAuth.ts       # Authentication hook
│   │   ├── useTheme.ts      # Theme hook
│   │
│   ├── types/               # Global type definitions
│   │   ├── api.types.ts
│   │   ├── user.types.ts
│   │   ├── navigation.types.ts
│   │   ├── index.ts
│   │
│   ├── constants/           # Configuration constants
│   │   ├── config.ts
│   │   ├── endpoints.ts
│   │
│   └── App.tsx              # Application entry point
│
├── tsconfig.json             # TypeScript configuration
├── .prettierrc               # Prettier configuration
├── index.ts                  # Main file
├── package.json              # Dependencies and scripts
└── README.md                 # Documentation
```

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/react-native-template.git
   ```
2. Install dependencies:
   ```sh
   cd react-native-template
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```

## Technologies Used

- **React Native** with **Expo**
- **TypeScript**
- **React Navigation** for navigation
- **Redux Toolkit** for state management
- **Styled Components** for modular styling
- **Axios** for HTTP requests

## Contributions

If you want to contribute to this project, please create a **fork**, make your changes, and submit a **pull request**.

## License

This project is licensed under the MIT License. You can find more details in the `LICENSE` file.
