import { Injectable } from '@angular/core';
import { TransactionItem } from 'src/app/shared/models/Platform';

interface StorageData {
  'cart': TransactionItem[];
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public async setItem<k extends keyof StorageData>(key: string, data: any): Promise<void> {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  public async getItem<k extends keyof StorageData>(key: string): Promise<any> {
    try {
      // @ts-ignore
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
    }
  }

  public async removeData(key: string, index: number): Promise<any> {
    try {
      this.getItem(key).then((items: any[]) => {
        const newItemToStore = items.filter(item => item !== items[index]);
        newItemToStore.length === 0 ? this.deleteItem(key) : this.setItem(key, newItemToStore);
      });
    } catch (e) {
      console.error('Error removing data from localStorage', e);
    }
  }

  public async deleteItem(key: string): Promise<any> {
    try {
      return localStorage.removeItem(key);
    } catch (e) {
      console.error('Error deleting item from localStorage', e);
    }
  }
}
