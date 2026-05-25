"""
V3.3 - 每日测试题模块 (Split Logic V2)
核心改动:
  5/21 (dayIndex=0): 完整保留原始模拟考试 — examPre/examBody/startExam 全部不动
  5/22+ (dayIndex≥1): 每日一练替换模拟考 — 交互式答题，提交后显示分数+答案+解析
"""
import re

path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# ============================================================
# 0. 前置：给 tab 按钮加 id，方便动态改文字
# ============================================================
html = html.replace(
    '<button class="tab-btn" onclick="switchTab(\'exam\')"><span class="tab-icon">✍️</span>模拟考</button>',
    '<button class="tab-btn" id="tab-exam" onclick="switchTab(\'exam\')"><span class="tab-icon">✍️</span>模拟考</button>'
)
print("0. Tab button ID added")

# ============================================================
# 1. 在 </script> 前注入每日题库数据 + 交互式渲染/提交
# ============================================================

QUIZ_JS = r"""
// ============================================================
// 每日练习题库 (V3.3) — 提交后显示分数+答案+解析
// ============================================================

// 题型A: 四级标准题型（选词填空/段落匹配/阅读理解/翻译/作文），每天轮换
const DAILY_PRACTICE_POOL = [
  // ---- 选词填空 ----
  {
    type: "选词填空", typeEn: "Banked Cloze",
    title: "选词填空练习",
    instruction: "从下方词库中选择合适的单词填入空格（每词只用一次，注意形态变化）",
    words: ["accumulate","adequate","consequence","demonstrate","eliminate",
            "enhance","establish","evaluate","exceed","flexible"],
    text: `In modern society, it is crucial to __(1)__ clear goals and work steadily toward them. People who __(2)__ a wealth of experience tend to perform better under pressure. However, we must __(3)__ the potential risks before making major decisions. A __(4)__ approach to problem-solving often yields better results. __(5)__ unnecessary steps in your workflow can __(6)__ overall efficiency. Remember: effort that __(7)__ average will always __(8)__ positive outcomes. Make sure you have __(9)__ resources before starting. The __(10)__ of poor planning can last for years.`,
    answers: {1:"establish",2:"accumulate",3:"evaluate",4:"flexible",5:"Eliminating",6:"enhance",7:"exceeds",8:"demonstrate",9:"adequate",10:"consequence"},
    analysis: "重点词：establish目标、accumulate经验、evaluate评估、flexible灵活、eliminate消除、enhance提升、exceed超过、demonstrate展示、adequate足够、consequence后果",
    wordReasons: {1:"establish clear goals（建立清晰目标）是固定搭配，常用 it is crucial to establish...",2:"accumulate a wealth of experience（积累丰富经验）为常见表达",3:"evaluate the potential risks（评估潜在风险），before making decisions 提示需先评估",4:"flexible approach（灵活方法），本空需填入形容词修饰 approach",5:"Eliminating unnecessary steps（消除不必要的步骤），动名词做主语需大写",6:"enhance efficiency（提升效率），can do \u2192 填入原形动词",7:"exceeds average（超过平均水平），effort 为单数，动词用三单 exceeds",8:"demonstrate positive outcomes（展现积极成果），will always \u2192 原形动词",9:"adequate resources（充足的资源），have + adj. + n. 结构",10:"consequence of poor planning（糟糕规划的后果），the \u2026 of \u2026 结构"},
    passageCn: "\u5728\u73B0\u4EE3\u793E\u4F1A\uFF0C\u786E\u7ACB\u660E\u786E\u7684\u76EE\u6807\u5E76\u7A33\u6B65\u4E3A\u4E4B\u52AA\u529B\u81F3\u5173\u91CD\u8981\u3002\u79EF\u7D2F\u4E86\u4E30\u5BCC\u7ECF\u9A8C\u7684\u4EBA\u5F80\u5F80\u5728\u538B\u529B\u4E0B\u8868\u73B0\u66F4\u597D\u3002\u7136\u800C\uFF0C\u5728\u505A\u51FA\u91CD\u5927\u51B3\u7B56\u4E4B\u524D\uFF0C\u6211\u4EEC\u5FC5\u987B\u8BC4\u4F30\u6F5C\u5728\u98CE\u9669\u3002\u7075\u6D3B\u7684\u95EE\u9898\u89E3\u51B3\u65B9\u6CD5\u5F80\u5F80\u80FD\u4EA7\u751F\u66F4\u597D\u7684\u7ED3\u679C\u3002\u6D88\u9664\u5DE5\u4F5C\u6D41\u7A0B\u4E2D\u4E0D\u5FC5\u8981\u7684\u6B65\u9AA4\u53EF\u4EE5\u63D0\u9AD8\u6574\u4F53\u6548\u7387\u3002\u8BB0\u4F4F\uFF1A\u8D85\u8D8A\u5E73\u5747\u6C34\u5E73\u7684\u52AA\u529B\u603B\u4F1A\u5C55\u73B0\u51FA\u79EF\u6781\u7684\u6210\u679C\u3002\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u786E\u4FDD\u4F60\u6709\u5145\u8DB3\u7684\u8D44\u6E90\u3002\u7CDF\u7CD5\u89C4\u5212\u7684\u540E\u679C\u53EF\u80FD\u4F1A\u6301\u7EED\u591A\u5E74\u3002"
  },
  {
    type: "选词填空", typeEn: "Banked Cloze",
    title: "选词填空练习（第2组）",
    instruction: "从下方词库中选择合适的单词填入空格",
    words: ["acquire","beneficial","capable","competitive","confident",
            "contribute","crucial","decline","determine","digital"],
    text: `The __(1)__ age has transformed how we learn and communicate. It is __(2)__ that students __(3)__ strong reading and writing skills early on. Reading is __(4)__ to cognitive development at every age. People who are __(5)__ in their abilities tend to take on greater challenges. In a __(6)__ job market, one must constantly grow. Those who __(7)__ to a team's success are valued most. A person's mindset can __(8)__ their ultimate outcome. Although test scores __(9)__ in some regions, motivation remains key. Everyone is __(10)__ of achieving more than they think.`,
    answers: {1:"digital",2:"crucial",3:"acquire",4:"beneficial",5:"confident",6:"competitive",7:"contribute",8:"determine",9:"decline",10:"capable"},
    analysis: "核心句型：it is crucial that...（虚拟语气）、contribute to success、determine outcome",
    wordReasons: {1:"digital age（数字时代），常见固定搭配，描述当今时代特征",2:"it is crucial that...（关键的是...），It is + adj. + that 从句结构",3:"acquire skills（获取技能），students acquire...skills 为常见表达",4:"Reading is beneficial to...（阅读对...有益），be beneficial to 固定搭配",5:"confident in their abilities（对自己能力有信心），be confident in 固定搭配",6:"competitive job market（竞争激烈的就业市场），形容词修饰 job market",7:"contribute to a team's success（为团队成功做贡献），contribute to 固定搭配",8:"determine their outcome（决定他们的结果），mindset can determine...主谓结构",9:"test scores decline（考试成绩下降），主谓结构，scores 复数用原形",10:"capable of achieving（有能力实现），be capable of doing 固定搭配"},
    passageCn: "数字时代已经改变了我们学习和交流的方式。学生尽早掌握扎实的读写能力至关重要。阅读对每个年龄段的认知发展都有益。对自己能力有信心的人往往接受更大的挑战。在竞争激烈的就业市场中，人们必须不断成长。那些为团队成功做出贡献的人最受重视。一个人的心态可以决定其最终结果。尽管某些地区的考试成绩有所下降，但动力仍然是关键。每个人都有能力取得比想象中更多的成就。"
  },
  // ---- 段落匹配 ----
  {
    type: "段落匹配", typeEn: "Section Matching",
    title: "段落匹配练习",
    instruction: "阅读下方5个段落，将题目陈述（A-E）与正确段落编号（①-⑤）匹配",
    paragraphs: [
      "① Many researchers argue that sleep is as important as diet and exercise for maintaining good health. Studies show that chronic sleep deprivation is linked to increased risk of obesity, heart disease, and depression.",
      "② The rise of remote work has fundamentally changed how offices are designed. Companies now invest in collaboration tools rather than physical desk space, prioritizing flexibility over fixed locations.",
      "③ Urban green spaces have proven benefits for mental health. Residents with access to parks and nature areas report lower stress levels and greater overall life satisfaction than those in densely built environments.",
      "④ Artificial intelligence is reshaping the job market at an unprecedented rate. While some positions become automated, new roles requiring human creativity and judgment are simultaneously emerging.",
      "⑤ Sustainable packaging has moved from a niche concern to a mainstream business requirement. Consumers increasingly expect brands to reduce plastic use and adopt eco-friendly materials."
    ],
    questions: [
      {q:"A. Access to nature can significantly improve people's emotional well-being.", ans:"③"},
      {q:"B. Insufficient rest negatively affects various aspects of physical and mental health.", ans:"①"},
      {q:"C. Environmental awareness is now influencing major corporate decisions.", ans:"⑤"},
      {q:"D. Technological advancement is simultaneously creating and eliminating employment.", ans:"④"},
      {q:"E. Flexible working arrangements are changing the physical structure of workplaces.", ans:"②"}
    ],
    matchClues: [
      "\u2462: Urban green spaces have proven benefits for mental health. Residents with access to parks and nature areas report lower stress levels... \u2014 \u201Caccess to nature\u201D \u5BF9\u5E94 \u201Cgreen spaces\u201D\uFF0C\u201Cimprove emotional well-being\u201D \u5BF9\u5E94 \u201Cbenefits for mental health\u201D\u3001\u201Clower stress\u201D",
      "\u2460: sleep is as important as diet and exercise...sleep deprivation is linked to increased risk of obesity, heart disease, and depression \u2014 \u201Cinsufficient rest\u201D \u5BF9\u5E94 \u201Csleep deprivation\u201D\uFF0C\u201Cphysical and mental health\u201D \u5BF9\u5E94 obesity/heart disease(physical) + depression(mental)",
      "\u2464: Sustainable packaging...Consumers increasingly expect brands to reduce plastic use and adopt eco-friendly materials \u2014 \u201Cenvironmental awareness\u201D \u5BF9\u5E94 \u201Csustainable\u201D\u3001\u201Ceco-friendly\u201D\uFF0C\u201Ccorporate decisions\u201D \u5BF9\u5E94 \u201Cbrands\u201D",
      "\u2463: AI is reshaping the job market...some positions become automated, new roles...are simultaneously emerging \u2014 \u201Ctechnological advancement\u201D \u5BF9\u5E94 \u201CAI\u201D\uFF0C\u201Ccreating and eliminating\u201D \u5BF9\u5E94 \u201Cautomated\u201D + \u201Cemerging\u201D",
      "\u2461: The rise of remote work...Companies now invest in collaboration tools rather than physical desk space \u2014 \u201Cflexible working arrangements\u201D \u5BF9\u5E94 \u201Cremote work\u201D\uFF0C\u201Cphysical structure\u201D \u5BF9\u5E94 \u201Cphysical desk space\u201D"
    ]
  },
  // ---- 阅读理解 ----
  {
    type: "阅读理解", typeEn: "Reading Comprehension",
    title: "阅读理解练习",
    instruction: "阅读短文，选择最佳答案",
    passage: `Procrastination\u2014the habit of delaying tasks\u2014affects millions of people worldwide. While often dismissed as mere laziness, research suggests it is more closely related to emotional regulation than time management. People avoid tasks not because they are lazy, but because those tasks trigger feelings of anxiety, boredom, or self-doubt.

Studies from Carleton University found that procrastinators experience higher levels of stress and lower well-being, not because they do less work, but because of the guilt and worry that accompany avoidance. Interestingly, the act of procrastination provides short-term relief\u2014by avoiding the task, one avoids the negative emotion\u2014but this comes at the cost of long-term consequences.

Experts recommend addressing the emotional roots of procrastination rather than simply setting stricter schedules. Techniques such as "implementation intentions" (stating specifically when and where you will do a task) and self-compassion (treating yourself kindly after setbacks) have shown measurable improvements in follow-through.`,
    questions: [
      {q:"1. According to the passage, procrastination is primarily caused by:",options:["A. Poor time management skills","B. Physical laziness","C. Difficulty managing negative emotions","D. Lack of clear goals"],ans:"C",explain:"第一段: 'it is more closely related to emotional regulation than time management'",wrongReasons:{A:"文章明确说拖延与时间管理无关（more closely related to emotional regulation THAN time management）",B:"文章说拖延不仅仅是懒惰（more than mere laziness），否定它是主要原因",D:"文章未提及缺乏明确目标与拖延的直接关系"}},
      {q:"2. The phrase 'short-term relief' in paragraph 2 refers to:",options:["A. Completing tasks ahead of schedule","B. The temporary comfort gained from avoiding a task","C. A decrease in overall workload","D. Improved concentration after rest"],ans:"B",explain:"第二段: 'by avoiding the task, one avoids the negative emotion'",wrongReasons:{A:"文章说的是逃避任务获得短期解脱，而非提前完成任务",C:"工作量并未减少，只是暂时回避了负面情绪",D:"文章未提注意力提升，反而是 guilt and worry"}},
      {q:"3. Which of the following is suggested as an effective solution?",options:["A. Working longer hours","B. Setting stricter deadlines","C. Being kind to yourself after failures","D. Avoiding challenging tasks"],ans:"C",explain:"第三段: 'self-compassion have shown measurable improvements'",wrongReasons:{A:"文章未提延长工作时间，反而建议处理情绪根源",B:"文章明确反对 stricter schedules，建议 addressing emotional roots",D:"文章鼓励面对任务而非逃避（avoiding challenging tasks 与建议相反）"}}
    ],
    passageCn: "拖延——即推迟任务的习惯——影响着全球数百万人。虽然拖延常被简单归为懒惰，但研究表明它更与情绪调节有关，而非时间管理。人们逃避任务不是因为他们懒惰，而是因为这些任务引发了焦虑、无聊或自我怀疑的情绪。\n\n卡尔顿大学的研究发现，拖延者经历了更高水平的压力和更低的幸福感，不是因为他们做得更少，而是因为伴随逃避而来的内疚和担忧。有趣的是，拖延行为提供了短期的解脱——通过逃避任务，人们逃避了负面情绪——但这以长期后果为代价。\n\n专家建议解决拖延的情绪根源，而非简单地制定更严格的时间表。诸如'执行意图'（明确说明何时何地完成任务）和自我同情（在挫折后善待自己）等技巧已在实际操作中显示出可衡量的改善效果。"
  },
  {
    type: "阅读理解", typeEn: "Reading Comprehension",
    title: "阅读理解练习（第2篇）",
    instruction: "阅读短文，选择最佳答案",
    passage: `The concept of a "growth mindset," popularized by psychologist Carol Dweck, holds that intelligence and talent are not fixed traits but can be developed through effort and learning. In contrast, a "fixed mindset" leads people to believe their abilities are static, causing them to avoid challenges and give up easily when they encounter obstacles.

Research across schools and workplaces consistently shows that individuals with a growth mindset outperform their peers over time\u2014not because they are naturally more talented, but because they persist through difficulties and learn from mistakes. They view failure not as evidence of incompetence, but as a necessary step in the learning process.

Organizations that cultivate a growth mindset culture report higher levels of innovation and employee engagement. Leaders play a crucial role in this by providing specific, constructive feedback rather than praise focused on outcomes, and by openly discussing their own learning journeys and mistakes.`,
    questions: [
      {q:"1. What distinguishes a growth mindset from a fixed mindset?",options:["A. People with a growth mindset are naturally smarter","B. People with a growth mindset believe abilities can improve with effort","C. Fixed mindset holders work harder","D. Growth mindset is only relevant to schools"],ans:"B",explain:"第一段: 'intelligence and talent...can be developed through effort and learning'",wrongReasons:{A:"文章明确说 intelligence 不是固定的（not fixed traits），growth mindset 的人并非天生聪明",C:"文章说 fixed mindset 的人容易放弃（give up easily），并未说他们更努力",D:"文章提到 growth mindset 适用于 schools AND workplaces，并非仅限学校"}},
      {q:"2. According to the passage, growth mindset individuals perform better because they:",options:["A. Have higher IQs","B. Receive better teaching","C. Persist through challenges and learn from errors","D. Avoid high-pressure situations"],ans:"C",explain:"第二段: 'they persist through difficulties and learn from mistakes'",wrongReasons:{A:"文章明确指出 they outperform...NOT because they are naturally more talented",B:"文章未提及教学质量差异",D:"文章说他们面对困难（they persist through difficulties），而非逃避高压"}},
      {q:"3. How can leaders promote a growth mindset in organizations?",options:["A. By rewarding only successful outcomes","B. By giving specific, constructive feedback and sharing their own learning experiences","C. By hiring only growth mindset individuals","D. By reducing workload pressure"],ans:"B",explain:"第三段: 'providing specific, constructive feedback...and by openly discussing their own learning journeys'",wrongReasons:{A:"文章反对 praise focused on outcomes，提倡 constructive feedback",C:"文章未提只招聘 growth mindset 的人",D:"文章未提减轻工作压力"}}
    ],
    passageCn: "由心理学家卡罗尔·德韦克推广的'成长心态'概念认为，智力和才能并非固定不变的品质，而是可以通过努力和学习来发展的。相比之下，'固定心态'使人相信自己的能力是静态的，导致他们回避挑战，遇到障碍时轻易放弃。\n\n跨学校和职场的研究一致表明，拥有成长心态的人随着时间的推移表现优于同龄人——不是因为他们天生更有才华，而是因为他们坚持不懈地克服困难并从错误中学习。他们将失败视为学习过程中必要的一步，而非无能的证据。\n\n培养成长心态文化的组织报告了更高水平的创新和员工投入度。领导者在此扮演着关键角色，通过提供具体的、建设性的反馈（而非关注结果的表扬），并公开讨论自己的学习历程和错误。"
  },
  // ---- 翻译 ----
  {
    type: "翻译", typeEn: "Translation (C\u2192E)",
    title: "汉译英练习",
    instruction: "将下面的中文段落翻译成英文（参考用时15分钟）",
    source: "\u5FD7\u613F\u670D\u52A1\u662F\u4E00\u79CD\u65E0\u507F\u5E2E\u52A9\u4ED6\u4EBA\u7684\u884C\u4E3A\uFF0C\u5B83\u4E0D\u4EC5\u80FD\u7ED9\u53D7\u52A9\u8005\u5E26\u6765\u5B9E\u9645\u7684\u5E2E\u52A9\uFF0C\u4E5F\u80FD\u8BA9\u5FD7\u613F\u8005\u5728\u670D\u52A1\u8FC7\u7A0B\u4E2D\u83B7\u5F97\u6EE1\u8DB3\u611F\u548C\u6210\u5C31\u611F\u3002\u8FD1\u5E74\u6765\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u5E74\u8F7B\u4EBA\u9009\u62E9\u6295\u8EAB\u5FD7\u613F\u670D\u52A1\uFF0C\u4ED6\u4EEC\u8BA4\u4E3A\u8FD9\u662F\u627F\u62C5\u793E\u4F1A\u8D23\u4EFB\u3001\u63D0\u5347\u4E2A\u4EBA\u80FD\u529B\u7684\u91CD\u8981\u9014\u5F84\u3002\u653F\u5E9C\u548C\u793E\u4F1A\u5404\u754C\u4E5F\u79EF\u6781\u5021\u5BFC\u5FD7\u613F\u7CBE\u795E\uFF0C\u5C06\u5176\u89C6\u4E3A\u6784\u5EFA\u548C\u8C10\u793E\u4F1A\u7684\u91CD\u8981\u529B\u91CF\u3002",
    reference: "Volunteer service refers to the act of helping others without pay. It not only provides practical assistance to recipients, but also allows volunteers to gain a sense of fulfillment and achievement in the process. In recent years, a growing number of young people have chosen to engage in volunteer work, believing it to be an important means of taking on social responsibilities and improving personal competencies. Governments and various sectors of society are also actively advocating the spirit of volunteerism, viewing it as an important force in building a harmonious society.",
    keyPoints: ["\u5FD7\u613F\u670D\u52A1 \u2192 volunteer service","\u65E0\u507F \u2192 without pay / unpaid","\u6EE1\u8DB3\u611F\u548C\u6210\u5C31\u611F \u2192 fulfillment and achievement","\u627F\u62C5\u793E\u4F1A\u8D23\u4EFB \u2192 taking on social responsibilities","\u5021\u5BFC\u5FD7\u613F\u7CBE\u795E \u2192 advocating the spirit of volunteerism","\u548C\u8C10\u793E\u4F1A \u2192 harmonious society"]
  },
  {
    type: "翻译", typeEn: "Translation (C\u2192E)",
    title: "汉译英练习（第2题）",
    instruction: "将下面的中文段落翻译成英文",
    source: "\u4E2D\u56FD\u7684\u4F20\u7EDF\u8282\u65E5\u6E90\u8FDC\u6D41\u957F\uFF0C\u662F\u4E2D\u534E\u6587\u5316\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u3002\u6625\u8282\u662F\u4E2D\u56FD\u6700\u91CD\u8981\u7684\u4F20\u7EDF\u8282\u65E5\uFF0C\u8C61\u5F81\u7740\u65B0\u7684\u5F00\u59CB\u548C\u5BB6\u5EAD\u56E2\u805A\u3002\u5728\u6625\u8282\u671F\u95F4\uFF0C\u4EBA\u4EEC\u901A\u5E38\u4F1A\u8D34\u6625\u8054\u3001\u653E\u70DF\u82B1\u3001\u4E92\u76F8\u62DC\u5E74\uFF0C\u5E76\u4E14\u8D70\u4EB2\u8BBF\u53CB\u3002\u8FD9\u4E9B\u4E60\u4FD7\u4E0D\u4EC5\u4F20\u627F\u4E86\u4E2D\u534E\u6C11\u65CF\u51E0\u5343\u5E74\u7684\u6587\u5316\uFF0C\u4E5F\u589E\u5F3A\u4E86\u4EBA\u4E0E\u4EBA\u4E4B\u95F4\u7684\u611F\u60C5\u8054\u7CFB\u3002",
    reference: "China's traditional festivals have a long history and are an important part of Chinese culture. The Spring Festival is the most important traditional festival in China, symbolizing new beginnings and family reunion. During the Spring Festival, people typically put up Spring Festival couplets, set off fireworks, exchange New Year greetings, and visit relatives and friends. These customs not only carry on thousands of years of Chinese cultural heritage, but also strengthen emotional bonds between people.",
    keyPoints: ["\u6E90\u8FDC\u6D41\u957F \u2192 have a long history","\u8C61\u5F81\u7740 \u2192 symbolizing","\u5BB6\u5EAD\u56E2\u805A \u2192 family reunion","\u8D34\u6625\u8054 \u2192 put up Spring Festival couplets","\u4E92\u76F8\u62DC\u5E74 \u2192 exchange New Year greetings","\u4F20\u627F\u6587\u5316 \u2192 carry on cultural heritage"]
  },
  // ---- 作文 ----
  {
    type: "作文", typeEn: "Writing",
    title: "作文练习",
    instruction: "根据以下提示写一篇120-180词的英文短文",
    prompt: "\u9898\u76EE\uFF1AThe Importance of Reading\n\n\u63D0\u793A\uFF1A\n1. \u9605\u8BFB\u7684\u597D\u5904\uFF08\u77E5\u8BC6\u79EF\u7D2F\u3001\u601D\u7EF4\u62D3\u5C55\u3001\u8BED\u8A00\u63D0\u5347\uFF09\n2. \u5F53\u4ECA\u9605\u8BFB\u4E60\u60EF\u9762\u4E34\u7684\u6311\u6218\uFF08\u624B\u673A\u3001\u77ED\u89C6\u9891\u3001\u5FEB\u8282\u594F\u751F\u6D3B\uFF09\n3. \u4F60\u7684\u5EFA\u8BAE",
    outline: ["Para 1 (\u5F15\u5165): Reading has long been regarded as one of the most valuable habits a person can develop...","Para 2 (\u597D\u5904): First, reading builds knowledge... Second, it broadens our perspective... Third, it improves language proficiency...","Para 3 (\u6311\u6218): However, in today's fast-paced digital age, reading habits face unprecedented challenges...","Para 4 (\u5EFA\u8BAE): To cultivate better reading habits, I suggest setting aside at least 30 minutes daily..."],
    reference: "Reading has long been regarded as one of the most valuable habits a person can develop. In an age flooded with information, the ability to read deeply and critically is more important than ever.\n\nThe benefits of reading are numerous. It builds knowledge, broadens perspective, and sharpens language skills. Unlike passive media consumption, reading engages the mind actively, encouraging reflection and deeper understanding.\n\nHowever, reading habits today face serious challenges. The widespread use of smartphones and the popularity of short videos have fragmented people's attention spans, making sustained reading increasingly difficult. Many people now prefer quick scrolling over sitting with a book.\n\nTo cultivate better reading habits, I suggest starting small: set aside just 15\u201330 minutes each day for focused reading. Choose topics you genuinely enjoy, and gradually increase the difficulty. With consistent effort, reading will become a rewarding daily habit.",
    tips: "\u56DB\u7EA7\u4F5C\u6587\u8BC4\u5206\u5173\u6CE8\uFF1A\u6BB5\u843D\u7ED3\u6784\u6E05\u6670\u3001\u9996\u5C3E\u547C\u5E94\u3001\u8BBA\u636E\u5145\u5206\u3001\u8BCD\u6C47\u591A\u6837\uFF08\u907F\u514D\u91CD\u590D\u7528 good/bad/many\uFF09"
  },
  {
    type: "作文", typeEn: "Writing",
    title: "作文练习（第2题）",
    instruction: "根据以下提示写一篇120-180词的英文短文",
    prompt: "\u9898\u76EE\uFF1AOnline Learning: Advantages and Disadvantages\n\n\u8981\u6C42\uFF1A\n1. \u5206\u6790\u5728\u7EBF\u5B66\u4E60\u7684\u4F18\u7F3A\u70B9\n2. \u7ED3\u5408\u81EA\u8EAB\u7ECF\u5386\u4E3E\u4F8B\n3. \u8868\u660E\u4F60\u7684\u89C2\u70B9",
    outline: ["Para 1: Online learning has transformed education in the 21st century...","Para 2 (\u4F18\u70B9): flexibility of schedule, access to diverse resources, self-paced learning...","Para 3 (\u7F3A\u70B9): lack of face-to-face interaction, self-discipline required, technical barriers...","Para 4 (\u89C2\u70B9): On balance, I believe online learning is a powerful supplement to traditional education..."],
    reference: "Online learning has transformed education in the 21st century, offering millions of learners worldwide new ways to acquire knowledge.\n\nThe advantages are clear. Online learning provides unmatched flexibility: students can study at their own pace and schedule, access world-class courses regardless of location, and revisit materials as many times as needed. Platforms like Coursera and edX have democratized education in ways traditional classrooms cannot.\n\nHowever, challenges exist. Without the structure of a physical classroom, maintaining motivation and self-discipline is difficult. Technical issues and unstable internet connections can disrupt learning. Moreover, the absence of face-to-face interaction may hinder collaborative skills and social development.\n\nOn balance, I believe online learning is a powerful complement to traditional education. When used alongside regular classroom instruction, it can significantly broaden a student's learning opportunities. The key lies in developing strong self-management habits.",
    tips: "\u5E38\u89C1\u5931\u5206\uFF1A\u4ECB\u7ECD\u9636\u6BB5\u592A\u957F\u3001\u6B63\u6587\u8BBA\u636E\u8FC7\u4E8E\u7B3C\u7EDF\u3001\u7ED3\u5C3E\u4EC5\u91CD\u590D\u5F00\u5934\u2014\u2014\u7ED3\u5C3E\u8981\u6709\u65B0\u7684\u601D\u8003\u6216\u547C\u5401"
  }
];

// 题型B: 四级历年真题片段（精选，除听力）
const CET4_PAST_PAPERS = [
  {
    year: "2023\u5E746\u6708", type: "\u9605\u8BFB\u7406\u89E3",
    title: "2023\u5E746\u6708 \u00B7 \u9605\u8BFB\u7406\u89E3\uFF08\u8282\u9009\uFF09",
    passage: "For decades, coffee has been blamed for all kinds of health problems. However, a growing body of research suggests that moderate coffee consumption may actually offer several health benefits. Studies indicate that regular coffee drinkers have a lower risk of developing type 2 diabetes, Parkinson's disease, and certain types of liver disease.\n\nThe key ingredient appears to be chlorogenic acid, an antioxidant found in coffee beans. This compound may help improve insulin sensitivity and reduce inflammation. Caffeine itself\u2014despite its reputation for causing jitteriness and sleep disruption\u2014has been shown to enhance cognitive performance, mood, and athletic endurance when consumed in appropriate amounts.\n\nThat said, health experts caution that the benefits apply to moderate consumption: roughly 3\u20134 cups per day for most adults. Excessive intake can lead to anxiety, heart palpitations, and disrupted sleep. Pregnant women and individuals with certain health conditions are generally advised to limit or avoid coffee entirely.",
    questions: [
      {q:"1. What does recent research suggest about coffee?",options:["A. It causes more harm than previously thought","B. Moderate intake may have health benefits","C. It should be consumed only in the morning","D. It has no effect on chronic diseases"],ans:"B",explain:"'a growing body of research suggests that moderate coffee consumption may actually offer several health benefits'",wrongReasons:{A:"文章说咖啡可能有益而非更有害（may actually offer health benefits）",C:"文章未提只能在早上喝咖啡",D:"文章列举了降低糖尿病、帕金森等慢性病风险，说明有影响"}},
      {q:"2. What is the role of chlorogenic acid?",options:["A. It enhances athletic performance","B. It disrupts sleep patterns","C. It may improve insulin sensitivity and reduce inflammation","D. It increases caffeine absorption"],ans:"C",explain:"'This compound may help improve insulin sensitivity and reduce inflammation'",wrongReasons:{A:"运动表现是咖啡因的作用，不是绿原酸的作用",B:"扰乱睡眠也是咖啡因的副作用，不是绿原酸",D:"文章未提绿原酸影响咖啡因吸收"}},
      {q:"3. Who is advised to limit coffee consumption?",options:["A. Regular office workers","B. Athletes in training","C. Pregnant women and those with certain conditions","D. People over age 60"],ans:"C",explain:"'Pregnant women and individuals with certain health conditions are generally advised to limit or avoid coffee entirely'",wrongReasons:{A:"办公室职员不是建议限制的对象",B:"运动员不是建议限制的对象",D:"文章未特别提及60岁以上人群"}}
    ],
    passageCn: "几十年来，咖啡一直因各种健康问题而备受指责。然而，越来越多的研究表明，适量饮用咖啡可能实际上对健康有若干好处。研究显示，经常喝咖啡的人患2型糖尿病、帕金森病和某些肝脏疾病的风险较低。\n\n关键成分似乎是绿原酸，一种存在于咖啡豆中的抗氧化剂。这种化合物可能有助于改善胰岛素敏感性和减少炎症。咖啡因本身——尽管背负着引起神经紧张和睡眠干扰的名声——已被证明在适量摄入时能提升认知表现、情绪和运动耐力。\n\n话虽如此，健康专家提醒这些益处适用于适量摄入：大多数成年人约每天3-4杯。过量摄入会导致焦虑、心悸和睡眠干扰。孕妇和有特定健康状况的人通常被建议限制或完全避免喝咖啡。"
  },
  {
    year: "2022\u5E7412\u6708", type: "\u6BB5\u843D\u5339\u914D",
    title: "2022\u5E7412\u6708 \u00B7 \u6BB5\u843D\u5339\u914D\uFF08\u8282\u9009\uFF09",
    paragraphs: [
      "\u2460 Scientists have discovered that forests play a far more significant role in the global water cycle than previously understood. Trees draw water from deep underground through their root systems and release it into the atmosphere through a process called transpiration.",
      "\u2461 The link between forests and rainfall is particularly strong in tropical regions. Research in the Amazon basin shows that moisture released by trees forms clouds that travel thousands of kilometers inland, delivering rain to areas far from any ocean source.",
      "\u2462 Deforestation disrupts this cycle in predictable ways. When large areas of forest are cleared, the reduction in transpiration leads to decreased rainfall, increased temperatures, and a higher frequency of droughts in surrounding regions.",
      "\u2463 Restoration projects are beginning to reverse some of these effects. In parts of China and Africa, large-scale tree-planting initiatives have led to measurable improvements in local precipitation patterns within just a few years.",
      "\u2464 Climate scientists argue that protecting existing forests must be treated as a climate priority equivalent to reducing carbon emissions. Forest loss not only releases stored carbon but permanently removes the ecosystem services forests provide."
    ],
    questions: [
      {q:"A. Cutting down forests leads to drier and hotter conditions nearby.", ans:"\u2462"},
      {q:"B. Forests have a greater impact on water distribution than scientists once believed.", ans:"\u2460"},
      {q:"C. Reforestation efforts have produced positive changes in rainfall in some areas.", ans:"\u2463"},
      {q:"D. Tropical forests contribute to rainfall far inland through atmospheric moisture transport.", ans:"\u2461"},
      {q:"E. Preserving forests should be a climate priority comparable to cutting emissions.", ans:"\u2464"}
    ],
    matchClues: [
      "\u2461: Deforestation disrupts this cycle...reduction in transpiration leads to decreased rainfall, increased temperatures... \u2014 \u201Ccutting down forests\u201D \u5BF9\u5E94 \u201Cdeforestation\u201D\uFF0C\u201Cdrier and hotter\u201D \u5BF9\u5E94 \u201Cdecreased rainfall, increased temperatures\u201D",
      "\u2460: forests play a far more significant role in the global water cycle than previously understood \u2014 \u201Cgreater impact\u201D \u5BF9\u5E94 \u201Cfar more significant role\u201D\uFF0C\u201Cwater distribution\u201D \u5BF9\u5E94 \u201Cglobal water cycle\u201D",
      "\u2462: tree-planting initiatives have led to measurable improvements in local precipitation patterns \u2014 \u201Creforestation\u201D \u5BF9\u5E94 \u201Ctree-planting\u201D\uFF0C\u201Cpositive changes in rainfall\u201D \u5BF9\u5E94 \u201Cimprovements in precipitation\u201D",
      "\u2460: moisture released by trees forms clouds that travel thousands of kilometers inland, delivering rain to areas far from any ocean source \u2014 \u201Ctropical forests\u201D \u5BF9\u5E94 \u201Ctropical regions\u201D + \u201CAmazon\u201D\uFF0C\u201Crainfall far inland\u201D \u5BF9\u5E94 \u201Cdelivering rain far inland\u201D",
      "\u2463: protecting existing forests must be treated as a climate priority equivalent to reducing carbon emissions \u2014 \u201Cclimate priority comparable to cutting emissions\u201D \u5BF9\u5E94 \u201Cclimate priority equivalent to reducing carbon emissions\u201D"
    ]
  },
  {
    year: "2023\u5E7412\u6708", type: "\u7FFB\u8BD1",
    title: "2023\u5E7412\u6708 \u00B7 \u7FFB\u8BD1\u771F\u9898",
    instruction: "\u5C06\u4E0B\u9762\u7684\u4E2D\u6587\u6BB5\u843D\u7FFB\u8BD1\u6210\u82F1\u6587",
    source: "\u4E2D\u56FD\u9AD8\u94C1\u662F\u5F53\u4ECA\u4E16\u754C\u4E0A\u6700\u5148\u8FDB\u7684\u94C1\u8DEF\u7CFB\u7EDF\u4E4B\u4E00\u3002\u7ECF\u8FC7\u51E0\u5341\u5E74\u7684\u5EFA\u8BBE\uFF0C\u4E2D\u56FD\u5DF2\u7ECF\u5EFA\u7ACB\u4E86\u4E16\u754C\u4E0A\u6700\u5927\u7684\u9AD8\u94C1\u7F51\u7EDC\uFF0C\u8FDE\u63A5\u4E86\u5168\u56FD\u6570\u767E\u4E2A\u57CE\u5E02\u3002\u9AD8\u94C1\u4E0D\u4EC5\u5927\u5927\u7F29\u77ED\u4E86\u57CE\u5E02\u4E4B\u95F4\u7684\u65C5\u884C\u65F6\u95F4\uFF0C\u8FD8\u4FC3\u8FDB\u4E86\u6CBF\u7EBF\u5730\u533A\u7684\u7ECF\u6D4E\u53D1\u5C55\u3002\u7531\u4E8E\u5176\u5FEB\u901F\u3001\u5B89\u5168\u3001\u8212\u9002\u7684\u7279\u70B9\uFF0C\u9AD8\u94C1\u5DF2\u6210\u4E3A\u8BB8\u591A\u4E2D\u56FD\u4EBA\u51FA\u884C\u7684\u9996\u9009\u4EA4\u901A\u65B9\u5F0F\uFF0C\u5C24\u5176\u662F\u5728\u8282\u5047\u65E5\u51FA\u884C\u9AD8\u5CF0\u671F\u3002",
    reference: "China's high-speed railway is one of the most advanced rail systems in the world today. After decades of construction, China has established the world's largest high-speed rail network, connecting hundreds of cities across the country. High-speed rail has not only greatly reduced travel time between cities, but has also promoted economic development along its routes. Due to its characteristics of speed, safety, and comfort, high-speed rail has become the preferred mode of transportation for many Chinese people, especially during peak travel periods such as holidays.",
    keyPoints: ["\u6700\u5148\u8FDB\u7684 \u2192 most advanced","\u9AD8\u94C1\u7F51\u7EDC \u2192 high-speed rail network","\u4FC3\u8FDB\u7ECF\u6D4E\u53D1\u5C55 \u2192 promote economic development","\u9996\u9009\u4EA4\u901A\u65B9\u5F0F \u2192 preferred mode of transportation","\u8282\u5047\u65E5\u51FA\u884C\u9AD8\u5CF0\u671F \u2192 peak travel periods such as holidays"]
  },
  {
    year: "2022\u5E746\u6708", type: "\u9605\u8BFB\u7406\u89E3",
    title: "2022\u5E746\u6708 \u00B7 \u9605\u8BFB\u7406\u89E3\uFF08\u8282\u9009\uFF09",
    passage: "The concept of \"digital minimalism,\" advanced by author Cal Newport, proposes that individuals should be more intentional about which digital tools they use and how they use them. Rather than adopting every new technology by default, digital minimalists carefully select tools that serve their values and goals\u2014and consciously eliminate the rest.\n\nNewport argues that the compulsive use of smartphones and social media has eroded people's capacity for solitude and deep work. Constant connectivity, he says, fragments attention and prevents the kind of sustained focus necessary for meaningful achievement. The solution, he contends, is not to abandon technology entirely, but to redefine one's relationship with it.\n\nA key practice in digital minimalism is a \"digital declutter\": a 30-day break from optional digital technologies, followed by a careful reintroduction of only those tools that provide genuine value. Proponents report that this reset allows them to rediscover offline activities\u2014reading, exercise, face-to-face conversation\u2014that provide deeper satisfaction than passive screen time.",
    questions: [
      {q:"1. What does 'digital minimalism' advocate?",options:["A. Abandoning all digital tools","B. Using only the newest technology","C. Deliberately choosing only tools that align with personal values","D. Reducing time online to one hour per day"],ans:"C",explain:"'carefully select tools that serve their values and goals\u2014and consciously eliminate the rest'",wrongReasons:{A:"文章明确说不是完全放弃技术（the solution is not to abandon technology entirely）",B:"文章反对盲目采用新技术（Rather than adopting every new technology by default）",D:"文章未提具体限制到每天一小时"}},
      {q:"2. According to Newport, what is the main problem with constant connectivity?",options:["A. It makes people physically inactive","B. It fragments attention and prevents deep focus","C. It leads to financial overspending","D. It causes social isolation"],ans:"B",explain:"'fragments attention and prevents the kind of sustained focus necessary for meaningful achievement'",wrongReasons:{A:"文章未提及身体活动减少",C:"文章未提及财务过度支出",D:"文章未提及社交孤立"}},
      {q:"3. What does a 'digital declutter' involve?",options:["A. Deleting all apps permanently","B. A temporary break from optional technology followed by selective reintroduction","C. Switching to a basic phone","D. Using only productivity tools"],ans:"B",explain:"'a 30-day break from optional digital technologies, followed by a careful reintroduction of only those tools that provide genuine value'",wrongReasons:{A:"不是永久删除（permanently），而是30天暂时休息（30-day break）",C:"文章未提换基础手机",D:"不是只使用生产力工具，而是只保留真正有价值的工具"}}
    ],
    passageCn: "由作家卡尔·纽波特提出的'数字极简主义'概念主张人们应当更有意识地选择使用哪些数字工具以及如何使用它们。数字极简主义者不会默认接受每一项新技术，而是精心选择那些服务于自己价值观和目标——并有意识地排除其余的工具。\n\n纽波特认为，对智能手机和社交媒体的强迫性使用侵蚀了人们独处和深度工作的能力。持续的连接会碎片化注意力，阻碍实现有意义的成就所必需的那种持续专注。他主张，解决方案不是完全放弃技术，而是重新定义自己与技术的关系。\n\n数字极简主义中的一个关键实践是'数字清理'：对可选数字技术进行为期30天的休息，然后只重新引入那些提供真正价值的工具。支持者报告称，这种重置使他们重新发现了离线活动——阅读、锻炼、面对面交谈——这些活动比被动的屏幕时间带来更深的满足感。"
  },
  {
    year: "2021\u5E7412\u6708", type: "\u4F5C\u6587",
    title: "2021\u5E7412\u6708 \u00B7 \u4F5C\u6587\u771F\u9898",
    prompt: "\u9898\u76EE\uFF1ALimiting Screen Time for Children\n\n\u8981\u6C42\uFF1A\n1. \u9650\u5236\u5C4F\u5E55\u65F6\u95F4\u7684\u5FC5\u8981\u6027\n2. \u5982\u4F55\u6709\u6548\u9650\u5236\n3. \u4F60\u7684\u770B\u6CD5",
    reference: "Limiting Screen Time for Children\n\nIn today's digital age, children are spending more time than ever in front of screens. While technology offers educational resources and entertainment, excessive screen time poses serious risks to children's physical and mental health, including eye strain, sleep disorders, and reduced physical activity.\n\nLimiting screen time is therefore essential. Parents can set clear daily limits\u2014no more than two hours for school-age children\u2014and model healthy digital habits themselves. Schools can promote outdoor activities, reading, and face-to-face social interaction as alternatives to screen-based entertainment.\n\nIn my view, the goal is not to eliminate screens entirely, but to ensure that children develop a balanced relationship with technology. Children who learn to regulate their screen use early are better equipped to navigate the digital world responsibly as adults.",
    tips: "\u8BC4\u5206\u4EAE\u70B9\uFF1A\u7B2C\u4E00\u6BB5\u4EA4\u4EE3\u80CC\u666F\u548C\u95EE\u9898\uFF0C\u7B2C\u4E8C\u6BB5\u63D0\u51FA\u5177\u4F53\u63AA\u65BD\uFF08set limits / model habits\uFF09\uFF0C\u7B2C\u4E09\u6BB5\u8868\u660E\u4E2A\u4EBA\u89C2\u70B9\u5E76\u5347\u534E\u3002\u6CE8\u610F\u7528 'in my view' \u800C\u975E 'I think' \u66F4\u663E\u4E66\u9762\u8BED\u6C34\u5E73\u3002"
  },
  {
    year: "2023\u5E746\u6708", type: "\u9009\u8BCD\u586B\u7A7A",
    title: "2023\u5E746\u6708 \u00B7 \u9009\u8BCD\u586B\u7A7A\uFF08\u8282\u9009\uFF09",
    instruction: "\u4ECE\u4E0B\u65B9\u8BCD\u5E93\u4E2D\u9009\u62E9\u5408\u9002\u7684\u5355\u8BCD\u586B\u5165\u7A7A\u683C",
    words: ["anticipate","broaden","demonstrate","effective","essential","generate","global","inevitable","reflect","sustain"],
    text: "Environmental sustainability has become an __(1)__ topic for __(2)__ policymakers. Experts argue that it is __(3)__ that current consumption patterns will lead to resource depletion if left unchecked. Governments must __(4)__ innovative solutions to __(5)__ clean energy production. Education plays an equally important role\u2014schools that __(6)__ students' understanding of ecological systems help __(7)__ long-term environmental awareness. Effective policies must __(8)__ on the real needs of communities. Research has also shown that community-based programs are highly __(9)__ in encouraging green behavior. Leaders who __(10)__ commitment through action, rather than words alone, earn greater public trust.",
    answers: {1:"essential",2:"global",3:"inevitable",4:"generate",5:"sustain",6:"broaden",7:"reflect",8:"anticipate",9:"effective",10:"demonstrate"},
    analysis: "\u6CE8\u610F\uFF1Agenerate solutions\uFF08\u4EA7\u751F\u89E3\u51B3\u65B9\u6848\uFF09\u3001sustain production\uFF08\u7EF4\u6301\u751F\u4EA7\uFF09\u3001broaden understanding\uFF08\u62D3\u5C55\u7406\u89E3\uFF09\u5747\u4E3A\u56DB\u7EA7\u9AD8\u9891\u642D\u914D",
    wordReasons: {1:"essential topic（必不可少的话题），形容词修饰名词 topic",2:"global policymakers（全球决策者），形容词修饰名词",3:"it is inevitable that...（...是不可避免的），it is + adj. + that 从句",4:"generate solutions（产生解决方案），governments must \u2192 原形动词",5:"sustain production（维持生产），to \u2192 不定式接原形",6:"broaden understanding（拓宽理解），schools that...复数主语 \u2192 原形",7:"reflect awareness（反映意识），help do 结构，接原形动词",8:"anticipate needs（预期需求），must \u2192 情态动词后接原形",9:"effective in encouraging（在鼓励方面有效），be + adj. + in doing 结构",10:"demonstrate commitment（展示承诺），leaders who...复数 \u2192 原形"},
    passageCn: "环境可持续性已成为全球决策者必不可少的话题。专家认为，如果放任不管，当前的消费模式将不可避免地导致资源枯竭。政府必须提出创新解决方案来维持清洁能源生产。教育同样扮演着重要角色——那些拓宽学生对生态系统理解的学校有助于培养长期的环境意识。有效的政策必须体现对社区真实需求的关注。研究还表明，以社区为基础的计划在鼓励环保行为方面非常有效。通过行动而非空谈来展现承诺的领导者赢得更多公众信任。"
  }
];

// 根据日期获取当天练习题
function getDailyPractice(d) {
  const idx = dayIndex(d);
  return DAILY_PRACTICE_POOL[idx % DAILY_PRACTICE_POOL.length];
}
function getDailyPastPaper(d) {
  const idx = dayIndex(d);
  return CET4_PAST_PAPERS[(idx + 2) % CET4_PAST_PAPERS.length];
}

// 当前展示的题目数据（供提交时使用）
let _currentPractice = null;
let _currentPastPaper = null;

// ============================================================
// 渲染每日练习题（带交互式输入框 + 提交按钮）
// ============================================================
function renderDailyQuiz() {
  const container = document.getElementById('dailyQuizContainer');
  if (!container) return;
  const d = currentDate;
  _currentPractice = getDailyPractice(d);
  _currentPastPaper = getDailyPastPaper(d);

  let html = '';

  // === 练习题A ===
  html += buildQuizCard(_currentPractice, 'A',
    '\uD83C\uDFAF\u6BCF\u65E5\u4E00\u7EC3 A \u00B7 ' + _currentPractice.type,
    'linear-gradient(135deg,#ec407a,#f06292)');

  // === 练习题B: 真题 ===
  html += buildQuizCard(_currentPastPaper, 'B',
    '\uD83D\uDCCB\u6BCF\u65E5\u4E00\u7EC3 B \u00B7 ' + _currentPastPaper.year + ' \u00B7 ' + _currentPastPaper.type,
    '#3949ab');

  container.innerHTML = html;
}

function buildQuizCard(data, part, title, badgeColor) {
  let html = '<div class="card" style="margin-bottom:16px;">';
  html += '<div class="section-title"><span class="icon">' + (part === 'A' ? '\uD83C\uDFAF' : '\uD83D\uDCCB') + '</span>' + title;
  html += '<span class="badge" style="background:' + badgeColor + ';color:white;font-size:11px;">' + formatDate(currentDate) + '</span></div>';

  if (data.type === '\u9009\u8BCD\u586B\u7A7A') {
    html += buildClozeHTML(data, part);
  } else if (data.type === '\u6BB5\u843D\u5339\u914D') {
    html += buildMatchingHTML(data, part);
  } else if (data.type === '\u9605\u8BFB\u7406\u89E3') {
    html += buildReadingHTML(data, part);
  } else if (data.type === '\u7FFB\u8BD1') {
    html += buildTranslationHTML(data, part);
  } else if (data.type === '\u4F5C\u6587') {
    html += buildWritingHTML(data, part);
  }

  html += '</div>';
  return html;
}

// ---------- 选词填空 ----------
function buildClozeHTML(data, part) {
  const pid = 'quiz' + part;
  let html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  // 词库
  html += '<div style="background:var(--pink-50);border-radius:10px;padding:12px;margin-bottom:12px;">';
  html += '<div style="font-size:12px;color:var(--pink-600);font-weight:700;margin-bottom:8px;">\uD83D\uDCE6 \u8BCD\u5E93\uFF08\u6BCF\u8BCD\u53EA\u7528\u4E00\u6B21\uFF09</div>';
  html += '<div style="display:flex;flex-wrap:wrap;gap:6px;">';
  data.words.forEach(function(w) {
    html += '<span style="background:white;border:1px solid var(--pink-200);border-radius:6px;padding:3px 10px;font-size:13px;font-weight:600;">' + w + '</span>';
  });
  html += '</div></div>';

  // 文本填空
  html += '<div style="font-size:14px;line-height:2.4;color:var(--text);">';
  var textParts = data.text.split(/__\((\d+)\)__/);
  for (var i = 0; i < textParts.length; i++) {
    if (i % 2 === 0) {
      html += textParts[i];
    } else {
      var num = textParts[i];
      var opts = '<option value="">\u2014\u2014</option>';
      data.words.forEach(function(w) { opts += '<option value="' + w + '">' + w + '</option>'; });
      html += '<select id="' + pid + '_b' + num + '" style="border:2px solid var(--pink-300);border-radius:6px;padding:2px 8px;font-size:13px;background:white;min-width:110px;">' + opts + '</select>';
    }
  }
  html += '</div>';

  // 提交按钮
  html += '<button onclick="submitQuiz(\'' + part + '\')" style="margin-top:16px;background:linear-gradient(135deg,#ec407a,#f06292);color:white;border:none;border-radius:20px;padding:10px 24px;font-size:14px;font-weight:600;cursor:pointer;">\u2705 \u63D0\u4EA4\u7B54\u6848</button>';

  // 结果区（初始隐藏）
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;padding:16px;background:var(--pink-50);border-radius:12px;"></div>';
  return html;
}

// ---------- 段落匹配 ----------
function buildMatchingHTML(data, part) {
  const pid = 'quiz' + part;
  let html = '';
  // 段落
  data.paragraphs.forEach(function(p) {
    html += '<div style="font-size:13px;line-height:1.8;color:var(--text);margin-bottom:10px;padding:8px 12px;background:var(--pink-50);border-radius:8px;">' + p + '</div>';
  });
  // 匹配题
  html += '<div style="margin-top:12px;">';
  var opts = '<option value="">\u2014\u2014</option>';
  for (var k = 1; k <= 5; k++) {
    var circle = String.fromCharCode(0x245F + k); // ①=2460
    opts += '<option value="' + circle + '">' + circle + '</option>';
  }
  data.questions.forEach(function(q, i) {
    html += '<div style="font-size:13px;color:var(--text);margin-bottom:10px;padding:8px 0;border-bottom:1px solid var(--pink-100);display:flex;align-items:center;gap:8px;">';
    html += '<span style="min-width:200px;">' + q.q + '</span>';
    html += '<select id="' + pid + '_q' + i + '" style="border:2px solid var(--pink-300);border-radius:6px;padding:3px 8px;font-size:13px;">' + opts + '</select>';
    html += '</div>';
  });
  html += '</div>';

  html += '<button onclick="submitQuiz(\'' + part + '\')" style="margin-top:12px;background:linear-gradient(135deg,#ec407a,#f06292);color:white;border:none;border-radius:20px;padding:10px 24px;font-size:14px;font-weight:600;cursor:pointer;">\u2705 \u63D0\u4EA4\u7B54\u6848</button>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;padding:16px;background:var(--pink-50);border-radius:12px;"></div>';
  return html;
}

// ---------- 阅读理解 ----------
function buildReadingHTML(data, part) {
  const pid = 'quiz' + part;
  let html = '<div style="font-size:13px;line-height:1.9;color:var(--text);background:var(--pink-50);border-radius:10px;padding:12px;margin-bottom:12px;">' + data.passage.replace(/\\n\\n/g,'<br><br>') + '</div>';

  data.questions.forEach(function(q, qi) {
    html += '<div style="margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid #f0f0f0;">';
    html += '<div style="font-size:13px;font-weight:700;color:var(--text);margin-bottom:8px;">' + q.q + '</div>';
    q.options.forEach(function(opt) {
      var val = opt.charAt(0);
      html += '<label style="display:block;font-size:13px;color:var(--text-light);padding:4px 0;cursor:pointer;">';
      html += '<input type="radio" name="' + pid + '_q' + qi + '" value="' + val + '" style="margin-right:6px;">' + opt + '</label>';
    });
    html += '</div>';
  });

  html += '<button onclick="submitQuiz(\'' + part + '\')" style="margin-top:8px;background:linear-gradient(135deg,#ec407a,#f06292);color:white;border:none;border-radius:20px;padding:10px 24px;font-size:14px;font-weight:600;cursor:pointer;">\u2705 \u63D0\u4EA4\u7B54\u6848</button>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;padding:16px;background:var(--pink-50);border-radius:12px;"></div>';
  return html;
}

// ---------- 翻译 ----------
function buildTranslationHTML(data, part) {
  const pid = 'quiz' + part;
  let html = '<div style="font-size:12px;color:var(--text-light);margin-bottom:8px;">' + (data.instruction || '') + '</div>';
  html += '<div style="background:var(--pink-50);border-radius:10px;padding:14px;margin-bottom:12px;font-size:14px;line-height:1.9;color:var(--text);">' + data.source + '</div>';
  html += '<div style="font-size:12px;color:var(--text-light);margin-bottom:12px;">\uD83D\uDCA1 \u5173\u952E\u8BCD\u63D0\u793A\uFF1A' + (data.keyPoints || []).join('\u3000|\u3000') + '</div>';
  html += '<textarea id="' + pid + '_trans" placeholder="\u8BF7\u5728\u6B64\u8F93\u5165\u4F60\u7684\u7FFB\u8BD1..." style="width:100%;height:120px;border:2px solid var(--pink-200);border-radius:10px;padding:12px;font-size:14px;resize:vertical;font-family:inherit;"></textarea>';
  html += '<div style="margin-top:8px;"><button onclick="submitQuiz(\'' + part + '\')" style="background:linear-gradient(135deg,#ec407a,#f06292);color:white;border:none;border-radius:20px;padding:10px 24px;font-size:14px;font-weight:600;cursor:pointer;">\u2705 \u63D0\u4EA4\u5E76\u67E5\u770B\u53C2\u8003\u8BD1\u6587</button></div>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;padding:16px;background:var(--pink-50);border-radius:12px;"></div>';
  return html;
}

// ---------- 作文 ----------
function buildWritingHTML(data, part) {
  const pid = 'quiz' + part;
  let html = '<div style="background:var(--pink-50);border-radius:10px;padding:14px;margin-bottom:12px;font-size:14px;line-height:1.9;white-space:pre-line;">' + data.prompt + '</div>';
  if (data.outline) {
    html += '<div style="font-size:13px;color:var(--pink-600);margin-bottom:8px;">\uD83D\uDCA1 \u53C2\u8003\u63D0\u7EB2\uFF1A</div>';
    data.outline.forEach(function(p) {
      html += '<div style="font-size:12px;color:var(--text-light);padding:3px 0;padding-left:10px;border-left:3px solid var(--pink-200);">' + p + '</div>';
    });
  }
  html += '<textarea id="' + pid + '_essay" placeholder="\u8BF7\u5728\u6B64\u8F93\u5165\u4F60\u7684\u4F5C\u6587..." style="width:100%;height:150px;border:2px solid var(--pink-200);border-radius:10px;padding:12px;font-size:14px;resize:vertical;font-family:inherit;margin-top:8px;"></textarea>';
  html += '<div style="margin-top:8px;"><button onclick="submitQuiz(\'' + part + '\')" style="background:linear-gradient(135deg,#ec407a,#f06292);color:white;border:none;border-radius:20px;padding:10px 24px;font-size:14px;font-weight:600;cursor:pointer;">\u2705 \u63D0\u4EA4\u5E76\u67E5\u770B\u8303\u6587</button></div>';
  html += '<div id="' + pid + 'Result" style="display:none;margin-top:16px;padding:16px;background:var(--pink-50);border-radius:12px;"></div>';
  return html;
}

// ============================================================
// 提交答案：评分 + 显示正确答案 + 解析
// ============================================================
function submitQuiz(part) {
  var data = part === 'A' ? _currentPractice : _currentPastPaper;
  var pid = 'quiz' + part;
  var resultEl = document.getElementById(pid + 'Result');
  if (!resultEl) return;

  var html = '';
  var totalScore = 0;
  var maxScore = 0;

  if (data.type === '\u9009\u8BCD\u586B\u7A7A') {
    var ans = data.answers;
    var correct = 0;
    var total = 0;
    var detail = '';
    Object.keys(ans).sort(function(a,b){return +a-+b}).forEach(function(k) {
      total++;
      var sel = document.getElementById(pid + '_b' + k);
      var userAns = sel ? sel.value : '';
      var rightAns = ans[k];
      var wordExample = '';
      try {
        var wp = WORD_POOL.find(function(w){ return w.w.toLowerCase() === rightAns.toLowerCase(); });
        if (wp && wp.ex) {
          wordExample = '<div style="font-size:12px;color:#555;margin-top:4px;padding:6px 8px;background:#f9f9f9;border-radius:4px;line-height:1.5;">\uD83D\uDCD6 ' + wp.ex + (wp.excn ? '<br><span style="color:#888;">\u2B50 ' + wp.excn + '</span>' : '') + '</div>';
        }
      } catch(e) {}
      if (userAns.toLowerCase() === rightAns.toLowerCase()) {
        correct++;
        detail += '<div style="font-size:13px;color:#2e7d32;margin-bottom:3px;">\u2705 (' + k + ') <strong>' + rightAns + '</strong>' + wordExample + '</div>';
      } else {
        var reason = (data.wordReasons && data.wordReasons[k]) ? data.wordReasons[k] : '';
        detail += '<div style="font-size:13px;color:#c62828;margin-bottom:6px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C (' + k + ') \u4F60\u7684\u7B54\u6848\uFF1A<em>' + (userAns || '\u672A\u586B') + '</em> \u2192 \u6B63\u786E\u7B54\u6848\uFF1A<strong>' + rightAns + '</strong>' + (reason ? '<br><span style="font-size:11px;color:#b71c1c;">\uD83D\uDCD6 ' + reason + '</span>' : '') + wordExample + '</div>';
      }
    });
    totalScore = correct;
    maxScore = total;
    html += '<div style="font-size:16px;font-weight:700;color:var(--pink-600);margin-bottom:12px;">\uD83C\uDF1F \u5F97\u5206\uFF1A' + correct + ' / ' + total + ' ( ' + Math.round(correct/total*100) + '% )</div>';
    html += detail;
    if (data.analysis) html += '<div style="margin-top:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:var(--text-light);line-height:1.8;">\uD83D\uDCD6 \u89E3\u6790\uFF1A' + data.analysis + '</div>';
    // 完整原文（含答案）
    if (data.text) {
      var filledText = data.text;
      Object.keys(data.answers).sort(function(a,b){return +a-+b}).forEach(function(k){
        filledText = filledText.split('__('+k+')__').join('<strong style="color:var(--pink-600);border-bottom:2px solid var(--pink-300)">' + data.answers[k] + '</strong>');
      });
      html += '<div style="margin-top:14px;padding:16px;background:linear-gradient(135deg,#fdf2f7,#fff);border-radius:12px;border:1px solid var(--pink-100);line-height:2.2;font-size:14px;"><div style="font-weight:700;color:var(--pink-600);margin-bottom:10px;font-size:15px;">\uD83D\uDCDD \u53C2\u8003\u7B54\u6848\uFF08\u5B8C\u6574\u539F\u6587\uFF09</div>' + filledText + '</div>';
      if (data.passageCn) {
        html += '<div style="margin-top:8px;padding:16px;background:#f8f9fa;border-radius:12px;border:1px solid #e0e0e0;line-height:2.2;font-size:14px;color:#555;"><div style="font-weight:700;color:#546e7a;margin-bottom:10px;font-size:15px;">\uD83C\uDF10 \u53C2\u8003\u8BD1\u6587</div>' + data.passageCn + '</div>';
      }
    }

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
        detail += '<div style="font-size:13px;color:#c62828;margin-bottom:6px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C ' + q.q + ' \u4F60\u7684\u7B54\u6848\uFF1A<em>' + (userAns || '\u672A\u9009') + '</em> \u2192 \u6B63\u786E\uFF1A<strong>' + q.ans + '</strong>' + (clue ? '<br><span style="font-size:11px;color:#b71c1c;">\uD83D\uDD0D \u5339\u914D\u4F9D\u636E\uFF1A' + clue + '</span>' : '') + '</div>';
      }
    });
    totalScore = correct * 2;
    maxScore = total * 2;
    html += '<div style="font-size:16px;font-weight:700;color:var(--pink-600);margin-bottom:12px;">\uD83C\uDF1F \u5F97\u5206\uFF1A' + (correct*2) + ' / ' + (total*2) + ' ( ' + Math.round(correct/total*100) + '% )</div>';
    html += detail;

  } else if (data.type === '\u9605\u8BFB\u7406\u89E3') {
    var correct = 0;
    var total = data.questions.length;
    var detail = '';
    data.questions.forEach(function(q, i) {
      var radioName = pid + '_q' + i;
      var radios = document.getElementsByName(radioName);
      var userAns = '';
      for (var r = 0; r < radios.length; r++) {
        if (radios[r].checked) { userAns = radios[r].value; break; }
      }
      if (userAns === q.ans) {
        correct++;
        detail += '<div style="font-size:13px;color:#2e7d32;margin-bottom:8px;padding:6px 10px;background:#f1f8e9;border-radius:6px;border-left:3px solid #c8e6c9;">\u2705 ' + q.q + ' <strong>' + q.ans + '</strong><br><span style="font-size:11px;color:#33691e;">\uD83D\uDCD6 ' + q.explain + '</span></div>';
      } else {
        var wrongInfo = (q.wrongReasons && q.wrongReasons[userAns]) ? '<br><span style="font-size:11px;color:#b71c1c;">\u274C \u4E3A\u4EC0\u4E48\u4F60\u7684\u7B54\u6848\u4E0D\u5BF9\uFF1A' + q.wrongReasons[userAns] + '</span>' : '';
        detail += '<div style="font-size:13px;color:#c62828;margin-bottom:8px;padding:6px 10px;background:#fff5f5;border-radius:6px;border-left:3px solid #ffcdd2;">\u274C ' + q.q + ' \u4F60\u7684\u7B54\u6848\uFF1A<em>' + (userAns || '\u672A\u9009') + '</em> \u2192 \u6B63\u786E\uFF1A<strong>' + q.ans + '</strong><br><span style="font-size:11px;color:#888;">\uD83D\uDCD6 ' + q.explain + '</span>' + wrongInfo + '</div>';
      }
    });
    var perQ = Math.round(10 / total);
    totalScore = correct * perQ;
    maxScore = total * perQ;
    html += '<div style="font-size:16px;font-weight:700;color:var(--pink-600);margin-bottom:12px;">\uD83C\uDF1F \u5F97\u5206\uFF1A' + (correct*perQ) + ' / ' + (total*perQ) + ' ( ' + Math.round(correct/total*100) + '% )</div>';
    html += detail;
    if (data.passageCn) {
      html += '<div style="margin-top:14px;padding:16px;background:#f8f9fa;border-radius:12px;border:1px solid #e0e0e0;line-height:2.2;font-size:14px;color:#555;"><div style="font-weight:700;color:#546e7a;margin-bottom:10px;font-size:15px;">\uD83C\uDF10 \u77ED\u6587\u7FFB\u8BD1</div>' + data.passageCn.replace(/\\n/g,'<br>') + '</div>';
    }

  } else if (data.type === '\u7FFB\u8BD1') {
    var userTrans = document.getElementById(pid + '_trans');
    html += '<div style="font-size:16px;font-weight:700;color:var(--pink-600);margin-bottom:12px;">\u2705 \u5DF2\u63D0\u4EA4\uFF0C\u53C2\u8003\u8BD1\u6587\u5982\u4E0B</div>';
    if (userTrans && userTrans.value.trim()) {
      html += '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:#888;">\uD83D\uDCDD \u4F60\u7684\u7FFB\u8BD1\uFF1A<br>' + userTrans.value.replace(/\\n/g,'<br>') + '</div>';
      // 关键词检查
      if (data.keyPoints && data.keyPoints.length) {
        var kpHtml = '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;">';
        kpHtml += '<div style="font-weight:700;color:var(--pink-600);margin-bottom:6px;">\uD83D\uDD0D \u5173\u952E\u8BCD\u68C0\u67E5\uFF1A</div>';
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
    } else {
      html += '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:#999;font-style:italic;">\u4F60\u8FD8\u6CA1\u6709\u8F93\u5165\u7FFB\u8BD1\u54E6~\uFF08\u53EF\u4EE5\u5148\u5199\u518D\u63D0\u4EA4\uFF09</div>';
    }
    html += '<div style="font-size:13px;line-height:1.9;padding:10px;background:white;border-radius:8px;">' + data.reference + '</div>';

  } else if (data.type === '\u4F5C\u6587') {
    var userEssay = document.getElementById(pid + '_essay');
    html += '<div style="font-size:16px;font-weight:700;color:var(--pink-600);margin-bottom:12px;">\u2705 \u5DF2\u63D0\u4EA4\uFF0C\u53C2\u8003\u8303\u6587\u5982\u4E0B</div>';
    if (userEssay && userEssay.value.trim()) {
      html += '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;color:#888;">\uD83D\uDCDD \u4F60\u7684\u4F5C\u6587\uFF1A<br>' + userEssay.value.replace(/\\n/g,'<br>') + '</div>';
      // 结构分析
      var essay = userEssay.value;
      var wordCount = essay.split(/\\s+/).filter(function(w){return w.length>0;}).length;
      var lines = essay.split(/\\n+/).filter(function(l){return l.trim().length>0;});
      var paraCount = lines.length;
      if (paraCount < 2) { paraCount = essay.split(/\\n\\s*\\n/).length; }
      var transWords = ['first','second','third','finally','moreover','however','therefore','in conclusion','to sum up','on the one hand','on the other hand','furthermore','nevertheless','in addition','consequently'];
      var foundTrans = [];
      var lowerE = essay.toLowerCase();
      transWords.forEach(function(tw){ if (lowerE.indexOf(tw) >= 0) foundTrans.push(tw); });
      var analysisHtml = '<div style="margin-bottom:10px;padding:10px;background:white;border-radius:8px;font-size:12px;">';
      analysisHtml += '<div style="font-weight:700;color:var(--pink-600);margin-bottom:6px;">\uD83D\uDCCA \u5199\u4F5C\u5206\u6790\u5361\uFF1A</div>';
      analysisHtml += '<div style="margin-bottom:3px;">\uD83D\uDCCF \u5B57\u6570\u4F30\u7B97\uFF1A<strong>' + wordCount + ' \u8BCD</strong> ' + (wordCount >= 120 ? (wordCount <= 180 ? '\u2705 \u7B26\u5408\u56DB\u7EA7\u8981\u6C42' : '\u26A0\uFE0F \u7565\u8D85\u8981\u6C42') : '\u26A0\uFE0F \u504F\u77ED\uFF0C\u5EFA\u8BAE120-180\u8BCD') + '</div>';
      analysisHtml += '<div style="margin-bottom:3px;">\uD83D\uDCC4 \u6BB5\u843D\u6570\uFF1A<strong>' + paraCount + ' \u6BB5</strong> ' + (paraCount >= 3 ? '\u2705 \u7ED3\u6784\u5408\u7406' : '\u26A0\uFE0F \u5EFA\u8BAE3-4\u6BB5\uFF08\u5F15\u8A00-\u6B63\u6587-\u7ED3\u8BBA\uFF09') + '</div>';
      analysisHtml += '<div style="margin-bottom:3px;">\uD83D\uDD17 \u8FC7\u6E21\u8BCD\u68C0\u6D4B\uFF1A' + (foundTrans.length > 0 ? '<span style="color:#2e7d32;">\u2705 \u53D1\u73B0 ' + foundTrans.length + ' \u4E2A\uFF1A' + foundTrans.join(', ') + '</span>' : '<span style="color:#ef6c00;">\u274C \u672A\u68C0\u6D4B\u5230\u8FC7\u6E21\u8BCD\uFF0C\u5EFA\u8BAE\u6DFB\u52A0 First/Second/However/Therefore/In conclusion</span>') + '</div>';
      analysisHtml += '</div>';
      html += analysisHtml;
    }
    html += '<div style="font-size:13px;line-height:1.9;padding:10px;background:white;border-radius:8px;white-space:pre-line;">' + data.reference + '</div>';
    if (data.tips) html += '<div style="margin-top:10px;padding:8px;background:white;border-radius:6px;font-size:12px;color:var(--text-light);">\uD83D\uDCDD ' + data.tips + '</div>';
  }

  resultEl.innerHTML = html;
  resultEl.style.display = 'block';
  // 滚动到结果区
  resultEl.scrollIntoView({behavior:'smooth',block:'center'});
  // 记录答题状态，更新统计栏进度
  markQuizDone(part);
}

// ============================================================
// 统计 Tab：每日题型实时更新
// ============================================================
function updateDailyStats() {
  var d = currentDate;
  var idx = dayIndex(d);
  if (idx === 0) return; // day 0 不改统计
  var practice = getDailyPractice(d);
  var pastPaper = getDailyPastPaper(d);
  var tipEl = document.getElementById('todayTypeTip');
  if (tipEl) {
    var stars = {'\u9009\u8BCD\u586B\u7A7A':'\u2B50\u2B50\u2B50\u2606\u2606','\u6BB5\u843D\u5339\u914D':'\u2B50\u2B50\u2B50\u2B50\u2606','\u9605\u8BFB\u7406\u89E3':'\u2B50\u2B50\u2B50\u2B50\u2B50','\u7FFB\u8BD1':'\u2B50\u2B50\u2B50\u2B50\u2606','\u4F5C\u6587':'\u2B50\u2B50\u2B50\u2B50\u2B50'};
    tipEl.innerHTML = '\uD83D\uDCCC \u4ECA\u65E5\u9898\u578B\uFF1A<strong>' + practice.type + '\uFF08' + practice.typeEn + '\uFF09' + (stars[practice.type]||'\u2B50\u2B50\u2B50') + '</strong> &nbsp;&nbsp;+&nbsp;&nbsp;\u771F\u9898\uFF1A<strong>' + pastPaper.year + ' \u00B7 ' + pastPaper.type + '</strong><br>\uD83D\uDCCC \u91CD\u70B9\u7A81\u7834\uFF1A<strong>' + getTodayFocus(practice.type) + '</strong><br>\uD83D\uDCCC \u5B66\u4E60\u987A\u5E8F\uFF1A\u5148\u6D4F\u89C8\u8BCD\u6C47\u8868 \u2192 \u6BCF\u65E5\u4E00\u7EC3 \u2192 \u6838\u5BF9\u89E3\u6790 \u2192 \u91CD\u70B9\u8BB0\u5FC6\u9519\u9898\u8BCD\u6C47<br>\uD83D\uDCCC \u5C0F\u6280\u5DE7\uFF1A\u628A\u9519\u9898\u4E2D\u7684\u751F\u8BCD\u6807\u8BB0\u4E0B\u6765\uFF0C\u7761\u524D\u518D\u590D\u4E60\u4E00\u904D\u6548\u679C\u6700\u597D\uFF01';
  }
}

function getTodayFocus(type) {
  var map = {
    '\u9009\u8BCD\u586B\u7A7A': '\u8BCD\u4E49\u8FA8\u6790 + \u642D\u914D\u8BB0\u5FC6\uFF08\u56FA\u5B9A\u8BCD\u7EC4\u4F18\u5148\uFF09',
    '\u6BB5\u843D\u5339\u914D': '\u4E3B\u65E8\u53E5\u8BC6\u522B + \u5173\u952E\u8BCD\u5B9A\u4F4D\u6280\u5DE7',
    '\u9605\u8BFB\u7406\u89E3': '\u7EC6\u8282\u9898\u7CBE\u8BFB + \u63A8\u65AD\u9898\u903B\u8F91\u5224\u65AD',
    '\u7FFB\u8BD1': '\u53E5\u5F0F\u53D8\u6362 + \u6838\u5FC3\u8BCD\u6C47\u6D3B\u7528',
    '\u4F5C\u6587': '\u6BB5\u843D\u7ED3\u6784\u6E05\u6670 + \u8BBA\u636E\u4E3E\u4F8B + \u8BCD\u6C47\u591A\u6837\u5316'
  };
  return map[type] || '\u8BCD\u6C47\u79EF\u7D2F + \u9898\u578B\u4E13\u9879';
}
"""

