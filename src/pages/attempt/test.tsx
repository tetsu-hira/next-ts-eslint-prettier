import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { page } = router.query;
  console.log(router.query);

  return <div>現在{page}ページです</div>;
}
