# Bridging Barriers Portal, Information Hub & Interactive Career Platform

### Description

This project aims to provide a comprehensive information hub and interactive career platform for young people. It focuses on improving their knowledge, self-confidence, and access to opportunities to enhance personal development and achieve career success.

The platform utilizes Next.js as the React framework for building the front-end interface. It integrates with Trello for project management, allowing efficient collaboration and task tracking. The component tree structure is visualized using Draw.io.

For the back-end, a RESTful API is developed using Node.js, providing data and functionality to the front-end. Jest and Supertest are utilized for unit testing and component testing, ensuring code quality and reliability. Cypress is employed for end-to-end testing, verifying the platform's functionality from a user's perspective.

Authorization and authentication are handled using Auth0, which provides secure and seamless user authentication. User metadata, such as profile information and access permissions, is stored within Auth0.

The database is hosted on Amazon DB, utilizing PostgreSQL as the relational database management system. Deployment of the platform is facilitated by Render.com, while AWS is utilized for hosting, ensuring secure and scalable infrastructure. SSL encryption is implemented to enhance data security and privacy.

Please note that this repository focuses on the front-end aspect of the project. The back-end has its own separate repository, which you can find at [link-to-backend-repo].

This project is open source and welcomes contributors who are passionate about supporting young people in their personal development and career growth.

## Tech Stack

- **Front-end Framework:** Next.js
- **Project Management:** Trello
- **Component Tree Visualization:** Draw.io
- **Back-end Framework:** Node.js
- **Unit Testing:** Jest, Supertest
- **End-to-End Testing:** Cypress
- **Authorization & Authentication:** Firebase
- **Database:** Amazon DB (PostgreSQL)
- **Deployment:** Render.com
- **Hosting:** AWS
- **SSL Encryption:** Implemented
- **GitHub Strategy:**
  The project follows a GitHub-based workflow for version control and collaboration. It includes the following branches:

**main:** The main branch represents the stable and production-ready state of the project. It should only contain tested and approved code.
development: The development branch serves as the primary branch for ongoing development. It acts as the integration branch for various features and bug fixes.

_Code Review:_
For any changes to be merged into the development branch, a code review process is followed. Team members review the code changes in the pull request, provide feedback, and suggest improvements. Once approved, the changes can be merged into the develop branch.

_Release Management:_
As the project approaches a stable release, a release branch is created from the development branch. This release branch is used for final testing, bug fixing, and preparing the release.

_Version Tagging:_
When the release branch is ready for deployment, a version tag is created to mark the release point. This tag helps in tracking specific releases and provides a reference for future bug fixes or updates.

_Deployment:_
The code from the release branch is deployed to the production environment. This can involve various deployment strategies such as manual deployments, automated deployments using CI/CD tools, or integration with cloud platforms for seamless deployments.

_Maintenance:_
After the release, any bug fixes or updates can be performed on the release branch and then merged back into the development branch. This ensures that the main development branch remains stable for ongoing feature development.

### Installation:

Clone the repository.
Install dependencies using npm install.
Usage
Start the development server using npm run dev.
Access the application in your web browser at http://localhost:3000.
Contributing
