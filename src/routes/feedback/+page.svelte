<script lang="ts">
  import { SignedIn, SignedOut, SignInButton } from "svelte-clerk";

  // FAQ 數據
  const faqs = [
    {
      question: "為什麼我收不到監督員的確認郵件？",
      answer:
        "請檢查垃圾郵件資料夾，有時郵件會被誤分類。如果仍然找不到，可能是監督員的郵件地址輸入錯誤，請重新設定目標。"
    },
    {
      question: "可以更改已設定的目標嗎？",
      answer:
        "目前版本不支援修改已建立的目標。如果需要更改，可以選擇註銷當前目標，然後重新建立一個新的目標。"
    },
    {
      question: "一次可以設定多少個目標？",
      answer:
        "一次只能設定一個目標。當目標時間到期且監督員回饋後，您才可以設定下一個新目標。這樣的設計讓您能專注於當前目標。"
    },
    {
      question: "星星獎勵有什麼用途？",
      answer:
        "目前星星主要是成就感的象徵。未來我們計畫加入更多用途，例如解鎖個人頭像、成就徽章等功能。"
    },
    {
      question: "監督員需要註冊帳號嗎？",
      answer: "不需要！監督員只需要點擊郵件中的連結即可確認您是否完成目標，整個過程非常簡單。"
    },
    {
      question: "如何註銷目標？",
      answer:
        "您可以選擇註銷（disable）當前目標。一旦註銷，系統就不會再追蹤這個目標。如果之後想要相同的目標，需要重新建立一個新的目標。"
    },
    {
      question: "什麼時候可以設定下一個目標？",
      answer:
        "只有當您的目標時間到期，並且監督員完成回饋確認後，您才能設定下一個新目標。這確保每個目標都能得到完整的追蹤和確認。"
    }
  ];

  // 路線圖數據
  let roadmapItems = $state([
    {
      status: "in-progress",
      icon: "🚀",
      title: "目標進度更新",
      description: "在目標期間內可以更新進度狀態和心得筆記",
      likes: 203
    },
    {
      status: "in-progress",
      icon: "🔕",
      title: "目標註銷功能",
      description: "可以註銷當前目標，停止追蹤但保留記錄",
      likes: 118
    },
    {
      status: "planned",
      icon: "👤",
      title: "個人化頭像系統",
      description: "累積星星解鎖不同的頭像和成就徽章",
      likes: 156
    },
    {
      status: "planned",
      icon: "📚",
      title: "目標歷史記錄",
      description: "查看過去完成和註銷的目標記錄，追蹤個人成長歷程",
      likes: 89
    },
    {
      status: "planned",
      icon: "🔔",
      title: "目標提醒通知",
      description: "目標到期前的手機推播和郵件提醒",
      likes: 98
    },
    {
      status: "backlog",
      icon: "👥",
      title: "好友成就動態",
      description: "看到朋友們完成目標的成就動態",
      likes: 72
    },
    {
      status: "backlog",
      icon: "🤖",
      title: "目標建議系統",
      description: "根據過去經驗推薦適合的目標類型和時間設定",
      likes: 45
    },
    {
      status: "backlog",
      icon: "🎮",
      title: "成就遊戲化",
      description: "添加更多遊戲化元素，如連續完成目標的獎勵",
      likes: 67
    }
  ]);

  const handleLike = (index: number) => {
    roadmapItems[index].likes += 1;
  };

  const getStatusTitle = (status: string) => {
    switch (status) {
      case "in-progress":
        return "In Progress";
      case "planned":
        return "Planned";
      case "backlog":
        return "Backlog";
      default:
        return status;
    }
  };

  const getStatusItems = (status: string) => {
    return roadmapItems.filter((item) => item.status === status);
  };
</script>

<svelte:head>
  <title>反饋與建議 - Goal Star</title>
  <meta
    name="description"
    content="Goal Star 用戶反饋頁面，包含常見問題解答和功能路線圖。分享您的建議，幫助我們讓 Goal Star 變得更好。"
  />
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
  <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
    <h1 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
      <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >反饋與建議</span
      >
    </h1>
    <p class="mb-8 text-xl text-gray-600">
      您的意見讓 Goal Star 變得更好！查看常見問題或了解我們的開發計畫
    </p>
  </div>
</section>

