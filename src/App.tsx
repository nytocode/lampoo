import React from "react";
import AppLayout from "./layouts/main-layout";
const WishlistPage = React.lazy(() => import("./pages/wishlist-page"));

function App() {
  return (
    <AppLayout>
      <React.Suspense fallback={<div>Loading...</div>}>
        <WishlistPage />
      </React.Suspense>
    </AppLayout>
  );
}

export default App;
