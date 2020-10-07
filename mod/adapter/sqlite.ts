import { DB } from "https://deno.land/x/sqlite/src/db.ts";

import type Adapter from "../adapter.ts";

export default class SQLiteAdapter implements Adapter {
  private path: string | undefined;
  private database: DB;

  constructor(path?: string) {
    this.path = path;
    this.database = new DB(this.path);
    this.database.query(
      "CREATE TABLE IF NOT EXISTS energydb (key STRING PRIMARY KEY, value TEXT)",
    );
  }

  public async set(key: string, value: any): Promise<void> {
    this.database.query(
      "INSERT OR IGNORE INTO energydb (key, value) VALUES (?, ?)",
      [key, value],
    );
    this.database.query(
      "UPDATE energydb SET value = ? WHERE key = ?",
      [value, key],
    );
  }

  public async delete(key: string): Promise<void> {
    return;
  }
}