# 找到 </script> 并在前面注入
script_end = html.rfind('</script>')
if script_end > 0:
    html = html[:script_end] + QUIZ_JS + '\n' + html[script_end:]
    print("1. Quiz JS injected before </script>")
else:
    print("ERROR: Could not find </script>")

# ============================================================
# 2. 在 panel-exam 内插入 dailyQuizContainer（不删除原始模拟考）
# ============================================================

# 方案：在 panel-exam 的 </div> 之前插入 dailyQuizContainer
# 原始结构：  </div>\n\n  <!-- ============ Tab 3: 统计 ============ -->
# examBody 的 </div> 后紧跟 panel-exam 的 </div>

old_marker = '  </div>\n\n  <!-- ============ Tab 3: 统计 ============ -->'
new_insert = '''    <div id="dailyQuizContainer" style="display:none;"></div>
  </div>

  <!-- ============ Tab 3: 统计 ============ -->'''

if '<div id="dailyQuizContainer"' in html:
    # 已经插入过了
    print("2. dailyQuizContainer already present in DOM: OK")
else:
    html = html.replace(old_marker, new_insert, 1)
    print("2. dailyQuizContainer inserted inside panel-exam")

# ============================================================
# 3. 更新统计 Tab「今日题型」区域支持动态更新
# ============================================================
old_tips = '      \U0001f4cc 今日题型：<strong>翻译（汉译英）⭐⭐⭐⭐☆</strong><br>\n      \U0001f4cc 重点突破：<strong>句式变换 + 核心词汇活用</strong><br>\n      \U0001f4cc 学习顺序：先浏览词汇表 → 模拟考试 → 核对解析 → 重点记忆错题词汇<br>\n      \U0001f4cc 小技巧：把错题中的生词标记下来，睡前再复习一遍效果最好！'

