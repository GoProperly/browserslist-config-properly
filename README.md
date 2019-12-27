# Properly Browserslist Configuration

[Browserslist](https://github.com/browserslist/browserslist) [shareable configuration](https://github.com/browserslist/browserslist#shareable-configs) used for Properly websites.

There are two exports that can be used separately:
- `@goproperly/browserslist-config-properly/production`
- `@goproperly/browserslist-config-properly/development`

E.g. in `package.json`:
```
  "browserslist": {
    "production": [
      "extends @goproperly/browserslist-config-properly/production"
    ],
    "development": [
      "extends @goproperly/browserslist-config-properly/development"
    ]
  },
```
or:
```
  "browserslist": [
    "extends @goproperly/browserslist-config-properly"
  ],
```
(defaults to the production config)

## Use
See https://github.com/GoProperly/template-web-app/pull/61/files for an example. Basically:
1. Make sure your project is [configured to use the GitHub Package Registry](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#installing-a-package)
1. Install this package:

    `npm install --save-dev @goproperly/browserslist-config-properly`
1. Update your project's Browserslist configuration to extend this config, as in the examples above.
