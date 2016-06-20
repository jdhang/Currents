/* @flow */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} from 'react-native'

const API_KEY = '8a5c3df44b3029cb4b51e01ad6bc037d14a72667';   //fcfa1777e2179b5527ecdce188ab8d391f913595
const WATSON_URL = 'https://access.alchemyapi.com/calls/data/GetNews?';
const cache = {}

var fetched = [
            {
                "id": "NjY2OTE1NDIzfDE0NjYyOTYwNjY",
                "source": {
                    "enriched": {
                        "url": {
                            "cleanedTitle": "Woman tells CBS Omar Mateen stalked her",
                            "enrichedTitle": {
                                "docSentiment": {
                                    "mixed": 0,
                                    "score": 0,
                                    "type": "neutral"
                                }
                            },
                            "text": "                     Explosive wildfire burning across Santa Barbara                     \n                     Investigation uncovers more about Orlando shooter's erratic behavior                     \n                     Mother of Orlando victim: \"It's a pain that won't go away\"                     \n                     Russian jets attack American-backed rebels in Syria                     \n                     Russian track and field team banned from Rio Olympics                     \n                     Lumber Liquidators agrees to \"recall to test\" flooring                     \n                     How many mass shootings must we endure? Donald Trump: I'll save the Second Amendment                     \n                     Obama family draws attention to America's national parks                     \n                     U.S. diplomats push for strikes against Syria dictatorship                     \n                     Turmoil in Iraq leaves economy devastated                     \n                     Accused killer of U.K. lawmaker appears in court                     \n                     Donald Trump pushes forward amid GOP friction                     \n                     Girls rescued from house of horrors in Pennsylvania                     \n                     Woman claims she was stalked by Omar Mateen                     \n                     Orlando starts to say goodbye to nightclub massacre victims                     \n                     Monster fire forces hundreds from homes in California                     \n                     Donald Trump's full speech in Las Vegas                     \n                     New details emerge about Omar Mateen's dangerous past                     \n                     Wildfires continue to ravage areas near Santa Barbara                     \n                     Obama: We need more than talking about gun control                     \n                     Orlando attack victim's family mourns in Puerto Rico                     \n                     House Republican highlights GOP's new \"Better Way\" agenda                     \n                     Obama calls for gun control action after Orlando                     \n                     Donald Trump: Texas will be upset over my White House wins                     \n                     Anthony D'Amato peforms \"Golden Gloves\"                     \n                     Anthony D'Amato performs \"Blue Blooded\"                     \n                     Anthony D'Amato performs \"Rain On A Strange Roof\"                     \n                     The Dish: Chef Louis Tikaram                     \n                     Pixar looks to real life inspiration for \"Finding Dory\"                     \n                     Mo Willems and the art of children's books                     \n                     Can you binge books like you binge Netflix? ...",
                            "title": "Woman tells CBS Omar Mateen stalked her",
                            "url": "http://www.cbsnews.com/videos/woman-tells-cbs-omar-mateen-stalked-her/"
                        }
                    }
                },
                "timestamp": 1466296066
            },
            {
                "id": "MTA5OTQ3ODkxN3wxNDY2Mjk0NDAw",
                "source": {
                    "enriched": {
                        "url": {
                            "cleanedTitle": "Authorities To Release Omar Mateen's 911 Transcripts From Orlando Massacre",
                            "enrichedTitle": {
                                "docSentiment": {
                                    "mixed": 0,
                                    "score": 0,
                                    "type": "neutral"
                                }
                            },
                            "text": "One week after the most deadly shooting in American History, authorities have announced plans to release a partial transcript of 911 calls placed by murderer Omar Mateen. During Sunday\u2019s Meet The Press, Attorney General Loretta Lynch announced the news, explaining ahead of the release that law enforcement was focused at the time on determining \u201CWhere he was, and why he was doing this, all while the rescue operations were continuing.\u201D\nWhen pressed on what was going to be left out of the transcripts, Lynch replied that authorities were dedicated to providing answers, while also denying Mateen the opportunity to \u201Cfurther proclaim this individual\u2019s pledges of allegiance to terrorist groups and further his propaganda.\u201D\nAs Radar reported, 49 people were left dead, and 53 injured following last Sunday\u2019s massacre at gay nightclub Pulse\u00A0in Orlando, FL.\n",
                            "title": "Authorities To Release Omar Mateen's 911 Transcripts From Orlando Massacre",
                            "url": "http://radaronline.com/celebrity-news/orlando-nightclub-massacre-authorities-release-omar-mateen-911-transcripts/"
                        }
                    }
                },
                "timestamp": 1466294400
            },
            {
                "id": "MTA3OTM5ODQ5NHwxNDY2Mjk0NDAw",
                "source": {
                    "enriched": {
                        "url": {
                            "cleanedTitle": "CBS's John Dickerson Tries To Link Omar Mateen To Gun Shows",
                            "enrichedTitle": {
                                "docSentiment": {
                                    "mixed": 0,
                                    "score": -0.53126502,
                                    "type": "negative"
                                }
                            },
                            "text": "Dickerson made the \u201Cgun show\u201D reference June 19 when asking Attorney General Loretta Lynch about the fact that Mateen raised the suspicions of at least one gun dealer while shopping for firearms or firearm accessories. Lynch asked for clarification: \u201CYou\u2019re referring to the gun store owner whom the killer met with a while ago and talked about body armor?\u201D\nDickerson responded by adding an unexplained reference to guns-shows, which are strongly opposed by Democrats: \u201CAny gun show owner anywhere. ...",
                            "title": "CBS's John Dickerson Tries To Link Omar Mateen To Gun Shows - Breitbart",
                            "url": "http://www.breitbart.com/big-government/2016/06/19/cbss-john-dickerson-omar-mateen-shop-gun-shows/"
                        }
                    }
                },
                "timestamp": 1466294400
            },
            {
                "id": "NjU2NjQyMjQ4fDE0NjYyOTM5MTI",
                "source": {
                    "enriched": {
                        "url": {
                            "cleanedTitle": "Portrait of Orlando killer Omar Mateen shows internal conflict from early age",
                            "enrichedTitle": {
                                "docSentiment": {
                                    "mixed": 0,
                                    "score": -0.253293991,
                                    "type": "negative"
                                }
                            },
                            "text": "ORLANDO, Fla., June 18 (UPI) \u2014 A three-dimensional portrait of Orlando nightclub killer Omar Mateen is emerging through a series of media reports that depict a man in deep conflict:\nMateen was a chubby kid who endured bullying and grew into a gym rat who one friend said took steroids. He went from what elementary teachers described as a constant source of classroom disruption to a high school student who graduated early at age 16, with good grades. ...",
                            "title": "Portrait of Orlando killer Omar Mateen shows internal conflict from early age - Breitbart",
                            "url": "http://www.breitbart.com/news/portrait-of-orlando-killer-omar-mateen-shows-internal-conflict-from-early-age/"
                        }
                    }
                },
                "timestamp": 1466293912
            },
            {
                "id": "NjQ0Nzg2NTY4fDE0NjYyOTI1NTg",
                "source": {
                    "enriched": {
                        "url": {
                            "cleanedTitle": "Woman claims she was stalked by Omar Mateen",
                            "enrichedTitle": {
                                "docSentiment": {
                                    "mixed": 0,
                                    "score": 0,
                                    "type": "neutral"
                                }
                            },
                            "text": "                     Explosive wildfire burning across Santa Barbara                     \n                     Investigation uncovers more about Orlando shooter's erratic behavior                     \n                     Mother of Orlando victim: \"It's a pain that won't go away\"                     \n                     Russian jets attack American-backed rebels in Syria                     \n                     Russian track and field team banned from Rio Olympics                     \n                     Lumber Liquidators agrees to \"recall to test\" flooring                     \n                     How many mass shootings must we endure? Donald Trump: I'll save the Second Amendment                     \n                     Monster fire forces hundreds from homes in California                     \n                     New details emerge about Omar Mateen's dangerous past                     \n                     Wildfires continue to ravage areas near Santa Barbara                     \n                     Obama: We need more than talking about gun control                     \n                     Orlando attack victim's family mourns in Puerto Rico                     \n                     House Republican highlights GOP's new \"Better Way\" agenda                     \n                     Obama calls for gun control action after Orlando                     \n                     Donald Trump: Texas will be upset over my White House wins                     \n                     Anthony D'Amato peforms \"Golden Gloves\"                     \n                     Anthony D'Amato performs \"Blue Blooded\"                     \n                     Anthony D'Amato performs \"Rain On A Strange Roof\"                     \n                     The Dish: Chef Louis Tikaram                     \n                     Pixar looks to real life inspiration for \"Finding Dory\"                     \n                     Mo Willems and the art of children's books                     \n                     Can you binge books like you binge Netflix? ...",
                            "title": "Woman claims she was stalked by Omar Mateen",
                            "url": "http://www.cbsnews.com/videos/woman-claims-she-was-stalked-by-omar-mateen/"
                        }
                    }
                },
                "timestamp": 1466292558
            },
            {
                "id": "NTEyODg2NjQ0fDE0NjYyNzI0NDE",
                "source": {
                    "enriched": {
                        "url": {
                            "cleanedTitle": "New details emerge about Omar Mateen's dangerous past",
                            "enrichedTitle": {
                                "docSentiment": {
                                    "mixed": 0,
                                    "score": 0,
                                    "type": "neutral"
                                }
                            },
                            "text": "                     Explosive wildfire burning across Santa Barbara                     \n                     Investigation uncovers more about Orlando shooter's erratic behavior                     \n                     Mother of Orlando victim: \"It's a pain that won't go away\"                     \n                     Russian jets attack American-backed rebels in Syria                     \n                     Russian track and field team banned from Rio Olympics                     \n                     Lumber Liquidators agrees to \"recall to test\" flooring                     \n                     How many mass shootings must we endure? Donald Trump: I'll save the Second Amendment                     \n                     Wildfires continue to ravage areas near Santa Barbara                     \n                     Obama: We need more than talking about gun control                     \n                     Orlando attack victim's family mourns in Puerto Rico                     \n                     House Republican highlights GOP's new \"Better Way\" agenda                     \n                     Obama calls for gun control action after Orlando                     \n                     Donald Trump: Texas will be upset over my White House wins                     \n                     Anthony D'Amato peforms \"Golden Gloves\"                     \n                     Anthony D'Amato performs \"Blue Blooded\"                     \n                     Anthony D'Amato performs \"Rain On A Strange Roof\"                     \n                     The Dish: Chef Louis Tikaram                     \n                     Pixar looks to real life inspiration for \"Finding Dory\"                     \n                     Mo Willems and the art of children's books                     \n                     Can you binge books like you binge Netflix? ...",
                            "title": "New details emerge about Omar Mateen's dangerous past",
                            "url": "http://www.cbsnews.com/videos/new-details-emerge-about-omar-mateens-dangerous-past/"
                        }
                    }
                },
                "timestamp": 1466272441
            },
            {
                "id": "NDY5NDE2MDA2fDE0NjYyNjcyNDE",
                "source": {
                    "enriched": {
                        "url": {
                            "cleanedTitle": "The Unhinged Home that Raised Orlando Killer Omar Mateen \u2022 /r/news",
                            "enrichedTitle": {
                                "docSentiment": {
                                    "mixed": 0,
                                    "score": -0.282781005,
                                    "type": "negative"
                                }
                            },
                            "text": "Want to talk? See a post that violates the rules below? ...",
                            "title": "The Unhinged Home that Raised Orlando Killer Omar Mateen \u2022 /r/news",
                            "url": "https://www.reddit.com/r/news/comments/4oonl6/the_unhinged_home_that_raised_orlando_killer_omar/"
                        }
                    }
                },
                "timestamp": 1466267241
            },
            {
                "id": "NDI5MDEzMDMxfDE0NjYyNjEyMTk",
                "source": {
                    "enriched": {
                        "url": {
                            "cleanedTitle": "Orlando shooting: Omar Mateen stalking victim comes forward",
                            "enrichedTitle": {
                                "docSentiment": {
                                    "mixed": 0,
                                    "score": 0.326409012,
                                    "type": "positive"
                                }
                            },
                            "text": "New details are coming to light about the violent history of the Orlando nightclub shooter. Newly released documents show Omar Mateen talked about bringing a gun to a college class in 2007, shortly after the Virginia Tech shootings. ...",
                            "title": "Orlando shooting: Omar Mateen stalking victim comes forward",
                            "url": "http://www.cbsnews.com/news/orlando-shooting-omar-mateen-stalking-victim-comes-forward/"
                        }
                    }
                },
                "timestamp": 1466261219
            },
            {
                "id": "MzUyNTQyNTIwfDE0NjYyNDQ0NDM",
                "source": {
                    "enriched": {
                        "url": {
                            "cleanedTitle": "Orlando shooting: Woman says Omar Mateen stalked her",
                            "enrichedTitle": {
                                "docSentiment": {
                                    "mixed": 0,
                                    "score": 0,
                                    "type": "neutral"
                                }
                            },
                            "text": "FORT PIERCE, Fla. -- A bartender says the Florida nightclub shooter stalked her nearly a decade ago, sending her so many uncomfortable messages on Facebook that she blocked him on the social network. \"He was one of those guys who wouldn't leave me alone,\" Heather LaSalla of Fort Pierce, Florida, told an Associated Press reporter in an interview Friday at the doorway of her home. ...",
                            "title": "Orlando shooting: Woman says Omar Mateen stalked her",
                            "url": "http://www.cbsnews.com//news/orlando-shooting-woman-omar-mateen-stalker/"
                        }
                    }
                },
                "timestamp": 1466244443
            }
        ]