new_tips = '      <span id="todayTypeTip">\U0001f4cc 今日题型：加载中...<br>\U0001f4cc 学习顺序：先浏览词汇表 → 每日一练 → 核对解析 → 重点记忆错题词汇</span>'

if old_tips in html:
    html = html.replace(old_tips, new_tips)
    print("3. Stats tab tips updated to dynamic")
else:
    if 'todayTypeTip' in html:
        print("3. Stats tips already dynamic: OK")
    else:
        print("WARNING: Could not find stats tips - skipping")

# 3.5. 将甜言蜜语文本包装为可动态更新的 span
old_sweet_p = '<p style="color:var(--pink-500);font-size:16px;font-weight:600;line-height:1.8;">'
new_sweet_p = '<p id="sweetNoteText" style="color:var(--pink-500);font-size:16px;font-weight:600;line-height:1.8;">\u201C\u52A0\u8F7D\u4E2D...\u201D'
if old_sweet_p in html:
    idx = html.find(old_sweet_p)
    end_idx = html.find('</p>', idx)
    if end_idx > 0:
        html = html[:idx] + new_sweet_p + html[end_idx:]
        print("3.5. Sweet note text wrapped with id")
    else:
        print("WARNING: Sweet note end tag not found")
else:
    print("WARNING: Could not find sweet note p tag")

