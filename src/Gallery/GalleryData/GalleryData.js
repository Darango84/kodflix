
import inceptionCover from '../FilmCovers/inceptionCover.jpg';
import backToTheFuture from '../FilmCovers/backToTheFuture.jpg';
import wolf from '../FilmCovers/wolf.jpg';
import avengers from '../FilmCovers/avengers.jpg';
import pacificRim from '../FilmCovers/pacificRim.jpeg';
import americanPsycho from '../FilmCovers/americanPsycho.jpg';



export default function getFilmData() {
    return  [    
        {    
        image: inceptionCover,
        altMessage:"This is the cover for the Inception film",
        title:"Inception, 2010",
        rating:"★★★★★",
        id:"inception",
        },
        {  
        image: backToTheFuture,
        altMessage:"This is the cover for the Back To The Future film",
        title:"Back to the Future, 1985",
        rating:"★★★★☆",
        id:"BackToTheFuture",
        },
        {  
        image: wolf,
        altMessage:"This is the cover for Wolf of Wall Street film",
        title:"Wolf of Wall Street, 2013",
        rating:"★★★★★",
        id:"WolfOfWallStreet",
        },
        {  
        image: avengers,
        altMessage:"This is the cover for the Avengers Infinity War film",
        title:"Avengers Infinity War Street, 2019",
        rating:"★★★★★",
        id:"Avengers",
        },
        {  
        image: pacificRim,
        altMessage:"This is the cover for the Pacific Rim film",
        title:"Pacific Rim, 2017",
        rating:"★★★★☆",
        id:"PacificRim",
        },
        {  
        image: americanPsycho,
        altMessage:"This is the cover for the American Psychofilm",
        title:"American Psycho, 2000",
        rating:"★★★★★",
        id:"AmericanPsycho",
        }
    ];
 }
