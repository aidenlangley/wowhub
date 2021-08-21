<script lang="ts" context="module">
  export interface Business {
    name: string;
    address?: Address;
    phone: string;
    email: string;
  }

  export interface Address {
    addressLine1: string;
    city: string;
    postCode: string;
  }
</script>

<script lang="ts">
  export let business: Business;
</script>

<div class="pl-2 space-y-2">
  <h1 class="text-24 font-serif tracking-tighter">
    <slot name="name">
      {business.name}
    </slot>
  </h1>
  <div class="font-mono">
    <slot name="address">
      {#if business.address}
        {#each Object.values(business.address) as part}
          <p>{part}</p>
        {/each}
      {/if}
    </slot>
    <ul>
      <li>
        <a href="tel:${business.phone}">
          <slot name="phone">
            {business.phone}
          </slot>
        </a>
      </li>
      <li>
        <a href={`mailto:${business.email}`}>
          <slot name="email">
            {business.email}
          </slot>
        </a>
      </li>
    </ul>
  </div>
</div>
