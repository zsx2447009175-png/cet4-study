"""Fix V4 brace mismatch"""
import re

path = r'C:\Users\24470\WorkBuddy\2026-05-21-16-18-52\cet4-study\index.html'
with open(path, 'r', encoding='utf-8') as f:
    html = f.read()

# Find the problematic area: renderExamQuestions ending
# The function ends with "} else {" which needs proper closing braces

# Find the end of renderExamQuestions
ridx = html.find('function renderExamQuestions')
# Find the closing of the function - it should be after all the exam type HTML
# Look for the translation block's closing and the function's closing brace

# The structure is:
# function renderExamQuestions() {
#   ... reading/cloze/writing code ...
#   } else {
#     ... original translation code ...
#   }  <-- closes the else block
#   document.getElementById('examQuestions').innerHTML = h;  (or html)
# } <-- closes the function

# The issue: the translation code block might be missing its closing braces

# Let me find the exact problematic lines
# Search for "} else {" near the end of renderExamQuestions
rend_end = html.find('function submitExam', ridx)  # next function after render
render_func = html[ridx:rend_end]

# Count braces in render_func
opens = render_func.count('{')
closes = render_func.count('}')
print(f"renderExamQuestions: opens={opens} closes={closes} diff={opens-closes}")

# Find the last 300 chars
print(f"\nLast 300 chars of renderExamQuestions:")
print(render_func[-300:])

# The issue is likely that the original translation code
# ends with "} else {" at the beginning of what was the submitExam
# But the } that closes the else block is missing
