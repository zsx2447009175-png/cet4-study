"""
V3.4 - 复习功能模块
核心改动:
  1. 在 Tab Nav 最前面添加"复习"按钮
  2. 在 panel-vocab 之前插入 panel-review HTML
  3. 在 </style> 之前注入复习 CSS
  4. 在 </script> 之前注入复习 JS
  5. 修改 switchTab() 函数（map扩展为4个tab）
  6. 修改 updateUI() 添加复习 Tab 可见性控制
  7. 修改 DOMContentLoaded 默认激活复习 Tab（dayIndex>=1时）
"""
import re

path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# 验证前一步括号平衡
s = html.find('<script>')
e = html.find('</script>')
js_before = html[s:e]
open_b = js_before.count('{')
close_b = js_before.count('}')
print(f"Before: JS braces {open_b} vs {close_b} balanced={open_b==close_b}")
if open_b != close_b:
    print("ERROR: Braces unbalanced before review injection! Aborting.")
    exit(1)

# ============================================================
# 步骤1: 修改 Tab Nav，添加"复习"按钮（排在第一位）
# ============================================================
old_tab_nav = '''  <nav class="tab-nav">
    <button class="tab-btn active" onclick="switchTab('vocab')"><span class="tab-icon">📝</span>词汇</button>
    <button class="tab-btn" id="tab-exam" onclick="switchTab('exam')"><span class="tab-icon">✍️</span>模拟考</button>
    <button class="tab-btn" onclick="switchTab('stats')"><span class="tab-icon">📊</span>统计</button>
  </nav>'''

new_tab_nav = '''  <nav class="tab-nav">
    <button class="tab-btn active" id="tab-review" onclick="switchTab('review')"><span class="tab-icon">🔄</span>复习</button>
    <button class="tab-btn" onclick="switchTab('vocab')"><span class="tab-icon">📝</span>词汇</button>
    <button class="tab-btn" id="tab-exam" onclick="switchTab('exam')"><span class="tab-icon">✍️</span>模拟考</button>
    <button class="tab-btn" onclick="switchTab('stats')"><span class="tab-icon">📊</span>统计</button>
  </nav>'''

if old_tab_nav in html:
    html = html.replace(old_tab_nav, new_tab_nav)
    print("1. Tab Nav updated with review button as first tab")
else:
    print("1. WARNING: Tab Nav pattern not found!")

# ============================================================
# 步骤2: 在 panel-vocab 之前插入 panel-review HTML
# ============================================================
# 先把 panel-vocab 的 active class 去掉
html = html.replace(
    '  <div class="tab-panel active" id="panel-vocab">',
    '  <div class="tab-panel" id="panel-vocab">'
)
print("2a. Removed active from panel-vocab")

