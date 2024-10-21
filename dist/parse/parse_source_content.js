"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseSourceContent = void 0;
class ParseSourceContent {
    constructor(sourceContent) {
        /// Format of Content
        // content: {
        //     title: source.title,
        //     headings: source.headings,
        //     content: source.content,
        //     fields: fields,
        //     taxonomy: source.source_taxonomy,
        //     type: source.source_type
        //   },
        this.titles_to_remove = ['See also', 'References', 'Further reading', 'External links', 'Notes and references', 'Bibliography', 'Notes', 'Cited sources'];
        this.block_types_toremove = ['table', 'empty_line'];
        this.content = sourceContent;
    }
    parseData() {
        let sourceType = this.content.type;
        let afterSanitized;
        if (sourceType == "video") {
            afterSanitized = this.parseVideoContent(this.content.content);
        }
        else {
            let dataAfterRemovingUnWantedBlocks = this.removeSectionsByTitle(this.content.content);
            afterSanitized = this.sanitizeBlocks(dataAfterRemovingUnWantedBlocks);
        }
        return {
            type: this.content.type,
            title: this.content.title,
            content: afterSanitized,
            headings: this.content.headings,
            taxonomy: this.content.taxonomy,
        };
    }
    removeSectionsByTitle(data) {
        let dataAfterRemoving = [];
        for (let elem of data) {
            if (elem.block_type == 'heading' && this.titles_to_remove.includes(elem.content)) {
                continue;
            }
            /// remove unwanted blcok types , for now `table` and `empty_line`
            if (this.block_types_toremove.includes(elem.block_type)) {
                continue;
            }
            if (elem.children) {
                elem.children = this.removeSectionsByTitle(elem.children);
            }
            dataAfterRemoving.push(elem);
        }
        return dataAfterRemoving;
    }
    sanitizeTextContent(content) {
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
        blocks = blocks.filter((item) => item.block_type != 'table');
        blocks.forEach(block => {
            let sanitizedBlock = {};
            for (let key in block) {
                let value = block[key];
                if (typeof value === 'string') {
                    sanitizedBlock[key] = this.sanitizeTextContent(value);
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
    parseVideoContent(data) {
        let finalChapters = [];
        // let cleanedData = this.cleanTranscript(timeCodes);
        data.forEach((e) => {
            let combinedContent = this.cleanTranscript(e);
            finalChapters.push({
                "startTime": e.startTime,
                "endTime": e.endTime,
                "content": combinedContent,
                "title": e.content
            });
        });
        return finalChapters;
    }
    // remove content inside [] which denotes non-speech sounds
    isNonSpeech(content) {
        // Check if the content is non-speech (enclosed in square brackets).
        return /^\[.*\]$/.test(content.trim());
    }
    // remove non-essential content
    cleanTranscript(data) {
        var _a;
        let finalContent = '';
        let children = (_a = data.children) !== null && _a !== void 0 ? _a : [];
        children.forEach((e) => {
            let content = (e.content || "").trim();
            if (this.isNonSpeech(content))
                return;
            content = content.replace(/\s+/g, ' ');
            finalContent += content;
        });
        return finalContent;
    }
    // collapse the timecode to 30 seconds
    collapseTimeCodes(data, maxDuration = 30.0) {
        // Collapse time codes into buckets of approximately maxDuration seconds.
        const collapsedData = [];
        let bucketStartTime = null;
        let bucketEndTime = null;
        let bucketContent = [];
        let bucketDuration = 0.0;
        data.forEach(entry => {
            const startTime = entry.start_time;
            const endTime = entry.end_time;
            const content = entry.content;
            const entryDuration = endTime - startTime;
            if (bucketStartTime === null) {
                // Start a new bucket
                bucketStartTime = startTime;
                bucketEndTime = endTime;
                bucketContent.push(content);
                bucketDuration = entryDuration;
            }
            else if ((bucketDuration + entryDuration) <= maxDuration) {
                // Add to current bucket
                bucketEndTime = endTime;
                bucketContent.push(content);
                bucketDuration += entryDuration;
            }
            else {
                // Close current bucket and start a new one
                const collapsedEntry = {
                    start_time: bucketStartTime,
                    end_time: bucketEndTime,
                    content: bucketContent.join(' ')
                };
                collapsedData.push(collapsedEntry);
                // Start new bucket with current entry
                bucketStartTime = startTime;
                bucketEndTime = endTime;
                bucketContent = [content];
                bucketDuration = entryDuration;
            }
        });
        // Add the last bucket if it exists
        if (bucketContent.length > 0) {
            const collapsedEntry = {
                start_time: bucketStartTime,
                end_time: bucketEndTime,
                content: bucketContent.join(' ')
            };
            collapsedData.push(collapsedEntry);
        }
        return collapsedData;
    }
}
exports.ParseSourceContent = ParseSourceContent;
