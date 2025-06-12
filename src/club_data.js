import roboticsImage from './images/robotics.jpg';
import photographyImage from './images/photography.jpg';
import debateImage from './images/debate.jpg';
import gamingImage from './images/gaming.jpg';
import theaterImage from './images/theater.jpg';

export const clubs = [
  {
    id: 'robotics',
    name: 'Robotics Club',
    image: roboticsImage,
    shortDescription: 'Build and code robots with fellow enthusiasts.',
    description: 'Learn about robotics, compete in competitions, and join hands-on workshops every month!',
    events: [
      { name: 'Intro to Arduino', date: '2025-06-20' },
      { name: 'Robotics Expo', date: '2025-07-12' }
    ]
  },
  {
    id: 'photography',
    name: 'Photography Club',
    image: photographyImage,
    shortDescription: 'Capture stunning moments with your camera.',
    description: 'Explore photography techniques, join photo walks, and exhibit your work in campus galleries!',
    events: [
      { name: 'Photo Walk', date: '2025-06-25' },
      { name: 'Gallery Night', date: '2025-07-15' }
    ]
  },
  {
    id: 'debate',
    name: 'Debate Club',
    image: debateImage,
    shortDescription: 'Hone your public speaking and argumentation skills.',
    description: 'Participate in debates, attend training sessions, and compete in intercollegiate tournaments!',
    events: [
      { name: 'Debate Workshop', date: '2025-06-18' },
      { name: 'Mock Debate', date: '2025-07-10' }
    ]
  },
  {
    id: 'gaming',
    name: 'Gaming Club',
    image: gamingImage,
    shortDescription: 'Play and compete in exciting video games.',
    description: 'Join gaming tournaments, share strategies, and enjoy casual play nights with friends!',
    events: [
      { name: 'Tournament Kickoff', date: '2025-06-22' },
      { name: 'Game Night', date: '2025-07-14' }
    ]
  },
  {
    id: 'theater',
    name: 'Theater Club',
    image: theaterImage,
    shortDescription: 'Perform and create dramatic arts on stage.',
    description: 'Act in plays, learn scriptwriting, and participate in campus theater productions every semester!',
    events: [
      { name: 'Acting Workshop', date: '2025-06-19' },
      { name: 'Play Rehearsal', date: '2025-07-11' }
    ]
  }
];