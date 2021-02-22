import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1>GenMitsu</h1> 
        <ul>
          <li><Link href="/見積書1"><a>見積書1</a></Link></li>
          <li><Link href="/見積書2"><a>見積書2</a></Link></li>
          <li><Link href="/見積書3"><a>見積書3</a></Link></li>
          <li><Link href="/見積書4"><a>見積書4</a></Link></li>
        </ul> 
    </div>
  )
}
