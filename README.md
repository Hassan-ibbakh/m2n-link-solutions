This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Configurer PostgreSQL

Le formulaire de contact enregistre les messages dans PostgreSQL. Le fichier `.env.example` contient uniquement un modèle : il ne contient pas de vrais identifiants.

1. Créez un fichier `.env.local` à la racine du projet, au même niveau que `package.json`.
2. Ajoutez cette ligne en remplaçant les valeurs entre crochets :

```env
DATABASE_URL="postgresql://[UTILISATEUR]:[MOT_DE_PASSE]@[HOTE]:5432/[NOM_BASE]?schema=public"
```

Exemple avec PostgreSQL installé sur votre ordinateur :

```env
DATABASE_URL="postgresql://postgres:monMotDePasse@localhost:5432/nexa?schema=public"
```

Signification des éléments :

- `postgres` : nom de l'utilisateur PostgreSQL.
- `monMotDePasse` : mot de passe défini lors de l'installation de PostgreSQL.
- `localhost` : PostgreSQL fonctionne sur votre ordinateur. Pour une base en ligne, utilisez l'hôte fourni par votre hébergeur.
- `5432` : port PostgreSQL standard.
- `nexa` : nom de la base de données.

Après avoir créé la base de données, exécutez :

```bash
npx prisma migrate dev --name init
npx prisma generate
npm run dev
```

Ne publiez jamais `.env.local` et ne mettez jamais votre mot de passe dans Git. Le fichier `.gitignore` du projet ignore déjà les fichiers `.env*`.

Si vous n'avez pas encore PostgreSQL, vous pouvez utiliser un fournisseur PostgreSQL en ligne comme Neon ou Supabase. Ils fournissent une URL `DATABASE_URL` prête à copier dans `.env.local`.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
