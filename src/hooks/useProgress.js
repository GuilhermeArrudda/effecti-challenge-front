import { useContext } from 'react';
import ProgressContext from '../context/progressContext';

export default function useProgress() {
  return useContext(ProgressContext);
}