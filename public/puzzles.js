// NBA Connections Puzzle Data
// difficulty: 0=yellow(easy), 1=green(medium), 2=blue(hard), 3=purple(brutal)

const PUZZLES = [
  {
    date: "2026-04-30",
    categories: [
      {
        difficulty: 0,
        label: "Won NBA Finals MVP",
        players: ["LeBron James", "Kevin Durant", "Stephen Curry", "Kawhi Leonard"]
      },
      {
        difficulty: 1,
        label: "2023 NBA Draft Top 5 Picks",
        players: ["Victor Wembanyama", "Brandon Miller", "Scoot Henderson", "Amen Thompson"]
      },
      {
        difficulty: 2,
        label: "Played for the San Antonio Spurs",
        players: ["Tim Duncan", "Tony Parker", "Manu Ginobili", "Kawhi Leonard"]
      },
      {
        difficulty: 3,
        label: "Born in Africa",
        players: ["Joel Embiid", "Giannis Antetokounmpo", "Bismack Biyombo", "Luol Deng"]
      }
    ]
  },
  {
    date: "2026-05-01",
    categories: [
      {
        difficulty: 0,
        label: "Current Los Angeles Lakers",
        players: ["LeBron James", "Anthony Davis", "Austin Reaves", "D'Angelo Russell"]
      },
      {
        difficulty: 1,
        label: "NBA MVP Award Winners",
        players: ["Nikola Jokic", "Giannis Antetokounmpo", "Stephen Curry", "Derrick Rose"]
      },
      {
        difficulty: 2,
        label: "Played with both LeBron and Kobe",
        players: ["Pau Gasol", "Steve Nash", "Dwight Howard", "Chris Paul"]
      },
      {
        difficulty: 3,
        label: "Went undrafted",
        players: ["Isaiah Thomas", "Jose Calderon", "Devonte Graham", "Brad Miller"]
      }
    ]
  },
  {
    date: "2026-05-02",
    categories: [
      {
        difficulty: 0,
        label: "Boston Celtics Big 3 Era (2007-2012)",
        players: ["Paul Pierce", "Kevin Garnett", "Ray Allen", "Rajon Rondo"]
      },
      {
        difficulty: 1,
        label: "2021 NBA Champion Milwaukee Bucks",
        players: ["Giannis Antetokounmpo", "Khris Middleton", "Jrue Holiday", "Brook Lopez"]
      },
      {
        difficulty: 2,
        label: "Scored 60+ points in a game",
        players: ["Kobe Bryant", "Devin Booker", "Donovan Mitchell", "Elgin Baylor"]
      },
      {
        difficulty: 3,
        label: "Played in the BIG3 League",
        players: ["Kwame Brown", "Mike Bibby", "Rashard Lewis", "Cuttino Mobley"]
      }
    ]
  },
  {
    date: "2026-05-03",
    categories: [
      {
        difficulty: 0,
        label: "Golden State Warriors Dynasty (2015-2019)",
        players: ["Stephen Curry", "Klay Thompson", "Draymond Green", "Kevin Durant"]
      },
      {
        difficulty: 1,
        label: "Point Guards under 6 feet tall",
        players: ["Isaiah Thomas", "Nate Robinson", "Muggsy Bogues", "Spud Webb"]
      },
      {
        difficulty: 2,
        label: "Drafted in the same class as LeBron (2003)",
        players: ["Carmelo Anthony", "Chris Bosh", "Dwyane Wade", "Kirk Hinrich"]
      },
      {
        difficulty: 3,
        label: "Career 3-point percentage over 45%",
        players: ["Steve Kerr", "Stephen Curry", "Seth Curry", "Joe Harris"]
      }
    ]
  },
  {
    date: "2026-05-04",
    categories: [
      {
        difficulty: 0,
        label: "Miami Heat Big 3 (2010-2014)",
        players: ["LeBron James", "Dwyane Wade", "Chris Bosh", "Ray Allen"]
      },
      {
        difficulty: 1,
        label: "Defensive Player of the Year Winners",
        players: ["Rudy Gobert", "Giannis Antetokounmpo", "Kawhi Leonard", "Ben Wallace"]
      },
      {
        difficulty: 2,
        label: "Won a title with the Chicago Bulls",
        players: ["Michael Jordan", "Scottie Pippen", "Dennis Rodman", "Steve Kerr"]
      },
      {
        difficulty: 3,
        label: "Played college basketball at Duke",
        players: ["Kyrie Irving", "Jabari Parker", "Jayson Tatum", "Zion Williamson"]
      }
    ]
  },
  {
    date: "2026-05-05",
    categories: [
      {
        difficulty: 0,
        label: "Current Oklahoma City Thunder Stars",
        players: ["Shai Gilgeous-Alexander", "Chet Holmgren", "Jalen Williams", "Luguentz Dort"]
      },
      {
        difficulty: 1,
        label: "Rookies of the Year in the 2010s",
        players: ["Blake Griffin", "Damian Lillard", "Michael Carter-Williams", "Karl-Anthony Towns"]
      },
      {
        difficulty: 2,
        label: "Played for 6+ NBA Teams",
        players: ["Joe Johnson", "Vince Carter", "Shaquille O'Neal", "Channing Frye"]
      },
      {
        difficulty: 3,
        label: "First overall pick who never made an All-Star game",
        players: ["Anthony Bennett", "Kwame Brown", "Greg Oden", "Michael Olowokandi"]
      }
    ]
  },
  {
    date: "2026-05-06",
    categories: [
      {
        difficulty: 0,
        label: "2024 Paris Olympics Team USA",
        players: ["LeBron James", "Stephen Curry", "Kevin Durant", "Jayson Tatum"]
      },
      {
        difficulty: 1,
        label: "NBA Scoring Champions",
        players: ["Kevin Durant", "James Harden", "Russell Westbrook", "Kobe Bryant"]
      },
      {
        difficulty: 2,
        label: "Played for both the Lakers and Celtics",
        players: ["Gary Payton", "Shaquille O'Neal", "Kevin Garnett", "Antoine Walker"]
      },
      {
        difficulty: 3,
        label: "Wore #0 in the NBA",
        players: ["Russell Westbrook", "Damian Lillard", "Gilbert Arenas", "Kyle Kuzma"]
      }
    ]
  }
];

const EDITOR_PASSWORD = "hoops2025";

if (typeof module !== 'undefined') module.exports = { PUZZLES, EDITOR_PASSWORD };
