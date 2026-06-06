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
name: Lint

on:
  pull_request:
    branches: ["main"]

jobs:
  ruff-format:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: astral-sh/setup-uv@v5

      - name: Chequear formato
        run: uvx ruff format --check .
```

## Issue Templates

## Pull Request Templates