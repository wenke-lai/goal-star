<script lang="ts">
  // 詳細功能介紹
  const detailedFeatures = [
    {
      icon: "🎯",
      title: "簡單設定目標",
      description:
        "在 Goal Star 中設定目標非常簡單！只需要寫下您想要達成的事情和完成時間，就可以開始您的目標之旅。",
      tips: ["寫下您想要達成的事情", "選擇一個合理的完成時間", "從小目標開始會更容易成功"]
    },
    {
      icon: "👥",
      title: "監督員系統",
      description: "邀請朋友、家人或同事成為您的目標監督員，他們會在關鍵時刻給予支持和鼓勵。",
      tips: ["選擇信任且積極的朋友", "清楚告知目標的重要性", "定期與監督員溝通進度"]
    },
    {
      icon: "⭐",
      title: "獎勵機制",
      description: "完成目標後獲得星星獎勵，累積星星可以解鎖新的成就徽章和個人化頭像。",
      tips: ["每完成一個目標獲得 1-5 顆星星", "星星數量根據目標難度決定", "累積星星可以提升等級"]
    }
  ];

  const faqs = [
    {
      question: "如何選擇合適的監督員？",
      answer:
        "建議選擇關心您、值得信任且願意給予正面支持的朋友或家人。避免選擇過於嚴格或批判性的人，因為這可能會增加壓力而非動力。"
    },
    {
      question: "目標沒達成會怎樣？",
      answer:
        "Goal Star 是一個正面的激勵工具，即使目標沒達成也不會有任何懲罰。我們鼓勵您檢討原因，調整目標設定，然後重新開始。每次嘗試都是學習的機會。"
    },
    {
      question: "可以設定什麼類型的目標？",
      answer:
        "任何正面的個人目標都可以，例如：健身、學習新技能、閱讀、戒除壞習慣、完成專案等。建議從小目標開始，逐步增加挑戰性。"
    },
    {
      question: "監督員會收到什麼通知？",
      answer:
        "當您的目標到期時，監督員會收到一封郵件，詢問您是否已完成目標。他們可以點擊連結確認結果，整個過程簡單且不會造成困擾。"
    }
  ];
</script>

<svelte:head>
  <title>關於 Goal Star - 目標達成遊戲</title>
  <meta
    name="description"
    content="深入了解 Goal Star 的功能特色、使用技巧和常見問題，讓您更有效地使用這個目標達成遊戲。"
  />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
  <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
    <h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
      關於 <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >Goal Star</span
      >
    </h1>
    <p class="mb-8 text-xl text-gray-600">一個讓目標達成變得有趣且有動力的簡單遊戲</p>
  </div>
</section>

<!-- Mission Section -->
<section class="bg-white py-16">
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div class="mb-12 text-center">
      <h2 class="mb-6 text-3xl font-bold text-gray-900">我們的理念</h2>
      <p class="text-lg leading-relaxed text-gray-600">
        很多人都有目標，但往往因為缺乏動力或監督而半途而廢。Goal Star
        結合了遊戲化元素和社交監督機制，讓達成目標變得更有趣、更有動力。
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
      <div class="p-6">
        <div class="mb-4 text-4xl">🎮</div>
        <h3 class="mb-2 text-xl font-semibold">遊戲化</h3>
        <p class="text-gray-600">用遊戲的方式讓目標達成變得有趣</p>
      </div>
      <div class="p-6">
        <div class="mb-4 text-4xl">🤝</div>
        <h3 class="mb-2 text-xl font-semibold">社交支持</h3>
        <p class="text-gray-600">朋友的支持是最強大的動力來源</p>
      </div>
      <div class="p-6">
        <div class="mb-4 text-4xl">📈</div>
        <h3 class="mb-2 text-xl font-semibold">持續改進</h3>
        <p class="text-gray-600">每次嘗試都是成長的機會</p>
      </div>
    </div>
  </div>
</section>

<!-- Detailed Features -->
<section class="bg-gray-50 py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-bold text-gray-900">深入了解功能</h2>
      <p class="text-xl text-gray-600">讓我們詳細介紹 Goal Star 的核心功能</p>
    </div>

    <div class="space-y-16">
      {#each detailedFeatures as feature, index}
        <div
          class="flex flex-col items-center gap-12 lg:flex-row {index % 2 === 1
            ? 'lg:flex-row-reverse'
            : ''}"
        >
          <div class="lg:w-1/2">
            <div class="mb-6 text-6xl">{feature.icon}</div>
            <h3 class="mb-4 text-2xl font-bold text-gray-900">{feature.title}</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">{feature.description}</p>
            <div class="space-y-2">
              <h4 class="font-semibold text-gray-900">使用技巧：</h4>
              <ul class="space-y-2">
                {#each feature.tips as tip}
                  <li class="flex items-start">
                    <span class="mr-2 text-blue-500">•</span>
                    <span class="text-gray-600">{tip}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
          <div class="lg:w-1/2">
            <div class="rounded-2xl bg-white p-8 shadow-lg">
              <div
                class="flex h-64 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-6"
              >
                <div class="text-center">
                  <div class="mb-4 text-4xl">{feature.icon}</div>
                  <div class="text-gray-600">功能示意圖</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="bg-white py-20">
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-bold text-gray-900">常見問題</h2>
      <p class="text-xl text-gray-600">解答您可能遇到的疑問</p>
    </div>

    <div class="space-y-8">
      {#each faqs as faq}
        <div class="rounded-xl bg-gray-50 p-6">
          <h3 class="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h3>
          <p class="leading-relaxed text-gray-600">{faq.answer}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Tips Section -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
  <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
    <h2 class="mb-8 text-3xl font-bold">成功秘訣</h2>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div class="rounded-xl bg-white/10 p-6">
        <h3 class="mb-3 text-xl font-semibold">從小開始</h3>
        <p class="opacity-90">設定容易達成的小目標，建立成功的習慣和信心。</p>
      </div>
      <div class="rounded-xl bg-white/10 p-6">
        <h3 class="mb-3 text-xl font-semibold">保持彈性</h3>
        <p class="opacity-90">如果發現目標太難，不要害怕調整，重要的是持續前進。</p>
      </div>
      <div class="rounded-xl bg-white/10 p-6">
        <h3 class="mb-3 text-xl font-semibold">慶祝成功</h3>
        <p class="opacity-90">每次完成目標都值得慶祝，這會強化正面行為。</p>
      </div>
      <div class="rounded-xl bg-white/10 p-6">
        <h3 class="mb-3 text-xl font-semibold">學習失敗</h3>
        <p class="opacity-90">沒達成目標不是失敗，而是學習如何設定更合適目標的機會。</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="bg-white py-20">
  <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
    <h2 class="mb-6 text-3xl font-bold text-gray-900">準備開始您的目標之旅了嗎？</h2>
    <p class="mb-8 text-xl text-gray-600">現在就加入 Goal Star，讓目標達成變得更有趣！</p>

    <div class="flex justify-center">
      <a
        href="/"
        class="transform rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:from-blue-700 hover:to-purple-700"
      >
        開始使用
      </a>
    </div>
  </div>
</section>
