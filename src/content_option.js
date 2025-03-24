const logotext = "Deepansh Gulati";
const meta = {
    title: "Deepansh Gulati",
    description: "I'm Seonghee Lee a Master's student at Stanford studying Computer Science.",
};

const introdata = {
    title: "Deepansh Gulati",
    animated: {
        first: "Human AI Interaction",
        second: "Applied Machine Learning",
    },
    description: "In the past, I was a Research Assistant at the KAIST Interaction Lab (KIXLAB) developing a Generative Agent for Programming Education. My research interests are at the intersection of Human-AI Interaction and applied Machine Learning." ,
    description_two:"  I am currently a first year Computer Science (MS) student at Stanford and I did my undergrad at Cornell studying Information Science. I have received grants and scholarships for my research like the Robert S Ann Morley Research Grant and the Gwanjeong Scholarship for my Master's Studies.",
    your_img_url: "",
};

const dataabout = {
    title: "Research Interests",
    aboutme: "My research is primarily focused on the development of AI tools for communities, specifically exploring the implementation of LLM agents with model-level interactions or user-centered evaluations. I aim to create tools that embrace social consciousness, beyond considerations of model precision and performance.",
};
const worktimeline = [{
        jobtitle: "Stanford University",
        where: "Computer Science (MS)",
        date: "Sep 2023 - June 2025",
    },
    {
        jobtitle: "Cornell University",
        where: "Information Science (BS)",
        date: "Sep 2019 - Dec 2022",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "SDG AI Lab - Software Engineer",
        period:"March 2023 - May 2023",
        description: "Development of the Digital Technologies Radar : a Frontier Technology Radar for Disaster Risk Reduction (FTR4DRR), which allows for the systematic tracking and understanding of frontier technologies as they are developed. https://github.com/SDG-AI-Lab/Digital_Technologies_Radar",
    },
    {
        title: "Inspirit AI - AI/ML Instructor",
        period:"March 2020 - ",
        description: "Conducted lectures on Neural Networks, Computer Vision, Deep Learning, Reinforcement Learning and helped highschool students work on programming ML Models",
    },
    {
        title: "Cornell Data Science - Insights Team",
        period:"Janurary 2020 - December 2022 ",
        description: "Insights Team - Conducted and led Data Science/Machine Learning Projects, Conducted lectures on Neural Networks for Freshman Onboarding INFO 1998 ML lectures ",
    },
];

const awards = [{
    title: "Gwanjeong Educational Foundation Scholarship - Masters Degree",
    period:"Sep 2023 - June 2025",
},
{
    title: "ACM/IEEE Human Robot Interaction (HRI 2023) - Best Student Paper Award",
    period:"March 2022",
},
{
    title: "Robert S Ann Morley Research Grant - Cornell University",
    period:" December 2021 ",
},
];

const workexperience = [{
    title: "[Motional] Robotics Research Engineer",
    period:"Sep 2022 - Dec 2022",
    description: "Research on identification of Autonomous Vehicle Lane Change key parameters and metrics in dynamic road environments interacting with other agents. Published and first authored 2 papers to ACM/IEEE HRI 2023",
},
{
    title: "[Harvard Berkman Klein Center] Software Engineer",
    period:"May 2023 - August 2023",
    description: "Developed Software for dynamic text annotation and page navigation on H2O, an open-casebook platform (React, Django). Conducted Research on Digital Reading Interaction Software and published paper to ACM/IEEE CHI 2023",
},
{
    title: "[Cochl. AI] Software Engineer",
    period:"Nov 2020 - Feb 2021 ",
    description: "Integrated non-verbal sound recognition AI into Mercedes Benz User Interface. Full-stack development using React, Javascript, SocketIO, Docker. Developed and demonstrated a working prototype of Emotional Sound Recognition within Benz Cars to the Mercedes Benz Team - Presentation at Benz conference in Germany",
},
];

