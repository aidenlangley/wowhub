<script lang="ts">
  import Logo from '$images/google/maps.png';
  import { blur } from 'svelte/transition';

  const alt = 'google maps logo';
</script>

<img src={Logo} {alt} in:blur />
