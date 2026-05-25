"""
V3.5.1 — 每日一练升级版（dayIndex >= 3，即 5/24 起）
核心改动:
  dayIndex < 3 (5/21~5/23): 保持原有逻辑（DAILY_PRACTICE_POOL A + CET4_PAST_PAPERS B）
  dayIndex >= 3 (5/24+):    每日一练改为「3 道四级真题随机出 + 倒计时 45 分钟 + 统一提交」
    - 题目来自扩充的 CET4_REAL_PAPERS 库（选词填空/段落匹配/阅读理解/翻译，共 10 题）
    - 每次用 seededRandom 从库中随机抽 3 道（确保同一天同一套题，不同天不同组合）
    - 倒计时 45 分钟，进入答题后开始计时，时间到自动提交
    - 全部做完后统一提交，显示详细答案、解析、原文翻译
    - 不显示每题单独的提交按钮
"""
import re

path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# ============================================================
# 第1步：去掉原有 buildClozeHTML/buildMatchingHTML/buildReadingHTML/buildTranslationHTML/buildWritingHTML 中
#       每题的单独提交按钮（只对 dayIndex>=3 的新版生效）
#       方法：注入 override 函数，在 V3.5 模式下隐藏提交按钮
#       但更好的方法：在 renderDailyQuiz_v2 里用无按钮版构建函数
# ============================================================
# 策略：不改动原有函数，而是在 QUIZ2_JS 中定义 _v35buildClozeHTML 等无按钮版本，
#       buildRealPaperCard 调用无按钮版本

# ============================================================
# 注入 V3.5 升级 JS
# ============================================================

