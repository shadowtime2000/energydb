import EventEmitter from "https://deno.land/x/event@0.1.0/mod.ts";

export type Events = {
  set: [string, any];
  delete: [string];
};

export interface Store {
  get: (key: string) => any;
  set: (key: string, value: any) => any;
  delete: (key: string) => any;
}

export interface StoreFactory {
  (): Store;
}

export default class EnergyDB extends EventEmitter<Events> {
  private store: Store;
  constructor(storeFactory?: StoreFactory) {
    super();
    this.store =
      (storeFactory != undefined ? storeFactory() : new Map<string, any>());
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
}
