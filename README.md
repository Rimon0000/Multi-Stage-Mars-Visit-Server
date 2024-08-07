# Multi-Stage-Mars-Visit-Server

## Installation:
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `.env.example` to `.env`.
4. Run the server using `npm run dev`.

### Before Pushing Code:
1. Before pushing your code to the remote repository, ensure that you have run the following command in your terminal (Git Bash):
    ```bash
    rm -rf .git
    ```

## Configuration:
- Environment Variables:
  - `PORT`: Port number the server listens on. Default: 3000
  - `MONGODB_URI`: URI for MongoDB database.
  - `ACCESS_TOKEN_SECRET`: ACCESS_TOKEN_SECRET key for JWT token generation.

## Dependencies:
- `cors`: Express middleware for enabling CORS.
- `dotenv`: Loads environment variables from .env file.
- `express`: Web framework for Node.js.
- `mongodb`: MongoDB driver for Node.js.
- `nodemon`: Utility for automatically restarting the server during development.

###  
- Project Live Link  -> [https://multi-stage-mars-visit-server.vercel.app]()  
