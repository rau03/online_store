# 🛍️ Smolstore - A Modern E-commerce Experience


## 🌟 Overview

Smolstore is a modern, responsive e-commerce platform built with Next.js, offering a seamless shopping experience for tech enthusiasts and productivity seekers. The store features a beautiful UI, smooth animations, and an intuitive user interface.

## ✨ Features

- 🎨 **Beautiful UI/UX**

  - Smooth scroll animations
  - High-resolution image loading with low-res placeholders
  - Responsive design for all devices
  - Modern and clean interface

- 🛒 **Shopping Experience**

  - Product browsing with high-quality images
  - Interactive product previews
  - Easy-to-use shopping cart
  - Smooth checkout process

- 🎯 **Product Categories**

  - Tech Stickers Collection
  - Medieval Dragon Month Planner
  - More products coming soon!

- 🛠️ **Technical Features**
  - Client-side state management
  - Optimized image loading
  - Smooth scroll-to-section functionality
  - Responsive navigation

## 🚀 Tech Stack

- **Frontend Framework**: Next.js
- **Styling**: CSS Modules & Custom CSS
- **State Management**: React Context API
- **Payment Processing**: Stripe
- **Deployment**: AWS Amplify
- **Image Optimization**: Next.js Image Optimization

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone [your-repo-url]
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add your environment variables:

   ```env
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
online_store/
├── app/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── EmailInput.jsx
│   │   ├── ImageBanner.jsx
│   │   ├── Portal.jsx
│   │   ├── Products.jsx
│   │   └── ScrollToTop.jsx
│   ├── context/
│   │   └── ProductContext.jsx
│   ├── globals.css
│   └── layout.js
├── public/
│   ├── low_res/
│   └── med_res/
└── README.md
```

## 🎨 Design System

The project uses a custom design system with:

- **Colors**: Clean, modern color palette
- **Typography**: Readable and accessible fonts
- **Spacing**: Consistent spacing system
- **Components**: Reusable UI components
- **Animations**: Smooth transitions and hover effects

## 🔧 Development

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 🚀 Deployment

This project is configured for deployment on AWS Amplify. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deployment Steps

1. Push your code to a Git repository
2. Connect your repository to AWS Amplify
3. Configure environment variables in the Amplify Console
4. Deploy your application

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- **Christopher Rau** - [webdevbyrau](https://rauwebport.netlify.app/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [FantaCSS](https://www.fantacss.smoljames.com/)
- Icons by [Font Awesome](https://fontawesome.com/)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://rauwebport.netlify.app/">webdevbyrau</a></p>
</div>
