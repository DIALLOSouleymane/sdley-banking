# sdley banking app

## Technologies
- React
- Nextjs
- Plaid: banking API
- appwrite: it will allow us building our backend within minutes and scale effortlessly using Appwrite's open-source plateform
chart.js: charting library (graphique) ; it will allow us create any chart we can imagine
- tailwindcss: utilility for css framework allowing us to have custom css quickly without having separate css files
- shadcn/ui: to power up our **tailwindcss** which allow us to have components buid in the top of tailwindcss like alert dialog, etc.
- Sentry (for security): application monitoring software. 
We'll use it to implement session replay. It will helps us hide all sensitive data.

### More details?
- Shadcn UI est une bibliothèque de composants personnalisables permettant de créer des applications Web modernes avec React et Tailwind CSS.

## Initialization
- First of all you need to have these packages installed in your system:
    - npm install -g create-react-app
    - npm install -g npm@latest
- To initialize our app, we'll use shadecn/ui starter
- Choose Next.js
1. npx create-next-app@latest sdley-banking --typescript --tailwind --eslint
    /* you can replace sdley-banking by ./ to create it in the same repository if you already have one! 
2. npx shadcn-ui@latest init
    npx shadcn@latest init
3. test the full functionnality
    - npx shadcn@latest add button

## Tips - tools
- rafce: create a react function component