# ============================================================
# 4. 更新 updateUI()：按 dayIndex 分叉显示
# ============================================================
new_update_ui = '''function updateUI() {
  var _el;
  if ((_el = document.getElementById('dateLabel'))) _el.textContent = formatDate(currentDate);
  if ((_el = document.getElementById('examDateLabel'))) _el.textContent = formatDate(currentDate);
  if ((_el = document.getElementById('sweetNoteDate'))) _el.textContent = formatDate(currentDate);
  renderVocab();
  // 初始化收藏星标状态
  initBookmarkStars();
  updateStatsRow();

  // === 分叉逻辑：day 0 保留模拟考，day 1+ 使用每日一练 ===
  var idx = dayIndex(currentDate);
  var examPre = document.getElementById('examPre');
  var examBody = document.getElementById('examBody');
  var quizContainer = document.getElementById('dailyQuizContainer');
  var tabExam = document.getElementById('tab-exam');

  if (idx === 0) {
    // 5/21: 原始模拟考试
    if (examPre) examPre.style.display = '';
    if (examBody) examBody.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'none';
    if (tabExam) tabExam.innerHTML = '<span class="tab-icon">\u270D\uFE0F</span>\u6A21\u62DF\u8003';
  } else {
    // 5/22+: 每日一练
    if (examPre) examPre.style.display = 'none';
    if (examBody) examBody.style.display = 'none';
    if (quizContainer) quizContainer.style.display = 'block';
    if (tabExam) tabExam.innerHTML = '<span class="tab-icon">\U0001F3AF</span>\u6BCF\u65E5\u4E00\u7EC3';
    renderDailyQuiz();
    updateDailyStats();
  }
}'''

