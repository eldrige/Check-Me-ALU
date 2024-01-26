/* eslint-disable prettier/prettier */
import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useContext,
  useReducer,
} from 'react';

import { deleteToken, getToken } from '@/services/tokenService';

type ACTIONTYPE =
  | { type: 'SIGN_IN'; payload: string }
  | { type: 'SIGN_OUT' }
  | { type: 'RESTORE_TOKEN'; payload: string | undefined };

interface AuthCtxType {
  isLoading: boolean;
  signedOut: boolean;
  userToken: string | undefined;
  // logout: () => void
  dispatch: React.Dispatch<ACTIONTYPE>;
}

const initialValues = {
  isLoading: true,
  signedOut: false,
  userToken: undefined,
};

function authReducer(state: Omit<AuthCtxType, 'dispatch'>, action: ACTIONTYPE) {
  switch (action.type) {
    case 'SIGN_IN': {
      return {
        ...state,
        signedOut: false,
        userToken: action.payload,
      };
    }
    case 'SIGN_OUT': {
      return {
        ...state,
        signedOut: true,
        userToken: undefined,
      };
    }
    case 'RESTORE_TOKEN': {
      return {
        ...state,
        userToken: action.payload,
        isLoading: false,
      };
    }
    default:
      throw new Error();
  }
}

const AuthContext = createContext<AuthCtxType>({} as AuthCtxType);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialValues);

  useEffect(() => {
    let userToken: string | undefined;
    getToken()
      .then((token) => {
        userToken = token;
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e, 'error while getting user token');
      })
      .finally(() => {
        dispatch({ type: 'RESTORE_TOKEN', payload: userToken });
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        // logout,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Component must be wrapped with the AuthProvider');
  }
  return context;
};
