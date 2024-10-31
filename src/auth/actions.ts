'use server';

import { signIn, signOut } from '@auth/config';
import { BuiltInProviderType } from '@auth/core/providers';

export async function doSocialSignIn(formData: FormData) {
  const action = formData.get('action') as BuiltInProviderType;
  await signIn(action);
}

export async function doSignOut() {
  await signOut();
}
