"""
Clean V3.1 builder - single pass, no escaping errors
"""
path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# ============================================================
# 1. Add speakWord + toggleMeaning functions
# ============================================================
fn_insert = """
/* === 发音 & 释义显隐 === */
function speakWord(word) {
  if (!window.speechSynthesis) return;
  speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(word);
  u.lang = 'en-US'; u.rate = 0.85; u.pitch = 1;
  speechSynthesis.speak(u);
}
function toggleMeaning(el) {
  var h = el.querySelector('.wc-hidden');
  if (h) h.classList.toggle('wc-visible');
  var tip = el.querySelector('.wc-tip');
  if (tip) tip.style.display = h && h.classList.contains('wc-visible') ? 'none' : 'block';
}
"""

# Insert right before function contains
html = html.replace('\nfunction contains(text, word)', fn_insert + '\nfunction contains(text, word)')
print("1. Functions added")

# ============================================================
# 2. Replace word card rendering
# ============================================================
# Find the card rendering block
old_card_start = '''grid.innerHTML = page.map((v, i) => `
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

# Build new card rendering with proper string concatenation
card_lines = []
card_lines.append("  grid.innerHTML = page.map(function(v, i) {")
card_lines.append("    var num = start + i + 1;")
card_lines.append("    var pos = v.m ? v.m.split(' ')[0].replace(/[,;]/g,'') : '';")
card_lines.append("    var h = '';")
card_lines.append("    h += '<div class=\"word-card\" style=\"background:var(--w);border-radius:16px;padding:16px 18px;margin-bottom:12px;box-shadow:0 1px 8px rgba(0,0,0,0.06),0 0 0 1px rgba(0,0,0,0.02);border-left:0;position:relative;overflow:hidden;cursor:pointer;\" onclick=\"toggleMeaning(this)\">';")
card_lines.append("    h += '<span class=\"word-num\" style=\"position:absolute;top:12px;right:14px;font-size:11px;color:#ccc;font-weight:700;\">#' + num + '</span>';")
card_lines.append("    h += '<div style=\"display:flex;align-items:center;gap:8px;margin-bottom:6px;\">';")
card_lines.append("    h += '<span style=\"font-size:22px;font-weight:800;color:#1a1a2e;\">' + v.w + '</span>';")
card_lines.append("    h += '<span onclick=\"event.stopPropagation();speakWord(this.dataset.w)\" data-w=\"' + v.w + '\" style=\"font-size:18px;cursor:pointer;opacity:0.6;\" onmouseover=\"this.style.opacity=1\" onmouseout=\"this.style.opacity=0.6\" title=\"点击发音\">🔊</span>';")
card_lines.append("    if (pos) h += '<span style=\"font-size:11px;background:#e8eaf6;color:#3949ab;padding:2px 10px;border-radius:10px;font-weight:600;\">' + pos + '</span>';")
card_lines.append("    h += '</div>';")
card_lines.append("    h += '<div style=\"font-size:13px;color:#999;margin-bottom:4px;\">' + v.p + '</div>';")
card_lines.append("    h += '<div class=\"wc-hidden\" style=\"max-height:0;overflow:hidden;transition:max-height 0.4s ease;\">';")
card_lines.append("    h += '<div style=\"height:1px;background:linear-gradient(90deg,transparent,#e0e0e0,transparent);margin:8px 0;\"></div>';")
card_lines.append("    h += '<div style=\"font-size:16px;color:#333;font-weight:600;margin-bottom:6px;\">' + v.m + '</div>';")
card_lines.append("    if (v.ex) h += '<div style=\"font-size:13px;color:#555;font-style:italic;line-height:1.7;margin-bottom:4px;\">\"' + v.ex + '\"</div>';")
card_lines.append("    if (v.excn) h += '<div style=\"font-size:12px;color:#999;margin-bottom:4px;\">' + v.excn + '</div>';")
card_lines.append("    if (v.c) h += '<div style=\"font-size:12px;color:#ec407a;padding:2px 0;\">📌 ' + v.c + '</div>';")
card_lines.append("    h += '</div>';")
card_lines.append("    h += '<div class=\"wc-tip\" style=\"font-size:11px;color:#ccc;text-align:center;margin-top:4px;\">👆 点击展开释义</div>';")
card_lines.append("    h += '</div>';")
card_lines.append("    return h;")
card_lines.append("  }).join('');")

new_card = '\n'.join(card_lines)

if old_card_start in html:
    html = html.replace(old_card_start, new_card)
    print("2. Cards replaced")
else:
    print("2. ERROR: Card pattern not found!")
    # Find to debug
    idx = html.find('grid.innerHTML = page.map')
    if idx > 0:
        print(f"   Found grid.innerHTML at {idx}")
        print(f"   Context: {html[idx:idx+100]}")

# ============================================================
# 3. Add CSS for wc-hidden/wc-visible
# ============================================================
css_add = """
/* 释义显隐动画 */
.wc-hidden { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
.wc-visible { max-height: 500px !important; }
"""

html = html.replace('/* Footer */', css_add + '\n/* Footer */')
print("3. CSS added")

# Save and verify
with open(path, 'w', encoding='utf-8') as f:
    f.write(html)

# Check JS balance
s = html.find('<script>')
e_script = html.find('</script>')
js = html[s:e_script]
op = js.count('{')
cl = js.count('}')
balanced = op == cl
print(f"\nJS braces: {op} vs {cl} balanced={balanced}")
print(f"speakWord: {'function speakWord' in js}")
print(f"toggleMeaning: {'function toggleMeaning' in js}")
print(f"Size: {len(html)} bytes")

if not balanced:
    print("WARNING: JS braces unbalanced!")
