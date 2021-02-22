import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1>GenMitsu</h1> 
        <h2>見積書一覧</h2>
        <ul>
          <li><Link href="/見積書1"><a>見積書1</a></Link></li>
          <li><Link href="/見積書2"><a>見積書2</a></Link></li>
          <li><Link href="/見積書3"><a>見積書3</a></Link></li>
          <li><Link href="/見積書4"><a>見積書4</a></Link></li>
          <li><Link href="/見積書5"><a>見積書5</a></Link></li>
          <li><Link href="/見積書6"><a>見積書6</a></Link></li>
        </ul> 

        <br/>

       

    </div>
  )
}
