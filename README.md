# Properly Browserslist Configuration

[Browserslist](https://github.com/browserslist/browserslist) [shareable configuration](https://github.com/browserslist/browserslist#shareable-configs) used for Properly websites.

There are two exports that can be used separately:
- `@goproperly/browserslist-config-properly/production`
- `@goproperly/browserslist-config-properly/development`

E.g. in `package.json`:
WARNING: @babel/preset-env doesnot support environment-based 
```
  "browserslist": [
    "extends @goproperly/browserslist-config-properly/production"
  ],
```
or:
```
  "browserslist": [
    "extends @goproperly/browserslist-config-properly"
  ],
```
(defaults to the production config)

## Use
Basically:
1. Make sure your project is [configured to use the GitHub Package Registry](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages#installing-a-package)
1. Install this package:

    `npm install --save-dev @goproperly/browserslist-config-properly`
1. Update your project's Browserslist configuration to extend this config, as in the examples above.
