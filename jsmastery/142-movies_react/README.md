# Movies Fetching App
A simple React app for fetching and displaying movies in a card-style layout. The app is styled using Tailwind CSS and features a search method implemented with Appwrite to fetch trending movies dynamically.

This project is based on recent videos by **JSMastery**, and I built it as part of my learning process.

## Live Demo
[Movies App](https://movies.moOostafas.com)

## Features
- Fetch and display movies in a responsive grid layout
- Search for trending movies using Appwrite
- Style with Tailwind CSS for a modern UI
- Deploye online for easy access

## Technologies Used
- **React**: Frontend framework
- **Tailwind CSS**: Styling
- **Appwrite**: Backend services for movie search
- **useDebounce**: Custom react hook for delaying search term updating
- **Vite**: Build tool for fast development

## Installation & Setup
1. Clone the repository
2. Navigate to the project folder
3. Install dependencies:
   ```sh
   npm i
   ```
4. Create an `.env` file and add your Appwrite and TMDB API credentials:
   ```env
   # tmdb config
   VITE_TMDB_ACCESS_TOKEN=
   
   # appwrite config
   VITE_APPWRITE_PROJECT_ID=
   VITE_APPWRITE_DB_ID=
   VITE_APPWRITE_COLLECTION_ID=
   ```
5. Start the development server
   ```sh
   npm run dev
   ```

## Contribution
Feel free to fork the repository and submit pull requests for improvements!
