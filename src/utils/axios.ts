import axios from 'axios';

import { apiBaseUrl, source, appToken, language, buildNumber, StorageKeys } from './constants';

// eslint-disable-next-line import/no-anonymous-default-export
const axiosInstance = (version: string = 'v2') => {
  const instance = axios.create({
    baseURL: version === 'v2' ? apiBaseUrl! : '',
    headers: {
      [StorageKeys.AppToken]: appToken!,
      language: language!,
      [StorageKeys.BuildNumber]: buildNumber!,
      source: source!,
    },
  });

  return instance;
};

export default axiosInstance;
