import EventEmitter from "https://deno.land/x/event@0.1.0/mod.ts";
import Adapter from "./mod/adapter.ts";

import Events from "./mod/events.ts";
import Store from "./mod/store.ts";
import StoreFactory from "./mod/storeFactory.ts";

export default class EnergyDB extends EventEmitter<Events> {
  private store: Store;
  private adapters: Adapter[];

  constructor(storeFactory?: StoreFactory) {
    super();
    this.store =
      (storeFactory != undefined ? storeFactory() : new Map<string, any>());
    this.adapters = [];
  }
  public async get(key: string): Promise<any> {
    return Promise.resolve(this.store.get(key));
  }
  public async set(key: string, value: any): Promise<any> {
    const response = this.store.set(key, value);
    this.emit("set", key, value);
    return Promise.resolve(response);
  }
  public async delete(key: string): Promise<any> {
    const response = this.store.delete(key);
    this.emit("delete", response);
    return Promise.resolve(response);
  }
  public async registerAdapter(adapter: Adapter): Promise<number> {
    const index = this.adapters.push(adapter) - 1;
    this.on("set", this.adapters[index].set);
    this.on("delete", this.adapters[index].delete);
    return Promise.resolve(index);
  }
  public async loadDataFromAdapter(id: number): Promise<void> {
    if (this.adapters[id].load != undefined) {
      // @ts-ignore
      this.store = this.adapters[id].load();
    }
  }
}
