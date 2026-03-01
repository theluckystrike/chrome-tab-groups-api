/**
 * Tab Group Presets — Common grouping patterns
 */
import { TabGroupManager } from './groups';

export class TabGroupPresets {
    /** Group: Social Media tabs */
    static async groupSocial(): Promise<number | null> {
        const domains = ['facebook.com', 'twitter.com', 'x.com', 'instagram.com', 'linkedin.com', 'reddit.com', 'tiktok.com'];
        return this.groupByDomains('Social', 'pink', domains);
    }

    /** Group: Email tabs */
    static async groupEmail(): Promise<number | null> {
        const domains = ['mail.google.com', 'outlook.live.com', 'mail.yahoo.com', 'proton.me'];
        return this.groupByDomains('Email', 'blue', domains);
    }

    /** Group: Shopping tabs */
    static async groupShopping(): Promise<number | null> {
        const domains = ['amazon.com', 'ebay.com', 'etsy.com', 'aliexpress.com', 'walmart.com'];
        return this.groupByDomains('Shopping', 'orange', domains);
    }

    /** Group: Dev tabs */
    static async groupDev(): Promise<number | null> {
        const domains = ['github.com', 'stackoverflow.com', 'npmjs.com', 'developer.chrome.com', 'localhost'];
        return this.groupByDomains('Dev', 'green', domains);
    }

    private static async groupByDomains(title: string, color: string, domains: string[]): Promise<number | null> {
        const tabs = await chrome.tabs.query({ currentWindow: true });
        const ids = tabs.filter((t) => t.url && t.id && domains.some((d) => t.url!.includes(d))).map((t) => t.id!);
        if (ids.length === 0) return null;
        return TabGroupManager.create(ids, title, color as any);
    }
}
