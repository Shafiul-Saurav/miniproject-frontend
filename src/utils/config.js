export default {
    appName: 'InventoryApp',
    appVersion: '1.0.0',
    defaultDataLimit: 10,
    appApiHost: import.meta.env.VITE_API_URL,
    apiToken: localStorage.getItem('token'),
    requestTimeOut: 5000
}