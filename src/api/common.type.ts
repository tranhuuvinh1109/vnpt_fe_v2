export type ResponseType<T> = {
  config: unknown;
  data: T;
  headers: unknown;
  status: number;
  statusText: string;
};
