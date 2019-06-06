const queuesSample =
    {
        queues: [{
            title: "Informatyka",
            people: [
                {id: 111222, time: "2min", issue: "Przedłużenie legitymacji"},
                {id: 112232, time: "5min", issue: "Złożenie wniosku"},
                {id: 113242, time: "10min", issue: "Przedłużenie legitymacji"},
                {id: 114252, time: "13min", issue: "Inna sprawa"}
            ]
        }, {
            title: "Automatyka i Robotyka",
            people: [
                {id: 211222, time: "4min"},
                {id: 212223, time: "7min"},
                {id: 212223, time: "12min"}
            ]
        }, {
            title: "Elektrotechnika",
            people: [
                {id: 311222, time: "2min", issue: "Przedłużenie legitymacji"},
                {id: 322223, time: "4min", issue: "Przedłużenie legitymacji"},
                {id: 323224, time: "6min", issue: "Przedłużenie legitymacji"},
                {id: 324225, time: "8min", issue: "Przedłużenie legitymacji"},
                {id: 325226, time: "10min", issue: "Przedłużenie legitymacji"},
                {id: 326227, time: "12min", issue: "Przedłużenie legitymacji"}
            ]
        }
        ]
    };

const issuesTypes =
    {
        issues: [
            {id: 1, name: "Przedłużenie legitymacji"},
            {id: 2, name: "Złożenie wniosku"},
            {id: 3, name: "Przedłużenie legitymacji"},
            {id: 4, name: "Wniosek praca dyplomowa"},
            {id: 5, name: "Złożenie skargi"},
            {id: 6, name: "Inna sprawa"}
        ]
    };

const loginMock = 228123;

export {queuesSample, issuesTypes, loginMock};