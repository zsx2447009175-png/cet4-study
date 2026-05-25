"""Extract and check the grid.innerHTML code"""
path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# Find grid.innerHTML = 
idx = html.find('grid.innerHTML = page.map')
if idx > 0:
    # Find the end: ).join(''); 
    end = html.find(".join('');", idx)
    if end > 0:
        code = html[idx:end+12]
        print(f"Length: {len(code)} chars")
        print("\n=== FULL grid.innerHTML code ===")
        print(code)
        print("\n=== END ===")
        
        # Check for issues
        lines = code.split('\n')
        print(f"\nTotal lines: {len(lines)}")
        for i, line in enumerate(lines):
            # Check for unescaped quotes that might break
            if "'" in line and line.count("'") % 2 != 0:
                print(f"  WARNING line {i}: odd single quotes: {line.strip()[:80]}")
    else:
        print("End marker not found")
else:
    print("Start not found")
