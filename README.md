This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Personal Dashboard

[![Personal Dashboard Screenshot](/public/image.png)](https://www.youtube.com/watch?v=cMV8q8gnACo)

Personal Dashboard is a project designed to streamline your daily workflow by bringing together essential tools and features into one convenient interface.Simplify your daily routine and stay motivated with essential tools at your fingertips. Built using Next.js framework and Tailwind CSS, this dashboard offers a range of functionalities to enhance your productivity and convenience.

Find the detailed video tutorial demonstrating the usage and features of the Personal Dashboard.

Video Link : https://www.youtube.com/watch?v=cMV8q8gnACo

Website Link : https://personal-dashboard-nu.vercel.app/

## How to Use

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the development server with `npm run dev`.
4. Access the dashboard through the provided URL.
5. Input your name when prompted to personalize the dashboard experience.
6. Explore the various features and tools available on the dashboard.

## Technologies Used

- Next.js framework -> [Click here](https://nextjs.org/)
- Tailwind CSS -> [Click here](https://tailwindcss.com/resources)
- Deployed on - Vercel -> [Click here](https://vercel.com)
- API - Weather API -> [Click here](https://www.weatherapi.com/)
- API - Quotes JSON API -> [Click here]()
- Spotify -> [Click here](https://open.spotify.com/)
- Github, Git

## Features

1. **Unified Search Bar:**

   - Access multiple search engines including Google, Bing, and DuckDuckGo from a single search bar. Results open in a new tab for seamless browsing experience.

2. **Clock and Greetings:**

   - A prominent clock at the center keeps you informed about the current time. Below the clock, a greeting card offers personalized messages such as "Good morning," "Good afternoon," or "Good evening," based on the time of day and shows admin name with it.

3. **Motivational Thoughts:**

   - The thought card displays motivational quotes to inspire and uplift you throughout the day.

4. **Weather Information:**

   - Stay updated on the current weather conditions and tomorrow's forecast. The weather card fetches data based on your current geolocation and allows you to customize the city for weather updates.
     Note : Allow permission to get location info. To ge the location as per the particular geolocation.

5. **Music Sidebar:**

   - Enjoy your favorite Spotify playlists directly from the dashboard's music sidebar. Easily select and play music while you work.

6. **Kanban Board:**

   - Organize your tasks and to-dos with the Kanban board feature. Create multiple lists, add new tasks, mark completed items, and manage your tasks efficiently.

## Programming Langugages

- JSX
- JavaScript
- HTML
- CSS

## Libraries Used

- TailwindCSS
- React Icons

## Pages built

- 1. Welcome Page
- 2. Dashboard Page (Main page)
- 3. Kanaban Board Page

## Logics Used

- Rounting Handler for rounting (Folder based Routing)
- Used Context API (to globalize the name of admin throught the app)
- Hooks -> useState, useEffect, useContext, createContext
- props
- setInterval (for Clock)
- Fetch Promises (for Quotes, Weather)
- Geolocation Navigator web API (for lattitude, longitude)
- Promise for geolocation navigator
- Sending child data to parent using handlers
- Map Function

## Additional Notes

- Make sure to allow location access for accurate weather updates.
