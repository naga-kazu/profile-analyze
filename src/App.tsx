import { BrowserRouter, Routes, Route } from "react-router";
import FixedHeader from "./components/header";
import Question from "./pages/question/question";
import { Empty } from "./pages/empty";

const BASE_PATH = "https://naga-kazu.github.io/plofile-analyze";

export default function QuizPage() {
  return (
    // <BrowserRouter>
    <div>
      <FixedHeader />
      <div className="min-h-screen bg-background p-8 flex items-center justify-center">
        <Question />
        {/* <Routes>
          <Route path={BASE_PATH} element={<Question />} />
          <Route path={`${BASE_PATH}/empty-page`} element={<Empty />} />
        </Routes> */}
      </div>
    </div>
    // </BrowserRouter>
  );
}
