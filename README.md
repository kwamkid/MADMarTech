# NerdMarTech — nerdmartech.com

เว็บรวม use case · prompt · ผลเปรียบเทียบโมเดล AI สำหรับงานการตลาด — static HTML ไม่มี build step
แบรนด์ในเครือ MAD Marketing · จัดทำโดย AOO Commerce

## โครงสร้าง

```
index.html        หน้าแรก
use-cases.html    Use Cases
prompts.html      Prompts ที่ใช้จริง (ปุ่ม copy)
compare.html      Model Compare (+ FAQ schema สำหรับ AEO)
assets/style.css  สไตล์ร่วมทุกหน้า
assets/videos/    วางไฟล์ .mp4 ที่ดาวน์โหลดจาก Higgsfield ไว้ที่นี่ (แทนลิงก์ CDN)
CNAME             โดเมนของ GitHub Pages (nerdmartech.com) — ห้ามลบ
robots.txt / sitemap.xml   SEO — เพิ่มหน้าใหม่ต้องเพิ่มใน sitemap ด้วย
```

## Hosting

- GitHub repo: `kwamkid/MADMarTech` → GitHub Pages (branch `main` / root)
- โดเมน: `nerdmartech.com` จดที่ Cloudflare · DNS ชี้มาที่ GitHub Pages

### DNS ที่ Cloudflare (ตั้งครั้งเดียว)

| Type | Name | Content | Proxy |
|---|---|---|---|
| A | `@` | `185.199.108.153` | DNS only |
| A | `@` | `185.199.109.153` | DNS only |
| A | `@` | `185.199.110.153` | DNS only |
| A | `@` | `185.199.111.153` | DNS only |
| CNAME | `www` | `kwamkid.github.io` | DNS only |

แล้วที่ GitHub → Settings → Pages → Custom domain ใส่ `nerdmartech.com` → Save → รอ DNS check → ติ๊ก Enforce HTTPS

## อัปเดตครั้งถัดไป

Claude แก้ไฟล์ + commit ให้ในโฟลเดอร์นี้ → เปิด GitHub Desktop จะเห็น commit ใหม่รอ → กด **Push origin** → เว็บอัปเดตเองใน ~1 นาที

## SEO / AEO checklist

- [x] title + description + canonical ทุกหน้า
- [x] Open Graph (แชร์ FB/LINE)
- [x] JSON-LD: WebSite + Organization (index) · FAQPage (compare)
- [x] robots.txt + sitemap.xml
- [ ] ภาพ og:image 1200×630 (ยังไม่มี — ใส่ที่ `assets/og.png` แล้วเพิ่ม `<meta property="og:image">`)
- [ ] ส่ง sitemap เข้า Google Search Console หลังโดเมนขึ้น

## หมายเหตุ

- ลิงก์วิดีโอตอนนี้ชี้ไป CDN ของ Higgsfield ซึ่งอาจหมดอายุ — ควรดาวน์โหลดมาไว้ใน `assets/videos/` แล้วเปลี่ยน `src`
- ไฟล์ `.nojekyll` บอก GitHub Pages ว่าไม่ต้องรัน Jekyll
