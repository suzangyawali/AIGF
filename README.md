
# ConfidantAI – Virtual Emotional Support Chatbot

ConfidantAI is a virtual emotional support chatbot designed to offer users a safe and empathetic space for expressing their emotions and managing mental well-being. The chatbot leverages AI to facilitate real-time, context-aware conversations, helping users process their emotions and providing them with the support they need.

This project was built using **React.js** for the frontend, **Node.js** for the backend, and **Meta's Llama Model** integrated through the **Replicate API** to offer intelligent and empathetic responses.

---

## Description

ConfidantAI is a chatbot that acts as an emotional support companion, providing users with a platform to discuss their feelings in a secure, confidential space. The AI model understands context and emotional nuances, offering empathetic responses to encourage users to express themselves. Whether users are feeling overwhelmed, sad, or anxious, ConfidantAI is designed to offer comfort and guidance.

The system consists of two parts:
1. **Frontend**: Built with **React.js** and styled with **Tailwind CSS** for a responsive and engaging user experience.
2. **Backend**: Developed using **Node.js** and **Express.js** to handle API requests, manage user data, and interact with the **Llama Model** via **Replicate API** for generating emotional support responses.

---

## Technologies

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI Model**: Meta's Llama Model (via Replicate API)
- **API**: Backend API to process and generate context-aware responses

---

## Key Features

- **Real-Time Emotional Support**: Powered by Meta's Llama Model, the chatbot provides context-aware, empathetic conversations, helping users express their feelings and process emotions in a safe environment.
- **AI Integration**: Utilizes the Replicate API to integrate the Llama Model for understanding user emotions and offering real-time, intelligent responses.
- **Interactive UI**: The frontend is designed using React.js and styled with Tailwind CSS, offering an engaging and user-friendly experience. Users can easily interact with the chatbot in a calming, intuitive interface.
- **Backend API**: Developed a robust backend API to process conversations, manage user data (if necessary), and interact with the Llama model to generate responses.
- **Secure and Private Conversations**: All user interactions with the chatbot are designed to be secure, providing users with a confidential space to discuss their emotional health.

---

## Installation

To get started with ConfidantAI, follow these steps to set up both the backend and frontend:

### 1. Clone the Repository:
```bash
git clone https://github.com/suzangyawali/AIGF
```

### 2. Install Dependencies

#### Backend
Navigate to the `backend` directory and install the required dependencies by running the following command:
```bash
cd backend
npm install
```

#### Frontend
Navigate to the `client` directory and install the required dependencies by running the following command:
```bash
cd ../client
npm install
```

### 3. Run the Application

#### Backend
To start the backend server, run the following command in the `backend` directory:
```bash
npm run dev
```

This will start the backend server, and the API will be ready to handle requests.

#### Frontend
To start the frontend development server, navigate to the `client` directory and run the following command:
```bash
npm start
```

The frontend will now be accessible at [http://localhost:5173](http://localhost:5173).

---

## Project Structure

### Backend

The backend is responsible for handling API requests and interacting with Meta's Llama Model. It is structured as follows:

```plaintext
/backend
    ├── controllers          # Logic for managing conversations and interacting with the Llama Model
    ├── models               # User models (if applicable for saving data)
    ├── routes               # API routes for managing chatbot interactions
    ├── server.js            # Entry point for backend service
    └── package.json         # Node.js dependencies and backend scripts
```

### Frontend

The frontend is built with React.js and Tailwind CSS. It manages user interactions and communicates with the backend API.

```plaintext
/client
    ├── src
        ├── components       # React components like ChatWindow, MessageInput, etc.
        ├── assets           # Static files like images and icons
        ├── App.jsx          # Main component that integrates all parts of the app
        ├── index.jsx        # Entry point for the frontend
        └── package.json     # React dependencies
```

### Other Files

```plaintext
README.md                  # Project documentation
LICENSE                    # Project license
```

---

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## Contributing

We welcome contributions! If you have ideas for improvements, feel free to open an issue or submit a pull request.

---

## Future Enhancements

- **Multi-language Support**: To expand the reach and accessibility of ConfidantAI, adding multi-language support could help non-English speaking users.
- **Mobile App**: The chatbot could be developed into a mobile app for a more portable solution.
- **Additional AI Models**: Integrating different AI models for a broader emotional understanding could be explored for providing more personalized support.
- **Data Analytics**: Implement analytics to track user emotions over time and improve the model’s responses.
```
