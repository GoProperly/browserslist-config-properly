module.exports = {
    extends: ["@goproperly/eslint-config-properly-base"],
    rules: {
      // Override base config, we don't use Jest in this project
      'jest/no-deprecated-functions': 'off'
    }
};
