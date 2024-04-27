const dataSet = [
    {
        bg: "https://wallpapers.com/images/high/kill-bill-the-bride-movie-poster-2o69uf2ploxy3apo.webp",
        title: "Kill Bill",
        year: 2008,
        duration: "111m",
        genre: "Action",
        rating: 5,
        description: "The two-part martial arts revenge movie, an ex-assassin who seeks vengeance against her former colleagues after being left for dead on her wedding day. The movie ends, unsurprisingly, with the Bride killing Bill, as the title promised. It's the only time Tarantino was able to enjoy the best of both worlds",
        link: "https://www.youtube.com/watch?v=7kSuas6mRpk"
    },
    {
        bg: "https://assets-global.website-files.com/610c5007d3b7ee36cc3e07c1/62c5810a4e24830a3dbd00e2_screenplay-breakdown-interstellar-explained01.jpg",
        title: "Interstellar",
        year: 2010,
        duration: "180m",
        genre: "Science Fiction",
        rating: 5,
        description: "Set in a dystopian future where humanity is embroiled in a catastrophic blight and famine, the film follows a group of astronauts who travel through a wormhole near Saturn in search of a new home for humankind. It is by turns edgy, breathtaking, hopeful, and heartbreaking.",
        link: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },
    {
        bg: "https://cdn.mos.cms.futurecdn.net/N9nCdJHgqde57jcyAnd2KL.jpg",
        title: "Inception",
        year: 2010,
        duration: "111m",
        genre: "Fantasy",
        rating: 5,
        description: "Dom Cobb is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves Inception is a very cutting edge movie.",
        link: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    {
        bg: "https://dci832c741skk.cloudfront.net/assets/files/33343/bullet-train-review.800x600.jpg",
        title: "Bullet Train",
        year: 2022,
        duration: "190m",
        genre: "Action",
        rating: 5,
        description: " Ladybug(Brad Pitt) is an unlucky assassin who's determined to do his job peacefully after one too many gigs has gone off the rails. Fate, however, may have other plans as his latest mission puts him on a collision course with lethal adversaries from around the globe. As for the content, it's not for young teens and DEFINITELY NOT for kids. ",
        link: "https://www.youtube.com/watch?v=0IOsk2Vlc4o"

    },
    {
        bg: "https://miro.medium.com/v2/resize:fit:1400/1*KBwRKCB9g4O0ojNzYC1uvw.jpeg",
        title: "Shawshank Redemption",
        year: 1994,
        duration: "183m",
        genre: "Thriller",
        rating: 4,
        description: "Andy Dufresne is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. However, only Andy knows he didn't commit the crimes.The Shawshank Redemption is not a true story, but is based on a novella by Stephen King.",
        link: "https://www.youtube.com/watch?v=NmzuHjWmXOc"
    },
    {
        bg: "https://mhshighlife.com/wp-content/uploads/2017/11/Screenshot-2017-11-02-at-12.00.22-PM.png",
        title: "The Notebook",
        year: 2004,
        duration: "158m",
        genre: "Romance",
        rating: 5,
        description: "n 1940s South Carolina, mill worker Noah and rich girl Allie are desperately in love. But her parents don't approve. When Noah goes off to serve in World War II, it seems to mark the end of their love affair. In the interim, Allie becomes involved with another man.Its a constant, and classic love story that makes you feel as if you are there watching it.",
        link: "https://www.youtube.com/watch?v=BjJcYdEOI0k"
    },
    {
        bg: "https://lh3.googleusercontent.com/MdLnk5_DEaxqrXoum-7Dfw8skv6EdLXOp_RDEmydcy3jzup1PoAi3XZuL9btOHFnltImIDM_dSI",
        title: "Shutter Island",
        year: 2010,
        duration: "198m",
        genre: "Mystery",
        rating: 5,
        description: "The implausible escape of a brilliant murderess brings U.S. Marshal Teddy Daniels and his new partner to Ashecliffe Hospital, a fortress-like insane asylum located on a remote, windswept island. The woman appears to have vanished from a locked room. Shutter island is an exceptional film, with incredible scenario, direction, and acting.",
        link: "https://www.youtube.com/watch?v=v8yrZSkKxTA"
    },
    {
        bg: "https://m.media-amazon.com/images/S/pv-target-images/b9839cd791f871c956edeead6becda8e374277ae832aa265625d80a43dad4334.jpg",
        title: "Django The Unchained",
        year: 2014,
        duration: "165m",
        genre: "Drama",
        rating: 5,
        description: "Two years before the Civil War, Django, a slave, finds himself accompanying a German bounty hunter named Dr. King Schultz on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South's most-wanted criminals.",
        link: "https://www.youtube.com/watch?v=0fUCuvNlOCg"
    },
    {
        bg: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTzkS1cJTOUklWFG5Bf1Ql3FFt1PG7cgcsHwmbDVuONbc-M89wjTVpsXjK1o44CmO9TwhqUmIiYXOhVSzOxA62mqFNET1P-SodpBP0tnXJpGYo65yf8jZBKlB3Wp3OmkumVFDA.jpg?r=1ee",
        title: "Forgotten",
        year: 2017,
        duration: "109m",
        genre: "Thriller",
        rating: 4,
        description: "When suddenly his abducted brother returns, seemingly a different man with no memory of the past 19 days, Jin-seok chases after the truth behind the mysterious kidnapping where something looks off.Though the case went cold, the family of the victims persist to find the killer, recruiting Yoo-seok in the process.",
        link: "https://www.youtube.com/watch?v=b4p92xc9r6g"
    },
    {
        bg: "https://wegotthiscovered.com/wp-content/uploads/2022/07/o-MEAN-GIRLS-ALTERNATE-ORIGINAL-ENDING-facebook.jpg?w=1200",
        title: "Mean Girls",
        year: 2004,
        duration: "97m",
        genre: "Comedy",
        rating: 3,
        description: "Teenage Cady Heron was educated in Africa by her scientist parents. When her family moves to the suburbs of Illinois, Cady finally gets to experience public school and gets a quick primer on the cruel, tacit laws of popularity that divide her fellow students into tightly knit cliques. Finally she realises the worth of true friendship ",
        link: "https://www.youtube.com/watch?v=oDU84nmSDZY"
    },
    {
        bg: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/421841DB2EB70A4718B792D247A03CD9838A6E67AB49636F3EA0B971EA18E7C1/scale?width=1200&aspectRatio=1.78&format=webp",
        title: "10 Things I Hate About You",
        year: 1999,
        duration: "122m",
        genre: "Comedy",
        rating: 4,
        description: "Kat Stratford is beautiful, smart and quite abrasive to most of her fellow teens, meaning that she doesn't attract many boys. Unfortunately for her younger sister, Bianca , house rules say that she can't date until Kat has a boyfriend. Soon Kat crosses paths with handsome new arrival Patrick Verona . ",
        link: "https://www.youtube.com/watch?v=AWmjzCZr0Jw"
    },
    {
        bg: "https://communist.red/wp-content/uploads/2022/08/godfather.png.webp",
        title: "The Godfather",
        year: 1972,
        duration: "190m",
        genre: "Drama",
        rating: 5,
        description: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone. When the don's youngest son, Michael, reluctantly joins the Mafia, he becomes involved in the inevitable cycle of violence and betrayal. ",
        link: "https://www.youtube.com/watch?v=UaVTIH8mujA"
    },
    {
        bg: "https://m.media-amazon.com/images/S/pv-target-images/08aa5d1ac96b18d23d885a3f0042f7d7d9108f5ffcaf73a2c04a6e797d0d2a9f.jpg",
        title: "Parasite",
        year: 2019,
        duration: "110m",
        genre: "Thriller",
        rating: 5,
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.the story includes a jet black satire of class conflict and wealth inequality; a leech which hungrily sucks until it has no choice but to explode and spray blood everywhere. In the end something unexpected happens",
        link: "https://www.youtube.com/watch?v=5xH0HfJHsaY"
    },
    {
        bg: "https://www.hollywoodinsider.com/wp-content/uploads/2021/02/Hollywood-Insider-What-Happened-to-Monday-Review-Netflix-Noomi-Rapace.png",
        title: "What Happened To Monday",
        year: 2017,
        duration: "131m",
        genre: "Drama",
        rating: 4,
        description: "In a world where families are allowed only one child due to overpopulation, resourceful identical septuplets must avoid governmental execution and dangerous infighting while investigating the disappearance of one of their own. In the end they have to make a very important decision",
        link: "https://www.youtube.com/watch?v=hOiWSWLt-NA"
    },
    {
        bg: "https://img.nrj.fr/VXWRai0FZCFnk_-QmX7svfscCyA=/0x415/smart/medias%2F2022%2F12%2Fzso9y3a-1uf2-ij-enl-emexkef9yfdqvm4m4tvhb4i_63a066891a3b2.jpg",
        title: "Oppenheimer",
        year: 2024,
        duration: "180m",
        genre: "Thriller",
        rating: 5,
        description: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world's first nuclear explosion, forever changing the course of history.",
        link: "https://www.youtube.com/watch?v=bK6ldnjE3Y0"
    },
]

export { dataSet }