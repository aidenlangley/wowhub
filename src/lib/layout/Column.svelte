<div class="column">
  <div class="invisible sm:visible">
    <slot name="left" />
  </div>
  <div>
    <slot />
  </div>
  <div class="invisible sm:visible">
    <slot name="right" />
  </div>
</div>

<style lang="postcss">
  @screen sm {
    .column {
      display: grid;
      grid-template-columns: 5% auto 5%;
    }

    @screen md {
      .column {
        grid-template-columns: 10% auto 10%;
      }
    }

    @screen lg {
      .column {
        grid-template-columns: 15% auto 15%;
      }
    }

    @screen xl {
      .column {
        grid-template-columns: 20% auto 20%;
      }
    }
  }
</style>
