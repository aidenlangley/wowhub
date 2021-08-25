<script lang="ts">
  import Icon, { QuestionMarkCircle } from 'svelte-hero-icons';
  import Tooltip from '../Tooltip.svelte';
  import type { InputType } from './input';
  import { InputType as inputType } from './input';

  export let type: InputType;
  export let id: string = null;
  export let label: string = null;
  export let tooltip: string = null;

  // Text, number, range, email, etc.
  export let value: string | number = null;

  // Radio
  export let options: [] = null;
</script>

<div class="p-1 flex flex-col space-y-1">
  {#if label}
    <label for={id}>
      <span class="flex items-center font-bold tracking-tight text-18">
        {label}
        {#if tooltip}
          <Tooltip text={tooltip}>
            <Icon src={QuestionMarkCircle} size="16" />
          </Tooltip>
        {/if}
      </span>
    </label>
  {/if}

  <!--
    Makes me sad coming from Rust and having to do this...
    Give me a match case anyday. We are iterating over the enum.
  -->
  {#if type === inputType.Text}
    <input type="text" {id} bind:value class="rounded shadow" />
  {:else if type === inputType.Number}
    <input type="number" {id} bind:value class="rounded shadow" />
  {:else if type === inputType.Range}
    <input type="range" {id} bind:value class="rounded shadow" />
  {:else if type === inputType.Checkbox}
    <input {id} type="checkbox" bind:value class="rounded shadow" />
  {:else if type === inputType.Radio}
    {#each options as option}
      <input
        type="radio"
        {id}
        bind:group={options}
        value={option}
        class="rounded shadow"
      />
      <input type="" />
    {/each}
  {/if}
</div>
