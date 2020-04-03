var data = {
    blogs : [
      {
        "title":"ERCOT Summer Weather Outlook",
        "link": "https://powersettlements.com/5097/blog/ercot-summer-weather-outlook",
        "date"  : "May 31, 2019",
        "description" : "On May 8, 2019, the Electric Reliability Council of Texas (ERCOT) published its final Seasonal Assessment of Resource Adequacy (SARA) for the upcoming 2019 summer season, as well as a preliminary assessment for fall 2019 and an update to their Capacity, Demand, and Reserves (CDR) Report."
      },
      {
        "title" : "SPP Proposes Western Energy Imbalance Service Market",
        "link" : "https://powersettlements.com/5101/blog/spp-proposes-western-energy-imbalance-service-market",
        "date" : "July 6, 2019",
        "description" : "In June 2019, the Southwest Power Pool (SPP) announced that it intends to launch the Western Energy Imbalance Service (WEIS) market in December 2020. SPP currently oversees the electric grid and wholesale power market for utilities and transmission companies in 14 central U.S. states, and the new market is expected to generate significant cost savings for participants."
      },
      {
        "title" : "CAISO Reliability Coordinator Gains Regulatory Approval",
      "link" : "https://powersettlements.com/5103/blog/caiso-reliability-coordinator-gains-regulatory-approval",
      "date" : "June 15, 2019",
      "description" : "On June 3, 2019, the California Independent System Operator (CAISO) announced via news release that its Reliability Coordinator unit, RC West, obtained its certification from the North American Electric Reliability Corporation (NERC)."
      },
      {
        "title" : "FERC Summer Weather Highlights",
      "link" : "https://powersettlements.com/5099/blog/ferc-summer-weather-highlights",
      "date" : "June 1, 2019",
      "description" : "On May 16, 2019, the Federal Energy Regulatory Commission (FERC) Officer of Electric Reliability and Enforcement published its Summer 2019 Reliability and Energy Market Assessment, which is the summary report of anticipated summer reliability challenges for U.S. electric and natural gas markets."
      }
    ],
    saved : [
      {
        "title":"ERCOT Summer Weather Outlook",
        "link": "https://powersettlements.com/5097/blog/ercot-summer-weather-outlook",
        "date"  : "May 31, 2019",
        "description" : "On May 8, 2019, the Electric Reliability Council of Texas (ERCOT) published its final Seasonal Assessment of Resource Adequacy (SARA) for the upcoming 2019 summer season, as well as a preliminary assessment for fall 2019 and an update to their Capacity, Demand, and Reserves (CDR) Report."
      },
      {
      "title" : "SPP Proposes Western Energy Imbalance Service Market",
      "link" : "https://powersettlements.com/5101/blog/spp-proposes-western-energy-imbalance-service-market",
      "date" : "July 6, 2019",
      "description" : "In June 2019, the Southwest Power Pool (SPP) announced that it intends to launch the Western Energy Imbalance Service (WEIS) market in December 2020. SPP currently oversees the electric grid and wholesale power market for utilities and transmission companies in 14 central U.S. states, and the new market is expected to generate significant cost savings for participants."
      },
      {
        "title" : "CAISO Reliability Coordinator Gains Regulatory Approval",
      "link" : "https://powersettlements.com/5103/blog/caiso-reliability-coordinator-gains-regulatory-approval",
      "date" : "June 15, 2019",
      "description" : "On June 3, 2019, the California Independent System Operator (CAISO) announced via news release that its Reliability Coordinator unit, RC West, obtained its certification from the North American Electric Reliability Corporation (NERC)."
      },
      {
        "title" : "FERC Summer Weather Highlights",
      "link" : "https://powersettlements.com/5099/blog/ferc-summer-weather-highlights",
      "date" : "June 1, 2019",
      "description" : "On May 16, 2019, the Federal Energy Regulatory Commission (FERC) Officer of Electric Reliability and Enforcement published its Summer 2019 Reliability and Energy Market Assessment, which is the summary report of anticipated summer reliability challenges for U.S. electric and natural gas markets."
      }
    ],
    searchTerm : ""
  }
  
  var app = new Vue({
    el: '#app-container',
    data : data, 
    watch: {
      searchTerm: function(){
        var searching = this.searchTerm;
        var blogArray = this.saved.filter( blog => {
          return (
            blog.title.toLowerCase().match(searching.toLowerCase()) ||
            blog.description.toLowerCase().match(searching.toLowerCase()) 
          )
        }
        );
        this.blogs = blogArray;
      }
    } 
  });