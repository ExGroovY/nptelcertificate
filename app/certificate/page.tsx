import Link from "next/link"

export default function Certificate() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <div className="max-w-3xl w-full bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-6">
        <h1 className="text-3xl font-bold text-center mb-6">Course Completion Certificate</h1>

        <div className="mb-8 text-center">
          <p className="text-lg mb-2">This is to certify that</p>
          <p className="text-2xl font-semibold mb-2">Student Name</p>
          <p className="text-lg mb-6">has successfully completed</p>
          <p className="text-xl font-medium mb-2">Course Title</p>
          <p className="text-lg">on May 10, 2025</p>
        </div>

        <div className="flex justify-center mt-10">
          <div className="text-center border-t border-gray-300 pt-2 w-48">
            <p className="font-medium">Instructor Signature</p>
          </div>
        </div>
      </div>

      <Link
        href="/"
        className="px-6 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