const researchexperience = [{
    title: "KIXLab (Prof. Juho Kim) - Generative Agents for Programming",
    period:"June 2023 - ",
    description: "Developed a LLM Teachable Agent (Algobo) for Programming Education. Developed prompting techniques for Knowledge State Configuration and conducted LLM Agent Evaluation on different knowledge states. Submitted to CHI 2024",
},
{
    title: "CMU Safe AI Lab - Multimodal ML Research",
    period:"Jan 2023 - March 2023 ",
    description: "Conducted lectures on Neural Networks, Computer Vision, Deep Learning, Reinforcement Learning and helped highschool students work on programming ML Models",
},
{
    title: "Stanford Empirical Security Research Group (ESRG)",
    period:"June 2023 - ",
    description: "Perceived Harm Research through an extension that collects user viewed comments on Reddit. Full Stack Development of website that processes user comments, labels toxicity scores and generates survey pairs. Parallel processing of comments, data mangagement and storage, web security. ",
},
];

const dataportfolio = [
    {
        img: "trafficRoute",
        title: "Traffic Route Optimizer: Simulating Efficient Urban Mobility Using Graph Algorithms",
        authors: "Deepansh Gulati",
        conference: "A Python-based optimization tool that uses real-time data and graph algorithms to recommend the most efficient routes for traffic flow. Designed for urban planning scenarios, it helps minimize congestion and travel time.",
        github:"https://github.com/NeuralWordsmith/Traffic-Route-Optimizer",
    },
    {
        img: "cs224s",
        title: "NLP Corpus Manager",
        authors: "Deepansh Gulati",
        conference: "A command-line interface tool built to streamline corpus management tasks for Natural Language Processing workflows. It supports document insertion, keyword search, frequency analysis, and text loading from files.",
        github:"https://github.com/NeuralWordsmith/NLP-Corpus-Manager",
    }
    ,
    {
        img: "teachyou",
        title: "Text Processing CLI Tool",
        authors: "Deepansh Gulati",
        conference: "A foundational Python utility that performs essential text analysis operations like word count, sentence count, keyword detection, and case normalization. Designed with a focus on clean CLI interaction and modular structure.",
        github:"https://github.com/NeuralWordsmith/Text-Processing-CLI-Tool",
    }
    ,
    {
        img: "multi",
        title: "Customer Churn Predictor",
        authors: "Deepansh Gulati",
        conference: "A machine learning model that analyzes customer data to predict churn likelihood using classification algorithms. Features exploratory data analysis, feature engineering, and model evaluation techniques.",
        github:"https://github.com/NeuralWordsmith/customer-churn-predictor",
    }
];

const projectportfolio = [
    {
        title: "DarakBooks - LLM based Book Recommendation",
        description: "Backend Development of LLM Based Book Recommendation API, User Book Club Groups API - Typescript, Nestjs, Swagger",
        github: "https://github.com/darakbooks-project/darakbooks-BE",
        website: "https://darakbooks.vercel.app/onboarding"
    },
    {
        title: "Perceived Harm Reddit - Stanford ESRG",
        description: "Fullstack Development of Reddit Survey through using a chrome extension to scrape user comments, analyze scores through Perspective and Generative survey questions. Parallel Processing, Serverside development Django",
        github: "https://github.com/shljessie/RedditSurvey",
        website: "http://reddit.esrg.stanford.edu/"
    },

];

const contactConfig = {
    YOUR_EMAIL: "deepansh_gulati@icloud.com",
    YOUR_FONE: "-",
    description: "- ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/NeuralWordsmith",
    facebook: "https://facebook.com",
    scholar: "https://scholar.google.com/",
    linkedin: "https://www.linkedin.com/in/deepictd/",
    twitter: "https://x.com/deepansh_gulati",
};
export {
    meta,
    dataabout,
    dataportfolio,
    researchexperience,
    workexperience,
    worktimeline,
    services,
    introdata,
    contactConfig,
    socialprofils,
    projectportfolio,
    logotext,
    awards,
};
