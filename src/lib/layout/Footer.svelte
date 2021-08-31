<script lang="ts">
  import Link from '$lib/components/Link.svelte';
</script>

<!--
  @component
  `Footer` contains information regarding the other businesses associated with
  wowhub (loosely.)
-->
<footer class="page-footer">
  <Link
    href="https://github.com/aidenlangley"
    label="link to website authors' GitHub page"
  >
    <span>by aidenlangley</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z"
        fill="currentColor"
      />
    </svg>
  </Link>
</footer>

<style lang="postcss">
  footer.page-footer {
    border-top-width: 1px;
    display: grid;
    grid-auto-flow: col;
    padding: 0.5rem; /* 8px */
    place-content: center end;
    place-items: center end;

    @apply text-white bg-gray-900 border-gray-300;
  }

  :global(.dark) footer.page-footer {
    @apply bg-black border-gray-800;
  }

  footer.page-footer * {
    letter-spacing: -0.025em;

    @apply text-gray-300;
  }

  footer.page-footer *:hover,
  footer.page-footer *:focus {
    @apply text-gray-100;
  }

  footer.page-footer svg {
    max-height: 1.5rem;
    max-width: 1.5rem;
  }
</style>
