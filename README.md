# MADMarTechAI

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

## ขึ้น GitHub Pages ครั้งแรก (ทำครั้งเดียว)

1. สร้าง repo ใหม่บน GitHub ชื่อ `madmartechai` (Public)
2. ใน Terminal ที่โฟลเดอร์นี้:
   ```
   git remote add origin https://github.com/<USER>/madmartechai.git
   git push -u origin main
   ```
3. ที่ GitHub → Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save
4. รอ ~1 นาที เว็บขึ้นที่ `https://<USER>.github.io/madmartechai/`

## อัปเดตครั้งถัดไป

Claude แก้ไฟล์ + commit ให้ในโฟลเดอร์นี้ → อาจารย์ `git push` อย่างเดียว (หรือกด Push ใน GitHub Desktop) → เว็บอัปเดตเองใน ~1 นาที

## ถ้าจะใช้โดเมนตัวเอง

สร้างไฟล์ `CNAME` ใส่ชื่อโดเมน 1 บรรทัด (เช่น `ai.madmarketing.co`) แล้วชี้ DNS CNAME ไปที่ `<USER>.github.io`

## หมายเหตุ

- ลิงก์วิดีโอตอนนี้ชี้ไป CDN ของ Higgsfield ซึ่งอาจหมดอายุ — ควรดาวน์โหลดมาไว้ใน `assets/videos/` แล้วเปลี่ยน `src` เป็น `assets/videos/<ชื่อไฟล์>.mp4`
- ไฟล์ `.nojekyll` บอก GitHub Pages ว่าไม่ต้องรัน Jekyll (เสิร์ฟไฟล์ตรงๆ)
