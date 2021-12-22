# Exemplo React Hooks + Material UI

Exemplo de projeto React com Material UI e outros componentes usuais

## Guidelines gerais

- Usar o plugin editor-config para manter um padrão de código
- Se possível, adotar caminhos absolutos ao importar componentes (necessita jsconfig.json)
- NÃO usar moment.js para tratar data/hora. Usar recursos nativos do Javascript
- Usar aspas simples (') como delimitador de string no código JS
- Usar aspas duplas (") como delimitador dos valores dos atributos em tags HTML/Componentes
- NÃO usar ponto e vírugla (;) no término das linhas

## Funcionais

- IDs são gerados __SEMPRE__ pelo backend da aplicação
- IDs públicos que são trafegados pela rede serão UUIDs
- Aplicação backend terão IDs internos numéricos

## Criação da estrutura inicial do projeto

```
npx create-react-app manager-ui

cd manager-ui

npm install @reduxjs/toolkit react-redux

npm install react-router-dom

npm install react-i18next

npm install axios

npm install --save @material-ui/core \
@emotion/react \
@emotion/styled \
@fontsource/roboto \
@material-ui/icons \
@mui/material \
@mui/icons-material

npm install --save @fortawesome/fontawesome-svg-core \
@fortawesome/free-solid-svg-icons \
@fortawesome/free-regular-svg-icons \
@fortawesome/react-fontawesome

npm install --save-dev eslint standard eslint-plugin-react eslint-plugin-react-hooks
```

Criar os seguintes arquivos:
```
jsconfig.json
.editorconfig
.eslintrc.json
```

Sugestão para estrutura das páginas CRUD genérica

```
project
+---pages
    +---<PAGINA>
        |   index.js
        |   list.js
        |   form.js
```

## Links úteis

https://medium.com/geekculture/react-js-architecture-features-folder-structure-design-pattern-70b7b9103f22

https://mui.com/getting-started/usage/

https://mui.com/getting-started/templates/

https://mui.com/components/material-icons/


---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
