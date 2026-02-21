// ==========================================
// 1. MOVIE DATA (DATABASE) - With Trailers
// ==========================================
const moviesDB = {
    "Trending": [
        { id: 1, title: "Stranger Things", img: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.", match: "98% Match", trailer: "sBEvEcpnG7k" },
        { id: 2, title: "Money Heist", img: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", desc: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.", match: "97% Match", trailer: "_InqQJRqGW4" },
        { id: 3, title: "Squid Game", img: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", desc: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.", match: "95% Match", trailer: "oqxAJKy0ii4" },
        { id: 4, title: "Wednesday", img: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", desc: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.", match: "99% Match", trailer: "Di310WS8zLk" },
        { id: 5, title: "All of Us Are Dead", img: "all_of_us_are_dead.jpg", desc: "A high school becomes ground zero for a zombie virus outbreak. Trapped students must fight their way out — or turn into one of the rabid infected.", match: "94% Match", trailer: "IN5TD4VRcSM" },
        { id: 6, title: "The Witcher", img: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg", desc: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.", match: "96% Match", trailer: "ndl1W4ltcmg" }
    ],
    "Action": [
        { id: 7, title: "John Wick", img: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg", desc: "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.", match: "97% Match", trailer: "C0BMx-qxsP4" },
        { id: 8, title: "Mad Max: Fury Road", img: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg", desc: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.", match: "95% Match", trailer: "hEJnMQG9ev8" },
        { id: 9, title: "Avengers: Endgame", img: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", desc: "After the devastating events of Avengers: Infinity War, the universe is in ruins.", match: "98% Match", trailer: "TcMBFSGVi1c" },
        { id: 10, title: "The Dark Knight", img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.", match: "99% Match", trailer: "EXeTwQWrcwY" },
        { id: 11, title: "Inception", img: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", match: "96% Match", trailer: "YoHD9XEInc0" },
        { id: 12, title: "Gladiator", img: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg", desc: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.", match: "94% Match", trailer: "owK1qxDselE" }
    ],
    "Comedy": [
        { id: 13, title: "The Hangover", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvIhiysDtRGQ2hLQ060XlkhyXb44vdQfA7sA&s", desc: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.", match: "93% Match", trailer: "vhQVZpj7qCI" },
        { id: 14, title: "Superbad", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSggvPnEXE_DDHKcU6HKTbr-hC61kNt1xO7uw&s", desc: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.", match: "92% Match", trailer: "4eaZ_48ZYog" },
        { id: 15, title: "Deadpool", img: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg", desc: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.", match: "95% Match", trailer: "Xithigfg7dA" },
        { id: 16, title: "The Grand Budapest Hotel", img: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg", desc: "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars.", match: "91% Match", trailer: "1Fg5iWmQjwk" },
        { id: 17, title: "Booksmart", img: "https://upload.wikimedia.org/wikipedia/en/0/09/Booksmart_%282019_film_poster%29.png", desc: "Two academic teenage superstars realize, on the eve of their high school graduation, that they should have worked less and played more.", match: "90% Match", trailer: "yZIY2M4V5W8" },
        { id: 18, title: "Palm Springs", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQ3xBFm3Tg348lFt2VLcYvBTRRkDg_8YPOQ&s", desc: "Stuck in a time loop, two wedding guests develop a budding romance while living the same day over and over again.", match: "89% Match", trailer: "Hjmo9qRC2HI" }
    ],
    "Horror": [
        { id: 19, title: "The Conjuring", img: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg", desc: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.", match: "94% Match", trailer: "k10ETZ41q5o" },
        { id: 20, title: "Hereditary", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPBOrB2ZMLAmC2UKCTf1hoqQnWBrqs-1mT-Q&s", desc: "A grieving family is haunted by tragic and disturbing occurrences.", match: "96% Match", trailer: "V6wWKNij_9M" },
        { id: 21, title: "Get Out", img: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg", desc: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.", match: "95% Match", trailer: "sRfnevzM9kQ" },
        { id: 22, title: "It", img: "https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_.jpg", desc: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.", match: "93% Match", trailer: "FnCdOQsX5kc" },
        { id: 23, title: "The Shining", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSMHHImeVsjHFEGSkkdKhouabR0XrxRUqjQ&s", desc: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.", match: "97% Match", trailer: "5Cb3ik6zP2I" },
        { id: 24, title: "A Quiet Place", img: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg", desc: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.", match: "92% Match", trailer: "WR7cc5t7tv8" }
    ],
    "Drama": [
        { id: 25, title: "The Shawshank Redemption", img: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", match: "99% Match", trailer: "6hB3S9bIaco" },
        { id: 26, title: "Forrest Gump", img: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", desc: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.", match: "98% Match", trailer: "bLvqoHBptjg" },
        { id: 27, title: "The Godfather", img: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", desc: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", match: "97% Match", trailer: "sY1S34973zA" },
        { id: 28, title: "Pulp Fiction", img: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", match: "96% Match", trailer: "s7EdQ4FqbhY" },
        { id: 29, title: "Fight Club", img: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg", desc: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.", match: "95% Match", trailer: "qtRKdVHc-cE" },
        { id: 30, title: "Schindler's List", img: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg", desc: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.", match: "94% Match", trailer: "mxphAlJID9U" }
    ],
    "Sci-Fi": [
        { id: 31, title: "Interstellar", img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", match: "97% Match", trailer: "zSWdZVtXT7E" },
        { id: 32, title: "Blade Runner 2049", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlbNtH-VUeLeM-M7bcZZAm2P3CBd1d3sXIA&s", desc: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for 30 years.", match: "96% Match", trailer: "gCcx85zbxz4" },
        { id: 33, title: "The Matrix", img: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", desc: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", match: "98% Match", trailer: "vKQi3bBA1y8" },
        { id: 34, title: "Arrival", img: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg", desc: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft land around the world.", match: "95% Match", trailer: "tFMo3UJ4BPA" },
        { id: 35, title: "Dune", img: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", desc: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.", match: "94% Match", trailer: "n9xhJrPXop4" },
        { id: 36, title: "Ex Machina", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5bm_3aqZmAvFYsLOdxO6MNtUKM23W3B6nnw&s", desc: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.", match: "93% Match", trailer: "XYGzRB4Pnq8" }
    ],
    "Romance": [
        { id: 37, title: "La La Land", img: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", desc: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.", match: "96% Match", trailer: "0pdqf4P9MB8" },
        { id: 38, title: "The Notebook", img: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg", desc: "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.", match: "95% Match", trailer: "yDJIcYE32NU" },
        { id: 39, title: "Titanic", img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", desc: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", match: "97% Match", trailer: "kVrqfYjkTdQ" },
        { id: 40, title: "Crazy Rich Asians", img: "https://image.tmdb.org/t/p/w500/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg", desc: "This film follows Celeste and her boyfriend Michael as they go to Singapore to attend his best friend's wedding.", match: "94% Match", trailer: "Zf4a4Vqh9WI" },
        { id: 41, title: "To All the Boys I've Loved Before", img: "https://image.tmdb.org/t/p/w500/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg", desc: "A teenage girl's secret love letters are exposed and wreak havoc on her love life.", match: "92% Match", trailer: "ohSfaY0O3Kg" },
        { id: 42, title: "Eternal Sunshine of the Spotless Mind", img: "https://all.web.img.acsta.net/img/45/9d/459d43f477d3e857d4c054b569da0b97.jpg", desc: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.", match: "93% Match", trailer: "07-QBnEkgXU" }
    ]
};

// ==========================================
// 2. CONTINUE AS GUEST LOGIC
// ==========================================
const guestBtn = document.getElementById('guestBtn');
const introContainer = document.getElementById('intro-container');
const videoPlayer = document.getElementById('netflix-video');

if (guestBtn) {
    guestBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        // System ko batate hain ki ye Guest user hai
        localStorage.setItem('userEmail', 'Guest');

        // Agar intro video ka code exist karta hai
        if (introContainer && videoPlayer) {
            introContainer.style.display = "flex"; // Video container dikhao
            
            videoPlayer.play().then(() => {
                // Video chalne ke baad 4 second wait karke next page pe bhejo
                setTimeout(() => {
                    window.location.href = 'movies.html';
                }, 4000);
            }).catch((error) => {
                // Agar browser ne autoplay block kiya toh mute karke chalao
                console.log("Video Error:", error);
                videoPlayer.muted = true;
                videoPlayer.play();
                setTimeout(() => {
                    window.location.href = 'movies.html';
                }, 4000);
            });
        } else {
            // Agar video nahi mili, toh direct movies page par jao
            window.location.href = 'movies.html';
        }
    });
}

// ==========================================
// 3. MOVIES GRID PAGE LOGIC (movies.html)
// ==========================================
const moviesGrid = document.getElementById('moviesGrid');
const welcomeMsg = document.getElementById('welcomeUser');
const searchInput = document.getElementById('searchInput');

if (moviesGrid) {
    // Navbar mein welcome guest dikhao
    if(welcomeMsg) welcomeMsg.innerText = "Welcome, Guest";

    // Function to render movies
    function renderMovies(filter = '') {
        let html = '';
        for (const category in moviesDB) {
            const movies = moviesDB[category].filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()));
            if (movies.length > 0) {
                html += `<h2 class="row-title">${category}</h2>
                <div class="movie-row">
                    ${movies.map(movie => `
                        <div class="grid-card" onclick="openMovie(${movie.id})">
                            <img src="${movie.img}" alt="${movie.title}">
                            <h3>${movie.title}</h3>
                        </div>
                    `).join('')}
                </div>`;
            }
        }
        moviesGrid.innerHTML = html;
    }

    // Initial render
    renderMovies();

    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            renderMovies(e.target.value);
        });
    }
}

// Jab movie par click karein to ID save karo
function openMovie(id) {
    localStorage.setItem('selectedMovieId', id);
    window.location.href = 'movie-info.html';
}

// ==========================================
// 4. MOVIE INFO & TRAILER PAGE (movie-info.html)
// ==========================================
const movieInfoContainer = document.getElementById('movieInfoContainer');

if (movieInfoContainer) {
    const movieId = localStorage.getItem('selectedMovieId');
    let movie = null;
    for (const category in moviesDB) {
        movie = moviesDB[category].find(m => m.id == movieId);
        if (movie) break;
    }

    if (movie) {
        movieInfoContainer.innerHTML = `
            <div class="trailer-container" style="position: relative; height: 100vh; width: 100%; overflow: hidden;">
                
                <iframe 
                    src="https://www.youtube.com/embed/${movie.trailer}?autoplay=1&mute=1&loop=1&playlist=${movie.trailer}&controls=0&showinfo=0&rel=0&modestbranding=1" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1; pointer-events: none;">
                </iframe>

                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 40%, transparent 100%); z-index: 2;"></div>

                <div class="movie-details" style="position: absolute; top: 20%; left: 5%; z-index: 3; max-width: 500px; text-shadow: 2px 2px 4px black;">
                    <h1 style="font-size: 60px; font-weight: 800; margin-bottom: 10px; line-height: 1.1;">${movie.title}</h1>
                    <p style="color: #46d369; font-weight: bold; font-size: 18px; margin-bottom: 20px;">${movie.match}</p>
                    <p style="font-size: 18px; line-height: 1.5; color: #e5e5e5; margin-bottom: 30px;">${movie.desc}</p>
                    
                    <div style="display: flex; gap: 15px;">
                        <button style="padding: 12px 30px; font-size: 18px; font-weight: bold; border-radius: 4px; cursor: pointer; border: none; background: white; color: black; display: flex; align-items: center; gap: 10px;">
                            ▶ Play
                        </button>
                        <button style="padding: 12px 30px; font-size: 18px; font-weight: bold; border-radius: 4px; cursor: pointer; border: none; background: rgba(109, 109, 110, 0.7); color: white; display: flex; align-items: center; gap: 10px;">
                            ℹ More Info
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else {
        movieInfoContainer.innerHTML = "<h1 style='text-align:center; padding-top:100px;'>Movie Not Found</h1>";
    }
}

// ==========================================
// 5. FAQ LOGIC (Original Code for Home Page)
// ==========================================
const questions = document.querySelectorAll('.faq-question');

if (questions.length > 0) {
    questions.forEach(question => {
        question.addEventListener('click', () => {
            // Baaki sab band karo
            questions.forEach(q => {
                if (q !== question) {
                    q.nextElementSibling.classList.remove('active');
                    q.querySelector('span').innerText = '+';
                }
            });

            // Current wala toggle karo
            const answer = question.nextElementSibling;
            answer.classList.toggle('active');
            
            // Icon change karo (+ / x)
            const span = question.querySelector('span');
            if (answer.classList.contains('active')) {
                span.innerText = '×';
            } else {
                span.innerText = '+';
            }
        });
    });
}