import AccountNav from "../components/AccountNav";
import { useState } from "react";

const GuidedMeditation = () => {
  // eslint-disable-next-line no-unused-vars
  const [meditations, setMeditations] = useState([
    {
      title:
        "Guided Meditation for Deep Relaxation, Managing Anxiety, Releasing Stress, Mental Health",
      description:
        "This deeply relaxing and soothing guidedmeditation for relaxation, emotional healing, managing stress and anxiety, helps you let go of intrusive thoughts and calms the busy mind through mindfulness practice, breathing techniques and loving kindness. ",
      duration: "16 minutes",
      videoLink: "https://www.youtube.com/embed/lRSB4n3wxCA",
    },
    {
      title:
        "Guided Mindfulness Meditation - You are POWERFUL - Mental Strength and Clarity",
      description:
        "This is a 16-minute empowering and healing guided meditation about being POWERFUL. It is a reminder that you can have a deep meditative mind. You are a strong person and you matter! Self-care and self-love are so important because you cannot make a deep and loving impact on other people until you truly love and care for yourself.",
      duration: "16 minutes",
      videoLink: "https://www.youtube.com/embed/MLggYZr3CVI",
    },
    {
      title:
        "Guided Mindfulness Meditation for a Powerful Mind - Strength and Healing Energy",
      description:
        "This is a 10-minute guided meditation with a focus on mindfulness and the power of the mind. This session is a great way to find a mental reset and a renewed care and love for yourself and others through your inner kindness",
      duration: "10 minutes",
      videoLink: "https://www.youtube.com/embed/mZxcw2rPWxU",
    },
    {
      title:
        "Guided Mindfulness Meditation - Go Easy on Yourself - Self-care and Self-Love",
      description:
        "This is a new guided mindfulness meditation focused on caring for yourself and showing love for yourself - GO EASY on yourself! I will bet you are the kind of person who takes on big challenges and puts a lot of pressure on yourself. As the saying goes, we are often our own worst critics. Meditating and being mindful of what pressures cause us stress and anxiety can lead to a healthier mental state.",
      duration: "15 minutes",
      videoLink: "https://www.youtube.com/embed/Rx5X-fo_fEI",
    },
    {
      title:
        "Mental Reset in 5 Minutes - Guided Mindfulness Meditation - Calm Anxiety and Stress",
      description:
        "Get help for anxiety and stress with this short and quick 5 minute guided mindfulness meditation to put the mental reset button. Anxiety symptoms can creep inside of us and needs to be set free. Take a few minutes during each day to help reduce anxiety and calm the mind. Just breathe and be here in the present moment. ",
      duration: "5 minutes",
      videoLink: "https://www.youtube.com/embed/ztTexqGQ0VI",
    },
  ]);

  return (
    <div className="meditationcontainer">
      <AccountNav />
      <h1 className="quizheading">Guided Meditation Sessions</h1>
      <p className="pb-3">
        Explore a variety of guided meditation sessions to promote relaxation
        and mindfulness.
      </p>

      <div className="mt-4">
        {meditations.map((meditation, index) => (
          <div key={index} className="">
            <h2 className="newstitle pt-4">{meditation.title}</h2>
            <p className="">{meditation.description}</p>
            <p className="pb-4">
              <strong>Duration:</strong> {meditation.duration}
            </p>
            <div className="meditationvideo grow bg-gray-300 shrink-0 cursor-pointer">
              <iframe
                title={meditation.title}
                src={meditation.videoLink}
                frameBorder="0"
                allowFullScreen
                className=" grow bg-gray-300 shrink-0 cursor-pointer"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuidedMeditation;
