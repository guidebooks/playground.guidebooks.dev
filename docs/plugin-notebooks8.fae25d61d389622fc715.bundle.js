"use strict";(self.webpackChunk_guidebooks_playground=self.webpackChunk_guidebooks_playground||[]).push([[97427],{50872:(n,e,t)=>{t.r(e),t.d(e,{default:()=>o});const o='---\ntitle: Make Your Own Guidebook\nlayout:\n  1: left\n---\n\n# Authoring Kui Guidebooks\n\nKui interprets and displays markdown source. Kui has special\ninterpretation for a some of the common bits of markdown syntax,\nallowing you to author:\n\n- [Hints](#hints), using markdown blockquotes\n- [Expandable Sections](#expandable-sections), using syntax adopted\n  from [pymdown\'s Details\n  extension](https://facelessuser.github.io/pymdown-extensions/extensions/details/)\n- [Tabs](#tabs), using syntax adopted from [pymdown\'s Tabbed\n  extension](https://facelessuser.github.io/pymdown-extensions/extensions/tabbed/)\n- [Executable code blocks](#executable-code-blocks) that\n  provide sample output, and let the user re-execute the code in their\n  context\n- [Progress Step Lists](#progress-step-lists), that helps\n  guide the user through a list of code executions\n  \nIn addition, you can define the metadata and structure of your\nguidebook:\n\n- [Set a title](#setting-a-title) for your guidebook\n- Define the [_split layout_](#creating-a-split-layout) for your\n  guidebook\n\n---\n\n## Hints\n\nWhen Kui encounters a `>` that block quotes a region of text, Kui will\nrender this using a callout. For example:\n\n> This is a hint!\n> - It can have fancy rendering inside.\n\n## Expandable Sections\n\nSections starting with a `??? tip "Section name"` will be rendered as\nan expandable section, with the tab content indented by at least 4\nspaces. When using `???+`, the section will be expanded by default.\n\n??? tip "Example Expandable Section"\n\n    **Warning**: due to the vagaries of the Markdown syntax, make sure to\n    have a newline separating the section start and section content.\n\n## Tabs\n\nSections starting with a `=== "Tab name"` will be rendered as tabs,\nwith the tab content indented by at least 4 spaces. \n\n**Warning**: due to the vagaries of the Markdown syntax, make sure to\nhave a newline separating the tab start and tab content, and also\nbetween tabs.\n\n???+ tip "Tab Example"\n\n    > Note how we are using tabs and hints nested inside of an expandable section!\n\n    === "Output"\n        \n        === "Tab 1"\n    \n            Markdown **content**.\n\n            Multiple paragraphs.\n\n        === "Tab 2"\n\n            More Markdown **content**.\n\n            - list item a\n            - list item b\n\n    === "Markdown"\n\n        ```\n        === "Tab 1"\n\n            Markdown **content**.\n\n            Multiple paragraphs.\n\n        === "Tab 2"\n\n            More Markdown **content**.\n\n            - list item a\n            - list item b\n        ```\n\n## Executable Code Blocks\n\nTo make a code block executable, make sure to specify a language of\neither `bash`, `sh`, or `shell`.\n\nInside a code blocks, you may define metadata, such as an identifier\nwhen linking code blocks into [Progress Step\nLists](#progress-step-lists).\n\n```bashy\n---\nid: my-first-command\n---\necho hello\n```\n\n\x3c!-- Hello viewers of the source to this guidebook! Note that we have\nused a language of `bashy` here, to prevent Kui from rendering this as\nan executable code block. --\x3e\n\nWhen given one of those executable languages (e.g. if your code block\nstarts with \\`\\`\\`bash), Kui will display this as a _executable_ code\nblock with the given sample output. Here is that same text, but now\nrepeated as a normal code block:\n\n```bash\n---\nid: my-first-command\n---\necho hello\n```\n\nAnd another example:\n\n```bash\n---\nid: my-second-command\nresponse: world\n---\necho world\n```\n\nThe `id` part is used to help you define a "progress stepper"\nlist. When a referenced code block is executed, the progress stepper\nwill update to show the user the status of that code blocks\'\nexecution.\n\n## Progress Step Lists\n\nWhen using this syntax for lists:\n\n```\n- **[Step 1](#kui-link-my-first-command)** *blank* This should echo hello.\n- **[Step 2](#kui-link-my-second-command)** *blank* This should echo world.\n```\n\nyou will get a progress step list like this:\n\n- **[Step 1](#kui-link-my-first-command)** _blank_ This should echo hello.\n- **[Step 2](#kui-link-my-second-command)** _blank_ This should echo world.\n\nNote the use of the `my-first-command` and `my-second-command`\ncross-reference identifiers.\n\n## Setting a Title\n\nIn your markdown source, add this to the _frontmatter_, at the top. If\nyou already have frontmatter, add only the `title:` line.\n\n```yaml\n---\ntitle: My title\n---\n\n```\n\n## Creating a Split Layout\n\nIn your markdown source, use section breaks `---` to mark the\nboundaries between splits. Then, define a `layout` structure in your\nfrontmatter, which maps section indices (starting from 1) to the\ndesired split location. For example:\n\n```yaml\n---\nlayout:\n  1: left\n  2: bottom\n---\n\n```\n'}}]);