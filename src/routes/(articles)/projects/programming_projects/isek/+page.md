---
description: A python tool which helps to manage tasks by sorting them based on the
  Eisenhower Matrix
image: /articles/ise_logo.png
last_update: '2024-06-23T12:12:37.898270+00:00'
layout: project
repository: https://gitlab.com/ise-tech-developments/isek
repository_icon: gitlab
status: wip
title: ISEK
update: https://gitlab.com/ise-tech-developments/isek/raw/main/README.md
---

# ISEK

![showcase image](https://gitlab.com/ise-tech-developments/isek/raw/main/docs/assets/logo.png)

ISEK is a python tool which helps to manage tasks by sorting them based on the [Eisenhower Matrix](https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method). Beyond the concept of the Eisenhower Matrix
it is able to fit tasks between appointments and to manage interdependent tasks.

## Installation

Currently there is no way to directly install ISEK. It has to be build from source and installed using [Poetry](https://python-poetry.org/docs/)

```bash
poetry build
pip install ./dist/isek-<version>-py3-none-any.whl
```

## Usage

ISEK can be used in various ways: as a CLI tool, as a Python library, or as an API (with the help of the `isek_sdk` package). Detailed descriptions on how to use each package can be found in the official documentation.

## Development

### Setup

For development install the packages using [Poetry](https://python-poetry.org/docs/) and enter the `venv` which is created automatically.

```bash
poetry install --with dev <dependency groups>
poetry shell
```

Depending on your usecase you want to add the following optional dependency groups:

- `dev`: General development dependencies
- `doc`: Dependencies for building the docs
- `vis`: Dependencies for visualizing/analyzing algorithms and data

#### Devcontainer

Alternatively this repository contains devcontainers for VSCode which are recommended when working with the API. It automatically generates a PostgreSQL and PgAdmin container with a development configuration.

When entering the devcontainer the Poetry `venv` still needs to be activated

```bash
poetry shell
```

### Utilities

The repository contains some custom utilities located in the `bin/` folder to improve the development experience.

- `docs.py`: Build the documentation including coverage report, API schema and CLI documentation
- `format.py`: Check and/or Format code using `flake8`, `black` and `isort`
- `test.py`: Run tests for some or all packages

Each utility comes with its own optional arguments to change its behaviour. You can check them with `<utility>.py --help`.

## Contribution

We’d love to have your contributions added to ISEK! If you would like to contribute, please follow these guidelines:

1. Keep your pull requests as small as possible. Large pull requests are harder to review, merge, and test.
2. Format/Check your changes using our formatting script `bin/format.py`.
3. Add a test for any new functionality and make sure tests still pass after your changes. Use our testing script `bin/test.py` for running tests.
4. Update documentation if necessary.

## License

This project is licensed under the AGPLv3 license. See the LICENSE file for more information.