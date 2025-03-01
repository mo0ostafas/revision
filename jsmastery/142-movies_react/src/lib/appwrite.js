import { Client, Databases, ID, Query } from "appwrite";

// Create a new Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

// Create a new Appwrite database instance
const db = new Databases(client);
const DB_ID = import.meta.env.VITE_APPWRITE_DB_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

// Fetch trending movies from the database
export const getTrendingMovies = async () => {
  try {
    const res = await db.listDocuments(DB_ID, COLLECTION_ID, [
      Query.orderDesc("count"),
      Query.limit(6),
    ]);

    return res.documents;
  } catch (error) {
    console.error(error);
  }
};

// Increase search count for a movie
export const updateSearchCount = async (searchTerm, movie) => {
  try {
    const result = await db.listDocuments(DB_ID, COLLECTION_ID, [
      Query.equal("searchTerm", searchTerm),
    ]);

    if (result.documents.length > 0) {
      const doc = result.documents[0];

      await db.updateDocument(DB_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      await db.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
