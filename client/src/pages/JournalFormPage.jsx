import { useEffect, useState } from "react";
import AccountNav from "../components/AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function JournalFormPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get("/journals/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setContent(data.content);
    });
  }, [id]);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }
  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function saveJournal(event) {
    event.preventDefault();
    const journalData = {
      title,
      content,
    };
    if (id) {
      // update the journal
      await axios.put("/journals", { id, ...journalData });
      setRedirect(true);
    } else {
      // save new journal
      await axios.post("/journals", journalData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/journals"} />;
  }

  return (
    <div>
      <div>
        <AccountNav />
        <div className="journalquote">
          Remember, there are no rules here—just your words on the page. Happy journaling!
          </div>
        <form onSubmit={saveJournal}>
          {preInput(
            "Title",
            "The title of your journal entry is like the cover of a book — it captures the essence of what you're about to share."
          )}
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Think of it as a concise summary, a few words that evoke the main theme or emotion of your entry. Whether it's a feeling, an event, or a reflection, let your title be the doorway into your thoughts."
          ></input>
          {preInput(
            "Content",
            "This is where you bring your thoughts to life. Share your experiences, reflections, and emotions freely."
          )}
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Describe the details that matter to you, explore your thoughts, and let your words flow. Your journal is your personal space, so feel free to be authentic and express yourself without reservation. It could be a record of your day, your dreams, or simply your musings—whatever feels right for you."
          />
          <button className="primary my-4">Save</button>
        </form>
      </div>
    </div>
  );
}
