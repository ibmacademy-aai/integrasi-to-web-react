<h1 align="center"> IBM Cloud Deployed Model API to React </h1>
<p align="center"> Integrasi model yang sudah di deploy di IBM Cloud ke web berbasis React</p>

<div align="center">

<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
<img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54">
<img src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white">

</div>

## How to run

### Flask Backend ``` /backend ```

#### 1. Buat virtual environment
Buat virtual environment baru dengan : 

```
python -m venv new-env
``` 

#### 2. Jalankan virtual environment
Jalankan virtual environment dengan : 

- Windows

```
.\/new-env/Scripts/activate.bat 
```
Atau
```
.\/new-env/Scripts/activate.ps1 
```

- Linux

```
source /new-env/Scripts/activate 
```

#### 3. Instal modul yang diperlukan
Instal modul yang diperlukan pada project yang sudah ditulis di ``` requirements.txt ``` dengan : 
```
pip install -r requirements.txt
```
Tunggu hingga selesai

#### 4. Buat file ``` .env ``` dan isi kredensial yang diperlukan
Buatlah sebuah file ```.env``` dengan contoh file ```.env.example```.
Isi file ``` .env ``` dengan API_KEY dan SCORING_URL yang sesuai dengan milik anda.

```
API_KEY=YOUR_API_KEY # Cari di pengaturan profil IBM Cloud
SCORING_URL=YOUR_MODEL_DEPLOYMENT_URL # Cari di deployments model kamu di IBM Studio
```

#### 5. Jalankan Flask Backend
Jalankan Flask Backend dengan : 
``` 
python app.py
```
Tunggu hingga selesai, aplikasi akan aktif di ```localhost:5000```.

### React Frontend ``` /frontend ```

#### 1. Instal dependency yang diperlukan
Install dependency yang diperlukan dengan :
``` 
npm install 
```
Tunggu hingga selesai.

#### 2. Jalankan aplikasi
Jalankan aplikasi dengan : 
```
npm run dev
```
Aplikasi akan berjalan di ``` localhost:5173 ```

---



