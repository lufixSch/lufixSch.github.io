# LufixSch Homepage

SvelteKit based Homepage with an overview of my projects and other ressources written by me. Visit the Website at [lufixsch.github.io](lufixsch.github.io)

Articles are generated from Markown files (Usually the README.md of the corresponding repository). The markdown content is automatically updated during build.

## Build

In order to build the website you need to have [uv](https://docs.astral.sh/uv/) installed for updating the markdown content.

After this you can build the website using `pnpm`.

```bash
pnpm run build
```

This will run the markdown update script as well as the build command for SvelteKit.

> NOTE: If the description in a Markdown file is missing the `update_articles` will try to make API calls to a lokal running LLM (Text generation WebUI)

## Develop

The development server for the website can be started by executing

```bash
pnpm run dev
```

> NOTE: This command will not call the `update_articles` skript. It has to be executed manually if markdown content needs to be updated during development.
