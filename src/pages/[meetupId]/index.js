import MeetupDetail from "../../../components/meetups/MeetupDetail";

const meetupDetails = () => {
  return (
    <MeetupDetail
      image="https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1600"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="The Meetup Description"
    />
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
}


export async function getStaticProps(context) {
  //fetching data from single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetup: {
        image:
          "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=1600",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 5, Some City",
        description: "The Meetup Description",
      },
    },
  };
}

export default meetupDetails;
