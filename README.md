# chrome-tab-groups-api — Tab Groups for Chrome Extensions

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **Built by [Zovo](https://zovo.one)**

**Chrome Tab Groups API wrapper** — create groups, auto-group by domain, collapse/expand, color code, and presets (social, email, dev, shopping).

## 🚀 Quick Start
```typescript
import { TabGroupManager, TabGroupPresets } from 'chrome-tab-groups-api';
await TabGroupManager.groupByDomain();
await TabGroupPresets.groupSocial();
await TabGroupManager.collapseAll();
```

## 📄 License
MIT — [Zovo](https://zovo.one)
