import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";
import authV1 from "./modules/auth";

export default configureStore({
  reducer: {
    user: user,
    authV1: authV1,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
