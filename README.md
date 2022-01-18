# SMAT-Lab.github.io

Currently the project is automatically build and deploy, you just need to update the code and commit to this repository.

## How to update?

### News

smat-lab/src/utility/news/AllNews.js

### People

smat-lab/src/utility/profile/AllMemberProfile.js

smat-lab/src/routes/People.js

### 

## How to update and deploy manually?

1. Modify code in **./smat-lab** Directory

2. **Build and Deploy react**
  
   ```bash
   # make sure in ./smat-lab directory
   npm run deploy
   ```

3.  **Push the code to git repo**
  
   ```bash
   # make sure in ./smat-lab directory
   git add .
   git commit -m "update code"
   ```