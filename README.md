# React + Vite

Этот шаблон предоставляет минимальную настройку для работы с React в Vite с HMR и некоторыми правилами ESLint.

## Доступные плагины

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) использует [Babel](https://babeljs.io/) для Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) использует [SWC](https://swc.rs/) для Fast Refresh

## Установка и запуск проекта

1. Создайте проект с помощью Vite:

    ```sh
    npm create vite@latest
    ```

    На вопрос о названии проекта введите точку и нажмите Enter. Это означает, что вы хотите создать проект в текущей папке.

2. Следуйте инструкциям по созданию проекта.

3. Установите зависимости проекта командой:

    ```sh
    npm install
    ```

4. Запустите проект командой:

    ```sh
    npm run dev
    ```

## Видео створення React-проєкту за допомогою Vite

[Ссылка на видео](https://goitlmsstorage.b-cdn.net/237ad45d-9740-4c02-80c0-77d768eeea4d2024-06-13%2018-11-36.mp4)

## Линтинг

В проекте, созданном с помощью Vite, уже настроен линтинг - проверка качества кода. Чтобы получать визуальный фидбек от линтера в редакторе VSCode, нужно добавить расширение ESLint.

Части кода, которые не соответствуют стандартам качества, будут подчеркнуты желтым (предупреждение) или красным (ошибка) пунктиром. При наведении мыши на пунктир появится всплывающая подсказка с описанием проблемы.

## Настройка ESLint

Последним шагом будет небольшое изменение настроек линтера ESLint. В файле настроек [eslint.config.js](http://_vscodecontentref_/1) нужно отключить одно ненужное нам правило. Добавьте к блоку `rules` свойство `react/prop-types` со значением `0`.

Вы можете просто взять следующий код, который содержит нужные настройки, и заменить им содержимое файла [eslint.config.js](http://_vscodecontentref_/2):

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
