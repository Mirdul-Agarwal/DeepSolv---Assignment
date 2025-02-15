**Facebook Insights Microservice**
This project is a Facebook Insights microservice that allows you to fetch and analyze the insights of any Facebook page using its username. The microservice scrapes Facebook page data and stores the information in a MongoDB database, making it accessible via RESTful API endpoints.

**Key Features**
Page Data Scraping:

Scrapes details like Page Name, Profile Picture, Email, Website, Category, Followers Count, Likes, and Creation Date from Facebook pages based on the username.
Fetches posts, comments, and followers data.
Database Storage:

All scraped data is stored in MongoDB using separate schemas for pages, posts, and followers, maintaining relationships between entities.
**API Endpoints:**

GET /api/pages/:username: Fetches page data by username. If the data is not found in the database, it is scraped and stored.
GET /api/pages: Allows filtering pages by follower count, page name, and category.
GET /api/pages/:username/followers: Retrieves the followers of a given Facebook page.
GET /api/pages/:username/posts: Retrieves recent posts from a Facebook page, with pagination support.


**Technologies Used**
Node.js & Express.js for building the backend REST API.
MongoDB for database management and storing scraped data.
Axios and Cheerio for scraping Facebook pages.

