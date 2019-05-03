---
title: "Dependencies"
date: 2019-05-03T14:43:25+08:00
weight: 2
---

## Managing Dependencies in Open IAS Scoreboard

The Open IAS Scoreboard project uses [yarn](https://yarnpkg.com/en/) to handle dependencies.

### Adding a Dependency


```bash
# Run this command to add a dependency from the project root
yarn add dependency-to-add
```

---

### Updating All Dependencies

The following command will upgrade all dependencies

```bash
# Run this command to upgrade all dependencies from the project root
yarn upgrade
```
This will usually be done early in each release cycle by the project maintainer.