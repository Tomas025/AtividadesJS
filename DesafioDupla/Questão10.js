function ranking(array) {
    let tabela = array
    let classificação = []

    classificação.push({Time: tabela[0].Time1})

    console.log(classificação)
}

console.log(ranking([
    {Time1: "Costa Rica", P1: 0, Time2: "Sérvia",     P2: 1},
    {Time1: "Brasil",     P1: 1, Time2: "Suíça",      P2: 1},
    {Time1: "Brasil",     P1: 2, Time2: "Costa Rica", P2: 0},
    {Time1: "Sérvia",     P1: 1, Time2: "Suíça",      P2: 2},
    {Time1: "Sérvia",     P1: 0, Time2: "Brasil",     P2: 2},
    {Time1: "Suíça",      P1: 2, Time2: "Costa Rica", P2: 2},
]))