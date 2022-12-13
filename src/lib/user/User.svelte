<script lang="ts">
  import type { User as UserType } from '../../types/types';

  // props
  export let user: UserType;

  // funcion para eliminar un usuario de la base de datos
  const deleteUser = async () => {
    try {
      const resp = await fetch(`http://localhost:8000/users/${user.id}`, {
        method: 'DELETE',
      });
      const data = await resp.json();
      console.log(data);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };
</script>

<li class="flex flex-row mb-2 border-gray-400 ">
  <div
    class="transition duration-500 shadow ease-in-out transform hover:-translate-y-1 hover:shadow-lg select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4 flex-col sm:flex-row gap-4 sm:gap-0"
  >
    <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
      <figure>
        <img
          alt="profil"
          src={`http://placekitten.com/20${user.id}/30${user.id}`}
          class="mx-auto object-cover rounded-full h-12 w-12 "
        />
      </figure>
    </div>
    <div class="flex-1 pl-1 md:mr-16">
      <div class="font-medium dark:text-white">{user.name}</div>
      <div class="text-sm text-gray-600 dark:text-gray-200 text-center">
        Estudiante
      </div>
    </div>
    <div class="text-md text-gray-600 dark:text-gray-200 pr-10">
      <span class="font-semibold">Contraseña:</span>
      <p class="text-center">{user.password}</p>
    </div>

    <div class="flex gap-4">
      <a
        type="button"
        class="py-2 px-4  bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 focus:ring-offset-yellow-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        href="/update/{user.id}"
      >
        Actualizar
      </a>
      <button
        type="button"
        class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        on:click={deleteUser}
      >
        Eliminar
      </button>
    </div>
  </div>
</li>