review_html = r'''
  <!-- ============ Tab 0: 复习 ============ -->
  <div class="tab-panel active" id="panel-review">
    <!-- 状态 A: 已完成，无需复习 -->
    <div id="reviewDoneState" style="display:none;">
      <div class="card" style="text-align:center;padding:40px 20px;">
        <div style="font-size:48px;margin-bottom:16px;">🎉</div>
        <h2 style="font-size:22px;color:var(--pink-700);margin-bottom:8px;">太棒了！昨日词汇全部掌握</h2>
        <p style="color:var(--text-light);font-size:14px;margin-bottom:20px;">你已经完全掌握了 <strong id="reviewDoneDate"></strong> 的所有词汇，无需复习！</p>
        <div style="font-size:48px;">💯</div>
      </div>
    </div>
    <!-- 状态 B: 复习前导页 -->
    <div id="reviewPre" style="display:none;">
      <div class="card exam-pre">
        <div class="exam-icon">🔄</div>
        <h2>词汇复习</h2>
        <p style="color:var(--text-light);margin:8px 0;">巩固昨天的学习成果</p>
        <div class="exam-info">
          <ul style="list-style:none;padding:0;">
            <li>📝 <strong>内容：</strong>昨日学习词汇 (<span id="reviewDateLabel"></span>)</li>
            <li>🎯 <strong>形式：</strong>看英文选中文释义（4选1）</li>
            <li>📊 <strong>数量：</strong><span id="reviewWordCount">--</span> 个单词</li>
            <li>💡 <strong>说明：</strong>优先复习薄弱词汇，直到全部掌握</li>
          </ul>
        </div>
        <button class="btn-start" id="btnStartReview" onclick="startReview()">🚀 开始复习</button>
        <p id="reviewHistoryHint" style="font-size:12px;color:var(--text-light);margin-top:12px;"></p>
      </div>
    </div>
    <!-- 状态 C: 复习进行中 -->
    <div id="reviewBody" style="display:none;">
      <div class="exam-header" style="background:linear-gradient(135deg,#6a1b9a,#8e24aa);">
        <div>
          <div class="exam-title">🔄 复习中 · <span id="reviewTitleDate"></span>词汇</div>
          <div style="font-size:11px;opacity:0.7;" id="reviewProgress">第 1 / 80 题</div>
        </div>
        <div class="timer-box" style="background:rgba(255,255,255,0.15);">
          <div class="timer-lbl">进度</div>
          <div id="reviewProgBar" style="font-size:18px;font-weight:900;">0%</div>
          <div class="timer-prog-wrap"><div id="reviewProgFill" style="height:100%;border-radius:2px;background:#ce93d8;transition:width 0.3s;width:0%;"></div></div>
        </div>
      </div>
      <div class="card" id="reviewQuizCard" style="text-align:center;padding:30px 20px;min-height:280px;">
        <div style="font-size:13px;color:var(--text-light);margin-bottom:12px;" id="reviewQNumber">第 1 题</div>
        <div style="font-size:36px;font-weight:800;color:var(--pink-700);margin-bottom:8px;letter-spacing:1px;" id="reviewWord"></div>
        <div style="font-size:14px;color:var(--text-light);margin-bottom:24px;" id="reviewPron"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:500px;margin:0 auto;" id="reviewOptions"></div>
        <div id="reviewFeedback" style="display:none;margin-top:20px;padding:14px;border-radius:12px;animation:fadeIn 0.3s ease;"></div>
        <div id="reviewNextBtn" style="display:none;margin-top:16px;"></div>
      </div>
    </div>
    <!-- 状态 D: 复习结果 -->
    <div id="reviewResult" style="display:none;">
      <div class="result-card" id="reviewResultCard">
        <h2 id="reviewResultTitle">复习完成 🎉</h2>
        <div class="big-score" id="reviewResultScore">0<span>%</span></div>
        <div class="grade-chip" id="reviewResultMsg"></div>
        <div class="score-detail">
          <div class="sd-item"><div class="sd-num" id="reviewCorrect">0</div><div class="sd-lbl">正确</div></div>
          <div class="sd-item"><div class="sd-num" id="reviewWrong">0</div><div class="sd-lbl">错误</div></div>
          <div class="sd-item"><div class="sd-num" id="reviewTotal">0</div><div class="sd-lbl">总题数</div></div>
        </div>
      </div>
      <div style="text-align:center;margin-top:12px;">
        <button class="btn-start" id="btnReviewAgain" onclick="startReviewAgain()" style="display:none;font-size:15px;padding:12px 36px;">🔄 继续复习（仅错题）</button>
      </div>
      <div class="card" id="reviewWrongList" style="display:none;margin-top:14px;">
        <div class="section-title"><span class="icon">❌</span>本次错误词汇</div>
        <div id="reviewWrongWords"></div>
      </div>
    </div>
  </div>
'''

# 在 panel-vocab 注释之前插入
old_vocab_comment = '  <!-- ============ Tab 1: 词汇 ============ -->'
if old_vocab_comment in html:
    html = html.replace(old_vocab_comment, '  <!-- ============ Tab 1: 词汇 ============ -->')
    # 更简单的方法：在 panel-vocab 的 div 之前插入
    anchor = '  <div class="tab-panel" id="panel-vocab">'
    html = html.replace(anchor, review_html + '\n' + anchor)
    print("2b. Panel-review HTML inserted before panel-vocab")
else:
    # fallback: 尝试其他锚点
    anchor = '<div class="tab-panel" id="panel-vocab">'
    if anchor in html:
        html = html.replace(anchor, review_html.strip() + '\n  ' + anchor)
        print("2b. Panel-review HTML inserted (fallback match)")
    else:
        print("2b. WARNING: Could not find panel-vocab anchor!")

