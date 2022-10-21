import { useState, useCallback } from "react";
import ".";
//import { ChildArea } from "./ChildArea";
import { CssModules } from "./components/CssModules";
import { InlineStyles } from "./components/InlineStyles";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import { Emotion } from "./components/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyles />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
// export default App;
