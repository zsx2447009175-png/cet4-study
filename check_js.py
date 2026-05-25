"""Check V4 render function for JS errors"""
import re

path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# Find renderExamQuestions function  
idx = html.find('function renderExamQuestions')
end = html.find('document.getElementById(', idx + 100)
if idx > 0:
    func = html[idx:end]
    bts = func.count('`')
    print(f"renderExamQuestions backticks: {bts} (should be even)")
    print(f"Function length: {len(func)} chars")
    
    # Check for common issues
    if '\\\\' in func:
        print("WARNING: escaped backslashes found")
    
    # Check the translation section for template issues
    trans_idx = func.find('examType === "translation"')
    if trans_idx > 0:
        trans_section = func[trans_idx:trans_idx+3000]
        trans_bts = trans_section.count('`')
        print(f"Translation section backticks: {trans_bts}")
    
    # Check reading section
    read_idx = func.find('examType === "reading"')
    if read_idx > 0:
        read_section = func[read_idx:read_idx+3000]
        read_bts = read_section.count('`')
        print(f"Reading section backticks: {read_bts}")
        # Check for problematic patterns in reading 
        if "'" in read_section[:500]:
            print("Reading section uses single quotes (OK)")
else:
    print("renderExamQuestions not found!")
    print(f"Found 'renderExamQuestions' at: {html.find('renderExamQuestions')}")

# Also check submitExam
idx2 = html.find('function submitExam')
if idx2 > 0:
    sub_func = html[idx2:idx2+5000]
    sub_bts = sub_func.count('`')
    print(f"\nsubmitExam backticks: {sub_bts}")
    
print("\nDone checking.")
