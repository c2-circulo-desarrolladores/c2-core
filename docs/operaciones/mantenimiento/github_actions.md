## PR Template/Welcome
https://github.com/matplotlib/matplotlib/blob/main/.github/workflows/pr_welcome.yml
https://github.com/pydantic/pydantic/blob/main/.github/PULL_REQUEST_TEMPLATE.md

## Tests
https://github.com/matplotlib/matplotlib/blob/main/.github/workflows/tests.yml

## Update docs
https://github.com/pydantic/pydantic/blob/main/.github/workflows/docs-update.yml

## Format checking

format_check.yml

```yaml
name: Check format

on:
  pull_request:
    branches: ["main"]

jobs:
  ruff-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: astral-sh/setup-uv@v5

      - name: Chequear formato
        run: uvx ruff format --check .

  isort-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: astral-sh/setup-uv@v5

      - name: Chequear orden imports
        run: uvx isort -c .
  
  autoflake-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: astral-sh/setup-uv@v5

      - name: Chequear imports sin usar
        run: uvx autoflake --check --remove-unused-variables --remove-all-unused-imports -r . --exclude "__init__.py"
```

## Releases

```yml
name: Release

on:
  push:
    tags:
      - "v*"

permissions:
  contents: write

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Install uv
        uses: astral-sh/setup-uv@v4

      - name: Install dependencies
        run: uv sync

      - name: Get changelog
        id: changelog
        run: |
          uv run cz changelog --dry-run > /tmp/changelog.md
          echo "CHANGELOG<<EOF" >> $GITHUB_OUTPUT
          cat /tmp/changelog.md >> $GITHUB_OUTPUT
          echo "EOF" >> $GITHUB_OUTPUT

      - name: Create release
        uses: softprops/action-gh-release@v2
        with:
          body: ${{ steps.changelog.outputs.CHANGELOG }}
```

## Issue Templates

## Pull Request Templates