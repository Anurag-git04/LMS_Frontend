# 🎯 Lead Management System (LMS) – Frontend

This is the **frontend** of the full-stack **Lead Management System (LMS)** built with **React.js**. It provides a smooth user interface for managing leads, filtering by status, viewing detailed reports using **Chart.js**, and navigating through the application with ease.

---

## 🧪 Tech Stack

- **React.js**
- **React Router DOM**
- **Context API** (Global State Management)
- **Axios** (API communication)
- **Chart.js** (Pie chart reports)
- **Vanila CSS** (Styling)
- **Vercel** (Deployment)

---

## 🚀 Features

- ➕ Add, edit, and delete leads
- 📑 Comment section for each lead
- 🔎 Filter leads by status (New, Contacted, Qualified, etc.)
- 📊 Pie chart reports with **Chart.js**
- 📋 Checklist tracking for sales agents
- 🌐 Integrated with backend API via Axios
- 🧭 Sidebar navigation for seamless UX
- 🧠 Context API for global state (lead data, filters, status)

---

## 📁 Project Structure
```plaintext
/frontend
│
├── components/ # Reusable components (Sidebar, LeadCard, etc.)
├── pages/ # Page-level components (Dashboard, AddLead, ReportPage)
├── context/ # Global state using React Context API
│ └── LeadContext.js
├── services/ # API service functions using Axios
├── App.js # Main app entry and routes
├── index.js # ReactDOM render
├── tailwind.config.js # Tailwind CSS config
├── postcss.config.js # Tailwind/PostCSS config
├── package.json # Project dependencies    
```

---

## 📊 Pie Chart Reporting

Integrated using **Chart.js** on the `ReportPage`. It visualizes the distribution of leads based on their status (`New`, `Contacted`, `Qualified`, `Proposal Sent`, `Closed`). The chart is responsive and uses dynamic data from the backend.

---

## 🔍 Filters & Lead Management

- Leads are filterable by **status**, **assigned agent**, or **priority**.
- Filters are managed globally using **Context API**.
- New leads can be added via the form and auto-updated in the UI.
- Real-time filtering helps track the sales funnel effectively.

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Make sure backend is running and API URL is set in .env
```
## 📽️ Loom Video Demo
- Demo Vedio: https://drive.google.com/file/d/1eVnBZwxp52jnjjPI9zp-8AWYfvPkvjG-/view?usp=sharing
## Features :
##Home :
-- Dashboard
-- Status Count
## Lead Page :
- Lead Listing 
- Filtering on basic of Status 
- Filtering on basis of agents
## Add New Lead 
 - Adding of new lead
## Update of leads
- Updating of leads
## Sales Agent 
 - Agents List
 - Adding of agents
## Report 
- Report Based on Charts
  
