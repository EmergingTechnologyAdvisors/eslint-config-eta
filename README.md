# eslint-config-cloudreach

Cloudreach's ESLint configuration

This is the [sharable ESLint config](http://eslint.org/docs/developer-guide/shareable-configs.html) used in Cloudreach projects.

## Usage

### Default

The default ESLint configuration lints for ES5.

Install the default configuration package and `eslint` dependency:

```
npm i -S -D eslint-config-cloudreach eslint
```

Add the config to a `.eslintrc.json` file using the ESLint `extends` attribute:

```json
{
  "extends": "cloudreach"
}
```

### ES6

The ES6 ESLint configuration lints for ES6.

Install the default configuration package and `eslint` dependency:

```
npm i -S -D eslint-config-cloudreach eslint
```

Add the config to a `.eslintrc.json` file using the ESLint `extends` attribute:

```json
{
  "extends": "cloudreach/es6"
}
```

### React.js

The React.js eslint configuration lints for both ES6 and React.js.

Install the React.js configuration package and `eslint` dependency:

```
npm i -S -D eslint-config-cloudreach eslint-plugin-react eslint-plugin-babel eslint
```

Add the config to a `.eslintrc.json` file using the ESLint `extends` attribute:

```json
{
  "extends": "cloudreach/react"
}
```

## License
[MIT](https://github.com/cloudreach/eslint-config-cloudreach/blob/master/LICENSE)
