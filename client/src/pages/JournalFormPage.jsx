import { useEffect, useState } from "react";
import AccountNav from "../components/AccountNav";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

export default function JournalFormPage() {
  const {id} = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [redirect,setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get('/journals/'+id).then((response) => {
      const {data} = response;
      setTitle(data.title);
      setContent(data.content);
    })
  },[id]);

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
      await axios.put("/journals", {id, ...journalData});
      setRedirect(true);
    } else {
      // save new journal
      await axios.post("/journals", journalData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/account/journals'}/>
  }

  return (
    <div>
      <div>
        <AccountNav />
        <form onSubmit={saveJournal}>
        {preInput("Title", "Title for your journal")}
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
        ></input>
        {preInput(
          "Content",
          "Content of your journal"
        )}
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <button className="primary my-4">Save</button>
      </form>
      </div>
    </div>
  );
}
