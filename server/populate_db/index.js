function getRandomValueFromArray(array) {
    if (array.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}


function makeCall() {
    const axios = require('axios');
    let data = JSON.stringify({
        "emmitter_id": getRandomValueFromArray(["1", "2", "3", "4", "5", "6"]),
        "type": getRandomValueFromArray(["view", "edit", "delete", "docmerge", "docmerge-pdf", "click"]),
        "module": getRandomValueFromArray(["Accounts", "Contacts", "Opportunities", "DocMerge", "Calls", "Meetings"]),
        "record_name": getRandomValueFromArray(["Smallville Resources Inc", "TJ O'Rourke Inc", "Sea Region Inc", "P Piper & Sons", "5D Investments", "Kaos Trading Ltd", "Complete Holding", "B.H. Edwards Inc", "Southern Realty", "360 Vacations", "International Art Inc", "Green Tractor Group Limited", "RRR Advertising Inc.", "Pullman Cart Company", "Powder Suppliers", "XY&Z Funding Inc", "Insight Marketing Inc", "Jungle Systems Inc", "Chandler Logistics Inc", "Sandeon Consolidation Corp", "Ink Conglomerate Inc", "Union Bank", "Arts & Crafts Inc", "Overhead & Underfoot Ltd.", "Rubble Group Inc", "MTM Investment Bank F S B", "Cloud Cover Trust", "SuperG Tech", "NW Capital Corp", "Powell Funding", "Calm Sailing Inc", "Draft Diversified Energy Inc", "OTC Holdings", "Start Over Trust", "EEE Endowments LTD", "Spindle Broadcast Corp.", "Gifted Holdings AG", "Davenport Investing", "Q.R.&E. Corp", "Grow-Fast Inc", "Tracker Com LP", "Rhyme & Reason Inc", "RR. Talker Co", "Income Free Investing LP", "Cumberland Trails Inc", "Coolview Net Ltd", "Constrata Trust LLC", "Max Holdings Ltd", "JAB Funds Ltd.", "S Cane Sweeteners Ltd", "qeqeqw"]),
        "record_id": getRandomValueFromArray(["12c6af48-119c-11ee-ad39-0242ac140007", "1354a078-119c-11ee-948c-0242ac140007", "13cd25de-119c-11ee-a8b0-0242ac140007", "14524070-119c-11ee-9374-0242ac140007", "14d3bc0e-119c-11ee-99e3-0242ac140007", "1554e1da-119c-11ee-a46d-0242ac140007", "15db6110-119c-11ee-9ba1-0242ac140007", "165f58c6-119c-11ee-8aa0-0242ac140007", "16e10cd6-119c-11ee-a3ee-0242ac140007", "1768268a-119c-11ee-bdef-0242ac140007", "17d135a8-119c-11ee-a9bb-0242ac140007", "184dfd22-119c-11ee-aa41-0242ac140007", "18ce6944-119c-11ee-a519-0242ac140007", "194ffc84-119c-11ee-bcd6-0242ac140007", "19d2d564-119c-11ee-9c2c-0242ac140007", "1a5c4a56-119c-11ee-a869-0242ac140007", "1ae0e108-119c-11ee-bfac-0242ac140007", "1b58f454-119c-11ee-b970-0242ac140007", "1bd18658-119c-11ee-b2a2-0242ac140007", "1c51d4f2-119c-11ee-ad4a-0242ac140007", "1cd4c02e-119c-11ee-9c26-0242ac140007", "1d54aed8-119c-11ee-8c56-0242ac140007", "1dcfe86e-119c-11ee-a277-0242ac140007", "1e56c56e-119c-11ee-a7e5-0242ac140007", "1ed74266-119c-11ee-9467-0242ac140007", "1f60fe02-119c-11ee-bdfe-0242ac140007", "1fee2188-119c-11ee-8002-0242ac140007", "20678834-119c-11ee-9f4a-0242ac140007", "20e2dc32-119c-11ee-9266-0242ac140007", "2160e230-119c-11ee-900a-0242ac140007", "21def526-119c-11ee-a5a6-0242ac140007", "2261e6e8-119c-11ee-82f0-0242ac140007", "22db046a-119c-11ee-a546-0242ac140007", "234d0ae2-119c-11ee-8a2e-0242ac140007", "23bc1e5a-119c-11ee-bd5e-0242ac140007", "243f77dc-119c-11ee-a72d-0242ac140007", "24c3e83c-119c-11ee-8480-0242ac140007", "254b27c0-119c-11ee-b45e-0242ac140007", "25ce9240-119c-11ee-a5a5-0242ac140007", "2649163c-119c-11ee-9040-0242ac140007", "26be896c-119c-11ee-af0c-0242ac140007", "27418862-119c-11ee-b95f-0242ac140007", "27c02712-119c-11ee-8482-0242ac140007", "28421128-119c-11ee-ac02-0242ac140007", "28c7875e-119c-11ee-8410-0242ac140007", "294c282e-119c-11ee-b428-0242ac140007", "29d2a9a8-119c-11ee-851c-0242ac140007", "2a560672-119c-11ee-ada7-0242ac140007", "2accc4f6-119c-11ee-969d-0242ac140007", "2b4c7228-119c-11ee-a63f-0242ac140007", "d02ffaf6-168f-11ee-9d0e-0242ac140007"]),
        "user_id": getRandomValueFromArray(["seed_sally_id", "seed_chris_id", "seed_sarah_id", "seed_max_id", "seed_will_id"]),
        "user_name": getRandomValueFromArray(["Sally Bronsen", "Chris Olliver", "Sarah Smith", "Max Jensen", "Will Westin", "Administrator"]),
        "message": "test message",
        "time_spent": getRandomValueFromArray([1000, 2000, 3000, 1500])
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/events',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });

}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async function loop() {
    for (let i = 1; i <= 100000; i++) {
        // Code to execute in each iteration
        console.log(`Iteration ${i}`);
        makeCall();
        // Delay for 1 second
        await delay(20);
      }
})()