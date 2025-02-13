import {
    mobile,
    web,
    ai,
    antivirus,
    cpp,
    firewall,
    itam,
    java,
    networking,
    oop,
    python,
    sql,
    shadowfox,
    uprisesol,
    netleap,
    quickheal,
    mahapolice,
    css,
    html,
    rockpaperscissor,
    snapguard,
    restro,
    gointern,
    bookbecho,
    clientconnect,
    keylogger,
    videoanalysis,
    stego,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Computer Engineer",
        icon: web,
    },
    {
        title: "Cyber Security Analyst",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Firewall",
        icon: firewall,
    },
    {
        name: "ITAM",
        icon: itam,
    },
    {
        name: "Antivirus",
        icon: antivirus,
    },
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "Networking",
        icon: networking,
    },
    {
        name: "AI",
        icon: ai,
    },
    {
        name: "OOP",
        icon: oop,
    },
    {
        name: "JAVA",
        icon: java,
    },
];

const experiences = [
    {
        title: " Cyber Security Intern",
        company_name: "ShadowFox",
        icon: shadowfox,
        iconBg: "#E6DEDD",
        date: "Jan 2025 - Feb 2024",
        points: [
            "Port scanning and network reconnaissance using Nmap.",
            "Directory brute-force attacks with Gobuster.",
            "Network traffic interception and analysis using Wireshark.",
            "Password cracking with John the Ripper.",
            "Executable analysis with PE Explorer and VeraCrypt.",
            "Reverse shell exploitation and penetration testing using Metasploit.",
            "Developed practical skills in cybersecurity tools and techniques, strengthening my expertise in ethical hacking, vulnerability assessment, and penetration testing.",
        ],
    },
    {
        title: "Information Security Intern",
        company_name: "UpriseSol LLP, Nashik",
        icon: uprisesol,
        iconBg: "#E6DEDD",
        date: "Mar 2024 - Aug 2024",
        points: [
            "Endpoint security using bitdefender.",
            "Database migration and Audits.",
            "Website health Audits.",
            "IT asset Management using Ease My AMC.",
            "Firewall Configuration using SOPHOS Center.",
            "Server log monitoring using LENOVO servers.",
            "Opportunity to teach IIT Guwahati Students.",
            "Worked on TrueNAS Cloud.",
            "Email Checking.",
            "Manual for kali linux.",
            "PC hardening.",
            "Product comparisons and analysis.",
        ],
    },
    {
        title: "Web Developement Intern",
        company_name: "NetLeap IT Training And Solutions, Nashik",
        icon: netleap,
        iconBg: "#E6DEDD",
        date: "Dec 2023 - Jan 2024",
        points: [
            "Studied and applied Web Technologies to create a product.",
            "Created Restaurant management Website for client.",
            "This dynamic website is being used by small restaurants and has good reviews.",
        ],
    },
    {
        title: "Cyber Warrior",
        company_name: "Quick Heal Foundation, Nashik",
        icon: quickheal,
        iconBg: "#E6DEDD",
        date: "July 2023 - Dec 2023",
        points: [
            "Conducted Awareness sessions in schools, Colleges, public places.",
            "Awaked 2000+ people about cyber Frauds and attacks and how to deal with it.",
            "Helped Victims to get the proper support.",
        ],
    },
    {
        title: "CyberDoot",
        company_name: "Maharashtra Cyber Cell, Nashik",
        icon: mahapolice,
        iconBg: "#E6DEDD",
        date: "From May 2023",
        points: [
        "Trained by Cyber experts by Maharashtra cyber cells.",
        "Conducted cyber attacks and threat awareness presentations to society by ppts and awareness sessions at Schools, laughter clubs, temples, etc.",
        ],
    },
];

