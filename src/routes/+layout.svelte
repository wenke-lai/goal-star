<script lang="ts">
  import Header from "$lib/components/ui/header.svelte";
  import { ClerkProvider } from "svelte-clerk";
  import "../app.css";

  let { children } = $props();
</script>

<ClerkProvider>
  <Header />
  {@render children()}
</ClerkProvider>
