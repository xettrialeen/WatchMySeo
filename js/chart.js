let data = {
  SiteName: "gadgetbytenepal.com",
  Description:
    "gadgetbyte nepal is a tech news site providing technology news, reviews, price & more about smartphone, laptop, tablets, drones, camera & apps in nepal.",
  TopCountryShares: [
    { Value: 0.9261130130840699, Country: 524 },
    { Value: 0.013502181554190923, Country: 356 },
    { Value: 0.013243864608494452, Country: 840 },
    { Value: 0.004083888802404165, Country: 36 },
    { Value: 0.0025942089760072917, Country: 76 },
  ],
  Title: "gadgetbyte: latest tech news, gadget reviews & mobile price in nepal",
  Engagments: {
    BounceRate: "0.6228479024702246",
    Month: "10",
    Year: "2021",
    PagePerVisit: "2.2108969886752594",
    Visits: "530468.1581903046",
    TimeOnSite: "188.06731513596424",
  },
  EstimatedMonthlyVisits: {
    "2021-05-01": 581370,
    "2021-06-01": 805118,
    "2021-07-01": 757825,
    "2021-08-01": 662069,
    "2021-09-01": 593763,
    "2021-10-01": 530468,
  },
  GlobalRank: { Rank: 115962 },
  CountryRank: { Country: 524, Rank: 99 },
  IsSmall: false,
  TrafficSources: {
    Social: 0.08868286450409503,
    "Paid Referrals": 0.0006873711049126683,
    Mail: 0.0010848020407727668,
    Referrals: 0.001637684973220333,
    Search: 0.7817616554892267,
    Direct: 0.1261456218877725,
  },
  Category:
    "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
  CategoryRank: {
    Rank: "4384",
    Category:
      "Computers_Electronics_and_Technology/Computers_Electronics_and_Technology",
  },
  LargeScreenshot:
    "https://site-images.similarcdn.com/image?url=gadgetbytenepal.com&t=1&h=97bb0b586fc5a9fdc17f6294ba8d943322a489089b048113cc738e370381b15a",
};



var options = {
    series: [44, 55, 41, 17, 15,34],
    colors:["#f53b57","#ffa801","#0be881","#1e272e","#3c40c6","#ff3f34"],
    labels: ['Social', 'Paid Referrals', 'Mail', 'Referrals',"Search", "Direct"],
    chart: {
    type: 'pie',
  },
  stroke: {
     colors: ["#ffffff"],
     width:"0",
  },

 
  };

  var chart2 = new ApexCharts(document.querySelector("#sourcesDiagram"), options);
  chart2.render();


