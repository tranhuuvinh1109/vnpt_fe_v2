export type ResponseType<T> = {
  config: unknown;
  data: {
    message?: string;
    data: T;
  };
  headers: unknown;
  status: number;
  statusText: string;
};
