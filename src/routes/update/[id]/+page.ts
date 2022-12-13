import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const { id } = params as {
    id: string;
  };
  const resp = await fetch(`http://localhost:8000/users/${id}`);
  const user = await resp.json();

  return {
    user,
  };
}) as PageLoad;
