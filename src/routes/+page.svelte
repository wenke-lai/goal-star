<script lang="ts">
  import { SignedIn, SignedOut, SignInButton } from "svelte-clerk";

  let { data } = $props();

  // 功能特色數據
  const features = [
    {
      icon: "🎯",
      title: "設定目標",
      description: "輕鬆創建和追蹤您的個人目標，讓每個夢想都有實現的計劃。"
    },
    {
      icon: "👥",
      title: "好友監督",
      description: "邀請朋友作為監督員，在您需要動力時給予支持和鼓勵。"
    },
    {
      icon: "📧",
      title: "自動通知",
      description: "系統會在目標截止時自動發送通知給監督員，確保您不會錯過重要的里程碑。"
    },
    {
      icon: "⭐",
      title: "星星獎勵",
      description: "完成目標獲得閃亮的星星獎勵，讓成就感倍增並激勵您繼續前進。"
    },
    {
      icon: "🔐",
      title: "安全登入",
      description: "支援 Google OAuth 登入，保護您的隱私和數據安全。"
    },
    {
      icon: "📱",
      title: "即時同步",
      description: "跨平台即時同步，隨時隨地查看您的目標進度。"
    }
  ];

  // 使用流程步驟
  const steps = [
    {
      step: "01",
      title: "登入帳號",
      description: "使用 Google 帳號快速登入"
    },
    {
      step: "02",
      title: "創建目標",
      description: "設定您的目標和截止日期"
    },
    {
      step: "03",
      title: "邀請監督員",
      description: "指定朋友的 email 作為監督員"
    },
    {
      step: "04",
      title: "獲得獎勵",
      description: "完成目標獲得星星獎勵"
    }
  ];
</script>

<svelte:head>
  <title>Goal Star - 目標達成遊戲</title>
  <meta
    name="description"
    content="一個有趣的目標達成遊戲，讓使用者設定目標、邀請好友監督，並在達成目標後獲得星星獎勵。"
  />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 pb-16">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
        讓目標實現變得
        <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          簡單有趣
        </span>
      </h1>
      <p class="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
        Goal Star
        是一個有趣的目標達成遊戲，結合好友監督機制和獎勵系統，讓您在實現夢想的路上不再孤單。
      </p>

      <div class="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
        <SignedOut>
          <SignInButton mode="modal">
            <button
              class="transform rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700"
            >
              免費開始使用
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <a
            href="/dashboard"
            class="transform rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700"
          >
            進入儀表板
          </a>
        </SignedIn>
        <a
          href="/about"
          class="rounded-xl border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-all hover:border-gray-400"
        >
          了解更多
        </a>
      </div>

      <!-- Hero Stars Animation -->
      <div class="flex animate-pulse justify-center space-x-2 text-4xl">
        <span class="animate-bounce" style="animation-delay: 0s;">⭐</span>
        <span class="animate-bounce" style="animation-delay: 0.1s;">⭐</span>
        <span class="animate-bounce" style="animation-delay: 0.2s;">⭐</span>
        <span class="animate-bounce" style="animation-delay: 0.3s;">⭐</span>
        <span class="animate-bounce" style="animation-delay: 0.4s;">⭐</span>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="bg-white py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">為什麼選擇 Goal Star？</h2>
      <p class="mx-auto max-w-2xl text-xl text-gray-600">
        讓目標達成變得有趣又有動力，每個小目標都值得慶祝
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {#each features as feature}
        <div
          class="rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="mb-4 text-4xl">{feature.icon}</div>
          <h3 class="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
          <p class="leading-relaxed text-gray-600">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- How it Works Section -->
<section class="bg-gray-50 py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">使用流程</h2>
      <p class="mx-auto max-w-2xl text-xl text-gray-600">簡單四步驟，開始您的目標實現之旅</p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      {#each steps as step, index}
        <div class="relative text-center">
          {#if index < steps.length - 1}
            <div
              class="absolute top-12 left-1/2 hidden h-0.5 w-full translate-x-1/2 transform bg-gradient-to-r from-blue-300 to-purple-300 lg:block"
            ></div>
          {/if}

          <div
            class="relative z-10 mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white"
          >
            {step.step}
          </div>
          <h3 class="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
          <p class="text-gray-600">{step.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-white py-20">
  <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
    <h2 class="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">準備好開始您的目標之旅了嗎？</h2>
    <p class="mb-8 text-xl text-gray-600">加入 Goal Star 社群，與志同道合的朋友一起實現夢想</p>

    <SignedOut>
      <SignInButton mode="modal">
        <button
          class="transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-4 text-xl font-semibold text-white shadow-xl transition-all hover:scale-105 hover:from-blue-700 hover:to-purple-700"
        >
          立即免費註冊
        </button>
      </SignInButton>
    </SignedOut>
    <SignedIn>
      <a
        href="/dashboard"
        class="inline-block transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-4 text-xl font-semibold text-white shadow-xl transition-all hover:scale-105 hover:from-blue-700 hover:to-purple-700"
      >
        開始設定目標
      </a>
    </SignedIn>

    <div class="mt-8 text-sm text-gray-500">支援 Google 登入 • 完全免費使用</div>
  </div>
</section>

<style>
  @keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    40%,
    43% {
      transform: translate3d(0, -30px, 0);
    }
    70% {
      transform: translate3d(0, -15px, 0);
    }
    90% {
      transform: translate3d(0, -4px, 0);
    }
  }

  .animate-bounce {
    animation: bounce 2s infinite;
  }
</style>
