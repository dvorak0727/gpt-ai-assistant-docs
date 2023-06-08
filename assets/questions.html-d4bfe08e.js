import{w as l}from"./app-3c51bb05.js";import{_ as r,M as n,p as o,q as d,R as e,t as i,N as t,z as s,a1 as c}from"./framework-5866ffd3.js";const h=c('<h1 id="常見問題" tabindex="-1"><a class="header-anchor" href="#常見問題" aria-hidden="true">#</a> 常見問題</h1><h2 id="gpt-ai-assistant-是免費的嗎" tabindex="-1"><a class="header-anchor" href="#gpt-ai-assistant-是免費的嗎" aria-hidden="true">#</a> GPT AI Assistant 是免費的嗎？</h2><p>GPT AI Assistant 是一個免費的開源專案。</p><h2 id="gpt-ai-assistant-預設的語言模型是什麼" tabindex="-1"><a class="header-anchor" href="#gpt-ai-assistant-預設的語言模型是什麼" aria-hidden="true">#</a> GPT AI Assistant 預設的語言模型是什麼？</h2>',4),p=e("code",null,"4.0.0",-1),u=e("code",null,"gpt-3.5-turbo",-1),_={href:"https://chat.openai.com/",target:"_blank",rel:"noopener noreferrer"},A=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"訣竅："),e("ul",null,[e("li",null,[i("在 Vercel 平台修改 "),e("code",null,"OPENAI_COMPLETION_MODEL"),i(" 環境變數的值，可以改變語言模型。")])])],-1),I=e("h2",{id:"gpt-ai-assistant-可以連網嗎",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gpt-ai-assistant-可以連網嗎","aria-hidden":"true"},"#"),i(" GPT AI Assistant 可以連網嗎？")],-1),m=e("p",null,"可以，但是會有額度。",-1),v={class:"custom-container tip"},E=e("p",{class:"custom-container-title"},"訣竅：",-1),P={href:"https://serpapi.com/",target:"_blank",rel:"noopener noreferrer"},N=["href"],b=["href"],f=e("li",null,[i("在 Vercel 平台新增 "),e("code",null,"SERPAPI_API_KEY"),i(" 環境變數。")],-1),O=e("li",null,"使用「查詢」指令，讓 AI 連網查詢資料。",-1),V=c('<h2 id="使用-openai-免費方案有哪些限制" tabindex="-1"><a class="header-anchor" href="#使用-openai-免費方案有哪些限制" aria-hidden="true">#</a> 使用 OpenAI 免費方案有哪些限制？</h2><p>使用 OpenAI 免費方案，可以獲得三個月 18 美金的免費額度。如果超過使用額度的話，將無法再和 AI 進行對話。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>使用一組新的電子郵件與手機號碼，註冊一個新的 OpenAI 帳號。</li><li>訂閱 OpenAI 的付費方案。</li></ul></div><h2 id="使用-vercel-免費方案有哪些限制" tabindex="-1"><a class="header-anchor" href="#使用-vercel-免費方案有哪些限制" aria-hidden="true">#</a> 使用 Vercel 免費方案有哪些限制？</h2><p>使用 Vercel 免費方案，會有 10 秒的超時限制。如果 AI 的處理時間太久的話，就會無法取得回應。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台降低 <code>OPENAI_COMPLETION_MAX_TOKENS</code> 環境變數的值。</li><li>在 Vercel 平台降低 <code>APP_MAX_PROMPT_MESSAGES</code> 環境變數的值。</li><li>在 Vercel 平台降低 <code>APP_MAX_PROMPT_TOKENS</code> 環境變數的值。</li><li>訂閱 Vercel 的付費方案，並在 Vercel 平台新增 <code>VERCEL_TEAM_ID</code> 環境變數。</li><li>使用虛擬專用伺服器進行部署。</li></ul></div><h2 id="使用-serpapi-免費方案有哪些限制" tabindex="-1"><a class="header-anchor" href="#使用-serpapi-免費方案有哪些限制" aria-hidden="true">#</a> 使用 SerpApi 免費方案有哪些限制？</h2><p>使用 SerpApi 免費方案，可以獲得 100 次查詢的免費額度。如果超過使用額度的話，將無法再讓 AI 連網查詢資料。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>訂閱 SerpApi 的付費方案。</li></ul></div><h2 id="為什麼-line-平台會出現-403-錯誤" tabindex="-1"><a class="header-anchor" href="#為什麼-line-平台會出現-403-錯誤" aria-hidden="true">#</a> 為什麼 LINE 平台會出現 403 錯誤？</h2><p>在 LINE 平台驗證 Webhook URL 時，出現「403 Forbidden」的錯誤，這代表驗證訊息來源失敗。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台檢查 <code>LINE_CHANNEL_SECRET</code> 環境變數是否填寫正確。</li></ul></div><h2 id="為什麼-line-平台會出現-404-錯誤" tabindex="-1"><a class="header-anchor" href="#為什麼-line-平台會出現-404-錯誤" aria-hidden="true">#</a> 為什麼 LINE 平台會出現 404 錯誤？</h2><p>在 LINE 平台驗證 Webhook URL 時，出現「404 Not Found」的錯誤，代表 Webhook URL 不正確。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 LINE 平台檢查 Webhook URL 是否填寫正確，以及是否加上「<code>/webhook</code>」路徑。</li></ul></div><h2 id="為什麼-ai-不讀不回" tabindex="-1"><a class="header-anchor" href="#為什麼-ai-不讀不回" aria-hidden="true">#</a> 為什麼 AI 不讀不回？</h2><p>在使用 LINE 聊天時，AI 不讀不回，代表 Vercel 或 LINE 相關的環境變數不正確。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台檢查專案名稱是否與 GitHub 專案名稱一致，不一致時必須使用 <code>VERCEL_PROJECT_NAME</code> 指定。</li><li>在 Vercel 平台檢查 <code>LINE_CHANNEL_ACCESS_TOKEN</code> 環境變數是否填寫正確。</li></ul></div><h2 id="為什麼-ai-已讀不回" tabindex="-1"><a class="header-anchor" href="#為什麼-ai-已讀不回" aria-hidden="true">#</a> 為什麼 AI 已讀不回？</h2><p>在使用 LINE 聊天時，AI 已讀不回，代表 OpenAI 相關的環境變數不正確。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台檢查 <code>OPENAI_API_KEY</code> 環境變數是否填寫正確。</li></ul></div><h2 id="為什麼-line-訊息中出現-invalid-character-錯誤" tabindex="-1"><a class="header-anchor" href="#為什麼-line-訊息中出現-invalid-character-錯誤" aria-hidden="true">#</a> 為什麼 LINE 訊息中出現 Invalid character 錯誤？</h2><p>在使用 LINE 聊天時，出現「<code>Invalid character in header content [&quot;Authorization&quot;]</code>」的錯誤，代表 OpenAI 相關的環境變數不正確。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台檢查 <code>OPENAI_API_KEY</code> 環境變數是否填寫正確。</li></ul></div><h2 id="為什麼-line-訊息中出現-400-錯誤" tabindex="-1"><a class="header-anchor" href="#為什麼-line-訊息中出現-400-錯誤" aria-hidden="true">#</a> 為什麼 LINE 訊息中出現 400 錯誤？</h2><p>在使用 LINE 聊天時，出現「400 Bad Request」的錯誤，代表訊息內容違反了 OpenAI 的安全政策。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>避免送出違反 OpenAI 安全政策的訊息。</li></ul></div><h2 id="為什麼-line-訊息中出現-429-錯誤" tabindex="-1"><a class="header-anchor" href="#為什麼-line-訊息中出現-429-錯誤" aria-hidden="true">#</a> 為什麼 LINE 訊息中出現 429 錯誤？</h2><p>在使用 LINE 聊天時，出現「429 Too Many Requests」的錯誤，代表使用者一下子傳送了太多訊息。也有可能是 OpenAI 的免費方案已經到期了，或者是超過使用額度了。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>過一陣子再傳送訊息。</li><li>使用一組新的電子郵件與手機號碼，註冊一個新的 OpenAI 帳號。</li><li>訂閱 OpenAI 的付費方案。</li></ul></div><h2 id="為什麼-line-訊息中出現-500-錯誤" tabindex="-1"><a class="header-anchor" href="#為什麼-line-訊息中出現-500-錯誤" aria-hidden="true">#</a> 為什麼 LINE 訊息中出現 500 錯誤？</h2><p>在使用 LINE 聊天時，出現「500 Internal Server Error」的錯誤，代表 OpenAI 的伺服器可能出現問題。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>過一陣子再傳送訊息。</li></ul></div><h2 id="為什麼-vercel-平台中出現-500-錯誤" tabindex="-1"><a class="header-anchor" href="#為什麼-vercel-平台中出現-500-錯誤" aria-hidden="true">#</a> 為什麼 Vercel 平台中出現 500 錯誤？</h2><p>在 Vercel 平台，出現「500 Internal Server Error」的錯誤，代表 Vercel 相關的環境變數不正確。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台檢查專案名稱是否與 GitHub 專案名稱一致，不一致時必須使用 <code>VERCEL_PROJECT_NAME</code> 指定。</li></ul></div><h2 id="為什麼-vercel-平台中出現-504-錯誤" tabindex="-1"><a class="header-anchor" href="#為什麼-vercel-平台中出現-504-錯誤" aria-hidden="true">#</a> 為什麼 Vercel 平台中出現 504 錯誤？</h2><p>在 Vercel 平台，出現「504 Gateway Timeout」的錯誤，代表 AI 的處理時間太久，無法取得回應。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>訂閱 Vercel 的付費方案，並在 Vercel 平台新增 <code>VERCEL_TEAM_ID</code> 環境變數。</li><li>使用虛擬專用伺服器進行部署。</li></ul></div><h2 id="為什麼-ai-回覆的日期是錯的" tabindex="-1"><a class="header-anchor" href="#為什麼-ai-回覆的日期是錯的" aria-hidden="true">#</a> 為什麼 AI 回覆的日期是錯的？</h2><p>因為 OpenAI 目前提供的模型資料只有訓練到 2021 年，因此 AI 對於 2021 年之後的世界認識有限。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>使用「查詢」指令，讓 AI 連網查詢資料。</li></ul></div><h2 id="可以將-ai-加到群組中嗎" tabindex="-1"><a class="header-anchor" href="#可以將-ai-加到群組中嗎" aria-hidden="true">#</a> 可以將 AI 加到群組中嗎？</h2><p>可以。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 LINE 平台將「Allow bot to join group chats」功能開啟。</li><li>在 Vercel 平台提高 <code>APP_MAX_GROUPS</code> 環境變數的值。</li><li>在 Vercel 平台提高 <code>APP_MAX_USERS</code> 環境變數的值。</li></ul></div><h2 id="可以修改-webhook-url-的路徑嗎" tabindex="-1"><a class="header-anchor" href="#可以修改-webhook-url-的路徑嗎" aria-hidden="true">#</a> 可以修改 Webhook URL 的路徑嗎？</h2><p>可以。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台修改 <code>APP_WEBHOOK_PATH</code> 環境變數的值。</li></ul></div><h2 id="可以修改-api-超時時間嗎" tabindex="-1"><a class="header-anchor" href="#可以修改-api-超時時間嗎" aria-hidden="true">#</a> 可以修改 API 超時時間嗎？</h2><p>可以，但是只有在使用虛擬專用伺服器進行部署時才有用。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台修改 <code>APP_API_TIMEOUT</code> 環境變數的值。</li></ul></div><h2 id="可以修改介面語言嗎" tabindex="-1"><a class="header-anchor" href="#可以修改介面語言嗎" aria-hidden="true">#</a> 可以修改介面語言嗎？</h2><p>可以。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台修改 <code>APP_LANG</code> 環境變數的值。</li></ul></div><h2 id="可以修改群組數量上限嗎" tabindex="-1"><a class="header-anchor" href="#可以修改群組數量上限嗎" aria-hidden="true">#</a> 可以修改群組數量上限嗎？</h2><p>可以。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台修改 <code>APP_MAX_GROUPS</code> 環境變數的值。</li></ul></div><h2 id="可以修改用戶數量上限嗎" tabindex="-1"><a class="header-anchor" href="#可以修改用戶數量上限嗎" aria-hidden="true">#</a> 可以修改用戶數量上限嗎？</h2><p>可以。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台修改 <code>APP_MAX_USERS</code> 環境變數的值。</li></ul></div><h2 id="上下文是什麼" tabindex="-1"><a class="header-anchor" href="#上下文是什麼" aria-hidden="true">#</a> 上下文是什麼？</h2><p>上下文指的是 AI 與使用者的對話語境，是使 AI 理解對話脈絡的秘密。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>當上下文愈豐富時，AI 回應的效果愈好、記住的內容也愈多；但是相對的，處理的時間也愈久、費用也愈貴。</li></ul></div><h2 id="上下文單詞怎麼計算" tabindex="-1"><a class="header-anchor" href="#上下文單詞怎麼計算" aria-hidden="true">#</a> 上下文單詞怎麼計算？</h2><p>單詞（Tokens）指的是 GPT 語言模型所處理的文本內容。</p>',65),T={class:"custom-container tip"},x=e("p",{class:"custom-container-title"},"訣竅：",-1),L={href:"https://beta.openai.com/tokenizer",target:"_blank",rel:"noopener noreferrer"},M=c('<h2 id="可以修改上下文語句的數量上限嗎" tabindex="-1"><a class="header-anchor" href="#可以修改上下文語句的數量上限嗎" aria-hidden="true">#</a> 可以修改上下文語句的數量上限嗎？</h2><p>可以。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台修改 <code>APP_MAX_PROMPT_MESSAGES</code> 環境變數的值。</li></ul></div><h2 id="可以修改上下文單詞的數量上限嗎" tabindex="-1"><a class="header-anchor" href="#可以修改上下文單詞的數量上限嗎" aria-hidden="true">#</a> 可以修改上下文單詞的數量上限嗎？</h2><p>可以。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台修改 <code>APP_MAX_PROMPT_TOKENS</code> 環境變數的值。</li></ul></div><h2 id="可以設定自己的人物設定嗎" tabindex="-1"><a class="header-anchor" href="#可以設定自己的人物設定嗎" aria-hidden="true">#</a> 可以設定自己的人物設定嗎？</h2><p>可以。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台修改 <code>HUMAN_NAME</code> 環境變數的值。</li><li>在 Vercel 平台修改 <code>HUMAN_INIT_PROMPT</code> 環境變數的值。</li><li>在 Vercel 平台修改 <code>BOT_INIT_PROMPT</code> 環境變數的值。</li></ul></div><h2 id="可以設定-ai-的人物設定嗎" tabindex="-1"><a class="header-anchor" href="#可以設定-ai-的人物設定嗎" aria-hidden="true">#</a> 可以設定 AI 的人物設定嗎？</h2><p>可以。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台修改 <code>HUMAN_INIT_PROMPT</code> 環境變數的值。</li><li>在 Vercel 平台修改 <code>BOT_NAME</code> 環境變數的值。</li><li>在 Vercel 平台修改 <code>BOT_INIT_PROMPT</code> 環境變數的值。</li></ul></div><h2 id="可以修改-ai-的回覆語氣嗎" tabindex="-1"><a class="header-anchor" href="#可以修改-ai-的回覆語氣嗎" aria-hidden="true">#</a> 可以修改 AI 的回覆語氣嗎？</h2><p>可以。</p><div class="custom-container tip"><p class="custom-container-title">訣竅：</p><ul><li>在 Vercel 平台修改 <code>BOT_TONE</code> 環境變數的值。</li></ul></div>',15),R={__name:"questions.html",setup(S){return(k,g)=>{const a=n("ExternalLinkIcon");return o(),d("div",null,[h,e("p",null,[i("GPT AI Assistant 在 "),p,i(" 以後的版本，預設使用 "),u,i(" 語言模式，與 "),e("a",_,[i("ChatGPT"),t(a)]),i(" 一樣。")]),A,I,m,e("div",v,[E,e("ul",null,[e("li",null,[i("生成一個 "),e("a",P,[i("SerpApi"),t(a)]),i(" 的 "),e("a",{href:s(l)("/images/serpapi-api-key.png"),target:"_blank"},"API key",8,N),i("，詳見"),e("a",{href:s(l)("/environments#一覽"),target:"_blank"},"環境變數",8,b),i("說明。")]),f,O])]),V,e("div",T,[x,e("ul",null,[e("li",null,[i("可以使用 OpenAI 提供的 "),e("a",L,[i("Tokenizer"),t(a)]),i(" 進行計算。")])])]),M])}}},U=r(R,[["__file","questions.html.vue"]]);export{U as default};
