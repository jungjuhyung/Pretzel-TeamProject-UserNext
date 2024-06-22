"use client"
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter()

  const goPark = () => {
    router.push("/parkWork")
  }
  const goChoi = () => {
    router.push("/choiWork")
  }
  return (
    <>
      <h1 onClick={goPark}>박다현 Work Space</h1>
      <br/>
      <h1 onClick={goChoi}>최현민 Work Space</h1>
    </>
  );
}
