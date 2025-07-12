# BlockQuest

Secure Your Wallet. Level Up Your Web3 Skills.

---

## 🚀 Overview
BlockQuest is a full-stack Web3 onboarding and gamification platform built for the Monad testnet. It features wallet health checks, a gamified quest system, AI-powered insights, Farcaster feed notifications, and a leaderboard. The project is split into a modern TypeScript/React frontend and a Node.js/Express/MongoDB backend.

---

## 🏗️ Project Structure

```
monad project/
  blockquest-ai-guardian/   # Frontend (React, Vite, Tailwind, TypeScript)
  blockquest-backend/       # Backend (Node.js, Express, MongoDB)
```

---

## ✨ Features
- **Wallet-based Authentication** (MetaMask, Monad testnet)
- **Wallet Health Checker** (AI-powered)
- **Gamified Quests & XP System**
- **AI Trade & Sentiment Insights**
- **Farcaster Feed & Alpha Signals**
- **Leaderboard & User Profiles**
- **Modern, Responsive UI** (Tailwind, shadcn-ui)

---

## 🖥️ Frontend
- **Tech:** React, Vite, TypeScript, Tailwind CSS, shadcn-ui, ethers.js
- **Directory:** `blockquest-ai-guardian/`

### Setup
```sh
cd blockquest-ai-guardian
npm install
npm run dev
```
- Open [http://localhost:5173](http://localhost:5173)

### Key Scripts
- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

### Environment
- Set backend API URL in `.env`:
  ```
  VITE_API_URL=http://localhost:5000/api
  ```

---

## 🛠️ Backend
- **Tech:** Node.js, Express, MongoDB (Mongoose), JWT, ethers.js
- **Directory:** `blockquest-backend/`

### Setup
```sh
cd blockquest-backend
npm install
npm run dev # or: node app.js
```
- Runs on [http://localhost:5000](http://localhost:5000)

### Environment
- Create a `.env` file:
  ```
  MONGO_URI=mongodb://localhost:27017/blockquest
  JWT_SECRET=your_jwt_secret
  PORT=5000
  OPENAI_API_KEY=your_openai_key
  NEYNAR_API_KEY=your_neyner_key
  ```

### API Endpoints
- `POST   /api/auth/nonce` — Get login nonce
- `POST   /api/auth/login` — Wallet login (MetaMask/Monad)
- `GET    /api/user/profile` — User profile, XP, wallet health
- `PATCH  /api/user/xp` — Update XP
- `POST   /api/ai/analyze-wallet` — AI wallet health
- `POST   /api/ai/sentiment` — AI sentiment
- `POST   /api/ai/trade-analysis` — AI trade analysis
- `GET    /api/signals/feed` — Farcaster feed
- `POST   /api/signals/track` — Track Farcaster user
- `GET    /api/quests` — All quests
- `POST   /api/quests/complete` — Complete quest
- `GET    /api/quests/status` — Quest status
- `GET    /api/leaderboard` — Top XP users

---

## 🔒 Authentication
- Wallet-based (MetaMask, Monad testnet)
- Nonce + signature login, JWT session

---

## 🧩 Tech Stack
- **Frontend:** React, Vite, TypeScript, Tailwind CSS, shadcn-ui, ethers.js
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, ethers.js
- **AI/3rd Party:** OpenAI, Neynar, Farcaster, Monad RPC

---

## 🖼️ Branding & Favicon
- Favicon matches the shield logo in the navbar (SVG, gradient background)

---

## 🤝 Contributing
1. Fork the repo
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License
MIT

---

## 👾 Contact
- [GitHub Issues](https://github.com/rishikgoud/monad-blitz-hyderabad/issues)
- [BlockQuest Team](mailto:support@blockquest.com) 