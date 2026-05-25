"""
V4 Clean Builder - 四级多题型(最小改动版)
只改3个地方: 1.加题库数据 2.加dispatch函数 3.改render/submit
"""
import re

PATH = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(PATH, 'r', encoding='utf-8') as f:
    html = f.read()

# ============================================================
# 1. 在 exerciseData 后面注入题库数据
# ============================================================
DATA_INJECTION = '''
// === V4: 四级多题型题库 ===
const EXAM_TYPES = ["translation","reading","vocab_cloze","writing"];
const EXAM_NAMES = {"translation":"汉译英翻译","reading":"仔细阅读","vocab_cloze":"选词填空(15选10)","writing":"写作"};
const EXAM_TIMES = {"translation":30,"reading":25,"vocab_cloze":20,"writing":30};
const EXAM_COUNTS = {"translation":"10词组+5句子+1段落","reading":"1篇+5选择题","vocab_cloze":"1篇(15选10)","writing":"1篇(120词+)"};

function gET(d){ return EXAM_TYPES[dayIndex(d) % 4]; }
function gES(d, n){ return dayIndex(d) % n; }

const RDS = [{title:"The Rise of Digital Learning",passage:"In recent years, digital learning has revolutionized the way we acquire knowledge. With the advent of advanced technology, students can now access educational resources from anywhere in the world. Online platforms offer unprecedented flexibility, allowing learners to study at their own pace. Unlike conventional classrooms, digital education adapts to individual needs, providing personalized learning experiences. However, this shift comes with challenges. Critics argue that digital learning may widen the gap between privileged and underprivileged students. Access to reliable internet and appropriate devices remains uneven across different socioeconomic groups. Despite these concerns, the benefits of digital learning are substantial. It democratizes education, making quality resources available to those who previously had limited access.",questions:[{q:"What is the main topic of the passage?",o:["A) The history of education","B) Digital technology transforming learning","C) Problems with traditional classrooms","D) The future of smartphones"],a:"B",e:"全文围绕数字化学习如何改变教育展开。"},{q:"What challenge does digital learning face?",o:["A) Lack of flexibility","B) Too much interaction","C) Unequal internet access","D) High tuition fees"],a:"C",e:"文章明确指出Access to reliable internet remains uneven。"},{q:"The word 'democratizes' is closest in meaning to?",o:["A) Complicates","B) Makes widely available","C) Restricts","D) Politicizes"],a:"B",e:"democratize意为'使大众化、使普及'。"},{q:"What is the author's attitude?",o:["A) Highly critical","B) Cautiously optimistic","C) Completely neutral","D) Strongly opposed"],a:"B",e:"作者既指出挑战也肯定优势，属于谨慎乐观。"},{q:"What enables personalized learning?",o:["A) Traditional classrooms","B) Face-to-face interaction","C) Digital education platforms","D) Printed textbooks"],a:"C",e:"digital education adapts to individual needs。"}]},{title:"Sustainable Living in Modern Society",passage:"Sustainable living has become an increasingly important topic as we confront the reality of climate change and environmental degradation. The concept of sustainability encompasses various aspects of daily life, from reducing waste and conserving energy to choosing eco-friendly products and supporting local businesses. One of the most effective ways to live sustainably is through mindful consumption, which involves evaluating our actual needs versus wants. By reducing our consumption of single-use plastics, we can decrease the amount of waste that ends up in landfills and oceans. Another crucial aspect is transportation. Choosing public transit, cycling, or walking over driving can substantially reduce carbon emissions. Ultimately, sustainable living requires a shift in mindset, recognizing that our individual actions are interconnected with broader environmental systems.",questions:[{q:"What is the main purpose of this passage?",o:["A) To criticize consumer habits","B) To promote sustainable living","C) To describe climate change","D) To compare transportation methods"],a:"B",e:"全文主旨是介绍和倡导可持续生活方式。"},{q:"What does 'mindful consumption' involve?",o:["A) Buying the cheapest products","B) Evaluating needs versus wants","C) Avoiding all shopping","D) Using credit cards wisely"],a:"B",e:"文章明确说明evaluating our actual needs versus wants。"},{q:"Which is mentioned as a sustainable transportation option?",o:["A) Private jets","B) Electric scooters only","C) Bicycles and public transit","D) Sports cars"],a:"C",e:"cycling, walking, public transit。"},{q:"The phrase 'shift in mindset' refers to?",o:["A) Moving to a new house","B) Changing one's way of thinking","C) Improving physical health","D) Starting a new career"],a:"B",e:"shift in mindset意为'思维方式的转变'。"},{q:"Who shares responsibility for the planet?",o:["A) Only governments","B) Only corporations","C) Everyone","D) Only scientists"],a:"C",e:"we all share responsibility。"}]},{title:"The Benefits of Reading",passage:"Reading is one of the most beneficial habits a person can develop. Firstly, reading improves vocabulary and language skills. Regular readers encounter thousands of new words each year, naturally expanding their vocabulary without conscious effort. Secondly, reading strengthens mental capabilities. Studies have shown that reading can slow cognitive decline in old age and improve memory function. Furthermore, reading develops empathy and emotional intelligence. Through stories, readers experience different perspectives and understand diverse human experiences. Lastly, reading is an excellent stress reducer. Research indicates that just six minutes of reading can reduce stress levels by up to 68 percent, making it more effective than listening to music or taking a walk.",questions:[{q:"What is the main idea of the passage?",o:["A) Reading is boring","B) The benefits of reading","C) How to read faster","D) Famous books to read"],a:"B",e:"全文围绕阅读的多种益处展开。"},{q:"How does reading help with vocabulary?",o:["A) By memorizing dictionaries","B) Through natural exposure to new words","C) By attending classes","D) Through translation exercises"],a:"B",e:"readers encounter thousands of new words each year。"},{q:"What percentage of stress reduction can reading achieve?",o:["A) 20%","B) 45%","C) 68%","D) 90%"],a:"C",e:"文章明确提到up to 68 percent。"},{q:"The phrase 'neural pathways' most likely refers to?",o:["A) Physical roads","B) Connections in the brain","C) Book categories","D) Library systems"],a:"B",e:"neural pathways指大脑中的神经通路。"},{q:"What is more effective than reading for stress?",o:["A) Listening to music","B) Taking a walk","C) Both A and B","D) Neither A nor B"],a:"D",e:"reading more effective than listening to music or taking a walk。"}]}];

const CLZ = [{passage:"The Internet has fundamentally __(1)__ the way people communicate and access information. In the past, people __(2)__ on newspapers and television for news, but now they can get real-time updates from anywhere. This shift has made information more __(3)__ than ever before. However, experts warn that the __(4)__ of false information online is a growing concern. Users need to develop critical thinking skills to __(5)__ between reliable and unreliable sources. Despite these challenges, the __(6)__ impact of the Internet has been largely positive, creating opportunities for education and __(7)__ growth. The key is to use this powerful tool __(8)__ and responsibly. As technology __(9)__ to advance, the way we interact with digital content will keep __(10)__.",words:["A) accessed","B) changed","C) continues","D) distinguish","E) economic","F) evolving","G) limited","H) overall","I) quality","J) relied","K) spread","L) traditional","M) wisely","N) wonderful","O) youth"],answers:[1,9,0,10,3,7,4,12,2,5]},{passage:"Climate change is one of the most __(1)__ issues facing humanity today. Scientists have __(2)__ evidence that human activities are the primary cause of global warming. Rising temperatures have led to the melting of polar ice caps, causing sea levels to __(3)__. Many coastal cities are at risk of flooding if __(4)__ action is not taken. Governments around the world have been __(5)__ to reduce carbon emissions, but progress has been slow. Individuals can also __(6)__ to the solution by making environmentally friendly choices. Small actions, such as reducing energy __(7)__ and using public transportation, can make a __(8)__ difference when adopted by millions. The __(9)__ of addressing climate change is not just environmental but also economic. Investing in green technology can create new jobs and __(10)__ sustainable development.",words:["A) adequate","B) contribute","C) consumption","D) crucial","E) difference","F) encourage","G) immediate","H) promote","I) provided","J) purpose","K) rise","L) significant","M) struggling","N) urgent","O) various"],answers:[13,8,10,6,12,1,2,11,9,7]},{passage:"Learning a second language offers numerous __(1)__ beyond just communication. Research shows that bilingual individuals often have better problem-solving skills and __(2)__ flexibility. The process of switching between languages __(3)__ the brain in unique ways, potentially delaying the onset of dementia in old age. For young people, language learning can improve __(4)__ performance across all subjects. In the global economy, __(5)__ in multiple languages is highly valued by employers. It opens doors to international career __(6)__ and cultural exchange. While becoming fluent requires __(7)__ effort and dedication, even basic proficiency can be __(8)__. The most effective approach is to __(9)__ regular practice with immersion experiences, such as watching films or __(10)__ with native speakers.",words:["A) academic","B) benefits","C) chatting","D) cognitive","E) combine","F) considerable","G) exercises","H) opportunities","I) professional","J) proficiency","K) rewarding","L) specific","M) stimulates","N) takes","O) worth"],answers:[1,3,12,0,9,7,5,10,4,2]}];

const WRT = [{topic:"The Impact of Social Media on Interpersonal Communication",outline:"1. 社交媒体的普及现状\\n2. 对人际交流的积极影响（联系便捷、信息共享）\\n3. 对人际交流的消极影响（面对面交流减少、隐私问题）\\n4. 你的观点和建议",sample:"Social Media and Interpersonal Communication\\n\\nIn recent years, social media has become an indispensable part of our daily lives. Platforms like WeChat and Weibo connect billions of users worldwide, fundamentally changing how we interact.\\n\\nOn the positive side, social media enables instant communication regardless of geographical distance. We can share important moments, exchange ideas, and maintain relationships with friends and family far away.\\n\\nHowever, face-to-face communication has noticeably decreased as people increasingly rely on text messages and emojis. Privacy concerns have also emerged.\\n\\nIn my opinion, social media is a double-edged sword. Finding a healthy balance between online and offline communication is essential for maintaining genuine human connections.",keywords:["interpersonal communication","social media","face-to-face","privacy","balance"]},{topic:"The Importance of Lifelong Learning",outline:"1. 终身学习的定义和背景\\n2. 终身学习的重要性（适应变化、提升竞争力）\\n3. 如何实现终身学习（在线课程、阅读、实践）\\n4. 你的看法",sample:"The Importance of Lifelong Learning\\n\\nLifelong learning refers to the continuous pursuit of knowledge throughout one's life. In today's rapidly changing world, this concept has become more relevant than ever.\\n\\nContinuous learning enables people to stay competitive in the job market. With technology advancing at an unprecedented pace, skills that were valuable five years ago may now be obsolete.\\n\\nThere are many ways to pursue lifelong learning. Online courses, reading books, attending workshops, and gaining hands-on experience are all effective methods.\\n\\nIn my view, lifelong learning is not merely a career strategy but a mindset. It enriches our lives and helps us become better versions of ourselves.",keywords:["lifelong learning","adapt","competitive","online courses","mindset"]},{topic:"On the Advantages and Disadvantages of Online Shopping",outline:"1. 网购的普及程度\\n2. 网购的优势（便捷、选择多、价格低）\\n3. 网购的劣势（无法触碰实物、物流延迟、冲动消费）\\n4. 你的建议",sample:"Online Shopping: Advantages and Disadvantages\\n\\nOnline shopping has experienced explosive growth in recent years. With just a few clicks, consumers can purchase almost anything from the comfort of their homes.\\n\\nThe advantages include unparalleled convenience, a wider selection of products, and competitive pricing. Frequent discounts make online shopping economically attractive.\\n\\nNevertheless, customers cannot physically examine products before purchasing. Delivery delays and damaged packages are common complaints. The ease of clicking 'buy now' may encourage impulsive spending.\\n\\nIn conclusion, consumers should exercise self-control. I suggest comparing prices across platforms, reading reviews carefully, and setting a monthly budget.",keywords:["online shopping","convenience","selection","impulsive","budget"]}];
'''

