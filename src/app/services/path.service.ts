import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PathService {
  private readonly localStorageKey = 'currPath';

  // Helper to safely access localStorage
  private get localStorageAvailable(): boolean {
    return typeof window !== 'undefined' && !!window.localStorage;
  }

  // Initialize the BehaviorSubject with the value from localStorage, if available
  private currPathSource = new BehaviorSubject<string>(
    this.localStorageAvailable && localStorage.getItem(this.localStorageKey)
      ? localStorage.getItem(this.localStorageKey)!
      : '' // Default to an empty string if localStorage is unavailable
  );

  currPath$ = this.currPathSource.asObservable();

  updatePath(newPath: string) {
    this.currPathSource.next(newPath); // Update the BehaviorSubject
    if (this.localStorageAvailable) {
      localStorage.setItem(this.localStorageKey, newPath); // Persist the new value
    }
  }
}
