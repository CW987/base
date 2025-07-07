# My App

Working title of "base". Plan is to cover full stack revision from my coding course. With the bulk of the app so far being about creating posts to be displayed from a database. One page also has a cookie clicker to refresh my logic skills for next.js

Once the basics are done I plan to use it as a "base" for other apps knowing I have the basics up and running with minimal changes needed.

Long aim is to create an app for my home - using APIs of any service I have signed up for. The idea that started it is the API from Octopus Energy. Being on an Agile tariff means I need the live data for current price, and pricing over the next 24 hours to plan battery charging or heavy appliance use.

## Build

1. Setup new Next.js app
2. Revsion
    - Hooks
    - Lists, Keys, .map()
    - File system routing, and LINK
    - Metadata
    - Components
    - Data fetching
    - Parsing ~ JSON
    - Query string parameters
    - Supabase connection
    - Forms and server actions
        - New posts page
        - Page redirects after submit
    - Styling
    - Breaking some pages up into functions
        - NavBar
        - NewPostForm
        - HandleSavePost
    - Started Cookie Cliker
        -Increase, decrease, and reset count functions

### Build Notes

- Postgres: used Supabase to stick with connecting external services to make the skill more transferrable vs. using a fully integrated service like Vercel.
- Postgres: Connection information is within Utilities. src/utils/utilities.js and .env
- Post form: To stop multiple posts being added to the database the components needed to split into seperate components, one for client the other for server. Then the save handler imported to the main form to enable the functionality.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
