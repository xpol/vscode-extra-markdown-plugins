'use strict'

const h5embedOptions = {
    html5embed: {
        useImageSyntax: true,
        useLinkSyntax: true,
        isAllowedHttp: true,
        attributes: {
            audio: 'controls preload="metadata" width="320"',
            video: 'controls preload="metadata" width="320" height="240"'
        }
    }
}

function activate(context) {
    return {
        extendMarkdownIt(md) {
            console.log("Activating markdown extras...")
            return md
                .use(require("markdown-it-attrs"))
                .use(require("markdown-it-deflist"))
                .use(require("markdown-it-html5-embed"), h5embedOptions)
                .use(require("markdown-it-task-lists"));
        }
    }
}


exports.activate = activate;