const projects = [
    {
        name: "Rock Paper Scissors game using hand gesture and voice assistant In Python",
        description:
            'Using some python modules like cv2 and pyttsx3 introduced rock-paper-scissors game in camera vision which captures hand gesture and plays game with you.',
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "open CV",
                color: "orange-text-gradient",
            },
            {
                name: "pyttsx3",
                color: "green-text-gradient",
            },
        ],
        image: rockpaperscissor,
        source_code_link: "https://github.com/RushiMalve/Stone-paper-scissor-game.py",
        live_link: "https://github.com/RushiMalve/Stone-paper-scissor-game.py",
    },
    {
        name: "SnapGaurd: Secure Image Encryption & Decryption Mobile Application",
        description:
            `Secure image encryption and decryption mobile app with time-limited, screenshot-proof viewing, ensuring single-use access. Implemented advanced encryption algorithms for secure image sharing while maintaining efficiency and ease of use.`,
        tags: [
            {
                name: "Kotlin",
                color: "blue-text-gradient",
            },
            {
                name: "XML",
                color: "orange-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },
        ],
        image: snapguard,
        source_code_link: "https://github.com/RushiMalve/",
        live_link: "https://github.com/RushiMalve/",
    },
    {
        name: "RESTRO: Restaurant Management Website using Full Stack",
        description:
            `Restaurant management Website for client using full stack technologies. Admin panel to add foods and check the orders & an user panel to view menu and order the desired food. This dynamic website has been tried by small restaurants and has good reviews.`,
        tags: [
            {
                name: "Html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "orange-text-gradient",
            },
            {
                name: "sql",
                color: "pink-text-gradient",
            },
        ],
        image: restro,
        source_code_link: "https://github.com/RushiMalve/",
        live_link: "https://github.com/RushiMalve/",
    },
    {
        name: "Go-Intern: Internship and Field visit Finder Website ",
        description:
            `A website where industries offers internship and field visit to the students and students can find the internship and field visits to the industries at specific locations.`,
        tags: [
            {
                name: "Html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "orange-text-gradient",
            },
            {
                name: "sql",
                color: "pink-text-gradient",
            },
        ],
        image: gointern,
        source_code_link: "https://github.com/RushiMalve/",
        live_link: "https://github.com/RushiMalve/"
    },
    {
        name: "Book-Becho: Online books selling website",
        description:
            `A website made to sell and buy the second hand or new books.`,
        tags: [
            {
                name: "WIX",
                color: "blue-text-gradient",
            },
        ],
        image: bookbecho,
        source_code_link: "https://github.com/RushiMalve/",
        live_link: "https://spidergen.wixsite.com/bookbecho",
    },
    {
        name: "Client-Connect: Project management using project libre",
        description:
            `A project management life cycle for client-connect application using project libre and some charts and analyzed the estimated costings and efforts`,
        tags: [
            {
                name: "Project Estimation",
                color: "blue-text-gradient",
            },
            {
                name: "Project Libre",
                color: "pink-text-gradient",
            },
        ],
        image: clientconnect,
        source_code_link: "https://github.com/RushiMalve/",
    },
    {
        name: "Key-logger",
        description:
            `A key-logger using Python which records the key pressed on a system and saved it to a file.`,
        tags: [
            {
                name: "Python",
                color: "orange-text-gradient",
            },
        ],
        image: keylogger,
        source_code_link: "https://github.com/RushiMalve/KeyLogger",
    },
    {
        name: "Video-forensic Analysis Tool",
        description:
            `A Video-forensic analysis tool using Python which records the meta data, Hash value and altered frames and saves it to a file.`,
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
        ],
        image: videoanalysis,
        source_code_link: "https://github.com/RushiMalve/Video-forensic-Analysis-Tool",
    },
    {
        name: "Steganography Tool",
        description:
            `Python-based steganography tool with a user-friendly Tkinter interface for encoding and decoding hidden messages in images.`,
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Tkinter",
                color: "pink-text-gradient",
            },
        ],
        image: stego,
        source_code_link: "https://github.com/RushiMalve/Steganograpgy-tool",
    },
];

export { services, technologies, experiences, projects };
