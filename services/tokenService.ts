import { secureStore } from '@/utils/secureStore';

const USER_TOKEN = 'user_token';

export type Token = string;

export function setToken(token: Token) {
  return secureStore.setItem(USER_TOKEN, token);
}

export async function getToken(): Promise<Token | undefined> {
  const token = await secureStore.getItem(USER_TOKEN);

  if (!token) {
    return;
  }

  return token;
}

export async function deleteToken() {
  const token = await secureStore.getItem(USER_TOKEN);

  if (!token) return;

  return secureStore.removeItem(USER_TOKEN);
}
