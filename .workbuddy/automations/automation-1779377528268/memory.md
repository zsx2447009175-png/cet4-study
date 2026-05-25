# CET-4 网站每日更新 - 执行记录

## 2026-05-22 首次执行

- **状态**: 成功
- **步骤**:
  1. git checkout 8503486 → 恢复 index.html 基础版本 ✓
  2. build_v3.py → 日期系统/词卡样式/每日寄语 ✓ (71705 bytes)
  3. build_v32.py → 100 词/随机排序 ✓ (71922 bytes, 括号平衡)
  4. fix_phrase_answer.py → 词组答案修复 ✓ (括号平衡)
  5. upload_v3.py → 部署到 GitHub Pages ✓ (SHA: 9f8630354c)

## 2026-05-22 V3.3 更新

- 新增 build_v33_quiz.py（每日一练A+B）
- build_v32.py 改为 dayIndex=0 返回80词，dayIndex>=1 返回100词
- 部署 SHA: 37c0ebdfe3
- 自动化 prompt 已更新加入 build_v33_quiz.py 步骤

## 2026-05-22 V3.3 二次修正

- **词汇逻辑修复**：build_v3.py 恢复 seededRandom 洗牌 + day0=80/day1+=100，5/21词和原始版本一致
- **build_v32.py**：改为验证模式，移除运行时 WORD_POOL shuffle（破坏 seededRandom 稳定性）
- **测试题位置修复**：build_v33_quiz.py 现在替换整个 panel-exam（模拟考），而非额外追加
## 2026-05-22 V3.3 三次修正（单词/测试题不显示 Bug）

- **根本原因**：updateUI() 执行 examDateLabel.textContent 时 null 崩溃，整个渲染链中断
- **修复**：updateUI() 改为空值安全写法；build_v33_quiz.py 步骤4改为替换整个 updateUI
- **部署 SHA**: 996ff059d7

## 2026-05-23 自动化执行

- **状态**: 成功
- **步骤**:
  1. git checkout 8503486 → 恢复 index.html (75382 bytes) ✓
  2. build_v3.py → 日期系统/词卡/每日寄语 ✓ (75880 bytes)
  3. build_v32.py → 验证词量逻辑/移除shuffle ✓ (75879 bytes, 括号平衡 512/512)
  4. build_v33_quiz.py → 每日一练A+B ✓ (141235 bytes, 括号平衡 649/649)
  5. fix_phrase_answer.py → 词组答案修复 ✓ (括号平衡 651/651)
  6. upload_v3.py → 部署到 GitHub Pages ✓ (SHA: b009b99ab1)
  7. 网站验证 → HTTP 200, 响应 2.0s ✓
- **网站**: https://zsx2447009175-png.github.io/cet4-study/

## 2026-05-23 V3.4 — 复习模块上线

- **新增**: build_v34_review.py（复习 Tab，排在第一位，dayIndex≥1 可用）
- **构建链更新**: 插入在 fix_phrase_answer.py 之后、upload_v3.py 之前（7步链）
- **功能**: 前一天词汇选择题复习、4选1、错题优先、继续复习、全对标记完成
- **部署 SHA**: b73933aade
- **网站大小**: 161,898 bytes | 括号平衡: 724/724
- **localStorage**: cet4_review_data 存储复习状态

## 2026-05-24 自动化执行

- **状态**: 成功
- **步骤**:
  1. git checkout 8503486 → 恢复 index.html (75382 bytes) ✓
  2. build_v3.py → 日期系统/词卡/每日寄语 ✓ (75880 bytes)
  3. build_v32.py → 验证词量逻辑/移除shuffle ✓ (75879 bytes, 括号平衡 512/512)
  4. build_v33_quiz.py → 每日一练A+B ✓ (145890 bytes, 括号平衡 658/658)
  5. fix_phrase_answer.py → 词组答案修复 ✓ (括号平衡 660/660)
  6. build_v34_review.py → 复习模块 ✓ (167839 bytes, 括号平衡 734/734)
  7. upload_v3.py → 部署到 GitHub Pages ✓ (SHA: ee5d71802c)
  8. 网站验证 → HTTP 200, 响应 1.36s, 185828 bytes ✓
- **网站**: https://zsx2447009175-png.github.io/cet4-study/
- **备注**: panel-review 检测警告为脚本匹配字符串差异，id="panel-review" 实际存在

## 2026-05-24 V3.5 — 每日一练升级（手动需求，13:30）

