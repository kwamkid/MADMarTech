# MADMarTech

เว็บรวม use case · prompt · ผลเปรียบเทียบโมเดล AI สำหรับงานการตลาด — static HTML ไม่มี build step

## โครงสร้าง

```
index.html        หน้าแรก
use-cases.html    Use Cases
prompts.html      Prompts ที่ใช้จริง (ปุ่ม copy)
compare.html      Model Compare
assets/style.css  สไตล์ร่วมทุกหน้า
assets/videos/    วางไฟล์ .mp4 ที่ดาวน์โหลดจาก Higgsfield ไว้ที่นี่ (แทนลิงก์ CDN)
```

## ขึ้น GitHub Pages ครั้งแรก — ด้วย GitHub Desktop (ทำครั้งเดียว)

1. GitHub Desktop → **File → Add Local Repository** → เลือกโฟลเดอร์ `MADMarTech` นี้ (มี git อยู่แล้ว)
2. กดปุ่ม **Publish repository** → ชื่อ `madmartech` → **เอาติ๊ก "Keep this code private" ออก** (Pages ฟรีต้องเป็น Public) → Publish
3. เปิด repo บน GitHub → Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save
4. รอ ~1 นาที เว็บขึ้นที่ `https://<USER>.github.io/madmartech/`

## อัปเดตครั้งถัดไป

Claude แก้ไฟล์ + commit ให้ในโฟลเดอร์นี้ → เปิด GitHub Desktop จะเห็น commit ใหม่รอ → กด **Push origin** → เว็บอัปเดตเองใน ~1 นาที

## ถ้าจะใช้โดเมนตัวเอง

สร้างไฟล์ `CNAME` ใส่ชื่อโดเมน 1 บรรทัด (เช่น `ai.madmarketing.co`) แล้วชี้ DNS CNAME ไปที่ `<USER>.github.io`

## หมายเหตุ

- ลิงก์วิดีโอตอนนี้ชี้ไป CDN ของ Higgsfield ซึ่งอาจหมดอายุ — ควรดาวน์โหลดมาไว้ใน `assets/videos/` แล้วเปลี่ยน `src` เป็น `assets/videos/<ชื่อไฟล์>.mp4`
- ไฟล์ `.nojekyll` บอก GitHub Pages ว่าไม่ต้องรัน Jekyll (เสิร์ฟไฟล์ตรงๆ)
