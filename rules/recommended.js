module.exports = {
  // start with recommended rules from eslint
  'extends': 'eslint:recommended',
  'rules': {
    // override to allow console.log
    'no-console': 0,
    'comma-dangle' : 'error',
    'no-unsafe-finally': 'off',
    'no-native-reassign': 'off',
    'require-yied': 'error'
  }
}
