declare interface Window {
  analytics: {
    track: (event: string, data?: any) => void
  }
}
