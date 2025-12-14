export const Dashboard = () => {
    return (
        <div className="flex pt-30 flex-col items-center h-[calc(100vh-60px)] font-mono gap-10 bg-gray-50">
            <h1 className="text-blue-950 font-bold text-6xl">Dashboard</h1>
            <div className="p-20 hover:shadow-xl rounded-lg text-orange-700 font-semibold text-2xl transition-shadow">Protected Content</div>
        </div>
    )
}