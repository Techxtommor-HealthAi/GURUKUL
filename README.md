
# AI-Gurukul

AI-Gurukul is an AI, AR, and VR-powered educational platform designed to create immersive, personalized, and accessible learning experiences. The platform integrates cutting-edge technologies to address the challenges of traditional educational systems by fostering engagement, customization, and effective skill-building.

---

## Features

- **Landing Page**: Interactive UI to introduce platform features and benefits.
- **Chatbot**: AI-powered conversational agent for user onboarding and assistance.
- **Prequiz**: Adaptive screening to assess strengths, weaknesses, and learning goals.
- **Dashboard**: Personalized learning roadmap with curated resources.
- **Final Quiz**: Learning outcomes evaluation.
- **Interactive Biology Lab**: Hands-on exploration of biological concepts using 3D models.
- **AlgoLab**: Algorithm visualizer to aid understanding of data structures and algorithms.

---

## Technologies Used

### Frontend
- **React.js** and **Next.js**: Responsive and interactive UI for the landing page, dashboard, and chatbot.
- **Three.js**: 3D rendering for the Interactive Biology Lab and AR/VR features.
- **Tailwind CSS**: Rapid UI development with consistent and customizable designs.
- **Framer Motion**: Smooth animations and transitions.

### Backend
- **Node.js**: Backend server to manage API requests and process user data.
- **MongoDB**: Database for user profiles, quiz results, and content recommendations.
- **AgroJDK Service**: Video conferencing functionality.

### AI Integration
- **Chatbot**: Built with advanced NLP models for interaction.
- **Notes Generation**: AI-driven feature for creating personalized study notes.
- **Gemini Key**: Enhanced AI functionality for secure and efficient processing.

### AR/VR
- **Three.js**: Rendering and interaction in AR/VR environments.
- **WebXR**: Lightweight virtual reality content for immersive classrooms.

---

## Deployment

### Development and Testing
- **Version Control**: Git and GitHub for collaborative development.
- **CI/CD Pipeline**: Automated testing and deployment using GitHub Actions.

### Hosting
- **Vercel**: Fast global delivery with seamless integration into the development workflow.

### Security
- **JWT (JSON Web Tokens)**: For user authentication and session management.

---

## Scalability and Future Enhancements

- Advanced AI models for improved chatbot intelligence.
- Expansion of content library with additional topics and 3D models.
- Localization for global audiences with multilingual support.
- Integration of collaborative tools like group discussions and shared virtual labs.
- Gamification with badges, leaderboards, and rewards to boost engagement.

---

## Installation

### Prerequisites
- Node.js installed on your machine.
- MongoDB instance running locally or a connection string for a remote database.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/AI-Gurukul.git
   ```
2. Install dependencies:
   ```bash
   cd AI-Gurukul
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file and configure the following:
   ```env
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   NEXT_PUBLIC_VERCEL_URL=<your-vercel-deployment-url>
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Contribution

We welcome contributions! Please follow the [contribution guidelines](CONTRIBUTING.md) and submit pull requests for review.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

