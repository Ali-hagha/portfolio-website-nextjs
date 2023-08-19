import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CatchAll = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, [router]);

  return <></>;
};

export default CatchAll;
