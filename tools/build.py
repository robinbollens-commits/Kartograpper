"""Build index.html from src/kartograaf.html.

src/kartograaf.html is the page body as published on claude.ai (no <html>/<head>).
This wraps it in a full document for GitHub Pages and adds the install (PWA) bits.
Run:  python3 tools/build.py
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
src = (ROOT / "src" / "kartograaf.html").read_text(encoding="utf-8")

version = re.search(r"APP_VERSION = '([^']+)'", src).group(1)
title = re.search(r"<title>(.*?)</title>", src).group(1)
links = re.findall(r'<link [^>]*>', src.split("<style>", 1)[0])
body = src
body = re.sub(r"<title>.*?</title>\n?", "", body, count=1)
body = re.sub(r'<meta name="claude:[^>]*>\n?', "", body)
for link in links:
    body = body.replace(link + "\n", "", 1)

head = f"""<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>{title}</title>
<meta name="description" content="Teken fantasykaarten in inkt, perkament of kleur: wereldkaarten, steden en dungeons.">
<meta name="theme-color" content="#d8dce2" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#101317" media="(prefers-color-scheme: dark)">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" href="icons/icon-192.png">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="{title}">
{chr(10).join(links)}
<style>
html{{color-scheme:light}}
:root{{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}
body{{margin:0;font:14px system-ui,-apple-system,"Segoe UI",sans-serif}}
img{{max-width:100%}}
[hidden]{{display:none!important}}
</style>
</head>
<body>
"""

tail = """
<script>
// Offline + installable. The service worker only caches the app files; your maps live in IndexedDB and are never touched by it.
if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
  addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}
</script>
</body>
</html>
"""

(ROOT / "index.html").write_text(head + body.strip() + "\n" + tail, encoding="utf-8")
sw = (ROOT / "sw.js").read_text(encoding="utf-8")
sw = re.sub(r"const VERSION = '[^']*';", f"const VERSION = '{version}';", sw)
(ROOT / "sw.js").write_text(sw, encoding="utf-8")
print(f"index.html gebouwd (versie {version})")