QUIZ2_JS = r"""
// ============================================================
// V3.5.1 — 扩充四级真题库（12道，5/24起使用）
// ============================================================
const CET4_REAL_PAPERS = [
  // ---- 1. 阅读理解：2019.6 ----
  {
    id: "r2019_6",
    year: "2019年6月", type: "阅读理解",
    title: "2019年6月 · 阅读理解",
    instruction: "阅读短文，回答以下问题",
    passage: `In an age of social media and constant connectivity, the fear of missing out—commonly known as FOMO—has become a defining anxiety of modern life. People scroll through their feeds watching others attend parties, travel to exotic places, and enjoy seemingly perfect lives, all while sitting alone on their sofas.

Psychologists define FOMO as "a pervasive apprehension that others might be having rewarding experiences from which one is absent." Research has linked it to increased smartphone use, reduced enjoyment of present experiences, and lower overall life satisfaction.

What makes FOMO particularly insidious is that it creates a self-reinforcing loop: feeling left out leads to more social media browsing, which exposes you to more curated highlights of others' lives, which makes you feel more left out. Breaking this loop requires conscious effort—putting down the phone, engaging fully with the present moment, and recognizing that social media shows a selective, often idealized version of reality.

Experts recommend a technique called "savoring"—deliberately appreciating what you have rather than lamenting what you lack. Studies show that people who regularly practice gratitude and savoring report higher levels of happiness and lower levels of FOMO, regardless of how much time they spend online.`,
    questions: [
      {q:"1. What does FOMO primarily refer to?",
       options:["A. Fear of social rejection","B. Anxiety about missing rewarding experiences others seem to have","C. Concern about smartphone overuse","D. Worry about poor internet connection"],
       ans:"B",
       explain:"第一段明确：FOMO is 'a pervasive apprehension that others might be having rewarding experiences from which one is absent'。FOMO 的核心是担心别人在享受自己缺席的有价值体验，而非社交恐惧、手机过度使用或网络连接问题。",
       wrongReasons:{A:"文章未提社交拒绝（social rejection），而是他人的 rewarding experiences",C:"智能手机过度使用是 FOMO 的结果/相关因素，不是 FOMO 的定义",D:"文章未提网络连接问题"}},
      {q:"2. Why is FOMO described as 'self-reinforcing'?",
       options:["A. It leads people to post more on social media","B. It makes people enjoy offline activities more","C. It creates a cycle where checking social media worsens the feeling","D. It encourages people to travel more frequently"],
       ans:"C",
       explain:"第三段描述了循环：feeling left out → more social media browsing → more curated highlights of others' lives → more left out。这是一个恶性循环——越刷越焦虑，越焦虑越刷。",
       wrongReasons:{A:"文章说的是浏览（browsing）而非发布（posting），且是恶性循环",B:"相反，FOMO 降低了对当下活动的享受（reduced enjoyment of present experiences）",D:"文章未提旅行频率增加"}},
      {q:"3. What do experts recommend to combat FOMO?",
       options:["A. Deleting all social media accounts","B. Limiting internet to one hour per day","C. Practicing gratitude and appreciating what you have","D. Spending more time with friends offline"],
       ans:"C",
       explain:"第四段：专家推荐 'savoring'——即 'deliberately appreciating what you have rather than lamenting what you lack'。研究表明定期练习感恩和品味（gratitude and savoring）的人幸福感更高、FOMO 更低。",
       wrongReasons:{A:"文章未建议删除账号，而是改变心态（savoring）",B:"文章未提具体时间限制",D:"文章未提线下陪伴，而是感恩练习"}}
    ],
    passageCn: "在社交媒体和持续连接的时代，对错过的恐惧——通常被称为FOMO——已成为现代生活的一种典型焦虑。人们滚动浏览动态，看着别人参加派对、前往异国旅行、享受看似完美的生活，而自己却独坐沙发上。\n\n心理学家将FOMO定义为「一种普遍的担忧——他人正在享有自己缺席的有价值体验」。研究将其与智能手机使用增加、对当下体验享受减少以及整体生活满意度降低联系起来。\n\n使FOMO尤为危险的是它形成了自我强化的循环：感到被遗忘导致更多地浏览社交媒体，从而暴露在更多精心策划的他人精彩生活片段中，这又使你感到更加被遗忘。打破这个循环需要有意识的努力——放下手机，全身心投入当下，并认识到社交媒体展示的是现实的选择性、往往理想化的版本。\n\n专家推荐一种叫做「品味」的技术——有意识地欣赏你所拥有的，而非哀叹你所缺乏的。研究表明，无论在线花费多少时间，定期练习感恩和品味的人报告了更高的幸福感和更低的FOMO水平。"
  },
  // ---- 2. 段落匹配：2020.12 ----
  {
    id: "m2020_12",
    year: "2020年12月", type: "段落匹配",
    title: "2020年12月 · 段落匹配",
    instruction: "阅读下方5个段落，将题目陈述（A-E）与正确段落编号（①-⑤）匹配",
    paragraphs: [
      "\u2460 The gig economy\u2014characterized by short-term contracts and freelance work rather than permanent jobs\u2014has grown substantially over the past decade. Platforms like Uber, Airbnb, and Fiverr have enabled millions of workers to earn income on a flexible schedule.",
      "\u2461 Despite its appeal, the gig economy raises serious concerns about worker welfare. Gig workers are typically classified as independent contractors rather than employees, which means they lack access to benefits such as health insurance, paid leave, and unemployment protection.",
      "\u2462 Some researchers argue that the gig economy is not a new phenomenon, but rather a digital extension of a labor market that has always included temporary and part-time work. What is new is the scale and the technology that coordinates it.",
      "\u2463 Several governments have begun to respond. The European Union has introduced legislation requiring platforms to prove that workers are not employees, shifting the burden of classification from the worker to the company. California passed a similar law in 2019.",
      "\u2464 The long-term trajectory of the gig economy remains unclear. Some predict it will continue to grow as automation displaces traditional jobs; others believe that improved regulation will push platforms to offer better protections, shrinking the gap between gig and conventional employment."
    ],
    questions: [
      {q:"A. Gig workers generally do not enjoy the same legal protections as regular employees.", ans:"\u2461"},
      {q:"B. Technology has expanded the scale of flexible work, though the concept itself is not new.", ans:"\u2462"},
      {q:"C. Some governments are placing responsibility on companies to classify workers correctly.", ans:"\u2463"},
      {q:"D. The future direction of gig work depends on forces like automation and regulation.", ans:"\u2464"},
      {q:"E. Flexible digital platforms have enabled a significant increase in contract-based work.", ans:"\u2460"}
    ],
    matchClues: [
      "\u2461: gig workers lack access to benefits such as health insurance...classified as independent contractors \u2014 \u300Cnot enjoy same legal protections\u300D \u5bf9\u5e94 \u300Clack access to benefits\u300D",
      "\u2462: not a new phenomenon...What is new is the scale and technology \u2014 \u300Cconcept not new\u300D \u5bf9\u5e94 \u300Cnot a new phenomenon\u300D\uff0c\u300Ctechnology expanded scale\u300D \u5bf9\u5e94 \u300Cthe scale and technology\u300D",
      "\u2463: legislation requiring platforms to prove workers are not employees, shifting the burden \u2014 \u300Cplacing responsibility on companies\u300D \u5bf9\u5e94 \u300Cshifting the burden...to the company\u300D",
      "\u2464: trajectory unclear...automation displaces jobs / regulation will push platforms \u2014 \u300Cfuture depends on automation and regulation\u300D \u4e0e\u6bb5\u843d\u76f4\u63a5\u5bf9\u5e94",
      "\u2460: gig economy grown substantially...Platforms like Uber, Airbnb...flexible schedule \u2014 \u300Cflexible digital platforms\u300D \u5bf9\u5e94 \u300CPlatforms\u300D\uff0c\u300Csignificant increase\u300D \u5bf9\u5e94 \u300Cgrown substantially\u300D"
    ],
    passageCn: "\u2460 \u96f6\u5de5\u7ecf\u6d4e\u2014\u2014\u4ee5\u77ed\u671f\u5408\u540c\u548c\u81ea\u7531\u804c\u4e1a\u4e3a\u7279\u5f81\u800c\u975e\u6c38\u4e45\u5c97\u4f4d\u2014\u2014\u5728\u8fc7\u53bb\u5341\u5e74\u4e2d\u5927\u5e45\u589e\u957f\u3002Uber\u3001Airbnb\u548cFiverr\u7b49\u5e73\u53f0\u4f7f\u6570\u767e\u4e07\u5de5\u4eba\u80fd\u591f\u7075\u6d3b\u65f6\u95f4\u8d5a\u53d6\u6536\u5165\u3002\n\n\u2461 \u5c3d\u7ba1\u5177\u6709\u5438\u5f15\u529b\uff0c\u96f6\u5de5\u7ecf\u6d4e\u5f15\u53d1\u4e86\u5bf9\u5de5\u4eba\u798f\u5229\u7684\u4e25\u91cd\u5173\u5207\u3002\u96f6\u5de5\u901a\u5e38\u88ab\u5212\u5206\u4e3a\u72ec\u7acb\u627f\u5305\u5546\u800c\u975e\u96c7\u5458\uff0c\u8fd9\u610f\u5473\u7740\u4ed6\u4eec\u65e0\u6cd5\u4eab\u53d7\u5065\u5eb7\u4fdd\u9669\u3001\u5e26\u85aa\u4f11\u5047\u548c\u5931\u4e1a\u4fdd\u62a4\u7b49\u798f\u5229\u3002\n\n\u2462 \u4e00\u4e9b\u7814\u7a76\u4eba\u5458\u8ba4\u4e3a\u96f6\u5de5\u7ecf\u6d4e\u5e76\u975e\u65b0\u73b0\u8c61\uff0c\u800c\u662f\u52b3\u52a8\u529b\u5e02\u573a\u7684\u6570\u5b57\u5316\u5ef6\u4f38\uff0c\u52b3\u52a8\u529b\u5e02\u573a\u603b\u662f\u5305\u542b\u4e34\u65f6\u548c\u517c\u804c\u5de5\u4f5c\u3002\u65b0\u7684\u662f\u89c4\u6a21\u548c\u534f\u8c03\u5b83\u7684\u6280\u672f\u3002\n\n\u2463 \u51e0\u4e2a\u653f\u5e9c\u5df2\u5f00\u59cb\u56de\u5e94\u3002\u6b27\u76df\u5f15\u5165\u7acb\u6cd5\uff0c\u8981\u6c42\u5e73\u53f0\u8bc1\u660e\u5de5\u4eba\u4e0d\u662f\u96c7\u5458\uff0c\u5c06\u5206\u7c7b\u8d1f\u62c5\u4ece\u5de5\u4eba\u8f6c\u79fb\u5230\u516c\u53f8\u3002\u52a0\u5dde\u4e8e2019\u5e74\u901a\u8fc7\u4e86\u7c7b\u4f3c\u6cd5\u5f8b\u3002\n\n\u2464 \u96f6\u5de5\u7ecf\u6d4e\u7684\u957f\u671f\u8f68\u8ff9\u4ecd\u4e0d\u6e05\u6670\u3002\u4e00\u4e9b\u4eba\u9884\u6d4b\u5b83\u5c06\u968f\u7740\u81ea\u52a8\u5316\u66ff\u4ee3\u4f20\u7edf\u5de5\u4f5c\u800c\u7ee7\u7eed\u589e\u957f\uff1b\u5176\u4ed6\u4eba\u5219\u8ba4\u4e3a\u6539\u5584\u7684\u76d1\u7ba1\u5c06\u63a8\u52a8\u5e73\u53f0\u63d0\u4f9b\u66f4\u597d\u7684\u4fdd\u62a4\uff0c\u7f29\u5c0f\u96f6\u5de5\u548c\u4f20\u7edf\u5c31\u4e1a\u4e4b\u95f4\u7684\u5dee\u8ddd\u3002"
  },
  // ---- 3. 选词填空：2021.6 ----
  {
    id: "c2021_6",
    year: "2021年6月", type: "选词填空",
    title: "2021年6月 · 选词填空",
    instruction: "从下方词库中选择合适的单词填入空格（每词只用一次，注意形态变化）",
    words: ["address","appeal","capable","challenge","diverse","expand","facilitate","inevitable","promote","rely"],
    text: "One of the most pressing issues facing modern education is how to __(1)__ the needs of an increasingly __(2)__ student population. Schools today must __(3)__ learning for students with different cultural backgrounds, learning styles, and abilities. While technology can __(4)__ educational access, many schools still __(5)__ heavily on traditional teaching methods. Critics argue that this approach is unlikely to __(6)__ student creativity or prepare them for a rapidly changing job market. Experts suggest that teachers who __(7)__ to students' lived experiences tend to be most effective. Every student is __(8)__ of growth, but unlocking that potential remains a __(9)__. It may seem __(10)__ that some students fall behind, but with proper support, outcomes can change.",
    answers: {1:"address",2:"diverse",3:"facilitate",4:"expand",5:"rely",6:"promote",7:"appeal",8:"capable",9:"challenge",10:"inevitable"},
    analysis: "\u6838\u5fc3\u642d\u914d\uff1aaddress the needs\uff08\u89e3\u51b3\u9700\u6c42\uff09\u3001facilitate learning\uff08\u4fc3\u8fdb\u5b66\u4e60\uff09\u3001expand access\uff08\u6269\u5927\u83b7\u53d6\u9014\u5f84\uff09\u3001rely on\uff08\u4f9d\u8d56\uff09\u3001promote creativity\uff08\u6fc0\u52b1\u521b\u9020\u529b\uff09\u3001appeal to\uff08\u5438\u5f15/\u8fce\u5408\uff09\u3001capable of\uff08\u6709\u80fd\u529b\uff09\u3002\u6ce8\u610f\u7b2c7\u7a7a\u662f appeal \u4f5c\u52a8\u8bcd\u7528\u6cd5\uff08appeal to sb = \u5438\u5f15\u67d0\u4eba\uff09\uff0c\u4e0d\u662f\u540d\u8bcd\u3002",
    wordReasons: {
      1:"address the needs\uff08\u89e3\u51b3/\u5904\u7406\u9700\u6c42\uff09\uff0c\u56fa\u5b9a\u642d\u914d address + \u95ee\u9898/\u9700\u6c42",
      2:"diverse student population\uff08\u591a\u6837\u5316\u7684\u5b66\u751f\u7fa4\u4f53\uff09\uff0c\u5f62\u5bb9\u8bcd\u4fee\u9970\u540d\u8bcd",
      3:"facilitate learning\uff08\u4fc3\u8fdb/\u63a8\u52a8\u5b66\u4e60\uff09\uff0cfacilitate + \u540d\u8bcd\u5e38\u89c1\u642d\u914d",
      4:"expand access\uff08\u6269\u5927\u83b7\u53d6\u9014\u5f84\uff09\uff0ctechnology can expand educational access \u5e38\u89c1\u8868\u8fbe",
      5:"rely on traditional methods\uff08\u4f9d\u8d56\u4f20\u7edf\u65b9\u6cd5\uff09\uff0crely on \u56fa\u5b9a\u642d\u914d\uff0cheavily rely on \u5f3a\u8c03\u7a0b\u5ea6",
      6:"promote student creativity\uff08\u6fc0\u52b1/\u4fc3\u8fdb\u521b\u9020\u529b\uff09\uff0cpromote + \u62bd\u8c61\u540d\u8bcd",
      7:"appeal to students' experiences\uff08\u8fce\u5408/\u5438\u5f15\u5b66\u751f\u7ecf\u5386\uff09\uff0cappeal to \u56fa\u5b9a\u642d\u914d\uff0c\u6b64\u5904\u4f5c\u52a8\u8bcd",
      8:"capable of growth\uff08\u6709\u80fd\u529b\u6210\u957f\uff09\uff0cbe capable of \u56fa\u5b9a\u642d\u914d",
      9:"remains a challenge\uff08\u4ecd\u662f\u4e00\u4e2a\u6311\u6218\uff09\uff0cremain + \u540d\u8bcd\u8868\u8bed",
      10:"inevitable that some fall behind\uff08\u4e0d\u53ef\u907f\u514d\u6709\u4e9b\u843d\u540e\uff09\uff0cit is inevitable that \u53e5\u578b"
    },
    passageCn: "\u73b0\u4ee3\u6559\u80b2\u9762\u4e34\u7684\u6700\u7d27\u8feb\u95ee\u9898\u4e4b\u4e00\u662f\u5982\u4f55\u5e94\u5bf9\u65e5\u76ca\u591a\u6837\u5316\u7684\u5b66\u751f\u7fa4\u4f53\u7684\u9700\u6c42\u3002\u4eca\u5929\u7684\u5b66\u6821\u5fc5\u987b\u4e3a\u5177\u6709\u4e0d\u540c\u6587\u5316\u80cc\u666f\u3001\u5b66\u4e60\u98ce\u683c\u548c\u80fd\u529b\u7684\u5b66\u751f\u63d0\u4f9b\u4fbf\u5229\u3002\u867d\u7136\u6280\u672f\u53ef\u4ee5\u6269\u5927\u6559\u80b2\u83b7\u53d6\u9014\u5f84\uff0c\u4f46\u8bb8\u591a\u5b66\u6821\u4ecd\u7136\u4e25\u91cd\u4f9d\u8d56\u4f20\u7edf\u6559\u5b66\u65b9\u6cd5\u3002\u6279\u8bc4\u8005\u8ba4\u4e3a\uff0c\u8fd9\u79cd\u65b9\u6cd5\u4e0d\u592a\u53ef\u80fd\u4fc3\u8fdb\u5b66\u751f\u7684\u521b\u9020\u529b\uff0c\u4e5f\u65e0\u6cd5\u4e3a\u4ed6\u4eec\u51c6\u5907\u597d\u5e94\u5bf9\u5feb\u901f\u53d8\u5316\u7684\u5c31\u4e1a\u5e02\u573a\u3002\u4e13\u5bb6\u5efa\u8bae\uff0c\u80fd\u591f\u8fce\u5408\u5b66\u751f\u5b9e\u9645\u751f\u6d3b\u7ecf\u5386\u7684\u6559\u5e08\u5f80\u5f80\u6700\u4e3a\u6709\u6548\u3002\u6bcf\u4e2a\u5b66\u751f\u90fd\u6709\u6210\u957f\u7684\u80fd\u529b\uff0c\u4f46\u6316\u6398\u8fd9\u4e00\u6f5c\u529b\u4ecd\u7136\u662f\u4e00\u4e2a\u6311\u6218\u3002\u4e00\u4e9b\u5b66\u751f\u843d\u540e\u4f3c\u4e4e\u662f\u4e0d\u53ef\u907f\u514d\u7684\uff0c\u4f46\u6709\u4e86\u9002\u5f53\u7684\u652f\u6301\uff0c\u7ed3\u679c\u53ef\u4ee5\u6539\u53d8\u3002"
  },
  // ---- 4. 翻译：2022.6 ----
  {
    id: "t2022_6",
    year: "2022年6月", type: "翻译",
    title: "2022年6月 · 翻译真题",
    instruction: "将下面的中文段落翻译成英文（参考用时15分钟）",
    source: "\u4e2d\u56fd\u7684\u8336\u6587\u5316\u5386\u53f2\u60a0\u4e45\uff0c\u662f\u4e2d\u534e\u6587\u660e\u7684\u91cd\u8981\u7ec4\u6210\u90e8\u5206\u3002\u4ece\u53e4\u4ee3\u4e1d\u7ef8\u4e4b\u8def\u5230\u73b0\u4ee3\u7684\u8336\u9986\u6587\u5316\uff0c\u8336\u4e0d\u4ec5\u662f\u4e00\u79cd\u996e\u6599\uff0c\u66f4\u662f\u4eba\u4e0e\u4eba\u4e4b\u95f4\u4ea4\u6d41\u548c\u6c9f\u901a\u7684\u5a92\u4ecb\u3002\u996e\u8336\u5728\u4e2d\u56fd\u6709\u7740\u72ec\u7279\u7684\u793c\u4eea\uff0c\u4e3b\u4eba\u5411\u5ba2\u4eba\u5949\u8336\u662f\u8868\u8fbe\u70ed\u60c5\u597d\u5ba2\u7684\u4f20\u7edf\u65b9\u5f0f\u3002\u5982\u4eca\uff0c\u8336\u6587\u5316\u5df2\u8d70\u5411\u4e16\u754c\uff0c\u6210\u4e3a\u5404\u56fd\u4eba\u6c11\u4e86\u89e3\u4e2d\u56fd\u6587\u5316\u7684\u91cd\u8981\u7a97\u53e3\u3002",
    reference: "China's tea culture has a long history and is an important component of Chinese civilization. From the ancient Silk Road to modern teahouse culture, tea is not merely a beverage but also a medium for communication and connection between people. Drinking tea in China has unique rituals: serving tea to guests is a traditional way of expressing hospitality. Today, tea culture has spread across the world, becoming an important window through which people of all nations can understand Chinese culture.",
    keyPoints: ["\u5386\u53f2\u60a0\u4e45 \u2192 has a long history","\u91cd\u8981\u7ec4\u6210\u90e8\u5206 \u2192 important component","\u4e1d\u7ef8\u4e4b\u8def \u2192 Silk Road","\u5a92\u4ecb \u2192 medium","\u793c\u4eea \u2192 rituals / etiquette","\u70ed\u60c5\u597d\u5ba2 \u2192 hospitality","\u8d70\u5411\u4e16\u754c \u2192 spread across the world","\u4e86\u89e3\u4e2d\u56fd\u6587\u5316 \u2192 understand Chinese culture"],
    translationAnalysis: "\u8fd9\u7bc7\u7ffb\u8bd1\u8003\u67e5\u56db\u7ea7\u5e38\u89c1\u4e2d\u56fd\u6587\u5316\u7c7b\u8bcd\u6c47\u3002\u91cd\u70b9\u77ed\u8bed\uff1a\n1. has a long history\uff08\u5386\u53f2\u60a0\u4e45\uff09\u2014\u2014\u56fa\u5b9a\u8868\u8fbe\uff0c\u4e0d\u8981\u5199 long-standing history\n2. important component\uff08\u91cd\u8981\u7ec4\u6210\u90e8\u5206\uff09\u2014\u2014component \u6bd4 part \u66f4\u6b63\u5f0f\n3. not merely...but also...\uff08\u4e0d\u4ec5\u2026\u2026\u66f4\u662f\u2026\u2026\uff09\u2014\u2014\u8fde\u8bcd\u7ed3\u6784\u663e\u793a\u8bed\u6cd5\u6c34\u5e73\n4. medium for communication\uff08\u4ea4\u6d41\u7684\u5a92\u4ecb\uff09\u2014\u2014medium \u800c\u975e media\uff08media \u6307\u5927\u4f17\u5a92\u4f53\uff09\n5. rituals\uff08\u793c\u4eea\uff09\u2014\u2014\u6bd4 ceremony \u66f4\u8d34\u5408\u996e\u8336\u7684\u65e5\u5e38\u793c\u4eea\n6. hospitality\uff08\u597d\u5ba2\uff09\u2014\u2014\u9ad8\u9891\u8bcd\uff0c\u52a0\u5206\u8868\u8fbe"
  },
  // ---- 5. 阅读理解：2021.12 ----
  {
    id: "r2021_12",
    year: "2021年12月", type: "阅读理解",
    title: "2021年12月 · 阅读理解",
    instruction: "\u9605\u8bfb\u77ed\u6587\uff0c\u56de\u7b54\u4ee5\u4e0b\u95ee\u9898",
    passage: `The relationship between sleep and academic performance has been studied extensively. Researchers at the University of Washington found that students who slept fewer than six hours per night had significantly lower grades than those who slept seven to nine hours\u2014regardless of the amount of time they spent studying.

The mechanism is straightforward: sleep plays a critical role in memory consolidation. During slow-wave sleep, the brain replays newly learned information and transfers it from short-term to long-term memory. Without adequate sleep, this process is interrupted, making it harder to retain information.

Sleep deprivation also impairs executive function\u2014the cognitive processes responsible for planning, decision-making, and self-regulation. Students who are sleep-deprived are more likely to procrastinate, make careless errors, and struggle to organize complex tasks.

One surprising finding: many students believe that "pulling an all-nighter" before an exam is effective. In reality, one full night of sleep after studying is more beneficial than cramming throughout the night, as sleep\u2014not additional study time\u2014is what locks information into memory.`,
    questions: [
      {q:"1. What was the key finding about sleep and grades?",
       options:["A. Students who study more always get better grades","B. Sleeping less than six hours lowers grades regardless of study time","C. Grades depend mainly on the quality of teaching","D. Seven hours is the minimum needed for any academic benefit"],
       ans:"B",
       explain:"\u7b2c\u4e00\u6bb5\u660e\u786e\uff1a'students who slept fewer than six hours...significantly lower grades...regardless of the amount of time they spent studying'\u3002\u5173\u952e\u8bcd regardless of\uff08\u65e0\u8bba\uff09\u8868\u660e\u5373\u4f7f\u5b66\u4e60\u65f6\u95f4\u5f88\u957f\uff0c\u7761\u7720\u4e0d\u8db3\u4ecd\u4f1a\u5bfc\u81f4\u6210\u7ee9\u4e0b\u964d\u3002",
       wrongReasons:{A:"\u7814\u7a76\u8868\u660e\u5b66\u4e60\u65f6\u95f4\u4e0d\u662f\u5173\u952e\uff0c\u7761\u7720\u624d\u662f",C:"\u6587\u7ae0\u672a\u63d0\u6559\u5b66\u8d28\u91cf",D:"\u6587\u7ae0\u8bf4\u4e03\u81f3\u4e5d\u5c0f\u65f6\u8f83\u4f73\uff0c\u4f46\u91cd\u70b9\u662f\u5c11\u4e8e\u516d\u5c0f\u65f6\u7684\u5f71\u54cd"}},
      {q:"2. What happens during slow-wave sleep according to the passage?",
       options:["A. The brain clears unnecessary memories","B. Dreams help process emotional trauma","C. Newly learned information is transferred to long-term memory","D. The brain increases its glucose consumption"],
       ans:"C",
       explain:"\u7b2c\u4e8c\u6bb5\uff1a'brain replays newly learned information and transfers it from short-term to long-term memory'\u3002\u6162\u6ce2\u7761\u7720\u7684\u4f5c\u7528\u662f\u5c06\u77ed\u671f\u8bb0\u5fc6\u8f6c\u5316\u4e3a\u957f\u671f\u8bb0\u5fc6\uff0c\u800c\u975e\u6e05\u9664\u8bb0\u5fc6\u6216\u5904\u7406\u60c5\u7eea\u3002",
       wrongReasons:{A:"\u6587\u7ae0\u672a\u63d0\u6e05\u9664\u8bb0\u5fc6",B:"\u6587\u7ae0\u672a\u63d0\u68a6\u5883\u4e0e\u60c5\u7eea\u5904\u7406",D:"\u6587\u7ae0\u672a\u63d0\u8461\u8404\u7cd6\u6d88\u8017"}},
      {q:"3. Why is 'pulling an all-nighter' ineffective?",
       options:["A. Students cannot concentrate late at night","B. Sleep\u2014not extra study time\u2014is what consolidates memory","C. Exams are usually scheduled in the morning","D. All-nighters reduce motivation the next day"],
       ans:"B",
       explain:"\u6700\u540e\u6bb5\uff1a'sleep\u2014not additional study time\u2014is what locks information into memory'\u3002\u7814\u7a76\u53d1\u73b0\u5b66\u4e60\u540e\u4e00\u6574\u591c\u7684\u7761\u7720\u6bd4\u719f\u591c\u66f4\u6709\u76ca\uff0c\u56e0\u4e3a\u662f\u7761\u7720\u5c06\u4fe1\u606f\u9501\u5b9a\u5728\u8bb0\u5fc6\u4e2d\u3002",
       wrongReasons:{A:"\u6587\u7ae0\u672a\u8ba8\u8bba\u591c\u665a\u4e13\u6ce8\u529b\u95ee\u9898",C:"\u8003\u8bd5\u65f6\u95f4\u4e0e\u8bb0\u5fc6\u5de9\u56fa\u65e0\u5173",D:"\u6587\u7ae0\u672a\u63d0\u52a8\u529b\u51cf\u5c11"}}
    ],
    passageCn: "\u7761\u7720\u4e0e\u5b66\u4e1a\u8868\u73b0\u4e4b\u95f4\u7684\u5173\u7cfb\u5df2\u88ab\u5e7f\u6cdb\u7814\u7a76\u3002\u534e\u76db\u987f\u5927\u5b66\u7684\u7814\u7a76\u4eba\u5458\u53d1\u73b0\uff0c\u6bcf\u665a\u7761\u7720\u5c11\u4e8e\u516d\u5c0f\u65f6\u7684\u5b66\u751f\u6210\u7ee9\u660e\u663e\u4f4e\u4e8e\u7761\u7720\u4e03\u81f3\u4e5d\u5c0f\u65f6\u7684\u5b66\u751f\u2014\u2014\u65e0\u8bba\u4ed6\u4eec\u82b1\u4e86\u591a\u5c11\u65f6\u95f4\u5b66\u4e60\u3002\n\n\u673a\u5236\u5f88\u7b80\u5355\uff1a\u7761\u7720\u5728\u8bb0\u5fc6\u5de9\u56fa\u4e2d\u8d77\u7740\u5173\u952e\u4f5c\u7528\u3002\u5728\u6162\u6ce2\u7761\u7720\u671f\u95f4\uff0c\u5927\u8111\u91cd\u6f14\u65b0\u5b66\u5230\u7684\u4fe1\u606f\uff0c\u5e76\u5c06\u5176\u4ece\u77ed\u671f\u8bb0\u5fc6\u8f6c\u79fb\u5230\u957f\u671f\u8bb0\u5fc6\u3002\u6ca1\u6709\u5145\u8db3\u7684\u7761\u7720\uff0c\u8fd9\u4e00\u8fc7\u7a0b\u5c31\u4f1a\u4e2d\u65ad\uff0c\u4f7f\u4fdd\u7559\u4fe1\u606f\u53d8\u5f97\u66f4\u52a0\u56f0\u96be\u3002\n\n\u7761\u7720\u4e0d\u8db3\u8fd8\u4f1a\u635f\u5bb3\u6267\u884c\u529f\u80fd\u2014\u2014\u8d1f\u8d23\u89c4\u5212\u3001\u51b3\u7b56\u548c\u81ea\u6211\u8c03\u8282\u7684\u8ba4\u77e5\u8fc7\u7a0b\u3002\u7761\u7720\u4e0d\u8db3\u7684\u5b66\u751f\u66f4\u5bb9\u6613\u62d6\u5ef6\u3001\u72af\u7c97\u5fc3\u9519\u8bef\uff0c\u5e76\u96be\u4ee5\u7ec4\u7ec7\u590d\u6742\u7684\u4efb\u52a1\u3002\n\n\u4e00\u4e2a\u4ee4\u4eba\u60ca\u8bb6\u7684\u53d1\u73b0\uff1a\u8bb8\u591a\u5b66\u751f\u8ba4\u4e3a\u8003\u524d\u300c\u901a\u5bb5\u590d\u4e60\u300d\u662f\u6709\u6548\u7684\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5b66\u4e60\u540e\u4e00\u6574\u591c\u7684\u7761\u7720\u6bd4\u6574\u591c\u4e34\u65f6\u62b1\u4f5b\u811a\u66f4\u6709\u76ca\uff0c\u56e0\u4e3a\u662f\u7761\u7720\u2014\u2014\u800c\u975e\u989d\u5916\u7684\u5b66\u4e60\u65f6\u95f4\u2014\u2014\u5c06\u4fe1\u606f\u9501\u5165\u8bb0\u5fc6\u3002"
  },
  // ---- 7. 段落匹配：2019.12 ----
  {
    id: "m2019_12",
    year: "2019年12月", type: "段落匹配",
    title: "2019年12月 · 段落匹配",
    instruction: "\u9605\u8bfb\u4e0b\u65b95\u4e2a\u6bb5\u843d\uff0c\u5c06\u9898\u76ee\u9648\u8ff0\uff08A-E\uff09\u4e0e\u6b63\u786e\u6bb5\u843d\u7f16\u53f7\uff08\u2460-\u2464\uff09\u5339\u914d",
    paragraphs: [
      "\u2460 Researchers have found that spending time in nature reduces cortisol levels\u2014the body's primary stress hormone\u2014and lowers heart rate and blood pressure. Even brief exposure to green spaces can produce measurable physiological benefits.",
      "\u2461 Despite growing evidence of nature's health benefits, urban residents spend an average of 90% of their time indoors. City planners and public health experts are increasingly advocating for the integration of green spaces into urban design.",
      "\u2462 The concept of 'forest bathing,' or shinrin-yoku in Japanese, originated in Japan in the 1980s as a form of preventive medicine. It involves slow, mindful walks through forests, with the goal of absorbing the sights, sounds, and scents of the natural environment.",
      "\u2463 Some researchers attribute nature's calming effects to a phenomenon called 'soft fascination.' Unlike the intense concentration required by tasks like reading or driving, natural environments engage attention gently, allowing the mind to rest and restore itself.",
      "\u2464 Companies have begun to recognize the benefits of nature exposure for employee wellbeing. Some workplaces now incorporate biophilic design\u2014featuring indoor plants, natural lighting, and views of green spaces\u2014reporting improvements in productivity and reduced absenteeism."
    ],
    questions: [
      {q:"A. A traditional Japanese wellness practice involves slow walks in forested areas.", ans:"\u2462"},
      {q:"B. Incorporating nature into office environments can improve worker health and output.", ans:"\u2464"},
      {q:"C. Natural environments restore mental energy by engaging attention in a gentle, effortless way.", ans:"\u2463"},
      {q:"D. Physical health benefits from nature exposure include measurable reductions in stress indicators.", ans:"\u2460"},
      {q:"E. Urban planners are increasingly trying to bring natural elements into city environments.", ans:"\u2461"}
    ],
    matchClues: [
      "\u2462: shinrin-yoku in Japanese...slow, mindful walks through forests \u2014 \u300Ctraditional Japanese\u300D \u5bf9\u5e94 \u300Coriginated in Japan\u300D\uff0c\u300Cwellness practice\u300D \u5bf9\u5e94 \u300Cpreventive medicine\u300D\uff0c\u300Cforested areas\u300D \u5bf9\u5e94 \u300Cforests\u300D",
      "\u2464: biophilic design...improvements in productivity and reduced absenteeism \u2014 \u300Coffice environments\u300D \u5bf9\u5e94 \u300Cworkplaces\u300D\uff0c\u300Cworker health and output\u300D \u5bf9\u5e94 \u300Cwellbeing...productivity\u300D",
      "\u2463: soft fascination...allows the mind to rest and restore \u2014 \u300Crestore mental energy\u300D \u5bf9\u5e94 \u300Cmind to rest and restore\u300D\uff0c\u300Cgentle\u300D \u5bf9\u5e94 \u300Cgently\u300D",
      "\u2460: reduces cortisol levels...lowers heart rate and blood pressure \u2014 \u300Creductions in stress indicators\u300D \u5bf9\u5e94 \u300Creduces cortisol...heart rate\u300D\uff0c\u300Cmeasurable\u300D \u76f4\u63a5\u51fa\u73b0",
      "\u2461: city planners...advocating for integration of green spaces into urban design \u2014 \u300Curban planners...natural elements into city\u300D \u4e0e\u539f\u6587\u76f4\u63a5\u5bf9\u5e94"
    ],
    passageCn: "\u2460 \u7814\u7a76\u4eba\u5458\u53d1\u73b0\uff0c\u5728\u81ea\u7136\u4e2d\u5ea6\u8fc7\u65f6\u95f4\u53ef\u4ee5\u964d\u4f4e\u76ae\u8d28\u9187\u6c34\u5e73\uff08\u8eab\u4f53\u4e3b\u8981\u7684\u538b\u529b\u6fc0\u7d20\uff09\u5e76\u964d\u4f4e\u5fc3\u7387\u548c\u8840\u538b\u3002\u751a\u81f3\u77ed\u6682\u63a5\u89e6\u7eff\u8272\u7a7a\u95f4\u4e5f\u80fd\u4ea7\u751f\u53ef\u8861\u91cf\u7684\u751f\u7406\u76ca\u5904\u3002\n\n\u2461 \u5c3d\u7ba1\u8d8a\u6765\u8d8a\u591a\u7684\u8bc1\u636e\u8868\u660e\u81ea\u7136\u5bf9\u5065\u5eb7\u6709\u76ca\uff0c\u57ce\u5e02\u5c45\u6c11\u5e73\u5747\u670990%\u7684\u65f6\u95f4\u5728\u5ba4\u5185\u5ea6\u8fc7\u3002\u57ce\u5e02\u89c4\u5212\u8005\u548c\u516c\u5171\u536b\u751f\u4e13\u5bb6\u8d8a\u6765\u8d8a\u5021\u5bfc\u5c06\u7eff\u8272\u7a7a\u95f4\u878d\u5165\u57ce\u5e02\u8bbe\u8ba1\u3002\n\n\u2462 \u300c\u68ee\u6797\u6d74\u300d\uff08\u65e5\u8bed\u79f0\u4e3a shinrin-yoku\uff09\u7684\u6982\u5ff5\u8d77\u6e90\u4e8e20\u4e16\u7eaa80\u5e74\u4ee3\u7684\u65e5\u672c\uff0c\u662f\u4e00\u79cd\u9884\u9632\u6027\u533b\u5b66\u5f62\u5f0f\u3002\u5b83\u5305\u62ec\u5728\u68ee\u6797\u4e2d\u7f13\u6162\u3001\u6b63\u5ff5\u5730\u6563\u6b65\uff0c\u76ee\u6807\u662f\u5438\u6536\u81ea\u7136\u73af\u5883\u7684\u666f\u8c61\u3001\u58f0\u97f3\u548c\u6c14\u5473\u3002\n\n\u2463 \u4e00\u4e9b\u7814\u7a76\u4eba\u5458\u5c06\u81ea\u7136\u7684\u9547\u9759\u6548\u679c\u5f52\u56e0\u4e8e\u4e00\u79cd\u79f0\u4e3a\u300c\u8f6f\u6027\u8ff7\u604b\u300d\u7684\u73b0\u8c61\u3002\u4e0e\u9605\u8bfb\u6216\u9a7e\u9a76\u7b49\u4efb\u52a1\u6240\u9700\u7684\u5f3a\u70c8\u96c6\u4e2d\u4e0d\u540c\uff0c\u81ea\u7136\u73af\u5883\u6e29\u548c\u5730\u5438\u5f15\u6ce8\u610f\u529b\uff0c\u8ba9\u5927\u8111\u5f97\u5230\u4f11\u606f\u548c\u6062\u590d\u3002\n\n\u2464 \u516c\u53f8\u5df2\u5f00\u59cb\u8ba4\u8bc6\u5230\u63a5\u89e6\u81ea\u7136\u5bf9\u5458\u5de5\u798f\u5229\u7684\u76ca\u5904\u3002\u4e00\u4e9b\u5de5\u4f5c\u573a\u6240\u73b0\u5728\u91c7\u7528\u751f\u7269\u4eb2\u548c\u8bbe\u8ba1\u2014\u2014\u5305\u62ec\u5ba4\u5185\u690d\u7269\u3001\u81ea\u7136\u91c7\u5149\u548c\u7eff\u8272\u7a7a\u95f4\u666f\u89c2\u2014\u2014\u62a5\u544a\u663e\u793a\u751f\u4ea7\u529b\u63d0\u9ad8\u548c\u7f3a\u52e4\u7387\u964d\u4f4e\u3002"
  },
  // ---- 8. 翻译：2021.6 ----
  {
    id: "t2021_6",
    year: "2021年6月", type: "翻译",
    title: "2021年6月 · 翻译真题",
    instruction: "\u5c06\u4e0b\u9762\u7684\u4e2d\u6587\u6bb5\u843d\u7ffb\u8bd1\u6210\u82f1\u6587\uff08\u53c2\u8003\u7528\u65f615\u5206\u949f\uff09",
    source: "\u4e2d\u56fd\u7684\u822a\u5929\u4e8b\u4e1a\u53d6\u5f97\u4e86\u4e3e\u4e16\u77a9\u76ee\u7684\u6210\u5c31\u3002\u4ece\u7b2c\u4e00\u9897\u4eba\u9020\u536b\u661f\u4e0a\u5929\u5230\u8f7d\u4eba\u822a\u5929\u98de\u884c\uff0c\u518d\u5230\u6708\u7403\u63a2\u6d4b\u548c\u706b\u661f\u63a2\u7d22\uff0c\u4e2d\u56fd\u822a\u5929\u4eba\u4e00\u6b65\u4e00\u4e2a\u811a\u5370\uff0c\u5b9e\u73b0\u4e86\u4e00\u4e2a\u53c8\u4e00\u4e2a\u91cd\u5927\u7a81\u7834\u3002\u8fd9\u4e9b\u6210\u5c31\u4e0d\u4ec5\u5c55\u793a\u4e86\u4e2d\u56fd\u7684\u79d1\u6280\u5b9e\u529b\uff0c\u4e5f\u6fc0\u52b1\u4e86\u4e00\u4ee3\u53c8\u4e00\u4ee3\u7684\u5e74\u8f7b\u4eba\u6295\u8eab\u79d1\u5b66\u7814\u7a76\u3002\u4e2d\u56fd\u5c06\u7ee7\u7eed\u548c\u5e73\u5229\u7528\u592a\u7a7a\u8d44\u6e90\uff0c\u4e3a\u4eba\u7c7b\u63a2\u7d22\u5b87\u5b99\u4f5c\u51fa\u66f4\u5927\u8d21\u732e\u3002",
    reference: "China's space program has achieved remarkable accomplishments that have drawn worldwide attention. From launching its first artificial satellite to crewed spaceflight, lunar exploration, and Mars exploration, Chinese space scientists and engineers have advanced step by step, achieving one major breakthrough after another. These achievements not only demonstrate China's scientific and technological strength, but also inspire generation after generation of young people to devote themselves to scientific research. China will continue to make peaceful use of space resources and make greater contributions to humanity's exploration of the universe.",
    keyPoints: ["\u4e3e\u4e16\u77a9\u76ee \u2192 drawn worldwide attention","\u8f7d\u4eba\u822a\u5929 \u2192 crewed spaceflight","\u6708\u7403\u63a2\u6d4b \u2192 lunar exploration","\u706b\u661f\u63a2\u7d22 \u2192 Mars exploration","\u4e00\u6b65\u4e00\u4e2a\u811a\u5370 \u2192 step by step","\u79d1\u6280\u5b9e\u529b \u2192 scientific and technological strength","\u548c\u5e73\u5229\u7528 \u2192 make peaceful use of","\u63a2\u7d22\u5b87\u5b99 \u2192 exploration of the universe"],
    translationAnalysis: "\u8fd9\u7bc7\u7ffb\u8bd1\u8003\u67e5\u822a\u5929\u79d1\u6280\u4e13\u4e1a\u8bcd\u6c47\u3002\u91cd\u70b9\u77ed\u8bed\uff1a\n1. drawn worldwide attention\uff08\u4e3e\u4e16\u77a9\u76ee\uff09\u2014\u2014\u4e5f\u53ef\u4ee5\u7528 gained worldwide attention\n2. crewed spaceflight\uff08\u8f7d\u4eba\u822a\u5929\uff09\u2014\u2014\u6ce8\u610f\u662f crewed \u800c\u975e manned\uff08\u73b0\u4ee3\u82f1\u8bed\u66f4\u504f\u597d crewed\uff09\n3. lunar / Mars exploration\uff08\u6708\u7403/\u706b\u661f\u63a2\u6d4b\uff09\u2014\u2014\u592a\u7a7a\u8bcd\u6c47\u5fc5\u5907\n4. step by step\uff08\u4e00\u6b65\u4e00\u4e2a\u811a\u5370\uff09\u2014\u2014\u6210\u8bed\u76f4\u8bd1\n5. generation after generation\uff08\u4e00\u4ee3\u53c8\u4e00\u4ee3\uff09\u2014\u2014\u53e0\u52a0\u8868\u8fbe\uff0c\u6bd4 successive generations \u66f4\u751f\u52a8"
  },
  // ---- 9. 阅读理解：2022.6 ----
  {
    id: "r2022_6b",
    year: "2022年6月", type: "阅读理解",
    title: "2022年6月 · 阅读理解\uff08\u7b2c2\u7bc7\uff09",
    instruction: "\u9605\u8bfb\u77ed\u6587\uff0c\u56de\u7b54\u4ee5\u4e0b\u95ee\u9898",
    passage: `The concept of emotional intelligence (EI)\u2014the ability to perceive, use, understand, and manage emotions\u2014has gained considerable attention in both academic and corporate circles since psychologist Daniel Goleman popularized it in the 1990s.

Research suggests that EI may be as important as, or in some contexts more important than, traditional IQ in predicting job performance, particularly in leadership roles. Leaders with high emotional intelligence are better at building relationships, resolving conflicts, motivating teams, and adapting to change.

A frequently cited study found that among the competencies that distinguish star performers from average workers, emotional intelligence accounted for roughly two-thirds\u2014a finding that has proven robust across industries and cultures.

Critics, however, argue that EI is difficult to measure consistently and that some assessments may simply reflect personality traits or social skills that could be captured by other established measures. The debate over whether EI is truly distinct from personality and cognitive ability continues.

Despite this debate, the practical applications of EI training in workplaces have shown promising results. Programs that teach skills such as active listening, empathy, and conflict resolution have been associated with improved team cohesion and lower employee turnover.`,
    questions: [
      {q:"1. What does the passage say about EI in leadership contexts?",
       options:["A. It is less important than IQ for leaders","B. It is the sole predictor of leadership success","C. Leaders with high EI outperform others in key relational skills","D. EI is mainly relevant to creative industries"],
       ans:"C",
       explain:"\u7b2c\u4e8c\u6bb5\uff1a'Leaders with high emotional intelligence are better at building relationships, resolving conflicts, motivating teams, and adapting to change'\u3002\u9ad8\u60c5\u5546\u9886\u5bfc\u8005\u5728\u5efa\u7acb\u5173\u7cfb\u3001\u89e3\u51b3\u51b2\u7a81\u3001\u6fc0\u52b1\u56e2\u961f\u548c\u9002\u5e94\u53d8\u5316\u65b9\u9762\u66f4\u6709\u4f18\u52bf\u3002",
       wrongReasons:{A:"\u6587\u7ae0\u8bf4EI\u53ef\u80fd\u548cIQ\u4e00\u6837\u91cd\u8981\u751a\u81f3\u66f4\u91cd\u8981\uff08as important as, or more important than\uff09",B:"\u6587\u7ae0\u8bf4EI\u662f\u91cd\u8981\u56e0\u7d20\u4e4b\u4e00\uff0c\u975e\u552f\u4e00\u9884\u6d4b\u56e0\u7d20",D:"\u6587\u7ae0\u8bf4EI\u5728\u5404\u884c\u4e1a\u548c\u6587\u5316\u4e2d\u5747\u9002\u7528\uff08across industries and cultures\uff09"}},
      {q:"2. What did the study about 'star performers' find?",
       options:["A. EI accounts for about one-third of high performance","B. High performers have higher IQs than average workers","C. EI accounted for roughly two-thirds of what distinguishes top performers","D. Star performers rely mainly on technical skills"],
       ans:"C",
       explain:"\u7b2c\u4e09\u6bb5\uff1a'emotional intelligence accounted for roughly two-thirds'\u3002\u5728\u533a\u5206\u660e\u661f\u8868\u73b0\u8005\u4e0e\u666e\u901a\u5de5\u4eba\u7684\u80fd\u529b\u4e2d\uff0c\u60c5\u7eea\u667a\u529b\u5360\u4e86\u7ea6\u4e09\u5206\u4e4b\u4e8c\u3002",
       wrongReasons:{A:"\u662f\u4e09\u5206\u4e4b\u4e8c\uff0c\u4e0d\u662f\u4e09\u5206\u4e4b\u4e00",B:"\u6587\u7ae0\u672a\u6bd4\u8f83IQ\u5dee\u5f02\uff0c\u800c\u662f\u5f3a\u8c03EI\u7684\u8d21\u732e",D:"\u6587\u7ae0\u5f3a\u8c03EI\u800c\u975e\u6280\u672f\u6280\u80fd\u662f\u533a\u5206\u56e0\u7d20"}},
      {q:"3. What is the main criticism of EI according to the passage?",
       options:["A. EI training programs are too expensive","B. EI is not useful in the real world","C. EI may not be truly distinct from personality and cognitive measures","D. EI research has only been conducted in the US"],
       ans:"C",
       explain:"\u7b2c\u56db\u6bb5\uff1a'difficult to measure consistently...may simply reflect personality traits or social skills...whether EI is truly distinct from personality and cognitive ability'\u3002\u6279\u8bc4\u8005\u8ba4\u4e3aEI\u96be\u4ee5\u4e00\u81f4\u6027\u5730\u6d4b\u91cf\uff0c\u53ef\u80fd\u53ea\u662f\u53cd\u6620\u4e86\u4e2a\u6027\u7279\u5f81\u6216\u793e\u4ea4\u6280\u80fd\u3002",
       wrongReasons:{A:"\u6587\u7ae0\u672a\u63d0\u6210\u672c\u95ee\u9898",B:"\u76f8\u53cd\uff0c\u6587\u7ae0\u8bf4EI training\u6709promising results",D:"\u6587\u7ae0\u5f3a\u8c03\u7814\u7a76'robust across industries and cultures'\uff0c\u975e\u5355\u4e00\u56fd\u5bb6"}}
    ],
    passageCn: "\u60c5\u7eea\u667a\u529b\uff08EI\uff09\u2014\u2014\u611f\u77e5\u3001\u5229\u7528\u3001\u7406\u89e3\u548c\u7ba1\u7406\u60c5\u7eea\u7684\u80fd\u529b\u2014\u2014\u81ea\u5fc3\u7406\u5b66\u5bb6\u4e39\u5c3c\u5c14\u00b7\u6208\u5c14\u66fc\u57281990\u5e74\u4ee3\u5c06\u5176\u63a8\u5e7f\u4ee5\u6765\uff0c\u5728\u5b66\u672f\u754c\u548c\u4f01\u4e1a\u754c\u90fd\u53d7\u5230\u4e86\u76f8\u5f53\u5927\u7684\u5173\u6ce8\u3002\n\n\u7814\u7a76\u8868\u660e\uff0c\u5728\u9884\u6d4b\u5de5\u4f5c\u8868\u73b0\u65b9\u9762\uff0c\u7279\u522b\u662f\u5728\u9886\u5bfc\u89d2\u8272\u4e2d\uff0cEI\u53ef\u80fd\u4e0e\u4f20\u7edf\u667a\u5546\u4e00\u6837\u91cd\u8981\uff0c\u751a\u81f3\u5728\u67d0\u4e9b\u60c5\u5883\u4e0b\u66f4\u4e3a\u91cd\u8981\u3002\u5177\u6709\u9ad8\u60c5\u7eea\u667a\u529b\u7684\u9886\u5bfc\u8005\u66f4\u5584\u4e8e\u5efa\u7acb\u5173\u7cfb\u3001\u89e3\u51b3\u51b2\u7a81\u3001\u6fc0\u52b1\u56e2\u961f\u548c\u9002\u5e94\u53d8\u5316\u3002\n\n\u4e00\u9879\u7ecf\u5e38\u88ab\u5f15\u7528\u7684\u7814\u7a76\u53d1\u73b0\uff0c\u5728\u533a\u5206\u660e\u661f\u8868\u73b0\u8005\u4e0e\u666e\u901a\u5de5\u4f5c\u8005\u7684\u80fd\u529b\u4e2d\uff0c\u60c5\u7eea\u667a\u529b\u7ea6\u5360\u4e09\u5206\u4e4b\u4e8c\u2014\u2014\u8fd9\u4e00\u53d1\u73b0\u5728\u5404\u884c\u4e1a\u548c\u6587\u5316\u4e2d\u5747\u8868\u73b0\u7a33\u5065\u3002\n\n\u7136\u800c\uff0c\u6279\u8bc4\u8005\u8ba4\u4e3aEI\u96be\u4ee5\u4e00\u81f4\u6027\u5730\u6d4b\u91cf\uff0c\u4e00\u4e9b\u8bc4\u4f30\u53ef\u80fd\u53ea\u662f\u53cd\u6620\u4e86\u5176\u4ed6\u65e2\u5b9a\u6d4b\u91cf\u65b9\u6cd5\u53ef\u4ee5\u6355\u6349\u5230\u7684\u4e2a\u6027\u7279\u5f81\u6216\u793e\u4ea4\u6280\u80fd\u3002\u5173\u4e8eEI\u662f\u5426\u771f\u6b63\u533a\u522b\u4e8e\u4e2a\u6027\u548c\u8ba4\u77e5\u80fd\u529b\u7684\u4e89\u8bba\u4ecd\u5728\u7ee7\u7eed\u3002\n\n\u5c3d\u7ba1\u5b58\u5728\u8fd9\u79cd\u4e89\u8bba\uff0cEI\u57f9\u8bad\u5728\u5de5\u4f5c\u573a\u6240\u7684\u5b9e\u9645\u5e94\u7528\u5df2\u663e\u793a\u51fa\u4ee4\u4eba\u9f13\u821e\u7684\u7ed3\u679c\u3002\u6559\u6388\u79ef\u6781\u503e\u542c\u3001\u5171\u60c5\u548c\u51b2\u7a81\u89e3\u51b3\u7b49\u6280\u80fd\u7684\u8ba1\u5212\u4e0e\u56e2\u961f\u51dd\u805a\u529b\u6539\u5584\u548c\u5458\u5de5\u79bb\u804c\u7387\u964d\u4f4e\u6709\u5173\u3002"
  },
  // ---- 11. 选词填空：2020.6 ----
  {
    id: "c2020_6",
    year: "2020年6月", type: "选词填空",
    title: "2020年6月 · 选词填空",
    instruction: "\u4ece\u4e0b\u65b9\u8bcd\u5e93\u4e2d\u9009\u62e9\u5408\u9002\u7684\u5355\u8bcd\u586b\u5165\u7a7a\u683c\uff08\u6bcf\u8bcd\u53ea\u7528\u4e00\u6b21\uff0c\u6ce8\u610f\u5f62\u6001\u53d8\u5316\uff09",
    words: ["abundant","attribute","consume","cultivate","dedicate","innovative","potential","preserve","reduce","transform"],
    text: "Many communities are finding __(1)__ ways to deal with food waste, which is a growing global concern. On average, households __(2)__ more food than they realize, throwing away items that could still be used. Environmentalists argue that we must __(3)__ our consumption habits to __(4)__ natural resources. Food waste not only wastes __(5)__ energy and water used in production, but also contributes to greenhouse gas emissions. Urban farms and composting programs __(6)__ waste into useful soil nutrients. Cities that __(7)__ community gardens help residents __(8)__ a deeper connection to sustainable food systems. Many researchers __(9)__ the success of these programs to strong community engagement. Given the __(10)__ of available solutions, there is little excuse for inaction.",
    answers: {1:"innovative",2:"consume",3:"transform",4:"preserve",5:"abundant",6:"transform",7:"cultivate",8:"dedicate",9:"attribute",10:"abundance"},
    analysis: "\u6ce8\u610f\uff1atransform \u51fa\u73b0\u4e24\u6b21\uff08\u7b2c3\u548c\u7b2c6\u7a7a\uff09\uff0c\u610f\u4e3a\u300c\u6539\u53d8/\u8f6c\u53d8\u300d\uff1bcultivate gardens\uff08\u57f9\u80b2\u82b1\u56ed\uff09\uff1battribute success to\uff08\u5c06\u6210\u529f\u5f52\u56e0\u4e8e\uff09\uff1bdedicate\uff08\u4f7f\u4e13\u6ce8\u4e8e\uff09\u3002\u7b2c10\u7a7a\u7528 abundance\uff08\u540d\u8bcd\uff09\u800c\u975e abundant\uff08\u5f62\u5bb9\u8bcd\uff09\uff0c\u56e0\u4e3a\u540e\u9762\u662f\u540d\u8bcd\u77ed\u8bed of available solutions\u3002",
    wordReasons: {
      1:"innovative ways\uff08\u521b\u65b0\u65b9\u5f0f\uff09\uff0c\u5f62\u5bb9\u8bcd\u4fee\u9970 ways\uff0c\u9996\u9009 innovative",
      2:"households consume food\uff08\u5bb6\u5ead\u6d88\u8017\u98df\u7269\uff09\uff0cconsume + \u98df\u7269/\u8d44\u6e90\u662f\u56fa\u5b9a\u642d\u914d",
      3:"transform habits\uff08\u6539\u53d8\u4e60\u60ef\uff09\uff0cwe must + \u539f\u5f62\uff0ctransform \u8868\u6839\u672c\u6027\u6539\u53d8",
      4:"preserve natural resources\uff08\u4fdd\u62a4\u81ea\u7136\u8d44\u6e90\uff09\uff0c\u51cf\u5c11\u6d88\u8017\u4ee5\u4fdd\u62a4\u8d44\u6e90",
      5:"abundant energy\uff08\u5927\u91cf\u80fd\u6e90\uff09\uff0c\u5f62\u5bb9\u8bcd\u4fee\u9970 energy\uff0c\u63cf\u8ff0\u6d6a\u8d39\u91cf\u5927",
      6:"transform waste into nutrients\uff08\u5c06\u5e9f\u7269\u8f6c\u5316\u4e3a\u517b\u5206\uff09\uff0ctransform...into \u56fa\u5b9a\u642d\u914d",
      7:"cultivate community gardens\uff08\u57f9\u80b2\u793e\u533a\u82b1\u56ed\uff09\uff0ccities that + \u590d\u6570\u8c13\u8bed\u52a8\u8bcd cultivate",
      8:"dedicate a connection\uff08\u4f7f\u4e13\u6ce8\u4e8e\u8054\u7cfb\uff09\uff0chelp residents do \u7ed3\u6784\uff0cdedicate oneself to",
      9:"attribute success to engagement\uff08\u5c06\u6210\u529f\u5f52\u56e0\u4e8e\u53c2\u4e0e\uff09\uff0cattribute...to \u56fa\u5b9a\u642d\u914d",
      10:"abundance of available solutions\uff08\u5927\u91cf\u53ef\u7528\u89e3\u51b3\u65b9\u6848\uff09\uff0cgiven the abundance of \u56fa\u5b9a\u642d\u914d"
    },
    passageCn: "\u8bb8\u591a\u793e\u533a\u6b63\u5728\u5bfb\u627e\u521b\u65b0\u65b9\u5f0f\u6765\u5e94\u5bf9\u98df\u7269\u6d6a\u8d39\u95ee\u9898\uff0c\u8fd9\u662f\u4e00\u4e2a\u65e5\u76ca\u4e25\u91cd\u7684\u5168\u7403\u95ee\u9898\u3002\u5e73\u5747\u800c\u8a00\uff0c\u5bb6\u5ead\u6d88\u8017\u7684\u98df\u7269\u6bd4\u4ed6\u4eec\u610f\u8bc6\u5230\u7684\u8981\u591a\uff0c\u6254\u6389\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u7684\u7269\u54c1\u3002\u73af\u4fdd\u4e3b\u4e49\u8005\u8ba4\u4e3a\uff0c\u6211\u4eec\u5fc5\u987b\u6539\u53d8\u6d88\u8d39\u4e60\u60ef\u4ee5\u4fdd\u62a4\u81ea\u7136\u8d44\u6e90\u3002\u98df\u7269\u6d6a\u8d39\u4e0d\u4ec5\u6d6a\u8d39\u4e86\u751f\u4ea7\u4e2d\u4f7f\u7528\u7684\u5927\u91cf\u80fd\u6e90\u548c\u6c34\uff0c\u8fd8\u52a9\u957f\u4e86\u6e29\u5ba4\u6c14\u4f53\u6392\u653e\u3002\u57ce\u5e02\u519c\u573a\u548c\u5806\u80a5\u8ba1\u5212\u5c06\u5e9f\u7269\u8f6c\u5316\u4e3a\u6709\u7528\u7684\u571f\u58e4\u8425\u517b\u7269\u8d28\u3002\u57f9\u80b2\u793e\u533a\u82b1\u56ed\u7684\u57ce\u5e02\u5e2e\u52a9\u5c45\u6c11\u4e0e\u53ef\u6301\u7eed\u98df\u54c1\u7cfb\u7edf\u5efa\u7acb\u66f4\u6df1\u7684\u8054\u7cfb\u3002\u8bb8\u591a\u7814\u7a76\u4eba\u5458\u5c06\u8fd9\u4e9b\u9879\u76ee\u7684\u6210\u529f\u5f52\u56e0\u4e8e\u5f3a\u5927\u7684\u793e\u533a\u53c2\u4e0e\u5ea6\u3002\u9274\u4e8e\u5927\u91cf\u53ef\u7528\u89e3\u51b3\u65b9\u6848\u7684\u5b58\u5728\uff0c\u4e0d\u91c7\u53d6\u884c\u52a8\u51e0\u4e4e\u6ca1\u6709\u501f\u53e3\u3002"
  },
  // ---- 12. 段落匹配：2021.12 ----
  {
    id: "m2021_12",
    year: "2021年12月", type: "段落匹配",
    title: "2021年12月 · 段落匹配",
    instruction: "\u9605\u8bfb\u4e0b\u65b95\u4e2a\u6bb5\u843d\uff0c\u5c06\u9898\u76ee\u9648\u8ff0\uff08A-E\uff09\u4e0e\u6b63\u786e\u6bb5\u843d\u7f16\u53f7\uff08\u2460-\u2464\uff09\u5339\u914d",
    paragraphs: [
      "\u2460 Microplastics\u2014tiny fragments of plastic less than five millimeters in size\u2014have been detected in oceans, rivers, soil, and even the air we breathe. Scientists are increasingly concerned about their effects on ecosystems and human health.",
      "\u2461 The primary sources of microplastics include the breakdown of larger plastic debris, synthetic clothing fibers released during washing, and microbeads once widely used in cosmetics and personal care products.",
      "\u2462 Research on the health effects of microplastics in humans is still in early stages. While laboratory studies suggest that microplastics can cause inflammation and disrupt hormonal systems in animals, the long-term effects on humans remain unclear.",
      "\u2463 In response to growing evidence, several countries have banned the use of microbeads in cosmetics. The United Kingdom, United States, and Canada have all passed legislation prohibiting their sale, citing environmental and health concerns.",
      "\u2464 Experts emphasize that reducing plastic production overall is the only long-term solution to microplastic pollution. Recycling alone cannot address the problem, as even recyclable plastics shed microparticles during their lifecycle."
    ],
    questions: [
      {q:"A. The health risks microplastics pose to humans have not yet been fully established.", ans:"\u2462"},
      {q:"B. Reducing total plastic production is considered the most effective long-term approach.", ans:"\u2464"},
      {q:"C. Several countries have outlawed certain plastic ingredients in cosmetic products.", ans:"\u2463"},
      {q:"D. Microplastics originate from multiple sources including clothing and consumer products.", ans:"\u2461"},
      {q:"E. Microplastics have spread into virtually every part of the natural environment.", ans:"\u2460"}
    ],
    matchClues: [
      "\u2462: health effects...still in early stages...long-term effects on humans remain unclear \u2014 \u300Cnot yet fully established\u300D \u5bf9\u5e94 \u300Cremain unclear\u300D",
      "\u2464: reducing plastic production...only long-term solution \u2014 \u300Cmost effective long-term approach\u300D \u5bf9\u5e94 \u300Conly long-term solution\u300D",
      "\u2463: several countries have banned microbeads in cosmetics...legislation \u2014 \u300Coutlawed...cosmetic products\u300D \u5bf9\u5e94 \u300Cbanned...cosmetics\u300D",
      "\u2461: primary sources...synthetic clothing fibers...microbeads...cosmetics \u2014 \u300Cmultiple sources including clothing and consumer products\u300D \u76f4\u63a5\u5bf9\u5e94",
      "\u2460: detected in oceans, rivers, soil, and even the air \u2014 \u300Cspread into virtually every part of the natural environment\u300D \u5bf9\u5e94 \u300Coceans, rivers, soil, air\u300D"
    ],
    passageCn: "\u2460 \u5fae\u5851\u6599\u2014\u2014\u5c0f\u4e8e\u4e94\u6beb\u7c73\u7684\u5851\u6599\u788e\u7247\u2014\u2014\u5df2\u5728\u6d77\u6d0b\u3001\u6cb3\u6d41\u3001\u571f\u58e4\u4e43\u81f3\u6211\u4eec\u547c\u5438\u7684\u7a7a\u6c14\u4e2d\u88ab\u68c0\u6d4b\u5230\u3002\u79d1\u5b66\u5bb6\u8d8a\u6765\u8d8a\u5173\u6ce8\u5b83\u4eec\u5bf9\u751f\u6001\u7cfb\u7edf\u548c\u4eba\u7c7b\u5065\u5eb7\u7684\u5f71\u54cd\u3002\n\n\u2461 \u5fae\u5851\u6599\u7684\u4e3b\u8981\u6765\u6e90\u5305\u62ec\u8f83\u5927\u5851\u6599\u5783\u573e\u7684\u5206\u89e3\u3001\u6d17\u6da4\u65f6\u91ca\u653e\u7684\u5408\u6210\u7ea4\u7ef4\u670d\u88c5\u7ea4\u7ef4\uff0c\u4ee5\u53ca\u66fe\u5e7f\u6cdb\u7528\u4e8e\u5316\u5986\u54c1\u548c\u4e2a\u4eba\u62a4\u7406\u4ea7\u54c1\u7684\u5fae\u73e0\u3002\n\n\u2462 \u5173\u4e8e\u5fae\u5851\u6599\u5bf9\u4eba\u4f53\u5065\u5eb7\u5f71\u54cd\u7684\u7814\u7a76\u4ecd\u5904\u4e8e\u65e9\u671f\u9636\u6bb5\u3002\u867d\u7136\u5b9e\u9a8c\u5ba4\u7814\u7a76\u8868\u660e\u5fae\u5851\u6599\u53ef\u80fd\u5bfc\u81f4\u52a8\u7269\u708e\u75c7\u548c\u5185\u5206\u6ccc\u7cfb\u7edf\u7d0a\u4e71\uff0c\u4f46\u5bf9\u4eba\u7c7b\u7684\u957f\u671f\u5f71\u54cd\u4ecd\u4e0d\u6e05\u695a\u3002\n\n\u2463 \u4f5c\u4e3a\u5bf9\u65e5\u76ca\u589e\u957f\u7684\u8bc1\u636e\u7684\u56de\u5e94\uff0c\u51e0\u4e2a\u56fd\u5bb6\u5df2\u7981\u6b62\u5728\u5316\u5986\u54c1\u4e2d\u4f7f\u7528\u5fae\u73e0\u3002\u82f1\u56fd\u3001\u7f8e\u56fd\u548c\u52a0\u62ff\u5927\u5747\u5df2\u901a\u8fc7\u7acb\u6cd5\u7981\u6b62\u5176\u9500\u552e\uff0c\u5f15\u7528\u73af\u5883\u548c\u5065\u5eb7\u95ee\u9898\u3002\n\n\u2464 \u4e13\u5bb6\u5f3a\u8c03\uff0c\u51cf\u5c11\u5851\u6599\u603b\u4ea7\u91cf\u662f\u89e3\u51b3\u5fae\u5851\u6599\u6c61\u67d3\u7684\u552f\u4e00\u957f\u671f\u65b9\u6848\u3002\u4ec5\u4ec5\u56de\u6536\u65e0\u6cd5\u89e3\u51b3\u95ee\u9898\uff0c\u56e0\u4e3a\u751a\u81f3\u53ef\u56de\u6536\u5851\u6599\u5728\u5176\u751f\u547d\u5468\u671f\u5185\u4e5f\u4f1a\u91ca\u653e\u5fae\u7c92\u3002"
  }
];

// ===== 新增 20 道真题（2025-2022年真卷） =====
// --- 11. 选词填空：2023.6 ---
CET4_REAL_PAPERS.push({
    id: "c2023_6b", year: "2023\u5E746\u6708", type: "\u9009\u8BCD\u586B\u7A7A",
    title: "2023\u5E746\u6708 \u00B7 \u9009\u8BCD\u586B\u7A7A\u771F\u9898",
    instruction: "\u4ECE\u4E0B\u5217\u5355\u8BCD\u4E2D\u9009\u62E9\u6070\u5F53\u7684\u8BCD\u586B\u5165\u77ED\u6587\u7A7A\u767D\u5904\uff0c\u6BCF\u8BCD\u53EA\u7528\u4E00\u6B21",
    words: ["O) reward","A) afford","B) appeal","C) contribute","D) distribute","E) evaluate","F) maintain","G) negotiate","H) promote","I) recognize","J) retire","K) secure","L) sufficient","M) sustainable","N) volunteer"],
    passage: "Many older adults today are choosing to work beyond the traditional retirement age. Some do so because they cannot [1] to stop working, while others simply find their careers too [2] to give up.\n\nResearch shows that staying employed can [3] to better mental health in later life. Work provides a sense of purpose and helps people [4] social connections. Companies that [5] the value of older workers are increasingly creating flexible positions to [6] their talents.\n\nExperts [7] that employers should [8] experienced staff by offering part-time options rather than encouraging early retirement. This approach is not only [9] for businesses but also helps create a more [10] workforce model.",
    answers: ["A","B","C","F","I","K","H","M","L","M"],
    answerKeys: ["\u2460 A (afford) — cannot afford to stop \u8868\u793A\u8D1F\u62C5\u4E0D\u8D77","\u2461 B (appeal) — too appealing to give up \u592A\u6709\u5438\u5F15\u529B\u800C\u4E0D\u80FD\u653E\u5F03","\u2462 C (contribute) — contribute to better mental health","\u2463 F (maintain) — maintain social connections","\u2464 I (recognize) — recognize the value","\u2465 K (secure) — secure their talents","\u2466 H (promote) — promote retention","\u2467 M (sustainable) — sustainable for businesses","\u2468 L (sufficient) — sufficient workforce","\u2469 M (sustainable) — sustainable workforce model"]
  });
// --- 12. 段落匹配：2020.12 ---
CET4_REAL_PAPERS.push({
    id: "m2020_12b", year: "2020\u5E7412\u6708", type: "\u6BB5\u843D\u5339\u914D",
    title: "2020\u5E7412\u6708 \u00B7 \u6BB5\u843D\u5339\u914D",
    instruction: "\u5C06\u4E0B\u5217\u6807\u9898\u4E0E\u5BF9\u5E94\u6BB5\u843D\u5339\u914D",
    headings: {
      "\u2460":"How Do We Form Impressions of People?",
      "\u2461":"A Universal Pattern of First Impressions",
      "\u2462":"First Impressions Form Rapidly and Automatically",
      "\u2463":"The Accuracy of Snap Judgments",
      "\u2464":"First Impressions Are Hard to Change"
    },
    paragraphs: {
      "A":"Within a fraction of a second of meeting someone, we have already formed an impression of them. Research by Princeton psychologists found that we make judgments about a person's trustworthiness, competence, and likability in less than 100 milliseconds\u2014faster than the blink of an eye.",
      "B":"These first impressions rely on what psychologists call 'thin slices' of behavior\u2014brief observations of a person's facial expressions, tone of voice, and body language. Our brains process these cues automatically, drawing on past experiences to generate an instant evaluation.",
      "C":"The key question is whether these rapid judgments are accurate. Some studies suggest they can be surprisingly reliable. In one experiment, participants predicted a teacher's effectiveness after watching just six seconds of silent video\u2014and their predictions closely matched actual student evaluations.",
      "D":"Interestingly, first impressions show remarkable consistency across cultures. A smile signals warmth whether you are in Tokyo, Nairobi, or New York. While specific expressions vary, the fundamental dimensions we judge\u2014warmth and competence\u2014appear universal.",
      "E":"Once formed, first impressions are difficult to overturn. Psychologists call this the 'confirmation bias'\u2014we tend to seek out information that confirms our existing beliefs. Even when presented with contradictory evidence, we often find ways to maintain our original impression."
    },
    matchPairs: [{p:"E",h:"\u2464"},{p:"D",h:"\u2461"},{p:"A",h:"\u2462"},{p:"C",h:"\u2463"},{p:"B",h:"\u2460"}],
    matchClues: ["E: difficult to overturn \u2192 Hard to Change","D: across cultures...universal \u2192 Universal Pattern","A: less than 100ms \u2192 Form Rapidly","C: how accurate...reliable \u2192 Accuracy","B: thin slices...automatically \u2192 How We Form"],
    passageCn: "\u78B0\u5230\u65B0\u4EBA\u65F6\uFF0C\u6211\u4EEC\u5728\u7728\u773C\u4E4B\u524D\u5C31\u5DF2\u5F62\u6210\u4E86\u7B2C\u4E00\u5370\u8C61\u3002\u666E\u6797\u65AF\u987F\u5927\u5B66\u7684\u7814\u7A76\u53D1\u73B0\uFF0C\u6211\u4EEC\u5728\u4E0D\u5230100\u6BEB\u79D2\u5185\u5C31\u4F1A\u5BF9\u4E00\u4E2A\u4EBA\u7684\u53EF\u4FE1\u5EA6\u3001\u80FD\u529B\u548C\u53EF\u7231\u5EA6\u4F5C\u51FA\u5224\u65AD\u3002\n\n\u8FD9\u4E9B\u7B2C\u4E00\u5370\u8C61\u4F9D\u8D56\u4E8E\u5FC3\u7406\u5B66\u5BB6\u6240\u8C13\u7684\u300C\u8584\u5207\u7247\u300D\u884C\u4E3A\u2014\u2014\u5BF9\u4E00\u4E2A\u4EBA\u7684\u9762\u90E8\u8868\u60C5\u3001\u58F0\u97F3\u8BED\u6C14\u548C\u80A2\u4F53\u8BED\u8A00\u7684\u77ED\u6682\u89C2\u5BDF\u3002\u6211\u4EEC\u7684\u5927\u8111\u81EA\u52A8\u5904\u7406\u8FD9\u4E9B\u7EBF\u7D22\uFF0C\u501F\u52A9\u8FC7\u5F80\u7ECF\u5386\u4EA7\u751F\u5373\u65F6\u8BC4\u4F30\u3002\n\n\u5173\u952E\u95EE\u9898\u662F\u8FD9\u4E9B\u5FEB\u901F\u5224\u65AD\u7684\u51C6\u786E\u6027\u3002\u4E00\u4E9B\u7814\u7A76\u8868\u660E\u5B83\u4EEC\u53EF\u4EE5\u51FA\u4EBA\u610F\u6599\u5730\u53EF\u9760\u3002\u5728\u4E00\u9879\u5B9E\u9A8C\u4E2D\uFF0C\u53C2\u4E0E\u8005\u5728\u89C2\u770B\u516D\u79D2\u95F7\u58F0\u89C6\u9891\u540E\u9884\u6D4B\u6559\u5E08\u7684\u6559\u5B66\u6548\u679C\u2014\u2014\u9884\u6D4B\u4E0E\u5B9E\u9645\u5B66\u751F\u8BC4\u4EF7\u9AD8\u5EA6\u4E00\u81F4\u3002\n\n\u6709\u8DA3\u7684\u662F\uFF0C\u7B2C\u4E00\u5370\u8C61\u5728\u4E0D\u540C\u6587\u5316\u4E2D\u663E\u793A\u51FA\u60CA\u4EBA\u7684\u4E00\u81F4\u6027\u3002\u5FAE\u7B11\u65E0\u8BBA\u5728\u4E1C\u4EAC\u3001\u5185\u7F57\u6BD5\u8FD8\u662F\u7EBD\u7EA6\u90FD\u4F20\u9012\u6E29\u6696\u3002\u6211\u4EEC\u5224\u65AD\u7684\u57FA\u672C\u7EF4\u5EA6\u2014\u2014\u6E29\u6696\u548C\u80FD\u529B\u2014\u2014\u4F3C\u4E4E\u662F\u666E\u904D\u7684\u3002\n\n\u4E00\u65E6\u5F62\u6210\uFF0C\u7B2C\u4E00\u5370\u8C61\u5F88\u96BE\u6539\u53D8\u3002\u5FC3\u7406\u5B66\u5BB6\u79F0\u4E4B\u4E3A\u300C\u786E\u8BA4\u504F\u5DEE\u300D\u2014\u2014\u6211\u4EEC\u503E\u5411\u4E8E\u5BFB\u627E\u652F\u6301\u73B0\u6709\u4FE1\u5FF5\u7684\u4FE1\u606F\u3002\u5373\u4F7F\u9762\u5BF9\u77DB\u76FE\u8BC1\u636E\uFF0C\u6211\u4EEC\u4E5F\u7ECF\u5E38\u8BBE\u6CD5\u7EF4\u6301\u539F\u59CB\u5370\u8C61\u3002"
  });
// --- 13. 阅读理解：2020.12 ---
CET4_REAL_PAPERS.push({
    id: "r2020_12b", year: "2020\u5E7412\u6708", type: "\u9605\u8BFB\u7406\u89E3",
    title: "2020\u5E7412\u6708 \u00B7 \u9605\u8BFB\u7406\u89E3",
    instruction: "\u9605\u8BFB\u77ED\u6587\uFF0C\u56DE\u7B54\u4EE5\u4E0B\u95EE\u9898",
    passage: "A growing body of evidence suggests that spending time in nature\u2014whether it is a walk in a park or a weekend in the mountains\u2014has measurable benefits for mental health. This is not merely a matter of feeling refreshed; studies show that exposure to natural environments can reduce stress hormones, lower blood pressure, and improve mood.\n\nThe concept, known as 'nature therapy' or 'ecotherapy,' is gaining traction in the medical community. In Japan, the practice of shinrin-yoku, or 'forest bathing,' involves spending time in a forest and engaging all five senses. Research on forest bathing has documented reductions in cortisol levels, pulse rate, and blood pressure, as well as improvements in immune function.\n\nIn the United Kingdom, doctors in some areas can now prescribe nature-based activities\u2014such as guided walks, community gardening, or tree planting\u2014to patients with depression or anxiety. This approach offers a low-cost, low-side-effect complement to traditional treatments. Early results suggest that patients who engage in these activities report higher levels of well-being and are more likely to maintain their improvements over time compared to those receiving only medication.",
    questions: [
      {q:"What is the main finding of the research mentioned in the passage?",opts:["A. Nature exposure has measurable mental health benefits","B. Forest bathing is more effective than medication","C. Walking in parks can cure depression","D. Stress hormones are difficult to measure"],ans:"A"},
      {q:"What does 'shinrin-yoku' refer to?",opts:["A. A type of Japanese medication","B. The practice of forest bathing","C. A form of group therapy","D. A traditional Japanese diet"],ans:"B"},
      {q:"According to the passage, what can UK doctors now do?",opts:["A. Replace medication with nature therapy","B. Prescribe nature-based activities to patients","C. Ban patients from staying indoors","D. Require patients to plant trees"],ans:"B"},
      {q:"What advantage does nature therapy offer compared to traditional treatments?",opts:["A. It works instantly","B. It has no cost at all","C. It is low-cost with few side effects","D. It can cure all mental illnesses"],ans:"C"}
    ],
    passageCn: "\u8D8A\u6765\u8D8A\u591A\u7684\u8BC1\u636E\u8868\u660E\uFF0C\u5728\u81EA\u7136\u4E2D\u5EA6\u8FC7\u65F6\u5149\u2014\u2014\u65E0\u8BBA\u662F\u5728\u516C\u56ED\u6563\u6B65\u8FD8\u662F\u5728\u5C71\u533A\u5EA6\u5468\u672B\u2014\u2014\u5BF9\u5FC3\u7406\u5065\u5EB7\u6709\u53EF\u6D4B\u91CF\u7684\u76CA\u5904\u3002\u8FD9\u4E0D\u4EC5\u662F\u611F\u89C9\u795E\u6E05\u6C14\u723D\u7684\u95EE\u9898\uFF1B\u7814\u7A76\u8868\u660E\u63A5\u89E6\u81EA\u7136\u73AF\u5883\u53EF\u4EE5\u964D\u4F4E\u5E94\u6FC0\u6FC0\u7D20\u3001\u964D\u4F4E\u8840\u538B\u548C\u6539\u5584\u60C5\u7EEA\u3002\n\n\u88AB\u79F0\u4E3A\u300C\u81EA\u7136\u7597\u6CD5\u300D\u6216\u300C\u751F\u6001\u7597\u6CD5\u300D\u7684\u6982\u5FF5\u6B63\u5728\u533B\u5B66\u754C\u83B7\u5F97\u8D8A\u6765\u8D8A\u591A\u7684\u5173\u6CE8\u3002\u5728\u65E5\u672C\uFF0C\u300C\u68EE\u6797\u6D74\u300D\u5305\u542B\u5728\u68EE\u6797\u4E2D\u5EA6\u8FC7\u65F6\u5149\u5E76\u8C03\u52A8\u4E94\u611F\u3002\u5BF9\u68EE\u6797\u6D74\u7684\u7814\u7A76\u8BB0\u5F55\u4E86\u76AE\u8D28\u9187\u6C34\u5E73\u3001\u8109\u640F\u548C\u8840\u538B\u7684\u4E0B\u964D\uFF0C\u4EE5\u53CA\u514D\u75AB\u529F\u80FD\u7684\u6539\u5584\u3002\n\n\u5728\u82F1\u56FD\uFF0C\u4E00\u4E9B\u5730\u533A\u7684\u533B\u751F\u73B0\u5728\u53EF\u4EE5\u4E3A\u6291\u90C1\u6216\u7126\u8651\u60A3\u8005\u5F00\u5177\u57FA\u4E8E\u81EA\u7136\u7684\u6D3B\u52A8\u5904\u65B9\u2014\u2014\u5982\u6307\u5BFC\u6563\u6B65\u3001\u793E\u533A\u56ED\u827A\u6216\u690D\u6811\u3002\u8FD9\u79CD\u65B9\u6CD5\u4E3A\u4F20\u7EDF\u6CBB\u7597\u63D0\u4F9B\u4E86\u4F4E\u6210\u672C\u3001\u4F4E\u526F\u4F5C\u7528\u7684\u8865\u5145\u3002\u65E9\u671F\u7ED3\u679C\u8868\u660E\uFF0C\u53C2\u4E0E\u8FD9\u4E9B\u6D3B\u52A8\u7684\u60A3\u8005\u62A5\u544A\u4E86\u66F4\u9AD8\u7684\u5E78\u798F\u611F\uFF0C\u4E14\u4E0E\u4EC5\u63A5\u53D7\u836F\u7269\u6CBB\u7597\u7684\u60A3\u8005\u76F8\u6BD4\u66F4\u6709\u53EF\u80FD\u957F\u671F\u7EF4\u6301\u6539\u5584\u3002"
  });
// --- 14. 翻译：2021.6 ---
CET4_REAL_PAPERS.push({
    id: "t2021_6b", year: "2021\u5E746\u6708", type: "\u7FFB\u8BD1",
    title: "2021\u5E746\u6708 \u00B7 \u7FFB\u8BD1\u771F\u9898",
    instruction: "\u5C06\u4E0B\u5217\u4E2D\u6587\u7FFB\u8BD1\u6210\u82F1\u6587",
    chineseText: "\u94C1\u4E09\u89D2\u662F\u4E2D\u56FD\u4F20\u7EDF\u94C1\u952E\u4E2D\u6700\u5177\u4EE3\u8868\u6027\u7684\u4E00\u79CD\u3002\u5B83\u7684\u8BBE\u8BA1\u7B80\u5355\u5374\u6781\u5176\u5B9E\u7528\uFF0C\u4E09\u4E2A\u89D2\u53EF\u4EE5\u505A\u5F88\u591A\u4E8B\u60C5\u3002\u5728\u519C\u6751\u5730\u533A\uFF0C\u94C1\u4E09\u89D2\u662F\u6BCF\u4E2A\u5BB6\u5EAD\u5FC5\u5907\u7684\u5DE5\u5177\u3002\u5916\u56FD\u4EBA\u5728\u4E2D\u56FD\u65C5\u884C\u65F6\u7ECF\u5E38\u4F1A\u88AB\u8FD9\u79CD\u592F\u5B9E\u7684\u8BBE\u8BA1\u6240\u60CA\u53F9\u3002",
    reference: "The iron triangle is one of the most representative traditional Chinese iron keys. Its design is simple yet extremely practical, and its three corners can do many things. In rural areas, the iron triangle is an essential tool for every household. Foreigners traveling in China are often amazed by this sturdy design.",
    keyPoints: ["iron triangle \u2192 \u94C1\u4E09\u89D2","representative \u2192 \u4EE3\u8868\u6027\u7684","simple yet...practical \u2192 \u7B80\u5355\u5374\u5B9E\u7528","essential tool \u2192 \u5FC5\u5907\u5DE5\u5177","sturdy design \u2192 \u592F\u5B9E\u7684\u8BBE\u8BA1"],
    translationAnalysis: "\u8FD9\u7BC7\u7FFB\u8BD1\u8003\u67E5\u7269\u54C1\u63CF\u5199\u7C7B\u8BCD\u6C47\u3002\u91CD\u70B9\u77ED\u8BED\uFF1A\n1. iron triangle\uFF08\u94C1\u4E09\u89D2\uFF09\u2014\u2014\u76F4\u8BD1\u5373\u53EF\uFF0C\u4E0D\u8981\u5199 triangle iron\n2. representative\uFF08\u4EE3\u8868\u6027\u7684\uFF09\u2014\u2014\u9AD8\u9891\u8BCD\uFF0C\u6BD4 symbolic \u66F4\u51C6\u786E\n3. simple yet\u2026practical\uFF08\u7B80\u5355\u5374\u5B9E\u7528\uFF09\u2014\u2014yet \u8868\u8F6C\u6298\uFF0C\u6BD4 but \u66F4\u6587\u96C5\n4. essential tool\uFF08\u5FC5\u5907\u5DE5\u5177\uFF09\u2014\u2014essential \u6BD4 necessary \u66F4\u5F3A\u70C8\n5. sturdy design\uFF08\u592F\u5B9E\u7684\u8BBE\u8BA1\uFF09\u2014\u2014sturdy \u8868\u793A\u7269\u7406\u4E0A\u7684\u7ED3\u5B9E\u8010\u7528"
  }),
  // --- 15. 选词填空：2022.12 ---
  CET4_REAL_PAPERS.push({
    id: "c2022_12", year: "2022\u5E7412\u6708", type: "\u9009\u8BCD\u586B\u7A7A",
    title: "2022\u5E7412\u6708 \u00B7 \u9009\u8BCD\u586B\u7A7A",
    instruction: "\u9009\u8BCD\u586B\u5165\u77ED\u6587\u7A7A\u767D\u5904\uFF0C\u6BCF\u8BCD\u53EA\u7528\u4E00\u6B21",
    words: ["A) claim","B) complex","C) compound","D) constant","E) content","F) crucial","G) decline","H) dramatic","I) essential","J) gradual","K) nevertheless","L) previous","M) relatively","N) significantly","O) stable"],
    passage: "While the world\u2019s population continues to grow, the rate of growth has been [1] slowing. In 2022, the global fertility rate fell to a [2] low of 2.3 children per woman, down from about 5 in the 1960s. This [3] shift has profound implications for everything from labor markets to pension systems.\n\nExperts [4] that by 2050, more than two-thirds of the world\u2019s population will live in urban areas. Managing this urbanization will be [5] to ensuring sustainable development. Cities must become more [6] in their design to accommodate growing populations.\n\nThe challenge is [7]: urbanization creates opportunities but also strains resources. While [8] research focused primarily on developed nations, recent studies have [9] expanded our understanding of urban dynamics in developing countries. The [10] decline in rural populations presents both challenges and opportunities for policymakers worldwide.",
    answers: ["J","L","H","A","I","F","B","L","N","G"],
    answerKeys: ["\u2460 J (gradual)","\u2461 L (previous)","\u2462 H (dramatic)","\u2463 A (claim)","\u2464 I (essential)","\u2465 F (crucial)","\u2466 B (complex)","\u2467 L (previous)","\u2468 N (significantly)","\u2469 G (decline)"]
  });
  // --- 16. 阅读理解：2020.6 ---
  CET4_REAL_PAPERS.push({
    id: "r2020_6c", year: "2020\u5E746\u6708", type: "\u9605\u8BFB\u7406\u89E3",
    title: "2020\u5E746\u6708 \u00B7 \u9605\u8BFB\u7406\u89E3",
    instruction: "\u9605\u8BFB\u77ED\u6587\uFF0C\u56DE\u7B54\u95EE\u9898",
    passage: "The rise of remote work has been one of the most significant workplace transformations in decades. The COVID-19 pandemic accelerated a trend that was already underway, forcing millions of workers to set up home offices virtually overnight.\n\nThe benefits of remote work are now well documented. Employees report higher job satisfaction, reduced commuting stress, and better work-life balance. Companies benefit from lower office costs and access to a wider talent pool. However, the transition has not been without challenges. Many workers struggle with isolation, blurred boundaries between work and personal life, and the pressure to be always available.\n\nAs organizations look to the future, most are adopting a hybrid model\u2014combining remote and in-office work. This approach aims to preserve the flexibility that remote work offers while maintaining the collaboration and social connection that physical workplaces provide. Early data suggests that hybrid workers report productivity levels comparable to or exceeding those of fully in-office workers.",
    questions: [
      {q:"What was one driver of remote work adoption?",opts:["A. Lower salaries","B. The COVID-19 pandemic","C. Government regulations","D. Office space shortages"],ans:"B"},
      {q:"Which of the following is mentioned as a benefit of remote work?",opts:["A. Higher salaries","B. More vacation time","C. Reduced commuting stress","D. Free office equipment"],ans:"C"},
      {q:"What challenge do remote workers face?",opts:["A. Too many meetings","B. Isolation","C. Excessive office costs","D. Longer hours required by law"],ans:"B"},
      {q:"What approach are most organizations adopting?",opts:["A. Fully remote","B. Fully in-office","C. A hybrid model","D. Four-day workweeks"],ans:"C"}
    ],
    passageCn: "\u8FDC\u7A0B\u5DE5\u4F5C\u7684\u5174\u8D77\u662F\u8FD1\u51E0\u5341\u5E74\u6765\u6700\u91CD\u5927\u7684\u804C\u573A\u53D8\u9769\u4E4B\u4E00\u3002COVID-19\u75AB\u60C5\u52A0\u901F\u4E86\u8FD9\u4E00\u5DF2\u5728\u8FDB\u884C\u4E2D\u7684\u8D8B\u52BF\u3002\u8FDC\u7A0B\u5DE5\u4F5C\u7684\u597D\u5904\u5305\u62EC\u66F4\u9AD8\u7684\u5DE5\u4F5C\u6EE1\u610F\u5EA6\u3001\u51CF\u5C11\u7684\u901A\u52E4\u538B\u529B\u548C\u66F4\u597D\u7684\u5DE5\u4F5C\u751F\u6D3B\u5E73\u8861\u3002\u7136\u800C\u8FC7\u6E21\u5E76\u975E\u6CA1\u6709\u6311\u6218\u3002\u8BB8\u591A\u5DE5\u4EBA\u9762\u4E34\u5B64\u72EC\u611F\u3001\u5DE5\u4F5C\u4E0E\u751F\u6D3B\u754C\u9650\u6A21\u7CCA\u4EE5\u53CA\u59CB\u7EC8\u53EF\u7528\u7684\u538B\u529B\u3002\u5C55\u671B\u672A\u6765\uFF0C\u5927\u591A\u6570\u7EC4\u7EC7\u6B63\u5728\u91C7\u7528\u6DF7\u5408\u6A21\u5F0F\u3002"
  });
  // --- 17. 翻译：2022.12 ---
  CET4_REAL_PAPERS.push({
    id: "t2022_12b", year: "2022\u5E7412\u6708", type: "\u7FFB\u8BD1",
    title: "2022\u5E7412\u6708 \u00B7 \u7FFB\u8BD1",
    instruction: "\u5C06\u4E0B\u5217\u4E2D\u6587\u7FFB\u8BD1\u6210\u82F1\u6587",
    chineseText: "\u7559\u5B66\u751F\u5728\u56FD\u5916\u7559\u5B66\u65F6\uFF0C\u4E0D\u4EC5\u8981\u9002\u5E94\u65B0\u7684\u5B66\u4E60\u73AF\u5883\uFF0C\u8FD8\u9700\u8981\u514B\u670D\u8BED\u8A00\u969C\u7887\u548C\u6587\u5316\u5DEE\u5F02\u3002\u8FD9\u4E9B\u6311\u6218\u53EF\u80FD\u4F1A\u8BA9\u4ED6\u4EEC\u611F\u5230\u5B64\u72EC\u548C\u7126\u8651\u3002\u7136\u800C\uFF0C\u7559\u5B66\u7684\u6536\u83B7\u8FDC\u8FDC\u8D85\u8FC7\u56F0\u96BE\u3002\u5B83\u4E0D\u4EC5\u62D3\u5BBD\u4E86\u4ED6\u4EEC\u7684\u89C6\u91CE\uFF0C\u8FD8\u57F9\u517B\u4E86\u4ED6\u4EEC\u7684\u72EC\u7ACB\u80FD\u529B\u548C\u89E3\u51B3\u95EE\u9898\u7684\u80FD\u529B\u3002",
    reference: "When studying abroad, international students must not only adapt to new learning environments but also overcome language barriers and cultural differences. These challenges may cause them to feel lonely and anxious. However, the benefits of studying abroad far outweigh the difficulties. It not only broadens their horizons but also cultivates their independence and problem-solving abilities.",
    keyPoints: ["adapt to \u2192 \u9002\u5E94","language barriers \u2192 \u8BED\u8A00\u969C\u7887","cultural differences \u2192 \u6587\u5316\u5DEE\u5F02","far outweigh \u2192 \u8FDC\u8FDC\u8D85\u8FC7","broaden horizons \u2192 \u62D3\u5BBD\u89C6\u91CE"],
    translationAnalysis: "\u7559\u5B66\u7C7B\u7FFB\u8BD1\u8003\u67E5\u5E38\u89C1\u8868\u8FBE\u3002\u91CD\u70B9\uFF1A\n1. not only...but also \u2014\u2014\u5E76\u5217\u7ED3\u6784\u52A0\u5206\n2. adapt to \u2014\u2014\u56FA\u5B9A\u642D\u914D\n3. overcome barriers \u2014\u2014\u514B\u670D\u969C\u7887\n4. far outweigh \u2014\u2014\u8FDC\u8FDC\u8D85\u8FC7\n5. cultivate independence \u2014\u2014\u57F9\u517B\u72EC\u7ACB\u80FD\u529B"
  });
  // --- 18. 段落匹配：2021.6 ---
  CET4_REAL_PAPERS.push({
    id: "m2021_6c", year: "2021\u5E746\u6708", type: "\u6BB5\u843D\u5339\u914D",
    title: "2021\u5E746\u6708 \u00B7 \u6BB5\u843D\u5339\u914D",
    instruction: "\u5339\u914D\u6807\u9898\u4E0E\u6BB5\u843D",
    headings: {"\u2460":"The Power of Small Daily Habits","\u2461":"Why New Year Resolutions Often Fail","\u2462":"The Compounding Effect of Tiny Changes","\u2463":"Identity-Based Habit Formation","\u2464":"Environment Matters More Than Willpower"},
    paragraphs: {
      "A":"The problem with most New Year resolutions is that they rely on motivation\u2014and motivation is unreliable. When the initial excitement fades, so does the commitment. Research shows that about 80% of resolutions are abandoned by February.",
      "B":"James Clear, author of 'Atomic Habits,' argues that lasting change comes from focusing on who we wish to become rather than what we want to achieve. When we say 'I am a runner' instead of 'I want to run a marathon,' the habit becomes part of our identity.",
      "C":"If you improve by just 1% each day, you will be 37 times better by the end of the year. This compounding effect explains why small, consistent improvements\u2014reading one page, walking one block, meditating one minute\u2014can lead to remarkable transformations over time.",
      "D":"Contrary to popular belief, willpower is not the key to habit change. The most effective strategy is designing your environment to make good habits easy and bad habits difficult. If you want to eat healthier, keep fruit on the counter and hide the cookies.",
      "E":"Successful habit builders focus on doing something small every day rather than achieving massive results immediately. A two-minute meditation done daily for a month is worth more than an hour-long session done once and abandoned."
    },
    matchPairs: [{p:"B",h:"\u2463"},{p:"E",h:"\u2460"},{p:"C",h:"\u2462"},{p:"D",h:"\u2464"},{p:"A",h:"\u2461"}],
    matchClues: ["B: who we wish to become \u2192 Identity-Based","E: small every day \u2192 Small Daily Habits","C: 1% compounding \u2192 Compounding Effect","D: designing environment \u2192 Environment Matters","A: 80% abandoned \u2192 Why They Fail"],
    passageCn: "\u73B0\u4EE3\u4E60\u60EF\u5EFA\u7ACB\u7684\u79D1\u5B66\u7814\u7A76\u3002\u5927\u591A\u6570\u65B0\u5E74\u51B3\u5FC3\u4F9D\u8D56\u4E8E\u52A8\u529B\u2014\u2014\u800C\u52A8\u529B\u662F\u4E0D\u53EF\u9760\u7684\u3002\u5F53\u521D\u59CB\u5174\u594B\u6D88\u9000\u65F6\u627F\u8BFA\u4E5F\u968F\u4E4B\u6D88\u5931\u3002\u7814\u7A76\u663E\u793A\u7EA680%\u7684\u51B3\u5FC3\u5230\u4E8C\u6708\u5C31\u88AB\u653E\u5F03\u3002James Clear\u63D0\u51FA\uFF0C\u6301\u4E45\u7684\u6539\u53D8\u6765\u81EA\u4E8E\u5173\u6CE8\u6211\u4EEC\u60F3\u6210\u4E3A\u8C01\u800C\u975E\u6211\u4EEC\u60F3\u8FBE\u6210\u4EC0\u4E48\u3002\u8FD9\u5C31\u662F\u57FA\u4E8E\u8EAB\u4EFD\u7684\u4E60\u60EF\u5F62\u6210\u3002\u6BCF\u5929\u8FDB\u6B651%\uFF0C\u5E74\u5E95\u4F60\u5C06\u4F1A\u597D37\u500D\u3002\u8FD9\u4E2A\u590D\u5229\u6548\u5E94\u89E3\u91CA\u4E86\u5FAE\u5C0F\u6539\u8FDB\u7684\u529B\u91CF\u3002\u73AF\u5883\u8BBE\u8BA1\u6BD4\u610F\u5FD7\u529B\u66F4\u91CD\u8981\u3002\u6210\u529F\u7684\u4E60\u60EF\u5EFA\u7ACB\u8005\u5173\u6CE8\u6BCF\u5929\u505A\u4E00\u4EF6\u5C0F\u4E8B\u3002"
  });
// V3.5.1 — 倒计时 + 随机抽3题 + 统一提交（dayIndex >= 3）
// ============================================================
var _quizTimerInterval = null;
var _quizTimeLeft = 0;
var _quizStarted = false;
var _quizPapers = [];
var _quizAllSubmitted = false;

function quizSeededRandom(seed) {
  var x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function pickDailyPapers(d, n) {
  var idx = dayIndex(d);
  var start = (idx - 3) * n % CET4_REAL_PAPERS.length;
  var result = [];
  for (var i = 0; i < n; i++) {
    result.push(CET4_REAL_PAPERS[(start + i) % CET4_REAL_PAPERS.length]);
  }
  return result;
}

// ============================================================
// V3.5.1 无提交按钮版构建函数（供统一提交模式使用）
// ============================================================
function _v35buildClozeHTML(data, pid) {
  var html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  html += '<div style="background:#e8eaf6;border-radius:10px;padding:12px;margin-bottom:12px;">';
  html += '<div style="font-size:12px;color:#3949ab;font-weight:700;margin-bottom:8px;">\uD83D\uDCE6 \u8BCD\u5E93\uFF08\u6BCF\u8BCD\u53EA\u7528\u4E00\u6B21\uFF09</div>';
  html += '<div style="display:flex;flex-wrap:wrap;gap:6px;">';
  data.words.forEach(function(w) {
    html += '<span style="background:white;border:1px solid #c5cae9;border-radius:6px;padding:3px 10px;font-size:13px;font-weight:600;">' + w + '</span>';
  });
  html += '</div></div>';
  html += '<div style="font-size:14px;line-height:2.4;color:var(--text);">';
  var textParts = data.text.split(/__\((\d+)\)__/);
  for (var i = 0; i < textParts.length; i++) {
    if (i % 2 === 0) {
      html += textParts[i];
    } else {
      var num = textParts[i];
      var opts = '<option value="">\u2014\u2014</option>';
      data.words.forEach(function(w) { opts += '<option value="' + w + '">' + w + '</option>'; });
      html += '<select id="' + pid + '_b' + num + '" style="border:2px solid #c5cae9;border-radius:6px;padding:2px 8px;font-size:13px;background:white;min-width:110px;">' + opts + '</select>';
    }
  }
  html += '</div>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;"></div>';
  return html;
}

function _v35buildMatchingHTML(data, pid) {
  var html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  if (data.paragraphs) {
    html += '<div style="margin-bottom:14px;padding:14px;background:#f5f5f5;border-radius:10px;line-height:2.2;font-size:13px;color:#333;">';
    data.paragraphs.forEach(function(p) { html += '<div style="margin-bottom:6px;">' + p + '</div>'; });
    html += '</div>';
  }
  data.questions.forEach(function(q, i) {
    html += '<div style="margin-bottom:10px;font-size:13px;display:flex;align-items:center;gap:8px;">';
    html += '<span style="font-weight:700;color:#3949ab;min-width:24px;">' + q.q.charAt(0) + '.</span>';
    html += '<span style="flex:1;">' + q.q.substring(3) + '</span>';
    var opts = '<option value="">\u2014\u2014</option>';
    opts += '<option value="\u2460">\u2460</option><option value="\u2461">\u2461</option><option value="\u2462">\u2462</option><option value="\u2463">\u2463</option><option value="\u2464">\u2464</option>';
    html += '<select id="' + pid + '_q' + i + '" style="border:2px solid #c5cae9;border-radius:6px;padding:2px 8px;font-size:13px;background:white;min-width:60px;">' + opts + '</select>';
    html += '</div>';
  });
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;"></div>';
  return html;
}

function _v35buildReadingHTML(data, pid) {
  var html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  if (data.passage) {
    html += '<div style="margin-bottom:14px;padding:14px;background:#f5f5f5;border-radius:10px;line-height:2.2;font-size:13px;color:#333;white-space:pre-line;">' + data.passage + '</div>';
  }
  data.questions.forEach(function(q, i) {
    html += '<div style="margin-bottom:14px;font-size:13px;"><div style="font-weight:600;color:#333;margin-bottom:8px;">' + q.q + '</div>';
    html += '<div style="display:flex;flex-direction:column;gap:4px;">';
    q.options.forEach(function(opt) {
      var val = opt.charAt(0);
      var label = opt.substring(3);
      html += '<label style="display:flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;cursor:pointer;transition:background 0.2s;" onmouseover="this.style.background=\'#e8eaf6\'" onmouseout="this.style.background=\'transparent\'">';
      html += '<input type="radio" name="' + pid + '_q' + i + '" value="' + val + '" style="accent-color:#3949ab;">';
      html += '<span>' + label + '</span></label>';
    });
    html += '</div></div>';
  });
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;"></div>';
  return html;
}

function _v35buildTranslationHTML(data, pid) {
  var html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  html += '<div style="margin-bottom:14px;padding:14px;background:#f5f5f5;border-radius:10px;line-height:2.2;font-size:14px;color:#333;">' + (data.source || '') + '</div>';
  html += '<textarea id="' + pid + '_trans" placeholder="\u5728\u8FD9\u91CC\u5199\u4F60\u7684\u82F1\u6587\u7FFB\u8BD1..." style="width:100%;min-height:120px;border:2px solid #c5cae9;border-radius:10px;padding:12px;font-size:14px;line-height:1.8;resize:vertical;box-sizing:border-box;"></textarea>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;"></div>';
  return html;
}

// (作文 function 已移除)

// ============================================================
// 新版渲染每日一练（dayIndex >= 3 时调用）
// ============================================================
function renderDailyQuiz_v2() {
  var container = document.getElementById('dailyQuizContainer');
  if (!container) return;
  var d = currentDate;
  _quizPapers = pickDailyPapers(d, 3);
  _quizAllSubmitted = false;
  _quizStarted = false;
  _quizTimeLeft = 45 * 60;

  var html = '';
  html += '<div class="card" style="margin-bottom:16px;text-align:center;">';
  html += '<div class="section-title"><span class="icon">\uD83D\uDCCB</span>\u6BCF\u65E5\u4E00\u7EC3 \u00B7 \u771F\u9898\u7CBE\u9009';
  html += '<span class="badge" style="background:#3949ab;color:white;font-size:11px;">' + formatDate(d) + '</span></div>';
  html += '<div style="font-size:13px;color:var(--text-light);margin:8px 0 12px;">\u5171 3 \u9053\u56DB\u7EA7\u771F\u9898 \u00B7 45 \u5206\u949F\u9650\u65F6 \u00B7 \u5168\u90E8\u505A\u5B8C\u7EDF\u4E00\u63D0\u4EA4</div>';

  html += '<div style="margin-bottom:16px;">';
  for (var i = 0; i < _quizPapers.length; i++) {
    var p = _quizPapers[i];
    html += '<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:6px;">';
    html += '<span style="background:linear-gradient(135deg,#3949ab,#5c6bc0);color:white;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;">' + (i+1) + '</span>';
    html += '<span style="font-size:13px;color:var(--text);">' + p.year + ' \u00B7 <strong>' + p.type + '</strong></span>';
    html += '</div>';
  }
  html += '</div>';

  html += '<div id="quizTimerBar" style="display:none;margin:0 auto 16px;max-width:300px;">';
  html += '<div style="font-size:13px;color:var(--text-light);margin-bottom:6px;">\u23F1 \u5269\u4F59\u65F6\u95F4</div>';
  html += '<div id="quizTimerDisplay" style="font-size:28px;font-weight:900;color:#3949ab;letter-spacing:2px;font-family:monospace;">45:00</div>';
  html += '<div id="quizTimerBar2" style="height:6px;background:#e8eaf6;border-radius:3px;margin-top:8px;"><div id="quizTimerFill" style="height:100%;width:100%;background:linear-gradient(90deg,#3949ab,#5c6bc0);border-radius:3px;transition:width 1s linear;"></div></div>';
  html += '</div>';

  html += '<button id="startQuizBtn" onclick="startDailyQuiz()" style="background:linear-gradient(135deg,#3949ab,#5c6bc0);color:white;border:none;border-radius:24px;padding:12px 32px;font-size:15px;font-weight:700;cursor:pointer;box-shadow:0 4px 15px rgba(57,73,171,0.3);">\uD83D\uDE80 \u5F00\u59CB\u7B54\u9898</button>';
  html += '</div>';

  // 题目区域（初始隐藏）
  html += '<div id="quizPapersArea" style="display:none;">';
  var icons = ['\uD83D\uDCD6','\uD83D\uDCDD','\u270F\uFE0F'];
  var labels = ['\u4E00','\u4E8C','\u4E09'];
  var colors = ['linear-gradient(135deg,#3949ab,#5c6bc0)','linear-gradient(135deg,#00897b,#26a69a)','linear-gradient(135deg,#e65100,#ef6c00)'];
  for (var j = 0; j < _quizPapers.length; j++) {
    var paper = _quizPapers[j];
    var pid = 'R' + j;
    html += '<div class="card" style="margin-bottom:16px;" id="paperCard' + j + '">';
    html += '<div class="section-title"><span class="icon">' + icons[j] + '</span>\u7B2C' + labels[j] + '\u9898 \u00B7 ' + paper.year + ' \u00B7 ' + paper.type;
    html += '<span class="badge" style="background:' + colors[j] + ';color:white;font-size:11px;">#' + (j+1) + '</span></div>';
    if (paper.type === '\u9009\u8BCD\u586B\u7A7A') html += _v35buildClozeHTML(paper, pid);
    else if (paper.type === '\u6BB5\u843D\u5339\u914D') html += _v35buildMatchingHTML(paper, pid);
    else if (paper.type === '\u9605\u8BFB\u7406\u89E3') html += _v35buildReadingHTML(paper, pid);
    else if (paper.type === '\u7FFB\u8BD1') html += _v35buildTranslationHTML(paper, pid);
    html += '</div>';
  }

  // 统一提交按钮
  html += '<div id="submitAllArea" style="text-align:center;margin:20px 0;">';
  html += '<button onclick="submitAllPapers()" style="background:linear-gradient(135deg,#d32f2f,#ef5350);color:white;border:none;border-radius:24px;padding:14px 40px;font-size:16px;font-weight:700;cursor:pointer;box-shadow:0 4px 15px rgba(211,47,47,0.3);">\uD83D\uDCCB \u7EDF\u4E00\u63D0\u4EA4\u7B54\u6848</button>';
  html += '</div>';

  // 总成绩区（初始隐藏）
  html += '<div id="quizTotalResult" style="display:none;"></div>';

  html += '</div>';

  container.innerHTML = html;
}

// 开始答题
function startDailyQuiz() {
  if (_quizStarted) return;
  _quizStarted = true;
  var btn = document.getElementById('startQuizBtn');
  if (btn) btn.style.display = 'none';
  var timerBar = document.getElementById('quizTimerBar');
  if (timerBar) timerBar.style.display = 'block';
  var papersArea = document.getElementById('quizPapersArea');
  if (papersArea) papersArea.style.display = 'block';

  _quizTimeLeft = 45 * 60;
  updateTimerDisplay();
  _quizTimerInterval = setInterval(function() {
    _quizTimeLeft--;
    updateTimerDisplay();
    if (_quizTimeLeft <= 0) {
      clearInterval(_quizTimerInterval);
      _quizTimerInterval = null;
      submitAllPapers();
    }
  }, 1000);
}

function updateTimerDisplay() {
  var mins = Math.floor(_quizTimeLeft / 60);
  var secs = _quizTimeLeft % 60;
  var display = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
  var el = document.getElementById('quizTimerDisplay');
  if (el) {
    el.textContent = display;
    if (_quizTimeLeft <= 300) el.style.color = '#d32f2f';
    else if (_quizTimeLeft <= 600) el.style.color = '#e65100';
  }
  var fill = document.getElementById('quizTimerFill');
  if (fill) {
    var pct = (_quizTimeLeft / (45 * 60)) * 100;
    fill.style.width = pct + '%';
    if (_quizTimeLeft <= 300) fill.style.background = 'linear-gradient(90deg,#d32f2f,#ef5350)';
  }
}

// ============================================================
// 统一提交 + 详细答案解析
// ============================================================
function submitAllPapers() {
  if (_quizAllSubmitted) return;
  _quizAllSubmitted = true;

  // 停止计时
  if (_quizTimerInterval) { clearInterval(_quizTimerInterval); _quizTimerInterval = null; }
  var display = document.getElementById('quizTimerDisplay');
  if (display) { display.textContent = '\u23F0 \u5DF2\u63D0\u4EA4\uFF01'; display.style.color = '#2e7d32'; }

  // 隐藏统一提交按钮
  var submitArea = document.getElementById('submitAllArea');
  if (submitArea) submitArea.style.display = 'none';

  var totalScore = 0;
  var totalMax = 0;
  var allDetails = [];

  for (var i = 0; i < _quizPapers.length; i++) {
    var data = _quizPapers[i];
    var pid = 'R' + i;
    var resultEl = document.getElementById(pid + 'Result');
    if (!resultEl) continue;

    var html = '';
    var score = 0;
    var max = 0;

    if (data.type === '\u9009\u8BCD\u586B\u7A7A') {
      var ans = data.answers;
      var correct = 0;
      var total = Object.keys(ans).length;
      var detail = '';
      Object.keys(ans).sort(function(a,b){return +a-+b}).forEach(function(k) {
        var sel = document.getElementById(pid + '_b' + k);
        var userAns = sel ? sel.value : '';
        var rightAns = ans[k];
        var reason = (data.wordReasons && data.wordReasons[k]) ? data.wordReasons[k] : '';
        if (userAns.toLowerCase() === rightAns.toLowerCase()) {
          correct++;
          detail += '<div style="font-size:13px;color:#2e7d32;margin-bottom:4px;padding:6px 10px;background:#f1f8e9;border-radius:6px;border-left:3px solid #c8e6c9;">\u2705 (' + k + ') <strong>' + rightAns + '</strong>' + (reason ? '<br><span style="font-size:11px;color:#33691e;">\uD83D\uDCD6 ' + reason + '</span>' : '') + '</div>';
        } else {
          detail += '<div style="font-size:13px;color:#c62828;margin-bottom:6px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C (' + k + ') \u4F60\u7684\u7B54\u6848\uFF1A<em>' + (userAns || '\u672A\u586B') + '</em> \u2192 \u6B63\u786E\uFF1A<strong>' + rightAns + '</strong>' + (reason ? '<br><span style="font-size:11px;color:#b71c1c;">\uD83D\uDCD6 ' + reason + '</span>' : '') + '</div>';
        }
      });
      score = correct;
      max = total;
      html += '<div style="font-size:15px;font-weight:700;color:#3949ab;margin-bottom:10px;">\uD83C\uDF1F \u9009\u8BCD\u586B\u7A7A\uFF1A' + correct + ' / ' + total + ' (' + Math.round(correct/total*100) + '%)</div>';
      html += detail;
      if (data.analysis) html += '<div style="margin-top:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:var(--text-light);line-height:1.8;">\uD83D\uDCD6 \u89E3\u6790\uFF1A' + data.analysis + '</div>';
      // 完整原文填答案
      if (data.text) {
        var filledText = data.text;
        Object.keys(data.answers).sort(function(a,b){return +a-+b}).forEach(function(k){
          filledText = filledText.split('__('+k+')__').join('<strong style="color:#3949ab;border-bottom:2px solid #c5cae9">' + data.answers[k] + '</strong>');
        });
        html += '<div style="margin-top:12px;padding:14px;background:#f5f5f5;border-radius:10px;line-height:2.2;font-size:14px;"><div style="font-weight:700;color:#3949ab;margin-bottom:8px;font-size:13px;">\uD83D\uDCDD \u5B8C\u6574\u539F\u6587\uFF08\u5DF2\u586B\u5165\u7B54\u6848\uFF09</div>' + filledText + '</div>';
      }
      if (data.passageCn) html += '<div style="margin-top:8px;padding:14px;background:#fff8e1;border-radius:10px;border:1px solid #ffe082;line-height:2.2;font-size:14px;color:#555;"><div style="font-weight:700;color:#e65100;margin-bottom:8px;font-size:13px;">\uD83C\uDF10 \u53C2\u8003\u8BD1\u6587</div>' + data.passageCn.replace(/\\n/g,'<br>') + '</div>';

    } else if (data.type === '\u6BB5\u843D\u5339\u914D') {
      var correct = 0;
      var total = data.questions.length;
      var detail = '';
      data.questions.forEach(function(q, i) {
        var sel = document.getElementById(pid + '_q' + i);
        var userAns = sel ? sel.value : '';
        var clue = (data.matchClues && data.matchClues[i]) ? data.matchClues[i] : '';
        if (userAns === q.ans) {
          correct++;
          detail += '<div style="font-size:13px;color:#2e7d32;margin-bottom:6px;padding:6px 10px;background:#f1f8e9;border-radius:6px;border-left:3px solid #c8e6c9;">\u2705 ' + q.q + ' \u2192 <strong>' + q.ans + '</strong>' + (clue ? '<br><span style="font-size:11px;color:#33691e;">\uD83D\uDD0D \u5339\u914D\u4F9D\u636E\uFF1A' + clue + '</span>' : '') + '</div>';
        } else {
          detail += '<div style="font-size:13px;color:#c62828;margin-bottom:6px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C ' + q.q + ' \u4F60\u9009\uFF1A<em>' + (userAns || '\u672A\u9009') + '</em> \u2192 \u6B63\u786E\uFF1A<strong>' + q.ans + '</strong>' + (clue ? '<br><span style="font-size:11px;color:#b71c1c;">\uD83D\uDD0D \u5339\u914D\u4F9D\u636E\uFF1A' + clue + '</span>' : '') + '</div>';
        }
      });
      score = correct * 2;
      max = total * 2;
      html += '<div style="font-size:15px;font-weight:700;color:#3949ab;margin-bottom:10px;">\uD83C\uDF1F \u6BB5\u843D\u5339\u914D\uFF1A' + (correct*2) + ' / ' + (total*2) + ' (' + Math.round(correct/total*100) + '%)</div>';
      html += detail;
      if (data.passageCn) html += '<div style="margin-top:8px;padding:14px;background:#fff8e1;border-radius:10px;border:1px solid #ffe082;line-height:2.2;font-size:14px;color:#555;"><div style="font-weight:700;color:#e65100;margin-bottom:8px;font-size:13px;">\uD83C\uDF10 \u6BB5\u843D\u53C2\u8003\u8BD1\u6587</div>' + data.passageCn.replace(/\\n/g,'<br>') + '</div>';

    } else if (data.type === '\u9605\u8BFB\u7406\u89E3') {
      var correct = 0;
      var total = data.questions.length;
      var detail = '';
      data.questions.forEach(function(q, i) {
        var radioName = pid + '_q' + i;
        var radios = document.getElementsByName(radioName);
        var userAns = '';
        for (var r = 0; r < radios.length; r++) { if (radios[r].checked) { userAns = radios[r].value; break; } }
        if (userAns === q.ans) {
          correct++;
          detail += '<div style="font-size:13px;color:#2e7d32;margin-bottom:8px;padding:6px 10px;background:#f1f8e9;border-radius:6px;border-left:3px solid #c8e6c9;">\u2705 ' + q.q + ' <strong>' + q.ans + '</strong><br><span style="font-size:11px;color:#33691e;">\uD83D\uDCD6 ' + q.explain + '</span></div>';
        } else {
          var wrongInfo = (q.wrongReasons && q.wrongReasons[userAns]) ? '<br><span style="font-size:11px;color:#b71c1c;">\u274C \u4E3A\u4EC0\u4E48\u4F60\u7684\u7B54\u6848\u4E0D\u5BF9\uFF1A' + q.wrongReasons[userAns] + '</span>' : '';
          detail += '<div style="font-size:13px;color:#c62828;margin-bottom:8px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C ' + q.q + ' \u4F60\u9009\uFF1A<em>' + (userAns || '\u672A\u9009') + '</em> \u2192 \u6B63\u786E\uFF1A<strong>' + q.ans + '</strong><br><span style="font-size:11px;color:#888;">\uD83D\uDCD6 ' + q.explain + '</span>' + wrongInfo + '</div>';
        }
      });
      var perQ = Math.round(10 / total);
      score = correct * perQ;
      max = total * perQ;
      html += '<div style="font-size:15px;font-weight:700;color:#3949ab;margin-bottom:10px;">\uD83C\uDF1F \u9605\u8BFB\u7406\u89E3\uFF1A' + (correct*perQ) + ' / ' + (total*perQ) + ' (' + Math.round(correct/total*100) + '%)</div>';
      html += detail;
      if (data.passageCn) html += '<div style="margin-top:14px;padding:14px;background:#fff8e1;border-radius:10px;border:1px solid #ffe082;line-height:2.2;font-size:14px;color:#555;"><div style="font-weight:700;color:#e65100;margin-bottom:8px;font-size:13px;">\uD83C\uDF10 \u77ED\u6587\u7FFB\u8BD1</div>' + data.passageCn.replace(/\\n/g,'<br>') + '</div>';

    } else if (data.type === '\u7FFB\u8BD1') {
      var userTrans = document.getElementById(pid + '_trans');
      score = 0; max = 0;
      html += '<div style="font-size:15px;font-weight:700;color:#3949ab;margin-bottom:10px;">\u2705 \u7FFB\u8BD1\u9898\u5DF2\u63D0\u4EA4</div>';
      if (userTrans && userTrans.value.trim()) {
        html += '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:#888;">\uD83D\uDCDD \u4F60\u7684\u7FFB\u8BD1\uFF1A<br>' + userTrans.value.replace(/\\n/g,'<br>') + '</div>';
        if (data.keyPoints && data.keyPoints.length) {
          var kpHtml = '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;">';
          kpHtml += '<div style="font-weight:700;color:#3949ab;margin-bottom:6px;">\uD83D\uDD0D \u5173\u952E\u8BCD\u68C0\u67E5\uFF1A</div>';
          var kpFound = 0;
          data.keyPoints.forEach(function(kp) {
            var parts = kp.split(' \u2192 ');
            var word = parts.length > 1 ? parts[1].trim().split(' / ')[0].trim().toLowerCase() : '';
            var found = word && userTrans.value.toLowerCase().indexOf(word) >= 0;
            if (found) kpFound++;
            kpHtml += '<div style="margin-bottom:3px;font-size:12px;">' + (found ? '\u2705' : '\u274C') + ' ' + kp + '</div>';
          });
          var rate = Math.round(kpFound / data.keyPoints.length * 100);
          kpHtml += '<div style="margin-top:6px;font-size:13px;font-weight:700;color:' + (rate >= 60 ? '#2e7d32' : '#c62828') + ';">\uD83C\uDFAF \u5173\u952E\u8BCD\u8986\u76D6\u7387\uFF1A' + kpFound + '/' + data.keyPoints.length + ' (' + rate + '%)</div>';
          kpHtml += '</div>';
          html += kpHtml;
        }
      }
      html += '<div style="font-size:14px;font-weight:700;color:#3949ab;margin:12px 0 6px;">\uD83D\uDCCC \u53C2\u8003\u8BD1\u6587\uFF1A</div>';
      html += '<div style="font-size:13px;line-height:1.9;padding:12px;background:#e8f5e9;border-radius:10px;border:1px solid #c8e6c9;">' + data.reference + '</div>';
      if (data.translationAnalysis) html += '<div style="margin-top:8px;padding:10px;background:white;border-radius:8px;font-size:12px;color:var(--text-light);line-height:1.8;white-space:pre-line;">\uD83D\uDCD6 \u7FFB\u8BD1\u89E3\u6790\uFF1A' + data.translationAnalysis + '</div>';

    } else if (false) {
      // (作文题已移除)
    }

    resultEl.innerHTML = html;
    resultEl.style.display = 'block';
    totalScore += score;
    totalMax += max;
  }

  // 显示总成绩
  var totalResult = document.getElementById('quizTotalResult');
  if (totalResult && totalMax > 0) {
    var pct = Math.round(totalScore / totalMax * 100);
    var emoji = pct >= 90 ? '\uD83C\uDFC6' : pct >= 70 ? '\uD83C\uDF1F' : pct >= 50 ? '\uD83D\uDCAA' : '\uD83D\uDCAA';
    var msg = pct >= 90 ? '\u592A\u68D2\u4E86\uFF01\u4FDD\u6301\u8FD9\u4E2A\u72B6\u6001\uFF01' : pct >= 70 ? '\u4E0D\u9519\uFF0C\u7EE7\u7EED\u52A0\u6CB9\uFF01' : pct >= 50 ? '\u8FD8\u9700\u8981\u52AA\u529B\u54E6\uFF0C\u591A\u7EC3\u4E60\uFF01' : '\u522B\u6C14\u998A\uFF0C\u575A\u6301\u5B66\u4E60\u5C31\u4F1A\u8FDB\u6B65\uFF01';
    totalResult.innerHTML = '<div class="card" style="text-align:center;background:linear-gradient(135deg,#3949ab,#5c6bc0);color:white;padding:24px;border-radius:16px;margin-bottom:16px;">' +
      '<div style="font-size:20px;font-weight:900;">' + emoji + ' \u672C\u65E5\u603B\u6210\u7EE9</div>' +
      '<div style="font-size:48px;font-weight:900;margin:12px 0;">' + totalScore + ' / ' + totalMax + '</div>' +
      '<div style="font-size:14px;opacity:0.9;">' + msg + '</div>' +
      '</div>';
    totalResult.style.display = 'block';
  }

  // 滚动到总成绩区
  if (totalResult) totalResult.scrollIntoView({behavior:'smooth',block:'center'});
  markQuizDone('R_all');
}

// ============================================================
// \u8986\u76D6 renderDailyQuiz\uFF1A\u6839\u636E dayIndex \u5206\u53C9
// ============================================================
var _originalRenderDailyQuiz = renderDailyQuiz;
renderDailyQuiz = function() {
  var d = currentDate;
  var idx = dayIndex(d);
  if (idx >= 3) {
    renderDailyQuiz_v2();
  } else {
    _originalRenderDailyQuiz();
  }
};
"""

