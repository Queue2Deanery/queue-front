const queuesSample =
    {
        queues: [{
            title: "Informatyka I st stacjonarne",
            people: [
                {id: 279658, time: "2min", issue: "Przedłużenie legitymacji studenckiej"},
                {id: 246854, time: "5min", issue: "Złożenie wniosku"},
                {id: 250846, time: "7min", issue: "Korekta danych studenta"},
                {id: 246193, time: "11min", issue: "Konsultacja regulaminu studiów"},
                {id: 279620, time: "13min", issue: "Inna sprawa"}
            ]
        }, {
            title: "Automatyka i Robotyka I st stacjonarne",
            people: [
                {id: 269753, time: "4min"},
                {id: 241598, time: "7min"},
                {id: 267593, time: "12min"}
            ]
        }, {
            title: "Elektrotechnika I st stacjonarne",
            people: [
                {id: 349856, time: "2min", issue: ""},
                {id: 354968, time: "4min", issue: ""},
                {id: 316853, time: "6min", issue: ""},
                {id: 369635, time: "8min", issue: ""},
                {id: 347581, time: "10min", issue: ""},
                {id: 326227, time: "12min", issue: ""}
            ]
        }, {
            title: "Stacjonarne II st",
            people: [
                {id: 275986, time: "4min", issue: ""},
                {id: 246853, time: "7min", issue: ""},
                {id: 289643, time: "12min", issue: ""},
                {id: 249863, time: "16min", issue: ""},
                {id: 214697, time: "17min", issue: ""},
                {id: 268596, time: "20min", issue: ""}
            ]
        }, {
            title: "Niestacjonarne I i II st ",
            people: [
                {id: 311222, time: "1min", issue: ""},
                {id: 322223, time: "3min", issue: ""},
                {id: 323224, time: "6min", issue: ""},
                {id: 324225, time: "8min", issue: ""},
            ]
        }, {
            title: "Studia doktoranckie",
            people: [
                {id: 137985, time: "3min", issue: ""},
                {id: 129621, time: "7min", issue: ""},
                {id: 179653, time: "10min", issue: ""},
            ]
        }
        ]
    };

const queuesInf =
    {
        queues: [queuesSample.queues[0]]
    };

const queuesInfWait =
    {
        queues: [{
            title: "Informatyka I st stacjonarne",
            people: [
                {id: 279658, time: "2min", issue: "Przedłużenie legitymacji studenckiej"},
                {id: 246854, time: "5min", issue: "Złożenie wniosku"},
                {id: 250846, time: "7min", issue: "Korekta danych studenta"},
                {id: 246193, time: "11min", issue: "Konsultacja regulaminu studiów"},
                {id: 279620, time: "13min", issue: "Inna sprawa"},
                {id: 228123, time: "15min", issue: "Przedłużenie legitymacji studenckiej"}
            ]
        }]
    };

const deanSelect =
    {
        queues: [queuesSample.queues[0], queuesSample.queues[5]]
    };

const issuesTypes =
    {
        issues: [
            {id: 1, name: "Przedłużenie legitymacji studenckiej"},
            {id: 2, name: "Złożenie wniosku"},
            {id: 3, name: "Konsultacja regulaminu studiów"},
            {id: 4, name: "Korekta danych studenta"},
            {id: 5, name: "Wniosek praca dyplomowa"},
            {id: 6, name: "Złożenie skargi"},
            {id: 7, name: "Inna sprawa"}
        ]
    };

const loginStudMock = 228123;
const loginDeanMock = 111132;


export {queuesSample, queuesInf, queuesInfWait, issuesTypes, loginStudMock, loginDeanMock, deanSelect};