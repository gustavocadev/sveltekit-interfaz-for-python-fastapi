<script lang="ts">
  import { goto } from '$app/navigation';

  let name = '';
  let lastName = '';
  let email = '';
  let password = '';

  const createNewUser = async () => {
    const resp = await fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `${name} ${lastName}`,
        email,
        password,
      }),
    });
    console.log(resp);
    goto('/');
  };
</script>

<div
  class="flex flex-col px-4 py-8  shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 justify-center
  items-center w-full h-screen
  "
>
  <div
    class="self-center  text-xl font-light text-gray-800 sm:text-2xl dark:text-white"
  >
    Crea una nueva cuenta 📝
  </div>
  <div class="p-6">
    <form>
      <div class="flex gap-4 mb-2">
        <div class=" relative ">
          <input
            type="text"
            class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4   placeholder-gray-400 shadow-sm text-base outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-900 border-none text-white"
            autocomplete="off"
            name="First name"
            placeholder="First name"
            bind:value={name}
          />
        </div>
        <div class=" relative ">
          <input
            type="text"
            id="create-account-last-name"
            class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4   placeholder-gray-400 shadow-sm text-base outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-900 border-none text-white"
            autocomplete="off"
            name="Last name"
            placeholder="Last name"
            bind:value={lastName}
          />
        </div>
      </div>
      <div class="flex flex-col mb-2">
        <div class=" relative ">
          <input
            type="text"
            class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4   placeholder-gray-400 shadow-sm text-base outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-900 border-none text-white"
            autocomplete="off"
            placeholder="Email"
            bind:value={email}
          />
        </div>
      </div>
      <div class="flex flex-col mb-2">
        <div class=" relative ">
          <input
            type="password"
            class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4   placeholder-gray-400 shadow-sm text-base outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent bg-gray-900 border-none text-white"
            autocomplete="off"
            name="password"
            placeholder="Contraseña"
            bind:value={password}
          />
        </div>
      </div>
      <div class="flex w-full my-4">
        <button
          type="submit"
          class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          on:click|preventDefault={createNewUser}
        >
          Crear cuenta 🚀
        </button>
      </div>
    </form>
  </div>
</div>
