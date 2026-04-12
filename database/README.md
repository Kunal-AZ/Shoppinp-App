# PostgreSQL storage setup

This project stores contact messages, registered users, and orders in PostgreSQL.

Required environment variables:

- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
Quick local run without Apache:

```bash
php -S 127.0.0.1:8000
```

Then open:

```text
http://127.0.0.1:8000/frontend/index.html
```

PostgreSQL example:

```bash
psql -U postgres -d myproject_db -f database/schema.sql
```
