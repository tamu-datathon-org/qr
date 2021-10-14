import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'
import { useEffect } from 'react';
import { useActiveUser, UserCurrentStatus } from '../components/UserProvider'

const Home: NextPage = () => {
  const { user, status } = useActiveUser();
  const router = useRouter();

  useEffect(() => {
    console.log(status)
    if (status === UserCurrentStatus.LoggedIn) {
      router.push(`/${user?.authId}`)
    } else if (status !== UserCurrentStatus.Loading) {
      location.assign("/auth/login?r=/qr");
    }
  }, [status, user, router]);

  return (
    <div>
      <Head>
        <title>QR Code | TAMU Datathon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      </div>
    </div>
  )
}

export default Home
