// our-domain.com/new-meetup

import NewMeetupForm from "../../../components/meetups/NewMeetupForm";

function addMeetupHandler(enteredMeetupData) {
  console.log(enteredMeetupData);
}

const NewMeetupPage = () => {
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetupPage;