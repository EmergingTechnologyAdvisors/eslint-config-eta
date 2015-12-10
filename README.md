# eslint-config-eta

Emerging Technology Advisors ESLint Configuration

This is the [sharable ESLint config](http://eslint.org/docs/developer-guide/shareable-configs.html) used in ETA projects.

## Usage

### Default

The default ESLint configuration lints for ES5.

Install the default configuration package and `eslint` dependency:

```
npm install --save-dev eslint-config-eta eslint
```

Add the config to a `.eslintrc` file using the ESLint `extends` attribute:

```json
{
  "extends": "eta"
}
```

### ES6

The ES6 ESLint configuration lints for ES6.

Install the default configuration package and `eslint` dependency:

```
npm install --save-dev eslint-config-eta eslint
```

Add the config to a `.eslintrc` file using the ESLint `extends` attribute:

```json
{
  "extends": "eta/es6"
}
```

### React.js

The React.js eslint configuration lints for both ES6 and React.js.

Install the React.js configuration package and `eslint` dependency:

```
npm install --save-dev eslint-config-eta eslint-plugin-react eslint-plugin-babel eslint
```

Add the config to a `.eslintrc` file using the ESLint `extends` attribute:

```json
{
  "extends": "eta/react"
}
```

## License
[MIT](https://github.com/EmergingTechnologyAdvisors/eslint-config-eta/blob/master/LICENSE)
