# Publicación de librerías

Hablar de:
- uv build y uv publish
- Pypi (test y prod)


## Publicar con Actions

```yaml
name: Build and Publish

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    name: 📦 Build Package
    runs-on: ubuntu-latest
    needs: test

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install uv
        uses: astral-sh/setup-uv@v6

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.11"

      - name: Build package
        run: uv build

      - name: Validate distribution
        run: uvx twine check dist/*

      - name: Upload artifacts
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist/

  publish:
    name: 🚀 Publish to PyPI
    runs-on: ubuntu-latest
    needs: build

    if: github.event_name == 'push' && github.ref == 'refs/heads/main'

    permissions:
      id-token: write

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Install uv
        uses: astral-sh/setup-uv@v6

      - name: Download build artifacts
        uses: actions/download-artifact@v4
        with:
          name: dist
          path: dist

      - name: Publish package
        run: uv publish
```


## Referencias

https://docs.astral.sh/uv/guides/package/