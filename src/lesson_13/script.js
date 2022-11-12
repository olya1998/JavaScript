const input = document.querySelector('#start_seconds');
const btnTimeout = document.querySelector('#start_timeout');

const userSeconds = () => {
    alert('The End!'); 
};

btnTimeout.addEventListener('click', function() { 
    const timer = setTimeout(userSeconds, input.value * 1000);
    input.value = '';
});

const date1 = new Date("7/11/2010");
const date2 = new Date("12/12/2010");

function calculateDiff(inputDate) {
    const Minute = 1000 * 60;
    const Hour = Minute * 60;
    const Day = Hour * 24;
    const Month = Day * 30; 
    const Year = Day * 365;

    const now = new Date();
    let timeDiff = Math.abs(inputDate.getTime() - now.getTime());

    const diffYears = Math.trunc(timeDiff / Year);
    if(diffYears) {
        timeDiff -= diffYears * Year;
    }

    const diffMonths = Math.trunc(timeDiff / Month);
    if(diffMonths) {
        timeDiff -= diffMonths * Month;
    }

    const diffDays = Math.trunc(timeDiff / Day);
    if(diffDays) {
        timeDiff -= diffDays * Day;
    }

    const diffHours = Math.trunc(timeDiff / Hour);
    if(diffHours) {
        timeDiff -= diffHours * Hour;
    }

    const diffMinutes = Math.trunc(timeDiff / Minute);
    if(diffMinutes) {
        timeDiff -= diffMinutes * Minute;
    }

    const diffSeconds = Math.trunc(timeDiff / 1000);

    return `До старту кампанії залишилось рокiв: ${diffYears}, мiсяцiв: ${diffMonths}, 
    днiв: ${diffDays}, годин: ${diffHours}, хвилин: ${diffMinutes}, секунд: ${diffSeconds}`;

}

const btnCampaign = document.querySelector("#start_campaign");
btnCampaign.addEventListener('click', function() {
    let inputDate = document.querySelector('#start_date').value;

    const deadlineTimer = document.getElementById('deadlineTimer');

    inputDate = new Date(inputDate);

    deadlineTimer.innerHTML = calculateDiff(inputDate);

    const deadline = setInterval(function() {

        deadlineTimer.innerHTML = calculateDiff(inputDate);

    }, 1000);  
});

const phones = {
    iPhone: {
        ram: [
            {
                volume: 2,
                price: 100
            },
            {
                volume: 4,
                price: 120
            },
            {
                volume: 6,
                price: 140
            },
            {
                volume: 8,
                price: 160
            }],
        ssd: [
            {
                volume: 64,
                price: 110
            },
            {
                volume: 128,
                price: 130
            },
            {
                volume: 256,
                price: 150
            },
            {
                volume: 512,
                price: 170
            }]
    },
    Samsung: {
        ram: [
            {
                volume: 2,
                price: 90
            },
            {
                volume: 4,
                price: 95
            },
            {
                volume: 6,
                price: 100
            },
            {
                volume: 8,
                price: 115
            }],
        ssd: [
            {
                volume: 64,
                price: 80
            },
            {
                volume: 128,
                price: 115
            },
            {
                volume: 256,
                price: 140
            },
            {
                volume: 512,
                price: 170
            },
        ]
    },
    Pixel: {
        ram: [
            {
                volume: 2,
                price: 92
            },
            {
                volume: 4,
                price: 95
            },
            {
                volume: 6,
                price: 102
            },
            {
                volume: 8,
                price: 125
            }],
        ssd: [
            {
                volume: 64,
                price: 87
            },
            {
                volume: 128,
                price: 111
            },
            {
                volume: 256,
                price: 144
            },
            {
                volume: 512,
                price: 174
            },
        ]
    },
    OnePlus: {
        ram: [
            {
                volume: 2,
                price: 66
            },
            {
                volume: 4,
                price: 77
            },
            {
                volume: 6,
                price: 88
            },
            {
                volume: 8,
                price: 99
            }],
        ssd: [
            {
                volume: 64,
                price: 67
            },
            {
                volume: 128,
                price: 76
            },
            {
                volume: 256,
                price: 89
            },
            {
                volume: 512,
                price: 133
            },
        ]
    }
};

const calculateSum = document.getElementById("calculateSum");
calculateSum.addEventListener('click', function() {
    const brand = document.getElementById("brand").value;
    const ram = +document.getElementById("ram").value;
    const ssd = +document.getElementById("ssd").value;

    let ramPrice, ssdPrice;

    phones[brand]['ram'].forEach(function (element) {
        if(element['volume'] === ram) {
            ramPrice = element['price'];
        }
    });

    phones[brand]['ssd'].forEach(function (element) {
        if(element['volume'] === ssd) {
            ssdPrice = element['price'];
        }
    });

    const totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML = `Total Price: ${ramPrice + ssdPrice} USD`
});
