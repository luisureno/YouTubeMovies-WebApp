import journey2 from "./assets/journey2.png"
import theproposal from "./assets/the-proposal.jpg"
import taken from "./assets/taken.jpg"
import thinklikeaman from "./assets/thinklikeaman.jpg"
import happydeathday from "./assets/happydeathday.jpg"

export const movieData = [
    {
        id: 1,
        genre: "Action & Adventure",
        movies: [
            {   
                id: 101,
                title: "Journey 2: The Mysterious Island", 
                year: 2012,
                genre: "Action & Adventure",
                movieLink: "https://www.youtube.com/watch?v=iin0i9_W4a4",
                rated: "PG",
                img: {
                    src: journey2, 
                    alt: "Journey 2: The Mysterious Island Cover"
                }
            },
            {   
                id: 102,
                title: "Taken", 
                year: 2009,
                genre: "Action & Adventure",
                movieLink: "https://www.youtube.com/watch?v=Ur52dul70Ms",
                rated: "PG-13",
                img: {
                    src: taken, 
                    alt: "Taken Cover"
                }
            }
            
        ]
    },
    {
        id: 2,
        genre: "Comedy",
        movies: [
            {   
                id: 201,
                title: "The Proposal", 
                year: 2009,
                genre: "Comedy",
                movieLink: "https://www.youtube.com/watch?v=-00OeO-t3Y0",
                rated: "PG-13",
                img: {
                    src: theproposal, 
                    alt: "The Proposal Cover"
                }
            },
            {   
                id: 202,
                title: "Think Like A Man", 
                year: 2012,
                genre: "Comedy",
                movieLink: "https://www.youtube.com/watch?v=w32-K-eyOns",
                rated: "PG-13",
                img: {
                    src: thinklikeaman,
                    alt: "Think Like A Man Cover"
                }
            }
        ]
    },
    {
        id: 3,
        genre: "Thriller",
        movies: [
            {   
                id: 301,
                title: "Happy Death Day", 
                year: 2017,
                genre: "Thriller",
                movieLink: "https://www.youtube.com/watch?v=ouoWIPMs9ZM",
                rated: "PG-13",
                img: {
                    src: happydeathday, 
                    alt: "Happy Death Day Cover"
                }
            }
            
        ]
    }
    
]