// microCMS JS-SDK クライアント
import { createClient } from 'microcms-js-sdk';

export const microcmsClient = createClient({
  serviceDomain: process.env.REACT_APP_MICROCMS_SERVICE_DOMAIN, // 例: 'my-blog'
  apiKey:        process.env.REACT_APP_MICROCMS_API_KEY,
});
