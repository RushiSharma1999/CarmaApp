# CMPE_295A: Master's Project I

## Project Advisor
Dr. Wencen Wu

## Team:
| Members                  | Enrollment No.|
|--------------------------|---------------|
| Rohitkumar Yadav         | 015222961     |
| Rushi Sanjaykumar Sharma | 015947113     |
| Soham Chandrakant Kasar  | 015899442     |
| Siddhant Satish Parmar   | 015742389     |

## Project Title: 
Peer-to-Peer Carpooling using blockchain

## Summary of Project
Most carpooling systems are under the supervision of big agencies such as Waze Carpool, BlaBlaCar, GetAround, etc. They have access to all of the data of both drivers and riders, which can lead to serious privacy disclosure concerns since this data is vulnerable to malicious attacks such as DDOS attacks, Sybil attacks, etc. Besides, these services charge a major percentage of the ride cost from both rider and driver for their third-party services. Secondly, a classic carpooling system relies on a centralized system for the service, which can subject it to a single point of failure. Thirdly, conventional carpooling systems include community-based trust mechanisms, such as user ratings and reviews to check each other which may not be reliable since these third-party agencies control them. 

One way to introduce more transparency to carpooling services is to implement a decentralized system, a web application using blockchain. We aim to design a smart contract that connects the rider and driver without the involvement of third-party services. We also aim to develop a far more secure and dependable carpooling system by moving rider and driver information, ratings, and reviews to a decentralized system. 


## Key Features

* Eliminates the risk of a single point of failure
* Eliminates the risk of sensitive data leaks
* Builds trust between drivers and riders.


## Project Resources
* [Abstract](https://docs.google.com/document/d/11O3B8O6y_0S268Ni9-rdSvu4CeAaaujWDXDsE6z1G2w/edit?usp=sharing)
* [Workbook](https://docs.google.com/document/d/16X5nwL20e_d37gVgTfMnCRzaFhGxktZ5doj7da78jUk/edit?usp=sharing)
* [Logbook](https://docs.google.com/document/d/1NJFaRzXpCQ6DNxU2376PuNMuOjJUuLD8dlkK_WOgHRI/edit?usp=sharing)
* [Report](https://docs.google.com/document/d/1LItBtOO9ot66zzZGUSeDgbBx2PRrahrh/edit?usp=sharing&ouid=113720543860980441817&rtpof=true&sd=true)
* [Individual Journals]()

## High-Level Architecture Diagram
<img src="https://github.com/sparmar15/CMPE_295A/blob/main/images/295A%20Project%20Architecture.png">

## System Design
<img src="https://github.com/sparmar15/CMPE_295-AB/blob/main/images/Architecture%20Diagram%20V2.png">

## Project Plan and Progress
![Gantt Chart](https://github.com/sparmar15/CMPE_295A/blob/main/images/295A%20Project%20Tracker.png)



</figure>

## Kanban Details
* [Board](https://github.com/users/sparmar15/projects/1)

## API documentation
* [Carma API doc](https://metal-astronaut-ade.notion.site/Carma-API-Documentation-93d7093d01bb4c6a9624c629e81dfdda)

## Steps to Reproduce
Frontend
* Clone the repository
* Make sure to download xCode
* npm install or yarn add
* cd ios
* pods install
* npm run ios or yarn run ios
* App will build and open in simulator

Backend
* cd Backend
* Please create DB authentication and add the keys in process.env file
* run node index.js
* Server should start 
