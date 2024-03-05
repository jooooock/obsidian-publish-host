import {jsonResponse} from "../utils/index.ts";

export function options(_: Request) {
    return jsonResponse({
        "siteName": "cc's docs",
        "indexFile": "hello",
        "defaultTheme": "dark",
        "showThemeToggle": true,
        "showHoverPreview": true,
        "strictLineBreaks": true,
        "showSearch": true,
        "showOutline": true,
        "showBacklinks": true
    })
}

export function cache() {
    return jsonResponse({
        "Recording 20240226150635.webm": null,
        "Recording 20240226133548.webm": null,
        "Recording 20240226133434.webm": null,
        "slide demo.md": {},
        "hello.md": {
            "links": [
                {
                    "link": "View",
                    "displayText": "View",
                    "pos": [
                        27,
                        0,
                        340,
                        27,
                        8,
                        348
                    ]
                }
            ],
            "embeds": [
                {
                    "link": "Recording 20240226133434.webm",
                    "displayText": "Recording 20240226133434.webm",
                    "pos": [
                        17,
                        0,
                        171,
                        17,
                        34,
                        205
                    ]
                },
                {
                    "link": "Recording 20240226133548.webm",
                    "displayText": "Recording 20240226133548.webm",
                    "pos": [
                        19,
                        0,
                        207,
                        19,
                        34,
                        241
                    ]
                },
                {
                    "link": "Recording 20240226133548.webm",
                    "displayText": "Recording 20240226133548.webm",
                    "pos": [
                        21,
                        0,
                        243,
                        21,
                        34,
                        277
                    ]
                },
                {
                    "link": "Recording 20240226133548.webm",
                    "displayText": "Recording 20240226133548.webm",
                    "pos": [
                        23,
                        0,
                        279,
                        23,
                        34,
                        313
                    ]
                }
            ],
            "headings": [
                {
                    "heading": "2级标题45",
                    "level": 2,
                    "pos": [
                        6,
                        0,
                        53,
                        6,
                        9,
                        62
                    ]
                },
                {
                    "heading": "3级标题45",
                    "level": 3,
                    "pos": [
                        10,
                        0,
                        76,
                        10,
                        10,
                        86
                    ]
                }
            ],
            "frontmatter": {
                "dg-publish": true,
                "dg-home": true
            },
            "frontmatterLinks": [],
            "frontmatterPos": [
                0,
                0,
                0,
                3,
                3,
                38
            ]
        },
        "View.md": {},
        "Core Plugins/Untitled.md": {
            "headings": [
                {
                    "heading": "Hello, *World*!",
                    "level": 2,
                    "pos": [
                        0,
                        0,
                        0,
                        0,
                        18,
                        18
                    ]
                }
            ]
        },
        "Core Plugins/Audio Recorder.md": {
            "headings": [
                {
                    "heading": "插件初始化",
                    "level": 2,
                    "pos": [
                        1,
                        0,
                        1,
                        1,
                        8,
                        9
                    ]
                },
                {
                    "heading": "录制的伪代码",
                    "level": 2,
                    "pos": [
                        5,
                        0,
                        41,
                        5,
                        9,
                        50
                    ]
                },
                {
                    "heading": "参考资料",
                    "level": 2,
                    "pos": [
                        24,
                        0,
                        462,
                        24,
                        7,
                        469
                    ]
                }
            ],
            "listItems": [
                {
                    "parent": -26,
                    "pos": [
                        26,
                        0,
                        471,
                        26,
                        112,
                        583
                    ]
                }
            ]
        }
    })
}
