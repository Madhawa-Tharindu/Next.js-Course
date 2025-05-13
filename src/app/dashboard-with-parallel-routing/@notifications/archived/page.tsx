import Card from "@/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
    return(
        <>
        <Card>
            <div>Archived Notifications Component v2</div>
            <Link href="/dashboard-with-parallel-routing">Default</Link>
        </Card>
        </>
    )
}