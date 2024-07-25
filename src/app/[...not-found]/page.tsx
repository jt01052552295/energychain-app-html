import Link from 'next/link'

const NotFound = () => {
    return (
        <main className="flex h-full flex-col items-center justify-center gap-2">
            <h2 className="text-xl font-semibold">404 Not Found</h2>
            <p>The page you are looking for does not exist. Please check the URL or go back.</p>
            <Link href="/" className="">
                Go Back
            </Link>
        </main>
    )
}

export default NotFound
