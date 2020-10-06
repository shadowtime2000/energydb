export default interface Store {
  get: (key: string) => any;
  set: (key: string, value: any) => any;
  delete: (key: string) => any;
}
