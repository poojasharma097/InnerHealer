import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/ProfilePage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import JournalsPage from "./pages/JournalsPage";
import QuizPage from "./pages/QuizzesPage";
import JournalFormPage from "./pages/JournalFormPage";
import GuidedMeditation from "./pages/GuidedMeditation";
import EducationalArticles from "./pages/EducationalArticles";
import Help from "./pages/Help";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/account/journals" element={<JournalsPage />} />
          <Route path="/account/journals/new" element={<JournalFormPage />} />
          <Route path="/account/journals/:id" element={<JournalFormPage />} />
          <Route path="/account/quizzes" element={<QuizPage/>}/>
          <Route path="/account/meditation" element={<GuidedMeditation />} />
          <Route path="/account/articles" element={<EducationalArticles />} />
          <Route path="/account/help" element={<Help />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;