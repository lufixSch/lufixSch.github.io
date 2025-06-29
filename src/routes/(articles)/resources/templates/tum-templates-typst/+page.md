---
description: TUM Templates for Typst. Based on the LaTex4EI templates.
image: null
last_update: '2025-06-26T16:12:31.404292+00:00'
layout: article
repository: https://github.com/lufixSch/tum-templates-typst
repository_icon: github
status: wip
title: TUM Templates (Typst)
update: https://raw.githubusercontent.com/lufixSch/tum-templates-typst/refs/heads/main/README.md
---

# TUM Templates for Typst

__Inoficial__ TUM Templates for Typst. Based on the [LaTex4EI](https://gitlab.lrz.de/latex4ei/tum-templates) templates.

## Installation

Clone this repository into `{data-dir}/typst/packages/{namespace}/tum-templates/{version}`.

```bash
git clone https://github.com/lufixSch/tum-templates-typst.git {data-dir}/typst/packages/{namespace}/tum-templates/{version}
```

Here `{data-dir}` is the directory for local Typst packages:

- `$XDG_DATA_HOME` or `~/.local/share` on Linux
- `~/Library/Application Support` on macOS
- `%APPDATA%` on Windows

`{namespace}` is the namespace you choose. In the following the `local` namespace is used. The package `{version}` can be obtained from the `typst.toml` file

Afterwards the package can be imported:

```
#import "@local/tum-templates:0.3.0": *

...
```

### Typst WebAPP

Unfortunately this package is not yet available as an official Typst package. Therefore it can not be imported/installed in the Typst webapp. The easiest workaround is, to upload the `utility.typ`, the `.typ` file corresponding to the required template and the `assets` to your project.

## Usage

Currently, the following templates are supported:

- Article (`tum-article`): Generic scientific article
- Beamer (`tum-beamer`): Presentation slides based on the [touying](https://typst.app/universe/package/touying) package
- Cheat-Sheet (`tum-sheat-sheet`): Cheat-sheet for exams

The template is initialized as follows. Arguments change depending on the specific template.

```
#import "@local/tum-templates:0.3.0": *

#show template.with(...)
```

### Utility

The package also provides the following utility functions and variables:

- `tum-text-font`: The font family used in tum documents
- `tum-blue`: The TUM Brand Color
- `tum-info-block`: Builds the TUM affiliation block often visible at the top of a document
- `tum-author`: Builds an Author object as expected by some templates (for example `tum-article`)
- `tum-emphasize`: Emphasize text by creating a bordered block with colors depending on the severity