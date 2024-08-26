import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer } from "@/components/layouts";
import { TodoTabs } from "@/features/todos/components";
import { Contact } from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex justify-center">
          <div className="container max-w-4xl">
            <Routes>
              <Route path="/" element={<TodoTabs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
