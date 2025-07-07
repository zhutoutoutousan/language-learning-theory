# Multilingual Language Learning App

A modern mobile application for learning Chinese, English, and German, incorporating advanced language learning theories and AI-powered features.

## Features

- 🌍 Support for Chinese, English, and German
- 🎯 Proficiency levels from A1 to C2
- 🗣️ AI-powered conversation practice
- 🎤 Real-time pronunciation feedback
- 📚 Comprehensive grammar and vocabulary learning
- 🎮 Gamified learning experience
- 📱 Offline learning support
- 🔄 Cross-device synchronization
- 📊 Detailed progress tracking

## Prerequisites

- Node.js 18.0+
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- MongoDB
- Redis

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/language-learning-app.git
cd language-learning-app/mobile
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npx react-native start
```

5. Run the application:
```bash
# For iOS
npx react-native run-ios

# For Android
npx react-native run-android
```

## Project Structure

```
mobile/
├── src/
│   ├── components/      # Reusable UI components
│   ├── screens/         # Screen components
│   ├── navigation/      # Navigation configuration
│   ├── services/        # API and third-party services
│   ├── store/           # Redux store configuration
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   └── assets/          # Images, fonts, etc.
├── __tests__/          # Test files
├── android/            # Android-specific files
├── ios/               # iOS-specific files
└── docs/              # Documentation
```

## Development

### Code Style

We use ESLint and Prettier for code formatting. Run:
```bash
# Check code style
npm run lint

# Fix code style issues
npm run lint:fix
```

### Testing

```bash
# Run unit tests
npm test

# Run E2E tests
npm run e2e
```

### Branching Strategy

- `main` - Production branch
- `develop` - Development branch
- `feature/*` - Feature branches
- `bugfix/*` - Bug fix branches
- `release/*` - Release branches

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Documentation

- [Architecture Overview](./ARCHITECTURE.md)
- [API Documentation](./docs/API.md)
- [Testing Guide](./docs/TESTING.md)
- [Contribution Guide](./docs/CONTRIBUTING.md)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Based on Krashen's language acquisition theories
- Uses OpenAI's GPT models for conversation practice
- Implements modern language learning methodologies
