# Bhavya Priya N - Portfolio

A modern, single-page portfolio built with **React + Vite + Tailwind CSS**, deployable to **GitHub Pages**.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build a production bundle locally:

```bash
npm run build
npm run preview
```

---

## 2. Update your content

Everything you'll want to change lives in **one file**:

```
src/data/portfolio.js
```

This includes your name, headline, intro, social links, resume path, experience, skills, projects, certifications, education, and GitHub repos. You should not need to touch any component file to update your info.

**Your resume:** the PDF you provided is already placed at `public/Bhavyapriya_N_Resume.pdf` and linked from the Hero's "Download Resume" button via `personal.resumeUrl` in `src/data/portfolio.js`. To swap it later, replace the file in `public/` and update `resumeUrl` if the filename changes.

**Profile photo:** none is included since one wasn't provided. To add one, drop an image into `public/` (e.g. `public/photo.jpg`) and reference it from `Hero.jsx`.

**GitHub repos:** the "Engineering Activity" section currently links to your GitHub profile only, since no specific repos were provided. To feature specific repos with descriptions, fill in the `githubRepos` array in `src/data/portfolio.js` - the section will automatically switch to showing repo cards once that array is non-empty.

---

## 3. Deploy to GitHub Pages

### Step 1 - Set the base path

Open `vite.config.js` and set `base` to match your repository name:

```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',   // e.g. '/portfolio/'
})
```

- If you're deploying to a **project repo** (e.g. `github.com/BhavyapriyaN/portfolio`), use `base: '/portfolio/'`.
- If you're deploying to your **user/organization root site** (a repo literally named `BhavyapriyaN.github.io`), use `base: '/'`.

### Step 2 - Push this project to a new GitHub repository

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/BhavyapriyaN/your-repo-name.git
git push -u origin main
```

### Step 3 - Enable GitHub Pages via GitHub Actions

1. On GitHub, go to your repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. That's it - the included workflow at `.github/workflows/deploy.yml` will automatically build and deploy the site on every push to `main`.

Your site will be live at:

```
https://BhavyapriyaN.github.io/your-repo-name/
```

(or `https://BhavyapriyaN.github.io/` if you used the root user-site repo.)

### Step 4 - Verify

Check the **Actions** tab in your repo to watch the deploy run. Once it finishes, the Pages URL will also appear under **Settings → Pages**.

---

## 4. Adding a custom domain later (optional)

1. In your repo, go to **Settings → Pages → Custom domain**, enter your domain, and save. This creates a `CNAME` file in the deployed site.
2. At your domain registrar, add either:
   - A `CNAME` record pointing your subdomain (e.g. `www`) to `BhavyapriyaN.github.io`, or
   - `A` records for the apex domain pointing to GitHub's Pages IPs (GitHub's Pages docs list the current IPs).
3. Once DNS propagates, GitHub will issue an HTTPS certificate automatically - check "Enforce HTTPS" in the same Pages settings once available.
4. If you switch to a custom domain at the root (no path prefix), set `base: '/'` in `vite.config.js` and redeploy.

---

## 5. Where to update things (quick checklist)

| What | Where |
|---|---|
| Name, headline, intro, socials, resume link | `src/data/portfolio.js` → `personal` |
| Hero stats | `src/data/portfolio.js` → `heroStats` |
| About text & facts | `src/data/portfolio.js` → `about` |
| Work experience | `src/data/portfolio.js` → `experience` |
| Skills | `src/data/portfolio.js` → `skillGroups` |
| Featured projects | `src/data/portfolio.js` → `projects` |
| Certifications & awards | `src/data/portfolio.js` → `certifications`, `awards` |
| Education | `src/data/portfolio.js` → `education` |
| GitHub repos | `src/data/portfolio.js` → `githubRepos` |
| Resume PDF file | `public/Bhavyapriya_N_Resume.pdf` |
| Favicon | `public/favicon.svg` |
| GitHub Pages base path | `vite.config.js` → `base` |

---

## Tech stack

- React 18
- Vite 5
- Tailwind CSS 3
- GitHub Actions for CI/CD deployment
