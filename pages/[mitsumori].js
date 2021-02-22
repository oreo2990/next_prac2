import { useRouter} from "next/router";

export default function mitumori1(){
    const router = useRouter();
    // console.log(router);
    // console.log(router.query);
    return(
        <div>
            <h1>{router.query.mitsumori}の詳細です</h1>
        </div>
    )

}