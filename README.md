# Start With Genie

A clean, friendly assistant that guides users step-by-step through setting up their LLC. It's not a legal service or filing provider — it's a silent assistant that gives users personalized instructions, documents, and guidance to complete it on their own.

## Features

- **Personalized Onboarding**: Collect user information and business details
- **Document Generation**: Create personalized LLC filing instructions, EIN guides, and operating agreements
- **Dashboard**: View and download generated documents
- **Genie Assistant**: Chat interface for LLC setup questions
- **Modern UI**: Clean, professional design with blue accents

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: TailwindCSS
- **Database**: Supabase (Auth + Database)
- **Forms**: React Hook Form
- **PDF Generation**: jsPDF
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd start-with-genie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```

4. **Set up Supabase Database**
   
   Create the following tables in your Supabase database:

   **users table:**
   ```sql
   CREATE TABLE users (
     id UUID PRIMARY KEY REFERENCES auth.users(id),
     full_name TEXT NOT NULL,
     email TEXT NOT NULL,
     business_name TEXT NOT NULL,
     state TEXT NOT NULL,
     status TEXT DEFAULT 'pending',
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
     updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

   **documents table:**
   ```sql
   CREATE TABLE documents (
     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
     user_id UUID REFERENCES users(id),
     doc_type TEXT NOT NULL,
     url TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
start-with-genie/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── onboarding/        # Onboarding form
│   ├── loading/           # Loading page
│   ├── dashboard/         # User dashboard
│   ├── genie/            # AI assistant
│   └── not-found.tsx     # 404 page
├── components/            # Reusable components
│   └── ui/               # UI components
├── lib/                  # Utility functions
│   ├── supabase.ts       # Supabase client
│   ├── utils.ts          # Helper functions
│   └── pdf-generator.ts  # PDF generation
├── public/               # Static assets
└── package.json          # Dependencies
```

## User Flow

1. **Homepage (`/`)**: Landing page with hero section and call-to-action
2. **Onboarding (`/onboarding`)**: Form to collect user and business information
3. **Loading (`/loading`)**: Shows progress while generating documents
4. **Dashboard (`/dashboard`)**: User dashboard with documents and actions
5. **Genie Assistant (`/genie`)**: Chat interface for LLC questions

## Database Schema

### users table
- `id` (UUID, PK, linked to Supabase auth.users)
- `full_name` (TEXT)
- `email` (TEXT)
- `business_name` (TEXT)
- `state` (TEXT)
- `status` (TEXT, default: "pending")
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### documents table
- `id` (UUID, PK)
- `user_id` (UUID, FK to users)
- `doc_type` (TEXT)
- `url` (TEXT)
- `created_at` (TIMESTAMP)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key | Yes |

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email info@startwithgenie.com 
 
 
 
 