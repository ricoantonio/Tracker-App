import bbq from '../../Assets/bbq.jpg';
import concert from '../../Assets/concert.jpg';
import exhibition from '../../Assets/exhibition.jpg';
import expression from '../../Assets/expression.jpg';
import italian from '../../Assets/italian.jpeg';
import rock from '../../Assets/rock.jpg';
import startup from '../../Assets/startup.jpg';
import summer from '../../Assets/summer.jpg';
import wine from '../../Assets/wine.jpg';
import workshop from '../../Assets/workshop.jpg';

const events = [
   {
      event: 'Metallica Concert',
      location: 'Palace Grounds',
      type: 'Paid',
      thumbnail: concert,
   },
   {
      event: 'Saree Exhibition',
      location: 'Malleswaram Grounds',
      type: 'Free',
      thumbnail: exhibition,
   },
   {
      event: 'Wine Testing Event',
      location: 'Links Brewery',
      type: 'Paid',
      thumbnail: wine,
   },
   {
      event: 'Startups Meets',
      location: 'Kanteerava Indoor Stadium',
      type: 'Paid',
      thumbnail: startup,
   },
   {
      event: 'Summer Noon Party',
      location: 'Kumara Park',
      type: 'Paid',
      thumbnail: summer,
   },
   {
      event: 'Rock And Rool Nights',
      location: 'Sajapur Road',
      type: 'Paid',
      thumbnail: rock,
   },
   {
      event: 'Babecue Fridays',
      location: 'Whitefield',
      type: 'Paid',
      thumbnail: bbq,
   },
   {
      event: 'Summer Workshop',
      location: 'Indiranagar',
      type: 'Free',
      thumbnail: workshop,
   },
   {
      event: 'Impressions & Expressions',
      location: 'MG Road',
      type: 'Free',
      thumbnail: expression,
   },
   {
      event: 'Italian Carnival',
      location: 'Electronic City',
      type: 'Free',
      thumbnail: italian,
   },
];

export {events};
