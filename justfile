set shell := ["powershell.exe", "-Command"] # Windows
# set shell := ["bash", "-c"] # Linux/Mac

run:
    uv run mkdocs serve --livereload --dev-addr=localhost:8000