'use strict'

function activate(context) {
    return {
        extendMarkdownIt(md) {
            console.log("Activating markdown extras...")
            return md
                .use(require("markdown-it-attrs"))
                .use(require("markdown-it-deflist"))
                .use(require("markdown-it-html5-embed"), {
                    html5embed: {
                        useImageSyntax: true,
                        useLinkSyntax: true
                    }
                })
                .use(require("markdown-it-task-lists"));
        }
    };
}


exports.activate = activate;
