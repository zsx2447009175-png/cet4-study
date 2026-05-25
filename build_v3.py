"""
V3 Builder - 构建四级学习网站 V3
改动:
1. 日期从5/21开始, 早9点前算前一天
2. 不背单词风格词卡
3. 按天数分片, 单词题目不重复
4. 每日寄语轮换
"""
import re, os

PATH = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'

with open(PATH, 'r', encoding='utf-8') as f:
    html = f.read()

# ==========================================
# 1. 替换全局变量区: 添加日期系统和寄语系统
# ==========================================

# 找到 "// 日期相关" 部分并替换
old_date_section = '''// ============================================================
// 日期相关
// ============================================================
const TODAY = new Date(2026, 4, 21); // May 21, 2026
let currentDate = new Date(TODAY);
let vocabForDate = {};  // 缓存：{"2026-05-21": [word1,...]}
const VOCAB_PER_PAGE = 12;
const DAILY_VOCAB_COUNT = 80;'''

new_date_section = '''// ============================================================
// 日期系统 (V3)
// ============================================================
const START_DATE = new Date(2026, 4, 21); // May 21, 2026 - 第一天
const MS_DAY = 86400000;

function getEffectiveNow() {
  const now = new Date();
  if (now.getHours() < 9) now.setDate(now.getDate() - 1);
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}
const TODAY = getEffectiveNow();
function dayIndex(d) { return Math.floor((d.getTime() - START_DATE.getTime()) / MS_DAY); }
let currentDate = new Date(TODAY);
const VOCAB_PER_PAGE = 12;

// 每日寄语 (32条轮换)
const DAILY_QUOTES = [
  "今天的每一份努力，都是明天更好的自己",
  "坚持就是胜利，四级必过！",
  "每天进步一点点，日积月累见成效",
  "学如逆水行舟，不进则退",
  "今天的目标：掌握80个核心词汇",
  "你只管努力，剩下的交给时间",
  "不背单词，何以过四级？",
  "知识是最好的化妆品",
  "每一个早起背单词的你都在闪闪发光",
  "四级不难，难的是坚持",
  "蜕变从每天的积累开始",
  "学习是一场马拉松，不是短跑",
  "睡前复习一遍，记忆更牢固",
  "认真学习的女孩最美",
  "好运藏在努力里",
  "今天的汗水是明天的钻石",
  "让英语成为你的旋律",
  "词汇量是通往高分的钥匙",
  "不积跬步，无以至千里",
  "翻过四级这座山，前面是更广阔的天地",
  "每天的坚持都不会被辜负",
  "新的一天，新的80个单词",
  "学习的快乐在于看到自己的进步",
  "自由来自自律",
  "为你准备了今天的学习内容，加油！",
  "一天一个脚印，四级就在脚下",
  "慢慢来，比较快",
  "学习也可以是快乐的旅程",
  "背完这80个单词，离目标又近了一步",
  "你比你想象的更强大",
  "做闪闪发光的自己",
  "每一朵花开都需要时间，学习也是"
];
function getDailyQuote(d) { return DAILY_QUOTES[dayIndex(d) % DAILY_QUOTES.length]; }'''

html = html.replace(old_date_section, new_date_section)
print("1. Date system updated")

# ==========================================
# 2. 替换词库生成: 从 seeded 改为 day-indexed
# ==========================================

old_vocab_gen = '''// 基于日期的伪随机数生成器
function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h) + seed.charCodeAt(i);
    h |= 0;
  }
  return function() {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    return h / 0x7fffffff;
  };
}

// 为指定日期生成词汇
function generateVocabForDate(d) {
  const key = dateKey(d);
  if (vocabForDate[key]) return vocabForDate[key];

  const rng = seededRandom(key);
  // Fisher-Yates shuffle on copy
  const pool = [...WORD_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  const selected = pool.slice(0, Math.min(DAILY_VOCAB_COUNT, pool.length));
  vocabForDate[key] = selected;
  saveVocabCache();
  return selected;
}'''

