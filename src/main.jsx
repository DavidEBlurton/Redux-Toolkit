import React from 'react';
import ReactDOM from 'react-dom';
import { createSlice } from 'npm ';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
);