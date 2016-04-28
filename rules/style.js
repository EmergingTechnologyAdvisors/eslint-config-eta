module.exports = {
  rules: {
    // enforce one true brace style
    'brace-style': [2, '1tbs', {'allowSingleLine': true }],
    // require camel case names
    'camelcase': [2, {'properties': 'never'}],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // enforce spacing after array element and functions
    'comma-spacing': [2, {'before':false, 'after': true}],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 2,
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 1,
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': [2, {'vars': 'local', 'args': 'none'}],
    // specify whether double or single quotes should be used
    'quotes': [2, 'single', 'avoid-escape'],
    // enforce spacing before and after semicolons
    'semi-spacing': [2, {'before': false, 'after': true}],
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'always'],
    // require constructors to use initial caps
    'new-cap': [0, {'capIsNew': true}]
  }
}
