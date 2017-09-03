module.exports = {
  'plugins': ['react'],
  'env': {
    'browser': true
  },

  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': [1, 'never'],
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // Prevent missing props validation in a React component definition
    'react/prop-types': 2,
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,
    // Prevent missing parentheses around multilines JSX
    'react/jsx-wrap-multilines': 2,
    // Enforce the closing bracket location for JSX multiline elements
    'react/jsx-closing-bracket-location': 2,
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': [1, { 'maximum': 5 }],
    // Prevent duplicate properties in JSX
    'react/jsx-no-duplicate-props': [2, { 'ignoreCase': true }]
  }
};
