import { DB } from "https://deno.land/x/sqlite/src/db.ts";

import Adapter from "../adapter.ts";

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
      "insert into energydb (key)\n Select ? Where Not Exists(select * from energydb where key = ?)",
      [key, key],
    );
  }

  public async delete(key: string): Promise<void> {
    return;
  }
}
