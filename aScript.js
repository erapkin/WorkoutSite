"use sctrict";

var caloriesBurned = 0;

function addCaloriesBurned(burned) {
    caloriesBurned += burned;
}

function calculateCaloriesBurned(letter, weight, duration) {

    var burned = (activity[letter].mets * 3.5 * (weight * .453592) / 200) * (duration/60);
    addCaloriesBurned(burned);
    return burned;
}

function draw() {
    clearBody();
    var letterList = document.getElementById("userName").value.toLowerCase().split(" ").join('').split('');
    var weight = document.getElementById("userWeight").value;

    for (var i = 0; i < letterList.length; i++) {
        drawRow(letterList[i], weight);
    }

    document.getElementById('total').innerHTML = caloriesBurned.toFixed(2);
}

function clearBody() {
    document.getElementById("tbody").innerHTML = '';
    caloriesBurned = 0;
}

function drawRow(letter, weight) {
    var tbody = document.getElementById("tbody");
    var row = document.createElement('tr');
    row.insertCell(0).innerHTML = letter;
    row.insertCell(1).innerHTML = activity[letter].exercise;
    row.insertCell(2).innerHTML = activity[letter].mets;
    row.insertCell(3).innerHTML = activity[letter].duration;
    row.insertCell(4).innerHTML = calculateCaloriesBurned(letter, weight, activity[letter].duration).toFixed(2);
    tbody.appendChild(row);
}

var activity = {
    'a': {
        'exercise': 'Jumping Jacks',
            'mets': 8.0,
        'duration': 50
    },
    'b': {
        'exercise': 'Crunches',
            'mets': 4.0,
        'duration': 20
    },
    'c': {
        'exercise': 'Squats',
            'mets': 6.0,
        'duration': 15
    },
    'd': {
        'exercise': 'Pushups',
            'mets': 4.0,
        'duration': 15
    },
    'e': {
        'exercise': 'Wallsit',
            'mets': 2.0,
        'duration': 60
    },
    'f': {
        'exercise': 'Burpees',
            'mets': 8.0,
        'duration': 10
    },
    'g': {
        'exercise': 'Arm circles',
            'mets': 3.0,
        'duration': 20
    },
    'h': {
        'exercise': 'Squats',
            'mets': 6.0,
        'duration': 20
    },
    'i': {
        'exercise': 'Jumping Jacks',
            'mets': 8.0,
        'duration': 30
    },
    'j': {
        'exercise': 'Crunches',
            'mets': 4.0,
        'duration': 15
    },
    'k': {
        'exercise': 'Pushups',
            'mets': 4.0,
        'duration': 15
    },
    'l': {
        'exercise': 'Wallsit',
            'mets': 2.0,
        'duration': 120
    },
    'm': {
        'exercise': 'Burpees',
            'mets': 8.0,
        'duration': 20
    },
    'n': {
        'exercise': 'Burpees',
            'mets': 8.0,
        'duration': 15
    },
    'o': {
        'exercise': 'Jumping Jacks',
            'mets': 8.0,
        'duration': 40
    },    
    'p': {
        'exercise': 'Arm Circles',
            'mets': 3.0,
        'duration': 15
    },
    'q': {
        'exercise': 'Crunches',
            'mets': 4.0,
        'duration': 30
    },
    'r': {
        'exercise': 'Pushups',
            'mets': 4.0,
        'duration': 15
    },
    's': {
        'exercise': 'Burpees',
            'mets': 8.0,
        'duration': 30
    },
    't': {
        'exercise': 'Squats',
            'mets': 6.0,
        'duration': 15
    },
    'u': {
        'exercise': 'Arm Circles',
            'mets': 3.0,
        'duration': 30
    },
    'v': {
        'exercise': 'Wallsit',
            'mets': 2.0,
        'duration': 180
    },
    'w': {
        'exercise': 'Burpees',
            'mets': 8.0,
        'duration': 20
    },
    'x': {
        'exercise': 'Jumping Jacks',
            'mets': 8.0,
        'duration': 60
    },
    'y': {
        'exercise': 'Crunches',
            'mets': 4.0,
        'duration': 10
    },
    'z': {
        'exercise': 'Pushups',
            'mets': 4.0,
        'duration': 20
    },    
};


