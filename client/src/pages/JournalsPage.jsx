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

  const handleDelete = async (journalId) => {
    try {
      await axios.delete(`/deleteJournal/${journalId}`);
      setJournals((prevJournals) =>
        prevJournals.filter((journal) => journal._id !== journalId)
      );
    } catch (error) {
      console.error('Error deleting journal:', error);
    }
  };

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
        {journals.length > 0 &&
          journals.map((journal) => (
            <Link
              to={"/account/journals/" + journal._id}
              key={journal._id}
              className="p-4 rounded-2xl border bg-white border-primary flex gap-4 mb-4"
            >
              <div className="grow-0 shrink">
                <h2 className="text-xl">{journal.title}</h2>
                <p className="text-sm mt-2">{journal.content}</p>
              </div>
              <div className="ms-auto pt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={(e) => {
            e.preventDefault(); // Prevent the link navigation
            handleDelete(journal._id);
          }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
