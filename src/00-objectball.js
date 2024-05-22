function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// Testing the gameObject function
console.log(gameObject());

function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
        for (let player in game[team].players) {
            if (player === playerName) {
                return game[team].players[player].points;
            }
        }
    }
    return null; // Return null if player is not found
}

// Testing numPointsScored
console.log(numPointsScored("Alan Anderson")); // Should log 22

function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
        for (let player in game[team].players) {
            if (player === playerName) {
                return game[team].players[player].shoe;
            }
        }
    }
    return null; // Return null if player is not found
}

// Testing shoeSize
console.log(shoeSize("Reggie Evans")); // Should log 14

function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return null; // Return null if team is not found
}

// Testing teamColors
console.log(teamColors("Brooklyn Nets")); // Should log ["Black", "White"]

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// Testing teamNames
console.log(teamNames()); // Should log ["Brooklyn Nets", "Charlotte Hornets"]

function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
        for (let player in game[team].players) {
            if (player === playerName) {
                return game[team].players[player];
            }
        }
    }
    return null; // Return null if player is not found
}

// Testing playerStats
console.log(playerStats("Alan Anderson")); // Should return stats object for Alan Anderson

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].shoe > largestShoeSize) {
                largestShoeSize = game[team].players[player].shoe;
                rebounds = game[team].players[player].rebounds;
            }
        }
    }
    return rebounds;
}

// Testing bigShoeRebounds
console.log(bigShoeRebounds()); // Should return rebounds of player with largest shoe size

function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let topScorer = '';

    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].points > mostPoints) {
                mostPoints = game[team].players[player].points;
                topScorer = player;
            }
        }
    }
    return topScorer;
}

// Testing mostPointsScored
console.log(mostPointsScored()); // Should return the name of the player with the most points

function winningTeam() {
    const game = gameObject();
    let homePoints = 0;
    let awayPoints = 0;

    for (let player in game.home.players) {
        homePoints += game.home.players[player].points;
    }

    for (let player in game.away.players) {
        awayPoints += game.away.players[player].points;
    }

    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// Testing winningTeam
console.log(winningTeam()); // Should return the name of the team with the most points

function playerWithLongestName() {
    const game = gameObject();
    let longestName = '';

    for (let team in game) {
        for (let player in game[team].players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}

// Testing playerWithLongestName
console.log(playerWithLongestName()); // Should return the name of the player with the longest name


function doesLongNameStealATon() {
    const longestNamePlayer = playerWithLongestName();
    const game = gameObject();
    let mostSteals = 0;

    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].steals > mostSteals) {
                mostSteals = game[team].players[player].steals;
            }
        }
    }

    // Check if the player with the longest name has the most steals
    return game.home.players[longestNamePlayer].steals === mostSteals ||
           game.away.players[longestNamePlayer].steals === mostSteals;
}

// Testing doesLongNameStealATon
console.log(doesLongNameStealATon()); // Should return true or false