# 用正则替换整个 updateUI 函数
old_ui_pattern = r'function updateUI\(\)\s*\{.*?(?=\n// ===|\nfunction |\Z)'
# 更精确的匹配：匹配 function updateUI() { ... } 整个函数体
# 使用贪婪匹配到最后一个 }
old_ui_pattern2 = r'function updateUI\(\) \{[\s\S]*?\n\}'
html_new2 = re.sub(old_ui_pattern2, new_update_ui, html, count=1)

if html_new2 != html:
    html = html_new2
    print("4. updateUI() replaced with day-split logic")
else:
    print("WARNING: Could not replace updateUI() - regex didn't match")
    # Try fallback: check if the current updateUI already has our logic
    if 'idx === 0' in html and 'examPre' in html:
        print("4. updateUI() already has split logic: OK")

# ============================================================
# 5. 给 startExam() 加 day0 保护
# ============================================================
old_start_exam = 'function startExam() {\n  if (examStarted) return;'
new_start_exam = '''function startExam() {
  if (dayIndex(currentDate) !== 0) return; // 仅5/21可用
  if (examStarted) return;'''

if old_start_exam in html:
    html = html.replace(old_start_exam, new_start_exam)
    print("5. startExam() day0 guard added")
else:
    print("5. startExam() guard: already present or not found")

