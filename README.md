<h1 align="center">energydb</h1>
<p  align="center"><code>key: string</code> <code>value: any</code>database</p>

## CDN
You can use [denopkg](https://denopkg.com/shadowtime2000/energydb) or `deno.land/x`

### Usage
```typescript
import EnergyDB from "https://denopkg.com/shadowtime2000/energydb/mod.ts";

const db = new EnergyDB();

db.set("foo", "bar");
db.get("foo"); // "bar"
db.delete("foo");
```
You can also supply your own store object
```typescript
const storeFactory = () => new Map<string, any>();

const db = new EnergyDB(storeFactory);
```