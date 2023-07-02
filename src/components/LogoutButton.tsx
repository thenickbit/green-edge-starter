'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <button
      className="bg-btn-background hover:bg-btn-background-hover rounded-md px-4 py-2 no-underline"
      onClick={signOut}
    >
      Logout
    </button>
  );
}
