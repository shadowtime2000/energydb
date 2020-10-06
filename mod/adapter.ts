import Store from "./store.ts";

export default interface Adapter {
  set: (key: string, value: any) => Promise<void>;
  delete: (key: string) => Promise<void>;
  load?: () => Promise<Store>;
}
