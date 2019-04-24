---
title: "ESLint"
date: 2019-04-23T22:41:00+08:00
---

## Using ESLint to Check Your Code

Once you have added your modifications, from the root of the project, run
```
yarn test
```
to run ESLint to check the quality of your code.

The command will list any problems or potential issues it finds. Please avoid potential issues if possible but if you cannot get rid of them, you can leave them.

If a problem is found, the command will list them and exit with a non zero exit code. Please fix the problems that are listed. If any of these problems exist, your contribution will not pass Travis CI check and will not be merged.
