# 🍽️ Recipe Finder

A responsive Recipe Finder web application built using **React.js** and **TheMealDB API**. Search for your favourite meals, explore recipes, and discover ingredients and cooking instructions.

🌐 **Live Demo:** https://recipie-finder-pi.vercel.app/

## ✨ Features

- 🔍 **Search Recipes:** Search for recipes by meal name.
- 🍲 **Recipe Details:** View complete information about selected recipes.
- 🥗 **Ingredients:** Get ingredient names and their measurements.
- 👨‍🍳 **Cooking Instructions:** Follow step-by-step cooking instructions.
- ▶️ **YouTube Integration:** Watch recipe videos when available.
- ⏳ **Loading States:** Displays loading messages while fetching data.
- ⚠️ **Error Handling:** Handles API errors and unavailable recipes.
- 📱 **Responsive Design:** Works across desktop and mobile devices.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Programming Language:** JavaScript
- **Styling:** CSS3
- **Icons:** Lucide React
- **API:** TheMealDB API
- **Deployment:** Vercel

## 🔗 API Used

This project uses the free [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe information.

| API Endpoint | Purpose |
|---|---|
| `search.php?s=pizza` | Search recipes by name |
| `lookup.php?i=52795` | Fetch complete recipe details |
| `random.php` | Get a random recipe |


## 📂 Project Structure

```text
recipe-finder/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── pages/
│   │   └── RecipeDetails.jsx
│   │
│   ├── services/
│   │   └── recipeApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Run Locally

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Navigate to the project folder**

```bash
cd recipe-finder
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the local URL**

```text
http://localhost:5173/
```

## 📸 Live Application

Check out the deployed application:

👉 https://recipie-finder-pi.vercel.app/

## 👩‍💻 Author

**Shrawani Wankhade**

- GitHub: https://github.com/shrawani10317

---

⭐ If you like this project, consider giving it a star on GitHub!

**Built with ❤️ using React.js**
