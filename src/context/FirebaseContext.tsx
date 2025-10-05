import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	User,
} from "firebase/auth";
import PropTypes from "prop-types";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

import {
	fbAuth,
	// fbStore
} from "../firebase";

const FBContext = createContext({});

const FirebaseContextProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);

	const signIn = (email: string, password: string) => {
		return signInWithEmailAndPassword(fbAuth, email, password);
	};

	const logout = () => {
		return signOut(fbAuth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(fbAuth, (user) => {
			if (user) {
				setUser(user);
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<FBContext.Provider
			value={{
				user,
				logout,
				signIn,
			}}
		>
			{children}
		</FBContext.Provider>
	);
};

const FirebaseContext = () => {
	return useContext(FBContext);
};

FirebaseContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export { FirebaseContextProvider, FirebaseContext };
