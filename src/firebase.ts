import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const {
	VITE_FB_API,
	VITE_FB_AUTHDOMAIN,
	VITE_FB_PROJECTID,
	VITE_FB_STORAGE_BUCKET,
	VITE_FB_MESSAGINGSENDERID,
	VITE_FB_APPID,
} = import.meta.env;

const fbCreds = {
	apiKey: VITE_FB_API,
	appId: VITE_FB_APPID,
	authDomain: VITE_FB_AUTHDOMAIN,
	messagingSenderId: VITE_FB_MESSAGINGSENDERID,
	projectId: VITE_FB_PROJECTID,
	storageBucket: VITE_FB_STORAGE_BUCKET,
};

const fbApp = initializeApp(fbCreds);

const fbAuth = getAuth(fbApp);
const fbStore = getFirestore(fbApp);

export { fbStore, fbAuth, fbCreds };
