import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Paw } from 'lucide-react';

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4 flex items-center">
        Hello, React! <Paw className="ml-2 h-8 w-8" />
      </h1>
      <p className="text-xl mb-4">Count: {count}</p>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </div>
  );
};

export default Index;
