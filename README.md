# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional layout with responsive design
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React**: Modern JavaScript library for building user interfaces
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Optimized for performance and SEO

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/your-portfolio.git
cd your-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
src/
├── App.js          # Main application component
├── index.js        # Application entry point
├── index.css       # Global styles with Tailwind directives
└── components/     # Reusable React components (create as needed)

public/
├── index.html      # HTML template
└── favicon.ico     # Website icon

tailwind.config.js  # Tailwind CSS configuration
package.json        # Project dependencies and scripts
```

## 🎨 Customization

### Personal Information
Edit `src/App.js` to customize:
- Your name and title
- About section content
- Project descriptions and links
- Contact information
- Social media links

### Styling
- **Tailwind CSS**: Modify classes in `src/App.js` for styling
- **Colors**: Update the color scheme by changing Tailwind color classes
- **Layout**: Adjust spacing, typography, and layout using Tailwind utilities

### Adding Projects
To add new projects, update the projects section in `src/App.js`:

```jsx
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="h-48 bg-gray-200"></div>
  <div className="p-6">
    <h3 className="text-lg font-medium text-gray-900">Your Project Name</h3>
    <p className="mt-2 text-gray-500">
      Project description and technologies used.
    </p>
    <div className="mt-4">
      <a href="https://your-project-url.com" className="text-blue-600 hover:text-blue-500">
        View Project →
      </a>
    </div>
  </div>
</div>
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run build
npm run deploy
```

### Other Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Create React App** - React application boilerplate
- **ESLint** - Code linting and formatting

## 📚 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Your Name - [@yourusername](https://twitter.com/yourusername) - your.email@example.com

Project Link: [https://github.com/yourusername/your-portfolio](https://github.com/yourusername/your-portfolio)
