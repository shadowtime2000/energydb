<h1 align="center">energydb</h1>
<p  align="center"><code>key: string</code> <code>value: any</code>database</p>

## CDN
You can use [denopkg](https://denopkg.com/shadowtime2000/energydb) or `deno.land/x`

### Usage
```typescript
import EnergyDB from "https://denopkg.com/shadowtime2000/energydb/mod.ts";

const db = new EnergyDB();

await db.set("foo", "bar");
await db.get("foo"); // "bar"
await db.delete("foo");
```

#### Custom Stores
Stores must fit the interface under `mod/store.ts` and store factories must fit the interface under `mod/storeFactory.ts`.
```typescript
const storeFactory = () => new Map<string, any>(); // Replace with your own store

const db = new EnergyDB(storeFactory);
```

#### Adapters
By default the database is stored in memory but `EnergyDB` still supports database adapters. They must fit the interface under `mod/adapter.ts` and you can register them as so:
```typescript
const db = new EnergyDB();

db.registerAdapter(new MyAdapter());
```

##### Supported Adapters

- A `sqlite` adapter located under `mod/adapter/sqlite.ts`