# Insert after exerciseData closing - find the right spot
marker = "// ============================================================\n// 日期系统 (V3)"
html = html.replace(marker, DATA_INJECTION + "\n" + marker)
print("1. Question bank data injected")

# ============================================================
# 2. 在 updateUI 末尾添加更新题型信息
# ============================================================
old_ui_end = "renderHistoryScores();\n}"
new_ui_end = """renderHistoryScores();
  updateExamTypeInfo();
}

function updateExamTypeInfo(){
  var t=gET(currentDate);
  var si=gES(currentDate,3);
  var tn=document.getElementById('examTypeName'); if(tn)tn.textContent=EXAM_NAMES[t];
  var tt=document.getElementById('examTypeTime'); if(tt)tt.textContent=EXAM_TIMES[t]+'分钟';
  var tc=document.getElementById('examTypeCount'); if(tc)tc.textContent=EXAM_COUNTS[t];
}"""
html = html.replace(old_ui_end, new_ui_end)
print("2. Exam type info update added")

# ============================================================
# 3. 修改考试前导页 (添加动态题型信息)
# ============================================================
old_pre = """<li>📝 <strong>题型：</strong>汉译英（词组 + 句子 + 段落）</li>
          <li>⏱ <strong>时长：</strong>30分钟</li>
          <li>📊 <strong>满分：</strong>100分</li>
          <li>📋 <strong>题量：</strong>10道词组 + 5道句子 + 1篇段落</li>"""

