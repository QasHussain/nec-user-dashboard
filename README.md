A lightweight React + TypeScript dashboard for managing users. You can add new users, validate input, and view them in a dynamic user table powered by global state via React Context.

Built with React 18, TypeScript, Vite, Mantine, Ant Design, React Router, MobX, Vitest.

Features :

---Add User---

A validated form that collects:
Full Name
Age (numeric validation + age restriction)
Country dropdown
Interests (checkbox group)
Includes success notifications and automatic navigation to the User List.

---User List---

A table that displays all users in global state, including an Active toggle and a View modal.

---UI---

Smooth page transitions using Framer Motion, clean layout with a header + sidebar, Mantine styling, and Ant Design components.

---Project Structure---

src/
├── Components/
│   ├── dashboard/
│   ├── common/
│   └── stores/
│       └── UsersContext.tsx
├── routes/
├── tests/
└── Dashboard.tsx

---Installation---

git clone https://github.com/QasHussain/nec-user-dashboard.git
cd nec-user-dashboard
npm install

---Run the Application---

npm run dev

App will run at:

http://localhost:5173/

---Run Tests---

yarn run test

Uses Vitest + React Testing Library.

---Tech Summary---

State: React Context (UsersContext)
Forms: Mantine useForm
UI: Mantine + Ant Design
Routing: React Router v6

Build: Vite

Animations: Framer Motion

Testing: Vitest + RTL
