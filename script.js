let jokes =["Q:Why does a burger have less energy than a steak? A: Because it's in its ground state", 

"How many general-relativity theorists does it take to change a light bulb. Two. One to hold the bulb and one to rotate space", 

"Q: Why can you not trust an atom? A: They make up everything.", 

"Q: Why can you not take electricity to social outings? A: Because it does not know how to conduct itself.", 

"A neutron walks into a bar and asks, “How much for a whiskey?” The bartender smiles and says, “For you, no charge.” ", 

"I have a new theory on inertia, but it doesn’t seem to be gaining momentum."




]


        function newJoke() {
            let randomNumber = Math.floor(Math.random() * (jokes.length));
             
            document.getElementById('jokesDisplay').innerHTML = jokes[randomNumber];
        }
       

    