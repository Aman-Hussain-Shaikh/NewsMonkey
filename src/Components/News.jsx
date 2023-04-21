import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
      "source": { "id": null, "name": "Zoom" },
      "author": "Shivani Mishra",
      "title": "10 Die Of Heat Stroke At Maharashtra Bhushan Awards In Kharghar - Times Now",
      "description": "Lakhs of followers of Dharmadhikari attended the grand function held on a sprawling 306-acre ground in Kharghar. Union Home Minister Amit Shah presented the award, instituted by the Maharashtra government, to Dharmadhikari.",
      "url": "https://www.timesnownews.com/mumbai/over-dozens-dead-several-hospitalised-due-to-heatwave-at-maharashtra-bhushan-award-event-in-kharghar-article-99538423",
      "urlToImage": "https://static.tnn.in/thumb/msid-99538423,updatedat-1681669491742,width-1280,height-720,resizemode-75/99538423.jpg",
      "publishedAt": "2023-04-16T18:24:00Z",
      "content": "Security Breach in Amit Shah's Cavalcade in Mumbai, Two-Wheeler Comes Close To Home Minister's Vehicle"
  },
  
  {
      "source": { "id": null, "name": "NDTV News" },
      "author": "NDTV Sports Desk",
      "title": "GT vs RR Live Score, IPL 2023: Devdutt Padikkal, Sanju Samson Lead Rajasthan Royals' Fightback In Chase Of 178 - NDTV Sports",
      "description": "GT vs RR Live Score: Rashid Khan's twin strikes have dented Rajasthan Royals chase of 178 against Gujarat Titans",
      "url": "https://sports.ndtv.com/ipl-2023/gt-vs-rr-live-score-ipl-2023-gujarat-titans-vs-rajasthan-royals-today-23nd-match-live-updates-3952797",
      "urlToImage": "https://c.ndtvimg.com/2023-04/rqgrv9kg_rashid-khan-bcci-ipl_625x300_16_April_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2023-04-16T16:38:25Z",
      "content": "Gujarat Titans vs Rajasthan Royals Live Updates: Rashid Khan's twin strikes have dented Rajasthan Royals chase of 178 against Gujarat Titans in Ahmedabad. Sanju Samson has been joined by Shimron Hetm… [+465 chars]"
  },
 
  {
      "source": { "id": null, "name": "Hindustan Times" },
      "author": "HT Entertainment Desk",
      "title": "Alia calls Diljit Dosanjh's Coachella gig 'epic', Sonam wishes she was there - Hindustan Times",
      "description": "Alia Bhatt and Sonam Kapoor reacted to Diljit Dosanjh's first performance at Coachella Sunday. Alia called it epic, while Sonam said she wanted to be there.",
      "url": "https://www.hindustantimes.com/entertainment/music/alia-bhatt-calls-diljit-dosanjh-s-coachella-gig-epic-sonam-kapoor-wishes-she-was-there-101681660915349.html",
      "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/04/16/1600x900/Diljit_Coachella_1681661450875_1681661476333_1681661476333.jpg",
      "publishedAt": "2023-04-16T16:18:08Z",
      "content": "After Kareena Kapoor, actor Alia Bhatt and Sonam Kapoor have praised Diljit Dosanjh for his historic performance at the Coachella music festival in California on Sunday. The singer-actor became the f… [+2279 chars]"
  },
  {
      "source": { "id": null, "name": "ThePrint" },
      "author": "Shekhar Gupta",
      "title": "‘Murderer at 17, brutal mafioso’ with stint in Parliament: Atiq Ahmed, a story of crime & heartland politics - ThePrint",
      "description": "Atiq Ahmed, the gangster who faced a laundry list of criminal cases, was shot dead Saturday, while in police custody. He had seen it coming, and was open about his fear.",
      "url": "https://theprint.in/india/murderer-at-17-brutal-mafioso-with-stint-in-parliament-atiq-ahmed-a-story-of-crime-heartland-politics/1522725/",
      "urlToImage": "https://static.theprint.in/wp-content/uploads/2023/04/Atiq-Ashraf.png",
      "publishedAt": "2023-04-16T16:11:45Z",
      "content": "Atiq Ahmed and his clan are in your headlines right now. Atiq Ahmed the don, gangster and now dead at one point had up to 250 cases against him under every possible section pertaining to heinous crim… [+19006 chars]"
  }
  ]
  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state={
      articles:this.articles,
      loading:false
    }
  }

  render() {
    return (
       
            <div className="container my-3">
            <h2>NewsMonkey - Top Headlines</h2>
            <div className="row">
                {this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} imageUrl ={element.urlToImage} newsUrl={element.url}/>
                  </div>
                })}

            </div>
           </div>
    
    )
  }
}
