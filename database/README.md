# Contact storage setup

The project now works in two storage modes:

1. If PHP has the `pdo_pgsql` driver available, messages are inserted into the PostgreSQL `contact_messages` table defined in `schema.sql`.
2. If PostgreSQL support is unavailable, contact messages are saved automatically to `database/contact_messages.json`, registered users to `database/users.json`, and orders to `database/orders.json`.

Optional environment variables:

- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`
- `MESSAGE_STORAGE_PATH`
- `USERS_STORAGE_PATH`
- `ORDERS_STORAGE_PATH`

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
psql -U postgres -d sitara_grace -f database/schema.sql
```
