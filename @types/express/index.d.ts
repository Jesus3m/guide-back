// import { Request as ExpressRequest } from 'express'

// declare module 'express' {
//     export interface Request extends ExpressRequest {
//         context?: any
//     }
// }

// declare global {
//     namespace Express {
//       export interface Request {
//        context: any
//       }
//     }
//   }

declare namespace Express {
    export interface Request {
        context: any;
    }
}
