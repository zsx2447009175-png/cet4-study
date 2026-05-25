"""Fix shuffle to be date-seeded for consistency"""
path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace Math.random() shuffle with seeded shuffle
old_shuffle = """// Shuffle WORD_POOL for random order
(function(){
  var pool = WORD_POOL;
  for (var i = pool.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
  }
})();"""

new_shuffle = """// Seeded shuffle based on start date - same order every day
(function(){
  var pool = WORD_POOL;
  var seed = 20260521; // fixed seed for consistent order
  function srand() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
  for (var i = pool.length - 1; i > 0; i--) {
    var j = Math.floor(srand() * (i + 1));
    var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
  }
})();"""

if old_shuffle in html:
    html = html.replace(old_shuffle, new_shuffle)
    print("Fixed: seeded shuffle")
else:
    print("Shuffle not found, looking...")
    idx = html.find('Shuffle WORD_POOL')
    if idx > 0:
        print(f"Found at {idx}: {html[idx:idx+200]}")

# Save
with open(path, 'w', encoding='utf-8') as f:
    f.write(html)

s = html.find('<script>')
e = html.find('</script>')
js = html[s:e]
print(f"JS braces: {js.count('{')} vs {js.count('}')} balanced={js.count('{')==js.count('}')}")
