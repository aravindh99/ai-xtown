# Tagg AI Chat Application

This is a full-stack AI chat application for the Tagg web application, built by **Aravindh**. You can find my GitHub profile [here](https://github.com/aravindh99/).

## About Tagqq

Tagqq provides QR codes for vehicles. When scanned after an accident, these QR codes help in critical situations by allowing contacts to reach emergency numbers, relay calls, and send SMS/WhatsApp messages with live location to assist people involved in accidents.

## Project Overview

This application features an AI chatbot that can answer questions about Tagg, its features, and how it works. The AI logic is powered by a large language model hosted on Hugging Face.

## Technologies Used

### Frontend

*   **React (Vite)**: A popular JavaScript library for building user interfaces, with Vite for a fast development experience.
*   **Axios**: Promise-based HTTP client for the browser and node.js, used for making API requests to the backend.

### Backend

*   **Node.js**: A JavaScript runtime environment.
*   **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
*   **CORS**: Middleware to enable Cross-Origin Resource Sharing.
*   **@huggingface/inference**: JavaScript client library for interacting with Hugging Face Inference API.
*   **dotenv**: Module to load environment variables from a `.env` file.

### AI Integration

*   **Hugging Face Inference API**: Used to access and run the `mistralai/Mixtral-8x7B-Instruct-v0.1` large language model.
*   **mistralai/Mixtral-8x7B-Instruct-v0.1**: The specific AI model used for generating responses, hosted on Hugging Face.
