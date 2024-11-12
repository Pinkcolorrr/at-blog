import { doSignOut } from '@auth/actions';
import { Button } from '@mui/material';
import Image from 'next/image';
import { Session } from 'next-auth';

export function AuthInfo(session: Session) {
  return (
    <div>
      {session.user?.name}
      {session.user?.image && (
        <Image
          src={session.user.image}
          alt={'user image'}
          width={20}
          height={20}
        />
      )}
      <form action={doSignOut}>
        <Button type='submit' name='action'>
          Log out
        </Button>
      </form>
    </div>
  );
}
