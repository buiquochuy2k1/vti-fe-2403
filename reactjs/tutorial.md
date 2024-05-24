///////////////////////////Để chạy được 1 project reactjs + vite thì chúng ta cần phải mở terminal------------------------------

Bước 1: Mở terminal >> Nhập "npm create vite@latest"
Bước 2: nhập dấu "." => "Project Name"
Bước 3: Chọn "reactjs"
Bước 4: Chọn "Javascript + SWC"
Bước 5: Chạy lệnh "npm i"
Bước 6: Chạy "npm run dev"

///////////////////////////Install TailWind CSS------------------------------
Bước 1: Vào Project
Bước 2: npm install -D tailwindcss postcss autoprefixer
Bước 3: npx tailwindcss init -p
Bước 3: Vào tailwind.config.js
Bước 4: content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],

Bước 5: Vào index.css
Bước 6: Điền vào
@tailwind base;
@tailwind components;
@tailwind utilities;

///////////////////////////Plugin Prettier AutoSort Class------------------------------

Bước 1: npm install -D prettier prettier-plugin-tailwindcss

Bước 2: Tạo file

// .prettierrc
{
"plugins": ["prettier-plugin-tailwindcss"]
}
