/* @flow */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} from 'react-native'

const API_KEY = 'fcfa1777e2179b5527ecdce188ab8d391f913595';  //8a5c3df44b3029cb4b51e01ad6bc037d14a72667
const WATSON_URL = 'https://access.alchemyapi.com/calls/data/GetNews?';
const ENTITY = 'https://access.alchemyapi.com/calls/data/GetNews?apikey=fcfa1777e2179b5527ecdce188ab8d391f913595&outputMode=json&start=now-2d&end=now&q.enriched.url.enrichedTitle.entities.entity=|text=Omar%20Mateen,type=person|&count=50&return=enriched.url.enrichedTitle.docSentiment,enriched.url.url,enriched.url.title'

var fetched = [ { id: 'MTA0NjI3ODMxMXwxNDY2MzYzNDI3',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: -0.307276994, type: 'negative' } },
             title: 'Omar Mateen was once fired from job over gun joke | The Asian Age',
             url: 'http://www.asianage.com/international/omar-mateen-was-once-fired-job-over-gun-joke-386' } } },
    timestamp: 1466363427 },
  { id: 'MTAyMzk4NTY2OHwxNDY2MzYwMzQz',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0.38132, type: 'positive' } },
             title: 'Orlando Shooting: Attorney General says Omar Mateen investigation moving forward',
             url: 'http://www.dailybulletin.com/general-news/20160619/orlando-shooting-attorney-general-says-omar-mateen-investigation-moving-forward' } } },
    timestamp: 1466360343 },
  { id: 'MTAxNzM1NjM3MnwxNDY2MzU4NzQ0',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: -0.604323983, type: 'negative' } },
             title: '‘He was always agitated, always mad,’ say people who knew Orlando killer Omar Mateen - USweekly',
             url: 'http://usweekly.com/news/390/6632/%E2%80%98He_was_always_agitated_always_mad%E2%80%99_say_people_who_knew_Orlando_killer_Omar_Mateen.html' } } },
    timestamp: 1466358744 },
  { id: 'OTg2ODAxMjgxfDE0NjYzNTUxMTY',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Herald',
             url: 'http://www.heraldonline.com/latest-news/article84674162.html' } } },
    timestamp: 1466355116 },
  { id: 'OTc4NjYxNjQ5fDE0NjYzNTM2MzY',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0.38132, type: 'positive' } },
             title: 'Orlando Shooting: Attorney General says Omar Mateen investigation moving forward',
             url: 'http://www.presstelegram.com/general-news/20160619/orlando-shooting-attorney-general-says-omar-mateen-investigation-moving-forward' } } },
    timestamp: 1466353636 },
  { id: 'OTc2NTQ5ODIzfDE0NjYzNTM1Mzg',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0.38132, type: 'positive' } },
             title: 'Orlando Shooting: Attorney General says Omar Mateen investigation moving forward',
             url: 'http://www.dailybreeze.com/general-news/20160619/orlando-shooting-attorney-general-says-omar-mateen-investigation-moving-forward' } } },
    timestamp: 1466353538 },
  { id: 'OTgwODYyMzcwfDE0NjYzNTM0OTQ',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'US authorities to release 911 Omar Mateen transcripts from Orlando shooting',
             url: 'http://www.smh.com.au//world/us-authorities-to-release-911-omar-mateen-transcripts-from-orlando-shooting-20160619-gpmvte.html' } } },
    timestamp: 1466353494 },
  { id: 'OTc3MTU1ODAwfDE0NjYzNTM0NDk',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0.38132, type: 'positive' } },
             title: 'Orlando Shooting: Attorney General says Omar Mateen investigation moving forward',
             url: 'http://www.sgvtribune.com/general-news/20160619/orlando-shooting-attorney-general-says-omar-mateen-investigation-moving-forward' } } },
    timestamp: 1466353449 },
  { id: 'OTcwMzc1MDMwfDE0NjYzNTMzMDM',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0.38132, type: 'positive' } },
             title: 'Orlando Shooting: Attorney General says Omar Mateen investigation moving forward',
             url: 'http://www.sbsun.com/general-news/20160619/orlando-shooting-attorney-general-says-omar-mateen-investigation-moving-forward' } } },
    timestamp: 1466353303 },
  { id: 'OTczMDY3MDQxfDE0NjYzNTI4NDk',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0.38132, type: 'positive' } },
             title: 'Orlando Shooting: Attorney General says Omar Mateen investigation moving forward',
             url: 'http://www.redlandsdailyfacts.com/general-news/20160619/orlando-shooting-attorney-general-says-omar-mateen-investigation-moving-forward' } } },
    timestamp: 1466352849 },
  { id: 'OTcxNjIxMjc1fDE0NjYzNTI3MzU',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0.38132, type: 'positive' } },
             title: 'Orlando Shooting: Attorney General says Omar Mateen investigation moving forward',
             url: 'http://www.whittierdailynews.com/general-news/20160619/orlando-shooting-attorney-general-says-omar-mateen-investigation-moving-forward' } } },
    timestamp: 1466352735 },
  { id: 'OTYzMDA2NDQ2fDE0NjYzNTI1MjE',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'US authorities to release 911 Omar Mateen transcripts from Orlando shooting',
             url: 'http://www.smh.com.au/world/us-authorities-to-release-911-omar-mateen-transcripts-from-orlando-shooting-20160619-gpmvte.html' } } },
    timestamp: 1466352521 },
  { id: 'OTYzMTcyNTkwfDE0NjYzNTIxNTc',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0.38132, type: 'positive' } },
             title: 'Orlando Shooting: Attorney General says Omar Mateen investigation moving forward',
             url: 'http://www.pasadenastarnews.com/general-news/20160619/orlando-shooting-attorney-general-says-omar-mateen-investigation-moving-forward' } } },
    timestamp: 1466352157 },
  { id: 'OTY0NzI5ODU5fDE0NjYzNTIxNTU',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0.38132, type: 'positive' } },
             title: 'Orlando Shooting: Attorney General says Omar Mateen investigation moving forward',
             url: 'http://www.dailynews.com/general-news/20160619/orlando-shooting-attorney-general-says-omar-mateen-investigation-moving-forward' } } },
    timestamp: 1466352155 },
  { id: 'OTYzNDY2MDg4fDE0NjYzNTIwMTc',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'US authorities to release 911 Omar Mateen transcripts from Orlando shooting',
             url: 'http://www.theage.com.au/world/us-authorities-to-release-911-omar-mateen-transcripts-from-orlando-shooting-20160619-gpmvte.html' } } },
    timestamp: 1466352017 },
  { id: 'OTQ5MDg0MjUzfDE0NjYzNDkzNzg',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: -0.842140019, type: 'negative' } },
             title: 'Before Omar Mateen Committed Mass Murder, The FBI Tried To \'Lure\' Him Into A Terror Plot - Democratic Underground',
             url: 'http://www.democraticunderground.com/10027931703' } } },
    timestamp: 1466349378 },
  { id: 'OTI1MDIzMjcxfDE0NjYzNDYxOTI',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | Lexington Herald-Leader',
             url: 'http://www.kentucky.com/latest-news/article84674162.html' } } },
    timestamp: 1466346192 },
  { id: 'OTE4OTYwNTQyfDE0NjYzNDUxNTg',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | Idaho Statesman',
             url: 'http://www.idahostatesman.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466345158 },
  { id: 'ODk2NzIwNDUyfDE0NjYzNDMyNTU',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: -0.705201983, type: 'negative' } },
             title: 'Always Agitated. Always Mad: Omar Mateen, According to Those Who Knew Him - Democratic Underground',
             url: 'http://www.democraticunderground.com/10141494236' } } },
    timestamp: 1466343255 },
  { id: 'ODcyNjI3NjgxfDE0NjYzNDE2ODA',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Sun News',
             url: 'http://www.myrtlebeachonline.com/news/nation-world/national/article84674162.html' } } },
    timestamp: 1466341680 },
  { id: 'OTgwODYwMzQ4fDE0NjYzMzk0NjA',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: -0.265881002, type: 'negative' } },
             title: 'FBI to release transcripts of police calls with Orlando nightclub shooter Omar Mateen',
             url: 'http://www.masslive.com/news/index.ssf/2016/06/transcripts_of_911_calls_with.html' } } },
    timestamp: 1466339460 },
  { id: 'OTgyNTE1MTQ0fDE0NjYzMzU2MjA',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0.37312001, type: 'positive' } },
             title: 'Attorney General says Omar Mateen investigation moving forward',
             url: 'http://www.syracuse.com/us-news/index.ssf/2016/06/attorney_general_says_omar_mateen_investigation_moving_forward.html' } } },
    timestamp: 1466335620 },
  { id: 'ODA4NDQ1MzM3fDE0NjYzMjYwNTk',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen: What we know about the Orlando shooter',
             url: 'http://usatoday30.usatoday.com/video/omar-mateen-what-we-know-about-the-orlando-shooter/4940702880001' } } },
    timestamp: 1466326059 },
  { id: 'ODA0MjU4MDU2fDE0NjYzMjM0MDA',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: -0.229179993, type: 'negative' } },
             title: 'Omar Mateen traded texts with his wife during Orlando massacre, reports say | ChristianNewsToday.com',
             url: 'http://christiannewstoday.com/entretenimento/omar-mateen-traded-texts-with-his-wife-during-orlando-massacre-reports-say/178' } } },
    timestamp: 1466323400 },
  { id: 'NzQyMjI2ODQ4fDE0NjYzMDk5MDg',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Olympian',
             url: 'http://www.theolympian.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466309908 },
  { id: 'NzQxMjc2Mzc3fDE0NjYzMDk3MDk',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | Idaho Statesman',
             url: 'http://www.idahostatesman.com/news/nation-world/national/article84674162.html' } } },
    timestamp: 1466309709 },
  { id: 'NzQwOTA5MDI0fDE0NjYzMDk0MTQ',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream — or so it seemed | The State',
             url: 'http://www.thestate.com/news/nation-world/national/article84683947.html' } } },
    timestamp: 1466309414 },
  { id: 'NzQwNzc2ODg1fDE0NjYzMDk0MTQ',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The State',
             url: 'http://www.thestate.com/latest-news/article84674162.html' } } },
    timestamp: 1466309414 },
  { id: 'NzQzMzY5MTExfDE0NjYzMDkzNjk',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream — or so it seemed | Idaho Statesman',
             url: 'http://www.idahostatesman.com/news/nation-world/national/article84590012.html' } } },
    timestamp: 1466309369 },
  { id: 'NzM1OTg5NDUzfDE0NjYzMDgyMTk',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Modesto Bee',
             url: 'http://www.modbee.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466308219 },
  { id: 'NzMyMjA5MTkzfDE0NjYzMDgxODE',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | Fresno Bee',
             url: 'http://www.fresnobee.com/news/nation-world/national/article84674162.html' } } },
    timestamp: 1466308181 },
  { id: 'NzMyOTI3NjMxfDE0NjYzMDc5ODM',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | Miami Herald',
             url: 'http://www.miamiherald.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466307983 },
  { id: 'NzM2OTUyNDYwfDE0NjYzMDc4MTY',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Telegraph',
             url: 'http://www.macon.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466307816 },
  { id: 'NzM0OTMyODg1fDE0NjYzMDc0ODY',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Wichita Eagle',
             url: 'http://www.kansas.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466307486 },
  { id: 'NzMwNTEzNDE5fDE0NjYzMDc0NzQ',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | Belleville News-Democrat',
             url: 'http://www.bnd.com/news/nation-world/national/article84674162.html' } } },
    timestamp: 1466307474 },
  { id: 'NzM0MzI4OTE5fDE0NjYzMDczOTY',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Kansas City Star',
             url: 'http://www.kansascity.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466307396 },
  { id: 'NzMzMjU2Mzk3fDE0NjYzMDcxOTg',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Merced Sun-Star',
             url: 'http://www.mercedsunstar.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466307198 },
  { id: 'NzI1NjU5MjEyfDE0NjYzMDY4Njk',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | Centre Daily Times',
             url: 'http://www.centredaily.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466306869 },
  { id: 'NzI5MDg2ODk0fDE0NjYzMDY4NjI',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Tribune',
             url: 'http://www.sanluisobispo.com/news/nation-world/national/article84674162.html' } } },
    timestamp: 1466306862 },
  { id: 'NzI0NTMyNzQ5fDE0NjYzMDY2NzE',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Merced Sun-Star',
             url: 'http://www.mercedsunstar.com/news/nation-world/national/article84674162.html' } } },
    timestamp: 1466306671 },
  { id: 'NzIyMzg2NTUyfDE0NjYzMDYyMDI',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Orlando shooting: FBI interviewed worshipper at Omar Mateen’s...',
             url: 'http://www.springfieldnewssun.com/news/news/national/orlando-shooting-psychologist-says-she-never-exami/nrjJD/' } } },
    timestamp: 1466306202 },
  { id: 'NzI4NTYzOTc1fDE0NjYzMDYwMzI',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | SunHerald',
             url: 'http://www.sunherald.com/news/nation-world/national/article84674162.html' } } },
    timestamp: 1466306032 },
  { id: 'NzIzNDI4MTEyfDE0NjYzMDU5OTU',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | Columbus Ledger-Enquirer',
             url: 'http://www.ledger-enquirer.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466305995 },
  { id: 'NzIwMzkwMTcwfDE0NjYzMDU4Mjk',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Herald',
             url: 'http://www.heraldonline.com/news/nation-world/national/article84674162.html' } } },
    timestamp: 1466305829 },
  { id: 'NzIxMjgxMjM3fDE0NjYzMDU2OTQ',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | SunHerald',
             url: 'http://www.sunherald.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466305694 },
  { id: 'NzI1ODg0NTA0fDE0NjYzMDU2NTQ',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Sacramento Bee',
             url: 'http://www.sacbee.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466305654 },
  { id: 'NzE4ODUxNzk1fDE0NjYzMDU2MzU',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The News Tribune',
             url: 'http://www.thenewstribune.com/news/nation-world/article84674162.html' } } },
    timestamp: 1466305635 },
  { id: 'NzE1MDM5MDM5fDE0NjYzMDUxOTY',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The Telegraph',
             url: 'http://www.macon.com/news/nation-world/national/article84674162.html' } } },
    timestamp: 1466305196 },
  { id: 'NzE0NDIyMTA0fDE0NjYzMDQ2OTg',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | The State',
             url: 'http://www.thestate.com/news/nation-world/national/article84674162.html' } } },
    timestamp: 1466304698 },
  { id: 'NzE1MzUzMjkxfDE0NjYzMDQ1Nzg',
    source: 
     { enriched: 
        { url: 
           { enrichedTitle: { docSentiment: { mixed: 0, score: 0, type: 'neutral' } },
             title: 'Omar Mateen’s immigrant family lived the American dream – or so it seemed | Centre Daily Times',
             url: 'http://www.centredaily.com/news/nation-world/national/article84674162.html' } } },
    timestamp: 1466304578 } ];

function generate(entity) {
  var query = [WATSON_URL+'apikey='+API_KEY+'&outputMode=json&dedup=1&rank=high'];
  setTime('2d');
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


module.exports = {
  generate: generate,
  fetch: fetch
}
