<script lang="ts">
  import logo from '$images/google/maps.png';
  import { blur } from 'svelte/transition';

  const alt = 'google maps logo';
</script>

<img src={logo} {alt} in:blur />
