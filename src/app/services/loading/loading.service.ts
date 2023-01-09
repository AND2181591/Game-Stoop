import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public requestCounter = 0;
  public stillLoading$: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  public newRequest(): void {
    this.requestCounter++;
  }

  public requestCompleted(): void {
    this.requestCounter--;
    if (this.requestCounter === 0) {
      this.stillLoading$.next(false);
    }
  }
}
