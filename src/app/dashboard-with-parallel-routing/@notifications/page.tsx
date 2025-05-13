import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
    return(
        <>
        <Card>
            <div>Notifications Component v2</div>
            <Link href="/dashboard-with-parallel-routing/archived">Archived</Link>
        </Card>
        </>
    )
}