
import inceptionCover from '../FilmCovers/inceptionCover.jpg';
import backToTheFuture from '../FilmCovers/backToTheFuture.jpg';
import wolf from '../FilmCovers/wolf.jpg';
import avengers from '../FilmCovers/avengers.png';
import pacificRim from '../FilmCovers/pacificRim.jpeg';
import americanPsycho from '../FilmCovers/americanPsycho.jpg';

//This function holds the actual data for all the films we have currently

export default function getFilmData() {
    return  [    
        {    
        image: inceptionCover,
        altMessage: "This is the cover for the Inception film",
        title: "Inception, 2010",
        rating: "★★★★★",
        id: "inception",
        synopsys: "Inception is a 2010 psychological science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.",
        },
        {  
        image: backToTheFuture,
        altMessage: "This is the cover for the Back To The Future film",
        title: "Back to the Future, 1985",
        rating: "★★★★☆",
        id: "BackToTheFuture",
        synopsys: "Back to the Future is a 1985 American science fiction film directed by Robert Zemeckis and written by Zemeckis and Bob Gale. It stars Michael J. Fox as teenager Marty McFly, who accidentally travels back in time from 1985 to 1955, where he meets his future parents and becomes his mother's romantic interest.",
        },
        {  
        image: wolf,
        altMessage: "This is the cover for Wolf of Wall Street film",
        title: "Wolf of Wall Street, 2013",
        rating: "★★★★★",
        id: "WolfOfWallStreet",
        synopsys: "The Wolf of Wall Street is a 2013 American biographical black comedy crime film directed by Martin Scorsese and written by Terence Winter, based on the memoir of the same name by Jordan Belfort.",
        },
        {  
        image: avengers,
        altMessage: "This is the cover for the Avengers Infinity War film",
        title: "Avengers Infinity War, 2018",
        rating: "★★★★★",
        id: "Avengers",
        synopsys: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.",
        },
        {  
        image: pacificRim,
        altMessage: "This is the cover for the Pacific Rim film",
        title: "Pacific Rim, 2013",
        rating: "★★★★☆",
        id: "PacificRim",
        synopsys: "Pacific Rim is a 2013 American science-fiction monster film directed by Guillermo del Toro and starring Charlie Hunnam, Idris Elba, Rinko Kikuchi, Charlie Day, Robert Kazinsky, Max Martini and Ron Perlman. The screenplay was written by Travis Beacham and del Toro from a story by Beacham.",
        },
        {  
        image: americanPsycho,
        altMessage: "This is the cover for the American Psychofilm",
        title: "American Psycho, 2000",
        rating: "★★★★★",
        id: "AmericanPsycho",
        synopsys: "American Psycho is a 2000 satirical psychological horror film co-written and directed by Mary Harron, based on Bret Easton Ellis's 1991 novel of the same name." ,
        }
    ];
 }
