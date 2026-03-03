# chrome-tab-groups-api

[![npm version](https://img.shields.io/npm/v/chrome-tab-groups-api)](https://npmjs.com/package/chrome-tab-groups-api)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Chrome Web Extension](https://img.shields.io/badge/Chrome-Web%20Extension-orange.svg)](https://developer.chrome.com/docs/extensions/)
[![CI Status](https://github.com/theluckystrike/chrome-tab-groups-api/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/chrome-tab-groups-api/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/chrome-tab-groups-api?style=social)](https://github.com/theluckystrike/chrome-tab-groups-api)

> Manage tab groups in Chrome extensions.

**chrome-tab-groups-api** provides utilities to create and manage tab groups in Chrome extensions. Part of the Zovo Chrome extension utilities.

Part of the [Zovo](https://zovo.one) developer tools family.

## Overview

chrome-tab-groups-api provides utilities to create and manage tab groups.

## Features

- ✅ **Create Groups** - Create new tab groups
- ✅ **List Groups** - Get all tab groups
- ✅ **Update Groups** - Modify group properties
- ✅ **Delete Groups** - Remove tab groups
- ✅ **TypeScript Support** - Full type definitions included

## Installation

```bash
npm install chrome-tab-groups-api
```

## Usage

```javascript
import { TabGroups } from 'chrome-tab-groups-api';

// List all groups
const groups = await TabGroups.list();

// Create a new group
const group = await TabGroups.create('Work', { color: 'blue' });

// Add tab to group
await TabGroups.addTab(tabId, group.id);

// Move tab out of group
await TabGroups.removeTab(tabId);

// Update group
await TabGroups.update(group.id, { title: 'Important' });

// Delete group
await TabGroups.delete(group.id);
```

## API

### Methods

| Method | Description |
|--------|-------------|
| `TabGroups.list(windowId?)` | List all groups |
| `TabGroups.create(title, options?)` | Create a new group |
| `TabGroups.update(groupId, options)` | Update group properties |
| `TabGroups.delete(groupId)` | Delete a group |
| `TabGroups.addTab(tabId, groupId)` | Add tab to group |
| `TabGroups.removeTab(tabId)` | Remove tab from group |

## License

MIT — [Zovo](https://zovo.one)

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/groups-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/groups-feature`
7. **Submit** a Pull Request

## See Also

### Related Zovo Repositories

- [chrome-tab-discard](https://github.com/theluckystrike/chrome-tab-discard) - Tab discarding
- [chrome-tab-sort](https://github.com/theluckystrike/chrome-tab-sort) - Tab sorting
- [webext-tabs-overview](https://github.com/theluckystrike/webext-tabs-overview) - Tab dashboard

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions

Visit [zovo.one](https://zovo.one) for more information.
