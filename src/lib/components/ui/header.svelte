<script lang="ts">
  import { SignedIn, SignedOut, SignInButton } from "svelte-clerk";
</script>

<!-- Navigation -->
<nav class="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <div class="flex items-center space-x-2">
        <a href="/" class="flex items-center space-x-2 transition-opacity hover:opacity-80">
          <span class="text-2xl">⭐</span>
          <span class="text-xl font-bold text-gray-900">Goal Star</span>
        </a>
      </div>

      <div class="flex items-center space-x-4">
        <SignedOut>
          <SignInButton mode="modal">
            <button
              class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
            >
              開始使用
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <a
            href="/dashboard"
            class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
          >
            進入儀表板
          </a>
        </SignedIn>
      </div>
    </div>
  </div>
</nav>
