<script lang="ts">
  import type { User as UserType } from '../../types/types';
  import User from './User.svelte';

  export let filteredUsers: UserType[];

  $: filteredUsers = filteredUsers;

  // console.log('listuser', users);
</script>

<div class="flex flex-col items-center justify-center w-full mx-auto mt-2 ">
  <div
    class="w-full px-4 py-5 mb-2 bg-white  rounded-md shadow sm:px-6 dark:bg-gray-800"
  >
    <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
      Base de datos de usuarios - CRUD / Python
    </h3>
    <p class="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
      Aqui hay una lista de usuarios registrados en la base de datos
    </p>
  </div>
  <ul class="flex flex-col w-full">
    {#each filteredUsers as user}
      <User {user} />
    {/each}
  </ul>
</div>
