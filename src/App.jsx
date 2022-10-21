import { useState, useCallback } from "react";
import ".";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./components/CssModules";
import { InlineStyles } from "./components/InlineStyles";

export default function App() {
  return (
    <div className="App">
      <InlineStyles />
      <CssModules />
    </div>
  );
}
// export default App;
