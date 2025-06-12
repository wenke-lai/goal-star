<script lang="ts">
  import Footer from "$lib/components/ui/footer.svelte";
  import Header from "$lib/components/ui/header.svelte";
  import { ClerkProvider } from "svelte-clerk";
  import "../app.css";

  let { children } = $props();
</script>

<ClerkProvider>
  <Header />
  {@render children()}
  <Footer />
</ClerkProvider>
