// fetch ile yazilis

// let box = document.getElementById('box')
// function dataFetch() {
//   fetch('https://api.tvmaze.com/shows')
//   .then(res => res.json())
//   .then(data => {
//       data.forEach(element => {
//         box.innerHTML+= `
//             <div class="card_box">
//             <img src="${element.image.medium}" alt="">
//             <div class="card_text">
//                 <p class="name">${element.name}</p>
//                 <p class="language">${element.language}</p>
//                 <p class="imdb">${element.rating.average}</p>
//             </div>
//             </div>
//             `;
//       });
//     });
// }
// dataFetch();


// ---------------------------------------------------------------

// axios ile yazilis

async function dataAxios() {
    const myData = await axios ('https://api.tvmaze.com/shows')
    await myData.data.forEach(element => {
        box.innerHTML+= `
                    <div class="card_box">
                    <img src="${element.image.medium}" alt="">
                    <div class="card_text">
                        <p class="name">${element.name}</p>
                        <p class="language">${element.language}</p>
                        <p class="imdb">${element.rating.average}</p>
                    </div>
                    </div>
                    `;
              });
    };
    dataAxios();