import React from "react";
import FormTab from "./Problems/Tab-Form/FormTab";
import ValidForm from "./Problems/Form-Validation/ValidForm";
import Pagination from "./Problems/Pagination/Pagination";
import Board from "./Problems/tic-tac-toe/Board";
import Prod from "./Revision/Prod";
import FileExp from "./Problems/File-Explorer/FileExp";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  // const queryClient = new QueryClient();

  return (
    <div>
      {/* <Prod /> */}
      <FileExp />
  
    </div>
  );
}

export default App;
