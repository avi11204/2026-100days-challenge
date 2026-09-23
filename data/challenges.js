const challenges = [

    // ================================
    // DAYS 1–20 — TRY
    // ================================

    {
        id: 1,
        day: 1,
        category: "tech",
        title: "Build the 100-Day Exploration Tracker",
        description: "Continue building the website that will document everything you learn, create, explore and discover over the next 100 days.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "Working exploration tracker",
        reflection: "What do you want to discover about yourself during these 100 days?"
    },

    {
        id: 2,
        day: 2,
        category: "create",
        title: "Create a Geometric Mandala",
        description: "Create a simple geometric mandala using repeating shapes and patterns.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "One finished mandala",
        reflection: "Did you enjoy the process or mainly the final result?"
    },

    {
        id: 3,
        day: 3,
        category: "photography",
        title: "Photograph Reflections",
        description: "Find interesting reflections around you and capture five different photographs.",
        duration: "30–60 min",
        difficulty: "easy",
        output: "Five photographs",
        reflection: "What did you notice that you normally overlook?"
    },

    {
        id: 4,
        day: 4,
        category: "tech",
        title: "Explore a Public API",
        description: "Find a free public API and understand what information it provides.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "API notes or a small API experiment",
        reflection: "Did working with real data make development more interesting?"
    },

    {
        id: 5,
        day: 5,
        category: "writing",
        title: "Write a 100-Word Story",
        description: "Write a complete story using exactly 100 words.",
        duration: "20–30 min",
        difficulty: "easy",
        output: "100-word story",
        reflection: "Was it easier to create freely or work within a constraint?"
    },

    {
        id: 6,
        day: 6,
        category: "ux",
        title: "Redesign an Everyday App Screen",
        description: "Choose an app screen you use regularly and sketch a simpler or clearer version.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "One redesigned screen",
        reflection: "What made you want to change the original design?"
    },

    {
        id: 7,
        day: 7,
        category: "explore",
        title: "Take an Unfamiliar-Route Walk",
        description: "Take a 30-minute walk using a route you normally would not choose.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "A few observations or photographs",
        reflection: "What did you discover by changing your usual route?"
    },

    {
        id: 8,
        day: 8,
        category: "culture",
        title: "Watch a Film from an Unfamiliar Country",
        description: "Choose a film from a country or culture you have rarely explored.",
        duration: "60–120 min",
        difficulty: "easy",
        output: "One movie and three observations",
        reflection: "What felt unfamiliar or interesting about the film?"
    },

    {
        id: 9,
        day: 9,
        category: "tech",
        title: "Build a Tiny JavaScript Utility",
        description: "Create a small JavaScript tool such as a word counter, timer, random picker or unit converter.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "One working JavaScript utility",
        reflection: "Did you enjoy solving the problem or building the interface?"
    },

    {
        id: 10,
        day: 10,
        category: "wildcard",
        title: "Learn Morse Code",
        description: "Learn the basics of Morse code and use it to encode a few words.",
        duration: "20–30 min",
        difficulty: "easy",
        output: "Five encoded words",
        reflection: "Did learning something unrelated to your usual interests feel refreshing?"
    },

    {
        id: 11,
        day: 11,
        category: "photography",
        title: "Photograph Shadows",
        description: "Look for interesting shadows and capture five photographs.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "Five shadow photographs",
        reflection: "Did changing your attention change how ordinary places looked?"
    },

    {
        id: 12,
        day: 12,
        category: "create",
        title: "Try Calligraphy or Lettering",
        description: "Experiment with lettering or calligraphy using a style you have not tried before.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "One lettering artwork",
        reflection: "Did you enjoy practicing the technique?"
    },

    {
        id: 13,
        day: 13,
        category: "tech",
        title: "Learn a New Git Workflow",
        description: "Learn and practice one Git or GitHub workflow you have not used before.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "A practiced Git workflow",
        reflection: "Did understanding the workflow make development feel easier?"
    },

    {
        id: 14,
        day: 14,
        category: "nature",
        title: "Observe the Sky",
        description: "Spend at least 20 minutes observing the sky and record what you notice.",
        duration: "20–30 min",
        difficulty: "easy",
        output: "Three sky observations",
        reflection: "What did you notice when you slowed down and simply observed?"
    },

    {
        id: 15,
        day: 15,
        category: "ux",
        title: "Create a User Journey",
        description: "Choose a simple real-world problem and map the journey a person takes while solving it.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "One user journey map",
        reflection: "Did mapping the experience change how you understood the problem?"
    },

    {
        id: 16,
        day: 16,
        category: "writing",
        title: "Write from an Object's Perspective",
        description: "Choose an everyday object and write a short piece from its perspective.",
        duration: "20–30 min",
        difficulty: "easy",
        output: "Short creative writing piece",
        reflection: "Did changing perspective make writing more interesting?"
    },

    {
        id: 17,
        day: 17,
        category: "tech",
        title: "Build a Tiny React Interaction",
        description: "Create a small React interaction such as a counter, tabs, toggle or quote generator.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "Working React interaction",
        reflection: "Did you enjoy building the logic or seeing the interface respond?"
    },

    {
        id: 18,
        day: 18,
        category: "explore",
        title: "Explore a Place You Always Pass",
        description: "Visit a nearby place you have passed many times but never intentionally explored.",
        duration: "30–60 min",
        difficulty: "easy",
        output: "Three observations",
        reflection: "Why had you never explored this place before?"
    },

    {
        id: 19,
        day: 19,
        category: "culture",
        title: "Explore an Unfamiliar Music Genre",
        description: "Listen to an unfamiliar music genre and choose three songs that stood out.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "Three songs and your observations",
        reflection: "Did anything about the genre surprise you?"
    },

    {
        id: 20,
        day: 20,
        category: "wildcard",
        title: "Create with Only Paper and Pen",
        description: "Make something creative using only paper and a pen.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "One paper-and-pen creation",
        reflection: "Did having fewer tools make creativity easier or harder?"
    },


    // ================================
    // DAYS 21–40 — EXPLORE
    // ================================

    {
        id: 21,
        day: 21,
        category: "tech",
        title: "Explore TypeScript Basics",
        description: "Convert a small JavaScript example into TypeScript and explore basic types.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "One TypeScript example",
        reflection: "Did adding types make the code clearer to you?"
    },

    {
        id: 22,
        day: 22,
        category: "photography",
        title: "Create a Five-Photo Story",
        description: "Tell a simple story about an ordinary place using exactly five photographs.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Five-photo story",
        reflection: "Could five images communicate something words could not?"
    },

    {
        id: 23,
        day: 23,
        category: "ux",
        title: "Create a Simple Persona",
        description: "Create a beginner-level persona for a real user problem.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "One user persona",
        reflection: "Did thinking about another person's needs change your solution?"
    },

    {
        id: 24,
        day: 24,
        category: "writing",
        title: "Describe a Memory Without Naming It",
        description: "Describe a personal memory without directly saying where or when it happened.",
        duration: "20–30 min",
        difficulty: "easy",
        output: "One short memory piece",
        reflection: "What details became more important when you removed the obvious context?"
    },

    {
        id: 25,
        day: 25,
        category: "tech",
        title: "Make a REST API Request",
        description: "Make your first simple request to a REST API and display the returned information.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "Working API request",
        reflection: "Did working with real data make development more interesting?"
    },

    {
        id: 26,
        day: 26,
        category: "create",
        title: "Draw Without Lifting Your Pen",
        description: "Create a drawing without lifting your pen from the paper.",
        duration: "20–30 min",
        difficulty: "easy",
        output: "One continuous-line drawing",
        reflection: "How did the constraint affect your creativity?"
    },

    {
        id: 27,
        day: 27,
        category: "explore",
        title: "Explore Somewhere Nearby",
        description: "Explore a nearby place you have never intentionally visited.",
        duration: "45–60 min",
        difficulty: "easy",
        output: "Three observations or photographs",
        reflection: "What made this experience different from your normal routine?"
    },

    {
        id: 28,
        day: 28,
        category: "culture",
        title: "Watch a Short Documentary",
        description: "Watch a documentary about a subject you know very little about.",
        duration: "30–60 min",
        difficulty: "easy",
        output: "Three things you learned",
        reflection: "What new question did the documentary make you curious about?"
    },

    {
        id: 29,
        day: 29,
        category: "tech",
        title: "Explore Browser DevTools",
        description: "Spend time exploring browser developer tools and discover at least three useful features.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "Three DevTools discoveries",
        reflection: "Which tool would you actually use again?"
    },

    {
        id: 30,
        day: 30,
        category: "wildcard",
        title: "Learn Five Words in Morse Code",
        description: "Learn how to represent your name and five simple words using Morse code.",
        duration: "20–30 min",
        difficulty: "easy",
        output: "Six encoded words",
        reflection: "Did you enjoy learning something completely outside your usual interests?"
    },

    {
        id: 31,
        day: 31,
        category: "ux",
        title: "Create a Low-Fidelity Wireframe",
        description: "Create a simple wireframe for an app that solves a small everyday problem.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "One low-fidelity wireframe",
        reflection: "Did sketching before designing help you think differently?"
    },

    {
        id: 32,
        day: 32,
        category: "photography",
        title: "Photograph Textures and Patterns",
        description: "Find interesting textures and repeating patterns and photograph them.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "Five texture photographs",
        reflection: "What ordinary textures became interesting once you looked closely?"
    },

    {
        id: 33,
        day: 33,
        category: "tech",
        title: "Connect a Frontend to an API",
        description: "Create a simple frontend that fetches and displays data from an API.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Working frontend/API connection",
        reflection: "Which part of connecting the pieces did you enjoy most?"
    },

    {
        id: 34,
        day: 34,
        category: "writing",
        title: "Write a 300-Word Micro-Fiction",
        description: "Write a complete fictional story in approximately 300 words.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "300-word story",
        reflection: "Did having a word limit help you focus?"
    },

    {
        id: 35,
        day: 35,
        category: "nature",
        title: "Document the Evening Sky",
        description: "Observe or photograph the evening sky and write three things you notice.",
        duration: "20–30 min",
        difficulty: "easy",
        output: "Sky photograph and observations",
        reflection: "How did slowing down affect your attention?"
    },

    {
        id: 36,
        day: 36,
        category: "create",
        title: "Create a Digital Poster",
        description: "Choose a random word and turn it into a simple digital poster.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "One digital poster",
        reflection: "Did the random starting point make designing easier or harder?"
    },

    {
        id: 37,
        day: 37,
        category: "tech",
        title: "Explore Environment Variables",
        description: "Learn how environment variables work and practice using one safely in a small project.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "Small environment-variable experiment",
        reflection: "What became clearer about how applications manage configuration?"
    },

    {
        id: 38,
        day: 38,
        category: "explore",
        title: "Attend or Explore an Event",
        description: "Attend a free event, exhibition, workshop, lecture or community activity, online or in person.",
        duration: "45–90 min",
        difficulty: "medium",
        output: "Three observations",
        reflection: "What did you encounter that you would not normally seek out?"
    },

    {
        id: 39,
        day: 39,
        category: "culture",
        title: "Study a Movie Scene",
        description: "Choose one movie scene and study its framing, lighting, sound and editing.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "Scene analysis notes",
        reflection: "What changed when you watched the scene analytically?"
    },

    {
        id: 40,
        day: 40,
        category: "wildcard",
        title: "Try Something You Keep Postponing",
        description: "Choose one small activity you have been curious about but repeatedly postponed.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "One completed experiment",
        reflection: "What was actually stopping you from trying it?"
    },


    // ================================
    // DAYS 41–60 — CREATE
    // ================================

    {
        id: 41,
        day: 41,
        category: "create",
        title: "Create a New Mandala",
        description: "Create a mandala using a new pattern, structure or technique.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "One finished mandala",
        reflection: "What did you change compared with your first mandala?"
    },

    {
        id: 42,
        day: 42,
        category: "ux",
        title: "Design a Mobile App Screen",
        description: "Design a simple mobile app screen in Figma.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "One polished app screen",
        reflection: "Which design decision took the most thought?"
    },

    {
        id: 43,
        day: 43,
        category: "writing",
        title: "Write a Story Inspired by a Photograph",
        description: "Choose one photograph and create a one-page story inspired by it.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "One-page story",
        reflection: "Did the image make writing easier?"
    },

    {
        id: 44,
        day: 44,
        category: "tech",
        title: "Build an Interactive Webpage",
        description: "Create a small webpage with JavaScript interactions.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Interactive webpage",
        reflection: "Did you enjoy creating the behaviour or the visual result more?"
    },

    {
        id: 45,
        day: 45,
        category: "photography",
        title: "Create a One-Colour Photo Collection",
        description: "Take photographs where one colour is the main visual theme.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "Five-photo collection",
        reflection: "Did limiting colour change how you composed photographs?"
    },

    {
        id: 46,
        day: 46,
        category: "create",
        title: "Try a New Drawing Style",
        description: "Choose a drawing style you have never seriously tried and make one small artwork.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "One experimental drawing",
        reflection: "Did being a beginner feel exciting or frustrating?"
    },

    {
        id: 47,
        day: 47,
        category: "writing",
        title: "Create a Fictional Character",
        description: "Create a fictional character including their personality, habits, fears and goals.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "Character profile",
        reflection: "Which part of the character came most naturally to you?"
    },

    {
        id: 48,
        day: 48,
        category: "ux",
        title: "Create a Clickable Figma Prototype",
        description: "Turn a few wireframes into a simple clickable prototype.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Clickable prototype",
        reflection: "Did prototyping change your understanding of the user flow?"
    },

    {
        id: 49,
        day: 49,
        category: "tech",
        title: "Build a Tiny Useful Tool",
        description: "Build a small tool that solves one tiny problem in your daily life.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Working personal utility",
        reflection: "Did solving a real problem make coding more motivating?"
    },

    {
        id: 50,
        day: 50,
        category: "wildcard",
        title: "Make Something Absurd",
        description: "Create something intentionally strange, silly or completely impractical.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "One absurd creation",
        reflection: "Did removing the pressure to be useful change how you created?"
    },

    {
        id: 51,
        day: 51,
        category: "photography",
        title: "Tell a Story in Five Photos",
        description: "Tell a beginning, middle and end using exactly five photographs.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Five-photo story",
        reflection: "How did you decide what information each photograph should communicate?"
    },

    {
        id: 52,
        day: 52,
        category: "create",
        title: "Create Typography Artwork",
        description: "Turn a meaningful word or short phrase into a visual lettering artwork.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "Typography artwork",
        reflection: "Did you think more about the meaning or the visual appearance?"
    },

    {
        id: 53,
        day: 53,
        category: "tech",
        title: "Build a Webpage from Scratch",
        description: "Start with a simple idea and build a complete webpage without using a tutorial.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "One complete webpage",
        reflection: "What part of building from scratch felt easiest?"
    },

    {
        id: 54,
        day: 54,
        category: "writing",
        title: "Write Using Three Random Words",
        description: "Choose three unrelated words and use all of them in a short story.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "Short story",
        reflection: "Did constraints help you become more creative?"
    },

    {
        id: 55,
        day: 55,
        category: "nature",
        title: "Create a Sky Diary",
        description: "Document the sky at different points during one day.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "Mini sky diary",
        reflection: "What changed in the sky that you might normally miss?"
    },

    {
        id: 56,
        day: 56,
        category: "ux",
        title: "Redesign Something You Use Every Day",
        description: "Choose an everyday digital experience and redesign it with a clear reason for each change.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Redesign concept",
        reflection: "Did understanding the problem matter more than making it visually attractive?"
    },

    {
        id: 57,
        day: 57,
        category: "tech",
        title: "Add a Feature to an Existing Project",
        description: "Choose one of your existing projects and add a small useful feature.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "One new project feature",
        reflection: "Did improving something existing feel different from starting from zero?"
    },

    {
        id: 58,
        day: 58,
        category: "create",
        title: "Recreate an Artwork in Your Style",
        description: "Choose an artwork or photograph for inspiration and recreate the idea in your own style.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Inspired artwork",
        reflection: "What did you change to make the result feel like yours?"
    },

    {
        id: 59,
        day: 59,
        category: "explore",
        title: "Take a Creative Photography Walk",
        description: "Explore an unfamiliar area and intentionally look for visual stories.",
        duration: "45–90 min",
        difficulty: "medium",
        output: "Five photographs",
        reflection: "Did changing your purpose for walking change what you noticed?"
    },

    {
        id: 60,
        day: 60,
        category: "wildcard",
        title: "Create Your Own Constraint",
        description: "Invent a creative constraint and make something within it.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "One constrained creation",
        reflection: "Did the constraint make creating harder or easier?"
    },


    // ================================
    // DAYS 61–80 — STEP OUT
    // ================================

    {
        id: 61,
        day: 61,
        category: "explore",
        title: "Take an Unusual Walk",
        description: "Walk somewhere you normally would not choose while staying within a comfortable and safe area.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "Three observations",
        reflection: "How did changing your routine affect your mood?"
    },

    {
        id: 62,
        day: 62,
        category: "wildcard",
        title: "Learn How Something Ordinary Works",
        description: "Choose an everyday object or system and learn how it works.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "Simple explanation",
        reflection: "What ordinary thing became fascinating once you understood it?"
    },

    {
        id: 63,
        day: 63,
        category: "photography",
        title: "Photograph People from a Distance",
        description: "Capture candid scenes from a respectful distance without staging or identifying people.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "Three photographs",
        reflection: "What stories did you imagine from the scenes you observed?"
    },

    {
        id: 64,
        day: 64,
        category: "culture",
        title: "Watch a Film from a Different Culture",
        description: "Choose a film from a culture you rarely explore and pay attention to its everyday details.",
        duration: "60–120 min",
        difficulty: "easy",
        output: "Three cultural observations",
        reflection: "What felt different from what you normally watch?"
    },

    {
        id: 65,
        day: 65,
        category: "writing",
        title: "Write Using the Five Senses",
        description: "Describe a place using sounds, smells, textures, sights and physical sensations.",
        duration: "20–30 min",
        difficulty: "easy",
        output: "Sensory description",
        reflection: "Which sense was easiest for you to describe?"
    },

    {
        id: 66,
        day: 66,
        category: "nature",
        title: "Observe the Sunrise",
        description: "Wake up early enough to observe the sunrise and record what you notice.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "Photograph or written observation",
        reflection: "Was waking up early worth the experience for you?"
    },

    {
        id: 67,
        day: 67,
        category: "explore",
        title: "Visit a Local Place You've Wondered About",
        description: "Visit a safe public place nearby that you have always been curious about.",
        duration: "45–90 min",
        difficulty: "medium",
        output: "Three observations",
        reflection: "Was the real experience different from what you imagined?"
    },

    {
        id: 68,
        day: 68,
        category: "wildcard",
        title: "Observe Without Your Phone",
        description: "Spend 30 minutes without using your phone and record five things you noticed.",
        duration: "30 min",
        difficulty: "medium",
        output: "Five observations",
        reflection: "What did you notice when you removed the usual distraction?"
    },

    {
        id: 69,
        day: 69,
        category: "ux",
        title: "Observe an Everyday User Experience",
        description: "Observe someone using an everyday product or service and note five usability observations without interfering.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "Five UX observations",
        reflection: "What did observation reveal that assumptions might have missed?"
    },

    {
        id: 70,
        day: 70,
        category: "tech",
        title: "Explore an Unfamiliar Technology",
        description: "Choose a technology you normally would not explore and spend time understanding its basics.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "Technology notes",
        reflection: "Did unfamiliar technology make you curious to learn more?"
    },

    {
        id: 71,
        day: 71,
        category: "photography",
        title: "Photograph One Place at Different Times",
        description: "Photograph the same location at three different times of day.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "Three photographs",
        reflection: "How did time change the character of the place?"
    },

    {
        id: 72,
        day: 72,
        category: "writing",
        title: "Interview Someone About Their Work",
        description: "Ask someone about their work or profession and write down what surprised you.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "Interview notes",
        reflection: "What did you learn that you could not have learned from a job description?"
    },

    {
        id: 73,
        day: 73,
        category: "explore",
        title: "Try a Completely Unfamiliar Activity",
        description: "Choose a safe activity you have never tried before.",
        duration: "30–90 min",
        difficulty: "medium",
        output: "One new experience",
        reflection: "Would you voluntarily try this again?"
    },

    {
        id: 74,
        day: 74,
        category: "culture",
        title: "Explore an Unfamiliar Music Style",
        description: "Listen carefully to a music style you rarely hear and describe its sounds and mood.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "Music observations",
        reflection: "Did your opinion change after listening more carefully?"
    },

    {
        id: 75,
        day: 75,
        category: "wildcard",
        title: "Learn Five Words in a New Language",
        description: "Learn five useful words or phrases in a language you do not know.",
        duration: "20–30 min",
        difficulty: "easy",
        output: "Five new words",
        reflection: "What made the words memorable?"
    },

    {
        id: 76,
        day: 76,
        category: "nature",
        title: "Watch the Night Sky",
        description: "Spend at least 30 minutes observing the night sky and note what you can see.",
        duration: "30 min",
        difficulty: "easy",
        output: "Sky observations",
        reflection: "Did the experience change your sense of time or scale?"
    },

    {
        id: 77,
        day: 77,
        category: "photography",
        title: "Find Beauty in Something Ordinary",
        description: "Choose something normally considered boring and photograph it in an interesting way.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "Three photographs",
        reflection: "What changed when you deliberately looked for beauty?"
    },

    {
        id: 78,
        day: 78,
        category: "ux",
        title: "Redesign a Frustrating Experience",
        description: "Identify an everyday frustrating experience and design a better version of it.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Redesign concept",
        reflection: "Did experiencing the problem yourself make the design easier?"
    },

    {
        id: 79,
        day: 79,
        category: "explore",
        title: "Take a Solo Local Exploration",
        description: "Explore a safe public area on your own and intentionally experience something unfamiliar.",
        duration: "60–90 min",
        difficulty: "medium",
        output: "Three observations",
        reflection: "How did exploring alone feel compared with exploring with others?"
    },

    {
        id: 80,
        day: 80,
        category: "wildcard",
        title: "Do Something Unfamiliar",
        description: "Choose something safe that you have avoided simply because it feels unfamiliar.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "One new experience",
        reflection: "What did you learn about your hesitation?"
    },


    // ================================
    // DAYS 81–100 — DISCOVER
    // ================================

    {
        id: 81,
        day: 81,
        category: "tech",
        title: "Go Deeper into Your Favourite Tech Activity",
        description: "Revisit the technical activity you enjoyed most and explore one level deeper.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "A deeper experiment",
        reflection: "What made this technical activity stand out to you?"
    },

    {
        id: 82,
        day: 82,
        category: "create",
        title: "Repeat Your Favourite Creative Activity",
        description: "Return to the creative activity you enjoyed most and create something new.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "New creative work",
        reflection: "Did repeating something feel different after 80 days?"
    },

    {
        id: 83,
        day: 83,
        category: "photography",
        title: "Photograph Your 100-Day Journey",
        description: "Create one photograph that represents what this journey has felt like to you.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "One representative photograph",
        reflection: "What part of the journey does this image represent?"
    },

    {
        id: 84,
        day: 84,
        category: "writing",
        title: "Write About Your Biggest Surprise",
        description: "Write about the most unexpected discovery you have made during the challenge.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "Reflection piece",
        reflection: "Why was this discovery unexpected?"
    },

    {
        id: 85,
        day: 85,
        category: "ux",
        title: "Design a Solution to a Personal Problem",
        description: "Identify a problem you personally experience and design a possible solution.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Solution concept",
        reflection: "Did solving your own problem feel more motivating?"
    },

    {
        id: 86,
        day: 86,
        category: "tech",
        title: "Combine Two Skills",
        description: "Build something that combines two skills you explored during the challenge.",
        duration: "45–90 min",
        difficulty: "hard",
        output: "Small combined project",
        reflection: "Which combination felt surprisingly natural?"
    },

    {
        id: 87,
        day: 87,
        category: "culture",
        title: "Return to Something That Stayed With You",
        description: "Revisit a movie, song, artwork or cultural experience that stayed in your memory.",
        duration: "30–90 min",
        difficulty: "easy",
        output: "Personal reflection",
        reflection: "Why do you think this experience stayed with you?"
    },

    {
        id: 88,
        day: 88,
        category: "nature",
        title: "Compare the Sky",
        description: "Observe the sky again and compare it with your earlier sky observations.",
        duration: "20–30 min",
        difficulty: "easy",
        output: "Comparison notes",
        reflection: "What has changed in the way you observe?"
    },

    {
        id: 89,
        day: 89,
        category: "wildcard",
        title: "Try Something Not on Your List",
        description: "Choose a completely new activity that was never part of your original 100-day plan.",
        duration: "30–90 min",
        difficulty: "medium",
        output: "One unexpected experience",
        reflection: "What made you choose this activity?"
    },

    {
        id: 90,
        day: 90,
        category: "explore",
        title: "Return to a Familiar Place",
        description: "Return to a place you explored earlier in the challenge and look for things you missed the first time.",
        duration: "30–60 min",
        difficulty: "easy",
        output: "Three new observations",
        reflection: "Did you notice something completely different this time?"
    },

    {
        id: 91,
        day: 91,
        category: "writing",
        title: "Write Ten Things You Discovered About Yourself",
        description: "Write ten things you now know about your interests, habits or preferences.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "Ten self-discoveries",
        reflection: "Which discovery surprised you the most?"
    },

    {
        id: 92,
        day: 92,
        category: "tech",
        title: "Improve an Earlier Project",
        description: "Choose one technical project from the challenge and improve one meaningful part of it.",
        duration: "45–90 min",
        difficulty: "medium",
        output: "Improved project",
        reflection: "How has your approach changed since you first built it?"
    },

    {
        id: 93,
        day: 93,
        category: "create",
        title: "Create Something That Represents You",
        description: "Create a visual or physical artwork that represents something important about you.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Personal artwork",
        reflection: "What part of yourself did you choose to represent?"
    },

    {
        id: 94,
        day: 94,
        category: "photography",
        title: "Choose Your Five Favourite Photos",
        description: "Review your photographs from the challenge and select the five that mean the most to you.",
        duration: "30–45 min",
        difficulty: "easy",
        output: "Five favourite photographs",
        reflection: "What do your favourite photographs have in common?"
    },

    {
        id: 95,
        day: 95,
        category: "ux",
        title: "Design Your Ideal Personal Dashboard",
        description: "Design a dashboard showing the areas of life or learning you want to explore next year.",
        duration: "45–60 min",
        difficulty: "medium",
        output: "Personal dashboard design",
        reflection: "What did you choose to measure and why?"
    },

    {
        id: 96,
        day: 96,
        category: "wildcard",
        title: "Retry Something You Disliked",
        description: "Choose an activity you initially disliked and try it again with a different approach.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "Second attempt",
        reflection: "Did your opinion change after trying again?"
    },

    {
        id: 97,
        day: 97,
        category: "writing",
        title: "Write a Letter to Day-1 You",
        description: "Write a letter to yourself from the perspective of Day 97.",
        duration: "30–45 min",
        difficulty: "medium",
        output: "Letter to your Day-1 self",
        reflection: "What would you want your Day-1 self to know?"
    },

    {
        id: 98,
        day: 98,
        category: "tech",
        title: "Teach Something You Learned",
        description: "Choose something you learned during the challenge and document it clearly enough for another beginner to understand.",
        duration: "30–60 min",
        difficulty: "medium",
        output: "Beginner-friendly explanation",
        reflection: "Did teaching something reveal gaps in your own understanding?"
    },

    {
        id: 99,
        day: 99,
        category: "explore",
        title: "One Final Unplanned Exploration",
        description: "Choose a safe, spontaneous activity or place without planning it far in advance.",
        duration: "30–90 min",
        difficulty: "medium",
        output: "Final unexpected experience",
        reflection: "What did you choose when you had no predefined plan?"
    },

    {
        id: 100,
        day: 100,
        category: "discover",
        title: "Create Your 100-Day Exploration Story",
        description: "Look back at your entire journey and create a final story about what you tried, enjoyed, disliked, learned and discovered about yourself.",
        duration: "60–120 min",
        difficulty: "medium",
        output: "Your complete 100-day exploration story",
        reflection: "Who did you discover yourself to be through these 100 days?"
    }

];

export default challenges;