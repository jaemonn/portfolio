import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// components
import LoadingSpinner from "./Components/LoadingSpinner";

// page
import Layout from "./Layout"

function App() {
  useEffect(() => {
    const navigation = document.querySelector('#header');
    const navigationHeight = navigation.offsetHeight;

    document.documentElement.style.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    )
  }, [])
  
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </Suspense>
  );
}

export default App;