# ============================================================
# 步骤3: 在 </style> 之前注入复习 CSS
# ============================================================
review_css = '''
/* ================================================================ */
/* 复习 Tab 样式 (V3.4)                                               */
/* ================================================================ */
.review-option-btn {
  display: block; width: 100%; padding: 14px 16px;
  border: 2px solid var(--pink-200);
  border-radius: 12px; background: var(--white);
  color: var(--text); font-size: 15px; font-weight: 600;
  cursor: pointer; transition: var(--transition); font-family: inherit;
  text-align: center; line-height: 1.5;
}
.review-option-btn:hover {
  border-color: var(--pink-400); background: var(--pink-50);
  transform: translateY(-2px); box-shadow: 0 4px 12px rgba(236,64,122,0.15);
}
.review-option-btn:active { transform: scale(0.97); }
.review-option-btn.correct-choice {
  border-color: #43a047; background: #e8f5e9;
  color: #2e7d32; box-shadow: 0 0 0 4px rgba(67,160,71,0.2);
  pointer-events: none;
}
.review-option-btn.wrong-choice {
  border-color: #e53935; background: #ffebee;
  color: #c62828; box-shadow: 0 0 0 4px rgba(229,57,53,0.2);
  pointer-events: none;
}
.review-option-btn.correct-reveal {
  border-color: #43a047; background: #c8e6c9;
  color: #2e7d32; pointer-events: none;
}
.review-feedback-correct {
  background: #e8f5e9; border-left: 4px solid #43a047;
}
.review-feedback-wrong {
  background: #ffebee; border-left: 4px solid #e53935;
}
.review-next-btn {
  background: linear-gradient(135deg, #8e24aa, #6a1b9a);
  color: white; border: none; border-radius: 50px;
  padding: 12px 36px; font-size: 15px; font-weight: 700;
  cursor: pointer; font-family: inherit;
  box-shadow: 0 4px 16px rgba(106,27,154,0.4);
  transition: var(--transition);
}
.review-next-btn:hover { transform: translateY(-2px); }
.review-next-btn:active { transform: scale(0.97); }
.review-wrong-word {
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 16px; margin-bottom: 8px;
  background: #fff5f5; border-radius: 10px;
  border-left: 4px solid #e53935;
}
.review-wrong-word .rw-word {
  font-size: 18px; font-weight: 800; color: var(--pink-700);
}
.review-wrong-word .rw-meaning {
  font-size: 14px; color: var(--text); font-weight: 600;
}
.review-wrong-word .rw-wrong-count {
  font-size: 11px; color: #e53935; font-weight: 700;
  background: #ffcdd2; padding: 2px 10px; border-radius: 12px;
}
@media(max-width:480px){
  .review-option-btn { font-size: 14px; padding: 12px; }
  #reviewWord { font-size: 28px; }
  #reviewOptions { grid-template-columns: 1fr; }
}
'''

if '</style>' in html:
    html = html.replace('</style>', review_css + '\n</style>')
    print("3. Review CSS injected before </style>")
else:
    print("3. WARNING: </style> not found!")

