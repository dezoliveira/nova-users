import { Suspense } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Suspense fallback={<Loading />}>
        <Link to="/users">
          <button>
            Usuários
          </button>
        </Link>
      </Suspense>
    </>
  )
}