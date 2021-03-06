import { HttpHeaders, HttpParams } from '@angular/common/http';

export class ApiConfig {
  url: string;
  services: {
    language: string;
    user: string;
  };
}

export class ApiGetOptions {
  headers?: HttpHeaders | { [header: string]: string | string[] };
  observe?: 'body';
  params?: HttpParams | { [param: string]: string | string[] };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}
