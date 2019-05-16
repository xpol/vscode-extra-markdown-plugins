'use strict'

const mediaOptions = {
    audioAttrs: 'controls preload="none" width="320"',
    videoAttrs: 'controls preload="metadata" width="320" height="240"'
}

function activate(context) {
    const { html5Media } = require('markdown-it-html5-media');

    return {
        extendMarkdownIt(md) {
            console.log("Activating markdown extras...")
            return md
                .use(require("markdown-it-attrs"))
                .use(require("markdown-it-deflist"))
                .use(html5Media, mediaOptions)
                .use(require("markdown-it-task-lists"));
        }
    }
}

exports.activate = activate;
