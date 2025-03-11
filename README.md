# React + Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) використовуємо [Babel](https://babeljs.io/) для Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) використовуємо [SWC](https://swc.rs/) для Fast Refresh

## Створення проєкту

  Для створення проєкту необхідно виконати кілька кроків:

- Створити порожній репозиторій (проєкт) на GitHub.
- Клонувати цей репозиторій на свій комп'ютер.
- Відкрити термінал і перейти до папки, де розташований склонований репозиторій.
- Запустити створення React-проєкту.

1. Створення проєкту за допомоги Vite:

    ```sh
    npm create vite@latest
    ```

    На запитання, як назвати проєкт, вводимо крапку і натискаєм Enter. Це означає, що ми хочемо створити проєкт у поточній папці.

2. Після створення проєкту слідуйте інструкціям.

3. Встановіть залежності проєкту командою:

    ```sh
    npm install
    ```

4. Запустіть проєкт командою:

    ```sh
    npm run dev
    ```

## Відео створення React-проєкту за допомогою Vite

[Відео](https://goitlmsstorage.b-cdn.net/237ad45d-9740-4c02-80c0-77d768eeea4d2024-06-13%2018-11-36.mp4)

## Налаштування ESLint

В проекте, созданном с помощью Vite, уже настроен линтинг - проверка качества кода. Чтобы получать визуальный фидбек от линтера в редакторе VSCode, нужно добавить [расширение ESLint.](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Частини коду, які не відповідають стандартам якості, будуть підкреслені жовтим (попередження) або червоним (помилка) пунктиром. При наведенні миші на пунктир з'явиться спливаюча підказка з описом проблеми.

<img src = "src/images/ESLint.png" alt ="ESLint" width =800px/>

## Налаштування ESLint

Останнім кроком буде невеличка зміна налаштувань лінтера ESLint. У файлі налаштувань `eslint.config.js` потрібно відключити одне непотрібне нам правило. Зокрема, додайте до блоку `rules` властивість `react/prop-types` значенням `0`.

Ви можете просто взяти наступний код, який містить потрібні налаштування, і замінити ним вміст файлу `eslint.config.js`:

```javascript
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/prop-types": 0,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
```

## Налаштування Vite

`vite.config.js`

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
  ],
  build: {
    sourcemap: true,
  },
});
```
