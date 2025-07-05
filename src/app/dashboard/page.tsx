import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';

import { logout } from '@/auth/actions/logout';

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    return redirect('/');
  }

  return (
    <>
      <h1>DashboardPage</h1>
      {JSON.stringify(session.user, null, 2)}
      <button onClick={logout}>Logout</button>
    </>
  );
}