new_vocab_gen = r'''// 基于日期的伪随机数生成器（day≥1用，day0不参与洗牌）
function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = ((h << 5) - h) + seed.charCodeAt(i);
    h |= 0;
  }
  return function() {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    return h / 0x7fffffff;
  };
}

// 词汇缓存：保证同一天词汇固定、不同天不重复
let vocabForDate = {};
function getDailyVocab(d) {
  const key = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  if (vocabForDate[key]) return vocabForDate[key];

  const idx = dayIndex(d);
  if (idx === 0) {
    // 5/21: 固定 80 词，从 WORD_POOL 开头取（A→B 顺序）
    vocabForDate[key] = WORD_POOL.slice(0, 80);
    return vocabForDate[key];
  }

  // 5/22+: 随机 100 词，排除之前用过的词
  const used = new Set();
  for (let i = 0; i < idx; i++) {
    const prevDate = new Date(START_DATE.getTime() + i * MS_DAY);
    const prevKey = prevDate.getFullYear()+'-'+String(prevDate.getMonth()+1).padStart(2,'0')+'-'+String(prevDate.getDate()).padStart(2,'0');
    if (vocabForDate[prevKey]) {
      vocabForDate[prevKey].forEach(function(w) { used.add(w.w); });
    } else {
      // 如果之前的还没生成，先触发生成
      getDailyVocab(prevDate).forEach(function(w) { used.add(w.w); });
    }
  }

  const available = WORD_POOL.filter(function(w) { return !used.has(w.w); });
  const rng = seededRandom(key);
  for (let i = available.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    var tmp = available[i]; available[i] = available[j]; available[j] = tmp;
  }
  vocabForDate[key] = available.slice(0, Math.min(100, available.length));
  return vocabForDate[key];
}'''

html = html.replace(old_vocab_gen, new_vocab_gen)
print("2. Vocab generation updated")

# ==========================================
# 3. 替换缓存相关代码
# ==========================================

# Remove localStorage cache functions
html = html.replace('''// 从 localStorage 加载
function loadVocabCache() {
  try {
    const data = localStorage.getItem('cet4_vocab_cache');
    if (data) vocabForDate = JSON.parse(data);
  } catch(e) { vocabForDate = {}; }
}
function saveVocabCache() {
  try {
    localStorage.setItem('cet4_vocab_cache', JSON.stringify(vocabForDate));
  } catch(e) { /* ignore quota errors */ }
}
loadVocabCache();
''', '// V3: no cache needed - vocab is deterministically generated from date\n')

# Remove dateKey function reference
html = html.replace('''function dateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function formatDate(d) {
  return `${d.getFullYear()}年${String(d.getMonth()+1).padStart(2,'0')}月${String(d.getDate()).padStart(2,'0')}日`;
}''', '''function formatDate(d) {
  return d.getFullYear()+'年'+String(d.getMonth()+1).padStart(2,'0')+'月'+String(d.getDate()).padStart(2,'0')+'日';
}''')

print("3. Cache removed")

# ==========================================
# 4. 修改 getCurrentVocab 调用
# ==========================================
html = html.replace('return generateVocabForDate(currentDate);', 'return getDailyVocab(currentDate);')
html = html.replace('generateVocabForDate(TODAY);', 'getDailyVocab(TODAY);')
print("4. getCurrentVocab fixed")

# ==========================================
# 5. 修改日期导航: 限制不能早于 START_DATE
# ==========================================
old_change_day = '''function changeDay(delta) {
  const next = new Date(currentDate);
  next.setDate(next.getDate() + delta);
  if (next > TODAY) return; // 不能超过今天
  currentDate = next;
  filteredVocab = [];
  vocabPage = 1;
  updateUI();
}'''

new_change_day = '''function changeDay(delta) {
  const next = new Date(currentDate);
  next.setDate(next.getDate() + delta);
  if (next > TODAY) return; // 不能超过今天
  if (next < START_DATE) return; // 不能早于第一天
  currentDate = next;
  filteredVocab = [];
  vocabPage = 1;
  updateUI();
}'''

html = html.replace(old_change_day, new_change_day)
print("5. Date restriction added")

# ==========================================
# 6. 更新 UI: 添加天数和寄语
# ==========================================
old_update_ui = '''function updateUI() {
  document.getElementById('dateLabel').textContent = formatDate(currentDate);
  document.getElementById('sweetNoteDate').textContent = formatDate(TODAY);
  document.getElementById('examDateLabel').textContent = formatDate(currentDate);
  renderVocab();
  // 更新统计
  document.getElementById('statVocab').textContent = getCurrentVocab().length;
  // 更新历史成绩
  renderHistoryScores();
}'''