<!-- FAQ Section -->
<section class="bg-white py-20">
  <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-bold text-gray-900">常見問題</h2>
      <p class="text-xl text-gray-600">快速找到您遇到問題的解答</p>
    </div>

    <div class="space-y-6">
      {#each faqs as faq, index}
        <div class="rounded-xl bg-gray-50 p-6 transition-colors hover:bg-gray-100">
          <div class="flex items-start gap-4">
            <div
              class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600"
            >
              {index + 1}
            </div>
            <div class="flex-1">
              <h3 class="mb-3 text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p class="leading-relaxed text-gray-600">{faq.answer}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="mt-12 text-center">
      <p class="mb-4 text-gray-600">找不到您的問題？</p>
      <SignedIn>
        <button
          class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          聯繫客服
        </button>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button
            class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            登入後聲明問題
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  </div>
</section>

<!-- Feedback Form and Roadmap Section -->
<section class="bg-gray-50 py-20">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-bold text-gray-900">分享您的想法與查看路線圖</h2>
      <p class="text-xl text-gray-600">告訴我們您的建議，同時了解我們正在開發的功能</p>
    </div>

    <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <!-- Feedback Form -->
      <div>
        <h3 class="mb-6 text-2xl font-bold text-gray-900">反饋表單</h3>
        <div class="rounded-2xl bg-white p-8 shadow-sm">
          <form class="space-y-6">
            <div>
              <label for="feedback-type" class="mb-2 block text-sm font-medium text-gray-700"
                >反饋類型</label
              >
              <select
                id="feedback-type"
                class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              >
                <option value="">請選擇反饋類型</option>
                <option value="bug">錯誤回報</option>
                <option value="feature">功能建議</option>
                <option value="improvement">改善建議</option>
                <option value="general">一般意見</option>
              </select>
            </div>

            <div>
              <label for="feedback-title" class="mb-2 block text-sm font-medium text-gray-700"
                >標題</label
              >
              <input
                type="text"
                id="feedback-title"
                placeholder="簡短描述您的反饋"
                class="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label for="feedback-content" class="mb-2 block text-sm font-medium text-gray-700"
                >詳細內容</label
              >
              <textarea
                id="feedback-content"
                rows="6"
                placeholder="請詳細描述您的想法或遇到的問題..."
                class="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div class="text-center">
              <SignedIn>
                <button
                  type="submit"
                  class="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white transition-all hover:from-blue-700 hover:to-purple-700"
                >
                  送出反饋
                </button>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    type="button"
                    class="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white transition-all hover:from-blue-700 hover:to-purple-700"
                  >
                    登入後送出反饋
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </form>
        </div>
      </div>

      <!-- Roadmap -->
      <div>
        <h3 class="mb-6 text-2xl font-bold text-gray-900">功能路線圖</h3>
        <div class="space-y-8">
          {#each ["in-progress", "planned", "backlog"] as status}
            <div class="rounded-xl bg-white p-6 shadow-sm">
              <h4 class="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900">
                {#if status === "in-progress"}
                  <div class="h-3 w-3 rounded-full bg-blue-500"></div>
                {:else if status === "planned"}
                  <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                {:else}
                  <div class="h-3 w-3 rounded-full bg-gray-400"></div>
                {/if}
                {getStatusTitle(status)}
              </h4>

              <div class="space-y-3">
                {#each getStatusItems(status) as item, index}
                  {@const itemIndex = roadmapItems.findIndex((roadmapItem) => roadmapItem === item)}
                  <div
                    class="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-gray-50"
                  >
                    <div class="flex-shrink-0 text-2xl">
                      {item.icon}
                    </div>
                    <div class="min-w-0 flex-1">
                      <h5 class="text-sm font-medium text-gray-900">{item.title}</h5>
                      <p class="text-xs leading-relaxed text-gray-600">{item.description}</p>
                    </div>
                    <div class="flex flex-shrink-0 items-center gap-2">
                      <button
                        class="flex items-center gap-1 text-sm text-gray-500 transition-colors hover:text-blue-600"
                        onclick={() => handleLike(itemIndex)}
                      >
                        <span class="text-sm">👍</span>
                        <span class="font-medium">{item.likes}</span>
                      </button>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Community Section -->
<section class="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
  <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
    <h2 class="mb-6 text-3xl font-bold">加入 Goal Star 社群</h2>
    <p class="mb-8 text-xl opacity-90">與其他使用者分享經驗，獲得最新功能資訊</p>

    <div class="flex flex-col justify-center gap-4 sm:flex-row">
      <button
        class="rounded-lg bg-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/30"
      >
        📧 訂閱更新通知
      </button>
      <button
        class="rounded-lg bg-white/20 px-6 py-3 font-medium text-white transition-colors hover:bg-white/30"
      >
        💬 加入討論群組
      </button>
    </div>
  </div>
</section>
