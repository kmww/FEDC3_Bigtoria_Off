import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { TOKEN_KEY } from '../constants/auth';
import { ROUTES } from '../constants/routes';
import { getLocalStorage } from '../utils/storage';
import { checkAuth } from './../apis/auth';

const useCheckAuthToken = () => {
  const navigate = useNavigate();
  const token = getLocalStorage(TOKEN_KEY);

  useEffect(() => {
    const fetchIsOnline = async () => {
      const { isOnline } = await checkAuth();

      token && isOnline && navigate(ROUTES.HOME);
    };

    fetchIsOnline();
  }, []);
};

export default useCheckAuthToken;
