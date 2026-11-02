from pathlib import Path
import base64
import hashlib
import html as html_module
import json
import mimetypes
import re

ROOT = Path(__file__).resolve().parent
(ROOT / 'qa').mkdir(exist_ok=True)

def data_url(relative):
    path = ROOT / relative
    kind = {'.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.otf': 'font/otf', '.ttf': 'font/ttf'}.get(path.suffix.lower())
    kind = kind or mimetypes.guess_type(path.name)[0] or 'application/octet-stream'
    return 'data:' + kind + ';base64,' + base64.b64encode(path.read_bytes()).decode('ascii')

page = (ROOT / 'index.html').read_text(encoding='utf-8')
css = (ROOT / 'style.css').read_text(encoding='utf-8')
css = re.sub(r"url\(['\"](assets/[^'\"]+)['\"]\)", lambda m: 'url("' + data_url(m[1]) + '")', css)
page = re.sub(r'<link rel="stylesheet" href="style\.css(?:\?[^\"]*)?">', lambda _: '<style>\n' + css + '\n</style>', page)
for name in ['app.js']:
    js = (ROOT / name).read_text(encoding='utf-8')
    page = re.sub(r'<script src="' + re.escape(name) + r'(?:\?[^\"]*)?"></script>', lambda _: '<script>\n' + js + '\n</script>', page)
image_paths = list(dict.fromkeys(re.findall(r'src="(assets/[^\"]+)"', page)))
image_ids = {path: 'image-' + str(i) for i, path in enumerate(image_paths)}
image_assets = {image_ids[path]: data_url(path) for path in image_paths}
page = re.sub(r'src="(assets/[^\"]+)"', lambda m: 'data-embedded-src="' + image_ids[m[1]] + '"', page)
bootstrap = '<script type="application/json" id="embedded-image-assets">' + json.dumps(image_assets,separators=(',',':')) + '</script><script>\n{const images=JSON.parse(document.getElementById("embedded-image-assets").textContent);document.querySelectorAll("[data-embedded-src]").forEach(el=>el.src=images[el.dataset.embeddedSrc]);}\n</script>'
# Assign the embedded sources before the presentation reads gallery and overview images.
page = page.replace('<script>\n\'use strict\';', bootstrap + '<script>\n\'use strict\';', 1)
assert 'id="embedded-image-assets"' in page
licenses = '\n\n'.join((ROOT / 'assets' / p).read_text(encoding='utf-8') for p in ['OldStandard-Lizenz.txt', 'LibreFranklin-Lizenz.txt'])
page = page.replace('</body>', '<template id="font-licenses"><pre>' + html_module.escape(licenses) + '</pre></template></body>')
assert not re.search(r'(?:src|href)="(?:assets/|app.js|hotel3d.js|style.css)', page)
target = ROOT / 'DA_Explainer.html'
target.write_text(page, encoding='utf-8')
report = {'file': target.name, 'bytes': target.stat().st_size, 'sha256': hashlib.sha256(target.read_bytes()).hexdigest(), 'all_assets_embedded': True, 'unique_images':len(image_paths), 'scenes': page.count('class="slide ')}
(ROOT / 'qa' / 'HTML_Paket.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
print(json.dumps(report, indent=2))
