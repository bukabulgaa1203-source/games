# Мини тоглоомын вебсайт

Энэ төсөл нь Python + Flask ашигласан 5 жижиг тоглоомтой вебсайт юм.

## Тоглоомууд
1. Санасан тоог таах
2. Хайч, Чулуу, Даавуу
3. Зураг таах
4. Фибоначчигийн таавар
5. Төөрдөг байшин

## VS Code дээр ажиллуулах заавар

### 1) Төслийг задлах
Zip файлаа нэг хавтас руу задлана.

### 2) VS Code дээр нээх
- VS Code нээнэ
- `File > Open Folder`
- `mini_games_website` хавтсыг сонгоно

### 3) Terminal нээх
- `Terminal > New Terminal`

### 4) Virtual environment үүсгэх
Windows:
```bash
python -m venv venv
venv\Scripts\activate
```

Mac / Linux:
```bash
python3 -m venv venv
source venv/bin/activate
```

### 5) Сангууд суулгах
```bash
pip install -r requirements.txt
```

### 6) Вебсайтаа ажиллуулах
```bash
python app.py
```

### 7) Browser дээр нээх
Доорх хаягийг browser дээр нээнэ:
```bash
http://127.0.0.1:5000
```

## Хүсвэл дараа нь нэмэж сайжруулж болох зүйлс
- Хэрэглэгчийн нэрээр оноо хадгалах
- SQLite database холбох
- Админ самбар хийх
- Илүү олон зурагтай тоглоом нэмэх
- Дуу, animation нэмэх


---

## Render дээр үнэгүй байрлуулах

### 1) GitHub руу upload хийх
- GitHub дээр шинэ repo үүсгэнэ
- Энэ төслийн бүх файлыг тэр repo руу upload хийнэ

### 2) Render акаунт нээх
- Render дээр бүртгүүлнэ
- GitHub account-оо холбоно

### 3) Repo-оо deploy хийх
- Render Dashboard > **New +** > **Blueprint**
- GitHub repo-оо сонгоно
- Repo дотор байгаа `render.yaml` файлыг Render автоматаар уншина
- Build command: `pip install -r requirements.txt`
- Start command: `gunicorn app:app`

### 4) Deploy хийсний дараа
- Render танд public URL өгнө
- Тэр URL-аар бусад хүмүүс таны тоглоомын сайтыг нээж болно

### Тэмдэглэл
- Free plan дээр сайт 15 минут ашиглагдахгүй бол түр sleep төлөвт орж болно
- Дахин нээхэд хэдэн секунд хүлээх тохиолдол гарч магадгүй
- Энэ төсөл demo, portfolio, суралцах зориулалтаар маш тохиромжтой