function generate(entity) {
  var query = [WATSON_URL+'apikey='+API_KEY+'&outputMode=json&dedup=1&rank=high'];
  setTime('5d');
  setEntity(entity);
  setCount('25');
  setReturn('enrichedTitle.docSentiment', 'url', 'title', 'text');
  
  return query.join('&');

  function setTime(startString, endString, int) {
    var start='start=now-'+startString; // time formats:  s, m, h, d, M, y, now || 12h or 30d
    var end = (endString) ? '&end=now-'+endString : '&end=now';
    var interval = (int) ? '&timeSlice='+int : '';
    query.push(start+end+interval);
  }

  function setEntity(entity) {
    var entity = 'q.enriched.url.enrichedTitle.entities.entity=|text='+entity.name+',type='+entity.type+'|'
    query.push(entity);
  }

  function setCount(count) {
    query.push('count='+count);
  }

  function setReturn() {
    var args = Array.prototype.slice.call(arguments).map(i => 'enriched.url.'+i);
    query.push('return='+args.join(','));
  }

}

function fetch() {
  return fetched;
}


function fetchCache(entity) {
    if (cache[entity.name]) {
        console.log('fetched from cache');
        return cache[entity.name];
    }
    else return false;
}

function saveToCache(entity, obj) {
    cache[entity.name] = obj;
    console.log('saved to cache');
    return obj;
}

module.exports = {
  generate: generate,
  fetch: fetch,
  saveToCache: saveToCache,
  fetchCache: fetchCache
}
