# nerdmartech.com — CLAUDE.md (handoff สำหรับ Claude Code)

> อ่านไฟล์นี้ก่อนแตะโค้ดทุกครั้ง · อัปเดต 23 ก.ย. 2569 (ย้ายจาก Cowork มาทำใน Claude Code + VS Code)
> Brand guide ฉบับเต็ม: `../00-Context/01-Brand.md` — ถ้าขัดกัน ให้ยึด Brand.md

---

## 1. เว็บนี้คืออะไร / เพื่ออะไร

**Nerd MarTech** = แบรนด์คอนเทนต์ของ อาจารย์แอม (AMGO · AOO Commerce) — สโลแกน **"ลองให้ดู ใช้ได้เลย"** · ลองเครื่องมือ AI กับงานจริงให้ดูทีละขั้น พร้อมต้นทุนจริง ให้เจ้าของธุรกิจ/SMEs ไทยทำตามได้ทันที ไม่ต้องกล้าๆ กลัวๆ (เปลี่ยน 24 ก.ย. 2569 — เลิกวางตัวเป็นกรรมการตัดสิน PASS/FAIL · badge ยังใช้เป็นข้อมูลในหน้า Compare ได้) · เพจ FB โทนให้ความรู้สนุกๆ ไม่ขายคอร์ส

จุดประสงค์ของเว็บ (เรียงตามความสำคัญ)
1. **บันทึกผลทดสอบจริง** — โมเดล/เครื่องมือ AI ที่ลองแล้ว พร้อมเครดิตและบาทที่จ่าย ผลตรงๆ ทั้ง PASS และ FAIL
2. **Showcase สำหรับสอน** — ใช้ฉายในคอร์ส (เช่น คอร์ส AI สมาคมบ้านจัดสรร 2 วัน) และให้ผู้เรียนเปิดดูย้อนหลัง
3. **SEO/AEO** — ให้คนไทยที่ค้น "AI video พูดไทย" "เปรียบเทียบโมเดล AI" เจอ (มี JSON-LD: WebSite/Organization, FAQPage, HowTo)
4. ระยะยาว: hub ของ use case · prompt · model compare · abilities ของเครื่องมือแต่ละตัว

**ไม่ใช่**: เว็บขายคอร์ส (ยังไม่มี CTA ขาย) · ไม่ใช่ agency · ไม่มี LINE OA / อีเมลบริษัท

---

## 2. Stack / Hosting / Deploy