# ============================================================
# 6. 统计栏改造：移除历史成绩 + 实时数据 + 每日甜言
# ============================================================

# 6a. 替换 stats-row 为实时数据
old_stats_row = '''      <div class="stats-row">
        <div class="stat-item"><div class="stat-num" id="statVocab">-</div><div class="stat-lbl">核心词汇</div></div>
        <div class="stat-item"><div class="stat-num" id="statPhrases">10</div><div class="stat-lbl">词组练习</div></div>
        <div class="stat-item"><div class="stat-num" id="statSentences">5</div><div class="stat-lbl">句子翻译</div></div>
        <div class="stat-item"><div class="stat-num" id="statPara">1</div><div class="stat-lbl">段落翻译</div></div>
      </div>'''
new_stats_row = '''      <div class="stats-row">
        <div class="stat-item"><div class="stat-num" id="statVocab">-</div><div class="stat-lbl">今日词汇</div></div>
        <div class="stat-item"><div class="stat-num" id="statQuiz">0/2</div><div class="stat-lbl">答题进度</div></div>
        <div class="stat-item"><div class="stat-num" id="statBookmarks">0</div><div class="stat-lbl">收藏生词</div></div>
        <div class="stat-item"><div class="stat-num" id="statStreak">-</div><div class="stat-lbl">学习天数</div></div>
      </div>'''

