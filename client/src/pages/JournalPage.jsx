import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function JournalPage() {
  const { id } = useParams();
  const [journal, setJournal] = useState("");
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/journals/" + id).then((response) => {
        setJournal(response.data);
    });
  }, [id]);

  if (!journal) return "";

  return (
    <div className="mt-4 pt-8 bg-gray-100 -mx-8 px-8">
      <h1 className="text-2xl">{journal.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] mt-8 gap-8 mb-8">
          <div className="my-4">
            <h2 className="font-seminold text-2xl">Content</h2>
            {journal.content}
          </div>
      </div>
    </div>
  );
}
