import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const res = await fetch('http://localhost:8000/users');
  const data = await res.json();
  return {
    users: data.users,
  };
}) satisfies PageLoad;