# ============================================================
# 步骤4: 在 </script> 之前注入复习 JS
# ============================================================
review_js = r'''
// ============================================================
// 复习模式 (V3.4) — 昨日词汇选择题复习系统
// ============================================================
// dateKey helper (removed by build_v3.py, needed by review + saveExamScore)
function dateKey(d) {
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
var reviewState = {
  words: [], currentIndex: 0,
  correctCount: 0, wrongCount: 0,
  wrongWords: [], isActive: false,
  isReviewAgain: false
};

function getReviewData() {
  try { return JSON.parse(localStorage.getItem('cet4_review_data') || '{}'); }
  catch(e) { return {}; }
}
function saveReviewData(data) {
  try { localStorage.setItem('cet4_review_data', JSON.stringify(data)); } catch(e) {}
}
function updateWordErrorCount(word, increment) {
  var data = getAllReviewData();
  if (!data.words) data.words = {};
  var prev = data.words[word] || 0;
  data.words[word] = prev + (increment ? 1 : 0);
  saveAllReviewData(data);
}
function markAllReviewMastered() {
  var data = getAllReviewData();
  data.completedRound = (data.completedRound || 0) + 1;
  data.lastMastered = true;
  saveAllReviewData(data);
}
function isAllReviewMastered() {
  var data = getAllReviewData();
  return !!(data.lastMastered);
}
function getAllReviewWords() {
  var all = [];
  var idx = dayIndex(currentDate);
  for (var i = 0; i < idx; i++) {
    all = all.concat(DAILY_WORDS[i]);
  }
  if (all.length > 100) {
    for (var i = all.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = all[i]; all[i] = all[j]; all[j] = tmp;
    }
    all = all.slice(0, 100);
  }
  return all;
}
function getAllLearnedDateRange() {
  var idx = dayIndex(currentDate);
  if (idx <= 0) return '';
  var s = new Date(START_DATE);
  var e = new Date(START_DATE.getTime() + (idx - 1) * MS_DAY);
  return formatDate(s) + ' ~ ' + formatDate(e);
}
function getReviewStorageKey() {
  return 'all_learned_review';
}
function getAllReviewData() {
  try { return JSON.parse(localStorage.getItem(getReviewStorageKey()) || '{}'); } catch(e) { return {}; }
}
function saveAllReviewData(data) {
  try { localStorage.setItem(getReviewStorageKey(), JSON.stringify(data)); } catch(e) {}
}
function generateOptions(correctWord, count) {
  count = count || 3;
  // 从 DAILY_WORDS + WORD_POOL 构建干扰项池
  var pool = [], seen = {};
  for (var d = 0; d < DAILY_WORDS.length; d++) {
    for (var w = 0; w < DAILY_WORDS[d].length; w++) {
      var word = DAILY_WORDS[d][w];
      if (!seen[word.w] && word.w !== correctWord.w) { pool.push(word); seen[word.w] = true; }
    }
  }
  for (var i = 0; i < WORD_POOL.length; i++) {
    if (!seen[WORD_POOL[i].w] && WORD_POOL[i].w !== correctWord.w) { pool.push(WORD_POOL[i]); seen[WORD_POOL[i].w] = true; }
  }
  for (var i = pool.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
  }
  var options = [correctWord].concat(pool.slice(0, count));
  for (var i = options.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = options[i]; options[i] = options[j]; options[j] = tmp;
  }
  return options;
}
function sortWordsForReview(words) {
  var data = getAllReviewData();
  var wordData = data.words || {};
  var weighted = words.map(function(w) {
    return { word: w, wrongCount: wordData[w.w] || 0 };
  });
  weighted.sort(function(a, b) {
    if (a.wrongCount !== b.wrongCount) return b.wrongCount - a.wrongCount;
    return Math.random() - 0.5;
  });
  return weighted.map(function(item) { return item.word; });
}
function startReview() {
  var allWords = getAllReviewWords();
  reviewState = {
    words: sortWordsForReview(allWords),
    currentIndex: 0, correctCount: 0, wrongCount: 0,
    wrongWords: [], isActive: true, isReviewAgain: false,
    reviewDateKey: dateKey(currentDate)
  };
  var pre = document.getElementById('reviewPre');
  var body = document.getElementById('reviewBody');
  var result = document.getElementById('reviewResult');
  var done = document.getElementById('reviewDoneState');
  if (pre) pre.style.display = 'none';
  if (body) body.style.display = 'block';
  if (result) result.style.display = 'none';
  if (done) done.style.display = 'none';
  var titleEl = document.getElementById('reviewTitleDate');
  if (titleEl) titleEl.textContent = getAllLearnedDateRange();
  renderReviewQuestion();
}
function startReviewAgain() {
  if (reviewState.wrongWords.length === 0) return;
  var wrongNames = reviewState.wrongWords.map(function(item) { return item.word; });
  var wrongVocab = [];
  for (var d = 0; d < DAILY_WORDS.length; d++) {
    for (var w = 0; w < DAILY_WORDS[d].length; w++) {
      if (wrongNames.indexOf(DAILY_WORDS[d][w].w) >= 0) wrongVocab.push(DAILY_WORDS[d][w]);
    }
  }
  reviewState = {
    words: sortWordsForReview(wrongVocab),
    currentIndex: 0, correctCount: 0, wrongCount: 0,
    wrongWords: [], isActive: true, isReviewAgain: true,
    reviewDateKey: dateKey(currentDate)
  };
  document.getElementById('reviewResult').style.display = 'none';
  document.getElementById('reviewBody').style.display = 'block';
  renderReviewQuestion();
}
function renderReviewQuestion() {
  if (reviewState.currentIndex >= reviewState.words.length) { finishReview(); return; }
  var word = reviewState.words[reviewState.currentIndex];
  var total = reviewState.words.length, cur = reviewState.currentIndex + 1;
  var progressEl = document.getElementById('reviewProgress');
  if (progressEl) progressEl.textContent = '第 ' + cur + ' / ' + total + ' 题';
  var pct = Math.round((reviewState.currentIndex / total) * 100);
  var progBar = document.getElementById('reviewProgBar');
  var progFill = document.getElementById('reviewProgFill');
  if (progBar) progBar.textContent = pct + '%';
  if (progFill) progFill.style.width = pct + '%';
  var qNum = document.getElementById('reviewQNumber');
  if (qNum) qNum.textContent = '第 ' + cur + ' 题';
  var wEl = document.getElementById('reviewWord');
  if (wEl) wEl.textContent = word.w;
  var pEl = document.getElementById('reviewPron');
  if (pEl) pEl.textContent = word.p || '';
  var options = generateOptions(word, 3);
  var optHTML = '';
  for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var escapedWord = opt.w.replace(/'/g, "\'");
    var escapedAttr = opt.w.replace(/"/g, '&quot;');
    optHTML += '<button class="review-option-btn" onclick="selectReviewOption(this,\'' + escapedWord + '\')" data-word="' + escapedAttr + '">' + opt.m + '</button>';
  }
  var oEl = document.getElementById('reviewOptions');
  if (oEl) oEl.innerHTML = optHTML;
  var fb = document.getElementById('reviewFeedback');
  if (fb) { fb.style.display = 'none'; fb.innerHTML = ''; }
  var nb = document.getElementById('reviewNextBtn');
  if (nb) { nb.style.display = 'none'; nb.innerHTML = ''; }
}
function selectReviewOption(btn, selectedWord) {
  var allBtns = document.querySelectorAll('#reviewOptions .review-option-btn');
  for (var i = 0; i < allBtns.length; i++) { allBtns[i].style.pointerEvents = 'none'; }
  var currentWord = reviewState.words[reviewState.currentIndex];
  var isCorrect = (selectedWord === currentWord.w);
  for (var i = 0; i < allBtns.length; i++) {
    if (allBtns[i].getAttribute('data-word') === currentWord.w) {
      allBtns[i].classList.add('correct-reveal');
    }
  }
  var fb = document.getElementById('reviewFeedback');
  if (!fb) return;
  fb.style.display = 'block';
  if (isCorrect) {
    btn.classList.add('correct-choice');
    reviewState.correctCount++;
    fb.className = 'review-feedback-correct';
    fb.innerHTML = '<div style="font-size:28px;margin-bottom:6px;">\u2705</div><div style="font-size:16px;font-weight:700;color:#2e7d32;">回答正确！</div><div style="font-size:14px;color:#333;margin-top:6px;font-weight:600;">' + currentWord.m + '</div>' + (currentWord.p ? '<div style="font-size:12px;color:#999;margin-top:2px;">' + currentWord.p + '</div>' : '') + (currentWord.ex ? '<div style="font-size:13px;color:#555;margin-top:8px;background:#f5f5f5;padding:10px 12px;border-radius:8px;line-height:1.7;">\uD83D\uDCD6 ' + currentWord.ex + (currentWord.excn ? '<br><span style="color:#888;">\u2B50 ' + currentWord.excn + '</span>' : '') + '</div>' : '') + (currentWord.c ? '<div style="font-size:12px;color:#ec407a;margin-top:4px;">\uD83D\uDCCC ' + currentWord.c + '</div>' : '');
    updateWordErrorCount(currentWord.w, false);
    setTimeout(function() { reviewState.currentIndex++; renderReviewQuestion(); }, 800);
  } else {
    btn.classList.add('wrong-choice');
    reviewState.wrongCount++;
    reviewState.wrongWords.push({ word: currentWord.w, correctMeaning: currentWord.m });
    updateWordErrorCount(currentWord.w, true);
    fb.className = 'review-feedback-wrong';
    fb.innerHTML = '<div style="font-size:28px;margin-bottom:6px;">\u274C</div><div style="font-size:16px;font-weight:700;color:#c62828;">回答错误</div><div style="font-size:14px;color:#333;margin-top:6px;font-weight:600;">正确答案：' + currentWord.m + '</div>' + (currentWord.p ? '<div style="font-size:12px;color:#999;margin-top:2px;">' + currentWord.p + '</div>' : '') + (currentWord.ex ? '<div style="font-size:13px;color:#555;margin-top:8px;background:#fff;padding:10px 12px;border-radius:8px;line-height:1.7;border:1px solid #eee;">\uD83D\uDCD6 ' + currentWord.ex + (currentWord.excn ? '<br><span style="color:#888;">\u2B50 ' + currentWord.excn + '</span>' : '') + '</div>' : '') + (currentWord.c ? '<div style="font-size:12px;color:#ec407a;margin-top:4px;">\uD83D\uDCCC ' + currentWord.c + '</div>' : '');
    var nb = document.getElementById('reviewNextBtn');
    if (nb) {
      nb.style.display = 'block';
      nb.innerHTML = '<button class="review-next-btn" onclick="goToNextReviewQuestion()">下一题 \u25B6</button>';
    }
  }
}
function goToNextReviewQuestion() { reviewState.currentIndex++; renderReviewQuestion(); }
function finishReview() {
  reviewState.isActive = false;
  var total = reviewState.words.length, correct = reviewState.correctCount;
  var wrong = reviewState.wrongCount, pct = Math.round((correct / total) * 100);
  var body = document.getElementById('reviewBody');
  var result = document.getElementById('reviewResult');
  if (body) body.style.display = 'none';
  if (!result) return;
  result.style.display = 'block';
  var cardEl = document.getElementById('reviewResultCard');
  var titleEl = document.getElementById('reviewResultTitle');
  var msgEl = document.getElementById('reviewResultMsg');
  var againBtn = document.getElementById('btnReviewAgain');
  if (pct === 100) {
    if (cardEl) cardEl.className = 'result-card excellent';
    if (titleEl) titleEl.textContent = '完美通关 \uD83C\uDF1F';
    if (msgEl) msgEl.textContent = '太棒了！昨天的单词全部掌握！';
    if (againBtn) againBtn.style.display = 'none';
    markAllReviewMastered();
  } else if (pct >= 80) {
    if (cardEl) cardEl.className = 'result-card good';
    if (titleEl) titleEl.textContent = '表现不错 \uD83D\uDC4D';
    if (msgEl) msgEl.textContent = '很不错，继续加油！';
    if (againBtn) againBtn.style.display = 'block';
  } else if (pct >= 60) {
    if (cardEl) cardEl.className = 'result-card fair';
    if (titleEl) titleEl.textContent = '仍需努力 \uD83D\uDCDA';
    if (msgEl) msgEl.textContent = '还需要多背背哦，不要灰心！';
    if (againBtn) againBtn.style.display = 'block';
  } else {
    if (cardEl) cardEl.className = 'result-card poor';
    if (titleEl) titleEl.textContent = '需要加强 \uD83D\uDCAA';
    if (msgEl) msgEl.textContent = '错误较多，建议再背一轮昨天的词汇！';
    if (againBtn) againBtn.style.display = 'block';
  }
  var scoreEl = document.getElementById('reviewResultScore');
  if (scoreEl) scoreEl.innerHTML = pct + '<span>%</span>';
  var rcEl = document.getElementById('reviewCorrect');
  if (rcEl) rcEl.textContent = correct;
  var rwEl = document.getElementById('reviewWrong');
  if (rwEl) rwEl.textContent = wrong;
  var rtEl = document.getElementById('reviewTotal');
  if (rtEl) rtEl.textContent = total;
  var wrongListEl = document.getElementById('reviewWrongList');
  var wrongWordsEl = document.getElementById('reviewWrongWords');
  if (reviewState.wrongWords.length > 0) {
    if (wrongListEl) wrongListEl.style.display = 'block';
    if (wrongWordsEl) {
      var data = getAllReviewData();
      var html = '';
      for (var i = 0; i < reviewState.wrongWords.length; i++) {
        var item = reviewState.wrongWords[i];
        var cnt = (data.words && data.words[item.word]) || 1;
        html += '<div class="review-wrong-word"><div><div class="rw-word">' + item.word + '</div><div class="rw-meaning">' + item.correctMeaning + '</div></div><div class="rw-wrong-count">错误 ' + cnt + ' 次</div></div>';
      }
      wrongWordsEl.innerHTML = html;
    }
  } else {
    if (wrongListEl) wrongListEl.style.display = 'none';
  }
}
function renderReviewPanel() {
  var idx = dayIndex(currentDate);
  if (idx < 1) return;
  // 如果日期变了，重置进行中的复习状态
  if (reviewState.isActive && reviewState.reviewDateKey !== dateKey(currentDate)) {
    reviewState.isActive = false;
    reviewState.words = [];
  }
  var doneEl = document.getElementById('reviewDoneState');
  var preEl = document.getElementById('reviewPre');
  var bodyEl = document.getElementById('reviewBody');
  var resultEl = document.getElementById('reviewResult');
  if (reviewState.isActive) {
    if (doneEl) doneEl.style.display = 'none';
    if (preEl) preEl.style.display = 'none';
    if (bodyEl) bodyEl.style.display = 'block';
    if (resultEl) resultEl.style.display = 'none';
    return;
  }
  if (isAllReviewMastered()) {
    if (doneEl) doneEl.style.display = 'block';
    if (preEl) preEl.style.display = 'none';
    if (bodyEl) bodyEl.style.display = 'none';
    if (resultEl) resultEl.style.display = 'none';
    var doneDateEl = document.getElementById('reviewDoneDate');
    if (doneDateEl) doneDateEl.textContent = getAllLearnedDateRange();
    return;
  }
  if (doneEl) doneEl.style.display = 'none';
  if (preEl) preEl.style.display = 'block';
  if (bodyEl) bodyEl.style.display = 'none';
  if (resultEl) resultEl.style.display = 'none';
  var allWords = getAllReviewWords();
  var dlEl = document.getElementById('reviewDateLabel');
  if (dlEl) dlEl.textContent = getAllLearnedDateRange();
  var cEl = document.getElementById('reviewWordCount');
  if (cEl) cEl.textContent = allWords.length;
  var hEl = document.getElementById('reviewHistoryHint');
  if (hEl) {
    var data = getAllReviewData();
    var completed = data.completedRound || 0;
    var wrongCount = 0;
    if (data.words) { var keys = Object.keys(data.words); for (var k = 0; k < keys.length; k++) { if (data.words[keys[k]] > 0) wrongCount++; } }
    var parts = [];
    if (completed > 0) parts.push('已完成 ' + completed + ' 轮复习');
    if (wrongCount > 0) parts.push('还有 ' + wrongCount + ' 个薄弱词汇');
    hEl.textContent = parts.length > 0 ? '历史：' + parts.join('，') : '';
  }
}
'''

