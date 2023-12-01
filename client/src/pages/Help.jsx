import AccountNav from "../components/AccountNav";

const Help = () => {
  // List of mental health resources
  const resources = [
    {
        title: "Peak Mind",
        contact: "080-47092334",
        website: "https://www.peakmind.in/",
    },
    {
        title: "Sumaitri",
        contact: "011-23389090, 09315767849",
        website: "https://sumaitri.net/",
    },
    {
        title: "Mpower 1 on 1",
        contact: "1800-1208-20050",
        website: "https://mpowerminds.com/index.php/oneonone",
    },
    {
        title: "Sneha",
        contact: "044-24640050, 044-24640060",
        website: "https://snehaindia.org/new/",
    },
    {
        title: "Fortis Stress Helpline",
        contact: "08376804102",
        website: "https://www.fortishealthcare.com/",
    },
    {
        title: "AASRA",
        contact: "09820466726",
        website: "http://aasra.info/",
    },
    {
        title: "Lifeline Foundation",
        contact: "033-40447437, 09088030303",
        website: "http://lifelinefoundation.in/",
    },
    {
        title: "KIRAN Mental Health Rehabilitation Helpline",
        contact: "1800-599-0019",
        website: "https://pib.gov.in/PressReleasePage.aspx?PRID=1652240#:~:text=The%2024x7%20Toll%2DFree%20Mental,the%20wake%20of%20Pandemic%20COVID"
    },
    {
      title: "National Suicide Prevention Lifeline (US)",
      contact: "1-800-273-TALK (1-800-273-8255)",
      website: "https://suicidepreventionlifeline.org/",
    },
    {
      title: "Crisis Text Line (US)",
      contact: 'Text "HELLO" to 741741',
      website: "https://www.crisistextline.org/",
    },
    {
      title: "Mind (UK)",
      contact: "Infoline: 0300 123 3393",
      website: "https://www.mind.org.uk/",
    },
  ];

  return (
    <div className="meditationcontainer">
      <AccountNav />
      <h1 className="quizheading">Mental Health Resource Directory</h1>
      <p className="pb-3">Explore helpline numbers and websites for mental health support.</p>

      <div className="headline">
        <ul>
          {resources.map((resource, index) => (
            <li key={index} className="article">
              <h2 className="newstitle">{resource.title}</h2>
              <p>
                <strong>Contact:</strong> {resource.contact}
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href={resource.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.website}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Help;
