import { Injectable } from '@angular/core';
import { Trace } from './trace';
import { ApiService } from '../../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class TraceService {
  constructor(private api: ApiService) {}

  send(trace: Trace): void {}
}