if '</script>' in html:
    html = html.replace('</script>', review_js + '\n</script>')
    print("4. Review JS injected before </script>")
else:
    print("4. WARNING: </script> not found!")

# ============================================================
# 步骤5: 修改 switchTab() 函数
# ============================================================
old_switchTab = '''function switchTab(name) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + name).classList.add('active');
  const map = { vocab:0, exam:1, stats:2 };
  document.querySelectorAll('.tab-btn')[map[name]].classList.add('active');
}'''

new_switchTab = '''function switchTab(name) {
  document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
  document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('panel-' + name).classList.add('active');
  var map = { review:0, vocab:1, exam:2, stats:3 };
  document.querySelectorAll('.tab-btn')[map[name]].classList.add('active');
  if (name === 'review') { renderReviewPanel(); }
}'''

if old_switchTab in html:
    html = html.replace(old_switchTab, new_switchTab)
    print("5. switchTab() updated (map extended to 4 tabs)")
else:
    print("5. WARNING: switchTab() pattern not found!")
    # fallback: try with arrow function style
    old_switchTab2 = '''function switchTab(name) {
  document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
  document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('panel-' + name).classList.add('active');
  const map = { vocab:0, exam:1, stats:2 };
  document.querySelectorAll('.tab-btn')[map[name]].classList.add('active');
}'''
    if old_switchTab2 in html:
        html = html.replace(old_switchTab2, new_switchTab)
        print("5. switchTab() updated (fallback match)")

