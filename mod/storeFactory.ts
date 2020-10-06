import Store from "./store.ts";

export default interface StoreFactory {
  (): Store;
}