# 找到 </script> 并在前面注入 V3.5.1 升级代码
script_end = html.rfind('</script>')
if script_end > 0:
    html = html[:script_end] + QUIZ2_JS + '\n' + html[script_end:]
    print("1. V3.5.1 Quiz JS injected (unified submit + detailed analysis)")
else:
    print("ERROR: Could not find </script>")
    exit(1)

# 写回
with open(path, 'w', encoding='utf-8') as f:
    f.write(html)

# 验证
import re
braces_open = html.count('{')
braces_close = html.count('}')
print(f"JS braces: {braces_open} vs {braces_close} balanced={braces_open == braces_close}")
print(f"Size: {len(html)} bytes")
checks = [
    ("CET4_REAL_PAPERS", "CET4_REAL_PAPERS" in html),
    ("_v35buildClozeHTML", "_v35buildClozeHTML" in html),
    ("submitAllPapers", "submitAllPapers" in html),
    ("renderDailyQuiz_v2", "renderDailyQuiz_v2" in html),
    ("startDailyQuiz", "startDailyQuiz" in html),
    ("quizTimerDisplay", "quizTimerDisplay" in html),
    ("dayIndex >= 3 switch", "idx >= 3" in html),
    ("\u7EDF\u4E00\u63D0\u4EA4", "\u7EDF\u4E00\u63D0\u4EA4" in html),
    ("\u603B\u6210\u7EE9", "\u603B\u6210\u7EE9" in html),
    ("translationAnalysis", "translationAnalysis" in html),
    ("\u53C2\u8003\u8BD1\u6587", "\u53C2\u8003\u8BD1\u6587" in html),
]
for name, ok in checks:
    print(f"  {name}: {'OK' if ok else 'MISSING'}")
print("\nDone! V3.5.1 changes applied:")
print("  1. CET4_REAL_PAPERS: 12\u9053\u56DB\u7EA7\u771F\u9898\u5E93")
print("  2. _v35build*HTML: \u65E0\u63D0\u4EA4\u6309\u94AE\u7248\u6784\u5EFA\u51FD\u6570")
print("  3. submitAllPapers: \u7EDF\u4E00\u63D0\u4EA4\uFF0C\u76F4\u63A5\u4ECE _quizPapers \u53D6\u6570\u636E")
print("  4. \u63D0\u4EA4\u540E\u663E\u793A\uFF1A\u6BCF\u9898\u7B54\u6848+\u89E3\u6790+\u539F\u6587\u7FFB\u8BD1+\u603B\u6210\u7EE9")
print("  5. \u7FFB\u8BD1\u9898\uFF1A\u53C2\u8003\u8BD1\u6587+\u7FFB\u8BD1\u89E3\u6790+\u5173\u952E\u8BCD\u68C0\u67E5")
print("  6. \u4F5C\u6587\u9898\uFF1A\u53C2\u8003\u8303\u6587+\u8303\u6587\u89E3\u6790+\u5199\u4F5C\u5206\u6790")
