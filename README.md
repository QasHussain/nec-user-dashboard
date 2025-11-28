# 🧭 NEC User Dashboard

A lightweight React + TypeScript dashboard for managing users.  
You can **add new users**, validate input, and **view them in a user table** powered by global state via React Context.

Built with: **React 18**, **TypeScript**, **Vite**, **Mantine**, **Ant Design**, **React Router**, and **Vitest**.


## 🚀 Features

### ➕ Add User
A fully validated form that collects:
- Full Name  
- Age (with numeric validation + age restriction)  
- Country dropdown  
- Interests (checkbox group)

Additional behaviour:
- Success notification on submit  
- Form reset  
- Navigation to the User List page  
- Global storage via a `UsersContext` using auto-generated IDs  

### 📋 User List
A dynamic, responsive table that displays all created users.

Features:
- Active/Inactive toggle  
- “View User” modal  
- Clean, minimal UI using Ant Design Table  

### 🎨 UI / UX Enhancements
- Smooth animated route transitions via **Framer Motion**
- Wrapped in **MantineProvider** for consistent theming
- Reusable container, layout, sidebar, and header components


## 🛠️ Installation

Clone the repo:


- git clone https://github.com/QasHussain/nec-user-dashboard.git
- cd nec-user-dashboard
- yarn install
- yarn dev
