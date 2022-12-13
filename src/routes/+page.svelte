<script lang="ts">
  import ListUser from '$lib/user/ListUser.svelte';
  import type { User } from '../types/types';
  import type { PageData } from './$types';

  export let data: PageData;
  let name = '';
  let filteredUsers: User[] = [...data.users];
  const searchUser = () => {
    filteredUsers = data.users.filter((user: any) =>
      user.name.toLowerCase().includes(name.toLocaleLowerCase())
    );
    if (filteredUsers.length === 0) {
      filteredUsers = [...data.users];
    }
  };

  $: console.log(filteredUsers);
</script>

<main class="px-[20px] sm:px-[100px] lg:px-[200px] py-4">
  <section>
    <h2 class="mb-2">Opciones:</h2>
    <a
      class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      href="/new"
    >
      Crear Usuario
    </a>
  </section>
  <section class="pt-4">
    <label for="">Buscar:</label>
    <input
      type="text"
      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4  placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-800 border-none"
      placeholder="Busca un usuario"
      bind:value={name}
    />
    <button
      class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mt-2"
      on:click={searchUser}>Buscar</button
    >
  </section>
  <ListUser {filteredUsers} />
</main>
