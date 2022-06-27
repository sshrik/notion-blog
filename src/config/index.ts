export default function getEnvConfig() {
  switch (process.env.NODE_ENV) {
    case 'local':
      return {
        env: 'LOCAL',
        internalAPIHost: 'http://127.0.0.1:10000',
      };
    case 'prod':
      return {
        env: 'PROD',
        internalAPIHost: 'https://notion-api.sshrik.com',
      };
    default:
      return {
        env: 'LOCAL',
        internalAPIHost: 'http://127.0.0.1:10000',
      };
  }
}
