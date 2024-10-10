import React, { useEffect } from "react";
import { getMethodData } from "./Api/PostApi";
import { PostData } from "./Components/PostData";

const App = () => {
  return (
    <div>
      <section className="main-section">
        <PostData />
      </section>
    </div>
  );
};

export default App;