new_pre = """<li>📝 <strong>题型：</strong><span id="examTypeName">汉译英翻译</span></li>
          <li>⏱ <strong>时长：</strong><span id="examTypeTime">30分钟</span></li>
          <li>📊 <strong>满分：</strong>100分</li>
          <li>📋 <strong>题量：</strong><span id="examTypeCount">10词组+5句子+1段落</span></li>"""

html = html.replace(old_pre, new_pre)
print("3. Exam pre info updated")

# ============================================================
# 4. 修改计时器: 不同题型不同时长
# ============================================================
old_timer = "let examRemaining = 30 * 60; // 30 min in seconds"
new_timer = "let examTotalTime = 30 * 60;\nlet examRemaining = 30 * 60;"
html = html.replace(old_timer, new_timer)
print("4. Timer variables added")

# Update startExam to use dynamic time
old_start = "examRemaining = 30 * 60;"
new_start = "examTotalTime = EXAM_TIMES[gET(currentDate)] * 60;\n  examRemaining = examTotalTime;"
html = html.replace(old_start, new_start)

# Update timer display
old_td = "progEl.style.width = (examRemaining / total * 100) + '%';"
new_td = "progEl.style.width = (examRemaining / examTotalTime * 100) + '%';"
html = html.replace(old_td, new_td)

