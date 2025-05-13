export default function DashboardLayoutV2({
    children,
    notifications,
    UserAnalytics,
    RevenueMetrics,
}: {
        children: React.ReactNode;
        notifications: React.ReactNode;
        UserAnalytics: React.ReactNode;
        RevenueMetrics: React.ReactNode;
}) {
    return(
        <>
        <div>{children}</div>
        <div style={{display: "flex"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
                {/* <div>{notifications}</div> */}
                <div>{UserAnalytics}</div>
                <div>{RevenueMetrics}</div>
            </div>
            <div style={{display: "flex", flex: 1}}>{notifications}</div>
        </div>
        </>
    )
}
