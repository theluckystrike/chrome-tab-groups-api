/**
 * Tab Group Manager — Create, update, and organize tab groups
 */
type GroupColor = 'grey' | 'blue' | 'red' | 'yellow' | 'green' | 'pink' | 'purple' | 'cyan' | 'orange';

export class TabGroupManager {
    /** Create a group from tab IDs */
    static async create(tabIds: number[], title?: string, color?: GroupColor): Promise<number> {
        const groupId = await chrome.tabs.group({ tabIds });
        if (title || color) await chrome.tabGroups.update(groupId, { title, color });
        return groupId;
    }

    /** Group tabs by domain */
    static async groupByDomain(): Promise<Map<string, number>> {
        const tabs = await chrome.tabs.query({ currentWindow: true });
        const domains = new Map<string, number[]>();
        for (const tab of tabs) {
            if (!tab.url || !tab.id) continue;
            try { const d = new URL(tab.url).hostname.replace('www.', ''); const list = domains.get(d) || []; list.push(tab.id); domains.set(d, list); } catch { }
        }
        const result = new Map<string, number>();
        const colors: GroupColor[] = ['blue', 'red', 'green', 'yellow', 'purple', 'cyan', 'orange', 'pink'];
        let ci = 0;
        for (const [domain, tabIds] of domains) {
            if (tabIds.length < 2) continue;
            const groupId = await this.create(tabIds, domain, colors[ci % colors.length]);
            result.set(domain, groupId);
            ci++;
        }
        return result;
    }

    /** Collapse a group */
    static async collapse(groupId: number): Promise<void> { await chrome.tabGroups.update(groupId, { collapsed: true }); }

    /** Expand a group */
    static async expand(groupId: number): Promise<void> { await chrome.tabGroups.update(groupId, { collapsed: false }); }

    /** Collapse all groups */
    static async collapseAll(): Promise<void> {
        const groups = await chrome.tabGroups.query({});
        for (const g of groups) await this.collapse(g.id);
    }

    /** Ungroup all tabs in a group */
    static async ungroup(groupId: number): Promise<void> {
        const tabs = await chrome.tabs.query({ groupId });
        for (const tab of tabs) { if (tab.id) await chrome.tabs.ungroup(tab.id); }
    }

    /** Get all groups */
    static async getAll(): Promise<chrome.tabGroups.TabGroup[]> { return chrome.tabGroups.query({}); }

    /** Rename a group */
    static async rename(groupId: number, title: string): Promise<void> { await chrome.tabGroups.update(groupId, { title }); }

    /** Set group color */
    static async setColor(groupId: number, color: GroupColor): Promise<void> { await chrome.tabGroups.update(groupId, { color }); }

    /** Move tab to group */
    static async addTab(tabId: number, groupId: number): Promise<void> { await chrome.tabs.group({ tabIds: [tabId], groupId }); }

    /** Close all tabs in a group */
    static async closeGroup(groupId: number): Promise<void> {
        const tabs = await chrome.tabs.query({ groupId });
        const ids = tabs.map((t) => t.id).filter((id): id is number => !!id);
        if (ids.length) await chrome.tabs.remove(ids);
    }
}