if old_stats_row in html:
    html = html.replace(old_stats_row, new_stats_row)
    print("6a. Stats row replaced with real-time data")
else:
    # Try with the original values (unbuilt)
    old_stats_row2 = '''      <div class="stats-row">
        <div class="stat-item"><div class="stat-num" id="statVocab">80</div><div class="stat-lbl">核心词汇</div></div>
        <div class="stat-item"><div class="stat-num" id="statPhrases">10</div><div class="stat-lbl">词组练习</div></div>
        <div class="stat-item"><div class="stat-num" id="statSentences">5</div><div class="stat-lbl">句子翻译</div></div>
        <div class="stat-item"><div class="stat-num" id="statPara">1</div><div class="stat-lbl">段落翻译</div></div>
      </div>'''
    if old_stats_row2 in html:
        html = html.replace(old_stats_row2, new_stats_row)
        print("6a. Stats row replaced (original values)")
    else:
        print("WARNING: Could not find old stats-row to replace")

# 6b. 移除"历史成绩"卡片
old_history_card = '''    <div class="card">
      <div class="section-title"><span class="icon">\U0001F3C6</span>\u5386\u53F2\u6210\u7EE9</div>
      <div id="historyScores" style="color:var(--text-light);font-size:14px;">
        <p>\u6682\u65E0\u5386\u53F2\u8BB0\u5F55\uFF0C\u5FEB\u53BB\u6A21\u62DF\u8003\u5427\uFF01</p>
      </div>
    </div>\n'''
# Also try \u unicode sequence version
old_history_card2 = '    <div class="card">\n      <div class="section-title"><span class="icon">\U0001F3C6</span>\u5386\u53F2\u6210\u7EE9</div>\n      <div id="historyScores"'

for pattern in [old_history_card]:
    if pattern in html:
        html = html.replace(pattern, '')
        print("6b. History scores card removed")
        break
else:
    # Try removing by searching for the section-title text pattern
    import re
    pattern = re.compile(r'    <div class="card">\s*\n\s*<div class="section-title"><span class="icon">.*?</span>\u5386\u53F2\u6210\u7EE9</div>.*?</div>\s*\n', re.DOTALL)
    match = pattern.search(html)
    if match:
        html = html.replace(match.group(), '')
        print("6b. History scores card removed (regex)")
    else:
        print("WARNING: Could not find history scores card to remove")

