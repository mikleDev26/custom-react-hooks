import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useCookie = ({ key }) => {
  const initial = Cookies.get(key);
  const [cookie, setCookieState] = useState(initial);

  useEffect(() => {
    Cookies.set(key, cookie);
  }, [cookie, key])

  return [ cookie, setCookieState];
}