# ============================================================
# 步骤6: 修改 updateUI() — 添加复习 Tab 可见性控制
# ============================================================
old_updateui_end = '''    renderDailyQuiz();
    updateDailyStats();
  }
}'''

new_updateui_end = '''    renderDailyQuiz();
    updateDailyStats();
  }

  // === 复习 Tab 可见性控制 (V3.4) ===
  var tabReview = document.getElementById('tab-review');
  if (tabReview) {
    if (idx < 1) { tabReview.style.display = 'none'; }
    else {
      tabReview.style.display = '';
      renderReviewPanel();
    }
  }
}'''

if old_updateui_end in html:
    html = html.replace(old_updateui_end, new_updateui_end)
    print("6. updateUI() updated with review tab visibility control")
else:
    print("6. WARNING: updateUI() end pattern not found!")

# ============================================================
# 步骤7: 修改 DOMContentLoaded 默认激活复习 Tab
# ============================================================
old_init = '''document.addEventListener('DOMContentLoaded', () => {
  // 确保今天的词汇已生成
  getDailyVocab(TODAY);
  updateUI();
});'''

new_init = '''document.addEventListener('DOMContentLoaded', function() {
  getDailyVocab(TODAY);
  updateUI();
  if (dayIndex(TODAY) >= 1) { switchTab('review'); }
});'''

