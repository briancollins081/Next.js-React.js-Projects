import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter();
  const handleAddMeetup = async (meetupData) => {
    const result = await fetch("/api/newmeetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();

    console.log(data);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>New Meetup</title>
        <meta name="description" content="Create a new next.js meeting" />
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
  );
};

export default NewMeetup;