# Also fix the timer text format
old_tf = "timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;"
new_tf = "timerEl.textContent = String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');"
html = html.replace(old_tf, new_tf)
print("5. Timer updated for dynamic exam types")

# ============================================================
# 5. 替换 renderExamQuestions - 添加题型分发
# ============================================================
old_render_start = "function renderExamQuestions() {"
old_render_end = "document.getElementById('examQuestions').innerHTML = html;\n}"

idx_start = html.find(old_render_start)
idx_end = html.find(old_render_end, idx_start)

new_render = """function renderExamQuestions() {
  var t = gET(currentDate); var si = gES(currentDate,3);
  var h = '';
  if (t === 'reading') {
    var rs = RDS[si];
    h += '<div class="card"><div class="section-title"><span class="icon">📖</span>仔细阅读 <span class="badge">5题 × 20分 = 100分</span></div>';
    h += '<div style="background:#f8f9ff;border-radius:12px;padding:16px 18px;margin-bottom:16px;font-size:14px;line-height:1.9;white-space:pre-wrap;color:#333;">'+rs.passage+'</div>';
    h += '<div style="font-weight:700;color:#1565c0;margin-bottom:12px;">📋 '+rs.title+'</div>';
    for (var qi=0; qi<rs.questions.length; qi++) {
      var q = rs.questions[qi];
      h += '<div class="q-item" style="margin-bottom:18px;"><div class="q-label"><span class="q-num">'+(qi+1)+'</span> '+q.q+'</div>';
      for (var oi=0; oi<q.o.length; oi++) {
        h += '<label style="display:block;padding:8px 12px;margin:3px 0;border:2px solid #e0e0e0;border-radius:10px;cursor:pointer;font-size:14px;" id="lbl_rq'+(qi+1)+'_'+oi+'"><input type="radio" name="rq'+(qi+1)+'" value="'+q.o[oi][0]+'" style="margin-right:8px;" onchange="selOpt(this)">'+q.o[oi]+'</label>';
      }
      h += '<div class="q-score" id="sc-rq'+(qi+1)+'"></div><div class="answer-reveal" id="rev-rq'+(qi+1)+'"><div class="ans-block"><div class="ans-lbl">✅ 正确答案: '+q.a+'</div><div class="ans-txt" style="font-weight:normal;color:#555;">'+q.e+'</div></div></div></div>';
    }
    h += '</div>';
  } else if (t === 'vocab_cloze') {
    var cs = CLZ[si];
    h += '<div class="card"><div class="section-title"><span class="icon">🔤</span>选词填空(15选10) <span class="badge">10空 × 10分 = 100分</span></div>';
    h += '<div style="background:#f8f9ff;border-radius:12px;padding:16px 18px;margin-bottom:16px;font-size:14px;line-height:2.2;">';
    var ptext = cs.passage;
    for (var bi=0; bi<10; bi++) {
      ptext = ptext.replace('__('+(bi+1)+')__','<input type="text" id="cq'+(bi+1)+'" style="width:50px;border:2px solid #ec407a;border-radius:6px;padding:4px 6px;font-size:14px;text-align:center;font-weight:700;color:#d81b60;" placeholder="?" maxlength="1" onfocus="this.select()">');
    }
    h += ptext + '</div>';
    h += '<div style="background:#fff3e0;border-radius:12px;padding:14px 18px;margin-bottom:12px;"><div style="font-weight:700;color:#e65100;margin-bottom:8px;">📋 备选词库</div><div style="display:flex;flex-wrap:wrap;gap:6px;">';
    for (var wi=0; wi<cs.words.length; wi++) {
      h += '<span style="background:white;border:1px solid #ddd;border-radius:8px;padding:3px 10px;font-size:13px;font-weight:600;">'+cs.words[wi]+'</span>';
    }
    h += '</div></div><div style="font-size:12px;color:#888;margin-top:4px;">💡 在空格中填入对应选项字母（A-O），如填 A</div>';
    for (var ai=0; ai<10; ai++) {
      h += '<div class="q-score" id="sc-cq'+(ai+1)+'"></div><div class="answer-reveal" id="rev-cq'+(ai+1)+'" style="font-size:13px;"><div class="ans-block"><div class="ans-lbl">✅ 第'+(ai+1)+'空正确答案</div><div class="ans-txt">'+cs.words[cs.answers[ai]]+' ('+String.fromCharCode(65+cs.answers[ai])+')</div></div></div>';
    }
    h += '</div>';
  } else if (t === 'writing') {
    var ws = WRT[si];
    h += '<div class="card"><div class="section-title"><span class="icon">✏️</span>写作 <span class="badge">100分</span></div>';
    h += '<div class="q-source" style="margin-bottom:12px;"><strong>题目：</strong>'+ws.topic+'</div>';
    h += '<div style="background:#f3e5f5;border-radius:10px;padding:14px 16px;margin-bottom:14px;font-size:13px;line-height:1.9;white-space:pre-line;color:#4a148c;">'+ws.outline+'</div>';
    h += '<div style="font-size:12px;color:#888;margin-bottom:6px;">📝 写作要求：不少于120词，结构清晰，表达准确</div>';
    h += '<textarea id="wq1" placeholder="在此写下你的作文..." rows="14" style="min-height:260px;"></textarea>';
    h += '<div class="q-score" id="sc-wq1"></div><div class="answer-reveal" id="rev-wq1"><div class="ans-block"><div class="ans-lbl">📖 参考范文</div><div class="ans-txt italic" style="white-space:pre-line;">'+ws.sample+'</div></div>';
    h += '<div style="margin-top:8px;font-size:12px;color:#888;">关键词提示：'+ws.keywords.join(' / ')+'</div></div>';
  } else {"""

