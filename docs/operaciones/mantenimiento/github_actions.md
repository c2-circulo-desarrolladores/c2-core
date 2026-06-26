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

```yaml
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

## Test

```yaml
name: Run Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    name: 🧪 Test (Python ${{ matrix.python-version }})
    runs-on: ubuntu-latest

    strategy:
      matrix:
        python-version: ["3.9", "3.10", "3.11", "3.12"]

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install uv
        uses: astral-sh/setup-uv@v6

      - name: Set up Python
        run: uv python install ${{ matrix.python-version }}

      - name: Sync dependencies
        run: uv sync --extra dev

      - name: Run pre-commit hooks
        run: uv run pre-commit run --all-files

      - name: Run tests
        run: uv run pytest -v --maxfail=1 --disable-warnings --cov --cov-report=term

      - name: Upload coverage
        if: success()
        uses: codecov/codecov-action@v5
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          files: ./coverage.xml
          fail_ci_if_error: false
```


## Issue Templates

## Pull Request Templates
