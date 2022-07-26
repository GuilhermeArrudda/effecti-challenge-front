import { useContext } from 'react';
import CountContext from '../context/countContext';

export default function useCount() {
  return useContext(CountContext);
}