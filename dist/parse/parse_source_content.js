"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseSourceContent = void 0;
class ParseSourceContent {
    constructor(sourceContent) {
        this.titles_to_remove = ['See also', 'References', 'Further reading', 'External links', 'Notes and references', 'Bibliography', 'Notes', 'Cited sources'];
        this.content = sourceContent;
    }
    parse() {
        let dataAfterRemovingUnWantedBlocks = this.removeSectionsByTitle(this.content);
        let afterSanitized = this.sanitizeBlocks(dataAfterRemovingUnWantedBlocks);
        return JSON.stringify(afterSanitized);
    }
    removeSectionsByTitle(data) {
        let dataAfterRemoving = [];
        for (let elem of data) {
            if (elem.block_type == 'heading' && this.titles_to_remove.includes(elem.content)) {
                continue;
            }
            if (elem.children) {
                elem.children = this.removeSectionsByTitle(elem.children);
            }
            dataAfterRemoving.push(elem);
        }
        return dataAfterRemoving;
    }
    sanitizeWikiContent(content) {
        // Remove newline characters
        content = content.replace(/\\n/g, ' ');
        // Remove internal link references, keeping only the link text
        // Pattern explanation: [[link|text|index|wiki]] --> text
        content = content.replace(/\[\[.*?\|(.*?)\|.*?\|wiki\]\]/g, '$1');
        // Remove external links, keeping only the link text
        // Pattern explanation: [url text] --> text
        content = content.replace(/\[http[s]?:\/\/[^\s]+ ([^\]]+)\]/g, '$1');
        // Remove Markdown link references, keeping only the link text
        // Pattern explanation: ![link text](url) --> link text
        content = content.replace(/\!\[([^\]]+)\]\([^\)]+\)/g, '$1');
        return content;
    }
    sanitizeBlocks(blocks) {
        let sanitizedBlocks = [];
        blocks.forEach(block => {
            let sanitizedBlock = {};
            for (let key in block) {
                let value = block[key];
                if (typeof value === 'string') {
                    sanitizedBlock[key] = this.sanitizeWikiContent(value);
                }
                else if (Array.isArray(value)) {
                    sanitizedBlock[key] = this.sanitizeBlocks(value);
                }
                else {
                    sanitizedBlock[key] = value;
                }
            }
            sanitizedBlocks.push(sanitizedBlock);
        });
        return sanitizedBlocks;
    }
}
exports.ParseSourceContent = ParseSourceContent;