new_update_ui = '''function updateUI() {
  document.getElementById('dateLabel').textContent = formatDate(currentDate);
  document.getElementById('sweetNoteDate').textContent = formatDate(TODAY);
  document.getElementById('examDateLabel').textContent = formatDate(currentDate);
  // 更新天数和寄语
  var dn = dayIndex(currentDate) + 1;
  var sweet = document.getElementById('sweet-note');
  if (sweet) sweet.textContent = getDailyQuote(currentDate);
  renderVocab();
  document.getElementById('statVocab').textContent = getCurrentVocab().length;
  renderHistoryScores();
}'''

html = html.replace(old_update_ui, new_update_ui)
print("6. UI update enhanced")

# ==========================================
# 6.5. 注入词卡交互 CSS
# ==========================================
wordcard_css = '''
/* 词卡交互样式 */
.word-card.wcard { cursor: pointer; user-select: none; transition: all 0.2s; }
.word-card.wcard:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,0.1), 0 0 0 1px rgba(236,64,122,0.2); }
.word-card.wcard.revealed { background: #fafafa; border-left: 0; }
.word-meaning.hidden, .word-ex.hidden, .word-excn.hidden, .word-colloc.hidden { display: none; }
.word-card.wcard.revealed .hidden { display: block; }
.word-card.wcard.revealed .click-hint { display: none; }
.word-en { transition: color 0.2s; }
.word-en:hover { color: #ec407a !important; }
.word-en:hover .audio-icon { color: #ec407a; transform: scale(1.2); display: inline-block; }
.audio-icon { display: inline-block; transition: all 0.15s; }
'''
html = html.replace('</style>', wordcard_css + '\n</style>')
print("6.5. Word card CSS injected")

# ==========================================
# 7. 替换词卡样式: 不背单词风格 + 交互
# ==========================================

old_vocab_render = '''grid.innerHTML = page.map((v, i) => `
    <div class="word-card">
      <span class="word-num">#${start + i + 1}</span>
      <div class="word-en">${v.w}</div>
      <div class="word-pron">${v.p}</div>
      <div class="word-meaning">${v.m}</div>
      ${v.c ? `<div class="word-collocation">${v.c}</div>` : ''}
    </div>
  `).join('');'''

new_vocab_render = '''grid.innerHTML = page.map(function(v, i) {
    var tag = v.m ? v.m.split(' ')[0].replace(/[,;]/g,'') : '';
    return '<div class="word-card wcard" onclick="toggleMeaning(this)" style="background:var(--w);border-radius:16px;padding:20px 18px 18px;margin-bottom:12px;box-shadow:0 1px 8px rgba(0,0,0,0.06),0 0 0 1px rgba(0,0,0,0.02);border-left:0;position:relative;overflow:hidden;cursor:pointer;">' +
      '<span class="word-num" style="position:absolute;top:12px;left:14px;font-size:11px;color:#ccc;font-weight:700;">#' + (start + i + 1) + '</span>' +
      '<span class="bookmark-star" data-word="' + v.w.replace(/"/g,'&quot;') + '" onclick="event.stopPropagation();toggleBookmark(this.getAttribute(\\'data-word\\'),this)" style="position:absolute;top:10px;right:14px;font-size:18px;color:#ffc107;cursor:pointer;user-select:none;" title="\u6536\u85CF\u8FD9\u4E2A\u5355\u8BCD">\u2606</span>' +
      '<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;">' +
        '<div class="word-title-row" style="display:flex;align-items:center;gap:8px;">' +
          '<span class="word-en" onclick="event.stopPropagation();speakWord(\\'' + v.w.replace(/'/g,"\\\\'") + '\\')" title="\\u{1F50A} \\u70B9\\u51FB\\u64AD\\u653E\\u53D1\\u97F3" style="font-size:22px;font-weight:800;color:#1a1a2e;letter-spacing:0.3px;cursor:pointer;">' + v.w + ' <span class="audio-icon" style="font-size:14px;color:#999;vertical-align:middle;">\\u{1F50A}</span></span>' +
          (tag ? '<span style="font-size:11px;background:#e8eaf6;color:#3949ab;padding:2px 10px;border-radius:10px;font-weight:600;white-space:nowrap;">' + tag + '</span>' : '') +
        '</div>' +
      '</div>' +
      '<div style="font-size:13px;color:#999;margin-bottom:12px;letter-spacing:0.5px;">' + v.p + '</div>' +
      '<div class="word-meaning hidden" style="font-size:16px;color:#333;font-weight:600;margin-bottom:8px;">' + v.m + '</div>' +
      (v.ex ? '<div style="height:1px;background:linear-gradient(90deg,transparent,#e0e0e0,transparent);margin:10px 0;"></div><div class="word-ex hidden" style="font-size:13px;color:#555;font-style:italic;line-height:1.7;margin-bottom:4px;">\\u201C' + v.ex + '\\u201D</div>' : '') +
      (v.excn ? '<div class="word-excn hidden" style="font-size:12px;color:#999;margin-bottom:8px;">' + v.excn + '</div>' : '') +
      (v.c ? '<div class="word-colloc hidden" style="font-size:12px;color:#ec407a;padding:4px 0;">\\u{1F4CC} ' + v.c + '</div>' : '') +
      '<div class="click-hint" style="font-size:11px;color:#bbb;text-align:center;margin-top:6px;">\\u{1F446} \\u70B9\\u51FB\\u67E5\\u770B\\u542B\\u4E49 / \\u70B9\\u51FB\\u5355\\u8BCD\\u64AD\\u653E\\u53D1\\u97F3</div>' +
    '</div>';
  }).join('');'''

