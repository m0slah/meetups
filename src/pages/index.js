import React, { useEffect, useState } from "react";
import MeetupList from "../../components/meetups/MeetupList";

const Dummy_List = [
  {
    id: "m1",
    name: "A First meetup",
    image:
      "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1600",
    address: "Some Address 5, 919 Some City",
    description: "this first meetup!",
  },
  {
    id: "m2",
    name: "A Second meetup",
    image:
      "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1600",
    address: "Some Address 4, 213 Some City",
    description: "this second meetup!",
  },
];

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(Dummy_List);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}

export default HomePage;
