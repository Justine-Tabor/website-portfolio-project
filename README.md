# Dual Creator Portfolio

A professional and versatile portfolio website designed for two creators, showcasing design works, digital arts, and photography through responsive and interactive galleries.

## Features

- Dual-creator portfolio layout
- Responsive design for all devices
- Minimal and modern UI
- Supports multiple media types:
  - Digital Arts
  - Photography
  - Innovation Projects
- Contact form for inquiries
- Individual project galleries
- Smooth animations and transitions

## Project Structure

```
portfolio-website/
├── client/          # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/      # Page components
│   │   └── lib/        # Utilities and helpers
├── server/          # Express.js backend
│   ├── routes.ts    # API routes
│   └── storage.ts   # Data storage implementation
└── shared/          # Shared types and schemas
```

## Tech Stack

- Frontend:
  - React with TypeScript
  - Tailwind CSS for styling
  - Shadcn UI components
  - Framer Motion for animations
  - React Query for data fetching
- Backend:
  - Express.js
  - In-memory storage (easily upgradable to PostgreSQL)

## Getting Started

1. Clone the repository
```bash
git clone [your-repo-url]
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Deployment

This project is configured for deployment on Replit. The application can be deployed with a single click through Replit's deployment feature.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
