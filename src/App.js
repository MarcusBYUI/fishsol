import React from "react";

import { Routes, Route } from "react-router-dom";

//Pages
import MainPage from "./pages/Main/main.js";
import Dashboard from "./pages/Dashboard/dashboard.js";
import ShoutPage from "./pages/shout/shout.js";
import BlogCategory from "./pages/BlogCategory/blogCategory.js";
import TermsOfService from "./pages/termsOfService/termsOfService.js";
import PrivacyPolicy from "./pages/privacyPolicy/privacyPolicy.js";
import ContentPreview from "./pages/contentPreview/contentPreview.js";
import BlogPage from "./pages/blog/blog.js";
import BlogPost from "./pages/BlogPost/blogPost.js";

//Styles
import "./App.scss";

const App = () => {
  return (
    <Routes>
      <Route path="/shout" element={<ShoutPage />} />
      <Route path="/blog/category" element={<BlogCategory />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/about" element={<MainPage />} />
      <Route path="/about/terms_of_service" element={<TermsOfService />} />
      <Route path="/about/privacy_policy" element={<PrivacyPolicy />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/view" element={<ContentPreview />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
