react-native-template/
├── src/
│ ├── api/
│ │ ├── config.ts # Configuración de APIs
│ │ ├── endpoints.ts # Definición de endpoints
│ │ └── services/ # Servicios específicos
│ │ ├── authService.ts
│ │ ├── userService.ts
│ │ └── index.ts # Exporta todos los servicios
│ │
│ ├── assets/ # Recursos estáticos
│ │ ├── fonts/
│ │ ├── images/
│ │ └── icons/
│ │
│ ├── components/
│ │ ├── common/
│ │ │ ├── Button/
│ │ │ │ ├── Button.tsx
│ │ │ │ ├── Button.styles.ts
│ │ │ │ └── index.ts
│ │ │ └── ...
│ │ ├── forms/
│ │ └── layout/
│ │
│ ├── navigation/
│ │ ├── types.ts # Tipos para parámetros de navegación
│ │ ├── routes.ts # Constantes de rutas
│ │ ├── AppNavigator.tsx
│ │ ├── AuthNavigator.tsx
│ │ ├── MainNavigator.tsx
│ │ ├── TabNavigator.tsx
│ │ └── navigationUtils.ts
│ │
│ ├── screens/
│ │ ├── auth/
│ │ │ ├── Login/
│ │ │ │ ├── LoginScreen.tsx
│ │ │ │ ├── LoginScreen.styles.ts
│ │ │ │ └── index.ts
│ │ │ └── ...
│ │ ├── home/
│ │ ├── settings/
│ │ └── index.ts # Exporta todas las pantallas
│ │
│ ├── store/
│ │ ├── slices/ # Redux Toolkit slices
│ │ │ ├── authSlice.ts
│ │ │ ├── userSlice.ts
│ │ │ └── ...
│ │ ├── hooks.ts # Hooks tipados para Redux
│ │ └── index.ts # Configuración del store
│ │
│ ├── styles/
│ │ ├── colors.ts
│ │ ├── typography.ts
│ │ ├── spacing.ts
│ │ └── theme.ts
│ │
│ ├── utils/
│ │ ├── validation.ts
│ │ ├── storage.ts
│ │ └── helpers.ts
│ │
│ ├── hooks/
│ │ ├── useAuth.ts
│ │ └── useTheme.ts
│ │
│ ├── types/ # Definiciones de tipos globales
│ │ ├── api.types.ts
│ │ ├── user.types.ts
│ │ ├── navigation.types.ts
│ │ └── index.ts
│ │
│ ├── constants/
│ │ ├── config.ts
│ │ └── endpoints.ts
│ │
│ └── App.tsx
│
├── tsconfig.json
├── .prettierrc
├── index.ts
├── package.json
└── README.md
