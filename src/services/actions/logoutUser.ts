
import { authkey } from '@/constants/authkey';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { deleteCookies } from './deleteCookise';

export const logoutUser = (router: AppRouterInstance) => {
   localStorage.removeItem(authkey);
   deleteCookies([authkey, 'accessToken']);
   router.push('/');
   router.refresh();
};