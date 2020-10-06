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
```typescript
const storeFactory = () => new Map<string, any>(); // Replace with your own store

const db = new EnergyDB(storeFactory);
```