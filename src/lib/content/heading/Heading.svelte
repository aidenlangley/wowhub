<h1>
  <slot />
</h1>

<style lang="postcss">
  h1 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    font-weight: bold;
    font-family: 'Roboto Slab';

    font-size: 1.75rem; /* 28px */
    line-height: 2rem; /* 32px */
  }

  @screen sm {
    h1 {
      font-size: 2.625rem; /* 42px */
      line-height: 2.5rem; /* 40px */
    }
  }

  @screen lg {
    h1 {
      font-size: 4rem; /* 64px */
      line-height: 1;
    }
  }
</style>