html = html.replace(old_vocab_render, new_vocab_render)
print("7. Word cards redesigned")

# ==========================================
# 7.5. 注入词卡交互 JS
# ==========================================
interactive_js = '''
// ============================================================
// 词卡交互：点击切换含义、点击播放发音
// ============================================================
function toggleMeaning(card) {
  card.classList.toggle("revealed");
}
function speakWord(word) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(word);
  u.lang = "en-US";
  u.rate = 0.85;
  window.speechSynthesis.speak(u);
}
// 初始化所有收藏星标的状态
function initBookmarkStars() {
  try {
    var list = JSON.parse(localStorage.getItem('cet4_bookmarks') || '[]');
    var stars = document.querySelectorAll('.bookmark-star');
    for (var i = 0; i < stars.length; i++) {
      var w = stars[i].getAttribute('data-word');
      if (list.indexOf(w) >= 0) {
        stars[i].textContent = '\u2605';
        stars[i].title = '\u53D6\u6D88\u6536\u85CF';
      } else {
        stars[i].textContent = '\u2606';
        stars[i].title = '\u6536\u85CF\u8FD9\u4E2A\u5355\u8BCD';
      }
    }
  } catch(e) {}
}
'''
# 在 renderVocab 函数结束后插入
html = html.replace('function changeDay(delta) {', interactive_js + '\nfunction changeDay(delta) {')
print("7.5. Interactive word card JS injected")