# Replace from renderExamQuestions start to end
html = html[:idx_start] + new_render + html[idx_start + len(old_render_start):idx_end] + "\n  }\n  " + html[idx_end + len(old_render_end):]
print("6. renderExamQuestions updated with type dispatch")

# ============================================================
# 6. 替换 submitExam - 添加题型分发评分
# ============================================================
old_sub_start = "function submitExam() {"
old_sub_end = "// Total\n  const total = p1total + p2total + r3.score;"

idx_s = html.find(old_sub_start)
idx_e = html.find(old_sub_end)

new_submit = """function submitExam() {
  if (examSubmitted) return;
  examSubmitted = true;
  if (examTimer) clearInterval(examTimer);
  document.querySelectorAll('#examQuestions textarea, #examQuestions input[type=text]').forEach(function(t){t.disabled=true});
  document.querySelectorAll('#examQuestions input[type=radio]').forEach(function(r){r.disabled=true});
  var btn = document.getElementById('submitBtn');
  btn.disabled = true; btn.textContent = '✅ 已交卷';

  var t = gET(currentDate); var si = gES(currentDate,3);
  var total = 0; var p1total = 0, p2total = 0, p3total = 0;

  if (t === 'reading') {
    var rs = RDS[si];
    for (var qi=0; qi<rs.questions.length; qi++) {
      var q = rs.questions[qi];
      var sel = document.querySelector('input[name="rq'+(qi+1)+'"]:checked');
      var got = sel && sel.value === q.a ? 20 : 0;
      p1total += got;
      var sc = document.getElementById('sc-rq'+(qi+1));
      if (sc) { sc.style.display='block'; sc.className='q-score '+(got===20?'s-full':'s-zero'); sc.innerHTML='得 <b>'+got+'</b> / 20 分'; }
      var rev = document.getElementById('rev-rq'+(qi+1)); if (rev) rev.style.display='block';
    }
    total = p1total;
  } else if (t === 'vocab_cloze') {
    var cs = CLZ[si];
    for (var ai=0; ai<10; ai++) {
      var el = document.getElementById('cq'+(ai+1));
      var ua = el ? el.value.trim().toUpperCase() : '';
      var ca = String.fromCharCode(65 + cs.answers[ai]);
      var got = ua === ca ? 10 : 0;
      p1total += got;
      var sc = document.getElementById('sc-cq'+(ai+1));
      if (sc) { sc.style.display='block'; sc.className='q-score '+(got===10?'s-full':'s-zero'); sc.innerHTML='得 <b>'+got+'</b> / 10 分'; }
      if (el) el.className = got===10?'correct':'wrong';
      var rev = document.getElementById('rev-cq'+(ai+1)); if (rev) rev.style.display='block';
    }
    total = p1total;
  } else if (t === 'writing') {
    var ws = WRT[si];
    var el = document.getElementById('wq1');
    var val = el ? el.value.trim() : '';
    var hits = val ? ws.keywords.filter(function(k){return contains(val,k)}) : [];
    var misses = ws.keywords.filter(function(k){return !contains(val,k)});
    var score = val ? Math.min(100, Math.round(hits.length/ws.keywords.length*60) + (val.length>120?20:val.length>60?10:0) + (val.length>200?20:0)) : 0;
    total = score;
    showQScore('sc-wq1','wq1',score,100,hits,misses);
    var rev = document.getElementById('rev-wq1'); if (rev) rev.style.display='block';
    if (el) el.className = score>=80?'correct':score>=50?'partial':'wrong';
    p1total = score;
  } else {"""

