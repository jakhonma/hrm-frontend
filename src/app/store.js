import { configureStore } from "@reduxjs/toolkit";
// import channelReducer from "../features/organizations/channelsSlice";
// import organizationsReducer from "../features/organizations/organizationsSlice";
// import vacancyReducer from "../features/services/vacancySlice";
// import newsReducer from "../features/news/newsSlice";
// import paginationReducer from "../features/pagination/paginationSlice";
// import eventsReducer from "../features/events/eventsSlice";
// import openDataReducer from "../features/openData/openDataSlice";
// import leadershipReducer from "../features/about/leadershipSlice";
// // import structureReducer from "../features/about/structureSlice";
// import unionsReducer from "../features/organizations/unionSlice";
// import apparatReducer from "../features/about/apparatSlice";
// import tvShowReducer from "../features/organizations/tvShowSlice";
// import virtualReducer from "../features/services/virtualSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // channel: channelReducer,
    // organizations: organizationsReducer,
    // vacancy: vacancyReducer,
    // news: newsReducer,
    // pagination: paginationReducer,
    // events: eventsReducer,
    // openData: openDataReducer,
    // leadership: leadershipReducer,
    // // structure: structureReducer,
    // unions: unionsReducer,
    // apparat: apparatReducer,
    // show: tvShowReducer,
    // virtual: virtualReducer,
  },
});
