import { SetStorage, GetStorage } from '@/domain/protocols/cache'

export class LocalStorageAdapter implements SetStorage, GetStorage {
  public set (key: string, value: object): void {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.removeItem(key)
    }
  }

  public get (key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }
}