- **Static HTML + CSS + JS ล้วน** ไม่มี build step ไม่มี framework ไม่มี npm — เปิดไฟล์ตรงๆ ได้
- Hosting: **GitHub Pages** repo `kwamkid/nerdmartech` branch `main` root · custom domain `nerdmartech.com` (ไฟล์ `CNAME` ห้ามลบ · `.nojekyll` ห้ามลบ)
- DNS ที่ Cloudflare: A 185.199.108–111.153 + CNAME www → kwamkid.github.io (DNS only)
- Deploy = **push main** เท่านั้น · ผู้ใช้ push เอง (Claude commit ได้ แต่ไม่ push)
- ทดสอบ local: เปิดไฟล์ตรงๆ (file://) ได้แล้ว — sprite ไอคอน header footer ฝังใน site.js · หรือ `python3 -m http.server 8765`
- Commit message ภาษาอังกฤษ สั้น บอกว่าแก้อะไร

---

## 3. โครงไฟล์

```
index.html            หน้าแรก — hero วิดีโอพื้นหลัง (.hero-bg) + ล่าสุด + ทำไมต้องเนิร์ด
ai-video.html         "ทำคลิปด้วย AI" — คู่มือทำคลิปพูดไทย 6 ขั้น จากคลิปจริง (รีวิวบ้าน 85s · storyboard 9 ช็อต · คลิป 9 ตัว · ต้นทุนจริง 520 cr) + คลัง prompt 5 ตัว · HowTo + VideoObject · ขั้น 5 สรุปสั้นแล้วลิงก์ไป ai-edit
ai-edit.html          "ตัดต่อด้วย AI" — Claude Code ตัดต่อใน CapCut (เขียน draft ผ่าน terminal) 6 ขั้น · คำสั่งจริง · ภาพหน้าจอ + ซูม timeline · FAQ + FAQPage · VideoObject · คำหลัก "AI ตัดต่อวิดีโอ"
compare.html          Model Compare — 11 โมเดล (#01–02,#05–10 เจนจากรูป · #03–04 เปลี่ยนคน · #11 Extend) การ์ด + ตาราง 11 แถว (FAQ schema + FAQ ที่มองเห็น)
use-cases.html · prompts.html   หน้า redirect (noindex) → ai-video.html / compare.html ตาม #hash — กันลิงก์เก่าจากโพสต์ FB เสีย · ไม่อยู่ใน sitemap
design-system.html    Living style guide (noindex) — ทุก component ที่ใช้จริง
assets/style.css      สไตล์กลางทั้งเว็บ — แก้ที่นี่ที่เดียว
assets/site.js        **สร้าง layout กลาง** (header · TOC ซ้าย · ช่องขวา · footer) + icon sprite + TOC/journey bar + copy + credits→บาท + lightbox
assets/pixel-icons.svg   sprite ไอคอน pixel 18 ตัว (i-ai data prompt model credit time cost video image automation pass maybe fail cursor copy arrow idea external) — สำเนาเดียวกันฝังอยู่ในบล็อก @icons ของ site.js · ในหน้าใช้ `<use href="#i-xxx">` เท่านั้น (อ้างไฟล์ภายนอกแล้ว file:// ไม่ขึ้น) · แก้ไอคอนต้องอัปเดต 3 ที่: sprite · icons/*.svg · site.js
assets/icons/*.svg    ไอคอนเดี่ยว (ชุดเดียวกับ sprite)
assets/brand/         logo-on-light.svg (ใช้บนเว็บ — ธีมสว่าง) · logo-on-dark.svg (บนพื้นดำ/เขียว) · logo-mono-white/black.svg · favicon · app icon · character.*
assets/character/     Pixel Nerd 20 ท่า PNG พื้นใส (01-basic … 20-statement) ตัดจาก character sheet
assets/image-reference/  presenter.jpg · house.jpg (รูปอ้างอิงที่ใช้ทดสอบ ย่อแล้ว)
assets/videos/        .mp4 ที่โหลดจาก Higgsfield (ตอนนี้มี nerd-desk-omni-flash.mp4) — ที่เหลือยังใช้ลิงก์ CDN
assets/videos/ugc-house-review-final.mp4/.jpg   คลิปรีวิวบ้านฉบับตัดต่อ (720p 14 MB · ต้นฉบับ 0924.mp4 อยู่ใน ../02-Content/ugc-house-review/)
assets/videos/ugc-house/01…09-*.mp4/.jpg      คลิปต้นฉบับ 9 ช็อต ย่อ 360p (ใช้ใน .clips)
assets/screens/capcut-*.jpg   ภาพหน้าจอ CapCut (timeline · ซูม timeline · export · ซับ)
llms.txt              สรุปเว็บให้ AI answer engine (AEO) — เพิ่ม/เปลี่ยนหน้าต้องแก้ด้วย
CNAME · robots.txt · sitemap.xml (เพิ่มหน้าใหม่ต้องเพิ่มใน sitemap) · README.md
```

---

## 4. กฎแบรนด์ที่ห้ามพลาด

- ชื่อแสดง **"Nerd MarTech"** (เว้นวรรค) ในทุกที่ที่คนเห็น · `nerdmartech` ใช้เฉพาะ URL/ไฟล์/handle · wordmark เน้นสีเฉพาะ **Tech**
- **ห้ามมีคำว่า MAD Marketing / MADMarTech / MADMarTechAI** ที่ไหนอีก (ลบหมดแล้ว) · madmartech.com เป็นเว็บพนัน ห้ามลิงก์
- **ห้ามสีฟ้าทุกเฉด** · เว็บเป็น**ธีมสว่าง** (v2): พื้น off-white #f9f8f6 · การ์ดขาว · ตัวหนังสือ #111111 · muted #5f5b54 · แดง #d25240 (fill/ปุ่มหลัก) / #b3402e (ตัวหนังสือ/ลิงก์) · เหลือง #efd058 (ไฮไลต์ ห้ามเป็นตัวหนังสือ) · เขียว #3b605c · ม่วง #6f5cd6 · pass #7fc8a9 — สีสถานะมี fill/soft/ink ดู `:root`
- **ห้าม letter-spacing** ทุกที่ (อาจารย์ไม่ชอบ + ใช้กับไทยไม่ได้) · **ห้ามเส้นสีขอบด้านเดียว** (border-left/right) — เน้นด้วยพื้นสีอ่อนเต็มกล่อง
- ฟอนต์: **IBM Plex Sans Thai** (body + ปุ่ม + เมนู) · **Space Grotesk** (เฉพาะข้อมูลอังกฤษสั้นๆ: ตัวเลข/label/badge) · **Zen Kaku Gothic New** (accent ญี่ปุ่น ≤15%) — โหลดจาก Google Fonts ทุกหน้า
- โลโก้ = Pixel Nerd head SVG แนวนอน อยู่กลาง header · ห้าม redraw / เพิ่มปาก จมูก คาง
- Visual: Minimal · Nerdy · Japanese editorial · Pixel — ไม่ใช่ cyberpunk / neon / หุ่นยนต์ / stock photo
- น้ำเสียง: ตรง ไม่ขายฝัน · ห้าม "ก่อนใคร" "ปังกว่า" "เปลี่ยน X เป็น Y" "AI ทำแทนคุณ" · บอกตัวที่ FAIL ด้วย · ตัวเลขเครดิต/บาทต้องมาจากที่จ่ายจริง
- Verdict ใช้ **badge PASS / MAYBE / FAIL** (`.badge.pass/.maybe/.fail` + ไอคอน sprite) — ไม่ใช้ ✅⚠️❌ อีก

---

## 5. Design tokens (ใน `:root` ของ style.css)

- Type scale — **ขั้นต่ำ 14px**: `--fs-sm 14` (caption/meta · `--fs-xs` = 14 เท่ากัน เก็บไว้เพื่อ compat) · `--fs-md 16` (เนื้อหา · ปุ่ม · badge) · `--fs-lg 18` (lead ใต้ H1 เท่านั้น) · หัวข้อ `--fs-h1` clamp(30–46) · `--fs-h2 26` · `--fs-h3 20` — **ห้ามใส่ font-size เป็นเลขในหน้า** ใช้ token เสมอ
- `--px:3px` มุมหยักพิกเซล — ใช้กับปุ่ม · badge · tag เท่านั้น (การ์ดใช้ `--r` 12px) · spacing `--s1…--s8`
- Components หลัก: `.site-head/.logo/.logo-wm/.site-nav/.links` · `.hero` · `.eyebrow + .lab` (หัว section แบบ "01 · ชื่อ") · `.card` · `.vcard` (วิดีโอ 9:16 + body + `.out` tag มุมซ้ายบน) · `.badge` · `.kv` · `.steps` (+`.compact` = ตาราง 2×2) · `.lesson` / `.callout` (.note .ok .info .dark) · `.prompt` (+ปุ่ม copy) · `.doc` + `.side-toc` (สารบัญติดซ้ายสำหรับหน้ายาว) · `.uc` / `.uc.two` (layout 1 use case = 1 viewport) · `.brief` (แถบ SAME INPUT หน้า compare) · `.lb` lightbox
- **หน้าใหม่ = เขียนแค่เนื้อหา** header/footer/เมนูมาจาก site.js (แก้เมนูที่ตัวแปร `NAV` ที่เดียว):
  ```html
  <body data-page="ชื่อไฟล์.html">
  <div class="wrap page-hero"><div class="hero">…H1…</div></div>
  <main id="content">
    <section id="x" data-toc="ชื่อในสารบัญ">…</section>
  </main>
  <aside class="side-right">…(ถ้ามี · ว่าง = ไม่กินที่)</aside>
  <script src="assets/site.js"></script>
  ```
  + meta OG/canonical + เพิ่มใน sitemap · layout = header · [TOC ซ้าย 200 | body | ขวา 220] · footer · มือถือ TOC = แถบ journey ล่างจอ

---

## 6. site.js — ของที่ทำงานอัตโนมัติ

- **เครดิต → บาท**: ใส่ `data-cr="24"` บน `<span class="credits">` หรือ `<td class="num">` แล้ว JS เติมบาทให้ · เรต `RATE = 1.29` (Higgsfield แพ็กเกจ $39) · เรตอื่น: $15 = 2.50 · $99 = 1.09 — เปลี่ยนที่ตัวแปรเดียว
- **Layout กลาง**: ดูหัวข้อ 5 · เมนูอยู่ใน `NAV` · ลิงก์เพจ FB `FB` · ข้อความ footer อยู่ใน site.js
- **Copy**: ปุ่ม `.copy` ใน `.prompt` (ก๊อป `<pre>`) / `.anno` (รวม `<mark>`) ทำงานเอง ไม่ต้องใส่ onclick
- **Lightbox**: ใส่ `data-zoom` บน `<img>` → คลิกขยาย · ปิดด้วย Esc / คลิกนอกรูป / ปุ่ม ×

---

## 7. ข้อมูลผลทดสอบที่อยู่บนเว็บ (อย่าแก้ตัวเลขโดยไม่มีหลักฐาน)

**Compare (22 ก.ย. 2569 · โจทย์เดียว: รูปคน + รูปบ้าน + บทไทยเดิม · 9:16 · 8s)**
1 Gemini Omni Flash 1.1 — 24 cr — PASS (ดีสุด/ถูกสุดในกลุ่มผ่าน) · 2 Gemini Omni Flash — 24 — PASS · 3 Veo 3.1 — 80 — MAYBE (เสียงชัด ภาพกระตุก) · 4 MiniMax H3 — 16 — MAYBE (ดูเป็นภาพเจน) · 5 Grok Video 1.5 — 36 — MAYBE (เสียงคอม · ออก 16:9) · 6 Seedance 2.5 — 56 — FAIL (ไทยเพี้ยน) · 7 Kling 3.0 pro — 20 — FAIL (เป็นเขมร) · 8 FLUX 3 Video — 44 — FAIL (ไม่มีบ้าน) · รวม 300 cr
Veo/Kling/Grok รับรูปเดียว → ใช้เฟรมแรกของคลิปอันดับ 1 เป็น start frame

**งานแก้/ต่อคลิป (อยู่ใน Compare #03 #04 #11 แล้ว)**
- Kling 3.0 Omni Edit เปลี่ยนคน → เด็ก — 16 cr — PASS (UC02)
- Genjutsu = motion transfer ของ Higgsfield — 56 cr — ใช้ได้ (เทสต์แรกใส่คนเดิมเลยไม่เห็นเปลี่ยน)
- "Change weather" preset Rain (Video Edit ในหน้าเว็บ Higgsfield) — 36 cr — ยังไม่ขึ้นเว็บ
- Omni Flash 1.1 Extend — 70 cr/ครั้ง — FAIL (เสียงถูกสร้างใหม่) ×2 (UC03) · ผ่าน MCP โดน safety filter
- ตัวการ์ตูน Pixel Nerd บนฉากออฟฟิศจริง — Omni Flash 1.1 reference-to-video 16:9 8s — 24 cr — ผลดีมาก (ไฟล์ assets/videos/nerd-desk-omni-flash.mp4) · Seedance 2.5 โจทย์เดียวกัน 56 cr — แย่กว่า

**ฟีเจอร์พิเศษ Higgsfield (23 ก.ย. 2569 · compare.html#special · ผู้ใช้ดูแล้ว PASS ทั้ง 3 · คนในคลิปสร้างด้วย soul_2 ไม่ใช่คนจริง)**
- Genjutsu Motion Control `hf_mult_motion_control` — คลิป #01 + รูปผู้ชายใส่แว่น → เปลี่ยนคน — 56 cr — …/hf_20260923_102741_fa58a099-aa87-44b3-bcac-e331285d0781.mp4 (แทนเทสต์เดิมที่ใส่คนเดิม)
- Genjutsu Replace Object `hf_mult_replace_object` — คลิป #01 + รูปแจ็คเก็ตยีนส์เขียว → เปลี่ยนเสื้อ — 63 cr — …/hf_20260923_100135_7cc31f30-7ca1-4b19-a655-15b150889468.mp4
- Viral preset "boarding pass" (execute_preset · ใส่รูปเต็มตัว 1 รูป + prompt ชุด) — ชุดไทย → ชุดราตรี → แจ็คเก็ตหนัง ในคลิปเดียว 9s — 63 cr — …/hf_20260923_100238_8750cbb2-09e8-4518-b61b-6ae3f3a1f5af.mp4
- กับดัก: execute_preset ต้องใช้ media_id (media_import_url) ไม่ใช่ job_id — ใส่ job_id แล้ว error และไม่หักเงิน · generate_video ของ Genjutsu เด้ง preset "IN THE DARK" → ส่งซ้ำพร้อม declined_preset_id

**ลิงก์ CDN ที่ใช้อยู่** (Higgsfield อาจลบ — ควรโหลดมาไว้ assets/videos/ แล้วเปลี่ยน src)
- UC01/อันดับ 1: …/hf_20260922_221717_f3028521-d89f-4e31-a02f-b57101865983.mp4
- เด็ก (Kling Edit): …/hf_20260923_065421_f8654f82-fca5-4da2-ad79-94559ee48425.mp4
- ฝน (Change weather): …/hf_20260923_013315_f0728e5f-ba25-4cfa-8397-25fc48a6a718.mp4
- Genjutsu: …/hf_20260922_224524_89072b8a-0713-4898-9764-28af3fb6534c.mp4
- ตัวการ์ตูน Seedance (ไม่ใช้): …/hf_20260923_062531_324b3cf9-53e0-4eff-be69-4b49ecedfd82.mp4
- ที่เหลือดูใน compare.html / use-cases.html (prefix https://d8j0ntlcm91z4.cloudfront.net/user_3FvAUpXpCnZUma0p4ZCgNFe1CGD/)

---

## 8. Higgsfield — สิ่งที่รู้แล้ว (กันพลาดซ้ำ)

> **เขียนบทพูดไทยให้วิดีโอ AI ต้องอ่าน `../00-Context/03-AI_Video_Thai_Speech.md` ก่อน** — คำที่ AI พูดผิดบ่อย (โครงการ · เริ่มต้น · นะคะ) + กฎเขียนบท/prompt ที่ได้จากที่ลองจริง

- Model id ที่ใช้: `gemini_omni_flash_1_1` (mode: reference-to-video / edit) · `kling_video_edit` (Kling 3.0 Omni Edit, roles video_references + image_references) · `hf_mult_motion_control` (Genjutsu) · `seedance_2_5` (mode omni_reference)
- Prompt โครง 6 ส่วน (รูปแบบ · คน+ฉาก "from the reference photo" · การเคลื่อนไหว · "clear natural Thai with accurate lip sync" · บทพูดในเครื่องหมายคำพูดนำด้วย She says in Thai: · "Native Thai speech audio only, no music, no subtitles")
- ตัวการ์ตูนบนฉากจริง: ล็อกสไตล์ใน prompt "flat 2D black-and-white line-art, thick outlines, no 3D, like a hand-drawn sticker composited into a real film"
- ยิงผ่าน MCP บางครั้งเด้ง preset แทน → ส่งซ้ำพร้อม `declined_preset_id` (ไม่คิดเงินซ้ำ)
- ชื่อในบิล ≠ ชื่อปุ่ม (Extend = "Cinematic Video Editor" 70 · ฝน = "Change weather" 36) — เช็ค Transactions เสมอ
- ดาวน์โหลดจาก CDN ทำได้จากเบราว์เซอร์ผู้ใช้เท่านั้น (proxy ฝั่ง Claude โดนบล็อก)

---

## 9. งานค้าง (เรียงตามที่ตกลงไว้)

1. **หน้า Abilities "Higgsfield ทำอะไรได้บ้าง"** — ตาราง: รูป→คลิปพูดไทย ✅ · การ์ตูนบนฉากจริง ✅ · เปลี่ยนอากาศ (ฝน 36) ✅ · เปลี่ยนคน (เด็ก 16) ✅ · Extend ❌ · Upscale / Reframe / เปลี่ยนเสียง / ลบพื้นหลัง — ยังไม่ทดสอบ
2. **Hero scroll-driven** หน้าแรก — คอนเซ็ปต์ "เดินไปกับเนิร์ด": ตัวละครสลับท่าตาม scroll (01 basic → 09 phone → 08 think → 05 work → 14/15 → 12 explain → 16 tired) · headline พิมพ์แบบ terminal · เครดิตนับ · badge PASS/FAIL stamp · CSS+JS ล้วน ไม่ใช้ library · fallback ภาพนิ่ง
3. **หนังสั้น "ตี 2 ที่แล็บ"** — ตัวการ์ตูน 2D บนฉากจริง 4 ช็อต × 8s ด้วย Omni Flash 1.1 (~100 cr) — ต้องเขียน storyboard .md ให้ผู้ใช้ตรวจก่อนยิง (ท่า · ฉาก · กล้อง · เสียง · prompt · เครดิต)
4. โลโก้ผู้ผลิตโมเดลใน Compare — รอผู้ใช้วางไฟล์ทางการที่ `assets/logos/{google,xai,bytedance,kling,minimax,bfl,higgsfield}.svg` แล้วค่อยใส่ (ห้ามวาดเอง)
5. ~~`og:image`~~ ✅ 24 ก.ย. — `assets/og.png` 1200×630 (ครอปจากปกเพจ FB `../99-Logo/fb-cover.png`) ใส่ครบ 4 หน้า + twitter:image · หน้าใหม่ต้องใส่ด้วย
6. โหลด .mp4 ทั้งหมดมาไว้ `assets/videos/` (ชื่อ: uc01-omni-flash · uc02-child-kling-edit · uc02-genjutsu · uc03-extend-1/2 · rain-change-weather · compare-XX-model) แล้วเปลี่ยน src
7. Brand kit round 2 — export lockup PNG/SVG · social 4:5 template 6 series (NERD TEST / COMPARE / FOUND / FAIL / NOTE / TAKE) · ปก 9:16 — ใช้ Playwright render จาก design-system.html
8. ~~หน้าแรก chips / การ์ดล่าสุด~~ ✅ 11 โมเดล · ลิงก์คู่มือแล้ว
9. ~~คลิปตัวอย่าง~~ ✅ 24 ก.ย. — รีวิวบ้าน 85s ขึ้น ai-video + ai-edit แล้ว
10. ~~`sameAs`~~ ✅ facebook.com/NerdMarTech
11. SEO: คำค้นทั้งหมดอยู่ที่ `../00-Context/02-SEO_Keywords.md` (DataForSEO · รอบ 1–4)

---

## 10. วิธีทำงานที่ผู้ใช้ต้องการ

- ตอบภาษาไทย กระชับ ทำทีละสเตป ถามก่อนเมื่อมีหลายทาง
- แก้ไฟล์ตรงๆ แล้ว commit — ผู้ใช้ refresh local ดูเอง แล้ว push เอง
- ก่อนยิง Higgsfield ที่ใช้เครดิต ต้องบอกจำนวนและขอยืนยัน · ยิงตัวเดียวถ้าไม่ได้สั่งเทียบ
- ผู้ใช้เจนรูปเองใน ChatGPT (ส่ง prompt ให้) · วิดีโอ Claude ยิง Higgsfield ให้
- อย่าอนุมาน — ตัวเลข/ผลทดสอบ ถ้าไม่มีหลักฐานให้ถาม