html = html[:idx_s] + new_submit + html[idx_s + len(old_sub_start):idx_e] + "\n  " + html[idx_e + len(old_sub_end):]
print("7. submitExam updated with type dispatch")

# ============================================================
# 7. 修复: close the else block
# ============================================================
# The original submitExam has "}" at the end of the else
# We need to close our new else block properly
old_close = "const total = p1total + p2total + r3.score;"
new_close = "total = p1total + p2total + r3.score;"
html = html.replace(old_close, new_close)

print("8. Fixed total variable")

# ============================================================
# 8. 添加 selOpt 辅助函数 (reading题型用)
# ============================================================
sel_opt_func = """
function selOpt(el){
  var name = el.name;
  var labels = document.querySelectorAll('label[id^=\"lbl_\"'+name+'\"_\"]');
  for (var i=0; i<labels.length; i++){
    labels[i].style.borderColor='#e0e0e0';
    labels[i].style.background='';
  }
  el.parentElement.style.borderColor='#ec407a';
  el.parentElement.style.background='#fce4ec';
}
"""
# Insert before submitExam
html = html.replace("function submitExam() {", sel_opt_func + "\nfunction submitExam() {")
print("9. selOpt helper added")

# Save
with open(PATH, 'w', encoding='utf-8') as f:
    f.write(html)

print(f"\nDone! Size: {len(html)} bytes")
print("V4 Clean: 4 exam types, minimal changes")
