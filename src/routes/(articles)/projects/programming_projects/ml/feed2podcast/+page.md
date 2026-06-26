---
description: Generate Podcasts from text based RSS feeds using TTS.
last_update: '2026-06-26T19:53:44.407143+00:00'
layout: project
repository: https://github.com/lufixSch/feed2podcast
repository_icon: github
status: wip
title: Feed2Podcast
update: https://raw.githubusercontent.com/lufixSch/feed2podcast/main/README.md
---

# Feed2Podcast

Generate a Podcast from text based RSS feeds using TTS

With this tool you can generate a podcast feed based on a regular text based RSS feed, where the audio is generated (on demand) using any OpenAI compatible TTS server.

Generated podcasts are cached to reduce response time for recurring requests.

> [!NOTE]
> If you are familiar with tools like [RSSBridge](https://github.com/RSS-Bridge/rss-bridge). It is similar to that just from RSS Feed to Podcast.

## Usage

Either run the `feed2podcast` binary or deploy the server using docker (see `docker-compose.yml`). Don't forget to configure it to your needs using environment variables or command line arguments (see `feed2podcast --help` for all options).

Next go to `http://127.0.0.1:3000` (or `:8080` when using docker). Here you can build the Podcast feed. The resulting URL can then be plugged into your Pod-Catcher and you are ready to go.

> [!NOTE]
> Depending on the speed of the TTS server you are using, the first download of an Episode might take a while.