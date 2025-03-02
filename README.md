# Personal Website Template

A modern, responsive personal website built with Next.js, React, and Tailwind CSS. This template provides a clean, professional design for showcasing your portfolio, blog, and personal information. Complete with multiple pages, integrated scheduling, and location-aware features.

[Website Preview](https://dultsin.com)

## Features

- ✨ Modern, minimalist design
- 📱 Fully responsive layout
- 🌙 Dark/light mode toggle
- 📄 Multiple pages: About, Contact, Consulting, Resources, Articles (blog), Portfolio
- 📊 Real-time location and local time status bar using X API and Google Geocoding
- 📅 Embedded Calendly call scheduler for easy appointment booking
- 📬 Newsletter subscription form with ConvertKit integration
- 🔍 SEO-ready with metadata optimization
- 🚀 Fast performance with Next.js
- 🎨 Customizable with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/danieldultsin/personal-website.git
   cd personal-website
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Configuration

Edit the `site.config.js` file to update your personal information:

```javascript
module.exports = {
  name: "Your Name",
  title: "Your Title",
  description: "Your personal website description",
  social: {
    twitter: "yourusername",
    github: "yourusername",
    linkedin: "yourusername",
  },
  // ...other configuration
};
```

### API Integration

This template includes integration with:

- X (Twitter) API for location data
- Google Geocoding API for timezone conversion
- Calendly for appointment scheduling
- ConvertKit for newsletter subscriptions

You'll need to set up your own API keys in the environment variables.

### Styling

This project uses Tailwind CSS for styling. You can customize the design by editing the `tailwind.config.js` file.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

This project is available as a template under the MIT License - see the [LICENSE](LICENSE.md) file for details.

### Important Notice

While the code structure and components are available for use under the MIT License, the **content, design, and visual elements** of the original website created by Daniel Dultsin are **All Rights Reserved** and may not be copied or reproduced without permission.

You are welcome to:

- Use the code structure and components to build your own personal website
- Modify the code to suit your needs
- Learn from the implementation

You may not:

- Copy the exact design, layout, or visual elements
- Use any personal content, images, or text from the original website
- Represent the template as your own creation

---

Created by [Daniel Dultsin](https://dultsin.com) | [GitHub](https://github.com/danieldultsin)
