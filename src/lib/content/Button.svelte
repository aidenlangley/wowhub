<script lang="ts" context="module">
  export enum ButtonColour {
    Default = `
      bg-gray-200 dark:bg-gray-800
      border-gray-300 dark:border-gray-700
      hover:text-green-500 dark:hover:text-green-500
      focus:text-green-500 dark:focus:text-green-500
      dark:text-white
    `,
    Blue = `
      bg-blue-500
      border-blue-300 dark:border-blue-700
      text-white
      hover:text-blue-200 dark:hover:text-blue-200
      focus:text-blue-200 dark:focus:text-blue-200
    `,
    Red = `
      bg-red-500
      border-red-300 dark:border-red-700
      text-white
      hover:text-red-200 dark:hover:text-red-200
      focus:text-red-200 dark:focus:text-red-200
    `,
    Yellow = `
      bg-yellow-400
      border-yellow-200 dark:border-yellow-800
      text-white
      hover:text-yellow-100 dark:hover:text-yellow-100
      focus:text-yellow-100 dark:focus:text-yellow-100
      text-shadow
    `,
    Green = `
      bg-green-500
      border-green-300 dark:border-green-700
      text-white
      hover:text-green-200 dark:hover:text-green-200
      focus:text-green-200 dark:focus:text-green-200
    `,
  }
</script>

<script lang="ts">
  // Should be a closer / lambda / pass me a function.
  export let click: any = null;
  export let colour: ButtonColour = ButtonColour.Default;
</script>

<button
  class={`
    flex items-center space-x-2
    border rounded-md
    p-2 ty:p-3 sm:p-4 shadow
    font-mono font-medium tyd:tracking-tighter
    tyd:text-14 sm:text-18 md:text-20 lg:text-22 xl:text-24
    transition duration-500
    ${colour.toString()}
  `}
  on:click={click}
>
  <slot />
</button>
