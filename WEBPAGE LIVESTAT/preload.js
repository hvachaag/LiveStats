const { contextBridge } = require('electron');

// Expose a simple, safe API for toggling mock-data mode or reading app info in the renderer
contextBridge.exposeInMainWorld('electronAPI', {
  getAppInfo: () => ({ name: 'LiveStats', env: 'development', mock: true }),
  // This can be extended to toggle mock vs live behavior, but for now we keep mock true
  isMock: () => true
});