- **新增**: build_v35_quiz2.py（5/24起启用，dayIndex<3 原逻辑不变）
- **构建链变为 8 步**（在 V3.4 基础上追加 build_v35_quiz2.py）
- **新功能**: 12道四级真题库随机抽3道、45分钟倒计时、时间到自动提交、最后5分钟计时器变红
- **部署 SHA**: 0f503dd3e4 | 括号平衡: 999/999 | 205,203 bytes

## 2026-05-24 V3.5 JS 语法 Bug 修复（13:40）

- **问题**: passageCn 字段用双引号包裹，内部含 "..." 引号 → JS SyntaxError → 白屏
- **定位**: Node.js --check 语法验证
- **修复**: 内嵌引号改为「」书名号，build_v35_quiz2.py 已修正
- **部署 SHA**: 3b4c2b5792 | HTTP 200 | 231,002 bytes
- **重要教训**: QUIZ2_JS 中 passageCn 等中文翻译字段含引号时必须用「」而非双引号 ""
- **自动化 prompt 已同步更新（9步链）**

## 2026-05-24 V3.5.1 统一提交+详细解析（14:10）

- **问题**: submitRealPaper 用 submitQuiz 取旧数据(_currentPractice)而非 _quizPapers；每题有单独提交按钮
- **修复**: 全部重写 build_v35_quiz2.py
  - _v35build*HTML 系列无按钮版函数 + submitAllPapers() 统一提交
  - 翻译题新增 translationAnalysis（逐句解析）+ 作文题新增 essayAnalysis（结构分析）
  - 所有数据 passageCn 内嵌引号用「」
- **部署 SHA**: e07358483b | 1034/1034 | 251,113 bytes → CDN 271,941 bytes

## 2026-05-25 自动化执行

- **状态**: 成功
- **步骤**:
  1. git checkout 8503486 → 恢复 index.html (75382 bytes) ✓
  2. build_v3.py → 日期系统/词卡/每日寄语 ✓ (75880 bytes)
  3. build_v32.py → 验证词量逻辑/移除shuffle ✓ (75879 bytes, 括号平衡 512/512)
  4. build_v33_quiz.py → 每日一练A+B ✓ (145890 bytes, 括号平衡 658/658)
  5. fix_phrase_answer.py → 词组答案修复 ✓ (括号平衡 660/660)
  6. build_v34_review.py → 复习模块 ✓ (167839 bytes, 括号平衡 734/734)
  7. build_v35_quiz2.py → 每日一练V3.5.1升级 ✓ (251113 bytes, 括号平衡 1034/1034)
  8. upload_v3.py → 部署到 GitHub Pages ✓ (SHA: e07358483b)
  9. 网站验证 → HTTP 200, 响应 0.997s, 271941 bytes ✓
- **网站**: https://zsx2447009175-png.github.io/cet4-study/
- **备注**: dayIndex=4 (5/25)，复习模块复习5/24词汇，每日一练走V3.5真题路径（3道+45分钟倒计时）

## 2026-05-25 V2 词汇逻辑重构 (14:20)

- **问题**: 原始 WORD_POOL 仅362词，day3(5/24)只剩82词，day4(5/25)归零
- **新方案**:
  1. 计算5/21-5/23已学280词，存完整词条到 PRESERVED_DAYS
  2. 从 WORD_POOL 删除已学词（剩82词）
  3. 每天从 CET-4 高频词库补100新词到 WORD_POOL
  4. getDailyVocab: idx<3 直接用 PRESERVED_DAYS, idx>=3 随机100
- **新增脚本**: fix_vocab_v2.py（在 build_v3.py 之后、build_v32.py 之前运行）
- **CET-4 词库**: 412词，按 dayIndex 偏移取 [offset:offset+100]
- **今日构建链 (10步)**:
  1. git checkout → 75382 bytes ✓
  2. build_v3.py → 75880 bytes ✓
  3. fix_vocab_v2.py → 81136 bytes ✓ (pool=182, PRESERVED_DAYS=280)
  4. build_v32.py → 81135 bytes, 612/612 ✓
  5. build_v33_quiz.py → 151146 bytes, 758/758 ✓
  6. fix_phrase_answer.py → 760/760 ✓
  7. build_v34_review.py → 173095 bytes, 834/834 ✓
  8. build_v35_quiz2.py → 256369 bytes, 1134/1134 ✓
  9. upload_v3.py → SHA: 81e1ca8ec2 ✓
  10. 网站验证 → 页面加载成功 ✓
- **网站**: https://zsx2447009175-png.github.io/cet4-study/
- **关键修复**: PRESERVED_DAYS 存完整词条对象（非仅词名），确保 5/21-5/23 历史词汇显示完整
