"""Upload V3 to GitHub via API"""
import urllib.request, json, base64, subprocess, os

# Get token
result = subprocess.run(
    [r'C:\Program Files\GitHub CLI\gh.exe', 'auth', 'token'],
    capture_output=True, text=True,
    env={'HTTPS_PROXY':'http://127.0.0.1:7890', 'HTTP_PROXY':'http://127.0.0.1:7890', 'PATH': os.environ['PATH']}
)
token = result.stdout.strip()
print(f'Token: {token[:12]}...')

# Read new file
with open(r'index.html', 'rb') as f:
    content = f.read()

url = 'https://api.github.com/repos/zsx2447009175-png/cet4-study/contents/index.html'
headers = {'Authorization': f'Bearer {token}', 'Accept': 'application/vnd.github.v3+json'}

# Get SHA
req = urllib.request.Request(url, headers=headers)
try:
    resp = urllib.request.urlopen(req)
    data = json.loads(resp.read())
    sha = data['sha']
    print(f'SHA: {sha[:10]}')
except Exception as e:
    print(f'SHA error: {e}')
    sha = None

# Update
body = {
    'message': 'V3: daily vocab, bubei-danci style, date restriction, daily quotes',
    'content': base64.b64encode(content).decode(),
    'branch': 'main'
}
if sha:
    body['sha'] = sha

data = json.dumps(body).encode()
headers['Content-Type'] = 'application/json'
req = urllib.request.Request(url, data=data, headers=headers, method='PUT')
try:
    resp = urllib.request.urlopen(req)
    result = json.loads(resp.read())
    sha_new = result['content']['sha']
    print(f'OK! SHA: {sha_new[:10]}')
    print(f'URL: https://zsx2447009175-png.github.io/cet4-study/')
except Exception as e:
    print(f'Error: {e}')
    if hasattr(e, 'read'):
        print(e.read().decode()[:500])
