import AccountNav from "../components/AccountNav";

const EducationalArticles = () => {
  // List of educational articles
  const articles = [
    {
      title: "What Are Anxiety and Depression?",
      content: "Anxiety disorders are real, serious medical conditions - just as real and serious as physical disorders such as heart disease or diabetes. Anxiety disorders are the most common and pervasive mental disorders in the United States. ",
      link: "https://adaa.org/understanding-anxiety",
    },
    {
      title: "Anxiety Disorders",
      content: "Anxiety is a normal emotion. It’s your brain’s way of reacting to stress and alerting you of potential danger ahead. ",
      link: "https://www.webmd.com/anxiety-panic/anxiety-disorders",
    },
    {
      title: "What is Depression?",
      content: "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. Also called major depressive disorder or clinical depression, it affects how you feel, think and behave and can lead to a variety of emotional and physical problems. You may have trouble doing normal day-to-day activities, and sometimes you may feel as if life isn't worth living.",
      link: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007",
    },
    {
        title: "Stress Management",
        content: "Stress can have lasting effects on your health and well-being.",
        link: "https://www.heart.org/en/healthy-living/healthy-lifestyle/stress-management",
    },
    {
        title: "Bipolar Disorder",
        content: "Bipolar disorder is a mental illness that causes dramatic shifts in a person’s mood, energy and ability to think clearly. People with bipolar experience high and low moods—known as mania and depression—which differ from the typical ups-and-downs most people experience.",
        link: "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Bipolar-Disorder"
    },
    {
        title: "Eating Disorder",
        content: "Eating disorders are serious health conditions that affect both your physical and mental health. These conditions include problems in how you think about food, eating, weight and shape, and in your eating behaviors.",
        link: "https://www.mayoclinic.org/diseases-conditions/eating-disorders/symptoms-causes/syc-20353603"
    },
    {
        title: "Post Traumatic Stress Disorder",
        content: "Post-traumatic stress disorder, or PTSD, is a serious potentially debilitating condition that can occur in people who have experienced or witnessed a traumatic event, such as a natural disaster, serious accident, terrorist incident, sudden death of a loved one, war, violent personal assault such as rape, or other life-threatening events.",
        link: "https://adaa.org/understanding-anxiety/posttraumatic-stress-disorder-ptsd"
    },
    {
        title: "Post Traumatic Stress Disorder",
        content: "Post-traumatic stress disorder (PTSD) is a disorder that develops in some people who have experienced a shocking, scary, or dangerous event.",
        link: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd"
    },
    {
        title: "Obsessive Compulsive Disorder",
        content: "Obsessive compulsive disorder (OCD) is a mental health disorder that affects people of all ages and walks of life, and occurs when a person gets caught in a cycle of obsessions and compulsions.",
        link: "https://iocdf.org/about-ocd/",
    },
    {
        title: "Attention-Deficit/Hyperactivity Disorder",
        content: "Attention-deficit/hyperactivity disorder (ADHD) is marked by an ongoing pattern of inattention and/or hyperactivity-impulsivity that interferes with functioning or development.",
        link: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd",
    },
    {
        title: "Borderline Personality Disorder (BPD)",
        content: "Borderline Personality Disorder is a condition characterized by difficulties regulating emotion. This means that people who experience BPD feel emotions intensely and for extended periods of time, and it is harder for them to return to a stable baseline after an emotionally triggering event.",
        link: "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Borderline-Personality-Disorder",
    },
    {
        title: "Seasonal affective disorder (SAD)",
        content: "Seasonal affective disorder is a type of depression that's related to changes in seasons — seasonal affective disorder (SAD) begins and ends at about the same times every year.",
        link: "https://www.mayoclinic.org/diseases-conditions/seasonal-affective-disorder/symptoms-causes/syc-20364651",
    },
    {
        title: "Substance Use Disorder (SUD)",
        content: "Substance use disorder is a complex condition in which there is uncontrolled use of a substance despite harmful consequences. People with SUD have an intense focus on using a certain substance(s) such as alcohol, tobacco, or illicit drugs, to the point where the person's ability to function in day-to-day life becomes impaired.",
        link: "https://www.psychiatry.org/patients-families/addiction/what-is-addiction",
    },
    {
        title: "Suicidal Thinking",
        content: "No matter how much pain you’re experiencing right now, you’re not alone. Many of us have had suicidal thoughts at some point in our lives. Feeling suicidal is not a character defect, and it doesn’t mean that you are crazy, or weak, or flawed.",
        link: "https://www.helpguide.org/articles/suicide-prevention/are-you-feeling-suicidal.htm",
    }
  ];

  return (
    <div className="meditationcontainer">
      <AccountNav />

      <h1 className="quizheading">Educational Articles on Mental Health</h1>
      <p className="pb-3">
        Explore insightful articles addressing various aspects of mental health
        for college students. Click on the title of any article to read more. 
      </p>

      <div className="headline">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <h2 className="newstitle">{article.title}</h2>
            </a>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalArticles;
