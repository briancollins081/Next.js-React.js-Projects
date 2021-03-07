import { Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={AllMeetups} />
        <Route path="/newmeetup" exact component={NewMeetup} />
        <Route path="/favoritemeetup" exact component={Favorites} />
      </Switch>
    </Layout>
  );
};

export default App;
