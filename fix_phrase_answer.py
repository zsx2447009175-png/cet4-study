"""Fix: add answer-reveal for Part 1 phrases in renderExamQuestions + submitExam"""
path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# ============================================================
# 1. Add answer-reveal div to phrase section in renderExamQuestions
# ============================================================
# Old: no answer-reveal for phrases
old_phrase_map = '''html += exerciseData.phrases.map((p, i) => `
    <div class="q-item">
      <div class="q-label"><span class="q-num">${i+1}</span> ${p.zh}</div>
      <textarea id="p1q${i+1}" placeholder="\u8F93\u5165\u82F1\u6587..." rows="1"></textarea>
      <div class="q-score" id="sc-p1q${i+1}"></div>
    </div>
  `).join('');'''

new_phrase_map = '''html += exerciseData.phrases.map((p, i) => `
    <div class="q-item">
      <div class="q-label"><span class="q-num">${i+1}</span> ${p.zh}</div>
      <textarea id="p1q${i+1}" placeholder="\u8F93\u5165\u82F1\u6587..." rows="1"></textarea>
      <div class="q-score" id="sc-p1q${i+1}"></div>
      <div class="answer-reveal" id="rev-p1q${i+1}">
        <div class="ans-block"><div class="ans-lbl">\u2705 \u6B63\u786E\u7B54\u6848</div><div class="ans-txt">${p.ans}</div></div>
      </div>
    </div>
  `).join('');'''

if old_phrase_map in html:
    html = html.replace(old_phrase_map, new_phrase_map)
    print("1. Added answer-reveal div in renderExamQuestions for phrases")
else:
    print("1. Phrase map NOT found - may already be fixed")

# ============================================================
# 2. Add reveal in submitExam for phrases
# ============================================================
old_ta_line = "if (ta) ta.className = got === 2 ? 'correct' : got === 1 ? 'partial' : 'wrong';\n  });"
if old_ta_line in html:
    new_ta_line = "if (ta) ta.className = got === 2 ? 'correct' : got === 1 ? 'partial' : 'wrong';\n    var rev = document.getElementById('rev-p1q'+(i+1));\n    if (rev) rev.style.display = 'block';\n  });"
    html = html.replace(old_ta_line, new_ta_line)
    print("2. Added phrase answer reveal in submitExam")
else:
    # Try alternate pattern (with template literals)
    old_ta_line2 = "if (ta) ta.className = got === 2 ? 'correct' : got === 1 ? 'partial' : 'wrong';\n    });"
    if old_ta_line2 in html:
        new_ta_line2 = "if (ta) ta.className = got === 2 ? 'correct' : got === 1 ? 'partial' : 'wrong';\n    var rev = document.getElementById('rev-p1q'+(i+1));\n    if (rev) rev.style.display = 'block';\n    });"
        html = html.replace(old_ta_line2, new_ta_line2)
        print("2. Added phrase answer reveal in submitExam (alt pattern)")
    else:
        print("2. Phrase reveal pattern NOT found - may already be fixed")

# Verify
s = html.find('<script>')
e_scr = html.find('</script>')
js = html[s:e_scr]
braces = js.count('{')
close = js.count('}')
print(f"JS braces: {braces} vs {close} balanced={braces==close}")
print(f"rev-p1q in JS: {'rev-p1q' in js}")

with open(path, 'w', encoding='utf-8') as f:
    f.write(html)
