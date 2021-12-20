import Card from './Card';
import useCounter from '../Hooks/use-counter';

const BackwardCounter = () => {
  const counter = useCounter(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
