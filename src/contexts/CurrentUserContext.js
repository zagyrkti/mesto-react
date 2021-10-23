import {createContext} from "react";

export const CurrentUserContext = createContext(
    {
      name: "initial",
      about: "initial",
      avatar: "initial",
      _id: "initial",
      cohort: "initial"
    })