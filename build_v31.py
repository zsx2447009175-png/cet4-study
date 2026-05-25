"""
V3.1 - 背单词增强: 1.点击显隐释义 2.点击朗读发音
"""
path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# ============================================================
# 1. 添加语音朗读函数 (JS)
# ============================================================
speak_func = '''
// === 单词发音 ===
function speakWord(word) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(word);
  u.lang = 'en-US';
  u.rate = 0.85;
  u.pitch = 1;
  speechSynthesis.speak(u);
}
// === 释义显隐 ===
function toggleMeaning(card) {
  var hidden = card.querySelector('.wc-hidden');
  if (hidden) {
    hidden.classList.toggle('wc-visible');
  }
}
'''
# Insert after contains function
html = html.replace('function contains(text, word)',
                     speak_func + '\nfunction contains(text, word)')
print("1. Added speakWord and toggleMeaning functions")

# ============================================================
# 2. 修改词卡渲染: 默认隐藏释义, 添加发音按钮
# ============================================================
old_card = '''grid.innerHTML = page.map((v, i) => `
    <div class="word-card" style="background:var(--w);border-radius:16px;padding:20px 18px 18px;margin-bottom:12px;box-shadow:0 1px 8px rgba(0,0,0,0.06),0 0 0 1px rgba(0,0,0,0.02);border-left:0;position:relative;overflow:hidden;">
      <span class="word-num" style="position:absolute;top:12px;right:14px;font-size:11px;color:#ccc;font-weight:700;">#${start + i + 1}</span>
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:10px;">
        <div style="font-size:22px;font-weight:800;color:#1a1a2e;letter-spacing:0.3px;">${v.w}</div>
        ${v.m ? '<span style="font-size:11px;background:#e8eaf6;color:#3949ab;padding:2px 10px;border-radius:10px;font-weight:600;white-space:nowrap;margin-top:4px;">' + v.m.split(' ')[0].replace(/[,;]/g,'') + '</span>' : ''}
      </div>
      <div style="font-size:13px;color:#999;margin-bottom:12px;letter-spacing:0.5px;">${v.p}</div>
      <div style="font-size:16px;color:#333;font-weight:600;margin-bottom:8px;">${v.m}</div>
      ${v.ex ? '<div style="height:1px;background:linear-gradient(90deg,transparent,#e0e0e0,transparent);margin:10px 0;"></div><div style="font-size:13px;color:#555;font-style:italic;line-height:1.7;margin-bottom:4px;">"' + v.ex + '"</div>' : ''}
      ${v.excn ? '<div style="font-size:12px;color:#999;margin-bottom:8px;">' + v.excn + '</div>' : ''}
      ${v.c ? '<div style="font-size:12px;color:#ec407a;padding:4px 0;">📌 ' + v.c + '</div>' : ''}
    </div>
  `).join('');'''

pos_badge = """(v.m ? '<span style=\"font-size:11px;background:#e8eaf6;color:#3949ab;padding:2px 10px;border-radius:10px;font-weight:600;white-space:nowrap;margin-top:4px;\">' + v.m.split(' ')[0].replace(/[,;]/g,'') + '</span>' : '')"""

new_card = '''grid.innerHTML = page.map((v, i) => {
    var pid = 'm' + (start + i + 1);
    var posBadge = ''' + pos_badge + ''';
    return '<div class="word-card" style="background:var(--w);border-radius:16px;padding:16px 18px;margin-bottom:12px;box-shadow:0 1px 8px rgba(0,0,0,0.06),0 0 0 1px rgba(0,0,0,0.02);border-left:0;position:relative;overflow:hidden;cursor:pointer;transition:all 0.3s;" onclick="toggleMeaning(this)">' +
      '<span class="word-num" style="position:absolute;top:12px;right:14px;font-size:11px;color:#ccc;font-weight:700;">#' + (start + i + 1) + '</span>' +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">' +
        '<div style="font-size:22px;font-weight:800;color:#1a1a2e;letter-spacing:0.3px;">' + v.w + '</div>' +
        '<span onclick="event.stopPropagation();speakWord(\\'' + v.w + '\\')" style="font-size:18px;cursor:pointer;opacity:0.6;transition:opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.6" title="点击发音">🔊</span>' +
        (v.m ? '<span style="font-size:11px;background:#e8eaf6;color:#3949ab;padding:2px 10px;border-radius:10px;font-weight:600;white-space:nowrap;">' + v.m.split(' ')[0].replace(/[,;]/g,'') + '</span>' : '') +
      '</div>' +
      '<div style="font-size:13px;color:#999;margin-bottom:4px;letter-spacing:0.5px;">' + v.p + '</div>' +
      '<div id="' + pid + '" class="wc-hidden" style="max-height:0;overflow:hidden;transition:max-height 0.4s ease;">' +
        '<div style="height:1px;background:linear-gradient(90deg,transparent,#e0e0e0,transparent);margin:8px 0;"></div>' +
        '<div style="font-size:16px;color:#333;font-weight:600;margin-bottom:6px;">' + v.m + '</div>' +
        (v.ex ? '<div style="font-size:13px;color:#555;font-style:italic;line-height:1.7;margin-bottom:4px;">"' + v.ex + '"</div>' : '') +
        (v.excn ? '<div style="font-size:12px;color:#999;margin-bottom:4px;">' + v.excn + '</div>' : '') +
        (v.c ? '<div style="font-size:12px;color:#ec407a;padding:2px 0;">📌 ' + v.c + '</div>' : '') +
      '</div>' +
      '<div style="font-size:11px;color:#ccc;text-align:center;margin-top:4px;">👆 点击展开释义</div>' +
    '</div>';
  }).join('');'''

# The escaping is tricky. Let me use a different approach - find and replace with simple markers.
# Find the grid.innerHTML = page.map... section and replace it

# Find the exact block
idx = html.find('grid.innerHTML = page.map((v, i) =>')
if idx > 0:
    # Find the closing of this block: `).join('');`
    end_marker = ").join('');"
    end_idx = html.find(end_marker, idx)
    # Find the SECOND occurrence after idx
    end_idx2 = html.find(end_marker, end_idx + len(end_marker))
    
    if end_idx2 > 0:
        html = html[:idx] + new_card + html[end_idx2 + len(end_marker):]
        print("2. Word cards replaced with toggle + speaker")
    else:
        print("2. ERROR: Could not find card rendering end")
else:
    print("2. ERROR: Could not find card rendering start")

# ============================================================
# 3. 添加 CSS: wc-hidden/wc-visible 样式
# ============================================================
css_add = '''
/* 释义显隐 */
.wc-hidden { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
.wc-visible { max-height: 500px !important; }
.word-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.10) !important; transform: translateY(-2px); }
.word-card .hint-text { transition: opacity 0.3s; }
'''

# Insert before .footer in CSS
html = html.replace('/* Footer */', css_add + '\n/* Footer */')
print("3. CSS added for toggle animation")

# Save
with open(path, 'w', encoding='utf-8') as f:
    f.write(html)

# Verify
s = html.find('<script>')
e = html.find('</script>')
js = html[s:e]
op = js.count('{')
cl = js.count('}')
print(f"\nJS braces: open={op} close={cl} balanced={op==cl}")
print(f"speakWord function: {'speakWord' in js}")
print(f"toggleMeaning function: {'toggleMeaning' in js}")
print(f"File size: {len(html)} bytes")
