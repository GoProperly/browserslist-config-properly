module.exports = {
  plugins: [
    ['@semantic-release/commit-analyzer', {
      releaseRules: [
        // All commits produce major releases (for v1)
        { release: 'major' },
      ],
    }],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
};
