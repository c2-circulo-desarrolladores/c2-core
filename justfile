set shell := ["powershell.exe", "-Command"] # Windows
# set shell := ["bash", "-c"] # Linux/Mac

# Update pre-commit hooks
update:
    pre-commit autoupdate

# Add dev dependencies
add-dev:
    uv add --dev isort autoflake ruff pre-commit

add-mkdocs:
    uv add --dev mkdocs-macros-plugin mkdocs-static-i18n

run:
    uv run mkdocs serve --livereload --dev-addr=localhost:8000