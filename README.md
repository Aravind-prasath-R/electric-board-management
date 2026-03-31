# Electric Board Management System

A full-stack web application for managing electricity board connections and applications.

## Features

- **Backend**: Django REST API with SQLite database
- **Frontend**: React.js with Bootstrap UI
- **Database**: SQLite with CSV data import capability
- **Applicant Management**: Handle applicant information and government IDs
- **Connection Tracking**: Monitor application status and reviewer comments
- **Analytics**: Statistics and reporting dashboard

## Technology Stack

- **Django 5.0.6** with SQLite
- **React 18.3.1** with React Router
- **Bootstrap** for UI components
- **Chart.js** for data visualization
- **Axios** for API communication

## Project Structure

```
web-project-13/
├── backend/
│   └── project/
│       ├── app/          # Django app with models, views, URLs
│       ├── project/      # Django project settings
│       └── templates/    # HTML templates
└── frontend/
    └── app/
        ├── src/
        │   ├── components/    # React components
        │   └── screens/       # Main application screens
        └── public/
```

## Setup Instructions

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend/project
   ```
2. Install dependencies (if using virtual environment):
   ```bash
   pip install django pandas
   ```
3. Run migrations:
   ```bash
   python manage.py migrate
   ```
4. Start Django server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend/app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start React development server:
   ```bash
   npm start
   ```

## Access Points

- **Frontend**: http://localhost:3000
- **Backend API**: http://127.0.0.1:8000

## Data Models

### Applicant
- Personal information (name, gender, district)
- Government ID details
- Ownership type and category

### Connection
- Load applied for
- Application and approval dates
- Status tracking with reviewer comments

### Status
- Application workflow states (Pending, Approved, Rejected, Connection Released)

## Usage

1. Start both backend and frontend servers
2. Access the application at http://localhost:3000
3. Use the dashboard to manage electricity connection applications
4. View statistics and analytics in the Statistics section

## Data Import

The system includes CSV data import functionality for bulk loading of electricity board case study data.
