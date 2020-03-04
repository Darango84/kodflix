import React from 'react';
import inceptionCover from './inceptionCover.jpg';
import backToTheFuture from './backToTheFuture.jpg';
import wolf from './wolf.jpg';
import avengers from './avengers.jpg';
import pacificRim from './pacificRim.jpeg';
import americanPsycho from './americanPsycho.jpg';
import './App.css';
import Film from './Film';


function App() {
  return (
    <div>
    <div>
      <h1>Kodflix</h1>
    </div>

<div className="filmContainer">

    <Film image={inceptionCover}
          altMessage="This is the cover for the Inception film"
          title="Inception, 2010" 
          rating="★★★★★"
    />

    <Film image={backToTheFuture}
          altMessage="This is the cover for the Back To The Future film"
          title="Back to the Future, 1985"
          rating="★★★★☆"
    />
 
    <Film image={wolf}
          altMessage="This is the cover for Wolf of Wall Street film"
          title="Wolf of Wall Street, 2013"
          rating="★★★★★"
    />
</div>

<div className="filmContainer">
    <Film image={avengers}
          altMessage="This is the cover for the Avengers Infinity War film"
          title="Avengers Infinity War Street, 2019"
          rating="★★★★★"
    />

    <Film image={pacificRim}
          altMessage="This is the cover for the Pacific Rim film"
          title="Pacific Rim, 2017"
          rating="★★★★☆"
    />

    <Film image={americanPsycho}
          altMessage="This is the cover for the American Psychofilm"
          title="American Psycho, 2000"
          rating="★★★★★"
    />
</div>

    <br/>>
  <div>
    <p className="footer">An app by Dan Arango ™</p>
  </div>
    
</div>
  );
}

export default App;