if old_init in html:
    html = html.replace(old_init, new_init)
    print("7. DOMContentLoaded updated: default to review tab if dayIndex>=1")
elif '''document.addEventListener('DOMContentLoaded', function() {
  getDailyVocab(TODAY);
  updateUI();
});''' in html:
    # build_v34 already applied? try function() style
    html = html.replace(
        '''document.addEventListener('DOMContentLoaded', function() {
  getDailyVocab(TODAY);
  updateUI();
});''',
        new_init
    )
    print("7. DOMContentLoaded updated (function style match)")
else:
    print("7. WARNING: DOMContentLoaded pattern not found!")
    # try broader match
    if 'DOMContentLoaded' in html:
        print("7. DOMContentLoaded found but exact pattern mismatch - trying regex")
        match = re.search(r"document\.addEventListener\('DOMContentLoaded',[^}]+updateUI\(\);\s*\n\s*\}\);", html)
        if match:
            html = html.replace(match.group(), new_init)
            print("7. DOMContentLoaded updated (regex match)")

# ============================================================
# 验证
# ============================================================
s = html.find('<script>')
e = html.find('</script>')
js_content = html[s:e]
braces_open = js_content.count('{')
braces_close = js_content.count('}')
balanced = braces_open == braces_close
print(f"\nAfter: JS braces {braces_open} vs {braces_close} balanced={balanced}")
if not balanced:
    print(f"WARNING: Brace mismatch by {braces_open - braces_close}!")

# 验证关键注入点
checks = ['panel-review', 'review-option-btn', 'startReview', 'finishReview',
          'switchTab', 'tab-review', 'renderReviewPanel', 'reviewDoneState']
for check in checks:
    found = check in js_content
    print(f"  {check}: {'OK' if found else 'MISSING'}")

# 保存
with open(path, 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\nDone! Final size: {len(html)} bytes")
print("V3.4 review module injected:")
print("  1. Review tab button added (first tab)")
print("  2. Panel-review HTML with 4 states (done/pre/body/result)")
print("  3. Review CSS injected (option buttons, feedback, wrong-word cards)")
print("  4. Review JS injected (full quiz system with localStorage tracking)")
print("  5. switchTab() extended to 4-tab map")
print("  6. updateUI() controls review tab visibility")
print("  7. Default tab = review (dayIndex>=1)")