# 6c. 注入甜言蜜语池 + 实时统计更新 + 生词收藏功能
sweet_notes_pool = r'''// ============================================================
// 甜言蜜语池 — 每天一句送给女朋友
// day0 = 原始版本，day1+ = 甜蜜旋转
// ============================================================
var SWEET_NOTES = [
  "\u4F60\u7684\u7B11\u5BB9\u662F\u6211\u6BCF\u5929\u6700\u60F3\u770B\u5230\u7684\u98CE\u666F\uFF0C\u770B\u5230\u4F60\u5F00\u5FC3\uFF0C\u6211\u5C31\u89C9\u5F97\u4E16\u754C\u90FD\u4EAE\u4E86\u3002",
  "\u9047\u89C1\u4F60\u662F\u6211\u8FD9\u8F88\u5B50\u6700\u5E78\u8FD0\u7684\u4E8B\uFF0C\u6BCF\u4E00\u5929\u90FD\u60F3\u8BA9\u4F60\u66F4\u5E78\u798F\u4E00\u70B9\u3002",
  "\u4F60\u77E5\u9053\u5417\uFF1F\u4F60\u8BA4\u771F\u7684\u6837\u5B50\u7279\u522B\u8FF7\u4EBA\uFF0C\u6211\u767E\u770B\u4E0D\u817B\u3002",
  "\u60F3\u966A\u4F60\u8D70\u8FC7\u6BCF\u4E00\u4E2A\u6625\u590F\u79CB\u51AC\uFF0C\u56DB\u7EA7\u53EA\u662F\u6211\u4EEC\u6545\u4E8B\u91CC\u7684\u4E00\u5C0F\u7AE0\u3002",
  "\u4E16\u754C\u4E0A\u6700\u597D\u542C\u7684\u58F0\u97F3\uFF0C\u662F\u4F60\u53EB\u6211\u540D\u5B57\u65F6\u5019\u7684\u7B11\u58F0\u3002",
  "\u6BCF\u6B21\u60F3\u5230\u4F60\uFF0C\u5FC3\u91CC\u5C31\u50CF\u4F4F\u8FDB\u4E86\u4E00\u6574\u4E2A\u6625\u5929\u3002",
  "\u4F60\u662F\u6211\u5E73\u6DE1\u751F\u6D3B\u91CC\u6700\u95EA\u4EAE\u7684\u5149\uFF0C\u6BCF\u4E00\u5929\u90FD\u56E0\u4F60\u800C\u7F8E\u597D\u3002",
  "\u4E0D\u7BA1\u56DB\u7EA7\u591A\u96BE\uFF0C\u53EA\u8981\u60F3\u5230\u662F\u4F60\uFF0C\u6211\u5C31\u89C9\u5F97\u4E00\u5207\u90FD\u503C\u5F97\u3002",
  "\u4F60\u662F\u6211\u7684\u5C0F\u592A\u9633\uFF0C\u6E29\u6696\u4E86\u6211\u7684\u6574\u4E2A\u4E16\u754C\u3002",
  "\u548C\u4F60\u5728\u4E00\u8D77\u7684\u6BCF\u4E00\u5929\uFF0C\u90FD\u662F\u6211\u6700\u73CD\u8D35\u7684\u793C\u7269\u3002",
  "\u4F60\u7684\u773C\u775B\u91CC\u6709\u661F\u661F\uFF0C\u7167\u4EAE\u4E86\u6211\u6240\u6709\u7684\u68A6\u60F3\u3002",
  "\u60F3\u628A\u4E16\u754C\u4E0A\u6240\u6709\u7F8E\u597D\u7684\u4E1C\u897F\u90FD\u7ED9\u4F60\uFF0C\u56E0\u4E3A\u4F60\u503C\u5F97\u3002",
  "\u6709\u4F60\u5728\u8EAB\u8FB9\uFF0C\u8FDE\u80CC\u5355\u8BCD\u90FD\u53D8\u6210\u4E86\u5E78\u798F\u7684\u4E8B\u3002",
  "\u6211\u6700\u5927\u7684\u613F\u671B\u4E0D\u662F\u8FC7\u56DB\u7EA7\uFF0C\u800C\u662F\u4F60\u6BCF\u5929\u90FD\u5F00\u5F00\u5FC3\u5FC3\u7684\u3002",
  "\u4F60\u7684\u5B58\u5728\u672C\u8EAB\u5C31\u662F\u5149\uFF0C\u4E0D\u9700\u8981\u501F\u4EFB\u4F55\u4EBA\u7684\u4EAE\u3002",
  "\u548C\u4F60\u4E00\u8D77\u6162\u6162\u53D8\u597D\uFF0C\u662F\u6211\u80FD\u60F3\u5230\u6700\u6D6A\u6F2B\u7684\u4E8B\u3002",
  "\u4F60\u662F\u6708\u4EAE\u6211\u90FD\u613F\u610F\u4E3A\u4F60\u6458\uFF0C\u56DB\u7EA7\u8FD9\u70B9\u4E8B\u7B97\u4EC0\u4E48\u5462\uFF5E",
  "\u867D\u7136\u6211\u4E0D\u80FD\u66FF\u4F60\u8003\u8BD5\uFF0C\u4F46\u6211\u4F1A\u4E00\u76F4\u7AD9\u5728\u4F60\u8EAB\u540E\u4E3A\u4F60\u52A0\u6CB9\u3002",
  "\u6BCF\u5929\u6253\u5F00\u8FD9\u4E2A\u5C0F\u7AD9\uFF0C\u7B2C\u4E00\u4E2A\u60F3\u5230\u7684\u5C31\u662F\u4F60\u52AA\u529B\u5B66\u4E60\u7684\u6837\u5B50\u3002",
  "\u4F60\u503C\u5F97\u6240\u6709\u7684\u7F8E\u597D\uFF0C\u56E0\u4E3A\u4F60\u672C\u8EAB\u5C31\u662F\u7F8E\u597D\u672C\u8EAB\u3002",
  "\u6211\u60F3\u628A\u4F59\u751F\u90FD\u5199\u6210\u60C5\u4E66\uFF0C\u4F60\u662F\u552F\u4E00\u7684\u5973\u4E3B\u89D2\u3002",
  "\u770B\u5230\u4F60\u8FDB\u6B65\uFF0C\u6BD4\u6211\u81EA\u5DF1\u7684\u6210\u529F\u8FD8\u8981\u5F00\u5FC3\u4E00\u767E\u500D\u3002",
  "\u60F3\u548C\u4F60\u4E00\u8D77\u53BB\u5F88\u591A\u5730\u65B9\uFF0C\u770B\u5F88\u591A\u98CE\u666F\uFF0C\u8FC7\u5F88\u591A\u8282\u65E5\u3002",
  "\u4F60\u662F\u6211\u89C1\u8FC7\u6700\u6E29\u67D4\u7684\u4EBA\uFF0C\u4E5F\u662F\u6700\u575A\u5F3A\u7684\u4EBA\u3002",
  "\u8FD9\u8F88\u5B50\u6700\u5927\u7684\u5E78\u8FD0\u5C31\u662F\u9047\u89C1\u4F60\uFF0C\u6765\u751F\u8FD8\u8981\u5728\u4E00\u8D77\u3002"
];

function getDailySweetNote(d) {
  var idx = dayIndex(d);
  if (idx === 0) return "\u5B66\u4E60\u867D\u7136\u8F9B\u82E6\uFF0C\u4F46\u60F3\u5230\u4F60\u80FD\u7528\u5230\u8FD9\u4E2A\u5C0F\u7AD9\uFF0C\u4E00\u5207\u90FD\u503C\u5F97\u3002\u52A0\u6CB9\uFF0C\u4F60\u6C38\u8FDC\u662F\u6211\u7684\u9A84\u50B2 \u2764\uFE0F";
  return SWEET_NOTES[(idx - 1) % SWEET_NOTES.length];
}

// ============================================================
// 生词收藏功能 — 点击星标收藏/取消，localStorage 存储
// ============================================================
function getBookmarks() {
  try {
    return JSON.parse(localStorage.getItem('cet4_bookmarks') || '[]');
  } catch(e) { return []; }
}
function saveBookmarks(list) {
  localStorage.setItem('cet4_bookmarks', JSON.stringify(list));
}
function toggleBookmark(word, el) {
  var list = getBookmarks();
  var idx = list.indexOf(word);
  if (idx >= 0) {
    list.splice(idx, 1);
    if (el) { el.textContent = '\u2606'; el.title = '\u6536\u85CF\u8FD9\u4E2A\u5355\u8BCD'; }
  } else {
    list.push(word);
    if (el) { el.textContent = '\u2605'; el.title = '\u53D6\u6D88\u6536\u85CF'; }
  }
  saveBookmarks(list);
  updateStatsRow();
}

// ============================================================
// 实时统计更新
// ============================================================
function updateStatsRow() {
  var _el;
  var idx = dayIndex(currentDate);
  if ((_el = document.getElementById('statVocab'))) _el.textContent = getCurrentVocab().length;
  if ((_el = document.getElementById('statStreak'))) _el.textContent = idx + 1;
  if ((_el = document.getElementById('statBookmarks'))) _el.textContent = getBookmarks().length;

  // 答题进度：检查 localStorage 中是否已提交
  try {
    var data = JSON.parse(localStorage.getItem('cet4_quiz_state') || '{}');
    var todayKey = currentDate.getFullYear()+'-'+String(currentDate.getMonth()+1).padStart(2,'0')+'-'+String(currentDate.getDate()).padStart(2,'0');
    var today = data[todayKey] || { quizA: false, quizB: false };
    var done = (today.quizA ? 1 : 0) + (today.quizB ? 1 : 0);
    if ((_el = document.getElementById('statQuiz'))) _el.textContent = done + '/2';
  } catch(e) {
    if ((_el = document.getElementById('statQuiz'))) _el.textContent = '0/2';
  }

  // 更新甜言蜜语
  if ((_el = document.getElementById('sweetNoteText'))) {
    _el.innerHTML = '\u201C' + getDailySweetNote(currentDate) + '\u201D';
  }
}

// 答题提交后记录状态
function markQuizDone(part) {
  try {
    var data = JSON.parse(localStorage.getItem('cet4_quiz_state') || '{}');
    var todayKey = currentDate.getFullYear()+'-'+String(currentDate.getMonth()+1).padStart(2,'0')+'-'+String(currentDate.getDate()).padStart(2,'0');
    if (!data[todayKey]) data[todayKey] = { quizA: false, quizB: false };
    data[todayKey][part] = true;
    localStorage.setItem('cet4_quiz_state', JSON.stringify(data));
    updateStatsRow();
  } catch(e) {}
}
'''

# 在 updateDailyStats 函数之前注入
insert_pos = html.find('function updateDailyStats()')
if insert_pos > 0:
    html = html[:insert_pos] + sweet_notes_pool + '\n' + html[insert_pos:]
    print("6c. Sweet notes pool + bookmarks + stats updater injected")
else:
    print("WARNING: Could not find updateDailyStats injection point")

# 6d. 更新 updateDailyStats 并移除 renderHistoryScores 调用
# 把 updateDailyStats 改为调用 updateStatsRow
old_daily_stats = 'function updateDailyStats() {\n  var d = currentDate;'
new_daily_stats = 'function updateDailyStats() {\n  updateStatsRow();\n  var d = currentDate;'

if old_daily_stats in html:
    html = html.replace(old_daily_stats, new_daily_stats)
    print("6d. updateDailyStats now calls updateStatsRow")

# 6e. 移除 updateUI 中的 renderHistoryScores() 调用
html = html.replace('  renderHistoryScores();\n', '')
# Also update sweet note in updateUI - remove the old manual setting
html = html.replace("  var sweet = document.getElementById('sweet-note');\n  if (sweet) sweet.textContent = getDailyQuote(currentDate);\n", '')
print("6e. Removed renderHistoryScores + old sweet-note from updateUI")

# Save
with open(path, 'w', encoding='utf-8') as f:
    f.write(html)

# Verify
s = html.find('<script>')
e = html.rfind('</script>')
js = html[s:e]
open_count = js.count('{')
close_count = js.count('}')
print(f"\nJS braces: {open_count} vs {close_count} balanced={open_count==close_count}")
print(f"Size: {len(html)} bytes")
print(f"DailyPractice: {'DAILY_PRACTICE_POOL' in js}")
print(f"PastPapers: {'CET4_PAST_PAPERS' in js}")
print(f"renderDailyQuiz: {'renderDailyQuiz' in js}")
print(f"submitQuiz: {'submitQuiz' in js}")
print(f"Day-split: {'idx === 0' in js}")
print(f"mockExam intact: {'examPre' in js and 'examBody' in js}")
