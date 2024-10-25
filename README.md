# PantryBot

Description

## Tech Stack

**Frontend:** React, Vite, Bootstrap

**Server:** Node, Express

**Database:** MongoDB

## Frontend Information:

**Documentation:**

PantryBot frontend uses React, Vite, Bootstrap, React Router, and React Hook Form.

Vite is used to speed up development using React. Bootstrap is for easy styling.
React router is used for easy implementation of routing for React applications.
React hook form is used for form validation.

[React Documentation](https://react.dev/)

[Vite Documentation](https://vite.dev/)

[React Bootstrap Documentation](https://react-bootstrap.netlify.app/)

[React Router Documentation](https://reactrouter.com/en/main)

[React Hook Form Documentation](https://www.react-hook-form.com/)

**Styling Components:**

Please use these pre-styled components to create our app in the frontend:

[React Bootstrap Components](https://react-bootstrap.netlify.app/docs/components/accordion)

**Other Info:**

Most editing should be done in the src folder. The only time you will need to edit outside the src folder is when adding images and editing enviromental variables. Images should be placed in the public folder and enviromental variables should be placed or edited in the .env file. The component folder is used for components that will be reused multiple times acorss the app. The constants folder is for constants that will be used across that app but will not change. The pages folder includes all our pages. The layouts folder contains layouts that are applied to multiple pages. When adding a page, make sure to add it to the router in main.jsx. The app.scss contains information about our theme, I don't think we will have to edit this file much as bootstrap already includes most of our styling. The only change I added to this file was overriding the bootstap primary color of blue to our primary color of green.

## Frontend Installation

Install the latest version of NodeJS:

[Install Link](https://nodejs.org/en)

Change directory to pantrybot-frontend folder:

```bash
  cd pantrybot-frontend
```

Install node packages:

```bash
  npm install
```

Run development server:

```bash
  npm run dev
```

## Authors

- Gavin Kirwan [@gkirwan](https://www.github.com/gkirwan43)
- Ethan Wheat [@ethanwheat](https://github.com/ethanwheat)
- Add your name and github link here
