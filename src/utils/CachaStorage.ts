class Storage {
  getItem(key: string) {
    const data = window.localStorage.getItem(key)
    if (data) {
      try {
        return JSON.parse(data)
      } catch {
        return data
      }
    } else return null
  }
  setItem(key: string, value: any) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  }
  removeItem(key: string) {
    window.localStorage.removeItem(key)
  }
  clear() {
    window.localStorage.clear()
  }
}

export default new Storage()
