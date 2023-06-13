import { useRouter } from 'next/router'
  
  export default function StopMotionPage() {
  
    const router = useRouter()
  return <p>Post: {router.query.slug}</p>
  }
  