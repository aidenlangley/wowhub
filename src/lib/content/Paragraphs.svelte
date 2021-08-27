<script lang="ts" context="module">
  export const style =
    'p-2 md:p-4 space-y-2 md:space-y-4 ' +
    'text-justify tracking-tighter xl:leading-relaxed' +
    'md:text-18 xl:text-20';
</script>

<!--
  @component
  This is a confusing component, and is not equivalent to a `<p>` tag.
  
  Use me like so:
  ```svelte
  <Paragraph>
    <p>Some text.</p>
    <p>Some text.</p>
  </Paragraph>
  ```
-->
<div class={style}>
  <slot />
</div>