# ==========================================
# 8. 注入例句到词库数据
# ==========================================
# Add example sentences to existing words
example_map = {
    "abandon": ["He abandoned his plan halfway.", "他中途放弃了他的计划。"],
    "accomplish": ["She accomplished the task on time.", "她按时完成了任务。"],
    "accumulate": ["He accumulated wealth over years.", "他多年积累财富。"],
    "acquire": ["She acquired new skills quickly.", "她很快掌握了新技能。"],
    "adapt": ["He adapted to the new environment.", "他适应了新环境。"],
    "allocate": ["Funds were allocated to education.", "资金被分配给了教育。"],
    "alternative": ["We need an alternative approach.", "我们需要替代方案。"],
    "analyze": ["We need to analyze the results.", "我们需要分析结果。"],
    "appreciate": ["I appreciate your efforts.", "我感谢你的努力。"],
    "approach": ["A different approach is needed.", "需要不同的方法。"],
    "appropriate": ["That is not appropriate behavior.", "那是不恰当行为。"],
    "assess": ["We need to assess the situation.", "我们需要评估情况。"],
    "available": ["The service is available online.", "该服务可在线使用。"],
    "beneficial": ["Exercise is beneficial to health.", "运动有益健康。"],
    "capable": ["She is capable of leading.", "她有能力领导。"],
    "competitive": ["The industry is highly competitive.", "这个行业竞争激烈。"],
    "complex": ["It's a complex situation.", "情况复杂。"],
    "concentrate": ["Concentrate on your work.", "专注你的工作。"],
    "confident": ["She is confident about the exam.", "她对考试有信心。"],
    "consequence": ["He faced the consequences.", "他承担了后果。"],
    "consistent": ["Be consistent in your efforts.", "保持努力的一致性。"],
    "contribute": ["Everyone contributed ideas.", "每个人都贡献了想法。"],
    "crucial": ["This is a crucial decision.", "这是关键决定。"],
    "current": ["What is your current job?", "你现在做什么工作？"],
    "decline": ["Sales declined sharply.", "销售额急剧下降。"],
    "demonstrate": ["He demonstrated the product.", "他演示了产品。"],
    "derive": ["The word derives from Latin.", "该词源自拉丁语。"],
    "deserve": ["You deserve a break.", "你该休息了。"],
    "detail": ["Explain it in detail.", "详细解释。"],
    "determine": ["She is determined to succeed.", "她决心成功。"],
    "device": ["Turn off your device.", "关闭你的设备。"],
    "differ": ["Opinions differ on this.", "对此意见不一。"],
    "digital": ["We live in the digital age.", "我们生活在数字时代。"],
    "distinct": ["There are two distinct types.", "有两种截然不同的类型。"],
    "dominate": ["The company dominates the industry.", "这家公司主导行业。"],
    "doubt": ["There is no doubt about it.", "毫无疑问。"],
    "eliminate": ["We need to eliminate waste.", "我们需要消除浪费。"],
    "emphasize": ["She emphasized the key points.", "她强调了要点。"],
    "enable": ["Technology enables us to connect.", "技术使我们能够连接。"],
    "enhance": ["It enhances the experience.", "它提升了体验。"],
    "enormous": ["It took an enormous effort.", "这花了巨大的努力。"],
    "ensure": ["We must ensure quality.", "我们必须确保质量。"],
    "environment": ["Protect the environment.", "保护环境。"],
    "establish": ["They established new rules.", "他们制定了新规则。"],
    "estimate": ["It is estimated that...", "据估计..."],
    "evaluate": ["We need to evaluate performance.", "我们需要评估绩效。"],
    "evidence": ["There is no evidence.", "没有证据。"],
    "evolve": ["The species evolved over time.", "该物种随时间进化。"],
    "exceed": ["Do not exceed the speed limit.", "不要超速。"],
    "exchange": ["They exchanged contact info.", "他们交换了联系方式。"],
    "exclude": ["No one should be excluded.", "任何人不应被排除。"],
    "execute": ["The plan was executed perfectly.", "计划执行得很完美。"],
    "expand": ["The company is expanding.", "公司在扩张。"],
    "expect": ["What do you expect?", "你期望什么？"],
    "expense": ["Living expenses are rising.", "生活费用在上涨。"],
    "explore": ["Let's explore the possibilities.", "让我们探索可能性。"],
    "expose": ["Don't expose it to sunlight.", "不要暴露在阳光下。"],
    "external": ["External pressure is mounting.", "外部压力在增加。"],
}

# Inject examples into word data
for word, ex in example_map.items():
    # Find the word entry and add example
    old_pat = f'w:"{word}",'
    if old_pat in html and f'ex:"{ex[0]}",' not in html:
        import re
        pattern = re.escape(f'w:"{word}",p:')
        html = re.sub(
            pattern,
            f'w:"{word}",ex:"{ex[0]}",excn:"{ex[1]}",p:',
            html
        )

print(f"8. Injected {len(example_map)} example sentences")

# ==========================================
# 9. 更新 sweet-note 的 class 引用
# ==========================================
html = html.replace('class="sweet-note"', 'id="sweet-note" class="sweet-note"')
html = html.replace('class="sweet-note"', 'id="sweet-note" class="sweet-note"')  # second occurrence
# Fix: the hero section has sweet-note, update it
html = html.replace('<div class="sweet-note">', '<div id="sweet-note" class="sweet-note">')
# Update initial sweet note with dynamic quote
html = html.replace('✨ 今天的每一份努力，都是明天更好的自己',
                    '<span id="sweetText">✨ 今天的每一份努力，都是明天更好的自己</span>')

# Set sweet note on load
old_init = '''  // 确保今天的词汇已生成
  generateVocabForDate(TODAY);
  updateUI();'''

new_init = '''  getDailyVocab(TODAY);
  updateUI();
  // 设置今日寄语
  var sn = document.getElementById("sweet-note");
  if (sn) sn.textContent = getDailyQuote(TODAY);'''

html = html.replace(old_init, new_init)
print("9. Sweet note dynamic")

# ==========================================
# 10. Remove old exercise script scoring (keep exercise data, just update exam tab)
# No changes needed to exercises - they're fine as-is
# ==========================================

# Save
with open(PATH, 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\nDone! Final size: {len(html)} bytes")
print("V3 changes applied:")
print("  1. Date restricted to 5/21+, 9AM cutoff")
print("  2. Day-indexed vocab (no repeats)")
print("  3. Word cards in 不背单词 style with examples")
print("  4. Daily quotes rotation")
