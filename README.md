# TypeORM-Migrations

- Creates a new empty migration:

```
$ npm run typeorm -- migration:create -n NameMigration
```

- Generate a new migration using an entity

```
$ npm run typeorm -- migration:generate -n NameMigration
```

- Run migrations:

```
$ npm run typeorm -- migration:run
```

- Revert migration:

```
$ npm run typeorm -- migration:revert
```
