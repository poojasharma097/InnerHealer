import { Link } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";

export default function JournalPage() {
  const [journals, setJournals] = useState([]);
  useEffect(() => {
    axios.get("/user-journals").then(({ data }) => {
      setJournals(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className="text-center">
        <Link
          className="bg-primary rounded-full px-6 py-2 text-white inline-flex gap-1"
          to={"/account/journals/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add new journal
        </Link>
      </div>
      <div className="mt-4">
        {journals.length > 0 && journals.map((journal) => (
            <Link to={'/account/journals/' + journal._id} key={journal._id} className="p-4 rounded-2xl border bg-white border-primary flex gap-4 mb-4">
              <div className="grow-0 shrink"> 
              <h2 className="text-xl">{journal.title}</h2>
              <p className="text-sm mt-2">{journal.content}</p>
              <p className="text-sm mt-2">{journal.date}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
