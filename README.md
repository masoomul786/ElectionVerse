# ElectionVerse 🗳️

**ElectionVerse** is an interactive, AI-powered platform designed to educate Indian voters about the democratic process, analyze candidate promises, and reveal cognitive biases in political decision-making.

## 🚀 The Problem
Voters often face three major challenges during elections:
1.  **Information Gap**: Understanding the complex step-by-step journey of a vote.
2.  **Feasibility Blindness**: Being swayed by attractive promises without understanding their economic or technical feasibility.
3.  **Cognitive Bias**: Making decisions based on internal biases (confirmation bias, infrastructure bias, etc.) without conscious awareness.

## ✨ The Solution
ElectionVerse solves this through an immersive digital experience:
-   **Learn**: A multi-lingual (English, Hindi, Assamese) guide to the election lifecycle.
-   **Simulate**: A promise simulator that uses historical data and metrics to rate feasibility.
-   **Bias Mirror**: An AI-driven assessment that analyzes your reactions to political promises to build your psychological voter profile.
-   **AI Assistant**: A real-time chat helper powered by Gemini 2.0 Flash.

## 🛠️ Technical View

### Stack
-   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
-   **Frontend**: [React 19](https://react.dev/), [Framer Motion](https://www.framer.com/motion/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **AI Engine**: [Google Gemini 2.0 Flash](https://aistudio.google.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)

### Architecture
The project follows a modern Next.js architecture:
-   **Client Components**: For high-interactivity features like the Bias Mirror and Promise Simulator.
-   **Server Actions**: Securely handling AI requests and data processing on the server side.
-   **Unified UI Library**: Custom-styled components built on top of Radix UI primitives.

### Folder Structure
```text
electionverse/
├── src/
│   ├── app/                # App Router (Pages, Layouts, Server Actions)
│   │   ├── bias-mirror/    # Bias Mirror feature
│   │   ├── learn/         # Educational guide
│   │   ├── quiz/          # Democracy quiz
│   │   └── simulate/      # Promise simulator
│   ├── components/         # Reusable UI components
│   ├── data/               # Mock data and static content
│   └── lib/                # Shared utilities and AI configuration
├── public/                 # Static assets
└── .env.example            # Environment variables template
```

### AI Pipeline
1.  **Input**: User interacts with a component (e.g., accepts/rejects a promise).
2.  **Action**: A Next.js Server Action is triggered with the collected data.
3.  **Analysis**: The server calls the Gemini 2.0 Flash model via `@google/generative-ai`.
4.  **Processing**: The AI returns structured JSON containing profiles, insights, and tips.
5.  **Output**: The client component renders the result with animations.

## 📦 Getting Started

1.  **Clone the repo**:
    ```bash
    git clone https://github.com/masoomul786/ElectionVerse.git
    cd electionverse
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**:
    Create a `.env.local` file and add your Gemini API Key:
    ```bash
    GEMINI_API_KEY=your_actual_key_here
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

## 📸 Example
**Bias Mirror Result Example:**
> **Profile**: The Pragmatic Skeptic
> **Insight**: You prioritize long-term infrastructure over short-term social waivers. You value feasibility over populism.
> **Tips**: 1. Check environmental impacts. 2. Consider social equity. 3. Look for detailed budget plans.

---
Built with ❤️ for a more informed democracy.
