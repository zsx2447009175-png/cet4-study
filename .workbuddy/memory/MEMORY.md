# MEMORY.md — CET-4 Study Project

## 项目概述
四级学习网站，GitHub Pages 部署: https://zsx2447009175-png.github.io/cet4-study/

## 构建脚本链（严格按顺序）
1. `git checkout 8503486 -- index.html` — 恢复到原始版本
2. `python build_v3.py` — 日期系统、分叉词汇、不背单词风格词卡+交互+收藏星标、Daily Quotes
3. `python fix_vocab_v2.py` — 词汇逻辑V2：保留5/21-5/23已学词(PRESERVED_DAYS)，从池删除已学词，每天补100新CET4词，day>=3随机100
4. `python build_v32.py` — statVocab动态化、清理WORD_POOL shuffle
5. `python build_v33_quiz.py` — 每日一练模块（分叉逻辑+交互式答题+提交评分）+ 统计栏改造
6. `python fix_phrase_answer.py` — 词组评分补丁
7. `python build_v34_review.py` — 复习模块（新增🔄Tab，4选1选择题，错题优先+继续复习+全对标记完成）
8. `python build_v35_quiz2.py` — 每日一练升级：dayIndex>=3(5/24起) 使用12道真题库随机抽3题+45分钟倒计时
9. `python upload_v3.py` — 上传到 GitHub Pages

## 核心设计决策

### 分叉逻辑 (2026-05-22)
- **dayIndex=0 (5/21)**: 完整保留原始模拟考试 (examPre + examBody + startExam)，80词
- **dayIndex≥1 (5/22+)**: 每日一练替换模拟考，100词
- updateUI() 中根据 dayIndex 控制 examPre/examBody/dailyQuizContainer 的显示/隐藏
- Tab 按钮文字动态切换：模拟考 ↔ 每日一练

### 每日一练模式
- 题库A (DAILY_PRACTICE_POOL): 8题轮换（选词填空×2、段落匹配×1、阅读理解×2、翻译×2、作文×2）
- 题库B (CET4_PAST_PAPERS): 6题真题轮换（各题型）
- 交互式答题：选词填空用select、段落匹配用select、阅读理解用radio、翻译/作文用textarea
- **提交后才显示**：分数、正确答案（✓/✗标记）、解析
- 选词填空：每题1分，段落匹配：每题2分，阅读理解：按题数均分10分
- 翻译/作文：提交后显示参考译文/范文，不自动评分

### 词汇系统 (V2 重构 2026-05-25)
- **dayIndex=0-2 (5/21-5/23)**: 完整词条存入 `PRESERVED_DAYS[3][N]`，从 WORD_POOL 删除
- **dayIndex≥3 (5/24+)**: 每天从 CET4_BANK 补100新词，从池中 shuffledRandom 取100
- **CET4_BANK**: 412个四级高频词，按 `bank[offset:offset+100]` 切片，offset=100×(dayIndex-3)
- **池大小**: 82(剩余) + 100(新) = 182词，每天随机取100
- **PRESERVED_DAYS 格式**: 完整JS对象数组 `[{w,p,m,c},...]`，非仅词名
- **关键**: getDailyVocab idx<3 直接用 PRESERVED_DAYS[idx]，不查 WORD_POOL

### 统计栏（2026-05-22 改造）
- 实时数据：今日词汇、答题进度（0/2）、收藏生词数、学习天数
- 甜言蜜语池（25条），按日轮换
- 答题提交后自动更新进度
- 已移除无用的"历史成绩"卡片

### 日期系统
- START_DATE: 2026-05-21
- 早9点前算前一天
- 导航不能早于START_DATE，不能超过今天

## 已知坑位 & 注意事项

### 词汇生成方式 (V2 2026-05-25 重构)
- **V2 方案**: 5/21-5/23 完整词条存 PRESERVED_DAYS，从 WORD_POOL 删除；5/24+ 每天补100新词 + 随机100
- **旧 V3 (已废弃)**：day0 用 `WORD_POOL.slice(0,80)`，day1+ seededRandom + 排除已用词
- **坑**: PRESERVED_DAYS 必须存完整 `{w,p,m,c}` 对象，不能只存词名（否则 WORD_POOL 删了查不到）

### dailyQuizContainer 检测 (2026-05-22 修复)
- build_v33_quiz.py 的检测条件必须用 `'<div id="dailyQuizContainer"'` 而非 `'dailyQuizContainer'`
- 因为 `'dailyQuizContainer'` 也会在 JS 代码的 `getElementById` 中匹配到，导致误判容器已存在

### 其他
- build_v33_quiz.py 中 QUIZ_JS 用 Python raw string (r""")，确保JS的 \u 转义不被Python解释
- build_v33_quiz.py 中非raw string的 Unicode 字符用 \U0001XXXX 格式（8位），不能使用surrogate对
- 每次部署前先 git checkout 8503486 -- index.html 恢复原始状态
- JS括号平衡检查是部署前的必要步骤
- Node.js `--check` 语法验证也是部署前的必要步骤（`node --check file.js`）

### V3.5 每日一练升级 (2026-05-24 V3.5/V3.5.1)
- **dayIndex>=3 (5/24起)**: 12道真题库随机抽3道 + 45分钟倒计时 + 统一提交
- **构建函数分叉**: dayIndex>=3 用 `_v35build*HTML`（无单独提交按钮），dayIndex<3 用原 `build*HTML`
- **submitQuiz 数据来源 bug (V3.5.1修复)**: submitRealPaper 调 submitQuiz(part)，但 submitQuiz 用 `_currentPractice/_currentPastPaper` 取数据（旧题），而非 `_quizPapers[idx]`。修复：新增 `submitAllPapers()` 统一提交函数，直接从 `_quizPapers` 取数据
- **中文引号**: QUIZ2_JS raw string 中 passageCn 等字段含引号必须用「」而非 "" 双引号
- **段落匹配答案**: 用 ①-⑤ Unicode 编号，不用 ASCII 数字

### 复习模块 (2026-05-23 V3.4 新增)
- **Tab 位置**: 四个 Tab 第一位（复习 | 词汇 | 每日一练 | 统计）
- **可用条件**: dayIndex≥1（5/22起），day0 时隐藏复习 Tab
- **词汇来源**: 前一天 `getDailyVocab(prevDate)`（5/22复习5/21的80词，以此类推）
- **题目形式**: 显示英文单词 + 4 个中文释义选项，一次选对自动跳下一题，选错显示答案+需手动点"下一题"
- **结果评价**: 100%/≥80%/≥60%/<60% 四档，不同文案和视觉风格
- **继续复习**: 按钮仅出现错题，直到全对 → 标记 `lastMastered=true`
- **智能排序**: 错得多的词排在前面优先出现
- **localStorage**: `cet4_review_data` — `{dateKey: {words: {word: wrongCount}, completedRound, lastMastered}}`
- **DOMContentLoaded**: dayIndex≥1 时默认激活复习 Tab
- **dateKey Bug (2026-05-23 修复)**: build_v3.py 删除了 `dateKey()` 函数定义，但复习模块多处调用导致 `ReferenceError` → 空白页。修复：在 build_v34_review.py 的复习 JS 开头重新注入 `dateKey()` 定义。
