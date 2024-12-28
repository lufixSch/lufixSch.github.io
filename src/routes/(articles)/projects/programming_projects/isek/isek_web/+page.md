---
description: A web frontend for the ISEK API, a self-sorting todo list
image: /articles/ise_logo.png
last_update: '2024-12-28T19:34:24.479115+00:00'
layout: project
repository: https://gitlab.com/ise-tech-developments/isek_web
repository_icon: gitlab
status: wip
title: ISEK Web
update: https://gitlab.com/ise-tech-developments/isek_web/raw/main/README.md
---

# ISEK Web

[ISEK](https://gitlab.com/ise-tech-developments/ISEK) is a self-sorting todo list.
It is supposed to act like a virtual assistant, who is always on top of your todos.
Based on Priority, Deadline and Approximated Duration ISEK sorts the todos, so you always know what to do next.

ISEK Web is the Web Frontend to the [ISEK](https://gitlab.com/ise-tech-developments/ISEK) API, which allows you to create and manage tasks as well as display them in a list sorted by [ISEK](https://gitlab.com/ise-tech-developments/ISEK)

But this is just the beginning, we would love for you to use ISEK and contribute with your ideas, what the perfect virtual assistant in 2023 could look like.

## Usage

At the moment there is no public instance of ISEK Web but you can host it yourself using Docker.

> Make sure to define the right URL for the ISEK API endpoint

## Development

The website is built using [SvelteKit](https://kit.svelte.dev/)

Run `npm run dev` to start the development server of the Website.

> You need to run/have access to a instance of the ISEK API for the website to work.
> Make sure to define the right URL for the ISEK API by setting the `ISEK_API_ADDRESS` environment variable

## Contribution

We’d love to have your contributions added to ISEK! If you would like to contribute, please follow these guidelines:

1. Keep your pull requests as small as possible. Large pull requests are harder to review, merge, and test.
2. Format/Check your changes.
3. Update documentation if necessary.

## License

This project is licensed under the AGPLv3 license. See the LICENSE file for more information.