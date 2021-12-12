App about 80% complete, functionality will be added & bugs fixed in the order:
- App will be made responsive
- Pad is somewhat buggy. Switching routes from Pad to Notes and back will erase all current state from Pad, including Undo/Redo history
- Implement checkbox to mark note as completed, and 'delete all completed notes' button
- Implement file uploading feature for both 'Notes' and 'Pad' tabs

## Installation
  ###### For production build
  - Clone repository into local machine
  - cd to notesBackend
  - type 'npm run setup'
  - When setup completes, type 'npm start'
  - Wait for "Connected to MongoDB" message
  - Go to http://localhost:3001 on your browser
  - Login using the credentials (Or sign up with a new account!):
    - username:  guestacc
    - password:  guestpass1
    
  Note that API key and password SECRET is present in .env. SECRET is a dummy string for this github-uploaded version and not the one used locally
  
  API key is for MongoDB, but for my second account created only for exposure in Github
  
## Tech stack
MERN stack
###### frontend
  - React+Redux+Redux thunk
  - Typescript
  - Axios
  - ChakraUI
  - dnd-kit (Animation for note sorting only)
  - TinyMCE
  
###### backend + DB
  - Typescript
  - Mongoose + MongoDB Atlas
  - JSONWebToken + bcrypt for user auth & password hashing
  - Express for API
  

## Functionality
###### login
- User authentication using JSON web token
- Signup forms are validated client-side and server-side
- Check username availability queries MongoDB database for any matching usernames
- Username must be checked, and password requirements must be met or signup form will not allow submission
- Upon successful login, authentication token will be sent back from backend API and stored client-side in localStorage
- Future sessions you will be logged in on every site visit (until browser data is cleared)

###### note-adding
- 'Notes' tab
- Notes in the database associated with user is fetched & stored as a local copy upon login or initialization
- New notes can only be added when user is logged in with a valid authentication token
- Pressing '/' anywhere on the page will cause new note form to be focused
- Drag + drop sorting of notes is allowed
  - With every sort, note movement is animated, 
  - When click is released, the local working copy of the sorted note's position values will be updated
  - When click is released, PUT request will also be sent to backend API to update the Mongo database's note position values, syncing the data with the frontend
- Editing of notes, adding of notes, and deletion of notes will also update the local copy of notes, and request is sent to backend to update the database, syncing the two data instances
- Local copy of notes stay synced with database upon completion of all actions, assuming connection with minimal packet loss

###### WYSIWYG editor
- 'Pad' tab
- Editor is customized using TinyMCE library
- Editor content is persistently stored in database, and is fetched and stored locally on login or app initialization
- Ctrl+S to save content, which will be sent to backend API
- Help button in toolbar lists all hotkeys 

###### misc
- User and About tab not completed yet
- Currently focusing on important core functionality with 'Notes' and 'Pad' tab
- User tab will display additional information about logged-in user, About tab will list down tech stack
