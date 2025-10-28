// Pick your favorite sport and define an interface that describes the
// shape of an event. 
// So, for football, you might have an IMatch interface containing
// - Home Team
// - Away Team
// - Date
// - Home Goals
// - Away Goals
// • Create an array containing a number of these events and display them using a for loop.
// • Convert your interface to a type alias and re-run your code.
// • Note that interfaces and type alias can both be used here.
interface IMatch {
    homeTeam: string;
    awayTeam: string;
    date: string; // could use Date type, but string is simpler for this example
    homeGoals: number;
    awayGoals: number;
}
const footballMatches: IMatch[] = [
    {
        homeTeam: "Team A",
        awayTeam: "Team B",
        date: "2024-10-01",
        homeGoals: 2,
        awayGoals: 1,
    },
    {
        homeTeam: "Team C",
        awayTeam: "Team D",
        date: "2024-10-02",
        homeGoals: 0,
        awayGoals: 0,
    },
];
for (const match of footballMatches) {
    console.log(
        `${match.date}: ${match.homeTeam} ${match.homeGoals} - ${match.awayGoals} ${match.awayTeam}`
    );
}
// Now using a type alias
type SportEventType = {
    homeTeam: string;
    awayTeam: string;
    date: string; // could use Date type, but string is simpler for this example
    homeGoals: number;
    awayGoals: number;
};
const basketballGames: SportEventType[] = [
    {
        homeTeam: "Team E",
        awayTeam: "Team F",
        date: "2024-10-03",
        homeGoals: 102,
        awayGoals: 98,
    },
    {
        homeTeam: "Team G",
        awayTeam: "Team H",
        date: "2024-10-04",
        homeGoals: 110,
        awayGoals: 115,
    },
];
for (const game of basketballGames) {
    console.log(
        `${game.date}: ${game.homeTeam} ${game.homeGoals} - ${game.awayGoals} ${game.awayTeam}`
    );
}      
// Both implementations work similarly, demonstrating that interfaces and type aliases can be used interchangeably in this context.