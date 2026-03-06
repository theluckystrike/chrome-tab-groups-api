# chrome-tab-groups-api

[![npm version](https://img.shields.io/npm/v/chrome-tab-groups-api)](https://npmjs.com/package/chrome-tab-groups-api)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![CI Status](https://github.com/theluckystrike/chrome-tab-groups-api/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/chrome-tab-groups-api/actions)

A lightweight TypeScript wrapper around Chrome's tab groups API for Manifest V3 extensions. Zero dependencies. Provides a clean static interface for creating, updating, collapsing, and organizing tab groups, plus built-in presets for common grouping patterns like social media, email, shopping, and dev tabs.

INSTALLATION

```bash
npm install chrome-tab-groups-api
```

Your extension manifest needs the `tabGroups` and `tabs` permissions.

USAGE

```typescript
import { TabGroupManager, TabGroupPresets } from 'chrome-tab-groups-api';

// Create a group from specific tabs
const groupId = await TabGroupManager.create([tabId1, tabId2], 'Research', 'blue');

// Group all tabs by domain automatically
const domainGroups = await TabGroupManager.groupByDomain();

// Collapse or expand a group
await TabGroupManager.collapse(groupId);
await TabGroupManager.expand(groupId);

// Collapse every group in the current window
await TabGroupManager.collapseAll();

// Rename or recolor a group
await TabGroupManager.rename(groupId, 'Important');
await TabGroupManager.setColor(groupId, 'red');

// Add a single tab to an existing group
await TabGroupManager.addTab(tabId, groupId);

// Ungroup all tabs (removes the group container)
await TabGroupManager.ungroup(groupId);

// Close every tab in a group
await TabGroupManager.closeGroup(groupId);

// Get all groups
const allGroups = await TabGroupManager.getAll();
```

PRESETS

TabGroupPresets offers one-call grouping for common tab categories. Each method scans the current window and groups matching tabs together. Returns the group ID or null if no matching tabs were found.

```typescript
import { TabGroupPresets } from 'chrome-tab-groups-api';

await TabGroupPresets.groupSocial();   // facebook, twitter/x, instagram, linkedin, reddit, tiktok
await TabGroupPresets.groupEmail();    // gmail, outlook, yahoo mail, proton
await TabGroupPresets.groupShopping(); // amazon, ebay, etsy, aliexpress, walmart
await TabGroupPresets.groupDev();      // github, stackoverflow, npm, chrome dev docs, localhost
```

API REFERENCE

TabGroupManager (static methods)

| Method | Returns | What it does |
|--------|---------|--------------|
| `create(tabIds, title?, color?)` | `Promise<number>` | Creates a group from an array of tab IDs with optional title and color |
| `groupByDomain()` | `Promise<Map<string, number>>` | Groups all tabs in the current window by domain, skipping singletons |
| `collapse(groupId)` | `Promise<void>` | Collapses a group |
| `expand(groupId)` | `Promise<void>` | Expands a group |
| `collapseAll()` | `Promise<void>` | Collapses every group in the current window |
| `ungroup(groupId)` | `Promise<void>` | Removes all tabs from a group (dissolves the group) |
| `getAll()` | `Promise<TabGroup[]>` | Returns all tab groups |
| `rename(groupId, title)` | `Promise<void>` | Renames a group |
| `setColor(groupId, color)` | `Promise<void>` | Changes a group's color |
| `addTab(tabId, groupId)` | `Promise<void>` | Adds a single tab to an existing group |
| `closeGroup(groupId)` | `Promise<void>` | Closes every tab in the group |

Available colors: `grey`, `blue`, `red`, `yellow`, `green`, `pink`, `purple`, `cyan`, `orange`

TabGroupPresets (static methods)

| Method | Color | Matched domains |
|--------|-------|-----------------|
| `groupSocial()` | pink | facebook, twitter/x, instagram, linkedin, reddit, tiktok |
| `groupEmail()` | blue | gmail, outlook, yahoo mail, proton |
| `groupShopping()` | orange | amazon, ebay, etsy, aliexpress, walmart |
| `groupDev()` | green | github, stackoverflow, npm, chrome dev docs, localhost |

REQUIREMENTS

- Chrome 89+ (tab groups API support)
- Manifest V3 extension
- TypeScript 5.x (for development)

DEVELOPMENT

```bash
git clone https://github.com/theluckystrike/chrome-tab-groups-api.git
cd chrome-tab-groups-api
npm install
npm run build
npm test
```

CONTRIBUTING

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

LICENSE

MIT. See [LICENSE](LICENSE) for details.

---

Built by [theluckystrike](https://github.com/theluckystrike) | [zovo.one](https://zovo.one)
