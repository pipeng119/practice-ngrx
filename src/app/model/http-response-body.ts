export interface HttpResponseBody<T> {
  message: string;
  success: boolean;
  data: T;
}
