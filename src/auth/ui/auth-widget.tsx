import { auth } from '@auth/config';

import { AuthInfo } from './auth-info/auth-info';
import { AuthSelect } from './auth-select/auth-select';

export async function AuthWidget() {
  const session = await auth();
  return session ? <AuthInfo {...session} /> : <AuthSelect />;
}
