import { NextResponse } from "next/server";

const allowedOrigins = "http://localhost:5173";

export function middleware(request: Request) {
  // console.log("middleware");
  // console.log(request.method, "method");
  // console.log(request.url, "url");
  // const origin = request.headers.get("origin");
  // console.log(origin, "origin");

  // if (origin && allowedOrigins !== origin) {
  //   console.log("lllllllllllll");
  //   return new NextResponse(null, {
  //     status: 400,
  //     statusText: "Bad Request",
  //     headers: {
  //       "Content-Type": "text/plain",
  //     },
  //   });
  // }

  return NextResponse.next();
}

// // export const config = {
//   matcher: "/api/auth/login",
// };
