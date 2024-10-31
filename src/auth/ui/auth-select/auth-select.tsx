'use client';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';

import { doSocialSignIn } from '../../actions';
import styles from './auth-select.module.css';

export function AuthSelect() {
  return (
    <form action={doSocialSignIn} className={styles.form}>
      <Button
        className={styles.actionButton}
        size={'large'}
        startIcon={<GitHubIcon fontSize={'medium'} />}
        type='submit'
        name='action'
        value='github'
      >
        Sign in with Github
      </Button>
      <Button
        className={styles.actionButton}
        size={'large'}
        startIcon={<GoogleIcon fontSize={'medium'} />}
        type='submit'
        name='action'
        value='google'
      >
        Sign in with Google
      </Button>
    </form>
  );
}
