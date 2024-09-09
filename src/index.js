import React from "react"
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./Theme/theme.css"
import reportWebVitals from './reportWebVitals';
import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./Redux/reducers";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./Routes/ScrollToTop";


export const store = configureStore(
  {
    reducer: allReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    })
  },
  applyMiddleware(thunk),
  // chrome extension for redux
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
