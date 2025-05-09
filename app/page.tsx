export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <a
        href="/certificate.pdf"
        download="course-certificate.pdf"
        className="px-8 py-3 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
      >
        Course Certificate
      </a>
    </div>
  )
}
