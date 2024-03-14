import { configureStore } from "@reduxjs/toolkit";
import featureSlice from "./featureSlice";

import userSlice from "./userSlice";
import favoriteSlice from "./favoriteSlice";
import ProjectSlice from "./ProjectSlice";

const appStore = configureStore(
    {
        reducer : {
            feature : featureSlice,
            project : ProjectSlice,
            user : userSlice,
            favorite : favoriteSlice
        }
    }
)

export default appStore