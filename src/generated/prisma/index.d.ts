
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model baggage_ticket
 * 
 */
export type baggage_ticket = $Result.DefaultSelection<Prisma.$baggage_ticketPayload>
/**
 * Model bus
 * 
 */
export type bus = $Result.DefaultSelection<Prisma.$busPayload>
/**
 * Model cashier
 * 
 */
export type cashier = $Result.DefaultSelection<Prisma.$cashierPayload>
/**
 * Model driver
 * 
 */
export type driver = $Result.DefaultSelection<Prisma.$driverPayload>
/**
 * Model passenger_ticket
 * 
 */
export type passenger_ticket = $Result.DefaultSelection<Prisma.$passenger_ticketPayload>
/**
 * Model seat
 * 
 */
export type seat = $Result.DefaultSelection<Prisma.$seatPayload>
/**
 * Model station
 * 
 */
export type station = $Result.DefaultSelection<Prisma.$stationPayload>
/**
 * Model ticket
 * 
 */
export type ticket = $Result.DefaultSelection<Prisma.$ticketPayload>
/**
 * Model trip
 * 
 */
export type trip = $Result.DefaultSelection<Prisma.$tripPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const passenger_ticket_discount: {
  student: 'student',
  pwd: 'pwd',
  senior: 'senior'
};

export type passenger_ticket_discount = (typeof passenger_ticket_discount)[keyof typeof passenger_ticket_discount]


export const user_role: {
  user: 'user',
  admin: 'admin',
  cashier: 'cashier',
  driver: 'driver'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const ticket_ticket_type: {
  passenger: 'passenger',
  baggage: 'baggage'
};

export type ticket_ticket_type = (typeof ticket_ticket_type)[keyof typeof ticket_ticket_type]


export const trip_status: {
  boarding: 'boarding',
  transit: 'transit',
  complete: 'complete'
};

export type trip_status = (typeof trip_status)[keyof typeof trip_status]


export const seat_status: {
  available: 'available',
  occupied: 'occupied'
};

export type seat_status = (typeof seat_status)[keyof typeof seat_status]

}

export type passenger_ticket_discount = $Enums.passenger_ticket_discount

export const passenger_ticket_discount: typeof $Enums.passenger_ticket_discount

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type ticket_ticket_type = $Enums.ticket_ticket_type

export const ticket_ticket_type: typeof $Enums.ticket_ticket_type

export type trip_status = $Enums.trip_status

export const trip_status: typeof $Enums.trip_status

export type seat_status = $Enums.seat_status

export const seat_status: typeof $Enums.seat_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Baggage_tickets
 * const baggage_tickets = await prisma.baggage_ticket.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Baggage_tickets
   * const baggage_tickets = await prisma.baggage_ticket.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.baggage_ticket`: Exposes CRUD operations for the **baggage_ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Baggage_tickets
    * const baggage_tickets = await prisma.baggage_ticket.findMany()
    * ```
    */
  get baggage_ticket(): Prisma.baggage_ticketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bus`: Exposes CRUD operations for the **bus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buses
    * const buses = await prisma.bus.findMany()
    * ```
    */
  get bus(): Prisma.busDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cashier`: Exposes CRUD operations for the **cashier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cashiers
    * const cashiers = await prisma.cashier.findMany()
    * ```
    */
  get cashier(): Prisma.cashierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.driverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passenger_ticket`: Exposes CRUD operations for the **passenger_ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passenger_tickets
    * const passenger_tickets = await prisma.passenger_ticket.findMany()
    * ```
    */
  get passenger_ticket(): Prisma.passenger_ticketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seat`: Exposes CRUD operations for the **seat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seat.findMany()
    * ```
    */
  get seat(): Prisma.seatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.station`: Exposes CRUD operations for the **station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stations
    * const stations = await prisma.station.findMany()
    * ```
    */
  get station(): Prisma.stationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.ticketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.tripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    baggage_ticket: 'baggage_ticket',
    bus: 'bus',
    cashier: 'cashier',
    driver: 'driver',
    passenger_ticket: 'passenger_ticket',
    seat: 'seat',
    station: 'station',
    ticket: 'ticket',
    trip: 'trip',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "baggage_ticket" | "bus" | "cashier" | "driver" | "passenger_ticket" | "seat" | "station" | "ticket" | "trip" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      baggage_ticket: {
        payload: Prisma.$baggage_ticketPayload<ExtArgs>
        fields: Prisma.baggage_ticketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.baggage_ticketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baggage_ticketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.baggage_ticketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baggage_ticketPayload>
          }
          findFirst: {
            args: Prisma.baggage_ticketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baggage_ticketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.baggage_ticketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baggage_ticketPayload>
          }
          findMany: {
            args: Prisma.baggage_ticketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baggage_ticketPayload>[]
          }
          create: {
            args: Prisma.baggage_ticketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baggage_ticketPayload>
          }
          createMany: {
            args: Prisma.baggage_ticketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.baggage_ticketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baggage_ticketPayload>
          }
          update: {
            args: Prisma.baggage_ticketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baggage_ticketPayload>
          }
          deleteMany: {
            args: Prisma.baggage_ticketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.baggage_ticketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.baggage_ticketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$baggage_ticketPayload>
          }
          aggregate: {
            args: Prisma.Baggage_ticketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBaggage_ticket>
          }
          groupBy: {
            args: Prisma.baggage_ticketGroupByArgs<ExtArgs>
            result: $Utils.Optional<Baggage_ticketGroupByOutputType>[]
          }
          count: {
            args: Prisma.baggage_ticketCountArgs<ExtArgs>
            result: $Utils.Optional<Baggage_ticketCountAggregateOutputType> | number
          }
        }
      }
      bus: {
        payload: Prisma.$busPayload<ExtArgs>
        fields: Prisma.busFieldRefs
        operations: {
          findUnique: {
            args: Prisma.busFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$busPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.busFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$busPayload>
          }
          findFirst: {
            args: Prisma.busFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$busPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.busFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$busPayload>
          }
          findMany: {
            args: Prisma.busFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$busPayload>[]
          }
          create: {
            args: Prisma.busCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$busPayload>
          }
          createMany: {
            args: Prisma.busCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.busDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$busPayload>
          }
          update: {
            args: Prisma.busUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$busPayload>
          }
          deleteMany: {
            args: Prisma.busDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.busUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.busUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$busPayload>
          }
          aggregate: {
            args: Prisma.BusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBus>
          }
          groupBy: {
            args: Prisma.busGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusGroupByOutputType>[]
          }
          count: {
            args: Prisma.busCountArgs<ExtArgs>
            result: $Utils.Optional<BusCountAggregateOutputType> | number
          }
        }
      }
      cashier: {
        payload: Prisma.$cashierPayload<ExtArgs>
        fields: Prisma.cashierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cashierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cashierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashierPayload>
          }
          findFirst: {
            args: Prisma.cashierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cashierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashierPayload>
          }
          findMany: {
            args: Prisma.cashierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashierPayload>[]
          }
          create: {
            args: Prisma.cashierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashierPayload>
          }
          createMany: {
            args: Prisma.cashierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.cashierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashierPayload>
          }
          update: {
            args: Prisma.cashierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashierPayload>
          }
          deleteMany: {
            args: Prisma.cashierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cashierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cashierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cashierPayload>
          }
          aggregate: {
            args: Prisma.CashierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCashier>
          }
          groupBy: {
            args: Prisma.cashierGroupByArgs<ExtArgs>
            result: $Utils.Optional<CashierGroupByOutputType>[]
          }
          count: {
            args: Prisma.cashierCountArgs<ExtArgs>
            result: $Utils.Optional<CashierCountAggregateOutputType> | number
          }
        }
      }
      driver: {
        payload: Prisma.$driverPayload<ExtArgs>
        fields: Prisma.driverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.driverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.driverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          findFirst: {
            args: Prisma.driverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.driverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          findMany: {
            args: Prisma.driverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>[]
          }
          create: {
            args: Prisma.driverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          createMany: {
            args: Prisma.driverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.driverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          update: {
            args: Prisma.driverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          deleteMany: {
            args: Prisma.driverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.driverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.driverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.driverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.driverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      passenger_ticket: {
        payload: Prisma.$passenger_ticketPayload<ExtArgs>
        fields: Prisma.passenger_ticketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.passenger_ticketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passenger_ticketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.passenger_ticketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passenger_ticketPayload>
          }
          findFirst: {
            args: Prisma.passenger_ticketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passenger_ticketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.passenger_ticketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passenger_ticketPayload>
          }
          findMany: {
            args: Prisma.passenger_ticketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passenger_ticketPayload>[]
          }
          create: {
            args: Prisma.passenger_ticketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passenger_ticketPayload>
          }
          createMany: {
            args: Prisma.passenger_ticketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.passenger_ticketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passenger_ticketPayload>
          }
          update: {
            args: Prisma.passenger_ticketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passenger_ticketPayload>
          }
          deleteMany: {
            args: Prisma.passenger_ticketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.passenger_ticketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.passenger_ticketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$passenger_ticketPayload>
          }
          aggregate: {
            args: Prisma.Passenger_ticketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassenger_ticket>
          }
          groupBy: {
            args: Prisma.passenger_ticketGroupByArgs<ExtArgs>
            result: $Utils.Optional<Passenger_ticketGroupByOutputType>[]
          }
          count: {
            args: Prisma.passenger_ticketCountArgs<ExtArgs>
            result: $Utils.Optional<Passenger_ticketCountAggregateOutputType> | number
          }
        }
      }
      seat: {
        payload: Prisma.$seatPayload<ExtArgs>
        fields: Prisma.seatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.seatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.seatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          findFirst: {
            args: Prisma.seatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.seatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          findMany: {
            args: Prisma.seatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>[]
          }
          create: {
            args: Prisma.seatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          createMany: {
            args: Prisma.seatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.seatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          update: {
            args: Prisma.seatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          deleteMany: {
            args: Prisma.seatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.seatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.seatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$seatPayload>
          }
          aggregate: {
            args: Prisma.SeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat>
          }
          groupBy: {
            args: Prisma.seatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.seatCountArgs<ExtArgs>
            result: $Utils.Optional<SeatCountAggregateOutputType> | number
          }
        }
      }
      station: {
        payload: Prisma.$stationPayload<ExtArgs>
        fields: Prisma.stationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          findFirst: {
            args: Prisma.stationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          findMany: {
            args: Prisma.stationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stationPayload>[]
          }
          create: {
            args: Prisma.stationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          createMany: {
            args: Prisma.stationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.stationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          update: {
            args: Prisma.stationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          deleteMany: {
            args: Prisma.stationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.stationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          aggregate: {
            args: Prisma.StationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStation>
          }
          groupBy: {
            args: Prisma.stationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StationGroupByOutputType>[]
          }
          count: {
            args: Prisma.stationCountArgs<ExtArgs>
            result: $Utils.Optional<StationCountAggregateOutputType> | number
          }
        }
      }
      ticket: {
        payload: Prisma.$ticketPayload<ExtArgs>
        fields: Prisma.ticketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ticketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ticketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findFirst: {
            args: Prisma.ticketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ticketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          findMany: {
            args: Prisma.ticketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>[]
          }
          create: {
            args: Prisma.ticketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          createMany: {
            args: Prisma.ticketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ticketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          update: {
            args: Prisma.ticketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          deleteMany: {
            args: Prisma.ticketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ticketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ticketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ticketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.ticketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.ticketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      trip: {
        payload: Prisma.$tripPayload<ExtArgs>
        fields: Prisma.tripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          findFirst: {
            args: Prisma.tripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          findMany: {
            args: Prisma.tripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>[]
          }
          create: {
            args: Prisma.tripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          createMany: {
            args: Prisma.tripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          update: {
            args: Prisma.tripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          deleteMany: {
            args: Prisma.tripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.tripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.tripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    baggage_ticket?: baggage_ticketOmit
    bus?: busOmit
    cashier?: cashierOmit
    driver?: driverOmit
    passenger_ticket?: passenger_ticketOmit
    seat?: seatOmit
    station?: stationOmit
    ticket?: ticketOmit
    trip?: tripOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BusCountOutputType
   */

  export type BusCountOutputType = {
    seat: number
    trip: number
  }

  export type BusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seat?: boolean | BusCountOutputTypeCountSeatArgs
    trip?: boolean | BusCountOutputTypeCountTripArgs
  }

  // Custom InputTypes
  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusCountOutputType
     */
    select?: BusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountSeatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seatWhereInput
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountTripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripWhereInput
  }


  /**
   * Count Type CashierCountOutputType
   */

  export type CashierCountOutputType = {
    ticket: number
  }

  export type CashierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | CashierCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * CashierCountOutputType without action
   */
  export type CashierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CashierCountOutputType
     */
    select?: CashierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CashierCountOutputType without action
   */
  export type CashierCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    trip: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trip?: boolean | DriverCountOutputTypeCountTripArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountTripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripWhereInput
  }


  /**
   * Count Type SeatCountOutputType
   */

  export type SeatCountOutputType = {
    ticket: number
  }

  export type SeatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | SeatCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatCountOutputType
     */
    select?: SeatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }


  /**
   * Count Type StationCountOutputType
   */

  export type StationCountOutputType = {
    bus: number
    cashier: number
    trip_trip_dest_station_idTostation: number
    trip_trip_src_station_idTostation: number
  }

  export type StationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | StationCountOutputTypeCountBusArgs
    cashier?: boolean | StationCountOutputTypeCountCashierArgs
    trip_trip_dest_station_idTostation?: boolean | StationCountOutputTypeCountTrip_trip_dest_station_idTostationArgs
    trip_trip_src_station_idTostation?: boolean | StationCountOutputTypeCountTrip_trip_src_station_idTostationArgs
  }

  // Custom InputTypes
  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationCountOutputType
     */
    select?: StationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountBusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: busWhereInput
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountCashierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cashierWhereInput
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountTrip_trip_dest_station_idTostationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripWhereInput
  }

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountTrip_trip_src_station_idTostationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    ticket: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TripCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cashier: number
    driver: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashier?: boolean | UserCountOutputTypeCountCashierArgs
    driver?: boolean | UserCountOutputTypeCountDriverArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCashierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cashierWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDriverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: driverWhereInput
  }


  /**
   * Models
   */

  /**
   * Model baggage_ticket
   */

  export type AggregateBaggage_ticket = {
    _count: Baggage_ticketCountAggregateOutputType | null
    _avg: Baggage_ticketAvgAggregateOutputType | null
    _sum: Baggage_ticketSumAggregateOutputType | null
    _min: Baggage_ticketMinAggregateOutputType | null
    _max: Baggage_ticketMaxAggregateOutputType | null
  }

  export type Baggage_ticketAvgAggregateOutputType = {
    id: number | null
    ticket_id: number | null
  }

  export type Baggage_ticketSumAggregateOutputType = {
    id: number | null
    ticket_id: number | null
  }

  export type Baggage_ticketMinAggregateOutputType = {
    id: number | null
    sender_no: string | null
    dispatcher_no: string | null
    sender_name: string | null
    receiver_name: string | null
    item: string | null
    ticket_id: number | null
  }

  export type Baggage_ticketMaxAggregateOutputType = {
    id: number | null
    sender_no: string | null
    dispatcher_no: string | null
    sender_name: string | null
    receiver_name: string | null
    item: string | null
    ticket_id: number | null
  }

  export type Baggage_ticketCountAggregateOutputType = {
    id: number
    sender_no: number
    dispatcher_no: number
    sender_name: number
    receiver_name: number
    item: number
    ticket_id: number
    _all: number
  }


  export type Baggage_ticketAvgAggregateInputType = {
    id?: true
    ticket_id?: true
  }

  export type Baggage_ticketSumAggregateInputType = {
    id?: true
    ticket_id?: true
  }

  export type Baggage_ticketMinAggregateInputType = {
    id?: true
    sender_no?: true
    dispatcher_no?: true
    sender_name?: true
    receiver_name?: true
    item?: true
    ticket_id?: true
  }

  export type Baggage_ticketMaxAggregateInputType = {
    id?: true
    sender_no?: true
    dispatcher_no?: true
    sender_name?: true
    receiver_name?: true
    item?: true
    ticket_id?: true
  }

  export type Baggage_ticketCountAggregateInputType = {
    id?: true
    sender_no?: true
    dispatcher_no?: true
    sender_name?: true
    receiver_name?: true
    item?: true
    ticket_id?: true
    _all?: true
  }

  export type Baggage_ticketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which baggage_ticket to aggregate.
     */
    where?: baggage_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of baggage_tickets to fetch.
     */
    orderBy?: baggage_ticketOrderByWithRelationInput | baggage_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: baggage_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` baggage_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` baggage_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned baggage_tickets
    **/
    _count?: true | Baggage_ticketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Baggage_ticketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Baggage_ticketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Baggage_ticketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Baggage_ticketMaxAggregateInputType
  }

  export type GetBaggage_ticketAggregateType<T extends Baggage_ticketAggregateArgs> = {
        [P in keyof T & keyof AggregateBaggage_ticket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBaggage_ticket[P]>
      : GetScalarType<T[P], AggregateBaggage_ticket[P]>
  }




  export type baggage_ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: baggage_ticketWhereInput
    orderBy?: baggage_ticketOrderByWithAggregationInput | baggage_ticketOrderByWithAggregationInput[]
    by: Baggage_ticketScalarFieldEnum[] | Baggage_ticketScalarFieldEnum
    having?: baggage_ticketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Baggage_ticketCountAggregateInputType | true
    _avg?: Baggage_ticketAvgAggregateInputType
    _sum?: Baggage_ticketSumAggregateInputType
    _min?: Baggage_ticketMinAggregateInputType
    _max?: Baggage_ticketMaxAggregateInputType
  }

  export type Baggage_ticketGroupByOutputType = {
    id: number
    sender_no: string | null
    dispatcher_no: string | null
    sender_name: string | null
    receiver_name: string | null
    item: string
    ticket_id: number
    _count: Baggage_ticketCountAggregateOutputType | null
    _avg: Baggage_ticketAvgAggregateOutputType | null
    _sum: Baggage_ticketSumAggregateOutputType | null
    _min: Baggage_ticketMinAggregateOutputType | null
    _max: Baggage_ticketMaxAggregateOutputType | null
  }

  type GetBaggage_ticketGroupByPayload<T extends baggage_ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Baggage_ticketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Baggage_ticketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Baggage_ticketGroupByOutputType[P]>
            : GetScalarType<T[P], Baggage_ticketGroupByOutputType[P]>
        }
      >
    >


  export type baggage_ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender_no?: boolean
    dispatcher_no?: boolean
    sender_name?: boolean
    receiver_name?: boolean
    item?: boolean
    ticket_id?: boolean
    ticket?: boolean | ticketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["baggage_ticket"]>



  export type baggage_ticketSelectScalar = {
    id?: boolean
    sender_no?: boolean
    dispatcher_no?: boolean
    sender_name?: boolean
    receiver_name?: boolean
    item?: boolean
    ticket_id?: boolean
  }

  export type baggage_ticketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sender_no" | "dispatcher_no" | "sender_name" | "receiver_name" | "item" | "ticket_id", ExtArgs["result"]["baggage_ticket"]>
  export type baggage_ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | ticketDefaultArgs<ExtArgs>
  }

  export type $baggage_ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "baggage_ticket"
    objects: {
      ticket: Prisma.$ticketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sender_no: string | null
      dispatcher_no: string | null
      sender_name: string | null
      receiver_name: string | null
      item: string
      ticket_id: number
    }, ExtArgs["result"]["baggage_ticket"]>
    composites: {}
  }

  type baggage_ticketGetPayload<S extends boolean | null | undefined | baggage_ticketDefaultArgs> = $Result.GetResult<Prisma.$baggage_ticketPayload, S>

  type baggage_ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<baggage_ticketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Baggage_ticketCountAggregateInputType | true
    }

  export interface baggage_ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['baggage_ticket'], meta: { name: 'baggage_ticket' } }
    /**
     * Find zero or one Baggage_ticket that matches the filter.
     * @param {baggage_ticketFindUniqueArgs} args - Arguments to find a Baggage_ticket
     * @example
     * // Get one Baggage_ticket
     * const baggage_ticket = await prisma.baggage_ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends baggage_ticketFindUniqueArgs>(args: SelectSubset<T, baggage_ticketFindUniqueArgs<ExtArgs>>): Prisma__baggage_ticketClient<$Result.GetResult<Prisma.$baggage_ticketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Baggage_ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {baggage_ticketFindUniqueOrThrowArgs} args - Arguments to find a Baggage_ticket
     * @example
     * // Get one Baggage_ticket
     * const baggage_ticket = await prisma.baggage_ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends baggage_ticketFindUniqueOrThrowArgs>(args: SelectSubset<T, baggage_ticketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__baggage_ticketClient<$Result.GetResult<Prisma.$baggage_ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baggage_ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baggage_ticketFindFirstArgs} args - Arguments to find a Baggage_ticket
     * @example
     * // Get one Baggage_ticket
     * const baggage_ticket = await prisma.baggage_ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends baggage_ticketFindFirstArgs>(args?: SelectSubset<T, baggage_ticketFindFirstArgs<ExtArgs>>): Prisma__baggage_ticketClient<$Result.GetResult<Prisma.$baggage_ticketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Baggage_ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baggage_ticketFindFirstOrThrowArgs} args - Arguments to find a Baggage_ticket
     * @example
     * // Get one Baggage_ticket
     * const baggage_ticket = await prisma.baggage_ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends baggage_ticketFindFirstOrThrowArgs>(args?: SelectSubset<T, baggage_ticketFindFirstOrThrowArgs<ExtArgs>>): Prisma__baggage_ticketClient<$Result.GetResult<Prisma.$baggage_ticketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Baggage_tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baggage_ticketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Baggage_tickets
     * const baggage_tickets = await prisma.baggage_ticket.findMany()
     * 
     * // Get first 10 Baggage_tickets
     * const baggage_tickets = await prisma.baggage_ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baggage_ticketWithIdOnly = await prisma.baggage_ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends baggage_ticketFindManyArgs>(args?: SelectSubset<T, baggage_ticketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$baggage_ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Baggage_ticket.
     * @param {baggage_ticketCreateArgs} args - Arguments to create a Baggage_ticket.
     * @example
     * // Create one Baggage_ticket
     * const Baggage_ticket = await prisma.baggage_ticket.create({
     *   data: {
     *     // ... data to create a Baggage_ticket
     *   }
     * })
     * 
     */
    create<T extends baggage_ticketCreateArgs>(args: SelectSubset<T, baggage_ticketCreateArgs<ExtArgs>>): Prisma__baggage_ticketClient<$Result.GetResult<Prisma.$baggage_ticketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Baggage_tickets.
     * @param {baggage_ticketCreateManyArgs} args - Arguments to create many Baggage_tickets.
     * @example
     * // Create many Baggage_tickets
     * const baggage_ticket = await prisma.baggage_ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends baggage_ticketCreateManyArgs>(args?: SelectSubset<T, baggage_ticketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Baggage_ticket.
     * @param {baggage_ticketDeleteArgs} args - Arguments to delete one Baggage_ticket.
     * @example
     * // Delete one Baggage_ticket
     * const Baggage_ticket = await prisma.baggage_ticket.delete({
     *   where: {
     *     // ... filter to delete one Baggage_ticket
     *   }
     * })
     * 
     */
    delete<T extends baggage_ticketDeleteArgs>(args: SelectSubset<T, baggage_ticketDeleteArgs<ExtArgs>>): Prisma__baggage_ticketClient<$Result.GetResult<Prisma.$baggage_ticketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Baggage_ticket.
     * @param {baggage_ticketUpdateArgs} args - Arguments to update one Baggage_ticket.
     * @example
     * // Update one Baggage_ticket
     * const baggage_ticket = await prisma.baggage_ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends baggage_ticketUpdateArgs>(args: SelectSubset<T, baggage_ticketUpdateArgs<ExtArgs>>): Prisma__baggage_ticketClient<$Result.GetResult<Prisma.$baggage_ticketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Baggage_tickets.
     * @param {baggage_ticketDeleteManyArgs} args - Arguments to filter Baggage_tickets to delete.
     * @example
     * // Delete a few Baggage_tickets
     * const { count } = await prisma.baggage_ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends baggage_ticketDeleteManyArgs>(args?: SelectSubset<T, baggage_ticketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Baggage_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baggage_ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Baggage_tickets
     * const baggage_ticket = await prisma.baggage_ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends baggage_ticketUpdateManyArgs>(args: SelectSubset<T, baggage_ticketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Baggage_ticket.
     * @param {baggage_ticketUpsertArgs} args - Arguments to update or create a Baggage_ticket.
     * @example
     * // Update or create a Baggage_ticket
     * const baggage_ticket = await prisma.baggage_ticket.upsert({
     *   create: {
     *     // ... data to create a Baggage_ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Baggage_ticket we want to update
     *   }
     * })
     */
    upsert<T extends baggage_ticketUpsertArgs>(args: SelectSubset<T, baggage_ticketUpsertArgs<ExtArgs>>): Prisma__baggage_ticketClient<$Result.GetResult<Prisma.$baggage_ticketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Baggage_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baggage_ticketCountArgs} args - Arguments to filter Baggage_tickets to count.
     * @example
     * // Count the number of Baggage_tickets
     * const count = await prisma.baggage_ticket.count({
     *   where: {
     *     // ... the filter for the Baggage_tickets we want to count
     *   }
     * })
    **/
    count<T extends baggage_ticketCountArgs>(
      args?: Subset<T, baggage_ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Baggage_ticketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Baggage_ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Baggage_ticketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Baggage_ticketAggregateArgs>(args: Subset<T, Baggage_ticketAggregateArgs>): Prisma.PrismaPromise<GetBaggage_ticketAggregateType<T>>

    /**
     * Group by Baggage_ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {baggage_ticketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends baggage_ticketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: baggage_ticketGroupByArgs['orderBy'] }
        : { orderBy?: baggage_ticketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, baggage_ticketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaggage_ticketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the baggage_ticket model
   */
  readonly fields: baggage_ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for baggage_ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__baggage_ticketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends ticketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticketDefaultArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the baggage_ticket model
   */
  interface baggage_ticketFieldRefs {
    readonly id: FieldRef<"baggage_ticket", 'Int'>
    readonly sender_no: FieldRef<"baggage_ticket", 'String'>
    readonly dispatcher_no: FieldRef<"baggage_ticket", 'String'>
    readonly sender_name: FieldRef<"baggage_ticket", 'String'>
    readonly receiver_name: FieldRef<"baggage_ticket", 'String'>
    readonly item: FieldRef<"baggage_ticket", 'String'>
    readonly ticket_id: FieldRef<"baggage_ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * baggage_ticket findUnique
   */
  export type baggage_ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baggage_ticket
     */
    select?: baggage_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the baggage_ticket
     */
    omit?: baggage_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baggage_ticketInclude<ExtArgs> | null
    /**
     * Filter, which baggage_ticket to fetch.
     */
    where: baggage_ticketWhereUniqueInput
  }

  /**
   * baggage_ticket findUniqueOrThrow
   */
  export type baggage_ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baggage_ticket
     */
    select?: baggage_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the baggage_ticket
     */
    omit?: baggage_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baggage_ticketInclude<ExtArgs> | null
    /**
     * Filter, which baggage_ticket to fetch.
     */
    where: baggage_ticketWhereUniqueInput
  }

  /**
   * baggage_ticket findFirst
   */
  export type baggage_ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baggage_ticket
     */
    select?: baggage_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the baggage_ticket
     */
    omit?: baggage_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baggage_ticketInclude<ExtArgs> | null
    /**
     * Filter, which baggage_ticket to fetch.
     */
    where?: baggage_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of baggage_tickets to fetch.
     */
    orderBy?: baggage_ticketOrderByWithRelationInput | baggage_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for baggage_tickets.
     */
    cursor?: baggage_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` baggage_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` baggage_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of baggage_tickets.
     */
    distinct?: Baggage_ticketScalarFieldEnum | Baggage_ticketScalarFieldEnum[]
  }

  /**
   * baggage_ticket findFirstOrThrow
   */
  export type baggage_ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baggage_ticket
     */
    select?: baggage_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the baggage_ticket
     */
    omit?: baggage_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baggage_ticketInclude<ExtArgs> | null
    /**
     * Filter, which baggage_ticket to fetch.
     */
    where?: baggage_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of baggage_tickets to fetch.
     */
    orderBy?: baggage_ticketOrderByWithRelationInput | baggage_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for baggage_tickets.
     */
    cursor?: baggage_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` baggage_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` baggage_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of baggage_tickets.
     */
    distinct?: Baggage_ticketScalarFieldEnum | Baggage_ticketScalarFieldEnum[]
  }

  /**
   * baggage_ticket findMany
   */
  export type baggage_ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baggage_ticket
     */
    select?: baggage_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the baggage_ticket
     */
    omit?: baggage_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baggage_ticketInclude<ExtArgs> | null
    /**
     * Filter, which baggage_tickets to fetch.
     */
    where?: baggage_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of baggage_tickets to fetch.
     */
    orderBy?: baggage_ticketOrderByWithRelationInput | baggage_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing baggage_tickets.
     */
    cursor?: baggage_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` baggage_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` baggage_tickets.
     */
    skip?: number
    distinct?: Baggage_ticketScalarFieldEnum | Baggage_ticketScalarFieldEnum[]
  }

  /**
   * baggage_ticket create
   */
  export type baggage_ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baggage_ticket
     */
    select?: baggage_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the baggage_ticket
     */
    omit?: baggage_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baggage_ticketInclude<ExtArgs> | null
    /**
     * The data needed to create a baggage_ticket.
     */
    data: XOR<baggage_ticketCreateInput, baggage_ticketUncheckedCreateInput>
  }

  /**
   * baggage_ticket createMany
   */
  export type baggage_ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many baggage_tickets.
     */
    data: baggage_ticketCreateManyInput | baggage_ticketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * baggage_ticket update
   */
  export type baggage_ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baggage_ticket
     */
    select?: baggage_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the baggage_ticket
     */
    omit?: baggage_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baggage_ticketInclude<ExtArgs> | null
    /**
     * The data needed to update a baggage_ticket.
     */
    data: XOR<baggage_ticketUpdateInput, baggage_ticketUncheckedUpdateInput>
    /**
     * Choose, which baggage_ticket to update.
     */
    where: baggage_ticketWhereUniqueInput
  }

  /**
   * baggage_ticket updateMany
   */
  export type baggage_ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update baggage_tickets.
     */
    data: XOR<baggage_ticketUpdateManyMutationInput, baggage_ticketUncheckedUpdateManyInput>
    /**
     * Filter which baggage_tickets to update
     */
    where?: baggage_ticketWhereInput
    /**
     * Limit how many baggage_tickets to update.
     */
    limit?: number
  }

  /**
   * baggage_ticket upsert
   */
  export type baggage_ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baggage_ticket
     */
    select?: baggage_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the baggage_ticket
     */
    omit?: baggage_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baggage_ticketInclude<ExtArgs> | null
    /**
     * The filter to search for the baggage_ticket to update in case it exists.
     */
    where: baggage_ticketWhereUniqueInput
    /**
     * In case the baggage_ticket found by the `where` argument doesn't exist, create a new baggage_ticket with this data.
     */
    create: XOR<baggage_ticketCreateInput, baggage_ticketUncheckedCreateInput>
    /**
     * In case the baggage_ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<baggage_ticketUpdateInput, baggage_ticketUncheckedUpdateInput>
  }

  /**
   * baggage_ticket delete
   */
  export type baggage_ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baggage_ticket
     */
    select?: baggage_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the baggage_ticket
     */
    omit?: baggage_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baggage_ticketInclude<ExtArgs> | null
    /**
     * Filter which baggage_ticket to delete.
     */
    where: baggage_ticketWhereUniqueInput
  }

  /**
   * baggage_ticket deleteMany
   */
  export type baggage_ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which baggage_tickets to delete
     */
    where?: baggage_ticketWhereInput
    /**
     * Limit how many baggage_tickets to delete.
     */
    limit?: number
  }

  /**
   * baggage_ticket without action
   */
  export type baggage_ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baggage_ticket
     */
    select?: baggage_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the baggage_ticket
     */
    omit?: baggage_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baggage_ticketInclude<ExtArgs> | null
  }


  /**
   * Model bus
   */

  export type AggregateBus = {
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  export type BusAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
    station_id: number | null
  }

  export type BusSumAggregateOutputType = {
    id: number | null
    capacity: number | null
    station_id: number | null
  }

  export type BusMinAggregateOutputType = {
    id: number | null
    plate_number: string | null
    capacity: number | null
    station_id: number | null
  }

  export type BusMaxAggregateOutputType = {
    id: number | null
    plate_number: string | null
    capacity: number | null
    station_id: number | null
  }

  export type BusCountAggregateOutputType = {
    id: number
    plate_number: number
    capacity: number
    station_id: number
    _all: number
  }


  export type BusAvgAggregateInputType = {
    id?: true
    capacity?: true
    station_id?: true
  }

  export type BusSumAggregateInputType = {
    id?: true
    capacity?: true
    station_id?: true
  }

  export type BusMinAggregateInputType = {
    id?: true
    plate_number?: true
    capacity?: true
    station_id?: true
  }

  export type BusMaxAggregateInputType = {
    id?: true
    plate_number?: true
    capacity?: true
    station_id?: true
  }

  export type BusCountAggregateInputType = {
    id?: true
    plate_number?: true
    capacity?: true
    station_id?: true
    _all?: true
  }

  export type BusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bus to aggregate.
     */
    where?: busWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buses to fetch.
     */
    orderBy?: busOrderByWithRelationInput | busOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: busWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned buses
    **/
    _count?: true | BusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusMaxAggregateInputType
  }

  export type GetBusAggregateType<T extends BusAggregateArgs> = {
        [P in keyof T & keyof AggregateBus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBus[P]>
      : GetScalarType<T[P], AggregateBus[P]>
  }




  export type busGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: busWhereInput
    orderBy?: busOrderByWithAggregationInput | busOrderByWithAggregationInput[]
    by: BusScalarFieldEnum[] | BusScalarFieldEnum
    having?: busScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusCountAggregateInputType | true
    _avg?: BusAvgAggregateInputType
    _sum?: BusSumAggregateInputType
    _min?: BusMinAggregateInputType
    _max?: BusMaxAggregateInputType
  }

  export type BusGroupByOutputType = {
    id: number
    plate_number: string
    capacity: number
    station_id: number
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  type GetBusGroupByPayload<T extends busGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusGroupByOutputType[P]>
            : GetScalarType<T[P], BusGroupByOutputType[P]>
        }
      >
    >


  export type busSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate_number?: boolean
    capacity?: boolean
    station_id?: boolean
    station?: boolean | stationDefaultArgs<ExtArgs>
    seat?: boolean | bus$seatArgs<ExtArgs>
    trip?: boolean | bus$tripArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>



  export type busSelectScalar = {
    id?: boolean
    plate_number?: boolean
    capacity?: boolean
    station_id?: boolean
  }

  export type busOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plate_number" | "capacity" | "station_id", ExtArgs["result"]["bus"]>
  export type busInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | stationDefaultArgs<ExtArgs>
    seat?: boolean | bus$seatArgs<ExtArgs>
    trip?: boolean | bus$tripArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $busPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bus"
    objects: {
      station: Prisma.$stationPayload<ExtArgs>
      seat: Prisma.$seatPayload<ExtArgs>[]
      trip: Prisma.$tripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      plate_number: string
      capacity: number
      station_id: number
    }, ExtArgs["result"]["bus"]>
    composites: {}
  }

  type busGetPayload<S extends boolean | null | undefined | busDefaultArgs> = $Result.GetResult<Prisma.$busPayload, S>

  type busCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<busFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusCountAggregateInputType | true
    }

  export interface busDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bus'], meta: { name: 'bus' } }
    /**
     * Find zero or one Bus that matches the filter.
     * @param {busFindUniqueArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends busFindUniqueArgs>(args: SelectSubset<T, busFindUniqueArgs<ExtArgs>>): Prisma__busClient<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {busFindUniqueOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends busFindUniqueOrThrowArgs>(args: SelectSubset<T, busFindUniqueOrThrowArgs<ExtArgs>>): Prisma__busClient<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {busFindFirstArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends busFindFirstArgs>(args?: SelectSubset<T, busFindFirstArgs<ExtArgs>>): Prisma__busClient<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {busFindFirstOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends busFindFirstOrThrowArgs>(args?: SelectSubset<T, busFindFirstOrThrowArgs<ExtArgs>>): Prisma__busClient<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {busFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buses
     * const buses = await prisma.bus.findMany()
     * 
     * // Get first 10 Buses
     * const buses = await prisma.bus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busWithIdOnly = await prisma.bus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends busFindManyArgs>(args?: SelectSubset<T, busFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bus.
     * @param {busCreateArgs} args - Arguments to create a Bus.
     * @example
     * // Create one Bus
     * const Bus = await prisma.bus.create({
     *   data: {
     *     // ... data to create a Bus
     *   }
     * })
     * 
     */
    create<T extends busCreateArgs>(args: SelectSubset<T, busCreateArgs<ExtArgs>>): Prisma__busClient<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buses.
     * @param {busCreateManyArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends busCreateManyArgs>(args?: SelectSubset<T, busCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bus.
     * @param {busDeleteArgs} args - Arguments to delete one Bus.
     * @example
     * // Delete one Bus
     * const Bus = await prisma.bus.delete({
     *   where: {
     *     // ... filter to delete one Bus
     *   }
     * })
     * 
     */
    delete<T extends busDeleteArgs>(args: SelectSubset<T, busDeleteArgs<ExtArgs>>): Prisma__busClient<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bus.
     * @param {busUpdateArgs} args - Arguments to update one Bus.
     * @example
     * // Update one Bus
     * const bus = await prisma.bus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends busUpdateArgs>(args: SelectSubset<T, busUpdateArgs<ExtArgs>>): Prisma__busClient<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buses.
     * @param {busDeleteManyArgs} args - Arguments to filter Buses to delete.
     * @example
     * // Delete a few Buses
     * const { count } = await prisma.bus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends busDeleteManyArgs>(args?: SelectSubset<T, busDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {busUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends busUpdateManyArgs>(args: SelectSubset<T, busUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bus.
     * @param {busUpsertArgs} args - Arguments to update or create a Bus.
     * @example
     * // Update or create a Bus
     * const bus = await prisma.bus.upsert({
     *   create: {
     *     // ... data to create a Bus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bus we want to update
     *   }
     * })
     */
    upsert<T extends busUpsertArgs>(args: SelectSubset<T, busUpsertArgs<ExtArgs>>): Prisma__busClient<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {busCountArgs} args - Arguments to filter Buses to count.
     * @example
     * // Count the number of Buses
     * const count = await prisma.bus.count({
     *   where: {
     *     // ... the filter for the Buses we want to count
     *   }
     * })
    **/
    count<T extends busCountArgs>(
      args?: Subset<T, busCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusAggregateArgs>(args: Subset<T, BusAggregateArgs>): Prisma.PrismaPromise<GetBusAggregateType<T>>

    /**
     * Group by Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {busGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends busGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: busGroupByArgs['orderBy'] }
        : { orderBy?: busGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, busGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bus model
   */
  readonly fields: busFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__busClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    station<T extends stationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stationDefaultArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends bus$seatArgs<ExtArgs> = {}>(args?: Subset<T, bus$seatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trip<T extends bus$tripArgs<ExtArgs> = {}>(args?: Subset<T, bus$tripArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the bus model
   */
  interface busFieldRefs {
    readonly id: FieldRef<"bus", 'Int'>
    readonly plate_number: FieldRef<"bus", 'String'>
    readonly capacity: FieldRef<"bus", 'Int'>
    readonly station_id: FieldRef<"bus", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * bus findUnique
   */
  export type busFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bus
     */
    select?: busSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bus
     */
    omit?: busOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: busInclude<ExtArgs> | null
    /**
     * Filter, which bus to fetch.
     */
    where: busWhereUniqueInput
  }

  /**
   * bus findUniqueOrThrow
   */
  export type busFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bus
     */
    select?: busSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bus
     */
    omit?: busOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: busInclude<ExtArgs> | null
    /**
     * Filter, which bus to fetch.
     */
    where: busWhereUniqueInput
  }

  /**
   * bus findFirst
   */
  export type busFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bus
     */
    select?: busSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bus
     */
    omit?: busOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: busInclude<ExtArgs> | null
    /**
     * Filter, which bus to fetch.
     */
    where?: busWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buses to fetch.
     */
    orderBy?: busOrderByWithRelationInput | busOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buses.
     */
    cursor?: busWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * bus findFirstOrThrow
   */
  export type busFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bus
     */
    select?: busSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bus
     */
    omit?: busOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: busInclude<ExtArgs> | null
    /**
     * Filter, which bus to fetch.
     */
    where?: busWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buses to fetch.
     */
    orderBy?: busOrderByWithRelationInput | busOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buses.
     */
    cursor?: busWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * bus findMany
   */
  export type busFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bus
     */
    select?: busSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bus
     */
    omit?: busOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: busInclude<ExtArgs> | null
    /**
     * Filter, which buses to fetch.
     */
    where?: busWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buses to fetch.
     */
    orderBy?: busOrderByWithRelationInput | busOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing buses.
     */
    cursor?: busWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buses.
     */
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * bus create
   */
  export type busCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bus
     */
    select?: busSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bus
     */
    omit?: busOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: busInclude<ExtArgs> | null
    /**
     * The data needed to create a bus.
     */
    data: XOR<busCreateInput, busUncheckedCreateInput>
  }

  /**
   * bus createMany
   */
  export type busCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many buses.
     */
    data: busCreateManyInput | busCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * bus update
   */
  export type busUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bus
     */
    select?: busSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bus
     */
    omit?: busOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: busInclude<ExtArgs> | null
    /**
     * The data needed to update a bus.
     */
    data: XOR<busUpdateInput, busUncheckedUpdateInput>
    /**
     * Choose, which bus to update.
     */
    where: busWhereUniqueInput
  }

  /**
   * bus updateMany
   */
  export type busUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update buses.
     */
    data: XOR<busUpdateManyMutationInput, busUncheckedUpdateManyInput>
    /**
     * Filter which buses to update
     */
    where?: busWhereInput
    /**
     * Limit how many buses to update.
     */
    limit?: number
  }

  /**
   * bus upsert
   */
  export type busUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bus
     */
    select?: busSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bus
     */
    omit?: busOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: busInclude<ExtArgs> | null
    /**
     * The filter to search for the bus to update in case it exists.
     */
    where: busWhereUniqueInput
    /**
     * In case the bus found by the `where` argument doesn't exist, create a new bus with this data.
     */
    create: XOR<busCreateInput, busUncheckedCreateInput>
    /**
     * In case the bus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<busUpdateInput, busUncheckedUpdateInput>
  }

  /**
   * bus delete
   */
  export type busDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bus
     */
    select?: busSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bus
     */
    omit?: busOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: busInclude<ExtArgs> | null
    /**
     * Filter which bus to delete.
     */
    where: busWhereUniqueInput
  }

  /**
   * bus deleteMany
   */
  export type busDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which buses to delete
     */
    where?: busWhereInput
    /**
     * Limit how many buses to delete.
     */
    limit?: number
  }

  /**
   * bus.seat
   */
  export type bus$seatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    where?: seatWhereInput
    orderBy?: seatOrderByWithRelationInput | seatOrderByWithRelationInput[]
    cursor?: seatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * bus.trip
   */
  export type bus$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    where?: tripWhereInput
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    cursor?: tripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * bus without action
   */
  export type busDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bus
     */
    select?: busSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bus
     */
    omit?: busOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: busInclude<ExtArgs> | null
  }


  /**
   * Model cashier
   */

  export type AggregateCashier = {
    _count: CashierCountAggregateOutputType | null
    _avg: CashierAvgAggregateOutputType | null
    _sum: CashierSumAggregateOutputType | null
    _min: CashierMinAggregateOutputType | null
    _max: CashierMaxAggregateOutputType | null
  }

  export type CashierAvgAggregateOutputType = {
    id: number | null
    station_id: number | null
    user_id: number | null
  }

  export type CashierSumAggregateOutputType = {
    id: number | null
    station_id: number | null
    user_id: number | null
  }

  export type CashierMinAggregateOutputType = {
    id: number | null
    shift_start: Date | null
    shift_end: Date | null
    station_id: number | null
    user_id: number | null
    last_name: string | null
    first_name: string | null
  }

  export type CashierMaxAggregateOutputType = {
    id: number | null
    shift_start: Date | null
    shift_end: Date | null
    station_id: number | null
    user_id: number | null
    last_name: string | null
    first_name: string | null
  }

  export type CashierCountAggregateOutputType = {
    id: number
    shift_start: number
    shift_end: number
    station_id: number
    user_id: number
    last_name: number
    first_name: number
    _all: number
  }


  export type CashierAvgAggregateInputType = {
    id?: true
    station_id?: true
    user_id?: true
  }

  export type CashierSumAggregateInputType = {
    id?: true
    station_id?: true
    user_id?: true
  }

  export type CashierMinAggregateInputType = {
    id?: true
    shift_start?: true
    shift_end?: true
    station_id?: true
    user_id?: true
    last_name?: true
    first_name?: true
  }

  export type CashierMaxAggregateInputType = {
    id?: true
    shift_start?: true
    shift_end?: true
    station_id?: true
    user_id?: true
    last_name?: true
    first_name?: true
  }

  export type CashierCountAggregateInputType = {
    id?: true
    shift_start?: true
    shift_end?: true
    station_id?: true
    user_id?: true
    last_name?: true
    first_name?: true
    _all?: true
  }

  export type CashierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cashier to aggregate.
     */
    where?: cashierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cashiers to fetch.
     */
    orderBy?: cashierOrderByWithRelationInput | cashierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cashierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cashiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cashiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cashiers
    **/
    _count?: true | CashierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CashierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CashierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CashierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CashierMaxAggregateInputType
  }

  export type GetCashierAggregateType<T extends CashierAggregateArgs> = {
        [P in keyof T & keyof AggregateCashier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCashier[P]>
      : GetScalarType<T[P], AggregateCashier[P]>
  }




  export type cashierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cashierWhereInput
    orderBy?: cashierOrderByWithAggregationInput | cashierOrderByWithAggregationInput[]
    by: CashierScalarFieldEnum[] | CashierScalarFieldEnum
    having?: cashierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CashierCountAggregateInputType | true
    _avg?: CashierAvgAggregateInputType
    _sum?: CashierSumAggregateInputType
    _min?: CashierMinAggregateInputType
    _max?: CashierMaxAggregateInputType
  }

  export type CashierGroupByOutputType = {
    id: number
    shift_start: Date | null
    shift_end: Date | null
    station_id: number
    user_id: number
    last_name: string
    first_name: string
    _count: CashierCountAggregateOutputType | null
    _avg: CashierAvgAggregateOutputType | null
    _sum: CashierSumAggregateOutputType | null
    _min: CashierMinAggregateOutputType | null
    _max: CashierMaxAggregateOutputType | null
  }

  type GetCashierGroupByPayload<T extends cashierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CashierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CashierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CashierGroupByOutputType[P]>
            : GetScalarType<T[P], CashierGroupByOutputType[P]>
        }
      >
    >


  export type cashierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shift_start?: boolean
    shift_end?: boolean
    station_id?: boolean
    user_id?: boolean
    last_name?: boolean
    first_name?: boolean
    station?: boolean | stationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    ticket?: boolean | cashier$ticketArgs<ExtArgs>
    _count?: boolean | CashierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cashier"]>



  export type cashierSelectScalar = {
    id?: boolean
    shift_start?: boolean
    shift_end?: boolean
    station_id?: boolean
    user_id?: boolean
    last_name?: boolean
    first_name?: boolean
  }

  export type cashierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shift_start" | "shift_end" | "station_id" | "user_id" | "last_name" | "first_name", ExtArgs["result"]["cashier"]>
  export type cashierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    station?: boolean | stationDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    ticket?: boolean | cashier$ticketArgs<ExtArgs>
    _count?: boolean | CashierCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $cashierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cashier"
    objects: {
      station: Prisma.$stationPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      ticket: Prisma.$ticketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shift_start: Date | null
      shift_end: Date | null
      station_id: number
      user_id: number
      last_name: string
      first_name: string
    }, ExtArgs["result"]["cashier"]>
    composites: {}
  }

  type cashierGetPayload<S extends boolean | null | undefined | cashierDefaultArgs> = $Result.GetResult<Prisma.$cashierPayload, S>

  type cashierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cashierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CashierCountAggregateInputType | true
    }

  export interface cashierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cashier'], meta: { name: 'cashier' } }
    /**
     * Find zero or one Cashier that matches the filter.
     * @param {cashierFindUniqueArgs} args - Arguments to find a Cashier
     * @example
     * // Get one Cashier
     * const cashier = await prisma.cashier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cashierFindUniqueArgs>(args: SelectSubset<T, cashierFindUniqueArgs<ExtArgs>>): Prisma__cashierClient<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cashier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cashierFindUniqueOrThrowArgs} args - Arguments to find a Cashier
     * @example
     * // Get one Cashier
     * const cashier = await prisma.cashier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cashierFindUniqueOrThrowArgs>(args: SelectSubset<T, cashierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cashierClient<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cashier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashierFindFirstArgs} args - Arguments to find a Cashier
     * @example
     * // Get one Cashier
     * const cashier = await prisma.cashier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cashierFindFirstArgs>(args?: SelectSubset<T, cashierFindFirstArgs<ExtArgs>>): Prisma__cashierClient<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cashier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashierFindFirstOrThrowArgs} args - Arguments to find a Cashier
     * @example
     * // Get one Cashier
     * const cashier = await prisma.cashier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cashierFindFirstOrThrowArgs>(args?: SelectSubset<T, cashierFindFirstOrThrowArgs<ExtArgs>>): Prisma__cashierClient<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cashiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cashiers
     * const cashiers = await prisma.cashier.findMany()
     * 
     * // Get first 10 Cashiers
     * const cashiers = await prisma.cashier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cashierWithIdOnly = await prisma.cashier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cashierFindManyArgs>(args?: SelectSubset<T, cashierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cashier.
     * @param {cashierCreateArgs} args - Arguments to create a Cashier.
     * @example
     * // Create one Cashier
     * const Cashier = await prisma.cashier.create({
     *   data: {
     *     // ... data to create a Cashier
     *   }
     * })
     * 
     */
    create<T extends cashierCreateArgs>(args: SelectSubset<T, cashierCreateArgs<ExtArgs>>): Prisma__cashierClient<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cashiers.
     * @param {cashierCreateManyArgs} args - Arguments to create many Cashiers.
     * @example
     * // Create many Cashiers
     * const cashier = await prisma.cashier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cashierCreateManyArgs>(args?: SelectSubset<T, cashierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cashier.
     * @param {cashierDeleteArgs} args - Arguments to delete one Cashier.
     * @example
     * // Delete one Cashier
     * const Cashier = await prisma.cashier.delete({
     *   where: {
     *     // ... filter to delete one Cashier
     *   }
     * })
     * 
     */
    delete<T extends cashierDeleteArgs>(args: SelectSubset<T, cashierDeleteArgs<ExtArgs>>): Prisma__cashierClient<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cashier.
     * @param {cashierUpdateArgs} args - Arguments to update one Cashier.
     * @example
     * // Update one Cashier
     * const cashier = await prisma.cashier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cashierUpdateArgs>(args: SelectSubset<T, cashierUpdateArgs<ExtArgs>>): Prisma__cashierClient<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cashiers.
     * @param {cashierDeleteManyArgs} args - Arguments to filter Cashiers to delete.
     * @example
     * // Delete a few Cashiers
     * const { count } = await prisma.cashier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cashierDeleteManyArgs>(args?: SelectSubset<T, cashierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cashiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cashiers
     * const cashier = await prisma.cashier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cashierUpdateManyArgs>(args: SelectSubset<T, cashierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cashier.
     * @param {cashierUpsertArgs} args - Arguments to update or create a Cashier.
     * @example
     * // Update or create a Cashier
     * const cashier = await prisma.cashier.upsert({
     *   create: {
     *     // ... data to create a Cashier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cashier we want to update
     *   }
     * })
     */
    upsert<T extends cashierUpsertArgs>(args: SelectSubset<T, cashierUpsertArgs<ExtArgs>>): Prisma__cashierClient<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cashiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashierCountArgs} args - Arguments to filter Cashiers to count.
     * @example
     * // Count the number of Cashiers
     * const count = await prisma.cashier.count({
     *   where: {
     *     // ... the filter for the Cashiers we want to count
     *   }
     * })
    **/
    count<T extends cashierCountArgs>(
      args?: Subset<T, cashierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CashierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cashier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CashierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CashierAggregateArgs>(args: Subset<T, CashierAggregateArgs>): Prisma.PrismaPromise<GetCashierAggregateType<T>>

    /**
     * Group by Cashier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cashierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cashierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cashierGroupByArgs['orderBy'] }
        : { orderBy?: cashierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cashierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCashierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cashier model
   */
  readonly fields: cashierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cashier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cashierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    station<T extends stationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stationDefaultArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends cashier$ticketArgs<ExtArgs> = {}>(args?: Subset<T, cashier$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cashier model
   */
  interface cashierFieldRefs {
    readonly id: FieldRef<"cashier", 'Int'>
    readonly shift_start: FieldRef<"cashier", 'DateTime'>
    readonly shift_end: FieldRef<"cashier", 'DateTime'>
    readonly station_id: FieldRef<"cashier", 'Int'>
    readonly user_id: FieldRef<"cashier", 'Int'>
    readonly last_name: FieldRef<"cashier", 'String'>
    readonly first_name: FieldRef<"cashier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cashier findUnique
   */
  export type cashierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
    /**
     * Filter, which cashier to fetch.
     */
    where: cashierWhereUniqueInput
  }

  /**
   * cashier findUniqueOrThrow
   */
  export type cashierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
    /**
     * Filter, which cashier to fetch.
     */
    where: cashierWhereUniqueInput
  }

  /**
   * cashier findFirst
   */
  export type cashierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
    /**
     * Filter, which cashier to fetch.
     */
    where?: cashierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cashiers to fetch.
     */
    orderBy?: cashierOrderByWithRelationInput | cashierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cashiers.
     */
    cursor?: cashierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cashiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cashiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cashiers.
     */
    distinct?: CashierScalarFieldEnum | CashierScalarFieldEnum[]
  }

  /**
   * cashier findFirstOrThrow
   */
  export type cashierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
    /**
     * Filter, which cashier to fetch.
     */
    where?: cashierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cashiers to fetch.
     */
    orderBy?: cashierOrderByWithRelationInput | cashierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cashiers.
     */
    cursor?: cashierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cashiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cashiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cashiers.
     */
    distinct?: CashierScalarFieldEnum | CashierScalarFieldEnum[]
  }

  /**
   * cashier findMany
   */
  export type cashierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
    /**
     * Filter, which cashiers to fetch.
     */
    where?: cashierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cashiers to fetch.
     */
    orderBy?: cashierOrderByWithRelationInput | cashierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cashiers.
     */
    cursor?: cashierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cashiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cashiers.
     */
    skip?: number
    distinct?: CashierScalarFieldEnum | CashierScalarFieldEnum[]
  }

  /**
   * cashier create
   */
  export type cashierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
    /**
     * The data needed to create a cashier.
     */
    data: XOR<cashierCreateInput, cashierUncheckedCreateInput>
  }

  /**
   * cashier createMany
   */
  export type cashierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cashiers.
     */
    data: cashierCreateManyInput | cashierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cashier update
   */
  export type cashierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
    /**
     * The data needed to update a cashier.
     */
    data: XOR<cashierUpdateInput, cashierUncheckedUpdateInput>
    /**
     * Choose, which cashier to update.
     */
    where: cashierWhereUniqueInput
  }

  /**
   * cashier updateMany
   */
  export type cashierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cashiers.
     */
    data: XOR<cashierUpdateManyMutationInput, cashierUncheckedUpdateManyInput>
    /**
     * Filter which cashiers to update
     */
    where?: cashierWhereInput
    /**
     * Limit how many cashiers to update.
     */
    limit?: number
  }

  /**
   * cashier upsert
   */
  export type cashierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
    /**
     * The filter to search for the cashier to update in case it exists.
     */
    where: cashierWhereUniqueInput
    /**
     * In case the cashier found by the `where` argument doesn't exist, create a new cashier with this data.
     */
    create: XOR<cashierCreateInput, cashierUncheckedCreateInput>
    /**
     * In case the cashier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cashierUpdateInput, cashierUncheckedUpdateInput>
  }

  /**
   * cashier delete
   */
  export type cashierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
    /**
     * Filter which cashier to delete.
     */
    where: cashierWhereUniqueInput
  }

  /**
   * cashier deleteMany
   */
  export type cashierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cashiers to delete
     */
    where?: cashierWhereInput
    /**
     * Limit how many cashiers to delete.
     */
    limit?: number
  }

  /**
   * cashier.ticket
   */
  export type cashier$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * cashier without action
   */
  export type cashierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
  }


  /**
   * Model driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DriverSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    user_id: number | null
  }

  export type DriverMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    last_name: string | null
    user_id: number | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    user_id: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DriverSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    user_id?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    user_id?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    user_id?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which driver to aggregate.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type driverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: driverWhereInput
    orderBy?: driverOrderByWithAggregationInput | driverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: driverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: number
    first_name: string
    last_name: string
    user_id: number
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends driverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type driverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    trip?: boolean | driver$tripArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>



  export type driverSelectScalar = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    user_id?: boolean
  }

  export type driverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "first_name" | "last_name" | "user_id", ExtArgs["result"]["driver"]>
  export type driverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    trip?: boolean | driver$tripArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $driverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "driver"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      trip: Prisma.$tripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      last_name: string
      user_id: number
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type driverGetPayload<S extends boolean | null | undefined | driverDefaultArgs> = $Result.GetResult<Prisma.$driverPayload, S>

  type driverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<driverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface driverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['driver'], meta: { name: 'driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {driverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends driverFindUniqueArgs>(args: SelectSubset<T, driverFindUniqueArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {driverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends driverFindUniqueOrThrowArgs>(args: SelectSubset<T, driverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends driverFindFirstArgs>(args?: SelectSubset<T, driverFindFirstArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends driverFindFirstOrThrowArgs>(args?: SelectSubset<T, driverFindFirstOrThrowArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends driverFindManyArgs>(args?: SelectSubset<T, driverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {driverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends driverCreateArgs>(args: SelectSubset<T, driverCreateArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {driverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends driverCreateManyArgs>(args?: SelectSubset<T, driverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Driver.
     * @param {driverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends driverDeleteArgs>(args: SelectSubset<T, driverDeleteArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {driverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends driverUpdateArgs>(args: SelectSubset<T, driverUpdateArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {driverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends driverDeleteManyArgs>(args?: SelectSubset<T, driverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends driverUpdateManyArgs>(args: SelectSubset<T, driverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {driverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends driverUpsertArgs>(args: SelectSubset<T, driverUpsertArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends driverCountArgs>(
      args?: Subset<T, driverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends driverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: driverGroupByArgs['orderBy'] }
        : { orderBy?: driverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, driverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the driver model
   */
  readonly fields: driverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__driverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip<T extends driver$tripArgs<ExtArgs> = {}>(args?: Subset<T, driver$tripArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the driver model
   */
  interface driverFieldRefs {
    readonly id: FieldRef<"driver", 'Int'>
    readonly first_name: FieldRef<"driver", 'String'>
    readonly last_name: FieldRef<"driver", 'String'>
    readonly user_id: FieldRef<"driver", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * driver findUnique
   */
  export type driverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver findUniqueOrThrow
   */
  export type driverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver findFirst
   */
  export type driverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver findFirstOrThrow
   */
  export type driverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which driver to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver findMany
   */
  export type driverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where?: driverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing drivers.
     */
    cursor?: driverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * driver create
   */
  export type driverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The data needed to create a driver.
     */
    data: XOR<driverCreateInput, driverUncheckedCreateInput>
  }

  /**
   * driver createMany
   */
  export type driverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many drivers.
     */
    data: driverCreateManyInput | driverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * driver update
   */
  export type driverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The data needed to update a driver.
     */
    data: XOR<driverUpdateInput, driverUncheckedUpdateInput>
    /**
     * Choose, which driver to update.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver updateMany
   */
  export type driverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update drivers.
     */
    data: XOR<driverUpdateManyMutationInput, driverUncheckedUpdateManyInput>
    /**
     * Filter which drivers to update
     */
    where?: driverWhereInput
    /**
     * Limit how many drivers to update.
     */
    limit?: number
  }

  /**
   * driver upsert
   */
  export type driverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * The filter to search for the driver to update in case it exists.
     */
    where: driverWhereUniqueInput
    /**
     * In case the driver found by the `where` argument doesn't exist, create a new driver with this data.
     */
    create: XOR<driverCreateInput, driverUncheckedCreateInput>
    /**
     * In case the driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<driverUpdateInput, driverUncheckedUpdateInput>
  }

  /**
   * driver delete
   */
  export type driverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    /**
     * Filter which driver to delete.
     */
    where: driverWhereUniqueInput
  }

  /**
   * driver deleteMany
   */
  export type driverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drivers to delete
     */
    where?: driverWhereInput
    /**
     * Limit how many drivers to delete.
     */
    limit?: number
  }

  /**
   * driver.trip
   */
  export type driver$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    where?: tripWhereInput
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    cursor?: tripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * driver without action
   */
  export type driverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
  }


  /**
   * Model passenger_ticket
   */

  export type AggregatePassenger_ticket = {
    _count: Passenger_ticketCountAggregateOutputType | null
    _avg: Passenger_ticketAvgAggregateOutputType | null
    _sum: Passenger_ticketSumAggregateOutputType | null
    _min: Passenger_ticketMinAggregateOutputType | null
    _max: Passenger_ticketMaxAggregateOutputType | null
  }

  export type Passenger_ticketAvgAggregateOutputType = {
    id: number | null
    ticket_id: number | null
  }

  export type Passenger_ticketSumAggregateOutputType = {
    id: number | null
    ticket_id: number | null
  }

  export type Passenger_ticketMinAggregateOutputType = {
    id: number | null
    passenger_name: string | null
    discount: $Enums.passenger_ticket_discount | null
    ticket_id: number | null
  }

  export type Passenger_ticketMaxAggregateOutputType = {
    id: number | null
    passenger_name: string | null
    discount: $Enums.passenger_ticket_discount | null
    ticket_id: number | null
  }

  export type Passenger_ticketCountAggregateOutputType = {
    id: number
    passenger_name: number
    discount: number
    ticket_id: number
    _all: number
  }


  export type Passenger_ticketAvgAggregateInputType = {
    id?: true
    ticket_id?: true
  }

  export type Passenger_ticketSumAggregateInputType = {
    id?: true
    ticket_id?: true
  }

  export type Passenger_ticketMinAggregateInputType = {
    id?: true
    passenger_name?: true
    discount?: true
    ticket_id?: true
  }

  export type Passenger_ticketMaxAggregateInputType = {
    id?: true
    passenger_name?: true
    discount?: true
    ticket_id?: true
  }

  export type Passenger_ticketCountAggregateInputType = {
    id?: true
    passenger_name?: true
    discount?: true
    ticket_id?: true
    _all?: true
  }

  export type Passenger_ticketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passenger_ticket to aggregate.
     */
    where?: passenger_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passenger_tickets to fetch.
     */
    orderBy?: passenger_ticketOrderByWithRelationInput | passenger_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: passenger_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passenger_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passenger_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned passenger_tickets
    **/
    _count?: true | Passenger_ticketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Passenger_ticketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Passenger_ticketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Passenger_ticketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Passenger_ticketMaxAggregateInputType
  }

  export type GetPassenger_ticketAggregateType<T extends Passenger_ticketAggregateArgs> = {
        [P in keyof T & keyof AggregatePassenger_ticket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassenger_ticket[P]>
      : GetScalarType<T[P], AggregatePassenger_ticket[P]>
  }




  export type passenger_ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: passenger_ticketWhereInput
    orderBy?: passenger_ticketOrderByWithAggregationInput | passenger_ticketOrderByWithAggregationInput[]
    by: Passenger_ticketScalarFieldEnum[] | Passenger_ticketScalarFieldEnum
    having?: passenger_ticketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Passenger_ticketCountAggregateInputType | true
    _avg?: Passenger_ticketAvgAggregateInputType
    _sum?: Passenger_ticketSumAggregateInputType
    _min?: Passenger_ticketMinAggregateInputType
    _max?: Passenger_ticketMaxAggregateInputType
  }

  export type Passenger_ticketGroupByOutputType = {
    id: number
    passenger_name: string | null
    discount: $Enums.passenger_ticket_discount | null
    ticket_id: number
    _count: Passenger_ticketCountAggregateOutputType | null
    _avg: Passenger_ticketAvgAggregateOutputType | null
    _sum: Passenger_ticketSumAggregateOutputType | null
    _min: Passenger_ticketMinAggregateOutputType | null
    _max: Passenger_ticketMaxAggregateOutputType | null
  }

  type GetPassenger_ticketGroupByPayload<T extends passenger_ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Passenger_ticketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Passenger_ticketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Passenger_ticketGroupByOutputType[P]>
            : GetScalarType<T[P], Passenger_ticketGroupByOutputType[P]>
        }
      >
    >


  export type passenger_ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passenger_name?: boolean
    discount?: boolean
    ticket_id?: boolean
    ticket?: boolean | ticketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passenger_ticket"]>



  export type passenger_ticketSelectScalar = {
    id?: boolean
    passenger_name?: boolean
    discount?: boolean
    ticket_id?: boolean
  }

  export type passenger_ticketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "passenger_name" | "discount" | "ticket_id", ExtArgs["result"]["passenger_ticket"]>
  export type passenger_ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | ticketDefaultArgs<ExtArgs>
  }

  export type $passenger_ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "passenger_ticket"
    objects: {
      ticket: Prisma.$ticketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      passenger_name: string | null
      discount: $Enums.passenger_ticket_discount | null
      ticket_id: number
    }, ExtArgs["result"]["passenger_ticket"]>
    composites: {}
  }

  type passenger_ticketGetPayload<S extends boolean | null | undefined | passenger_ticketDefaultArgs> = $Result.GetResult<Prisma.$passenger_ticketPayload, S>

  type passenger_ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<passenger_ticketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Passenger_ticketCountAggregateInputType | true
    }

  export interface passenger_ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['passenger_ticket'], meta: { name: 'passenger_ticket' } }
    /**
     * Find zero or one Passenger_ticket that matches the filter.
     * @param {passenger_ticketFindUniqueArgs} args - Arguments to find a Passenger_ticket
     * @example
     * // Get one Passenger_ticket
     * const passenger_ticket = await prisma.passenger_ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends passenger_ticketFindUniqueArgs>(args: SelectSubset<T, passenger_ticketFindUniqueArgs<ExtArgs>>): Prisma__passenger_ticketClient<$Result.GetResult<Prisma.$passenger_ticketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passenger_ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {passenger_ticketFindUniqueOrThrowArgs} args - Arguments to find a Passenger_ticket
     * @example
     * // Get one Passenger_ticket
     * const passenger_ticket = await prisma.passenger_ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends passenger_ticketFindUniqueOrThrowArgs>(args: SelectSubset<T, passenger_ticketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__passenger_ticketClient<$Result.GetResult<Prisma.$passenger_ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passenger_ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passenger_ticketFindFirstArgs} args - Arguments to find a Passenger_ticket
     * @example
     * // Get one Passenger_ticket
     * const passenger_ticket = await prisma.passenger_ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends passenger_ticketFindFirstArgs>(args?: SelectSubset<T, passenger_ticketFindFirstArgs<ExtArgs>>): Prisma__passenger_ticketClient<$Result.GetResult<Prisma.$passenger_ticketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passenger_ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passenger_ticketFindFirstOrThrowArgs} args - Arguments to find a Passenger_ticket
     * @example
     * // Get one Passenger_ticket
     * const passenger_ticket = await prisma.passenger_ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends passenger_ticketFindFirstOrThrowArgs>(args?: SelectSubset<T, passenger_ticketFindFirstOrThrowArgs<ExtArgs>>): Prisma__passenger_ticketClient<$Result.GetResult<Prisma.$passenger_ticketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passenger_tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passenger_ticketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passenger_tickets
     * const passenger_tickets = await prisma.passenger_ticket.findMany()
     * 
     * // Get first 10 Passenger_tickets
     * const passenger_tickets = await prisma.passenger_ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passenger_ticketWithIdOnly = await prisma.passenger_ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends passenger_ticketFindManyArgs>(args?: SelectSubset<T, passenger_ticketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$passenger_ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passenger_ticket.
     * @param {passenger_ticketCreateArgs} args - Arguments to create a Passenger_ticket.
     * @example
     * // Create one Passenger_ticket
     * const Passenger_ticket = await prisma.passenger_ticket.create({
     *   data: {
     *     // ... data to create a Passenger_ticket
     *   }
     * })
     * 
     */
    create<T extends passenger_ticketCreateArgs>(args: SelectSubset<T, passenger_ticketCreateArgs<ExtArgs>>): Prisma__passenger_ticketClient<$Result.GetResult<Prisma.$passenger_ticketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passenger_tickets.
     * @param {passenger_ticketCreateManyArgs} args - Arguments to create many Passenger_tickets.
     * @example
     * // Create many Passenger_tickets
     * const passenger_ticket = await prisma.passenger_ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends passenger_ticketCreateManyArgs>(args?: SelectSubset<T, passenger_ticketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Passenger_ticket.
     * @param {passenger_ticketDeleteArgs} args - Arguments to delete one Passenger_ticket.
     * @example
     * // Delete one Passenger_ticket
     * const Passenger_ticket = await prisma.passenger_ticket.delete({
     *   where: {
     *     // ... filter to delete one Passenger_ticket
     *   }
     * })
     * 
     */
    delete<T extends passenger_ticketDeleteArgs>(args: SelectSubset<T, passenger_ticketDeleteArgs<ExtArgs>>): Prisma__passenger_ticketClient<$Result.GetResult<Prisma.$passenger_ticketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passenger_ticket.
     * @param {passenger_ticketUpdateArgs} args - Arguments to update one Passenger_ticket.
     * @example
     * // Update one Passenger_ticket
     * const passenger_ticket = await prisma.passenger_ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends passenger_ticketUpdateArgs>(args: SelectSubset<T, passenger_ticketUpdateArgs<ExtArgs>>): Prisma__passenger_ticketClient<$Result.GetResult<Prisma.$passenger_ticketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passenger_tickets.
     * @param {passenger_ticketDeleteManyArgs} args - Arguments to filter Passenger_tickets to delete.
     * @example
     * // Delete a few Passenger_tickets
     * const { count } = await prisma.passenger_ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends passenger_ticketDeleteManyArgs>(args?: SelectSubset<T, passenger_ticketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passenger_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passenger_ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passenger_tickets
     * const passenger_ticket = await prisma.passenger_ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends passenger_ticketUpdateManyArgs>(args: SelectSubset<T, passenger_ticketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Passenger_ticket.
     * @param {passenger_ticketUpsertArgs} args - Arguments to update or create a Passenger_ticket.
     * @example
     * // Update or create a Passenger_ticket
     * const passenger_ticket = await prisma.passenger_ticket.upsert({
     *   create: {
     *     // ... data to create a Passenger_ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passenger_ticket we want to update
     *   }
     * })
     */
    upsert<T extends passenger_ticketUpsertArgs>(args: SelectSubset<T, passenger_ticketUpsertArgs<ExtArgs>>): Prisma__passenger_ticketClient<$Result.GetResult<Prisma.$passenger_ticketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passenger_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passenger_ticketCountArgs} args - Arguments to filter Passenger_tickets to count.
     * @example
     * // Count the number of Passenger_tickets
     * const count = await prisma.passenger_ticket.count({
     *   where: {
     *     // ... the filter for the Passenger_tickets we want to count
     *   }
     * })
    **/
    count<T extends passenger_ticketCountArgs>(
      args?: Subset<T, passenger_ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Passenger_ticketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passenger_ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Passenger_ticketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Passenger_ticketAggregateArgs>(args: Subset<T, Passenger_ticketAggregateArgs>): Prisma.PrismaPromise<GetPassenger_ticketAggregateType<T>>

    /**
     * Group by Passenger_ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {passenger_ticketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends passenger_ticketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: passenger_ticketGroupByArgs['orderBy'] }
        : { orderBy?: passenger_ticketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, passenger_ticketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassenger_ticketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the passenger_ticket model
   */
  readonly fields: passenger_ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for passenger_ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__passenger_ticketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends ticketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ticketDefaultArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the passenger_ticket model
   */
  interface passenger_ticketFieldRefs {
    readonly id: FieldRef<"passenger_ticket", 'Int'>
    readonly passenger_name: FieldRef<"passenger_ticket", 'String'>
    readonly discount: FieldRef<"passenger_ticket", 'passenger_ticket_discount'>
    readonly ticket_id: FieldRef<"passenger_ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * passenger_ticket findUnique
   */
  export type passenger_ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passenger_ticket
     */
    select?: passenger_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passenger_ticket
     */
    omit?: passenger_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passenger_ticketInclude<ExtArgs> | null
    /**
     * Filter, which passenger_ticket to fetch.
     */
    where: passenger_ticketWhereUniqueInput
  }

  /**
   * passenger_ticket findUniqueOrThrow
   */
  export type passenger_ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passenger_ticket
     */
    select?: passenger_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passenger_ticket
     */
    omit?: passenger_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passenger_ticketInclude<ExtArgs> | null
    /**
     * Filter, which passenger_ticket to fetch.
     */
    where: passenger_ticketWhereUniqueInput
  }

  /**
   * passenger_ticket findFirst
   */
  export type passenger_ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passenger_ticket
     */
    select?: passenger_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passenger_ticket
     */
    omit?: passenger_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passenger_ticketInclude<ExtArgs> | null
    /**
     * Filter, which passenger_ticket to fetch.
     */
    where?: passenger_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passenger_tickets to fetch.
     */
    orderBy?: passenger_ticketOrderByWithRelationInput | passenger_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passenger_tickets.
     */
    cursor?: passenger_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passenger_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passenger_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passenger_tickets.
     */
    distinct?: Passenger_ticketScalarFieldEnum | Passenger_ticketScalarFieldEnum[]
  }

  /**
   * passenger_ticket findFirstOrThrow
   */
  export type passenger_ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passenger_ticket
     */
    select?: passenger_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passenger_ticket
     */
    omit?: passenger_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passenger_ticketInclude<ExtArgs> | null
    /**
     * Filter, which passenger_ticket to fetch.
     */
    where?: passenger_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passenger_tickets to fetch.
     */
    orderBy?: passenger_ticketOrderByWithRelationInput | passenger_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for passenger_tickets.
     */
    cursor?: passenger_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passenger_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passenger_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of passenger_tickets.
     */
    distinct?: Passenger_ticketScalarFieldEnum | Passenger_ticketScalarFieldEnum[]
  }

  /**
   * passenger_ticket findMany
   */
  export type passenger_ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passenger_ticket
     */
    select?: passenger_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passenger_ticket
     */
    omit?: passenger_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passenger_ticketInclude<ExtArgs> | null
    /**
     * Filter, which passenger_tickets to fetch.
     */
    where?: passenger_ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of passenger_tickets to fetch.
     */
    orderBy?: passenger_ticketOrderByWithRelationInput | passenger_ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing passenger_tickets.
     */
    cursor?: passenger_ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` passenger_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` passenger_tickets.
     */
    skip?: number
    distinct?: Passenger_ticketScalarFieldEnum | Passenger_ticketScalarFieldEnum[]
  }

  /**
   * passenger_ticket create
   */
  export type passenger_ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passenger_ticket
     */
    select?: passenger_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passenger_ticket
     */
    omit?: passenger_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passenger_ticketInclude<ExtArgs> | null
    /**
     * The data needed to create a passenger_ticket.
     */
    data: XOR<passenger_ticketCreateInput, passenger_ticketUncheckedCreateInput>
  }

  /**
   * passenger_ticket createMany
   */
  export type passenger_ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many passenger_tickets.
     */
    data: passenger_ticketCreateManyInput | passenger_ticketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * passenger_ticket update
   */
  export type passenger_ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passenger_ticket
     */
    select?: passenger_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passenger_ticket
     */
    omit?: passenger_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passenger_ticketInclude<ExtArgs> | null
    /**
     * The data needed to update a passenger_ticket.
     */
    data: XOR<passenger_ticketUpdateInput, passenger_ticketUncheckedUpdateInput>
    /**
     * Choose, which passenger_ticket to update.
     */
    where: passenger_ticketWhereUniqueInput
  }

  /**
   * passenger_ticket updateMany
   */
  export type passenger_ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update passenger_tickets.
     */
    data: XOR<passenger_ticketUpdateManyMutationInput, passenger_ticketUncheckedUpdateManyInput>
    /**
     * Filter which passenger_tickets to update
     */
    where?: passenger_ticketWhereInput
    /**
     * Limit how many passenger_tickets to update.
     */
    limit?: number
  }

  /**
   * passenger_ticket upsert
   */
  export type passenger_ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passenger_ticket
     */
    select?: passenger_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passenger_ticket
     */
    omit?: passenger_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passenger_ticketInclude<ExtArgs> | null
    /**
     * The filter to search for the passenger_ticket to update in case it exists.
     */
    where: passenger_ticketWhereUniqueInput
    /**
     * In case the passenger_ticket found by the `where` argument doesn't exist, create a new passenger_ticket with this data.
     */
    create: XOR<passenger_ticketCreateInput, passenger_ticketUncheckedCreateInput>
    /**
     * In case the passenger_ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<passenger_ticketUpdateInput, passenger_ticketUncheckedUpdateInput>
  }

  /**
   * passenger_ticket delete
   */
  export type passenger_ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passenger_ticket
     */
    select?: passenger_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passenger_ticket
     */
    omit?: passenger_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passenger_ticketInclude<ExtArgs> | null
    /**
     * Filter which passenger_ticket to delete.
     */
    where: passenger_ticketWhereUniqueInput
  }

  /**
   * passenger_ticket deleteMany
   */
  export type passenger_ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which passenger_tickets to delete
     */
    where?: passenger_ticketWhereInput
    /**
     * Limit how many passenger_tickets to delete.
     */
    limit?: number
  }

  /**
   * passenger_ticket without action
   */
  export type passenger_ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passenger_ticket
     */
    select?: passenger_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passenger_ticket
     */
    omit?: passenger_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passenger_ticketInclude<ExtArgs> | null
  }


  /**
   * Model seat
   */

  export type AggregateSeat = {
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  export type SeatAvgAggregateOutputType = {
    id: number | null
    bus_id: number | null
  }

  export type SeatSumAggregateOutputType = {
    id: number | null
    bus_id: number | null
  }

  export type SeatMinAggregateOutputType = {
    id: number | null
    seat_number: string | null
    bus_id: number | null
    status: $Enums.seat_status | null
  }

  export type SeatMaxAggregateOutputType = {
    id: number | null
    seat_number: string | null
    bus_id: number | null
    status: $Enums.seat_status | null
  }

  export type SeatCountAggregateOutputType = {
    id: number
    seat_number: number
    bus_id: number
    status: number
    _all: number
  }


  export type SeatAvgAggregateInputType = {
    id?: true
    bus_id?: true
  }

  export type SeatSumAggregateInputType = {
    id?: true
    bus_id?: true
  }

  export type SeatMinAggregateInputType = {
    id?: true
    seat_number?: true
    bus_id?: true
    status?: true
  }

  export type SeatMaxAggregateInputType = {
    id?: true
    seat_number?: true
    bus_id?: true
    status?: true
  }

  export type SeatCountAggregateInputType = {
    id?: true
    seat_number?: true
    bus_id?: true
    status?: true
    _all?: true
  }

  export type SeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seat to aggregate.
     */
    where?: seatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatOrderByWithRelationInput | seatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: seatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned seats
    **/
    _count?: true | SeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMaxAggregateInputType
  }

  export type GetSeatAggregateType<T extends SeatAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat[P]>
      : GetScalarType<T[P], AggregateSeat[P]>
  }




  export type seatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: seatWhereInput
    orderBy?: seatOrderByWithAggregationInput | seatOrderByWithAggregationInput[]
    by: SeatScalarFieldEnum[] | SeatScalarFieldEnum
    having?: seatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatCountAggregateInputType | true
    _avg?: SeatAvgAggregateInputType
    _sum?: SeatSumAggregateInputType
    _min?: SeatMinAggregateInputType
    _max?: SeatMaxAggregateInputType
  }

  export type SeatGroupByOutputType = {
    id: number
    seat_number: string
    bus_id: number
    status: $Enums.seat_status
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  type GetSeatGroupByPayload<T extends seatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatGroupByOutputType[P]>
            : GetScalarType<T[P], SeatGroupByOutputType[P]>
        }
      >
    >


  export type seatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    seat_number?: boolean
    bus_id?: boolean
    status?: boolean
    bus?: boolean | busDefaultArgs<ExtArgs>
    ticket?: boolean | seat$ticketArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>



  export type seatSelectScalar = {
    id?: boolean
    seat_number?: boolean
    bus_id?: boolean
    status?: boolean
  }

  export type seatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "seat_number" | "bus_id" | "status", ExtArgs["result"]["seat"]>
  export type seatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | busDefaultArgs<ExtArgs>
    ticket?: boolean | seat$ticketArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $seatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "seat"
    objects: {
      bus: Prisma.$busPayload<ExtArgs>
      ticket: Prisma.$ticketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      seat_number: string
      bus_id: number
      status: $Enums.seat_status
    }, ExtArgs["result"]["seat"]>
    composites: {}
  }

  type seatGetPayload<S extends boolean | null | undefined | seatDefaultArgs> = $Result.GetResult<Prisma.$seatPayload, S>

  type seatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<seatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeatCountAggregateInputType | true
    }

  export interface seatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['seat'], meta: { name: 'seat' } }
    /**
     * Find zero or one Seat that matches the filter.
     * @param {seatFindUniqueArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seatFindUniqueArgs>(args: SelectSubset<T, seatFindUniqueArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {seatFindUniqueOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seatFindUniqueOrThrowArgs>(args: SelectSubset<T, seatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatFindFirstArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seatFindFirstArgs>(args?: SelectSubset<T, seatFindFirstArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatFindFirstOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seatFindFirstOrThrowArgs>(args?: SelectSubset<T, seatFindFirstOrThrowArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seat.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatWithIdOnly = await prisma.seat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends seatFindManyArgs>(args?: SelectSubset<T, seatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seat.
     * @param {seatCreateArgs} args - Arguments to create a Seat.
     * @example
     * // Create one Seat
     * const Seat = await prisma.seat.create({
     *   data: {
     *     // ... data to create a Seat
     *   }
     * })
     * 
     */
    create<T extends seatCreateArgs>(args: SelectSubset<T, seatCreateArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seats.
     * @param {seatCreateManyArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends seatCreateManyArgs>(args?: SelectSubset<T, seatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seat.
     * @param {seatDeleteArgs} args - Arguments to delete one Seat.
     * @example
     * // Delete one Seat
     * const Seat = await prisma.seat.delete({
     *   where: {
     *     // ... filter to delete one Seat
     *   }
     * })
     * 
     */
    delete<T extends seatDeleteArgs>(args: SelectSubset<T, seatDeleteArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seat.
     * @param {seatUpdateArgs} args - Arguments to update one Seat.
     * @example
     * // Update one Seat
     * const seat = await prisma.seat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends seatUpdateArgs>(args: SelectSubset<T, seatUpdateArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seats.
     * @param {seatDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends seatDeleteManyArgs>(args?: SelectSubset<T, seatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends seatUpdateManyArgs>(args: SelectSubset<T, seatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seat.
     * @param {seatUpsertArgs} args - Arguments to update or create a Seat.
     * @example
     * // Update or create a Seat
     * const seat = await prisma.seat.upsert({
     *   create: {
     *     // ... data to create a Seat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat we want to update
     *   }
     * })
     */
    upsert<T extends seatUpsertArgs>(args: SelectSubset<T, seatUpsertArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seat.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends seatCountArgs>(
      args?: Subset<T, seatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeatAggregateArgs>(args: Subset<T, SeatAggregateArgs>): Prisma.PrismaPromise<GetSeatAggregateType<T>>

    /**
     * Group by Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends seatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: seatGroupByArgs['orderBy'] }
        : { orderBy?: seatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, seatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the seat model
   */
  readonly fields: seatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for seat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__seatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends busDefaultArgs<ExtArgs> = {}>(args?: Subset<T, busDefaultArgs<ExtArgs>>): Prisma__busClient<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends seat$ticketArgs<ExtArgs> = {}>(args?: Subset<T, seat$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the seat model
   */
  interface seatFieldRefs {
    readonly id: FieldRef<"seat", 'Int'>
    readonly seat_number: FieldRef<"seat", 'String'>
    readonly bus_id: FieldRef<"seat", 'Int'>
    readonly status: FieldRef<"seat", 'seat_status'>
  }
    

  // Custom InputTypes
  /**
   * seat findUnique
   */
  export type seatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter, which seat to fetch.
     */
    where: seatWhereUniqueInput
  }

  /**
   * seat findUniqueOrThrow
   */
  export type seatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter, which seat to fetch.
     */
    where: seatWhereUniqueInput
  }

  /**
   * seat findFirst
   */
  export type seatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter, which seat to fetch.
     */
    where?: seatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatOrderByWithRelationInput | seatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seats.
     */
    cursor?: seatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * seat findFirstOrThrow
   */
  export type seatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter, which seat to fetch.
     */
    where?: seatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatOrderByWithRelationInput | seatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for seats.
     */
    cursor?: seatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * seat findMany
   */
  export type seatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter, which seats to fetch.
     */
    where?: seatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of seats to fetch.
     */
    orderBy?: seatOrderByWithRelationInput | seatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing seats.
     */
    cursor?: seatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` seats.
     */
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * seat create
   */
  export type seatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * The data needed to create a seat.
     */
    data: XOR<seatCreateInput, seatUncheckedCreateInput>
  }

  /**
   * seat createMany
   */
  export type seatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many seats.
     */
    data: seatCreateManyInput | seatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * seat update
   */
  export type seatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * The data needed to update a seat.
     */
    data: XOR<seatUpdateInput, seatUncheckedUpdateInput>
    /**
     * Choose, which seat to update.
     */
    where: seatWhereUniqueInput
  }

  /**
   * seat updateMany
   */
  export type seatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update seats.
     */
    data: XOR<seatUpdateManyMutationInput, seatUncheckedUpdateManyInput>
    /**
     * Filter which seats to update
     */
    where?: seatWhereInput
    /**
     * Limit how many seats to update.
     */
    limit?: number
  }

  /**
   * seat upsert
   */
  export type seatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * The filter to search for the seat to update in case it exists.
     */
    where: seatWhereUniqueInput
    /**
     * In case the seat found by the `where` argument doesn't exist, create a new seat with this data.
     */
    create: XOR<seatCreateInput, seatUncheckedCreateInput>
    /**
     * In case the seat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<seatUpdateInput, seatUncheckedUpdateInput>
  }

  /**
   * seat delete
   */
  export type seatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    /**
     * Filter which seat to delete.
     */
    where: seatWhereUniqueInput
  }

  /**
   * seat deleteMany
   */
  export type seatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which seats to delete
     */
    where?: seatWhereInput
    /**
     * Limit how many seats to delete.
     */
    limit?: number
  }

  /**
   * seat.ticket
   */
  export type seat$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * seat without action
   */
  export type seatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
  }


  /**
   * Model station
   */

  export type AggregateStation = {
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  export type StationAvgAggregateOutputType = {
    id: number | null
  }

  export type StationSumAggregateOutputType = {
    id: number | null
  }

  export type StationMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StationMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StationCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StationAvgAggregateInputType = {
    id?: true
  }

  export type StationSumAggregateInputType = {
    id?: true
  }

  export type StationMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StationMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StationCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which station to aggregate.
     */
    where?: stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stations to fetch.
     */
    orderBy?: stationOrderByWithRelationInput | stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stations
    **/
    _count?: true | StationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationMaxAggregateInputType
  }

  export type GetStationAggregateType<T extends StationAggregateArgs> = {
        [P in keyof T & keyof AggregateStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStation[P]>
      : GetScalarType<T[P], AggregateStation[P]>
  }




  export type stationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stationWhereInput
    orderBy?: stationOrderByWithAggregationInput | stationOrderByWithAggregationInput[]
    by: StationScalarFieldEnum[] | StationScalarFieldEnum
    having?: stationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationCountAggregateInputType | true
    _avg?: StationAvgAggregateInputType
    _sum?: StationSumAggregateInputType
    _min?: StationMinAggregateInputType
    _max?: StationMaxAggregateInputType
  }

  export type StationGroupByOutputType = {
    id: number
    name: string
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  type GetStationGroupByPayload<T extends stationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationGroupByOutputType[P]>
            : GetScalarType<T[P], StationGroupByOutputType[P]>
        }
      >
    >


  export type stationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bus?: boolean | station$busArgs<ExtArgs>
    cashier?: boolean | station$cashierArgs<ExtArgs>
    trip_trip_dest_station_idTostation?: boolean | station$trip_trip_dest_station_idTostationArgs<ExtArgs>
    trip_trip_src_station_idTostation?: boolean | station$trip_trip_src_station_idTostationArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>



  export type stationSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type stationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["station"]>
  export type stationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | station$busArgs<ExtArgs>
    cashier?: boolean | station$cashierArgs<ExtArgs>
    trip_trip_dest_station_idTostation?: boolean | station$trip_trip_dest_station_idTostationArgs<ExtArgs>
    trip_trip_src_station_idTostation?: boolean | station$trip_trip_src_station_idTostationArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $stationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "station"
    objects: {
      bus: Prisma.$busPayload<ExtArgs>[]
      cashier: Prisma.$cashierPayload<ExtArgs>[]
      trip_trip_dest_station_idTostation: Prisma.$tripPayload<ExtArgs>[]
      trip_trip_src_station_idTostation: Prisma.$tripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["station"]>
    composites: {}
  }

  type stationGetPayload<S extends boolean | null | undefined | stationDefaultArgs> = $Result.GetResult<Prisma.$stationPayload, S>

  type stationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StationCountAggregateInputType | true
    }

  export interface stationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['station'], meta: { name: 'station' } }
    /**
     * Find zero or one Station that matches the filter.
     * @param {stationFindUniqueArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stationFindUniqueArgs>(args: SelectSubset<T, stationFindUniqueArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Station that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stationFindUniqueOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stationFindUniqueOrThrowArgs>(args: SelectSubset<T, stationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationFindFirstArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stationFindFirstArgs>(args?: SelectSubset<T, stationFindFirstArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationFindFirstOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stationFindFirstOrThrowArgs>(args?: SelectSubset<T, stationFindFirstOrThrowArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stations
     * const stations = await prisma.station.findMany()
     * 
     * // Get first 10 Stations
     * const stations = await prisma.station.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationWithIdOnly = await prisma.station.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stationFindManyArgs>(args?: SelectSubset<T, stationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Station.
     * @param {stationCreateArgs} args - Arguments to create a Station.
     * @example
     * // Create one Station
     * const Station = await prisma.station.create({
     *   data: {
     *     // ... data to create a Station
     *   }
     * })
     * 
     */
    create<T extends stationCreateArgs>(args: SelectSubset<T, stationCreateArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stations.
     * @param {stationCreateManyArgs} args - Arguments to create many Stations.
     * @example
     * // Create many Stations
     * const station = await prisma.station.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stationCreateManyArgs>(args?: SelectSubset<T, stationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Station.
     * @param {stationDeleteArgs} args - Arguments to delete one Station.
     * @example
     * // Delete one Station
     * const Station = await prisma.station.delete({
     *   where: {
     *     // ... filter to delete one Station
     *   }
     * })
     * 
     */
    delete<T extends stationDeleteArgs>(args: SelectSubset<T, stationDeleteArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Station.
     * @param {stationUpdateArgs} args - Arguments to update one Station.
     * @example
     * // Update one Station
     * const station = await prisma.station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stationUpdateArgs>(args: SelectSubset<T, stationUpdateArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stations.
     * @param {stationDeleteManyArgs} args - Arguments to filter Stations to delete.
     * @example
     * // Delete a few Stations
     * const { count } = await prisma.station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stationDeleteManyArgs>(args?: SelectSubset<T, stationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stationUpdateManyArgs>(args: SelectSubset<T, stationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Station.
     * @param {stationUpsertArgs} args - Arguments to update or create a Station.
     * @example
     * // Update or create a Station
     * const station = await prisma.station.upsert({
     *   create: {
     *     // ... data to create a Station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Station we want to update
     *   }
     * })
     */
    upsert<T extends stationUpsertArgs>(args: SelectSubset<T, stationUpsertArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationCountArgs} args - Arguments to filter Stations to count.
     * @example
     * // Count the number of Stations
     * const count = await prisma.station.count({
     *   where: {
     *     // ... the filter for the Stations we want to count
     *   }
     * })
    **/
    count<T extends stationCountArgs>(
      args?: Subset<T, stationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StationAggregateArgs>(args: Subset<T, StationAggregateArgs>): Prisma.PrismaPromise<GetStationAggregateType<T>>

    /**
     * Group by Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stationGroupByArgs['orderBy'] }
        : { orderBy?: stationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the station model
   */
  readonly fields: stationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends station$busArgs<ExtArgs> = {}>(args?: Subset<T, station$busArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cashier<T extends station$cashierArgs<ExtArgs> = {}>(args?: Subset<T, station$cashierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trip_trip_dest_station_idTostation<T extends station$trip_trip_dest_station_idTostationArgs<ExtArgs> = {}>(args?: Subset<T, station$trip_trip_dest_station_idTostationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trip_trip_src_station_idTostation<T extends station$trip_trip_src_station_idTostationArgs<ExtArgs> = {}>(args?: Subset<T, station$trip_trip_src_station_idTostationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the station model
   */
  interface stationFieldRefs {
    readonly id: FieldRef<"station", 'Int'>
    readonly name: FieldRef<"station", 'String'>
  }
    

  // Custom InputTypes
  /**
   * station findUnique
   */
  export type stationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the station
     */
    omit?: stationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter, which station to fetch.
     */
    where: stationWhereUniqueInput
  }

  /**
   * station findUniqueOrThrow
   */
  export type stationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the station
     */
    omit?: stationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter, which station to fetch.
     */
    where: stationWhereUniqueInput
  }

  /**
   * station findFirst
   */
  export type stationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the station
     */
    omit?: stationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter, which station to fetch.
     */
    where?: stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stations to fetch.
     */
    orderBy?: stationOrderByWithRelationInput | stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stations.
     */
    cursor?: stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * station findFirstOrThrow
   */
  export type stationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the station
     */
    omit?: stationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter, which station to fetch.
     */
    where?: stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stations to fetch.
     */
    orderBy?: stationOrderByWithRelationInput | stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stations.
     */
    cursor?: stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * station findMany
   */
  export type stationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the station
     */
    omit?: stationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter, which stations to fetch.
     */
    where?: stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stations to fetch.
     */
    orderBy?: stationOrderByWithRelationInput | stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stations.
     */
    cursor?: stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stations.
     */
    skip?: number
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }

  /**
   * station create
   */
  export type stationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the station
     */
    omit?: stationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * The data needed to create a station.
     */
    data: XOR<stationCreateInput, stationUncheckedCreateInput>
  }

  /**
   * station createMany
   */
  export type stationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stations.
     */
    data: stationCreateManyInput | stationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * station update
   */
  export type stationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the station
     */
    omit?: stationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * The data needed to update a station.
     */
    data: XOR<stationUpdateInput, stationUncheckedUpdateInput>
    /**
     * Choose, which station to update.
     */
    where: stationWhereUniqueInput
  }

  /**
   * station updateMany
   */
  export type stationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stations.
     */
    data: XOR<stationUpdateManyMutationInput, stationUncheckedUpdateManyInput>
    /**
     * Filter which stations to update
     */
    where?: stationWhereInput
    /**
     * Limit how many stations to update.
     */
    limit?: number
  }

  /**
   * station upsert
   */
  export type stationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the station
     */
    omit?: stationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * The filter to search for the station to update in case it exists.
     */
    where: stationWhereUniqueInput
    /**
     * In case the station found by the `where` argument doesn't exist, create a new station with this data.
     */
    create: XOR<stationCreateInput, stationUncheckedCreateInput>
    /**
     * In case the station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stationUpdateInput, stationUncheckedUpdateInput>
  }

  /**
   * station delete
   */
  export type stationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the station
     */
    omit?: stationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter which station to delete.
     */
    where: stationWhereUniqueInput
  }

  /**
   * station deleteMany
   */
  export type stationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stations to delete
     */
    where?: stationWhereInput
    /**
     * Limit how many stations to delete.
     */
    limit?: number
  }

  /**
   * station.bus
   */
  export type station$busArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bus
     */
    select?: busSelect<ExtArgs> | null
    /**
     * Omit specific fields from the bus
     */
    omit?: busOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: busInclude<ExtArgs> | null
    where?: busWhereInput
    orderBy?: busOrderByWithRelationInput | busOrderByWithRelationInput[]
    cursor?: busWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * station.cashier
   */
  export type station$cashierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
    where?: cashierWhereInput
    orderBy?: cashierOrderByWithRelationInput | cashierOrderByWithRelationInput[]
    cursor?: cashierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashierScalarFieldEnum | CashierScalarFieldEnum[]
  }

  /**
   * station.trip_trip_dest_station_idTostation
   */
  export type station$trip_trip_dest_station_idTostationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    where?: tripWhereInput
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    cursor?: tripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * station.trip_trip_src_station_idTostation
   */
  export type station$trip_trip_src_station_idTostationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    where?: tripWhereInput
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    cursor?: tripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * station without action
   */
  export type stationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the station
     */
    omit?: stationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stationInclude<ExtArgs> | null
  }


  /**
   * Model ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    trip_id: number | null
    cashier_id: number | null
    seat_id: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    trip_id: number | null
    cashier_id: number | null
    seat_id: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    price: Decimal | null
    trip_id: number | null
    cashier_id: number | null
    ticket_type: $Enums.ticket_ticket_type | null
    seat_id: number | null
    createdAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    price: Decimal | null
    trip_id: number | null
    cashier_id: number | null
    ticket_type: $Enums.ticket_ticket_type | null
    seat_id: number | null
    createdAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    price: number
    trip_id: number
    cashier_id: number
    ticket_type: number
    seat_id: number
    createdAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    price?: true
    trip_id?: true
    cashier_id?: true
    seat_id?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    price?: true
    trip_id?: true
    cashier_id?: true
    seat_id?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    price?: true
    trip_id?: true
    cashier_id?: true
    ticket_type?: true
    seat_id?: true
    createdAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    price?: true
    trip_id?: true
    cashier_id?: true
    ticket_type?: true
    seat_id?: true
    createdAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    price?: true
    trip_id?: true
    cashier_id?: true
    ticket_type?: true
    seat_id?: true
    createdAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ticket to aggregate.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type ticketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithAggregationInput | ticketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: ticketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    price: Decimal
    trip_id: number
    cashier_id: number
    ticket_type: $Enums.ticket_ticket_type
    seat_id: number | null
    createdAt: Date | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends ticketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type ticketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    trip_id?: boolean
    cashier_id?: boolean
    ticket_type?: boolean
    seat_id?: boolean
    createdAt?: boolean
    baggage_ticket?: boolean | ticket$baggage_ticketArgs<ExtArgs>
    passenger_ticket?: boolean | ticket$passenger_ticketArgs<ExtArgs>
    cashier?: boolean | cashierDefaultArgs<ExtArgs>
    trip?: boolean | tripDefaultArgs<ExtArgs>
    seat?: boolean | ticket$seatArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type ticketSelectScalar = {
    id?: boolean
    price?: boolean
    trip_id?: boolean
    cashier_id?: boolean
    ticket_type?: boolean
    seat_id?: boolean
    createdAt?: boolean
  }

  export type ticketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "trip_id" | "cashier_id" | "ticket_type" | "seat_id" | "createdAt", ExtArgs["result"]["ticket"]>
  export type ticketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    baggage_ticket?: boolean | ticket$baggage_ticketArgs<ExtArgs>
    passenger_ticket?: boolean | ticket$passenger_ticketArgs<ExtArgs>
    cashier?: boolean | cashierDefaultArgs<ExtArgs>
    trip?: boolean | tripDefaultArgs<ExtArgs>
    seat?: boolean | ticket$seatArgs<ExtArgs>
  }

  export type $ticketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ticket"
    objects: {
      baggage_ticket: Prisma.$baggage_ticketPayload<ExtArgs> | null
      passenger_ticket: Prisma.$passenger_ticketPayload<ExtArgs> | null
      cashier: Prisma.$cashierPayload<ExtArgs>
      trip: Prisma.$tripPayload<ExtArgs>
      seat: Prisma.$seatPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: Prisma.Decimal
      trip_id: number
      cashier_id: number
      ticket_type: $Enums.ticket_ticket_type
      seat_id: number | null
      createdAt: Date | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type ticketGetPayload<S extends boolean | null | undefined | ticketDefaultArgs> = $Result.GetResult<Prisma.$ticketPayload, S>

  type ticketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ticketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface ticketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ticket'], meta: { name: 'ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {ticketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ticketFindUniqueArgs>(args: SelectSubset<T, ticketFindUniqueArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ticketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ticketFindUniqueOrThrowArgs>(args: SelectSubset<T, ticketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ticketFindFirstArgs>(args?: SelectSubset<T, ticketFindFirstArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ticketFindFirstOrThrowArgs>(args?: SelectSubset<T, ticketFindFirstOrThrowArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ticketFindManyArgs>(args?: SelectSubset<T, ticketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {ticketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends ticketCreateArgs>(args: SelectSubset<T, ticketCreateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {ticketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ticketCreateManyArgs>(args?: SelectSubset<T, ticketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {ticketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends ticketDeleteArgs>(args: SelectSubset<T, ticketDeleteArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {ticketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ticketUpdateArgs>(args: SelectSubset<T, ticketUpdateArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {ticketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ticketDeleteManyArgs>(args?: SelectSubset<T, ticketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ticketUpdateManyArgs>(args: SelectSubset<T, ticketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {ticketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends ticketUpsertArgs>(args: SelectSubset<T, ticketUpsertArgs<ExtArgs>>): Prisma__ticketClient<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends ticketCountArgs>(
      args?: Subset<T, ticketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ticketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ticketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ticketGroupByArgs['orderBy'] }
        : { orderBy?: ticketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ticketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ticket model
   */
  readonly fields: ticketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ticketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    baggage_ticket<T extends ticket$baggage_ticketArgs<ExtArgs> = {}>(args?: Subset<T, ticket$baggage_ticketArgs<ExtArgs>>): Prisma__baggage_ticketClient<$Result.GetResult<Prisma.$baggage_ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    passenger_ticket<T extends ticket$passenger_ticketArgs<ExtArgs> = {}>(args?: Subset<T, ticket$passenger_ticketArgs<ExtArgs>>): Prisma__passenger_ticketClient<$Result.GetResult<Prisma.$passenger_ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cashier<T extends cashierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cashierDefaultArgs<ExtArgs>>): Prisma__cashierClient<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip<T extends tripDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tripDefaultArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends ticket$seatArgs<ExtArgs> = {}>(args?: Subset<T, ticket$seatArgs<ExtArgs>>): Prisma__seatClient<$Result.GetResult<Prisma.$seatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ticket model
   */
  interface ticketFieldRefs {
    readonly id: FieldRef<"ticket", 'Int'>
    readonly price: FieldRef<"ticket", 'Decimal'>
    readonly trip_id: FieldRef<"ticket", 'Int'>
    readonly cashier_id: FieldRef<"ticket", 'Int'>
    readonly ticket_type: FieldRef<"ticket", 'ticket_ticket_type'>
    readonly seat_id: FieldRef<"ticket", 'Int'>
    readonly createdAt: FieldRef<"ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ticket findUnique
   */
  export type ticketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findUniqueOrThrow
   */
  export type ticketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket findFirst
   */
  export type ticketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findFirstOrThrow
   */
  export type ticketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which ticket to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket findMany
   */
  export type ticketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter, which tickets to fetch.
     */
    where?: ticketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tickets to fetch.
     */
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tickets.
     */
    cursor?: ticketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ticket create
   */
  export type ticketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to create a ticket.
     */
    data: XOR<ticketCreateInput, ticketUncheckedCreateInput>
  }

  /**
   * ticket createMany
   */
  export type ticketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tickets.
     */
    data: ticketCreateManyInput | ticketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ticket update
   */
  export type ticketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The data needed to update a ticket.
     */
    data: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
    /**
     * Choose, which ticket to update.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket updateMany
   */
  export type ticketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tickets.
     */
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyInput>
    /**
     * Filter which tickets to update
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to update.
     */
    limit?: number
  }

  /**
   * ticket upsert
   */
  export type ticketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * The filter to search for the ticket to update in case it exists.
     */
    where: ticketWhereUniqueInput
    /**
     * In case the ticket found by the `where` argument doesn't exist, create a new ticket with this data.
     */
    create: XOR<ticketCreateInput, ticketUncheckedCreateInput>
    /**
     * In case the ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ticketUpdateInput, ticketUncheckedUpdateInput>
  }

  /**
   * ticket delete
   */
  export type ticketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    /**
     * Filter which ticket to delete.
     */
    where: ticketWhereUniqueInput
  }

  /**
   * ticket deleteMany
   */
  export type ticketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tickets to delete
     */
    where?: ticketWhereInput
    /**
     * Limit how many tickets to delete.
     */
    limit?: number
  }

  /**
   * ticket.baggage_ticket
   */
  export type ticket$baggage_ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the baggage_ticket
     */
    select?: baggage_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the baggage_ticket
     */
    omit?: baggage_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: baggage_ticketInclude<ExtArgs> | null
    where?: baggage_ticketWhereInput
  }

  /**
   * ticket.passenger_ticket
   */
  export type ticket$passenger_ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the passenger_ticket
     */
    select?: passenger_ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the passenger_ticket
     */
    omit?: passenger_ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: passenger_ticketInclude<ExtArgs> | null
    where?: passenger_ticketWhereInput
  }

  /**
   * ticket.seat
   */
  export type ticket$seatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seat
     */
    select?: seatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the seat
     */
    omit?: seatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: seatInclude<ExtArgs> | null
    where?: seatWhereInput
  }

  /**
   * ticket without action
   */
  export type ticketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
  }


  /**
   * Model trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    id: number | null
    dest_station_id: number | null
    src_station_id: number | null
    bus_id: number | null
    driver_id: number | null
  }

  export type TripSumAggregateOutputType = {
    id: number | null
    dest_station_id: number | null
    src_station_id: number | null
    bus_id: number | null
    driver_id: number | null
  }

  export type TripMinAggregateOutputType = {
    id: number | null
    start_time: Date | null
    end_time: Date | null
    dest_station_id: number | null
    src_station_id: number | null
    bus_id: number | null
    driver_id: number | null
    status: $Enums.trip_status | null
  }

  export type TripMaxAggregateOutputType = {
    id: number | null
    start_time: Date | null
    end_time: Date | null
    dest_station_id: number | null
    src_station_id: number | null
    bus_id: number | null
    driver_id: number | null
    status: $Enums.trip_status | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    start_time: number
    end_time: number
    dest_station_id: number
    src_station_id: number
    bus_id: number
    driver_id: number
    status: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    id?: true
    dest_station_id?: true
    src_station_id?: true
    bus_id?: true
    driver_id?: true
  }

  export type TripSumAggregateInputType = {
    id?: true
    dest_station_id?: true
    src_station_id?: true
    bus_id?: true
    driver_id?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    start_time?: true
    end_time?: true
    dest_station_id?: true
    src_station_id?: true
    bus_id?: true
    driver_id?: true
    status?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    start_time?: true
    end_time?: true
    dest_station_id?: true
    src_station_id?: true
    bus_id?: true
    driver_id?: true
    status?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    start_time?: true
    end_time?: true
    dest_station_id?: true
    src_station_id?: true
    bus_id?: true
    driver_id?: true
    status?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trip to aggregate.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type tripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tripWhereInput
    orderBy?: tripOrderByWithAggregationInput | tripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: tripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: number
    start_time: Date | null
    end_time: Date | null
    dest_station_id: number
    src_station_id: number
    bus_id: number
    driver_id: number
    status: $Enums.trip_status | null
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends tripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type tripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start_time?: boolean
    end_time?: boolean
    dest_station_id?: boolean
    src_station_id?: boolean
    bus_id?: boolean
    driver_id?: boolean
    status?: boolean
    ticket?: boolean | trip$ticketArgs<ExtArgs>
    bus?: boolean | busDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
    station_trip_dest_station_idTostation?: boolean | stationDefaultArgs<ExtArgs>
    station_trip_src_station_idTostation?: boolean | stationDefaultArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>



  export type tripSelectScalar = {
    id?: boolean
    start_time?: boolean
    end_time?: boolean
    dest_station_id?: boolean
    src_station_id?: boolean
    bus_id?: boolean
    driver_id?: boolean
    status?: boolean
  }

  export type tripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "start_time" | "end_time" | "dest_station_id" | "src_station_id" | "bus_id" | "driver_id" | "status", ExtArgs["result"]["trip"]>
  export type tripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | trip$ticketArgs<ExtArgs>
    bus?: boolean | busDefaultArgs<ExtArgs>
    driver?: boolean | driverDefaultArgs<ExtArgs>
    station_trip_dest_station_idTostation?: boolean | stationDefaultArgs<ExtArgs>
    station_trip_src_station_idTostation?: boolean | stationDefaultArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "trip"
    objects: {
      ticket: Prisma.$ticketPayload<ExtArgs>[]
      bus: Prisma.$busPayload<ExtArgs>
      driver: Prisma.$driverPayload<ExtArgs>
      station_trip_dest_station_idTostation: Prisma.$stationPayload<ExtArgs>
      station_trip_src_station_idTostation: Prisma.$stationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start_time: Date | null
      end_time: Date | null
      dest_station_id: number
      src_station_id: number
      bus_id: number
      driver_id: number
      status: $Enums.trip_status | null
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type tripGetPayload<S extends boolean | null | undefined | tripDefaultArgs> = $Result.GetResult<Prisma.$tripPayload, S>

  type tripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface tripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['trip'], meta: { name: 'trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {tripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tripFindUniqueArgs>(args: SelectSubset<T, tripFindUniqueArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tripFindUniqueOrThrowArgs>(args: SelectSubset<T, tripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tripFindFirstArgs>(args?: SelectSubset<T, tripFindFirstArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tripFindFirstOrThrowArgs>(args?: SelectSubset<T, tripFindFirstOrThrowArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tripFindManyArgs>(args?: SelectSubset<T, tripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {tripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends tripCreateArgs>(args: SelectSubset<T, tripCreateArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {tripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tripCreateManyArgs>(args?: SelectSubset<T, tripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip.
     * @param {tripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends tripDeleteArgs>(args: SelectSubset<T, tripDeleteArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {tripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tripUpdateArgs>(args: SelectSubset<T, tripUpdateArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {tripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tripDeleteManyArgs>(args?: SelectSubset<T, tripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tripUpdateManyArgs>(args: SelectSubset<T, tripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {tripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends tripUpsertArgs>(args: SelectSubset<T, tripUpsertArgs<ExtArgs>>): Prisma__tripClient<$Result.GetResult<Prisma.$tripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends tripCountArgs>(
      args?: Subset<T, tripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tripGroupByArgs['orderBy'] }
        : { orderBy?: tripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the trip model
   */
  readonly fields: tripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends trip$ticketArgs<ExtArgs> = {}>(args?: Subset<T, trip$ticketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bus<T extends busDefaultArgs<ExtArgs> = {}>(args?: Subset<T, busDefaultArgs<ExtArgs>>): Prisma__busClient<$Result.GetResult<Prisma.$busPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends driverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, driverDefaultArgs<ExtArgs>>): Prisma__driverClient<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    station_trip_dest_station_idTostation<T extends stationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stationDefaultArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    station_trip_src_station_idTostation<T extends stationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stationDefaultArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the trip model
   */
  interface tripFieldRefs {
    readonly id: FieldRef<"trip", 'Int'>
    readonly start_time: FieldRef<"trip", 'DateTime'>
    readonly end_time: FieldRef<"trip", 'DateTime'>
    readonly dest_station_id: FieldRef<"trip", 'Int'>
    readonly src_station_id: FieldRef<"trip", 'Int'>
    readonly bus_id: FieldRef<"trip", 'Int'>
    readonly driver_id: FieldRef<"trip", 'Int'>
    readonly status: FieldRef<"trip", 'trip_status'>
  }
    

  // Custom InputTypes
  /**
   * trip findUnique
   */
  export type tripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter, which trip to fetch.
     */
    where: tripWhereUniqueInput
  }

  /**
   * trip findUniqueOrThrow
   */
  export type tripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter, which trip to fetch.
     */
    where: tripWhereUniqueInput
  }

  /**
   * trip findFirst
   */
  export type tripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter, which trip to fetch.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips.
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * trip findFirstOrThrow
   */
  export type tripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter, which trip to fetch.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for trips.
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * trip findMany
   */
  export type tripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter, which trips to fetch.
     */
    where?: tripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of trips to fetch.
     */
    orderBy?: tripOrderByWithRelationInput | tripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing trips.
     */
    cursor?: tripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` trips.
     */
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * trip create
   */
  export type tripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * The data needed to create a trip.
     */
    data: XOR<tripCreateInput, tripUncheckedCreateInput>
  }

  /**
   * trip createMany
   */
  export type tripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many trips.
     */
    data: tripCreateManyInput | tripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * trip update
   */
  export type tripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * The data needed to update a trip.
     */
    data: XOR<tripUpdateInput, tripUncheckedUpdateInput>
    /**
     * Choose, which trip to update.
     */
    where: tripWhereUniqueInput
  }

  /**
   * trip updateMany
   */
  export type tripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update trips.
     */
    data: XOR<tripUpdateManyMutationInput, tripUncheckedUpdateManyInput>
    /**
     * Filter which trips to update
     */
    where?: tripWhereInput
    /**
     * Limit how many trips to update.
     */
    limit?: number
  }

  /**
   * trip upsert
   */
  export type tripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * The filter to search for the trip to update in case it exists.
     */
    where: tripWhereUniqueInput
    /**
     * In case the trip found by the `where` argument doesn't exist, create a new trip with this data.
     */
    create: XOR<tripCreateInput, tripUncheckedCreateInput>
    /**
     * In case the trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tripUpdateInput, tripUncheckedUpdateInput>
  }

  /**
   * trip delete
   */
  export type tripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
    /**
     * Filter which trip to delete.
     */
    where: tripWhereUniqueInput
  }

  /**
   * trip deleteMany
   */
  export type tripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which trips to delete
     */
    where?: tripWhereInput
    /**
     * Limit how many trips to delete.
     */
    limit?: number
  }

  /**
   * trip.ticket
   */
  export type trip$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ticket
     */
    select?: ticketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ticket
     */
    omit?: ticketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ticketInclude<ExtArgs> | null
    where?: ticketWhereInput
    orderBy?: ticketOrderByWithRelationInput | ticketOrderByWithRelationInput[]
    cursor?: ticketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * trip without action
   */
  export type tripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trip
     */
    select?: tripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the trip
     */
    omit?: tripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tripInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.user_role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.user_role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    email: string
    image: string | null
    role: $Enums.user_role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    cashier?: boolean | user$cashierArgs<ExtArgs>
    driver?: boolean | user$driverArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "role", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cashier?: boolean | user$cashierArgs<ExtArgs>
    driver?: boolean | user$driverArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      cashier: Prisma.$cashierPayload<ExtArgs>[]
      driver: Prisma.$driverPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      image: string | null
      role: $Enums.user_role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cashier<T extends user$cashierArgs<ExtArgs> = {}>(args?: Subset<T, user$cashierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cashierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    driver<T extends user$driverArgs<ExtArgs> = {}>(args?: Subset<T, user$driverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly image: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'user_role'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.cashier
   */
  export type user$cashierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cashier
     */
    select?: cashierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cashier
     */
    omit?: cashierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cashierInclude<ExtArgs> | null
    where?: cashierWhereInput
    orderBy?: cashierOrderByWithRelationInput | cashierOrderByWithRelationInput[]
    cursor?: cashierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CashierScalarFieldEnum | CashierScalarFieldEnum[]
  }

  /**
   * user.driver
   */
  export type user$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the driver
     */
    select?: driverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the driver
     */
    omit?: driverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driverInclude<ExtArgs> | null
    where?: driverWhereInput
    orderBy?: driverOrderByWithRelationInput | driverOrderByWithRelationInput[]
    cursor?: driverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Baggage_ticketScalarFieldEnum: {
    id: 'id',
    sender_no: 'sender_no',
    dispatcher_no: 'dispatcher_no',
    sender_name: 'sender_name',
    receiver_name: 'receiver_name',
    item: 'item',
    ticket_id: 'ticket_id'
  };

  export type Baggage_ticketScalarFieldEnum = (typeof Baggage_ticketScalarFieldEnum)[keyof typeof Baggage_ticketScalarFieldEnum]


  export const BusScalarFieldEnum: {
    id: 'id',
    plate_number: 'plate_number',
    capacity: 'capacity',
    station_id: 'station_id'
  };

  export type BusScalarFieldEnum = (typeof BusScalarFieldEnum)[keyof typeof BusScalarFieldEnum]


  export const CashierScalarFieldEnum: {
    id: 'id',
    shift_start: 'shift_start',
    shift_end: 'shift_end',
    station_id: 'station_id',
    user_id: 'user_id',
    last_name: 'last_name',
    first_name: 'first_name'
  };

  export type CashierScalarFieldEnum = (typeof CashierScalarFieldEnum)[keyof typeof CashierScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    user_id: 'user_id'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const Passenger_ticketScalarFieldEnum: {
    id: 'id',
    passenger_name: 'passenger_name',
    discount: 'discount',
    ticket_id: 'ticket_id'
  };

  export type Passenger_ticketScalarFieldEnum = (typeof Passenger_ticketScalarFieldEnum)[keyof typeof Passenger_ticketScalarFieldEnum]


  export const SeatScalarFieldEnum: {
    id: 'id',
    seat_number: 'seat_number',
    bus_id: 'bus_id',
    status: 'status'
  };

  export type SeatScalarFieldEnum = (typeof SeatScalarFieldEnum)[keyof typeof SeatScalarFieldEnum]


  export const StationScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StationScalarFieldEnum = (typeof StationScalarFieldEnum)[keyof typeof StationScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    price: 'price',
    trip_id: 'trip_id',
    cashier_id: 'cashier_id',
    ticket_type: 'ticket_type',
    seat_id: 'seat_id',
    createdAt: 'createdAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    start_time: 'start_time',
    end_time: 'end_time',
    dest_station_id: 'dest_station_id',
    src_station_id: 'src_station_id',
    bus_id: 'bus_id',
    driver_id: 'driver_id',
    status: 'status'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const baggage_ticketOrderByRelevanceFieldEnum: {
    sender_no: 'sender_no',
    dispatcher_no: 'dispatcher_no',
    sender_name: 'sender_name',
    receiver_name: 'receiver_name',
    item: 'item'
  };

  export type baggage_ticketOrderByRelevanceFieldEnum = (typeof baggage_ticketOrderByRelevanceFieldEnum)[keyof typeof baggage_ticketOrderByRelevanceFieldEnum]


  export const busOrderByRelevanceFieldEnum: {
    plate_number: 'plate_number'
  };

  export type busOrderByRelevanceFieldEnum = (typeof busOrderByRelevanceFieldEnum)[keyof typeof busOrderByRelevanceFieldEnum]


  export const cashierOrderByRelevanceFieldEnum: {
    last_name: 'last_name',
    first_name: 'first_name'
  };

  export type cashierOrderByRelevanceFieldEnum = (typeof cashierOrderByRelevanceFieldEnum)[keyof typeof cashierOrderByRelevanceFieldEnum]


  export const driverOrderByRelevanceFieldEnum: {
    first_name: 'first_name',
    last_name: 'last_name'
  };

  export type driverOrderByRelevanceFieldEnum = (typeof driverOrderByRelevanceFieldEnum)[keyof typeof driverOrderByRelevanceFieldEnum]


  export const passenger_ticketOrderByRelevanceFieldEnum: {
    passenger_name: 'passenger_name'
  };

  export type passenger_ticketOrderByRelevanceFieldEnum = (typeof passenger_ticketOrderByRelevanceFieldEnum)[keyof typeof passenger_ticketOrderByRelevanceFieldEnum]


  export const seatOrderByRelevanceFieldEnum: {
    seat_number: 'seat_number'
  };

  export type seatOrderByRelevanceFieldEnum = (typeof seatOrderByRelevanceFieldEnum)[keyof typeof seatOrderByRelevanceFieldEnum]


  export const stationOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type stationOrderByRelevanceFieldEnum = (typeof stationOrderByRelevanceFieldEnum)[keyof typeof stationOrderByRelevanceFieldEnum]


  export const userOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    image: 'image'
  };

  export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'passenger_ticket_discount'
   */
  export type Enumpassenger_ticket_discountFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'passenger_ticket_discount'>
    


  /**
   * Reference to a field of type 'seat_status'
   */
  export type Enumseat_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'seat_status'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'ticket_ticket_type'
   */
  export type Enumticket_ticket_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ticket_ticket_type'>
    


  /**
   * Reference to a field of type 'trip_status'
   */
  export type Enumtrip_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'trip_status'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type baggage_ticketWhereInput = {
    AND?: baggage_ticketWhereInput | baggage_ticketWhereInput[]
    OR?: baggage_ticketWhereInput[]
    NOT?: baggage_ticketWhereInput | baggage_ticketWhereInput[]
    id?: IntFilter<"baggage_ticket"> | number
    sender_no?: StringNullableFilter<"baggage_ticket"> | string | null
    dispatcher_no?: StringNullableFilter<"baggage_ticket"> | string | null
    sender_name?: StringNullableFilter<"baggage_ticket"> | string | null
    receiver_name?: StringNullableFilter<"baggage_ticket"> | string | null
    item?: StringFilter<"baggage_ticket"> | string
    ticket_id?: IntFilter<"baggage_ticket"> | number
    ticket?: XOR<TicketScalarRelationFilter, ticketWhereInput>
  }

  export type baggage_ticketOrderByWithRelationInput = {
    id?: SortOrder
    sender_no?: SortOrderInput | SortOrder
    dispatcher_no?: SortOrderInput | SortOrder
    sender_name?: SortOrderInput | SortOrder
    receiver_name?: SortOrderInput | SortOrder
    item?: SortOrder
    ticket_id?: SortOrder
    ticket?: ticketOrderByWithRelationInput
    _relevance?: baggage_ticketOrderByRelevanceInput
  }

  export type baggage_ticketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ticket_id?: number
    AND?: baggage_ticketWhereInput | baggage_ticketWhereInput[]
    OR?: baggage_ticketWhereInput[]
    NOT?: baggage_ticketWhereInput | baggage_ticketWhereInput[]
    sender_no?: StringNullableFilter<"baggage_ticket"> | string | null
    dispatcher_no?: StringNullableFilter<"baggage_ticket"> | string | null
    sender_name?: StringNullableFilter<"baggage_ticket"> | string | null
    receiver_name?: StringNullableFilter<"baggage_ticket"> | string | null
    item?: StringFilter<"baggage_ticket"> | string
    ticket?: XOR<TicketScalarRelationFilter, ticketWhereInput>
  }, "id" | "ticket_id">

  export type baggage_ticketOrderByWithAggregationInput = {
    id?: SortOrder
    sender_no?: SortOrderInput | SortOrder
    dispatcher_no?: SortOrderInput | SortOrder
    sender_name?: SortOrderInput | SortOrder
    receiver_name?: SortOrderInput | SortOrder
    item?: SortOrder
    ticket_id?: SortOrder
    _count?: baggage_ticketCountOrderByAggregateInput
    _avg?: baggage_ticketAvgOrderByAggregateInput
    _max?: baggage_ticketMaxOrderByAggregateInput
    _min?: baggage_ticketMinOrderByAggregateInput
    _sum?: baggage_ticketSumOrderByAggregateInput
  }

  export type baggage_ticketScalarWhereWithAggregatesInput = {
    AND?: baggage_ticketScalarWhereWithAggregatesInput | baggage_ticketScalarWhereWithAggregatesInput[]
    OR?: baggage_ticketScalarWhereWithAggregatesInput[]
    NOT?: baggage_ticketScalarWhereWithAggregatesInput | baggage_ticketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"baggage_ticket"> | number
    sender_no?: StringNullableWithAggregatesFilter<"baggage_ticket"> | string | null
    dispatcher_no?: StringNullableWithAggregatesFilter<"baggage_ticket"> | string | null
    sender_name?: StringNullableWithAggregatesFilter<"baggage_ticket"> | string | null
    receiver_name?: StringNullableWithAggregatesFilter<"baggage_ticket"> | string | null
    item?: StringWithAggregatesFilter<"baggage_ticket"> | string
    ticket_id?: IntWithAggregatesFilter<"baggage_ticket"> | number
  }

  export type busWhereInput = {
    AND?: busWhereInput | busWhereInput[]
    OR?: busWhereInput[]
    NOT?: busWhereInput | busWhereInput[]
    id?: IntFilter<"bus"> | number
    plate_number?: StringFilter<"bus"> | string
    capacity?: IntFilter<"bus"> | number
    station_id?: IntFilter<"bus"> | number
    station?: XOR<StationScalarRelationFilter, stationWhereInput>
    seat?: SeatListRelationFilter
    trip?: TripListRelationFilter
  }

  export type busOrderByWithRelationInput = {
    id?: SortOrder
    plate_number?: SortOrder
    capacity?: SortOrder
    station_id?: SortOrder
    station?: stationOrderByWithRelationInput
    seat?: seatOrderByRelationAggregateInput
    trip?: tripOrderByRelationAggregateInput
    _relevance?: busOrderByRelevanceInput
  }

  export type busWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: busWhereInput | busWhereInput[]
    OR?: busWhereInput[]
    NOT?: busWhereInput | busWhereInput[]
    plate_number?: StringFilter<"bus"> | string
    capacity?: IntFilter<"bus"> | number
    station_id?: IntFilter<"bus"> | number
    station?: XOR<StationScalarRelationFilter, stationWhereInput>
    seat?: SeatListRelationFilter
    trip?: TripListRelationFilter
  }, "id">

  export type busOrderByWithAggregationInput = {
    id?: SortOrder
    plate_number?: SortOrder
    capacity?: SortOrder
    station_id?: SortOrder
    _count?: busCountOrderByAggregateInput
    _avg?: busAvgOrderByAggregateInput
    _max?: busMaxOrderByAggregateInput
    _min?: busMinOrderByAggregateInput
    _sum?: busSumOrderByAggregateInput
  }

  export type busScalarWhereWithAggregatesInput = {
    AND?: busScalarWhereWithAggregatesInput | busScalarWhereWithAggregatesInput[]
    OR?: busScalarWhereWithAggregatesInput[]
    NOT?: busScalarWhereWithAggregatesInput | busScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bus"> | number
    plate_number?: StringWithAggregatesFilter<"bus"> | string
    capacity?: IntWithAggregatesFilter<"bus"> | number
    station_id?: IntWithAggregatesFilter<"bus"> | number
  }

  export type cashierWhereInput = {
    AND?: cashierWhereInput | cashierWhereInput[]
    OR?: cashierWhereInput[]
    NOT?: cashierWhereInput | cashierWhereInput[]
    id?: IntFilter<"cashier"> | number
    shift_start?: DateTimeNullableFilter<"cashier"> | Date | string | null
    shift_end?: DateTimeNullableFilter<"cashier"> | Date | string | null
    station_id?: IntFilter<"cashier"> | number
    user_id?: IntFilter<"cashier"> | number
    last_name?: StringFilter<"cashier"> | string
    first_name?: StringFilter<"cashier"> | string
    station?: XOR<StationScalarRelationFilter, stationWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    ticket?: TicketListRelationFilter
  }

  export type cashierOrderByWithRelationInput = {
    id?: SortOrder
    shift_start?: SortOrderInput | SortOrder
    shift_end?: SortOrderInput | SortOrder
    station_id?: SortOrder
    user_id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    station?: stationOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    ticket?: ticketOrderByRelationAggregateInput
    _relevance?: cashierOrderByRelevanceInput
  }

  export type cashierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cashierWhereInput | cashierWhereInput[]
    OR?: cashierWhereInput[]
    NOT?: cashierWhereInput | cashierWhereInput[]
    shift_start?: DateTimeNullableFilter<"cashier"> | Date | string | null
    shift_end?: DateTimeNullableFilter<"cashier"> | Date | string | null
    station_id?: IntFilter<"cashier"> | number
    user_id?: IntFilter<"cashier"> | number
    last_name?: StringFilter<"cashier"> | string
    first_name?: StringFilter<"cashier"> | string
    station?: XOR<StationScalarRelationFilter, stationWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    ticket?: TicketListRelationFilter
  }, "id">

  export type cashierOrderByWithAggregationInput = {
    id?: SortOrder
    shift_start?: SortOrderInput | SortOrder
    shift_end?: SortOrderInput | SortOrder
    station_id?: SortOrder
    user_id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
    _count?: cashierCountOrderByAggregateInput
    _avg?: cashierAvgOrderByAggregateInput
    _max?: cashierMaxOrderByAggregateInput
    _min?: cashierMinOrderByAggregateInput
    _sum?: cashierSumOrderByAggregateInput
  }

  export type cashierScalarWhereWithAggregatesInput = {
    AND?: cashierScalarWhereWithAggregatesInput | cashierScalarWhereWithAggregatesInput[]
    OR?: cashierScalarWhereWithAggregatesInput[]
    NOT?: cashierScalarWhereWithAggregatesInput | cashierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cashier"> | number
    shift_start?: DateTimeNullableWithAggregatesFilter<"cashier"> | Date | string | null
    shift_end?: DateTimeNullableWithAggregatesFilter<"cashier"> | Date | string | null
    station_id?: IntWithAggregatesFilter<"cashier"> | number
    user_id?: IntWithAggregatesFilter<"cashier"> | number
    last_name?: StringWithAggregatesFilter<"cashier"> | string
    first_name?: StringWithAggregatesFilter<"cashier"> | string
  }

  export type driverWhereInput = {
    AND?: driverWhereInput | driverWhereInput[]
    OR?: driverWhereInput[]
    NOT?: driverWhereInput | driverWhereInput[]
    id?: IntFilter<"driver"> | number
    first_name?: StringFilter<"driver"> | string
    last_name?: StringFilter<"driver"> | string
    user_id?: IntFilter<"driver"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    trip?: TripListRelationFilter
  }

  export type driverOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
    trip?: tripOrderByRelationAggregateInput
    _relevance?: driverOrderByRelevanceInput
  }

  export type driverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: driverWhereInput | driverWhereInput[]
    OR?: driverWhereInput[]
    NOT?: driverWhereInput | driverWhereInput[]
    first_name?: StringFilter<"driver"> | string
    last_name?: StringFilter<"driver"> | string
    user_id?: IntFilter<"driver"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    trip?: TripListRelationFilter
  }, "id">

  export type driverOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    user_id?: SortOrder
    _count?: driverCountOrderByAggregateInput
    _avg?: driverAvgOrderByAggregateInput
    _max?: driverMaxOrderByAggregateInput
    _min?: driverMinOrderByAggregateInput
    _sum?: driverSumOrderByAggregateInput
  }

  export type driverScalarWhereWithAggregatesInput = {
    AND?: driverScalarWhereWithAggregatesInput | driverScalarWhereWithAggregatesInput[]
    OR?: driverScalarWhereWithAggregatesInput[]
    NOT?: driverScalarWhereWithAggregatesInput | driverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"driver"> | number
    first_name?: StringWithAggregatesFilter<"driver"> | string
    last_name?: StringWithAggregatesFilter<"driver"> | string
    user_id?: IntWithAggregatesFilter<"driver"> | number
  }

  export type passenger_ticketWhereInput = {
    AND?: passenger_ticketWhereInput | passenger_ticketWhereInput[]
    OR?: passenger_ticketWhereInput[]
    NOT?: passenger_ticketWhereInput | passenger_ticketWhereInput[]
    id?: IntFilter<"passenger_ticket"> | number
    passenger_name?: StringNullableFilter<"passenger_ticket"> | string | null
    discount?: Enumpassenger_ticket_discountNullableFilter<"passenger_ticket"> | $Enums.passenger_ticket_discount | null
    ticket_id?: IntFilter<"passenger_ticket"> | number
    ticket?: XOR<TicketScalarRelationFilter, ticketWhereInput>
  }

  export type passenger_ticketOrderByWithRelationInput = {
    id?: SortOrder
    passenger_name?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    ticket_id?: SortOrder
    ticket?: ticketOrderByWithRelationInput
    _relevance?: passenger_ticketOrderByRelevanceInput
  }

  export type passenger_ticketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ticket_id?: number
    AND?: passenger_ticketWhereInput | passenger_ticketWhereInput[]
    OR?: passenger_ticketWhereInput[]
    NOT?: passenger_ticketWhereInput | passenger_ticketWhereInput[]
    passenger_name?: StringNullableFilter<"passenger_ticket"> | string | null
    discount?: Enumpassenger_ticket_discountNullableFilter<"passenger_ticket"> | $Enums.passenger_ticket_discount | null
    ticket?: XOR<TicketScalarRelationFilter, ticketWhereInput>
  }, "id" | "ticket_id">

  export type passenger_ticketOrderByWithAggregationInput = {
    id?: SortOrder
    passenger_name?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    ticket_id?: SortOrder
    _count?: passenger_ticketCountOrderByAggregateInput
    _avg?: passenger_ticketAvgOrderByAggregateInput
    _max?: passenger_ticketMaxOrderByAggregateInput
    _min?: passenger_ticketMinOrderByAggregateInput
    _sum?: passenger_ticketSumOrderByAggregateInput
  }

  export type passenger_ticketScalarWhereWithAggregatesInput = {
    AND?: passenger_ticketScalarWhereWithAggregatesInput | passenger_ticketScalarWhereWithAggregatesInput[]
    OR?: passenger_ticketScalarWhereWithAggregatesInput[]
    NOT?: passenger_ticketScalarWhereWithAggregatesInput | passenger_ticketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"passenger_ticket"> | number
    passenger_name?: StringNullableWithAggregatesFilter<"passenger_ticket"> | string | null
    discount?: Enumpassenger_ticket_discountNullableWithAggregatesFilter<"passenger_ticket"> | $Enums.passenger_ticket_discount | null
    ticket_id?: IntWithAggregatesFilter<"passenger_ticket"> | number
  }

  export type seatWhereInput = {
    AND?: seatWhereInput | seatWhereInput[]
    OR?: seatWhereInput[]
    NOT?: seatWhereInput | seatWhereInput[]
    id?: IntFilter<"seat"> | number
    seat_number?: StringFilter<"seat"> | string
    bus_id?: IntFilter<"seat"> | number
    status?: Enumseat_statusFilter<"seat"> | $Enums.seat_status
    bus?: XOR<BusScalarRelationFilter, busWhereInput>
    ticket?: TicketListRelationFilter
  }

  export type seatOrderByWithRelationInput = {
    id?: SortOrder
    seat_number?: SortOrder
    bus_id?: SortOrder
    status?: SortOrder
    bus?: busOrderByWithRelationInput
    ticket?: ticketOrderByRelationAggregateInput
    _relevance?: seatOrderByRelevanceInput
  }

  export type seatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bus_id_seat_number?: seatBus_idSeat_numberCompoundUniqueInput
    AND?: seatWhereInput | seatWhereInput[]
    OR?: seatWhereInput[]
    NOT?: seatWhereInput | seatWhereInput[]
    seat_number?: StringFilter<"seat"> | string
    bus_id?: IntFilter<"seat"> | number
    status?: Enumseat_statusFilter<"seat"> | $Enums.seat_status
    bus?: XOR<BusScalarRelationFilter, busWhereInput>
    ticket?: TicketListRelationFilter
  }, "id" | "bus_id_seat_number">

  export type seatOrderByWithAggregationInput = {
    id?: SortOrder
    seat_number?: SortOrder
    bus_id?: SortOrder
    status?: SortOrder
    _count?: seatCountOrderByAggregateInput
    _avg?: seatAvgOrderByAggregateInput
    _max?: seatMaxOrderByAggregateInput
    _min?: seatMinOrderByAggregateInput
    _sum?: seatSumOrderByAggregateInput
  }

  export type seatScalarWhereWithAggregatesInput = {
    AND?: seatScalarWhereWithAggregatesInput | seatScalarWhereWithAggregatesInput[]
    OR?: seatScalarWhereWithAggregatesInput[]
    NOT?: seatScalarWhereWithAggregatesInput | seatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"seat"> | number
    seat_number?: StringWithAggregatesFilter<"seat"> | string
    bus_id?: IntWithAggregatesFilter<"seat"> | number
    status?: Enumseat_statusWithAggregatesFilter<"seat"> | $Enums.seat_status
  }

  export type stationWhereInput = {
    AND?: stationWhereInput | stationWhereInput[]
    OR?: stationWhereInput[]
    NOT?: stationWhereInput | stationWhereInput[]
    id?: IntFilter<"station"> | number
    name?: StringFilter<"station"> | string
    bus?: BusListRelationFilter
    cashier?: CashierListRelationFilter
    trip_trip_dest_station_idTostation?: TripListRelationFilter
    trip_trip_src_station_idTostation?: TripListRelationFilter
  }

  export type stationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bus?: busOrderByRelationAggregateInput
    cashier?: cashierOrderByRelationAggregateInput
    trip_trip_dest_station_idTostation?: tripOrderByRelationAggregateInput
    trip_trip_src_station_idTostation?: tripOrderByRelationAggregateInput
    _relevance?: stationOrderByRelevanceInput
  }

  export type stationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: stationWhereInput | stationWhereInput[]
    OR?: stationWhereInput[]
    NOT?: stationWhereInput | stationWhereInput[]
    bus?: BusListRelationFilter
    cashier?: CashierListRelationFilter
    trip_trip_dest_station_idTostation?: TripListRelationFilter
    trip_trip_src_station_idTostation?: TripListRelationFilter
  }, "id" | "name">

  export type stationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: stationCountOrderByAggregateInput
    _avg?: stationAvgOrderByAggregateInput
    _max?: stationMaxOrderByAggregateInput
    _min?: stationMinOrderByAggregateInput
    _sum?: stationSumOrderByAggregateInput
  }

  export type stationScalarWhereWithAggregatesInput = {
    AND?: stationScalarWhereWithAggregatesInput | stationScalarWhereWithAggregatesInput[]
    OR?: stationScalarWhereWithAggregatesInput[]
    NOT?: stationScalarWhereWithAggregatesInput | stationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"station"> | number
    name?: StringWithAggregatesFilter<"station"> | string
  }

  export type ticketWhereInput = {
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    id?: IntFilter<"ticket"> | number
    price?: DecimalFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    trip_id?: IntFilter<"ticket"> | number
    cashier_id?: IntFilter<"ticket"> | number
    ticket_type?: Enumticket_ticket_typeFilter<"ticket"> | $Enums.ticket_ticket_type
    seat_id?: IntNullableFilter<"ticket"> | number | null
    createdAt?: DateTimeNullableFilter<"ticket"> | Date | string | null
    baggage_ticket?: XOR<Baggage_ticketNullableScalarRelationFilter, baggage_ticketWhereInput> | null
    passenger_ticket?: XOR<Passenger_ticketNullableScalarRelationFilter, passenger_ticketWhereInput> | null
    cashier?: XOR<CashierScalarRelationFilter, cashierWhereInput>
    trip?: XOR<TripScalarRelationFilter, tripWhereInput>
    seat?: XOR<SeatNullableScalarRelationFilter, seatWhereInput> | null
  }

  export type ticketOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    trip_id?: SortOrder
    cashier_id?: SortOrder
    ticket_type?: SortOrder
    seat_id?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    baggage_ticket?: baggage_ticketOrderByWithRelationInput
    passenger_ticket?: passenger_ticketOrderByWithRelationInput
    cashier?: cashierOrderByWithRelationInput
    trip?: tripOrderByWithRelationInput
    seat?: seatOrderByWithRelationInput
  }

  export type ticketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ticketWhereInput | ticketWhereInput[]
    OR?: ticketWhereInput[]
    NOT?: ticketWhereInput | ticketWhereInput[]
    price?: DecimalFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    trip_id?: IntFilter<"ticket"> | number
    cashier_id?: IntFilter<"ticket"> | number
    ticket_type?: Enumticket_ticket_typeFilter<"ticket"> | $Enums.ticket_ticket_type
    seat_id?: IntNullableFilter<"ticket"> | number | null
    createdAt?: DateTimeNullableFilter<"ticket"> | Date | string | null
    baggage_ticket?: XOR<Baggage_ticketNullableScalarRelationFilter, baggage_ticketWhereInput> | null
    passenger_ticket?: XOR<Passenger_ticketNullableScalarRelationFilter, passenger_ticketWhereInput> | null
    cashier?: XOR<CashierScalarRelationFilter, cashierWhereInput>
    trip?: XOR<TripScalarRelationFilter, tripWhereInput>
    seat?: XOR<SeatNullableScalarRelationFilter, seatWhereInput> | null
  }, "id">

  export type ticketOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    trip_id?: SortOrder
    cashier_id?: SortOrder
    ticket_type?: SortOrder
    seat_id?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: ticketCountOrderByAggregateInput
    _avg?: ticketAvgOrderByAggregateInput
    _max?: ticketMaxOrderByAggregateInput
    _min?: ticketMinOrderByAggregateInput
    _sum?: ticketSumOrderByAggregateInput
  }

  export type ticketScalarWhereWithAggregatesInput = {
    AND?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    OR?: ticketScalarWhereWithAggregatesInput[]
    NOT?: ticketScalarWhereWithAggregatesInput | ticketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ticket"> | number
    price?: DecimalWithAggregatesFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    trip_id?: IntWithAggregatesFilter<"ticket"> | number
    cashier_id?: IntWithAggregatesFilter<"ticket"> | number
    ticket_type?: Enumticket_ticket_typeWithAggregatesFilter<"ticket"> | $Enums.ticket_ticket_type
    seat_id?: IntNullableWithAggregatesFilter<"ticket"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"ticket"> | Date | string | null
  }

  export type tripWhereInput = {
    AND?: tripWhereInput | tripWhereInput[]
    OR?: tripWhereInput[]
    NOT?: tripWhereInput | tripWhereInput[]
    id?: IntFilter<"trip"> | number
    start_time?: DateTimeNullableFilter<"trip"> | Date | string | null
    end_time?: DateTimeNullableFilter<"trip"> | Date | string | null
    dest_station_id?: IntFilter<"trip"> | number
    src_station_id?: IntFilter<"trip"> | number
    bus_id?: IntFilter<"trip"> | number
    driver_id?: IntFilter<"trip"> | number
    status?: Enumtrip_statusNullableFilter<"trip"> | $Enums.trip_status | null
    ticket?: TicketListRelationFilter
    bus?: XOR<BusScalarRelationFilter, busWhereInput>
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
    station_trip_dest_station_idTostation?: XOR<StationScalarRelationFilter, stationWhereInput>
    station_trip_src_station_idTostation?: XOR<StationScalarRelationFilter, stationWhereInput>
  }

  export type tripOrderByWithRelationInput = {
    id?: SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    dest_station_id?: SortOrder
    src_station_id?: SortOrder
    bus_id?: SortOrder
    driver_id?: SortOrder
    status?: SortOrderInput | SortOrder
    ticket?: ticketOrderByRelationAggregateInput
    bus?: busOrderByWithRelationInput
    driver?: driverOrderByWithRelationInput
    station_trip_dest_station_idTostation?: stationOrderByWithRelationInput
    station_trip_src_station_idTostation?: stationOrderByWithRelationInput
  }

  export type tripWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tripWhereInput | tripWhereInput[]
    OR?: tripWhereInput[]
    NOT?: tripWhereInput | tripWhereInput[]
    start_time?: DateTimeNullableFilter<"trip"> | Date | string | null
    end_time?: DateTimeNullableFilter<"trip"> | Date | string | null
    dest_station_id?: IntFilter<"trip"> | number
    src_station_id?: IntFilter<"trip"> | number
    bus_id?: IntFilter<"trip"> | number
    driver_id?: IntFilter<"trip"> | number
    status?: Enumtrip_statusNullableFilter<"trip"> | $Enums.trip_status | null
    ticket?: TicketListRelationFilter
    bus?: XOR<BusScalarRelationFilter, busWhereInput>
    driver?: XOR<DriverScalarRelationFilter, driverWhereInput>
    station_trip_dest_station_idTostation?: XOR<StationScalarRelationFilter, stationWhereInput>
    station_trip_src_station_idTostation?: XOR<StationScalarRelationFilter, stationWhereInput>
  }, "id">

  export type tripOrderByWithAggregationInput = {
    id?: SortOrder
    start_time?: SortOrderInput | SortOrder
    end_time?: SortOrderInput | SortOrder
    dest_station_id?: SortOrder
    src_station_id?: SortOrder
    bus_id?: SortOrder
    driver_id?: SortOrder
    status?: SortOrderInput | SortOrder
    _count?: tripCountOrderByAggregateInput
    _avg?: tripAvgOrderByAggregateInput
    _max?: tripMaxOrderByAggregateInput
    _min?: tripMinOrderByAggregateInput
    _sum?: tripSumOrderByAggregateInput
  }

  export type tripScalarWhereWithAggregatesInput = {
    AND?: tripScalarWhereWithAggregatesInput | tripScalarWhereWithAggregatesInput[]
    OR?: tripScalarWhereWithAggregatesInput[]
    NOT?: tripScalarWhereWithAggregatesInput | tripScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"trip"> | number
    start_time?: DateTimeNullableWithAggregatesFilter<"trip"> | Date | string | null
    end_time?: DateTimeNullableWithAggregatesFilter<"trip"> | Date | string | null
    dest_station_id?: IntWithAggregatesFilter<"trip"> | number
    src_station_id?: IntWithAggregatesFilter<"trip"> | number
    bus_id?: IntWithAggregatesFilter<"trip"> | number
    driver_id?: IntWithAggregatesFilter<"trip"> | number
    status?: Enumtrip_statusNullableWithAggregatesFilter<"trip"> | $Enums.trip_status | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringNullableFilter<"user"> | string | null
    email?: StringFilter<"user"> | string
    image?: StringNullableFilter<"user"> | string | null
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    cashier?: CashierListRelationFilter
    driver?: DriverListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    cashier?: cashierOrderByRelationAggregateInput
    driver?: driverOrderByRelationAggregateInput
    _relevance?: userOrderByRelevanceInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringNullableFilter<"user"> | string | null
    image?: StringNullableFilter<"user"> | string | null
    role?: Enumuser_roleFilter<"user"> | $Enums.user_role
    cashier?: CashierListRelationFilter
    driver?: DriverListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    email?: StringWithAggregatesFilter<"user"> | string
    image?: StringNullableWithAggregatesFilter<"user"> | string | null
    role?: Enumuser_roleWithAggregatesFilter<"user"> | $Enums.user_role
  }

  export type baggage_ticketCreateInput = {
    sender_no?: string | null
    dispatcher_no?: string | null
    sender_name?: string | null
    receiver_name?: string | null
    item: string
    ticket: ticketCreateNestedOneWithoutBaggage_ticketInput
  }

  export type baggage_ticketUncheckedCreateInput = {
    id?: number
    sender_no?: string | null
    dispatcher_no?: string | null
    sender_name?: string | null
    receiver_name?: string | null
    item: string
    ticket_id: number
  }

  export type baggage_ticketUpdateInput = {
    sender_no?: NullableStringFieldUpdateOperationsInput | string | null
    dispatcher_no?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_name?: NullableStringFieldUpdateOperationsInput | string | null
    item?: StringFieldUpdateOperationsInput | string
    ticket?: ticketUpdateOneRequiredWithoutBaggage_ticketNestedInput
  }

  export type baggage_ticketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_no?: NullableStringFieldUpdateOperationsInput | string | null
    dispatcher_no?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_name?: NullableStringFieldUpdateOperationsInput | string | null
    item?: StringFieldUpdateOperationsInput | string
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type baggage_ticketCreateManyInput = {
    id?: number
    sender_no?: string | null
    dispatcher_no?: string | null
    sender_name?: string | null
    receiver_name?: string | null
    item: string
    ticket_id: number
  }

  export type baggage_ticketUpdateManyMutationInput = {
    sender_no?: NullableStringFieldUpdateOperationsInput | string | null
    dispatcher_no?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_name?: NullableStringFieldUpdateOperationsInput | string | null
    item?: StringFieldUpdateOperationsInput | string
  }

  export type baggage_ticketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_no?: NullableStringFieldUpdateOperationsInput | string | null
    dispatcher_no?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_name?: NullableStringFieldUpdateOperationsInput | string | null
    item?: StringFieldUpdateOperationsInput | string
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type busCreateInput = {
    plate_number: string
    capacity: number
    station: stationCreateNestedOneWithoutBusInput
    seat?: seatCreateNestedManyWithoutBusInput
    trip?: tripCreateNestedManyWithoutBusInput
  }

  export type busUncheckedCreateInput = {
    id?: number
    plate_number: string
    capacity: number
    station_id: number
    seat?: seatUncheckedCreateNestedManyWithoutBusInput
    trip?: tripUncheckedCreateNestedManyWithoutBusInput
  }

  export type busUpdateInput = {
    plate_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    station?: stationUpdateOneRequiredWithoutBusNestedInput
    seat?: seatUpdateManyWithoutBusNestedInput
    trip?: tripUpdateManyWithoutBusNestedInput
  }

  export type busUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    seat?: seatUncheckedUpdateManyWithoutBusNestedInput
    trip?: tripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type busCreateManyInput = {
    id?: number
    plate_number: string
    capacity: number
    station_id: number
  }

  export type busUpdateManyMutationInput = {
    plate_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type busUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
  }

  export type cashierCreateInput = {
    shift_start?: Date | string | null
    shift_end?: Date | string | null
    last_name: string
    first_name: string
    station: stationCreateNestedOneWithoutCashierInput
    user: userCreateNestedOneWithoutCashierInput
    ticket?: ticketCreateNestedManyWithoutCashierInput
  }

  export type cashierUncheckedCreateInput = {
    id?: number
    shift_start?: Date | string | null
    shift_end?: Date | string | null
    station_id: number
    user_id: number
    last_name: string
    first_name: string
    ticket?: ticketUncheckedCreateNestedManyWithoutCashierInput
  }

  export type cashierUpdateInput = {
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    station?: stationUpdateOneRequiredWithoutCashierNestedInput
    user?: userUpdateOneRequiredWithoutCashierNestedInput
    ticket?: ticketUpdateManyWithoutCashierNestedInput
  }

  export type cashierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    station_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    ticket?: ticketUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type cashierCreateManyInput = {
    id?: number
    shift_start?: Date | string | null
    shift_end?: Date | string | null
    station_id: number
    user_id: number
    last_name: string
    first_name: string
  }

  export type cashierUpdateManyMutationInput = {
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
  }

  export type cashierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    station_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
  }

  export type driverCreateInput = {
    first_name: string
    last_name: string
    user: userCreateNestedOneWithoutDriverInput
    trip?: tripCreateNestedManyWithoutDriverInput
  }

  export type driverUncheckedCreateInput = {
    id?: number
    first_name: string
    last_name: string
    user_id: number
    trip?: tripUncheckedCreateNestedManyWithoutDriverInput
  }

  export type driverUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutDriverNestedInput
    trip?: tripUpdateManyWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    trip?: tripUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type driverCreateManyInput = {
    id?: number
    first_name: string
    last_name: string
    user_id: number
  }

  export type driverUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
  }

  export type driverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type passenger_ticketCreateInput = {
    passenger_name?: string | null
    discount?: $Enums.passenger_ticket_discount | null
    ticket: ticketCreateNestedOneWithoutPassenger_ticketInput
  }

  export type passenger_ticketUncheckedCreateInput = {
    id?: number
    passenger_name?: string | null
    discount?: $Enums.passenger_ticket_discount | null
    ticket_id: number
  }

  export type passenger_ticketUpdateInput = {
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableEnumpassenger_ticket_discountFieldUpdateOperationsInput | $Enums.passenger_ticket_discount | null
    ticket?: ticketUpdateOneRequiredWithoutPassenger_ticketNestedInput
  }

  export type passenger_ticketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableEnumpassenger_ticket_discountFieldUpdateOperationsInput | $Enums.passenger_ticket_discount | null
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type passenger_ticketCreateManyInput = {
    id?: number
    passenger_name?: string | null
    discount?: $Enums.passenger_ticket_discount | null
    ticket_id: number
  }

  export type passenger_ticketUpdateManyMutationInput = {
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableEnumpassenger_ticket_discountFieldUpdateOperationsInput | $Enums.passenger_ticket_discount | null
  }

  export type passenger_ticketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableEnumpassenger_ticket_discountFieldUpdateOperationsInput | $Enums.passenger_ticket_discount | null
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type seatCreateInput = {
    seat_number: string
    status?: $Enums.seat_status
    bus: busCreateNestedOneWithoutSeatInput
    ticket?: ticketCreateNestedManyWithoutSeatInput
  }

  export type seatUncheckedCreateInput = {
    id?: number
    seat_number: string
    bus_id: number
    status?: $Enums.seat_status
    ticket?: ticketUncheckedCreateNestedManyWithoutSeatInput
  }

  export type seatUpdateInput = {
    seat_number?: StringFieldUpdateOperationsInput | string
    status?: Enumseat_statusFieldUpdateOperationsInput | $Enums.seat_status
    bus?: busUpdateOneRequiredWithoutSeatNestedInput
    ticket?: ticketUpdateManyWithoutSeatNestedInput
  }

  export type seatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    seat_number?: StringFieldUpdateOperationsInput | string
    bus_id?: IntFieldUpdateOperationsInput | number
    status?: Enumseat_statusFieldUpdateOperationsInput | $Enums.seat_status
    ticket?: ticketUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type seatCreateManyInput = {
    id?: number
    seat_number: string
    bus_id: number
    status?: $Enums.seat_status
  }

  export type seatUpdateManyMutationInput = {
    seat_number?: StringFieldUpdateOperationsInput | string
    status?: Enumseat_statusFieldUpdateOperationsInput | $Enums.seat_status
  }

  export type seatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    seat_number?: StringFieldUpdateOperationsInput | string
    bus_id?: IntFieldUpdateOperationsInput | number
    status?: Enumseat_statusFieldUpdateOperationsInput | $Enums.seat_status
  }

  export type stationCreateInput = {
    name: string
    bus?: busCreateNestedManyWithoutStationInput
    cashier?: cashierCreateNestedManyWithoutStationInput
    trip_trip_dest_station_idTostation?: tripCreateNestedManyWithoutStation_trip_dest_station_idTostationInput
    trip_trip_src_station_idTostation?: tripCreateNestedManyWithoutStation_trip_src_station_idTostationInput
  }

  export type stationUncheckedCreateInput = {
    id?: number
    name: string
    bus?: busUncheckedCreateNestedManyWithoutStationInput
    cashier?: cashierUncheckedCreateNestedManyWithoutStationInput
    trip_trip_dest_station_idTostation?: tripUncheckedCreateNestedManyWithoutStation_trip_dest_station_idTostationInput
    trip_trip_src_station_idTostation?: tripUncheckedCreateNestedManyWithoutStation_trip_src_station_idTostationInput
  }

  export type stationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bus?: busUpdateManyWithoutStationNestedInput
    cashier?: cashierUpdateManyWithoutStationNestedInput
    trip_trip_dest_station_idTostation?: tripUpdateManyWithoutStation_trip_dest_station_idTostationNestedInput
    trip_trip_src_station_idTostation?: tripUpdateManyWithoutStation_trip_src_station_idTostationNestedInput
  }

  export type stationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bus?: busUncheckedUpdateManyWithoutStationNestedInput
    cashier?: cashierUncheckedUpdateManyWithoutStationNestedInput
    trip_trip_dest_station_idTostation?: tripUncheckedUpdateManyWithoutStation_trip_dest_station_idTostationNestedInput
    trip_trip_src_station_idTostation?: tripUncheckedUpdateManyWithoutStation_trip_src_station_idTostationNestedInput
  }

  export type stationCreateManyInput = {
    id?: number
    name: string
  }

  export type stationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type stationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ticketCreateInput = {
    price: Decimal | DecimalJsLike | number | string
    ticket_type: $Enums.ticket_ticket_type
    createdAt?: Date | string | null
    baggage_ticket?: baggage_ticketCreateNestedOneWithoutTicketInput
    passenger_ticket?: passenger_ticketCreateNestedOneWithoutTicketInput
    cashier: cashierCreateNestedOneWithoutTicketInput
    trip: tripCreateNestedOneWithoutTicketInput
    seat?: seatCreateNestedOneWithoutTicketInput
  }

  export type ticketUncheckedCreateInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    trip_id: number
    cashier_id: number
    ticket_type: $Enums.ticket_ticket_type
    seat_id?: number | null
    createdAt?: Date | string | null
    baggage_ticket?: baggage_ticketUncheckedCreateNestedOneWithoutTicketInput
    passenger_ticket?: passenger_ticketUncheckedCreateNestedOneWithoutTicketInput
  }

  export type ticketUpdateInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baggage_ticket?: baggage_ticketUpdateOneWithoutTicketNestedInput
    passenger_ticket?: passenger_ticketUpdateOneWithoutTicketNestedInput
    cashier?: cashierUpdateOneRequiredWithoutTicketNestedInput
    trip?: tripUpdateOneRequiredWithoutTicketNestedInput
    seat?: seatUpdateOneWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trip_id?: IntFieldUpdateOperationsInput | number
    cashier_id?: IntFieldUpdateOperationsInput | number
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baggage_ticket?: baggage_ticketUncheckedUpdateOneWithoutTicketNestedInput
    passenger_ticket?: passenger_ticketUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type ticketCreateManyInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    trip_id: number
    cashier_id: number
    ticket_type: $Enums.ticket_ticket_type
    seat_id?: number | null
    createdAt?: Date | string | null
  }

  export type ticketUpdateManyMutationInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ticketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trip_id?: IntFieldUpdateOperationsInput | number
    cashier_id?: IntFieldUpdateOperationsInput | number
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tripCreateInput = {
    start_time?: Date | string | null
    end_time?: Date | string | null
    status?: $Enums.trip_status | null
    ticket?: ticketCreateNestedManyWithoutTripInput
    bus: busCreateNestedOneWithoutTripInput
    driver: driverCreateNestedOneWithoutTripInput
    station_trip_dest_station_idTostation: stationCreateNestedOneWithoutTrip_trip_dest_station_idTostationInput
    station_trip_src_station_idTostation: stationCreateNestedOneWithoutTrip_trip_src_station_idTostationInput
  }

  export type tripUncheckedCreateInput = {
    id?: number
    start_time?: Date | string | null
    end_time?: Date | string | null
    dest_station_id: number
    src_station_id: number
    bus_id: number
    driver_id: number
    status?: $Enums.trip_status | null
    ticket?: ticketUncheckedCreateNestedManyWithoutTripInput
  }

  export type tripUpdateInput = {
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
    ticket?: ticketUpdateManyWithoutTripNestedInput
    bus?: busUpdateOneRequiredWithoutTripNestedInput
    driver?: driverUpdateOneRequiredWithoutTripNestedInput
    station_trip_dest_station_idTostation?: stationUpdateOneRequiredWithoutTrip_trip_dest_station_idTostationNestedInput
    station_trip_src_station_idTostation?: stationUpdateOneRequiredWithoutTrip_trip_src_station_idTostationNestedInput
  }

  export type tripUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dest_station_id?: IntFieldUpdateOperationsInput | number
    src_station_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
    ticket?: ticketUncheckedUpdateManyWithoutTripNestedInput
  }

  export type tripCreateManyInput = {
    id?: number
    start_time?: Date | string | null
    end_time?: Date | string | null
    dest_station_id: number
    src_station_id: number
    bus_id: number
    driver_id: number
    status?: $Enums.trip_status | null
  }

  export type tripUpdateManyMutationInput = {
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
  }

  export type tripUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dest_station_id?: IntFieldUpdateOperationsInput | number
    src_station_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
  }

  export type userCreateInput = {
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.user_role
    cashier?: cashierCreateNestedManyWithoutUserInput
    driver?: driverCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.user_role
    cashier?: cashierUncheckedCreateNestedManyWithoutUserInput
    driver?: driverUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    cashier?: cashierUpdateManyWithoutUserNestedInput
    driver?: driverUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    cashier?: cashierUncheckedUpdateManyWithoutUserNestedInput
    driver?: driverUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.user_role
  }

  export type userUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TicketScalarRelationFilter = {
    is?: ticketWhereInput
    isNot?: ticketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type baggage_ticketOrderByRelevanceInput = {
    fields: baggage_ticketOrderByRelevanceFieldEnum | baggage_ticketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type baggage_ticketCountOrderByAggregateInput = {
    id?: SortOrder
    sender_no?: SortOrder
    dispatcher_no?: SortOrder
    sender_name?: SortOrder
    receiver_name?: SortOrder
    item?: SortOrder
    ticket_id?: SortOrder
  }

  export type baggage_ticketAvgOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
  }

  export type baggage_ticketMaxOrderByAggregateInput = {
    id?: SortOrder
    sender_no?: SortOrder
    dispatcher_no?: SortOrder
    sender_name?: SortOrder
    receiver_name?: SortOrder
    item?: SortOrder
    ticket_id?: SortOrder
  }

  export type baggage_ticketMinOrderByAggregateInput = {
    id?: SortOrder
    sender_no?: SortOrder
    dispatcher_no?: SortOrder
    sender_name?: SortOrder
    receiver_name?: SortOrder
    item?: SortOrder
    ticket_id?: SortOrder
  }

  export type baggage_ticketSumOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StationScalarRelationFilter = {
    is?: stationWhereInput
    isNot?: stationWhereInput
  }

  export type SeatListRelationFilter = {
    every?: seatWhereInput
    some?: seatWhereInput
    none?: seatWhereInput
  }

  export type TripListRelationFilter = {
    every?: tripWhereInput
    some?: tripWhereInput
    none?: tripWhereInput
  }

  export type seatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type busOrderByRelevanceInput = {
    fields: busOrderByRelevanceFieldEnum | busOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type busCountOrderByAggregateInput = {
    id?: SortOrder
    plate_number?: SortOrder
    capacity?: SortOrder
    station_id?: SortOrder
  }

  export type busAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    station_id?: SortOrder
  }

  export type busMaxOrderByAggregateInput = {
    id?: SortOrder
    plate_number?: SortOrder
    capacity?: SortOrder
    station_id?: SortOrder
  }

  export type busMinOrderByAggregateInput = {
    id?: SortOrder
    plate_number?: SortOrder
    capacity?: SortOrder
    station_id?: SortOrder
  }

  export type busSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    station_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type TicketListRelationFilter = {
    every?: ticketWhereInput
    some?: ticketWhereInput
    none?: ticketWhereInput
  }

  export type ticketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cashierOrderByRelevanceInput = {
    fields: cashierOrderByRelevanceFieldEnum | cashierOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type cashierCountOrderByAggregateInput = {
    id?: SortOrder
    shift_start?: SortOrder
    shift_end?: SortOrder
    station_id?: SortOrder
    user_id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
  }

  export type cashierAvgOrderByAggregateInput = {
    id?: SortOrder
    station_id?: SortOrder
    user_id?: SortOrder
  }

  export type cashierMaxOrderByAggregateInput = {
    id?: SortOrder
    shift_start?: SortOrder
    shift_end?: SortOrder
    station_id?: SortOrder
    user_id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
  }

  export type cashierMinOrderByAggregateInput = {
    id?: SortOrder
    shift_start?: SortOrder
    shift_end?: SortOrder
    station_id?: SortOrder
    user_id?: SortOrder
    last_name?: SortOrder
    first_name?: SortOrder
  }

  export type cashierSumOrderByAggregateInput = {
    id?: SortOrder
    station_id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type driverOrderByRelevanceInput = {
    fields: driverOrderByRelevanceFieldEnum | driverOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type driverCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    user_id?: SortOrder
  }

  export type driverAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type driverMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    user_id?: SortOrder
  }

  export type driverMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    user_id?: SortOrder
  }

  export type driverSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type Enumpassenger_ticket_discountNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.passenger_ticket_discount | Enumpassenger_ticket_discountFieldRefInput<$PrismaModel> | null
    in?: $Enums.passenger_ticket_discount[] | null
    notIn?: $Enums.passenger_ticket_discount[] | null
    not?: NestedEnumpassenger_ticket_discountNullableFilter<$PrismaModel> | $Enums.passenger_ticket_discount | null
  }

  export type passenger_ticketOrderByRelevanceInput = {
    fields: passenger_ticketOrderByRelevanceFieldEnum | passenger_ticketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type passenger_ticketCountOrderByAggregateInput = {
    id?: SortOrder
    passenger_name?: SortOrder
    discount?: SortOrder
    ticket_id?: SortOrder
  }

  export type passenger_ticketAvgOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
  }

  export type passenger_ticketMaxOrderByAggregateInput = {
    id?: SortOrder
    passenger_name?: SortOrder
    discount?: SortOrder
    ticket_id?: SortOrder
  }

  export type passenger_ticketMinOrderByAggregateInput = {
    id?: SortOrder
    passenger_name?: SortOrder
    discount?: SortOrder
    ticket_id?: SortOrder
  }

  export type passenger_ticketSumOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
  }

  export type Enumpassenger_ticket_discountNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.passenger_ticket_discount | Enumpassenger_ticket_discountFieldRefInput<$PrismaModel> | null
    in?: $Enums.passenger_ticket_discount[] | null
    notIn?: $Enums.passenger_ticket_discount[] | null
    not?: NestedEnumpassenger_ticket_discountNullableWithAggregatesFilter<$PrismaModel> | $Enums.passenger_ticket_discount | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpassenger_ticket_discountNullableFilter<$PrismaModel>
    _max?: NestedEnumpassenger_ticket_discountNullableFilter<$PrismaModel>
  }

  export type Enumseat_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.seat_status | Enumseat_statusFieldRefInput<$PrismaModel>
    in?: $Enums.seat_status[]
    notIn?: $Enums.seat_status[]
    not?: NestedEnumseat_statusFilter<$PrismaModel> | $Enums.seat_status
  }

  export type BusScalarRelationFilter = {
    is?: busWhereInput
    isNot?: busWhereInput
  }

  export type seatOrderByRelevanceInput = {
    fields: seatOrderByRelevanceFieldEnum | seatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type seatBus_idSeat_numberCompoundUniqueInput = {
    bus_id: number
    seat_number: string
  }

  export type seatCountOrderByAggregateInput = {
    id?: SortOrder
    seat_number?: SortOrder
    bus_id?: SortOrder
    status?: SortOrder
  }

  export type seatAvgOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
  }

  export type seatMaxOrderByAggregateInput = {
    id?: SortOrder
    seat_number?: SortOrder
    bus_id?: SortOrder
    status?: SortOrder
  }

  export type seatMinOrderByAggregateInput = {
    id?: SortOrder
    seat_number?: SortOrder
    bus_id?: SortOrder
    status?: SortOrder
  }

  export type seatSumOrderByAggregateInput = {
    id?: SortOrder
    bus_id?: SortOrder
  }

  export type Enumseat_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.seat_status | Enumseat_statusFieldRefInput<$PrismaModel>
    in?: $Enums.seat_status[]
    notIn?: $Enums.seat_status[]
    not?: NestedEnumseat_statusWithAggregatesFilter<$PrismaModel> | $Enums.seat_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumseat_statusFilter<$PrismaModel>
    _max?: NestedEnumseat_statusFilter<$PrismaModel>
  }

  export type BusListRelationFilter = {
    every?: busWhereInput
    some?: busWhereInput
    none?: busWhereInput
  }

  export type CashierListRelationFilter = {
    every?: cashierWhereInput
    some?: cashierWhereInput
    none?: cashierWhereInput
  }

  export type busOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cashierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stationOrderByRelevanceInput = {
    fields: stationOrderByRelevanceFieldEnum | stationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type stationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Enumticket_ticket_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_ticket_type | Enumticket_ticket_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ticket_ticket_type[]
    notIn?: $Enums.ticket_ticket_type[]
    not?: NestedEnumticket_ticket_typeFilter<$PrismaModel> | $Enums.ticket_ticket_type
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Baggage_ticketNullableScalarRelationFilter = {
    is?: baggage_ticketWhereInput | null
    isNot?: baggage_ticketWhereInput | null
  }

  export type Passenger_ticketNullableScalarRelationFilter = {
    is?: passenger_ticketWhereInput | null
    isNot?: passenger_ticketWhereInput | null
  }

  export type CashierScalarRelationFilter = {
    is?: cashierWhereInput
    isNot?: cashierWhereInput
  }

  export type TripScalarRelationFilter = {
    is?: tripWhereInput
    isNot?: tripWhereInput
  }

  export type SeatNullableScalarRelationFilter = {
    is?: seatWhereInput | null
    isNot?: seatWhereInput | null
  }

  export type ticketCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    trip_id?: SortOrder
    cashier_id?: SortOrder
    ticket_type?: SortOrder
    seat_id?: SortOrder
    createdAt?: SortOrder
  }

  export type ticketAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    trip_id?: SortOrder
    cashier_id?: SortOrder
    seat_id?: SortOrder
  }

  export type ticketMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    trip_id?: SortOrder
    cashier_id?: SortOrder
    ticket_type?: SortOrder
    seat_id?: SortOrder
    createdAt?: SortOrder
  }

  export type ticketMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    trip_id?: SortOrder
    cashier_id?: SortOrder
    ticket_type?: SortOrder
    seat_id?: SortOrder
    createdAt?: SortOrder
  }

  export type ticketSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    trip_id?: SortOrder
    cashier_id?: SortOrder
    seat_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Enumticket_ticket_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_ticket_type | Enumticket_ticket_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ticket_ticket_type[]
    notIn?: $Enums.ticket_ticket_type[]
    not?: NestedEnumticket_ticket_typeWithAggregatesFilter<$PrismaModel> | $Enums.ticket_ticket_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumticket_ticket_typeFilter<$PrismaModel>
    _max?: NestedEnumticket_ticket_typeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Enumtrip_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.trip_status | Enumtrip_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.trip_status[] | null
    notIn?: $Enums.trip_status[] | null
    not?: NestedEnumtrip_statusNullableFilter<$PrismaModel> | $Enums.trip_status | null
  }

  export type DriverScalarRelationFilter = {
    is?: driverWhereInput
    isNot?: driverWhereInput
  }

  export type tripCountOrderByAggregateInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    dest_station_id?: SortOrder
    src_station_id?: SortOrder
    bus_id?: SortOrder
    driver_id?: SortOrder
    status?: SortOrder
  }

  export type tripAvgOrderByAggregateInput = {
    id?: SortOrder
    dest_station_id?: SortOrder
    src_station_id?: SortOrder
    bus_id?: SortOrder
    driver_id?: SortOrder
  }

  export type tripMaxOrderByAggregateInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    dest_station_id?: SortOrder
    src_station_id?: SortOrder
    bus_id?: SortOrder
    driver_id?: SortOrder
    status?: SortOrder
  }

  export type tripMinOrderByAggregateInput = {
    id?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    dest_station_id?: SortOrder
    src_station_id?: SortOrder
    bus_id?: SortOrder
    driver_id?: SortOrder
    status?: SortOrder
  }

  export type tripSumOrderByAggregateInput = {
    id?: SortOrder
    dest_station_id?: SortOrder
    src_station_id?: SortOrder
    bus_id?: SortOrder
    driver_id?: SortOrder
  }

  export type Enumtrip_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.trip_status | Enumtrip_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.trip_status[] | null
    notIn?: $Enums.trip_status[] | null
    not?: NestedEnumtrip_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.trip_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtrip_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumtrip_statusNullableFilter<$PrismaModel>
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type DriverListRelationFilter = {
    every?: driverWhereInput
    some?: driverWhereInput
    none?: driverWhereInput
  }

  export type driverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userOrderByRelevanceInput = {
    fields: userOrderByRelevanceFieldEnum | userOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type ticketCreateNestedOneWithoutBaggage_ticketInput = {
    create?: XOR<ticketCreateWithoutBaggage_ticketInput, ticketUncheckedCreateWithoutBaggage_ticketInput>
    connectOrCreate?: ticketCreateOrConnectWithoutBaggage_ticketInput
    connect?: ticketWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ticketUpdateOneRequiredWithoutBaggage_ticketNestedInput = {
    create?: XOR<ticketCreateWithoutBaggage_ticketInput, ticketUncheckedCreateWithoutBaggage_ticketInput>
    connectOrCreate?: ticketCreateOrConnectWithoutBaggage_ticketInput
    upsert?: ticketUpsertWithoutBaggage_ticketInput
    connect?: ticketWhereUniqueInput
    update?: XOR<XOR<ticketUpdateToOneWithWhereWithoutBaggage_ticketInput, ticketUpdateWithoutBaggage_ticketInput>, ticketUncheckedUpdateWithoutBaggage_ticketInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type stationCreateNestedOneWithoutBusInput = {
    create?: XOR<stationCreateWithoutBusInput, stationUncheckedCreateWithoutBusInput>
    connectOrCreate?: stationCreateOrConnectWithoutBusInput
    connect?: stationWhereUniqueInput
  }

  export type seatCreateNestedManyWithoutBusInput = {
    create?: XOR<seatCreateWithoutBusInput, seatUncheckedCreateWithoutBusInput> | seatCreateWithoutBusInput[] | seatUncheckedCreateWithoutBusInput[]
    connectOrCreate?: seatCreateOrConnectWithoutBusInput | seatCreateOrConnectWithoutBusInput[]
    createMany?: seatCreateManyBusInputEnvelope
    connect?: seatWhereUniqueInput | seatWhereUniqueInput[]
  }

  export type tripCreateNestedManyWithoutBusInput = {
    create?: XOR<tripCreateWithoutBusInput, tripUncheckedCreateWithoutBusInput> | tripCreateWithoutBusInput[] | tripUncheckedCreateWithoutBusInput[]
    connectOrCreate?: tripCreateOrConnectWithoutBusInput | tripCreateOrConnectWithoutBusInput[]
    createMany?: tripCreateManyBusInputEnvelope
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
  }

  export type seatUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<seatCreateWithoutBusInput, seatUncheckedCreateWithoutBusInput> | seatCreateWithoutBusInput[] | seatUncheckedCreateWithoutBusInput[]
    connectOrCreate?: seatCreateOrConnectWithoutBusInput | seatCreateOrConnectWithoutBusInput[]
    createMany?: seatCreateManyBusInputEnvelope
    connect?: seatWhereUniqueInput | seatWhereUniqueInput[]
  }

  export type tripUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<tripCreateWithoutBusInput, tripUncheckedCreateWithoutBusInput> | tripCreateWithoutBusInput[] | tripUncheckedCreateWithoutBusInput[]
    connectOrCreate?: tripCreateOrConnectWithoutBusInput | tripCreateOrConnectWithoutBusInput[]
    createMany?: tripCreateManyBusInputEnvelope
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
  }

  export type stationUpdateOneRequiredWithoutBusNestedInput = {
    create?: XOR<stationCreateWithoutBusInput, stationUncheckedCreateWithoutBusInput>
    connectOrCreate?: stationCreateOrConnectWithoutBusInput
    upsert?: stationUpsertWithoutBusInput
    connect?: stationWhereUniqueInput
    update?: XOR<XOR<stationUpdateToOneWithWhereWithoutBusInput, stationUpdateWithoutBusInput>, stationUncheckedUpdateWithoutBusInput>
  }

  export type seatUpdateManyWithoutBusNestedInput = {
    create?: XOR<seatCreateWithoutBusInput, seatUncheckedCreateWithoutBusInput> | seatCreateWithoutBusInput[] | seatUncheckedCreateWithoutBusInput[]
    connectOrCreate?: seatCreateOrConnectWithoutBusInput | seatCreateOrConnectWithoutBusInput[]
    upsert?: seatUpsertWithWhereUniqueWithoutBusInput | seatUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: seatCreateManyBusInputEnvelope
    set?: seatWhereUniqueInput | seatWhereUniqueInput[]
    disconnect?: seatWhereUniqueInput | seatWhereUniqueInput[]
    delete?: seatWhereUniqueInput | seatWhereUniqueInput[]
    connect?: seatWhereUniqueInput | seatWhereUniqueInput[]
    update?: seatUpdateWithWhereUniqueWithoutBusInput | seatUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: seatUpdateManyWithWhereWithoutBusInput | seatUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: seatScalarWhereInput | seatScalarWhereInput[]
  }

  export type tripUpdateManyWithoutBusNestedInput = {
    create?: XOR<tripCreateWithoutBusInput, tripUncheckedCreateWithoutBusInput> | tripCreateWithoutBusInput[] | tripUncheckedCreateWithoutBusInput[]
    connectOrCreate?: tripCreateOrConnectWithoutBusInput | tripCreateOrConnectWithoutBusInput[]
    upsert?: tripUpsertWithWhereUniqueWithoutBusInput | tripUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: tripCreateManyBusInputEnvelope
    set?: tripWhereUniqueInput | tripWhereUniqueInput[]
    disconnect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    delete?: tripWhereUniqueInput | tripWhereUniqueInput[]
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    update?: tripUpdateWithWhereUniqueWithoutBusInput | tripUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: tripUpdateManyWithWhereWithoutBusInput | tripUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: tripScalarWhereInput | tripScalarWhereInput[]
  }

  export type seatUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<seatCreateWithoutBusInput, seatUncheckedCreateWithoutBusInput> | seatCreateWithoutBusInput[] | seatUncheckedCreateWithoutBusInput[]
    connectOrCreate?: seatCreateOrConnectWithoutBusInput | seatCreateOrConnectWithoutBusInput[]
    upsert?: seatUpsertWithWhereUniqueWithoutBusInput | seatUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: seatCreateManyBusInputEnvelope
    set?: seatWhereUniqueInput | seatWhereUniqueInput[]
    disconnect?: seatWhereUniqueInput | seatWhereUniqueInput[]
    delete?: seatWhereUniqueInput | seatWhereUniqueInput[]
    connect?: seatWhereUniqueInput | seatWhereUniqueInput[]
    update?: seatUpdateWithWhereUniqueWithoutBusInput | seatUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: seatUpdateManyWithWhereWithoutBusInput | seatUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: seatScalarWhereInput | seatScalarWhereInput[]
  }

  export type tripUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<tripCreateWithoutBusInput, tripUncheckedCreateWithoutBusInput> | tripCreateWithoutBusInput[] | tripUncheckedCreateWithoutBusInput[]
    connectOrCreate?: tripCreateOrConnectWithoutBusInput | tripCreateOrConnectWithoutBusInput[]
    upsert?: tripUpsertWithWhereUniqueWithoutBusInput | tripUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: tripCreateManyBusInputEnvelope
    set?: tripWhereUniqueInput | tripWhereUniqueInput[]
    disconnect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    delete?: tripWhereUniqueInput | tripWhereUniqueInput[]
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    update?: tripUpdateWithWhereUniqueWithoutBusInput | tripUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: tripUpdateManyWithWhereWithoutBusInput | tripUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: tripScalarWhereInput | tripScalarWhereInput[]
  }

  export type stationCreateNestedOneWithoutCashierInput = {
    create?: XOR<stationCreateWithoutCashierInput, stationUncheckedCreateWithoutCashierInput>
    connectOrCreate?: stationCreateOrConnectWithoutCashierInput
    connect?: stationWhereUniqueInput
  }

  export type userCreateNestedOneWithoutCashierInput = {
    create?: XOR<userCreateWithoutCashierInput, userUncheckedCreateWithoutCashierInput>
    connectOrCreate?: userCreateOrConnectWithoutCashierInput
    connect?: userWhereUniqueInput
  }

  export type ticketCreateNestedManyWithoutCashierInput = {
    create?: XOR<ticketCreateWithoutCashierInput, ticketUncheckedCreateWithoutCashierInput> | ticketCreateWithoutCashierInput[] | ticketUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutCashierInput | ticketCreateOrConnectWithoutCashierInput[]
    createMany?: ticketCreateManyCashierInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutCashierInput = {
    create?: XOR<ticketCreateWithoutCashierInput, ticketUncheckedCreateWithoutCashierInput> | ticketCreateWithoutCashierInput[] | ticketUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutCashierInput | ticketCreateOrConnectWithoutCashierInput[]
    createMany?: ticketCreateManyCashierInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type stationUpdateOneRequiredWithoutCashierNestedInput = {
    create?: XOR<stationCreateWithoutCashierInput, stationUncheckedCreateWithoutCashierInput>
    connectOrCreate?: stationCreateOrConnectWithoutCashierInput
    upsert?: stationUpsertWithoutCashierInput
    connect?: stationWhereUniqueInput
    update?: XOR<XOR<stationUpdateToOneWithWhereWithoutCashierInput, stationUpdateWithoutCashierInput>, stationUncheckedUpdateWithoutCashierInput>
  }

  export type userUpdateOneRequiredWithoutCashierNestedInput = {
    create?: XOR<userCreateWithoutCashierInput, userUncheckedCreateWithoutCashierInput>
    connectOrCreate?: userCreateOrConnectWithoutCashierInput
    upsert?: userUpsertWithoutCashierInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCashierInput, userUpdateWithoutCashierInput>, userUncheckedUpdateWithoutCashierInput>
  }

  export type ticketUpdateManyWithoutCashierNestedInput = {
    create?: XOR<ticketCreateWithoutCashierInput, ticketUncheckedCreateWithoutCashierInput> | ticketCreateWithoutCashierInput[] | ticketUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutCashierInput | ticketCreateOrConnectWithoutCashierInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutCashierInput | ticketUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: ticketCreateManyCashierInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutCashierInput | ticketUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutCashierInput | ticketUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type ticketUncheckedUpdateManyWithoutCashierNestedInput = {
    create?: XOR<ticketCreateWithoutCashierInput, ticketUncheckedCreateWithoutCashierInput> | ticketCreateWithoutCashierInput[] | ticketUncheckedCreateWithoutCashierInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutCashierInput | ticketCreateOrConnectWithoutCashierInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutCashierInput | ticketUpsertWithWhereUniqueWithoutCashierInput[]
    createMany?: ticketCreateManyCashierInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutCashierInput | ticketUpdateWithWhereUniqueWithoutCashierInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutCashierInput | ticketUpdateManyWithWhereWithoutCashierInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutDriverInput = {
    create?: XOR<userCreateWithoutDriverInput, userUncheckedCreateWithoutDriverInput>
    connectOrCreate?: userCreateOrConnectWithoutDriverInput
    connect?: userWhereUniqueInput
  }

  export type tripCreateNestedManyWithoutDriverInput = {
    create?: XOR<tripCreateWithoutDriverInput, tripUncheckedCreateWithoutDriverInput> | tripCreateWithoutDriverInput[] | tripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: tripCreateOrConnectWithoutDriverInput | tripCreateOrConnectWithoutDriverInput[]
    createMany?: tripCreateManyDriverInputEnvelope
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
  }

  export type tripUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<tripCreateWithoutDriverInput, tripUncheckedCreateWithoutDriverInput> | tripCreateWithoutDriverInput[] | tripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: tripCreateOrConnectWithoutDriverInput | tripCreateOrConnectWithoutDriverInput[]
    createMany?: tripCreateManyDriverInputEnvelope
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutDriverNestedInput = {
    create?: XOR<userCreateWithoutDriverInput, userUncheckedCreateWithoutDriverInput>
    connectOrCreate?: userCreateOrConnectWithoutDriverInput
    upsert?: userUpsertWithoutDriverInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutDriverInput, userUpdateWithoutDriverInput>, userUncheckedUpdateWithoutDriverInput>
  }

  export type tripUpdateManyWithoutDriverNestedInput = {
    create?: XOR<tripCreateWithoutDriverInput, tripUncheckedCreateWithoutDriverInput> | tripCreateWithoutDriverInput[] | tripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: tripCreateOrConnectWithoutDriverInput | tripCreateOrConnectWithoutDriverInput[]
    upsert?: tripUpsertWithWhereUniqueWithoutDriverInput | tripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: tripCreateManyDriverInputEnvelope
    set?: tripWhereUniqueInput | tripWhereUniqueInput[]
    disconnect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    delete?: tripWhereUniqueInput | tripWhereUniqueInput[]
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    update?: tripUpdateWithWhereUniqueWithoutDriverInput | tripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: tripUpdateManyWithWhereWithoutDriverInput | tripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: tripScalarWhereInput | tripScalarWhereInput[]
  }

  export type tripUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<tripCreateWithoutDriverInput, tripUncheckedCreateWithoutDriverInput> | tripCreateWithoutDriverInput[] | tripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: tripCreateOrConnectWithoutDriverInput | tripCreateOrConnectWithoutDriverInput[]
    upsert?: tripUpsertWithWhereUniqueWithoutDriverInput | tripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: tripCreateManyDriverInputEnvelope
    set?: tripWhereUniqueInput | tripWhereUniqueInput[]
    disconnect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    delete?: tripWhereUniqueInput | tripWhereUniqueInput[]
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    update?: tripUpdateWithWhereUniqueWithoutDriverInput | tripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: tripUpdateManyWithWhereWithoutDriverInput | tripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: tripScalarWhereInput | tripScalarWhereInput[]
  }

  export type ticketCreateNestedOneWithoutPassenger_ticketInput = {
    create?: XOR<ticketCreateWithoutPassenger_ticketInput, ticketUncheckedCreateWithoutPassenger_ticketInput>
    connectOrCreate?: ticketCreateOrConnectWithoutPassenger_ticketInput
    connect?: ticketWhereUniqueInput
  }

  export type NullableEnumpassenger_ticket_discountFieldUpdateOperationsInput = {
    set?: $Enums.passenger_ticket_discount | null
  }

  export type ticketUpdateOneRequiredWithoutPassenger_ticketNestedInput = {
    create?: XOR<ticketCreateWithoutPassenger_ticketInput, ticketUncheckedCreateWithoutPassenger_ticketInput>
    connectOrCreate?: ticketCreateOrConnectWithoutPassenger_ticketInput
    upsert?: ticketUpsertWithoutPassenger_ticketInput
    connect?: ticketWhereUniqueInput
    update?: XOR<XOR<ticketUpdateToOneWithWhereWithoutPassenger_ticketInput, ticketUpdateWithoutPassenger_ticketInput>, ticketUncheckedUpdateWithoutPassenger_ticketInput>
  }

  export type busCreateNestedOneWithoutSeatInput = {
    create?: XOR<busCreateWithoutSeatInput, busUncheckedCreateWithoutSeatInput>
    connectOrCreate?: busCreateOrConnectWithoutSeatInput
    connect?: busWhereUniqueInput
  }

  export type ticketCreateNestedManyWithoutSeatInput = {
    create?: XOR<ticketCreateWithoutSeatInput, ticketUncheckedCreateWithoutSeatInput> | ticketCreateWithoutSeatInput[] | ticketUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSeatInput | ticketCreateOrConnectWithoutSeatInput[]
    createMany?: ticketCreateManySeatInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type ticketUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<ticketCreateWithoutSeatInput, ticketUncheckedCreateWithoutSeatInput> | ticketCreateWithoutSeatInput[] | ticketUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSeatInput | ticketCreateOrConnectWithoutSeatInput[]
    createMany?: ticketCreateManySeatInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type Enumseat_statusFieldUpdateOperationsInput = {
    set?: $Enums.seat_status
  }

  export type busUpdateOneRequiredWithoutSeatNestedInput = {
    create?: XOR<busCreateWithoutSeatInput, busUncheckedCreateWithoutSeatInput>
    connectOrCreate?: busCreateOrConnectWithoutSeatInput
    upsert?: busUpsertWithoutSeatInput
    connect?: busWhereUniqueInput
    update?: XOR<XOR<busUpdateToOneWithWhereWithoutSeatInput, busUpdateWithoutSeatInput>, busUncheckedUpdateWithoutSeatInput>
  }

  export type ticketUpdateManyWithoutSeatNestedInput = {
    create?: XOR<ticketCreateWithoutSeatInput, ticketUncheckedCreateWithoutSeatInput> | ticketCreateWithoutSeatInput[] | ticketUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSeatInput | ticketCreateOrConnectWithoutSeatInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutSeatInput | ticketUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: ticketCreateManySeatInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutSeatInput | ticketUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutSeatInput | ticketUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type ticketUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<ticketCreateWithoutSeatInput, ticketUncheckedCreateWithoutSeatInput> | ticketCreateWithoutSeatInput[] | ticketUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutSeatInput | ticketCreateOrConnectWithoutSeatInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutSeatInput | ticketUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: ticketCreateManySeatInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutSeatInput | ticketUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutSeatInput | ticketUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type busCreateNestedManyWithoutStationInput = {
    create?: XOR<busCreateWithoutStationInput, busUncheckedCreateWithoutStationInput> | busCreateWithoutStationInput[] | busUncheckedCreateWithoutStationInput[]
    connectOrCreate?: busCreateOrConnectWithoutStationInput | busCreateOrConnectWithoutStationInput[]
    createMany?: busCreateManyStationInputEnvelope
    connect?: busWhereUniqueInput | busWhereUniqueInput[]
  }

  export type cashierCreateNestedManyWithoutStationInput = {
    create?: XOR<cashierCreateWithoutStationInput, cashierUncheckedCreateWithoutStationInput> | cashierCreateWithoutStationInput[] | cashierUncheckedCreateWithoutStationInput[]
    connectOrCreate?: cashierCreateOrConnectWithoutStationInput | cashierCreateOrConnectWithoutStationInput[]
    createMany?: cashierCreateManyStationInputEnvelope
    connect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
  }

  export type tripCreateNestedManyWithoutStation_trip_dest_station_idTostationInput = {
    create?: XOR<tripCreateWithoutStation_trip_dest_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_dest_station_idTostationInput> | tripCreateWithoutStation_trip_dest_station_idTostationInput[] | tripUncheckedCreateWithoutStation_trip_dest_station_idTostationInput[]
    connectOrCreate?: tripCreateOrConnectWithoutStation_trip_dest_station_idTostationInput | tripCreateOrConnectWithoutStation_trip_dest_station_idTostationInput[]
    createMany?: tripCreateManyStation_trip_dest_station_idTostationInputEnvelope
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
  }

  export type tripCreateNestedManyWithoutStation_trip_src_station_idTostationInput = {
    create?: XOR<tripCreateWithoutStation_trip_src_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_src_station_idTostationInput> | tripCreateWithoutStation_trip_src_station_idTostationInput[] | tripUncheckedCreateWithoutStation_trip_src_station_idTostationInput[]
    connectOrCreate?: tripCreateOrConnectWithoutStation_trip_src_station_idTostationInput | tripCreateOrConnectWithoutStation_trip_src_station_idTostationInput[]
    createMany?: tripCreateManyStation_trip_src_station_idTostationInputEnvelope
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
  }

  export type busUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<busCreateWithoutStationInput, busUncheckedCreateWithoutStationInput> | busCreateWithoutStationInput[] | busUncheckedCreateWithoutStationInput[]
    connectOrCreate?: busCreateOrConnectWithoutStationInput | busCreateOrConnectWithoutStationInput[]
    createMany?: busCreateManyStationInputEnvelope
    connect?: busWhereUniqueInput | busWhereUniqueInput[]
  }

  export type cashierUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<cashierCreateWithoutStationInput, cashierUncheckedCreateWithoutStationInput> | cashierCreateWithoutStationInput[] | cashierUncheckedCreateWithoutStationInput[]
    connectOrCreate?: cashierCreateOrConnectWithoutStationInput | cashierCreateOrConnectWithoutStationInput[]
    createMany?: cashierCreateManyStationInputEnvelope
    connect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
  }

  export type tripUncheckedCreateNestedManyWithoutStation_trip_dest_station_idTostationInput = {
    create?: XOR<tripCreateWithoutStation_trip_dest_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_dest_station_idTostationInput> | tripCreateWithoutStation_trip_dest_station_idTostationInput[] | tripUncheckedCreateWithoutStation_trip_dest_station_idTostationInput[]
    connectOrCreate?: tripCreateOrConnectWithoutStation_trip_dest_station_idTostationInput | tripCreateOrConnectWithoutStation_trip_dest_station_idTostationInput[]
    createMany?: tripCreateManyStation_trip_dest_station_idTostationInputEnvelope
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
  }

  export type tripUncheckedCreateNestedManyWithoutStation_trip_src_station_idTostationInput = {
    create?: XOR<tripCreateWithoutStation_trip_src_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_src_station_idTostationInput> | tripCreateWithoutStation_trip_src_station_idTostationInput[] | tripUncheckedCreateWithoutStation_trip_src_station_idTostationInput[]
    connectOrCreate?: tripCreateOrConnectWithoutStation_trip_src_station_idTostationInput | tripCreateOrConnectWithoutStation_trip_src_station_idTostationInput[]
    createMany?: tripCreateManyStation_trip_src_station_idTostationInputEnvelope
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
  }

  export type busUpdateManyWithoutStationNestedInput = {
    create?: XOR<busCreateWithoutStationInput, busUncheckedCreateWithoutStationInput> | busCreateWithoutStationInput[] | busUncheckedCreateWithoutStationInput[]
    connectOrCreate?: busCreateOrConnectWithoutStationInput | busCreateOrConnectWithoutStationInput[]
    upsert?: busUpsertWithWhereUniqueWithoutStationInput | busUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: busCreateManyStationInputEnvelope
    set?: busWhereUniqueInput | busWhereUniqueInput[]
    disconnect?: busWhereUniqueInput | busWhereUniqueInput[]
    delete?: busWhereUniqueInput | busWhereUniqueInput[]
    connect?: busWhereUniqueInput | busWhereUniqueInput[]
    update?: busUpdateWithWhereUniqueWithoutStationInput | busUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: busUpdateManyWithWhereWithoutStationInput | busUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: busScalarWhereInput | busScalarWhereInput[]
  }

  export type cashierUpdateManyWithoutStationNestedInput = {
    create?: XOR<cashierCreateWithoutStationInput, cashierUncheckedCreateWithoutStationInput> | cashierCreateWithoutStationInput[] | cashierUncheckedCreateWithoutStationInput[]
    connectOrCreate?: cashierCreateOrConnectWithoutStationInput | cashierCreateOrConnectWithoutStationInput[]
    upsert?: cashierUpsertWithWhereUniqueWithoutStationInput | cashierUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: cashierCreateManyStationInputEnvelope
    set?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    disconnect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    delete?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    connect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    update?: cashierUpdateWithWhereUniqueWithoutStationInput | cashierUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: cashierUpdateManyWithWhereWithoutStationInput | cashierUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: cashierScalarWhereInput | cashierScalarWhereInput[]
  }

  export type tripUpdateManyWithoutStation_trip_dest_station_idTostationNestedInput = {
    create?: XOR<tripCreateWithoutStation_trip_dest_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_dest_station_idTostationInput> | tripCreateWithoutStation_trip_dest_station_idTostationInput[] | tripUncheckedCreateWithoutStation_trip_dest_station_idTostationInput[]
    connectOrCreate?: tripCreateOrConnectWithoutStation_trip_dest_station_idTostationInput | tripCreateOrConnectWithoutStation_trip_dest_station_idTostationInput[]
    upsert?: tripUpsertWithWhereUniqueWithoutStation_trip_dest_station_idTostationInput | tripUpsertWithWhereUniqueWithoutStation_trip_dest_station_idTostationInput[]
    createMany?: tripCreateManyStation_trip_dest_station_idTostationInputEnvelope
    set?: tripWhereUniqueInput | tripWhereUniqueInput[]
    disconnect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    delete?: tripWhereUniqueInput | tripWhereUniqueInput[]
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    update?: tripUpdateWithWhereUniqueWithoutStation_trip_dest_station_idTostationInput | tripUpdateWithWhereUniqueWithoutStation_trip_dest_station_idTostationInput[]
    updateMany?: tripUpdateManyWithWhereWithoutStation_trip_dest_station_idTostationInput | tripUpdateManyWithWhereWithoutStation_trip_dest_station_idTostationInput[]
    deleteMany?: tripScalarWhereInput | tripScalarWhereInput[]
  }

  export type tripUpdateManyWithoutStation_trip_src_station_idTostationNestedInput = {
    create?: XOR<tripCreateWithoutStation_trip_src_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_src_station_idTostationInput> | tripCreateWithoutStation_trip_src_station_idTostationInput[] | tripUncheckedCreateWithoutStation_trip_src_station_idTostationInput[]
    connectOrCreate?: tripCreateOrConnectWithoutStation_trip_src_station_idTostationInput | tripCreateOrConnectWithoutStation_trip_src_station_idTostationInput[]
    upsert?: tripUpsertWithWhereUniqueWithoutStation_trip_src_station_idTostationInput | tripUpsertWithWhereUniqueWithoutStation_trip_src_station_idTostationInput[]
    createMany?: tripCreateManyStation_trip_src_station_idTostationInputEnvelope
    set?: tripWhereUniqueInput | tripWhereUniqueInput[]
    disconnect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    delete?: tripWhereUniqueInput | tripWhereUniqueInput[]
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    update?: tripUpdateWithWhereUniqueWithoutStation_trip_src_station_idTostationInput | tripUpdateWithWhereUniqueWithoutStation_trip_src_station_idTostationInput[]
    updateMany?: tripUpdateManyWithWhereWithoutStation_trip_src_station_idTostationInput | tripUpdateManyWithWhereWithoutStation_trip_src_station_idTostationInput[]
    deleteMany?: tripScalarWhereInput | tripScalarWhereInput[]
  }

  export type busUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<busCreateWithoutStationInput, busUncheckedCreateWithoutStationInput> | busCreateWithoutStationInput[] | busUncheckedCreateWithoutStationInput[]
    connectOrCreate?: busCreateOrConnectWithoutStationInput | busCreateOrConnectWithoutStationInput[]
    upsert?: busUpsertWithWhereUniqueWithoutStationInput | busUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: busCreateManyStationInputEnvelope
    set?: busWhereUniqueInput | busWhereUniqueInput[]
    disconnect?: busWhereUniqueInput | busWhereUniqueInput[]
    delete?: busWhereUniqueInput | busWhereUniqueInput[]
    connect?: busWhereUniqueInput | busWhereUniqueInput[]
    update?: busUpdateWithWhereUniqueWithoutStationInput | busUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: busUpdateManyWithWhereWithoutStationInput | busUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: busScalarWhereInput | busScalarWhereInput[]
  }

  export type cashierUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<cashierCreateWithoutStationInput, cashierUncheckedCreateWithoutStationInput> | cashierCreateWithoutStationInput[] | cashierUncheckedCreateWithoutStationInput[]
    connectOrCreate?: cashierCreateOrConnectWithoutStationInput | cashierCreateOrConnectWithoutStationInput[]
    upsert?: cashierUpsertWithWhereUniqueWithoutStationInput | cashierUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: cashierCreateManyStationInputEnvelope
    set?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    disconnect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    delete?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    connect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    update?: cashierUpdateWithWhereUniqueWithoutStationInput | cashierUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: cashierUpdateManyWithWhereWithoutStationInput | cashierUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: cashierScalarWhereInput | cashierScalarWhereInput[]
  }

  export type tripUncheckedUpdateManyWithoutStation_trip_dest_station_idTostationNestedInput = {
    create?: XOR<tripCreateWithoutStation_trip_dest_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_dest_station_idTostationInput> | tripCreateWithoutStation_trip_dest_station_idTostationInput[] | tripUncheckedCreateWithoutStation_trip_dest_station_idTostationInput[]
    connectOrCreate?: tripCreateOrConnectWithoutStation_trip_dest_station_idTostationInput | tripCreateOrConnectWithoutStation_trip_dest_station_idTostationInput[]
    upsert?: tripUpsertWithWhereUniqueWithoutStation_trip_dest_station_idTostationInput | tripUpsertWithWhereUniqueWithoutStation_trip_dest_station_idTostationInput[]
    createMany?: tripCreateManyStation_trip_dest_station_idTostationInputEnvelope
    set?: tripWhereUniqueInput | tripWhereUniqueInput[]
    disconnect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    delete?: tripWhereUniqueInput | tripWhereUniqueInput[]
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    update?: tripUpdateWithWhereUniqueWithoutStation_trip_dest_station_idTostationInput | tripUpdateWithWhereUniqueWithoutStation_trip_dest_station_idTostationInput[]
    updateMany?: tripUpdateManyWithWhereWithoutStation_trip_dest_station_idTostationInput | tripUpdateManyWithWhereWithoutStation_trip_dest_station_idTostationInput[]
    deleteMany?: tripScalarWhereInput | tripScalarWhereInput[]
  }

  export type tripUncheckedUpdateManyWithoutStation_trip_src_station_idTostationNestedInput = {
    create?: XOR<tripCreateWithoutStation_trip_src_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_src_station_idTostationInput> | tripCreateWithoutStation_trip_src_station_idTostationInput[] | tripUncheckedCreateWithoutStation_trip_src_station_idTostationInput[]
    connectOrCreate?: tripCreateOrConnectWithoutStation_trip_src_station_idTostationInput | tripCreateOrConnectWithoutStation_trip_src_station_idTostationInput[]
    upsert?: tripUpsertWithWhereUniqueWithoutStation_trip_src_station_idTostationInput | tripUpsertWithWhereUniqueWithoutStation_trip_src_station_idTostationInput[]
    createMany?: tripCreateManyStation_trip_src_station_idTostationInputEnvelope
    set?: tripWhereUniqueInput | tripWhereUniqueInput[]
    disconnect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    delete?: tripWhereUniqueInput | tripWhereUniqueInput[]
    connect?: tripWhereUniqueInput | tripWhereUniqueInput[]
    update?: tripUpdateWithWhereUniqueWithoutStation_trip_src_station_idTostationInput | tripUpdateWithWhereUniqueWithoutStation_trip_src_station_idTostationInput[]
    updateMany?: tripUpdateManyWithWhereWithoutStation_trip_src_station_idTostationInput | tripUpdateManyWithWhereWithoutStation_trip_src_station_idTostationInput[]
    deleteMany?: tripScalarWhereInput | tripScalarWhereInput[]
  }

  export type baggage_ticketCreateNestedOneWithoutTicketInput = {
    create?: XOR<baggage_ticketCreateWithoutTicketInput, baggage_ticketUncheckedCreateWithoutTicketInput>
    connectOrCreate?: baggage_ticketCreateOrConnectWithoutTicketInput
    connect?: baggage_ticketWhereUniqueInput
  }

  export type passenger_ticketCreateNestedOneWithoutTicketInput = {
    create?: XOR<passenger_ticketCreateWithoutTicketInput, passenger_ticketUncheckedCreateWithoutTicketInput>
    connectOrCreate?: passenger_ticketCreateOrConnectWithoutTicketInput
    connect?: passenger_ticketWhereUniqueInput
  }

  export type cashierCreateNestedOneWithoutTicketInput = {
    create?: XOR<cashierCreateWithoutTicketInput, cashierUncheckedCreateWithoutTicketInput>
    connectOrCreate?: cashierCreateOrConnectWithoutTicketInput
    connect?: cashierWhereUniqueInput
  }

  export type tripCreateNestedOneWithoutTicketInput = {
    create?: XOR<tripCreateWithoutTicketInput, tripUncheckedCreateWithoutTicketInput>
    connectOrCreate?: tripCreateOrConnectWithoutTicketInput
    connect?: tripWhereUniqueInput
  }

  export type seatCreateNestedOneWithoutTicketInput = {
    create?: XOR<seatCreateWithoutTicketInput, seatUncheckedCreateWithoutTicketInput>
    connectOrCreate?: seatCreateOrConnectWithoutTicketInput
    connect?: seatWhereUniqueInput
  }

  export type baggage_ticketUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<baggage_ticketCreateWithoutTicketInput, baggage_ticketUncheckedCreateWithoutTicketInput>
    connectOrCreate?: baggage_ticketCreateOrConnectWithoutTicketInput
    connect?: baggage_ticketWhereUniqueInput
  }

  export type passenger_ticketUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<passenger_ticketCreateWithoutTicketInput, passenger_ticketUncheckedCreateWithoutTicketInput>
    connectOrCreate?: passenger_ticketCreateOrConnectWithoutTicketInput
    connect?: passenger_ticketWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Enumticket_ticket_typeFieldUpdateOperationsInput = {
    set?: $Enums.ticket_ticket_type
  }

  export type baggage_ticketUpdateOneWithoutTicketNestedInput = {
    create?: XOR<baggage_ticketCreateWithoutTicketInput, baggage_ticketUncheckedCreateWithoutTicketInput>
    connectOrCreate?: baggage_ticketCreateOrConnectWithoutTicketInput
    upsert?: baggage_ticketUpsertWithoutTicketInput
    disconnect?: baggage_ticketWhereInput | boolean
    delete?: baggage_ticketWhereInput | boolean
    connect?: baggage_ticketWhereUniqueInput
    update?: XOR<XOR<baggage_ticketUpdateToOneWithWhereWithoutTicketInput, baggage_ticketUpdateWithoutTicketInput>, baggage_ticketUncheckedUpdateWithoutTicketInput>
  }

  export type passenger_ticketUpdateOneWithoutTicketNestedInput = {
    create?: XOR<passenger_ticketCreateWithoutTicketInput, passenger_ticketUncheckedCreateWithoutTicketInput>
    connectOrCreate?: passenger_ticketCreateOrConnectWithoutTicketInput
    upsert?: passenger_ticketUpsertWithoutTicketInput
    disconnect?: passenger_ticketWhereInput | boolean
    delete?: passenger_ticketWhereInput | boolean
    connect?: passenger_ticketWhereUniqueInput
    update?: XOR<XOR<passenger_ticketUpdateToOneWithWhereWithoutTicketInput, passenger_ticketUpdateWithoutTicketInput>, passenger_ticketUncheckedUpdateWithoutTicketInput>
  }

  export type cashierUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<cashierCreateWithoutTicketInput, cashierUncheckedCreateWithoutTicketInput>
    connectOrCreate?: cashierCreateOrConnectWithoutTicketInput
    upsert?: cashierUpsertWithoutTicketInput
    connect?: cashierWhereUniqueInput
    update?: XOR<XOR<cashierUpdateToOneWithWhereWithoutTicketInput, cashierUpdateWithoutTicketInput>, cashierUncheckedUpdateWithoutTicketInput>
  }

  export type tripUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<tripCreateWithoutTicketInput, tripUncheckedCreateWithoutTicketInput>
    connectOrCreate?: tripCreateOrConnectWithoutTicketInput
    upsert?: tripUpsertWithoutTicketInput
    connect?: tripWhereUniqueInput
    update?: XOR<XOR<tripUpdateToOneWithWhereWithoutTicketInput, tripUpdateWithoutTicketInput>, tripUncheckedUpdateWithoutTicketInput>
  }

  export type seatUpdateOneWithoutTicketNestedInput = {
    create?: XOR<seatCreateWithoutTicketInput, seatUncheckedCreateWithoutTicketInput>
    connectOrCreate?: seatCreateOrConnectWithoutTicketInput
    upsert?: seatUpsertWithoutTicketInput
    disconnect?: seatWhereInput | boolean
    delete?: seatWhereInput | boolean
    connect?: seatWhereUniqueInput
    update?: XOR<XOR<seatUpdateToOneWithWhereWithoutTicketInput, seatUpdateWithoutTicketInput>, seatUncheckedUpdateWithoutTicketInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type baggage_ticketUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<baggage_ticketCreateWithoutTicketInput, baggage_ticketUncheckedCreateWithoutTicketInput>
    connectOrCreate?: baggage_ticketCreateOrConnectWithoutTicketInput
    upsert?: baggage_ticketUpsertWithoutTicketInput
    disconnect?: baggage_ticketWhereInput | boolean
    delete?: baggage_ticketWhereInput | boolean
    connect?: baggage_ticketWhereUniqueInput
    update?: XOR<XOR<baggage_ticketUpdateToOneWithWhereWithoutTicketInput, baggage_ticketUpdateWithoutTicketInput>, baggage_ticketUncheckedUpdateWithoutTicketInput>
  }

  export type passenger_ticketUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<passenger_ticketCreateWithoutTicketInput, passenger_ticketUncheckedCreateWithoutTicketInput>
    connectOrCreate?: passenger_ticketCreateOrConnectWithoutTicketInput
    upsert?: passenger_ticketUpsertWithoutTicketInput
    disconnect?: passenger_ticketWhereInput | boolean
    delete?: passenger_ticketWhereInput | boolean
    connect?: passenger_ticketWhereUniqueInput
    update?: XOR<XOR<passenger_ticketUpdateToOneWithWhereWithoutTicketInput, passenger_ticketUpdateWithoutTicketInput>, passenger_ticketUncheckedUpdateWithoutTicketInput>
  }

  export type ticketCreateNestedManyWithoutTripInput = {
    create?: XOR<ticketCreateWithoutTripInput, ticketUncheckedCreateWithoutTripInput> | ticketCreateWithoutTripInput[] | ticketUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutTripInput | ticketCreateOrConnectWithoutTripInput[]
    createMany?: ticketCreateManyTripInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type busCreateNestedOneWithoutTripInput = {
    create?: XOR<busCreateWithoutTripInput, busUncheckedCreateWithoutTripInput>
    connectOrCreate?: busCreateOrConnectWithoutTripInput
    connect?: busWhereUniqueInput
  }

  export type driverCreateNestedOneWithoutTripInput = {
    create?: XOR<driverCreateWithoutTripInput, driverUncheckedCreateWithoutTripInput>
    connectOrCreate?: driverCreateOrConnectWithoutTripInput
    connect?: driverWhereUniqueInput
  }

  export type stationCreateNestedOneWithoutTrip_trip_dest_station_idTostationInput = {
    create?: XOR<stationCreateWithoutTrip_trip_dest_station_idTostationInput, stationUncheckedCreateWithoutTrip_trip_dest_station_idTostationInput>
    connectOrCreate?: stationCreateOrConnectWithoutTrip_trip_dest_station_idTostationInput
    connect?: stationWhereUniqueInput
  }

  export type stationCreateNestedOneWithoutTrip_trip_src_station_idTostationInput = {
    create?: XOR<stationCreateWithoutTrip_trip_src_station_idTostationInput, stationUncheckedCreateWithoutTrip_trip_src_station_idTostationInput>
    connectOrCreate?: stationCreateOrConnectWithoutTrip_trip_src_station_idTostationInput
    connect?: stationWhereUniqueInput
  }

  export type ticketUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<ticketCreateWithoutTripInput, ticketUncheckedCreateWithoutTripInput> | ticketCreateWithoutTripInput[] | ticketUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutTripInput | ticketCreateOrConnectWithoutTripInput[]
    createMany?: ticketCreateManyTripInputEnvelope
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
  }

  export type NullableEnumtrip_statusFieldUpdateOperationsInput = {
    set?: $Enums.trip_status | null
  }

  export type ticketUpdateManyWithoutTripNestedInput = {
    create?: XOR<ticketCreateWithoutTripInput, ticketUncheckedCreateWithoutTripInput> | ticketCreateWithoutTripInput[] | ticketUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutTripInput | ticketCreateOrConnectWithoutTripInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutTripInput | ticketUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ticketCreateManyTripInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutTripInput | ticketUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutTripInput | ticketUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type busUpdateOneRequiredWithoutTripNestedInput = {
    create?: XOR<busCreateWithoutTripInput, busUncheckedCreateWithoutTripInput>
    connectOrCreate?: busCreateOrConnectWithoutTripInput
    upsert?: busUpsertWithoutTripInput
    connect?: busWhereUniqueInput
    update?: XOR<XOR<busUpdateToOneWithWhereWithoutTripInput, busUpdateWithoutTripInput>, busUncheckedUpdateWithoutTripInput>
  }

  export type driverUpdateOneRequiredWithoutTripNestedInput = {
    create?: XOR<driverCreateWithoutTripInput, driverUncheckedCreateWithoutTripInput>
    connectOrCreate?: driverCreateOrConnectWithoutTripInput
    upsert?: driverUpsertWithoutTripInput
    connect?: driverWhereUniqueInput
    update?: XOR<XOR<driverUpdateToOneWithWhereWithoutTripInput, driverUpdateWithoutTripInput>, driverUncheckedUpdateWithoutTripInput>
  }

  export type stationUpdateOneRequiredWithoutTrip_trip_dest_station_idTostationNestedInput = {
    create?: XOR<stationCreateWithoutTrip_trip_dest_station_idTostationInput, stationUncheckedCreateWithoutTrip_trip_dest_station_idTostationInput>
    connectOrCreate?: stationCreateOrConnectWithoutTrip_trip_dest_station_idTostationInput
    upsert?: stationUpsertWithoutTrip_trip_dest_station_idTostationInput
    connect?: stationWhereUniqueInput
    update?: XOR<XOR<stationUpdateToOneWithWhereWithoutTrip_trip_dest_station_idTostationInput, stationUpdateWithoutTrip_trip_dest_station_idTostationInput>, stationUncheckedUpdateWithoutTrip_trip_dest_station_idTostationInput>
  }

  export type stationUpdateOneRequiredWithoutTrip_trip_src_station_idTostationNestedInput = {
    create?: XOR<stationCreateWithoutTrip_trip_src_station_idTostationInput, stationUncheckedCreateWithoutTrip_trip_src_station_idTostationInput>
    connectOrCreate?: stationCreateOrConnectWithoutTrip_trip_src_station_idTostationInput
    upsert?: stationUpsertWithoutTrip_trip_src_station_idTostationInput
    connect?: stationWhereUniqueInput
    update?: XOR<XOR<stationUpdateToOneWithWhereWithoutTrip_trip_src_station_idTostationInput, stationUpdateWithoutTrip_trip_src_station_idTostationInput>, stationUncheckedUpdateWithoutTrip_trip_src_station_idTostationInput>
  }

  export type ticketUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<ticketCreateWithoutTripInput, ticketUncheckedCreateWithoutTripInput> | ticketCreateWithoutTripInput[] | ticketUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ticketCreateOrConnectWithoutTripInput | ticketCreateOrConnectWithoutTripInput[]
    upsert?: ticketUpsertWithWhereUniqueWithoutTripInput | ticketUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ticketCreateManyTripInputEnvelope
    set?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    disconnect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    delete?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    connect?: ticketWhereUniqueInput | ticketWhereUniqueInput[]
    update?: ticketUpdateWithWhereUniqueWithoutTripInput | ticketUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ticketUpdateManyWithWhereWithoutTripInput | ticketUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ticketScalarWhereInput | ticketScalarWhereInput[]
  }

  export type cashierCreateNestedManyWithoutUserInput = {
    create?: XOR<cashierCreateWithoutUserInput, cashierUncheckedCreateWithoutUserInput> | cashierCreateWithoutUserInput[] | cashierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cashierCreateOrConnectWithoutUserInput | cashierCreateOrConnectWithoutUserInput[]
    createMany?: cashierCreateManyUserInputEnvelope
    connect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
  }

  export type driverCreateNestedManyWithoutUserInput = {
    create?: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput> | driverCreateWithoutUserInput[] | driverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: driverCreateOrConnectWithoutUserInput | driverCreateOrConnectWithoutUserInput[]
    createMany?: driverCreateManyUserInputEnvelope
    connect?: driverWhereUniqueInput | driverWhereUniqueInput[]
  }

  export type cashierUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<cashierCreateWithoutUserInput, cashierUncheckedCreateWithoutUserInput> | cashierCreateWithoutUserInput[] | cashierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cashierCreateOrConnectWithoutUserInput | cashierCreateOrConnectWithoutUserInput[]
    createMany?: cashierCreateManyUserInputEnvelope
    connect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
  }

  export type driverUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput> | driverCreateWithoutUserInput[] | driverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: driverCreateOrConnectWithoutUserInput | driverCreateOrConnectWithoutUserInput[]
    createMany?: driverCreateManyUserInputEnvelope
    connect?: driverWhereUniqueInput | driverWhereUniqueInput[]
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type cashierUpdateManyWithoutUserNestedInput = {
    create?: XOR<cashierCreateWithoutUserInput, cashierUncheckedCreateWithoutUserInput> | cashierCreateWithoutUserInput[] | cashierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cashierCreateOrConnectWithoutUserInput | cashierCreateOrConnectWithoutUserInput[]
    upsert?: cashierUpsertWithWhereUniqueWithoutUserInput | cashierUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cashierCreateManyUserInputEnvelope
    set?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    disconnect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    delete?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    connect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    update?: cashierUpdateWithWhereUniqueWithoutUserInput | cashierUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cashierUpdateManyWithWhereWithoutUserInput | cashierUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cashierScalarWhereInput | cashierScalarWhereInput[]
  }

  export type driverUpdateManyWithoutUserNestedInput = {
    create?: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput> | driverCreateWithoutUserInput[] | driverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: driverCreateOrConnectWithoutUserInput | driverCreateOrConnectWithoutUserInput[]
    upsert?: driverUpsertWithWhereUniqueWithoutUserInput | driverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: driverCreateManyUserInputEnvelope
    set?: driverWhereUniqueInput | driverWhereUniqueInput[]
    disconnect?: driverWhereUniqueInput | driverWhereUniqueInput[]
    delete?: driverWhereUniqueInput | driverWhereUniqueInput[]
    connect?: driverWhereUniqueInput | driverWhereUniqueInput[]
    update?: driverUpdateWithWhereUniqueWithoutUserInput | driverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: driverUpdateManyWithWhereWithoutUserInput | driverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: driverScalarWhereInput | driverScalarWhereInput[]
  }

  export type cashierUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<cashierCreateWithoutUserInput, cashierUncheckedCreateWithoutUserInput> | cashierCreateWithoutUserInput[] | cashierUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cashierCreateOrConnectWithoutUserInput | cashierCreateOrConnectWithoutUserInput[]
    upsert?: cashierUpsertWithWhereUniqueWithoutUserInput | cashierUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cashierCreateManyUserInputEnvelope
    set?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    disconnect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    delete?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    connect?: cashierWhereUniqueInput | cashierWhereUniqueInput[]
    update?: cashierUpdateWithWhereUniqueWithoutUserInput | cashierUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cashierUpdateManyWithWhereWithoutUserInput | cashierUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cashierScalarWhereInput | cashierScalarWhereInput[]
  }

  export type driverUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput> | driverCreateWithoutUserInput[] | driverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: driverCreateOrConnectWithoutUserInput | driverCreateOrConnectWithoutUserInput[]
    upsert?: driverUpsertWithWhereUniqueWithoutUserInput | driverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: driverCreateManyUserInputEnvelope
    set?: driverWhereUniqueInput | driverWhereUniqueInput[]
    disconnect?: driverWhereUniqueInput | driverWhereUniqueInput[]
    delete?: driverWhereUniqueInput | driverWhereUniqueInput[]
    connect?: driverWhereUniqueInput | driverWhereUniqueInput[]
    update?: driverUpdateWithWhereUniqueWithoutUserInput | driverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: driverUpdateManyWithWhereWithoutUserInput | driverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: driverScalarWhereInput | driverScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumpassenger_ticket_discountNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.passenger_ticket_discount | Enumpassenger_ticket_discountFieldRefInput<$PrismaModel> | null
    in?: $Enums.passenger_ticket_discount[] | null
    notIn?: $Enums.passenger_ticket_discount[] | null
    not?: NestedEnumpassenger_ticket_discountNullableFilter<$PrismaModel> | $Enums.passenger_ticket_discount | null
  }

  export type NestedEnumpassenger_ticket_discountNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.passenger_ticket_discount | Enumpassenger_ticket_discountFieldRefInput<$PrismaModel> | null
    in?: $Enums.passenger_ticket_discount[] | null
    notIn?: $Enums.passenger_ticket_discount[] | null
    not?: NestedEnumpassenger_ticket_discountNullableWithAggregatesFilter<$PrismaModel> | $Enums.passenger_ticket_discount | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpassenger_ticket_discountNullableFilter<$PrismaModel>
    _max?: NestedEnumpassenger_ticket_discountNullableFilter<$PrismaModel>
  }

  export type NestedEnumseat_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.seat_status | Enumseat_statusFieldRefInput<$PrismaModel>
    in?: $Enums.seat_status[]
    notIn?: $Enums.seat_status[]
    not?: NestedEnumseat_statusFilter<$PrismaModel> | $Enums.seat_status
  }

  export type NestedEnumseat_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.seat_status | Enumseat_statusFieldRefInput<$PrismaModel>
    in?: $Enums.seat_status[]
    notIn?: $Enums.seat_status[]
    not?: NestedEnumseat_statusWithAggregatesFilter<$PrismaModel> | $Enums.seat_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumseat_statusFilter<$PrismaModel>
    _max?: NestedEnumseat_statusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumticket_ticket_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_ticket_type | Enumticket_ticket_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ticket_ticket_type[]
    notIn?: $Enums.ticket_ticket_type[]
    not?: NestedEnumticket_ticket_typeFilter<$PrismaModel> | $Enums.ticket_ticket_type
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumticket_ticket_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ticket_ticket_type | Enumticket_ticket_typeFieldRefInput<$PrismaModel>
    in?: $Enums.ticket_ticket_type[]
    notIn?: $Enums.ticket_ticket_type[]
    not?: NestedEnumticket_ticket_typeWithAggregatesFilter<$PrismaModel> | $Enums.ticket_ticket_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumticket_ticket_typeFilter<$PrismaModel>
    _max?: NestedEnumticket_ticket_typeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumtrip_statusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.trip_status | Enumtrip_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.trip_status[] | null
    notIn?: $Enums.trip_status[] | null
    not?: NestedEnumtrip_statusNullableFilter<$PrismaModel> | $Enums.trip_status | null
  }

  export type NestedEnumtrip_statusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.trip_status | Enumtrip_statusFieldRefInput<$PrismaModel> | null
    in?: $Enums.trip_status[] | null
    notIn?: $Enums.trip_status[] | null
    not?: NestedEnumtrip_statusNullableWithAggregatesFilter<$PrismaModel> | $Enums.trip_status | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtrip_statusNullableFilter<$PrismaModel>
    _max?: NestedEnumtrip_statusNullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type ticketCreateWithoutBaggage_ticketInput = {
    price: Decimal | DecimalJsLike | number | string
    ticket_type: $Enums.ticket_ticket_type
    createdAt?: Date | string | null
    passenger_ticket?: passenger_ticketCreateNestedOneWithoutTicketInput
    cashier: cashierCreateNestedOneWithoutTicketInput
    trip: tripCreateNestedOneWithoutTicketInput
    seat?: seatCreateNestedOneWithoutTicketInput
  }

  export type ticketUncheckedCreateWithoutBaggage_ticketInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    trip_id: number
    cashier_id: number
    ticket_type: $Enums.ticket_ticket_type
    seat_id?: number | null
    createdAt?: Date | string | null
    passenger_ticket?: passenger_ticketUncheckedCreateNestedOneWithoutTicketInput
  }

  export type ticketCreateOrConnectWithoutBaggage_ticketInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutBaggage_ticketInput, ticketUncheckedCreateWithoutBaggage_ticketInput>
  }

  export type ticketUpsertWithoutBaggage_ticketInput = {
    update: XOR<ticketUpdateWithoutBaggage_ticketInput, ticketUncheckedUpdateWithoutBaggage_ticketInput>
    create: XOR<ticketCreateWithoutBaggage_ticketInput, ticketUncheckedCreateWithoutBaggage_ticketInput>
    where?: ticketWhereInput
  }

  export type ticketUpdateToOneWithWhereWithoutBaggage_ticketInput = {
    where?: ticketWhereInput
    data: XOR<ticketUpdateWithoutBaggage_ticketInput, ticketUncheckedUpdateWithoutBaggage_ticketInput>
  }

  export type ticketUpdateWithoutBaggage_ticketInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passenger_ticket?: passenger_ticketUpdateOneWithoutTicketNestedInput
    cashier?: cashierUpdateOneRequiredWithoutTicketNestedInput
    trip?: tripUpdateOneRequiredWithoutTicketNestedInput
    seat?: seatUpdateOneWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateWithoutBaggage_ticketInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trip_id?: IntFieldUpdateOperationsInput | number
    cashier_id?: IntFieldUpdateOperationsInput | number
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passenger_ticket?: passenger_ticketUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type stationCreateWithoutBusInput = {
    name: string
    cashier?: cashierCreateNestedManyWithoutStationInput
    trip_trip_dest_station_idTostation?: tripCreateNestedManyWithoutStation_trip_dest_station_idTostationInput
    trip_trip_src_station_idTostation?: tripCreateNestedManyWithoutStation_trip_src_station_idTostationInput
  }

  export type stationUncheckedCreateWithoutBusInput = {
    id?: number
    name: string
    cashier?: cashierUncheckedCreateNestedManyWithoutStationInput
    trip_trip_dest_station_idTostation?: tripUncheckedCreateNestedManyWithoutStation_trip_dest_station_idTostationInput
    trip_trip_src_station_idTostation?: tripUncheckedCreateNestedManyWithoutStation_trip_src_station_idTostationInput
  }

  export type stationCreateOrConnectWithoutBusInput = {
    where: stationWhereUniqueInput
    create: XOR<stationCreateWithoutBusInput, stationUncheckedCreateWithoutBusInput>
  }

  export type seatCreateWithoutBusInput = {
    seat_number: string
    status?: $Enums.seat_status
    ticket?: ticketCreateNestedManyWithoutSeatInput
  }

  export type seatUncheckedCreateWithoutBusInput = {
    id?: number
    seat_number: string
    status?: $Enums.seat_status
    ticket?: ticketUncheckedCreateNestedManyWithoutSeatInput
  }

  export type seatCreateOrConnectWithoutBusInput = {
    where: seatWhereUniqueInput
    create: XOR<seatCreateWithoutBusInput, seatUncheckedCreateWithoutBusInput>
  }

  export type seatCreateManyBusInputEnvelope = {
    data: seatCreateManyBusInput | seatCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type tripCreateWithoutBusInput = {
    start_time?: Date | string | null
    end_time?: Date | string | null
    status?: $Enums.trip_status | null
    ticket?: ticketCreateNestedManyWithoutTripInput
    driver: driverCreateNestedOneWithoutTripInput
    station_trip_dest_station_idTostation: stationCreateNestedOneWithoutTrip_trip_dest_station_idTostationInput
    station_trip_src_station_idTostation: stationCreateNestedOneWithoutTrip_trip_src_station_idTostationInput
  }

  export type tripUncheckedCreateWithoutBusInput = {
    id?: number
    start_time?: Date | string | null
    end_time?: Date | string | null
    dest_station_id: number
    src_station_id: number
    driver_id: number
    status?: $Enums.trip_status | null
    ticket?: ticketUncheckedCreateNestedManyWithoutTripInput
  }

  export type tripCreateOrConnectWithoutBusInput = {
    where: tripWhereUniqueInput
    create: XOR<tripCreateWithoutBusInput, tripUncheckedCreateWithoutBusInput>
  }

  export type tripCreateManyBusInputEnvelope = {
    data: tripCreateManyBusInput | tripCreateManyBusInput[]
    skipDuplicates?: boolean
  }

  export type stationUpsertWithoutBusInput = {
    update: XOR<stationUpdateWithoutBusInput, stationUncheckedUpdateWithoutBusInput>
    create: XOR<stationCreateWithoutBusInput, stationUncheckedCreateWithoutBusInput>
    where?: stationWhereInput
  }

  export type stationUpdateToOneWithWhereWithoutBusInput = {
    where?: stationWhereInput
    data: XOR<stationUpdateWithoutBusInput, stationUncheckedUpdateWithoutBusInput>
  }

  export type stationUpdateWithoutBusInput = {
    name?: StringFieldUpdateOperationsInput | string
    cashier?: cashierUpdateManyWithoutStationNestedInput
    trip_trip_dest_station_idTostation?: tripUpdateManyWithoutStation_trip_dest_station_idTostationNestedInput
    trip_trip_src_station_idTostation?: tripUpdateManyWithoutStation_trip_src_station_idTostationNestedInput
  }

  export type stationUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cashier?: cashierUncheckedUpdateManyWithoutStationNestedInput
    trip_trip_dest_station_idTostation?: tripUncheckedUpdateManyWithoutStation_trip_dest_station_idTostationNestedInput
    trip_trip_src_station_idTostation?: tripUncheckedUpdateManyWithoutStation_trip_src_station_idTostationNestedInput
  }

  export type seatUpsertWithWhereUniqueWithoutBusInput = {
    where: seatWhereUniqueInput
    update: XOR<seatUpdateWithoutBusInput, seatUncheckedUpdateWithoutBusInput>
    create: XOR<seatCreateWithoutBusInput, seatUncheckedCreateWithoutBusInput>
  }

  export type seatUpdateWithWhereUniqueWithoutBusInput = {
    where: seatWhereUniqueInput
    data: XOR<seatUpdateWithoutBusInput, seatUncheckedUpdateWithoutBusInput>
  }

  export type seatUpdateManyWithWhereWithoutBusInput = {
    where: seatScalarWhereInput
    data: XOR<seatUpdateManyMutationInput, seatUncheckedUpdateManyWithoutBusInput>
  }

  export type seatScalarWhereInput = {
    AND?: seatScalarWhereInput | seatScalarWhereInput[]
    OR?: seatScalarWhereInput[]
    NOT?: seatScalarWhereInput | seatScalarWhereInput[]
    id?: IntFilter<"seat"> | number
    seat_number?: StringFilter<"seat"> | string
    bus_id?: IntFilter<"seat"> | number
    status?: Enumseat_statusFilter<"seat"> | $Enums.seat_status
  }

  export type tripUpsertWithWhereUniqueWithoutBusInput = {
    where: tripWhereUniqueInput
    update: XOR<tripUpdateWithoutBusInput, tripUncheckedUpdateWithoutBusInput>
    create: XOR<tripCreateWithoutBusInput, tripUncheckedCreateWithoutBusInput>
  }

  export type tripUpdateWithWhereUniqueWithoutBusInput = {
    where: tripWhereUniqueInput
    data: XOR<tripUpdateWithoutBusInput, tripUncheckedUpdateWithoutBusInput>
  }

  export type tripUpdateManyWithWhereWithoutBusInput = {
    where: tripScalarWhereInput
    data: XOR<tripUpdateManyMutationInput, tripUncheckedUpdateManyWithoutBusInput>
  }

  export type tripScalarWhereInput = {
    AND?: tripScalarWhereInput | tripScalarWhereInput[]
    OR?: tripScalarWhereInput[]
    NOT?: tripScalarWhereInput | tripScalarWhereInput[]
    id?: IntFilter<"trip"> | number
    start_time?: DateTimeNullableFilter<"trip"> | Date | string | null
    end_time?: DateTimeNullableFilter<"trip"> | Date | string | null
    dest_station_id?: IntFilter<"trip"> | number
    src_station_id?: IntFilter<"trip"> | number
    bus_id?: IntFilter<"trip"> | number
    driver_id?: IntFilter<"trip"> | number
    status?: Enumtrip_statusNullableFilter<"trip"> | $Enums.trip_status | null
  }

  export type stationCreateWithoutCashierInput = {
    name: string
    bus?: busCreateNestedManyWithoutStationInput
    trip_trip_dest_station_idTostation?: tripCreateNestedManyWithoutStation_trip_dest_station_idTostationInput
    trip_trip_src_station_idTostation?: tripCreateNestedManyWithoutStation_trip_src_station_idTostationInput
  }

  export type stationUncheckedCreateWithoutCashierInput = {
    id?: number
    name: string
    bus?: busUncheckedCreateNestedManyWithoutStationInput
    trip_trip_dest_station_idTostation?: tripUncheckedCreateNestedManyWithoutStation_trip_dest_station_idTostationInput
    trip_trip_src_station_idTostation?: tripUncheckedCreateNestedManyWithoutStation_trip_src_station_idTostationInput
  }

  export type stationCreateOrConnectWithoutCashierInput = {
    where: stationWhereUniqueInput
    create: XOR<stationCreateWithoutCashierInput, stationUncheckedCreateWithoutCashierInput>
  }

  export type userCreateWithoutCashierInput = {
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.user_role
    driver?: driverCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCashierInput = {
    id?: number
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.user_role
    driver?: driverUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCashierInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCashierInput, userUncheckedCreateWithoutCashierInput>
  }

  export type ticketCreateWithoutCashierInput = {
    price: Decimal | DecimalJsLike | number | string
    ticket_type: $Enums.ticket_ticket_type
    createdAt?: Date | string | null
    baggage_ticket?: baggage_ticketCreateNestedOneWithoutTicketInput
    passenger_ticket?: passenger_ticketCreateNestedOneWithoutTicketInput
    trip: tripCreateNestedOneWithoutTicketInput
    seat?: seatCreateNestedOneWithoutTicketInput
  }

  export type ticketUncheckedCreateWithoutCashierInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    trip_id: number
    ticket_type: $Enums.ticket_ticket_type
    seat_id?: number | null
    createdAt?: Date | string | null
    baggage_ticket?: baggage_ticketUncheckedCreateNestedOneWithoutTicketInput
    passenger_ticket?: passenger_ticketUncheckedCreateNestedOneWithoutTicketInput
  }

  export type ticketCreateOrConnectWithoutCashierInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutCashierInput, ticketUncheckedCreateWithoutCashierInput>
  }

  export type ticketCreateManyCashierInputEnvelope = {
    data: ticketCreateManyCashierInput | ticketCreateManyCashierInput[]
    skipDuplicates?: boolean
  }

  export type stationUpsertWithoutCashierInput = {
    update: XOR<stationUpdateWithoutCashierInput, stationUncheckedUpdateWithoutCashierInput>
    create: XOR<stationCreateWithoutCashierInput, stationUncheckedCreateWithoutCashierInput>
    where?: stationWhereInput
  }

  export type stationUpdateToOneWithWhereWithoutCashierInput = {
    where?: stationWhereInput
    data: XOR<stationUpdateWithoutCashierInput, stationUncheckedUpdateWithoutCashierInput>
  }

  export type stationUpdateWithoutCashierInput = {
    name?: StringFieldUpdateOperationsInput | string
    bus?: busUpdateManyWithoutStationNestedInput
    trip_trip_dest_station_idTostation?: tripUpdateManyWithoutStation_trip_dest_station_idTostationNestedInput
    trip_trip_src_station_idTostation?: tripUpdateManyWithoutStation_trip_src_station_idTostationNestedInput
  }

  export type stationUncheckedUpdateWithoutCashierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bus?: busUncheckedUpdateManyWithoutStationNestedInput
    trip_trip_dest_station_idTostation?: tripUncheckedUpdateManyWithoutStation_trip_dest_station_idTostationNestedInput
    trip_trip_src_station_idTostation?: tripUncheckedUpdateManyWithoutStation_trip_src_station_idTostationNestedInput
  }

  export type userUpsertWithoutCashierInput = {
    update: XOR<userUpdateWithoutCashierInput, userUncheckedUpdateWithoutCashierInput>
    create: XOR<userCreateWithoutCashierInput, userUncheckedCreateWithoutCashierInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCashierInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCashierInput, userUncheckedUpdateWithoutCashierInput>
  }

  export type userUpdateWithoutCashierInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    driver?: driverUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCashierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    driver?: driverUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ticketUpsertWithWhereUniqueWithoutCashierInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutCashierInput, ticketUncheckedUpdateWithoutCashierInput>
    create: XOR<ticketCreateWithoutCashierInput, ticketUncheckedCreateWithoutCashierInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutCashierInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutCashierInput, ticketUncheckedUpdateWithoutCashierInput>
  }

  export type ticketUpdateManyWithWhereWithoutCashierInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutCashierInput>
  }

  export type ticketScalarWhereInput = {
    AND?: ticketScalarWhereInput | ticketScalarWhereInput[]
    OR?: ticketScalarWhereInput[]
    NOT?: ticketScalarWhereInput | ticketScalarWhereInput[]
    id?: IntFilter<"ticket"> | number
    price?: DecimalFilter<"ticket"> | Decimal | DecimalJsLike | number | string
    trip_id?: IntFilter<"ticket"> | number
    cashier_id?: IntFilter<"ticket"> | number
    ticket_type?: Enumticket_ticket_typeFilter<"ticket"> | $Enums.ticket_ticket_type
    seat_id?: IntNullableFilter<"ticket"> | number | null
    createdAt?: DateTimeNullableFilter<"ticket"> | Date | string | null
  }

  export type userCreateWithoutDriverInput = {
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.user_role
    cashier?: cashierCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutDriverInput = {
    id?: number
    name?: string | null
    email: string
    image?: string | null
    role?: $Enums.user_role
    cashier?: cashierUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutDriverInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDriverInput, userUncheckedCreateWithoutDriverInput>
  }

  export type tripCreateWithoutDriverInput = {
    start_time?: Date | string | null
    end_time?: Date | string | null
    status?: $Enums.trip_status | null
    ticket?: ticketCreateNestedManyWithoutTripInput
    bus: busCreateNestedOneWithoutTripInput
    station_trip_dest_station_idTostation: stationCreateNestedOneWithoutTrip_trip_dest_station_idTostationInput
    station_trip_src_station_idTostation: stationCreateNestedOneWithoutTrip_trip_src_station_idTostationInput
  }

  export type tripUncheckedCreateWithoutDriverInput = {
    id?: number
    start_time?: Date | string | null
    end_time?: Date | string | null
    dest_station_id: number
    src_station_id: number
    bus_id: number
    status?: $Enums.trip_status | null
    ticket?: ticketUncheckedCreateNestedManyWithoutTripInput
  }

  export type tripCreateOrConnectWithoutDriverInput = {
    where: tripWhereUniqueInput
    create: XOR<tripCreateWithoutDriverInput, tripUncheckedCreateWithoutDriverInput>
  }

  export type tripCreateManyDriverInputEnvelope = {
    data: tripCreateManyDriverInput | tripCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutDriverInput = {
    update: XOR<userUpdateWithoutDriverInput, userUncheckedUpdateWithoutDriverInput>
    create: XOR<userCreateWithoutDriverInput, userUncheckedCreateWithoutDriverInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutDriverInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutDriverInput, userUncheckedUpdateWithoutDriverInput>
  }

  export type userUpdateWithoutDriverInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    cashier?: cashierUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    cashier?: cashierUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tripUpsertWithWhereUniqueWithoutDriverInput = {
    where: tripWhereUniqueInput
    update: XOR<tripUpdateWithoutDriverInput, tripUncheckedUpdateWithoutDriverInput>
    create: XOR<tripCreateWithoutDriverInput, tripUncheckedCreateWithoutDriverInput>
  }

  export type tripUpdateWithWhereUniqueWithoutDriverInput = {
    where: tripWhereUniqueInput
    data: XOR<tripUpdateWithoutDriverInput, tripUncheckedUpdateWithoutDriverInput>
  }

  export type tripUpdateManyWithWhereWithoutDriverInput = {
    where: tripScalarWhereInput
    data: XOR<tripUpdateManyMutationInput, tripUncheckedUpdateManyWithoutDriverInput>
  }

  export type ticketCreateWithoutPassenger_ticketInput = {
    price: Decimal | DecimalJsLike | number | string
    ticket_type: $Enums.ticket_ticket_type
    createdAt?: Date | string | null
    baggage_ticket?: baggage_ticketCreateNestedOneWithoutTicketInput
    cashier: cashierCreateNestedOneWithoutTicketInput
    trip: tripCreateNestedOneWithoutTicketInput
    seat?: seatCreateNestedOneWithoutTicketInput
  }

  export type ticketUncheckedCreateWithoutPassenger_ticketInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    trip_id: number
    cashier_id: number
    ticket_type: $Enums.ticket_ticket_type
    seat_id?: number | null
    createdAt?: Date | string | null
    baggage_ticket?: baggage_ticketUncheckedCreateNestedOneWithoutTicketInput
  }

  export type ticketCreateOrConnectWithoutPassenger_ticketInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutPassenger_ticketInput, ticketUncheckedCreateWithoutPassenger_ticketInput>
  }

  export type ticketUpsertWithoutPassenger_ticketInput = {
    update: XOR<ticketUpdateWithoutPassenger_ticketInput, ticketUncheckedUpdateWithoutPassenger_ticketInput>
    create: XOR<ticketCreateWithoutPassenger_ticketInput, ticketUncheckedCreateWithoutPassenger_ticketInput>
    where?: ticketWhereInput
  }

  export type ticketUpdateToOneWithWhereWithoutPassenger_ticketInput = {
    where?: ticketWhereInput
    data: XOR<ticketUpdateWithoutPassenger_ticketInput, ticketUncheckedUpdateWithoutPassenger_ticketInput>
  }

  export type ticketUpdateWithoutPassenger_ticketInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baggage_ticket?: baggage_ticketUpdateOneWithoutTicketNestedInput
    cashier?: cashierUpdateOneRequiredWithoutTicketNestedInput
    trip?: tripUpdateOneRequiredWithoutTicketNestedInput
    seat?: seatUpdateOneWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateWithoutPassenger_ticketInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trip_id?: IntFieldUpdateOperationsInput | number
    cashier_id?: IntFieldUpdateOperationsInput | number
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baggage_ticket?: baggage_ticketUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type busCreateWithoutSeatInput = {
    plate_number: string
    capacity: number
    station: stationCreateNestedOneWithoutBusInput
    trip?: tripCreateNestedManyWithoutBusInput
  }

  export type busUncheckedCreateWithoutSeatInput = {
    id?: number
    plate_number: string
    capacity: number
    station_id: number
    trip?: tripUncheckedCreateNestedManyWithoutBusInput
  }

  export type busCreateOrConnectWithoutSeatInput = {
    where: busWhereUniqueInput
    create: XOR<busCreateWithoutSeatInput, busUncheckedCreateWithoutSeatInput>
  }

  export type ticketCreateWithoutSeatInput = {
    price: Decimal | DecimalJsLike | number | string
    ticket_type: $Enums.ticket_ticket_type
    createdAt?: Date | string | null
    baggage_ticket?: baggage_ticketCreateNestedOneWithoutTicketInput
    passenger_ticket?: passenger_ticketCreateNestedOneWithoutTicketInput
    cashier: cashierCreateNestedOneWithoutTicketInput
    trip: tripCreateNestedOneWithoutTicketInput
  }

  export type ticketUncheckedCreateWithoutSeatInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    trip_id: number
    cashier_id: number
    ticket_type: $Enums.ticket_ticket_type
    createdAt?: Date | string | null
    baggage_ticket?: baggage_ticketUncheckedCreateNestedOneWithoutTicketInput
    passenger_ticket?: passenger_ticketUncheckedCreateNestedOneWithoutTicketInput
  }

  export type ticketCreateOrConnectWithoutSeatInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutSeatInput, ticketUncheckedCreateWithoutSeatInput>
  }

  export type ticketCreateManySeatInputEnvelope = {
    data: ticketCreateManySeatInput | ticketCreateManySeatInput[]
    skipDuplicates?: boolean
  }

  export type busUpsertWithoutSeatInput = {
    update: XOR<busUpdateWithoutSeatInput, busUncheckedUpdateWithoutSeatInput>
    create: XOR<busCreateWithoutSeatInput, busUncheckedCreateWithoutSeatInput>
    where?: busWhereInput
  }

  export type busUpdateToOneWithWhereWithoutSeatInput = {
    where?: busWhereInput
    data: XOR<busUpdateWithoutSeatInput, busUncheckedUpdateWithoutSeatInput>
  }

  export type busUpdateWithoutSeatInput = {
    plate_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    station?: stationUpdateOneRequiredWithoutBusNestedInput
    trip?: tripUpdateManyWithoutBusNestedInput
  }

  export type busUncheckedUpdateWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    trip?: tripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type ticketUpsertWithWhereUniqueWithoutSeatInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutSeatInput, ticketUncheckedUpdateWithoutSeatInput>
    create: XOR<ticketCreateWithoutSeatInput, ticketUncheckedCreateWithoutSeatInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutSeatInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutSeatInput, ticketUncheckedUpdateWithoutSeatInput>
  }

  export type ticketUpdateManyWithWhereWithoutSeatInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutSeatInput>
  }

  export type busCreateWithoutStationInput = {
    plate_number: string
    capacity: number
    seat?: seatCreateNestedManyWithoutBusInput
    trip?: tripCreateNestedManyWithoutBusInput
  }

  export type busUncheckedCreateWithoutStationInput = {
    id?: number
    plate_number: string
    capacity: number
    seat?: seatUncheckedCreateNestedManyWithoutBusInput
    trip?: tripUncheckedCreateNestedManyWithoutBusInput
  }

  export type busCreateOrConnectWithoutStationInput = {
    where: busWhereUniqueInput
    create: XOR<busCreateWithoutStationInput, busUncheckedCreateWithoutStationInput>
  }

  export type busCreateManyStationInputEnvelope = {
    data: busCreateManyStationInput | busCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type cashierCreateWithoutStationInput = {
    shift_start?: Date | string | null
    shift_end?: Date | string | null
    last_name: string
    first_name: string
    user: userCreateNestedOneWithoutCashierInput
    ticket?: ticketCreateNestedManyWithoutCashierInput
  }

  export type cashierUncheckedCreateWithoutStationInput = {
    id?: number
    shift_start?: Date | string | null
    shift_end?: Date | string | null
    user_id: number
    last_name: string
    first_name: string
    ticket?: ticketUncheckedCreateNestedManyWithoutCashierInput
  }

  export type cashierCreateOrConnectWithoutStationInput = {
    where: cashierWhereUniqueInput
    create: XOR<cashierCreateWithoutStationInput, cashierUncheckedCreateWithoutStationInput>
  }

  export type cashierCreateManyStationInputEnvelope = {
    data: cashierCreateManyStationInput | cashierCreateManyStationInput[]
    skipDuplicates?: boolean
  }

  export type tripCreateWithoutStation_trip_dest_station_idTostationInput = {
    start_time?: Date | string | null
    end_time?: Date | string | null
    status?: $Enums.trip_status | null
    ticket?: ticketCreateNestedManyWithoutTripInput
    bus: busCreateNestedOneWithoutTripInput
    driver: driverCreateNestedOneWithoutTripInput
    station_trip_src_station_idTostation: stationCreateNestedOneWithoutTrip_trip_src_station_idTostationInput
  }

  export type tripUncheckedCreateWithoutStation_trip_dest_station_idTostationInput = {
    id?: number
    start_time?: Date | string | null
    end_time?: Date | string | null
    src_station_id: number
    bus_id: number
    driver_id: number
    status?: $Enums.trip_status | null
    ticket?: ticketUncheckedCreateNestedManyWithoutTripInput
  }

  export type tripCreateOrConnectWithoutStation_trip_dest_station_idTostationInput = {
    where: tripWhereUniqueInput
    create: XOR<tripCreateWithoutStation_trip_dest_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_dest_station_idTostationInput>
  }

  export type tripCreateManyStation_trip_dest_station_idTostationInputEnvelope = {
    data: tripCreateManyStation_trip_dest_station_idTostationInput | tripCreateManyStation_trip_dest_station_idTostationInput[]
    skipDuplicates?: boolean
  }

  export type tripCreateWithoutStation_trip_src_station_idTostationInput = {
    start_time?: Date | string | null
    end_time?: Date | string | null
    status?: $Enums.trip_status | null
    ticket?: ticketCreateNestedManyWithoutTripInput
    bus: busCreateNestedOneWithoutTripInput
    driver: driverCreateNestedOneWithoutTripInput
    station_trip_dest_station_idTostation: stationCreateNestedOneWithoutTrip_trip_dest_station_idTostationInput
  }

  export type tripUncheckedCreateWithoutStation_trip_src_station_idTostationInput = {
    id?: number
    start_time?: Date | string | null
    end_time?: Date | string | null
    dest_station_id: number
    bus_id: number
    driver_id: number
    status?: $Enums.trip_status | null
    ticket?: ticketUncheckedCreateNestedManyWithoutTripInput
  }

  export type tripCreateOrConnectWithoutStation_trip_src_station_idTostationInput = {
    where: tripWhereUniqueInput
    create: XOR<tripCreateWithoutStation_trip_src_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_src_station_idTostationInput>
  }

  export type tripCreateManyStation_trip_src_station_idTostationInputEnvelope = {
    data: tripCreateManyStation_trip_src_station_idTostationInput | tripCreateManyStation_trip_src_station_idTostationInput[]
    skipDuplicates?: boolean
  }

  export type busUpsertWithWhereUniqueWithoutStationInput = {
    where: busWhereUniqueInput
    update: XOR<busUpdateWithoutStationInput, busUncheckedUpdateWithoutStationInput>
    create: XOR<busCreateWithoutStationInput, busUncheckedCreateWithoutStationInput>
  }

  export type busUpdateWithWhereUniqueWithoutStationInput = {
    where: busWhereUniqueInput
    data: XOR<busUpdateWithoutStationInput, busUncheckedUpdateWithoutStationInput>
  }

  export type busUpdateManyWithWhereWithoutStationInput = {
    where: busScalarWhereInput
    data: XOR<busUpdateManyMutationInput, busUncheckedUpdateManyWithoutStationInput>
  }

  export type busScalarWhereInput = {
    AND?: busScalarWhereInput | busScalarWhereInput[]
    OR?: busScalarWhereInput[]
    NOT?: busScalarWhereInput | busScalarWhereInput[]
    id?: IntFilter<"bus"> | number
    plate_number?: StringFilter<"bus"> | string
    capacity?: IntFilter<"bus"> | number
    station_id?: IntFilter<"bus"> | number
  }

  export type cashierUpsertWithWhereUniqueWithoutStationInput = {
    where: cashierWhereUniqueInput
    update: XOR<cashierUpdateWithoutStationInput, cashierUncheckedUpdateWithoutStationInput>
    create: XOR<cashierCreateWithoutStationInput, cashierUncheckedCreateWithoutStationInput>
  }

  export type cashierUpdateWithWhereUniqueWithoutStationInput = {
    where: cashierWhereUniqueInput
    data: XOR<cashierUpdateWithoutStationInput, cashierUncheckedUpdateWithoutStationInput>
  }

  export type cashierUpdateManyWithWhereWithoutStationInput = {
    where: cashierScalarWhereInput
    data: XOR<cashierUpdateManyMutationInput, cashierUncheckedUpdateManyWithoutStationInput>
  }

  export type cashierScalarWhereInput = {
    AND?: cashierScalarWhereInput | cashierScalarWhereInput[]
    OR?: cashierScalarWhereInput[]
    NOT?: cashierScalarWhereInput | cashierScalarWhereInput[]
    id?: IntFilter<"cashier"> | number
    shift_start?: DateTimeNullableFilter<"cashier"> | Date | string | null
    shift_end?: DateTimeNullableFilter<"cashier"> | Date | string | null
    station_id?: IntFilter<"cashier"> | number
    user_id?: IntFilter<"cashier"> | number
    last_name?: StringFilter<"cashier"> | string
    first_name?: StringFilter<"cashier"> | string
  }

  export type tripUpsertWithWhereUniqueWithoutStation_trip_dest_station_idTostationInput = {
    where: tripWhereUniqueInput
    update: XOR<tripUpdateWithoutStation_trip_dest_station_idTostationInput, tripUncheckedUpdateWithoutStation_trip_dest_station_idTostationInput>
    create: XOR<tripCreateWithoutStation_trip_dest_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_dest_station_idTostationInput>
  }

  export type tripUpdateWithWhereUniqueWithoutStation_trip_dest_station_idTostationInput = {
    where: tripWhereUniqueInput
    data: XOR<tripUpdateWithoutStation_trip_dest_station_idTostationInput, tripUncheckedUpdateWithoutStation_trip_dest_station_idTostationInput>
  }

  export type tripUpdateManyWithWhereWithoutStation_trip_dest_station_idTostationInput = {
    where: tripScalarWhereInput
    data: XOR<tripUpdateManyMutationInput, tripUncheckedUpdateManyWithoutStation_trip_dest_station_idTostationInput>
  }

  export type tripUpsertWithWhereUniqueWithoutStation_trip_src_station_idTostationInput = {
    where: tripWhereUniqueInput
    update: XOR<tripUpdateWithoutStation_trip_src_station_idTostationInput, tripUncheckedUpdateWithoutStation_trip_src_station_idTostationInput>
    create: XOR<tripCreateWithoutStation_trip_src_station_idTostationInput, tripUncheckedCreateWithoutStation_trip_src_station_idTostationInput>
  }

  export type tripUpdateWithWhereUniqueWithoutStation_trip_src_station_idTostationInput = {
    where: tripWhereUniqueInput
    data: XOR<tripUpdateWithoutStation_trip_src_station_idTostationInput, tripUncheckedUpdateWithoutStation_trip_src_station_idTostationInput>
  }

  export type tripUpdateManyWithWhereWithoutStation_trip_src_station_idTostationInput = {
    where: tripScalarWhereInput
    data: XOR<tripUpdateManyMutationInput, tripUncheckedUpdateManyWithoutStation_trip_src_station_idTostationInput>
  }

  export type baggage_ticketCreateWithoutTicketInput = {
    sender_no?: string | null
    dispatcher_no?: string | null
    sender_name?: string | null
    receiver_name?: string | null
    item: string
  }

  export type baggage_ticketUncheckedCreateWithoutTicketInput = {
    id?: number
    sender_no?: string | null
    dispatcher_no?: string | null
    sender_name?: string | null
    receiver_name?: string | null
    item: string
  }

  export type baggage_ticketCreateOrConnectWithoutTicketInput = {
    where: baggage_ticketWhereUniqueInput
    create: XOR<baggage_ticketCreateWithoutTicketInput, baggage_ticketUncheckedCreateWithoutTicketInput>
  }

  export type passenger_ticketCreateWithoutTicketInput = {
    passenger_name?: string | null
    discount?: $Enums.passenger_ticket_discount | null
  }

  export type passenger_ticketUncheckedCreateWithoutTicketInput = {
    id?: number
    passenger_name?: string | null
    discount?: $Enums.passenger_ticket_discount | null
  }

  export type passenger_ticketCreateOrConnectWithoutTicketInput = {
    where: passenger_ticketWhereUniqueInput
    create: XOR<passenger_ticketCreateWithoutTicketInput, passenger_ticketUncheckedCreateWithoutTicketInput>
  }

  export type cashierCreateWithoutTicketInput = {
    shift_start?: Date | string | null
    shift_end?: Date | string | null
    last_name: string
    first_name: string
    station: stationCreateNestedOneWithoutCashierInput
    user: userCreateNestedOneWithoutCashierInput
  }

  export type cashierUncheckedCreateWithoutTicketInput = {
    id?: number
    shift_start?: Date | string | null
    shift_end?: Date | string | null
    station_id: number
    user_id: number
    last_name: string
    first_name: string
  }

  export type cashierCreateOrConnectWithoutTicketInput = {
    where: cashierWhereUniqueInput
    create: XOR<cashierCreateWithoutTicketInput, cashierUncheckedCreateWithoutTicketInput>
  }

  export type tripCreateWithoutTicketInput = {
    start_time?: Date | string | null
    end_time?: Date | string | null
    status?: $Enums.trip_status | null
    bus: busCreateNestedOneWithoutTripInput
    driver: driverCreateNestedOneWithoutTripInput
    station_trip_dest_station_idTostation: stationCreateNestedOneWithoutTrip_trip_dest_station_idTostationInput
    station_trip_src_station_idTostation: stationCreateNestedOneWithoutTrip_trip_src_station_idTostationInput
  }

  export type tripUncheckedCreateWithoutTicketInput = {
    id?: number
    start_time?: Date | string | null
    end_time?: Date | string | null
    dest_station_id: number
    src_station_id: number
    bus_id: number
    driver_id: number
    status?: $Enums.trip_status | null
  }

  export type tripCreateOrConnectWithoutTicketInput = {
    where: tripWhereUniqueInput
    create: XOR<tripCreateWithoutTicketInput, tripUncheckedCreateWithoutTicketInput>
  }

  export type seatCreateWithoutTicketInput = {
    seat_number: string
    status?: $Enums.seat_status
    bus: busCreateNestedOneWithoutSeatInput
  }

  export type seatUncheckedCreateWithoutTicketInput = {
    id?: number
    seat_number: string
    bus_id: number
    status?: $Enums.seat_status
  }

  export type seatCreateOrConnectWithoutTicketInput = {
    where: seatWhereUniqueInput
    create: XOR<seatCreateWithoutTicketInput, seatUncheckedCreateWithoutTicketInput>
  }

  export type baggage_ticketUpsertWithoutTicketInput = {
    update: XOR<baggage_ticketUpdateWithoutTicketInput, baggage_ticketUncheckedUpdateWithoutTicketInput>
    create: XOR<baggage_ticketCreateWithoutTicketInput, baggage_ticketUncheckedCreateWithoutTicketInput>
    where?: baggage_ticketWhereInput
  }

  export type baggage_ticketUpdateToOneWithWhereWithoutTicketInput = {
    where?: baggage_ticketWhereInput
    data: XOR<baggage_ticketUpdateWithoutTicketInput, baggage_ticketUncheckedUpdateWithoutTicketInput>
  }

  export type baggage_ticketUpdateWithoutTicketInput = {
    sender_no?: NullableStringFieldUpdateOperationsInput | string | null
    dispatcher_no?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_name?: NullableStringFieldUpdateOperationsInput | string | null
    item?: StringFieldUpdateOperationsInput | string
  }

  export type baggage_ticketUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender_no?: NullableStringFieldUpdateOperationsInput | string | null
    dispatcher_no?: NullableStringFieldUpdateOperationsInput | string | null
    sender_name?: NullableStringFieldUpdateOperationsInput | string | null
    receiver_name?: NullableStringFieldUpdateOperationsInput | string | null
    item?: StringFieldUpdateOperationsInput | string
  }

  export type passenger_ticketUpsertWithoutTicketInput = {
    update: XOR<passenger_ticketUpdateWithoutTicketInput, passenger_ticketUncheckedUpdateWithoutTicketInput>
    create: XOR<passenger_ticketCreateWithoutTicketInput, passenger_ticketUncheckedCreateWithoutTicketInput>
    where?: passenger_ticketWhereInput
  }

  export type passenger_ticketUpdateToOneWithWhereWithoutTicketInput = {
    where?: passenger_ticketWhereInput
    data: XOR<passenger_ticketUpdateWithoutTicketInput, passenger_ticketUncheckedUpdateWithoutTicketInput>
  }

  export type passenger_ticketUpdateWithoutTicketInput = {
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableEnumpassenger_ticket_discountFieldUpdateOperationsInput | $Enums.passenger_ticket_discount | null
  }

  export type passenger_ticketUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    passenger_name?: NullableStringFieldUpdateOperationsInput | string | null
    discount?: NullableEnumpassenger_ticket_discountFieldUpdateOperationsInput | $Enums.passenger_ticket_discount | null
  }

  export type cashierUpsertWithoutTicketInput = {
    update: XOR<cashierUpdateWithoutTicketInput, cashierUncheckedUpdateWithoutTicketInput>
    create: XOR<cashierCreateWithoutTicketInput, cashierUncheckedCreateWithoutTicketInput>
    where?: cashierWhereInput
  }

  export type cashierUpdateToOneWithWhereWithoutTicketInput = {
    where?: cashierWhereInput
    data: XOR<cashierUpdateWithoutTicketInput, cashierUncheckedUpdateWithoutTicketInput>
  }

  export type cashierUpdateWithoutTicketInput = {
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    station?: stationUpdateOneRequiredWithoutCashierNestedInput
    user?: userUpdateOneRequiredWithoutCashierNestedInput
  }

  export type cashierUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    station_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
  }

  export type tripUpsertWithoutTicketInput = {
    update: XOR<tripUpdateWithoutTicketInput, tripUncheckedUpdateWithoutTicketInput>
    create: XOR<tripCreateWithoutTicketInput, tripUncheckedCreateWithoutTicketInput>
    where?: tripWhereInput
  }

  export type tripUpdateToOneWithWhereWithoutTicketInput = {
    where?: tripWhereInput
    data: XOR<tripUpdateWithoutTicketInput, tripUncheckedUpdateWithoutTicketInput>
  }

  export type tripUpdateWithoutTicketInput = {
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
    bus?: busUpdateOneRequiredWithoutTripNestedInput
    driver?: driverUpdateOneRequiredWithoutTripNestedInput
    station_trip_dest_station_idTostation?: stationUpdateOneRequiredWithoutTrip_trip_dest_station_idTostationNestedInput
    station_trip_src_station_idTostation?: stationUpdateOneRequiredWithoutTrip_trip_src_station_idTostationNestedInput
  }

  export type tripUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dest_station_id?: IntFieldUpdateOperationsInput | number
    src_station_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
  }

  export type seatUpsertWithoutTicketInput = {
    update: XOR<seatUpdateWithoutTicketInput, seatUncheckedUpdateWithoutTicketInput>
    create: XOR<seatCreateWithoutTicketInput, seatUncheckedCreateWithoutTicketInput>
    where?: seatWhereInput
  }

  export type seatUpdateToOneWithWhereWithoutTicketInput = {
    where?: seatWhereInput
    data: XOR<seatUpdateWithoutTicketInput, seatUncheckedUpdateWithoutTicketInput>
  }

  export type seatUpdateWithoutTicketInput = {
    seat_number?: StringFieldUpdateOperationsInput | string
    status?: Enumseat_statusFieldUpdateOperationsInput | $Enums.seat_status
    bus?: busUpdateOneRequiredWithoutSeatNestedInput
  }

  export type seatUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    seat_number?: StringFieldUpdateOperationsInput | string
    bus_id?: IntFieldUpdateOperationsInput | number
    status?: Enumseat_statusFieldUpdateOperationsInput | $Enums.seat_status
  }

  export type ticketCreateWithoutTripInput = {
    price: Decimal | DecimalJsLike | number | string
    ticket_type: $Enums.ticket_ticket_type
    createdAt?: Date | string | null
    baggage_ticket?: baggage_ticketCreateNestedOneWithoutTicketInput
    passenger_ticket?: passenger_ticketCreateNestedOneWithoutTicketInput
    cashier: cashierCreateNestedOneWithoutTicketInput
    seat?: seatCreateNestedOneWithoutTicketInput
  }

  export type ticketUncheckedCreateWithoutTripInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    cashier_id: number
    ticket_type: $Enums.ticket_ticket_type
    seat_id?: number | null
    createdAt?: Date | string | null
    baggage_ticket?: baggage_ticketUncheckedCreateNestedOneWithoutTicketInput
    passenger_ticket?: passenger_ticketUncheckedCreateNestedOneWithoutTicketInput
  }

  export type ticketCreateOrConnectWithoutTripInput = {
    where: ticketWhereUniqueInput
    create: XOR<ticketCreateWithoutTripInput, ticketUncheckedCreateWithoutTripInput>
  }

  export type ticketCreateManyTripInputEnvelope = {
    data: ticketCreateManyTripInput | ticketCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type busCreateWithoutTripInput = {
    plate_number: string
    capacity: number
    station: stationCreateNestedOneWithoutBusInput
    seat?: seatCreateNestedManyWithoutBusInput
  }

  export type busUncheckedCreateWithoutTripInput = {
    id?: number
    plate_number: string
    capacity: number
    station_id: number
    seat?: seatUncheckedCreateNestedManyWithoutBusInput
  }

  export type busCreateOrConnectWithoutTripInput = {
    where: busWhereUniqueInput
    create: XOR<busCreateWithoutTripInput, busUncheckedCreateWithoutTripInput>
  }

  export type driverCreateWithoutTripInput = {
    first_name: string
    last_name: string
    user: userCreateNestedOneWithoutDriverInput
  }

  export type driverUncheckedCreateWithoutTripInput = {
    id?: number
    first_name: string
    last_name: string
    user_id: number
  }

  export type driverCreateOrConnectWithoutTripInput = {
    where: driverWhereUniqueInput
    create: XOR<driverCreateWithoutTripInput, driverUncheckedCreateWithoutTripInput>
  }

  export type stationCreateWithoutTrip_trip_dest_station_idTostationInput = {
    name: string
    bus?: busCreateNestedManyWithoutStationInput
    cashier?: cashierCreateNestedManyWithoutStationInput
    trip_trip_src_station_idTostation?: tripCreateNestedManyWithoutStation_trip_src_station_idTostationInput
  }

  export type stationUncheckedCreateWithoutTrip_trip_dest_station_idTostationInput = {
    id?: number
    name: string
    bus?: busUncheckedCreateNestedManyWithoutStationInput
    cashier?: cashierUncheckedCreateNestedManyWithoutStationInput
    trip_trip_src_station_idTostation?: tripUncheckedCreateNestedManyWithoutStation_trip_src_station_idTostationInput
  }

  export type stationCreateOrConnectWithoutTrip_trip_dest_station_idTostationInput = {
    where: stationWhereUniqueInput
    create: XOR<stationCreateWithoutTrip_trip_dest_station_idTostationInput, stationUncheckedCreateWithoutTrip_trip_dest_station_idTostationInput>
  }

  export type stationCreateWithoutTrip_trip_src_station_idTostationInput = {
    name: string
    bus?: busCreateNestedManyWithoutStationInput
    cashier?: cashierCreateNestedManyWithoutStationInput
    trip_trip_dest_station_idTostation?: tripCreateNestedManyWithoutStation_trip_dest_station_idTostationInput
  }

  export type stationUncheckedCreateWithoutTrip_trip_src_station_idTostationInput = {
    id?: number
    name: string
    bus?: busUncheckedCreateNestedManyWithoutStationInput
    cashier?: cashierUncheckedCreateNestedManyWithoutStationInput
    trip_trip_dest_station_idTostation?: tripUncheckedCreateNestedManyWithoutStation_trip_dest_station_idTostationInput
  }

  export type stationCreateOrConnectWithoutTrip_trip_src_station_idTostationInput = {
    where: stationWhereUniqueInput
    create: XOR<stationCreateWithoutTrip_trip_src_station_idTostationInput, stationUncheckedCreateWithoutTrip_trip_src_station_idTostationInput>
  }

  export type ticketUpsertWithWhereUniqueWithoutTripInput = {
    where: ticketWhereUniqueInput
    update: XOR<ticketUpdateWithoutTripInput, ticketUncheckedUpdateWithoutTripInput>
    create: XOR<ticketCreateWithoutTripInput, ticketUncheckedCreateWithoutTripInput>
  }

  export type ticketUpdateWithWhereUniqueWithoutTripInput = {
    where: ticketWhereUniqueInput
    data: XOR<ticketUpdateWithoutTripInput, ticketUncheckedUpdateWithoutTripInput>
  }

  export type ticketUpdateManyWithWhereWithoutTripInput = {
    where: ticketScalarWhereInput
    data: XOR<ticketUpdateManyMutationInput, ticketUncheckedUpdateManyWithoutTripInput>
  }

  export type busUpsertWithoutTripInput = {
    update: XOR<busUpdateWithoutTripInput, busUncheckedUpdateWithoutTripInput>
    create: XOR<busCreateWithoutTripInput, busUncheckedCreateWithoutTripInput>
    where?: busWhereInput
  }

  export type busUpdateToOneWithWhereWithoutTripInput = {
    where?: busWhereInput
    data: XOR<busUpdateWithoutTripInput, busUncheckedUpdateWithoutTripInput>
  }

  export type busUpdateWithoutTripInput = {
    plate_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    station?: stationUpdateOneRequiredWithoutBusNestedInput
    seat?: seatUpdateManyWithoutBusNestedInput
  }

  export type busUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    station_id?: IntFieldUpdateOperationsInput | number
    seat?: seatUncheckedUpdateManyWithoutBusNestedInput
  }

  export type driverUpsertWithoutTripInput = {
    update: XOR<driverUpdateWithoutTripInput, driverUncheckedUpdateWithoutTripInput>
    create: XOR<driverCreateWithoutTripInput, driverUncheckedCreateWithoutTripInput>
    where?: driverWhereInput
  }

  export type driverUpdateToOneWithWhereWithoutTripInput = {
    where?: driverWhereInput
    data: XOR<driverUpdateWithoutTripInput, driverUncheckedUpdateWithoutTripInput>
  }

  export type driverUpdateWithoutTripInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type stationUpsertWithoutTrip_trip_dest_station_idTostationInput = {
    update: XOR<stationUpdateWithoutTrip_trip_dest_station_idTostationInput, stationUncheckedUpdateWithoutTrip_trip_dest_station_idTostationInput>
    create: XOR<stationCreateWithoutTrip_trip_dest_station_idTostationInput, stationUncheckedCreateWithoutTrip_trip_dest_station_idTostationInput>
    where?: stationWhereInput
  }

  export type stationUpdateToOneWithWhereWithoutTrip_trip_dest_station_idTostationInput = {
    where?: stationWhereInput
    data: XOR<stationUpdateWithoutTrip_trip_dest_station_idTostationInput, stationUncheckedUpdateWithoutTrip_trip_dest_station_idTostationInput>
  }

  export type stationUpdateWithoutTrip_trip_dest_station_idTostationInput = {
    name?: StringFieldUpdateOperationsInput | string
    bus?: busUpdateManyWithoutStationNestedInput
    cashier?: cashierUpdateManyWithoutStationNestedInput
    trip_trip_src_station_idTostation?: tripUpdateManyWithoutStation_trip_src_station_idTostationNestedInput
  }

  export type stationUncheckedUpdateWithoutTrip_trip_dest_station_idTostationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bus?: busUncheckedUpdateManyWithoutStationNestedInput
    cashier?: cashierUncheckedUpdateManyWithoutStationNestedInput
    trip_trip_src_station_idTostation?: tripUncheckedUpdateManyWithoutStation_trip_src_station_idTostationNestedInput
  }

  export type stationUpsertWithoutTrip_trip_src_station_idTostationInput = {
    update: XOR<stationUpdateWithoutTrip_trip_src_station_idTostationInput, stationUncheckedUpdateWithoutTrip_trip_src_station_idTostationInput>
    create: XOR<stationCreateWithoutTrip_trip_src_station_idTostationInput, stationUncheckedCreateWithoutTrip_trip_src_station_idTostationInput>
    where?: stationWhereInput
  }

  export type stationUpdateToOneWithWhereWithoutTrip_trip_src_station_idTostationInput = {
    where?: stationWhereInput
    data: XOR<stationUpdateWithoutTrip_trip_src_station_idTostationInput, stationUncheckedUpdateWithoutTrip_trip_src_station_idTostationInput>
  }

  export type stationUpdateWithoutTrip_trip_src_station_idTostationInput = {
    name?: StringFieldUpdateOperationsInput | string
    bus?: busUpdateManyWithoutStationNestedInput
    cashier?: cashierUpdateManyWithoutStationNestedInput
    trip_trip_dest_station_idTostation?: tripUpdateManyWithoutStation_trip_dest_station_idTostationNestedInput
  }

  export type stationUncheckedUpdateWithoutTrip_trip_src_station_idTostationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bus?: busUncheckedUpdateManyWithoutStationNestedInput
    cashier?: cashierUncheckedUpdateManyWithoutStationNestedInput
    trip_trip_dest_station_idTostation?: tripUncheckedUpdateManyWithoutStation_trip_dest_station_idTostationNestedInput
  }

  export type cashierCreateWithoutUserInput = {
    shift_start?: Date | string | null
    shift_end?: Date | string | null
    last_name: string
    first_name: string
    station: stationCreateNestedOneWithoutCashierInput
    ticket?: ticketCreateNestedManyWithoutCashierInput
  }

  export type cashierUncheckedCreateWithoutUserInput = {
    id?: number
    shift_start?: Date | string | null
    shift_end?: Date | string | null
    station_id: number
    last_name: string
    first_name: string
    ticket?: ticketUncheckedCreateNestedManyWithoutCashierInput
  }

  export type cashierCreateOrConnectWithoutUserInput = {
    where: cashierWhereUniqueInput
    create: XOR<cashierCreateWithoutUserInput, cashierUncheckedCreateWithoutUserInput>
  }

  export type cashierCreateManyUserInputEnvelope = {
    data: cashierCreateManyUserInput | cashierCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type driverCreateWithoutUserInput = {
    first_name: string
    last_name: string
    trip?: tripCreateNestedManyWithoutDriverInput
  }

  export type driverUncheckedCreateWithoutUserInput = {
    id?: number
    first_name: string
    last_name: string
    trip?: tripUncheckedCreateNestedManyWithoutDriverInput
  }

  export type driverCreateOrConnectWithoutUserInput = {
    where: driverWhereUniqueInput
    create: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput>
  }

  export type driverCreateManyUserInputEnvelope = {
    data: driverCreateManyUserInput | driverCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type cashierUpsertWithWhereUniqueWithoutUserInput = {
    where: cashierWhereUniqueInput
    update: XOR<cashierUpdateWithoutUserInput, cashierUncheckedUpdateWithoutUserInput>
    create: XOR<cashierCreateWithoutUserInput, cashierUncheckedCreateWithoutUserInput>
  }

  export type cashierUpdateWithWhereUniqueWithoutUserInput = {
    where: cashierWhereUniqueInput
    data: XOR<cashierUpdateWithoutUserInput, cashierUncheckedUpdateWithoutUserInput>
  }

  export type cashierUpdateManyWithWhereWithoutUserInput = {
    where: cashierScalarWhereInput
    data: XOR<cashierUpdateManyMutationInput, cashierUncheckedUpdateManyWithoutUserInput>
  }

  export type driverUpsertWithWhereUniqueWithoutUserInput = {
    where: driverWhereUniqueInput
    update: XOR<driverUpdateWithoutUserInput, driverUncheckedUpdateWithoutUserInput>
    create: XOR<driverCreateWithoutUserInput, driverUncheckedCreateWithoutUserInput>
  }

  export type driverUpdateWithWhereUniqueWithoutUserInput = {
    where: driverWhereUniqueInput
    data: XOR<driverUpdateWithoutUserInput, driverUncheckedUpdateWithoutUserInput>
  }

  export type driverUpdateManyWithWhereWithoutUserInput = {
    where: driverScalarWhereInput
    data: XOR<driverUpdateManyMutationInput, driverUncheckedUpdateManyWithoutUserInput>
  }

  export type driverScalarWhereInput = {
    AND?: driverScalarWhereInput | driverScalarWhereInput[]
    OR?: driverScalarWhereInput[]
    NOT?: driverScalarWhereInput | driverScalarWhereInput[]
    id?: IntFilter<"driver"> | number
    first_name?: StringFilter<"driver"> | string
    last_name?: StringFilter<"driver"> | string
    user_id?: IntFilter<"driver"> | number
  }

  export type seatCreateManyBusInput = {
    id?: number
    seat_number: string
    status?: $Enums.seat_status
  }

  export type tripCreateManyBusInput = {
    id?: number
    start_time?: Date | string | null
    end_time?: Date | string | null
    dest_station_id: number
    src_station_id: number
    driver_id: number
    status?: $Enums.trip_status | null
  }

  export type seatUpdateWithoutBusInput = {
    seat_number?: StringFieldUpdateOperationsInput | string
    status?: Enumseat_statusFieldUpdateOperationsInput | $Enums.seat_status
    ticket?: ticketUpdateManyWithoutSeatNestedInput
  }

  export type seatUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    seat_number?: StringFieldUpdateOperationsInput | string
    status?: Enumseat_statusFieldUpdateOperationsInput | $Enums.seat_status
    ticket?: ticketUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type seatUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    seat_number?: StringFieldUpdateOperationsInput | string
    status?: Enumseat_statusFieldUpdateOperationsInput | $Enums.seat_status
  }

  export type tripUpdateWithoutBusInput = {
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
    ticket?: ticketUpdateManyWithoutTripNestedInput
    driver?: driverUpdateOneRequiredWithoutTripNestedInput
    station_trip_dest_station_idTostation?: stationUpdateOneRequiredWithoutTrip_trip_dest_station_idTostationNestedInput
    station_trip_src_station_idTostation?: stationUpdateOneRequiredWithoutTrip_trip_src_station_idTostationNestedInput
  }

  export type tripUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dest_station_id?: IntFieldUpdateOperationsInput | number
    src_station_id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
    ticket?: ticketUncheckedUpdateManyWithoutTripNestedInput
  }

  export type tripUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dest_station_id?: IntFieldUpdateOperationsInput | number
    src_station_id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
  }

  export type ticketCreateManyCashierInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    trip_id: number
    ticket_type: $Enums.ticket_ticket_type
    seat_id?: number | null
    createdAt?: Date | string | null
  }

  export type ticketUpdateWithoutCashierInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baggage_ticket?: baggage_ticketUpdateOneWithoutTicketNestedInput
    passenger_ticket?: passenger_ticketUpdateOneWithoutTicketNestedInput
    trip?: tripUpdateOneRequiredWithoutTicketNestedInput
    seat?: seatUpdateOneWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateWithoutCashierInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trip_id?: IntFieldUpdateOperationsInput | number
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baggage_ticket?: baggage_ticketUncheckedUpdateOneWithoutTicketNestedInput
    passenger_ticket?: passenger_ticketUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateManyWithoutCashierInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trip_id?: IntFieldUpdateOperationsInput | number
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tripCreateManyDriverInput = {
    id?: number
    start_time?: Date | string | null
    end_time?: Date | string | null
    dest_station_id: number
    src_station_id: number
    bus_id: number
    status?: $Enums.trip_status | null
  }

  export type tripUpdateWithoutDriverInput = {
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
    ticket?: ticketUpdateManyWithoutTripNestedInput
    bus?: busUpdateOneRequiredWithoutTripNestedInput
    station_trip_dest_station_idTostation?: stationUpdateOneRequiredWithoutTrip_trip_dest_station_idTostationNestedInput
    station_trip_src_station_idTostation?: stationUpdateOneRequiredWithoutTrip_trip_src_station_idTostationNestedInput
  }

  export type tripUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dest_station_id?: IntFieldUpdateOperationsInput | number
    src_station_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
    ticket?: ticketUncheckedUpdateManyWithoutTripNestedInput
  }

  export type tripUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dest_station_id?: IntFieldUpdateOperationsInput | number
    src_station_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
  }

  export type ticketCreateManySeatInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    trip_id: number
    cashier_id: number
    ticket_type: $Enums.ticket_ticket_type
    createdAt?: Date | string | null
  }

  export type ticketUpdateWithoutSeatInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baggage_ticket?: baggage_ticketUpdateOneWithoutTicketNestedInput
    passenger_ticket?: passenger_ticketUpdateOneWithoutTicketNestedInput
    cashier?: cashierUpdateOneRequiredWithoutTicketNestedInput
    trip?: tripUpdateOneRequiredWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trip_id?: IntFieldUpdateOperationsInput | number
    cashier_id?: IntFieldUpdateOperationsInput | number
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baggage_ticket?: baggage_ticketUncheckedUpdateOneWithoutTicketNestedInput
    passenger_ticket?: passenger_ticketUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateManyWithoutSeatInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    trip_id?: IntFieldUpdateOperationsInput | number
    cashier_id?: IntFieldUpdateOperationsInput | number
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type busCreateManyStationInput = {
    id?: number
    plate_number: string
    capacity: number
  }

  export type cashierCreateManyStationInput = {
    id?: number
    shift_start?: Date | string | null
    shift_end?: Date | string | null
    user_id: number
    last_name: string
    first_name: string
  }

  export type tripCreateManyStation_trip_dest_station_idTostationInput = {
    id?: number
    start_time?: Date | string | null
    end_time?: Date | string | null
    src_station_id: number
    bus_id: number
    driver_id: number
    status?: $Enums.trip_status | null
  }

  export type tripCreateManyStation_trip_src_station_idTostationInput = {
    id?: number
    start_time?: Date | string | null
    end_time?: Date | string | null
    dest_station_id: number
    bus_id: number
    driver_id: number
    status?: $Enums.trip_status | null
  }

  export type busUpdateWithoutStationInput = {
    plate_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    seat?: seatUpdateManyWithoutBusNestedInput
    trip?: tripUpdateManyWithoutBusNestedInput
  }

  export type busUncheckedUpdateWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    seat?: seatUncheckedUpdateManyWithoutBusNestedInput
    trip?: tripUncheckedUpdateManyWithoutBusNestedInput
  }

  export type busUncheckedUpdateManyWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    plate_number?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
  }

  export type cashierUpdateWithoutStationInput = {
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutCashierNestedInput
    ticket?: ticketUpdateManyWithoutCashierNestedInput
  }

  export type cashierUncheckedUpdateWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    ticket?: ticketUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type cashierUncheckedUpdateManyWithoutStationInput = {
    id?: IntFieldUpdateOperationsInput | number
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
  }

  export type tripUpdateWithoutStation_trip_dest_station_idTostationInput = {
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
    ticket?: ticketUpdateManyWithoutTripNestedInput
    bus?: busUpdateOneRequiredWithoutTripNestedInput
    driver?: driverUpdateOneRequiredWithoutTripNestedInput
    station_trip_src_station_idTostation?: stationUpdateOneRequiredWithoutTrip_trip_src_station_idTostationNestedInput
  }

  export type tripUncheckedUpdateWithoutStation_trip_dest_station_idTostationInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    src_station_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
    ticket?: ticketUncheckedUpdateManyWithoutTripNestedInput
  }

  export type tripUncheckedUpdateManyWithoutStation_trip_dest_station_idTostationInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    src_station_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
  }

  export type tripUpdateWithoutStation_trip_src_station_idTostationInput = {
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
    ticket?: ticketUpdateManyWithoutTripNestedInput
    bus?: busUpdateOneRequiredWithoutTripNestedInput
    driver?: driverUpdateOneRequiredWithoutTripNestedInput
    station_trip_dest_station_idTostation?: stationUpdateOneRequiredWithoutTrip_trip_dest_station_idTostationNestedInput
  }

  export type tripUncheckedUpdateWithoutStation_trip_src_station_idTostationInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dest_station_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
    ticket?: ticketUncheckedUpdateManyWithoutTripNestedInput
  }

  export type tripUncheckedUpdateManyWithoutStation_trip_src_station_idTostationInput = {
    id?: IntFieldUpdateOperationsInput | number
    start_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dest_station_id?: IntFieldUpdateOperationsInput | number
    bus_id?: IntFieldUpdateOperationsInput | number
    driver_id?: IntFieldUpdateOperationsInput | number
    status?: NullableEnumtrip_statusFieldUpdateOperationsInput | $Enums.trip_status | null
  }

  export type ticketCreateManyTripInput = {
    id?: number
    price: Decimal | DecimalJsLike | number | string
    cashier_id: number
    ticket_type: $Enums.ticket_ticket_type
    seat_id?: number | null
    createdAt?: Date | string | null
  }

  export type ticketUpdateWithoutTripInput = {
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baggage_ticket?: baggage_ticketUpdateOneWithoutTicketNestedInput
    passenger_ticket?: passenger_ticketUpdateOneWithoutTicketNestedInput
    cashier?: cashierUpdateOneRequiredWithoutTicketNestedInput
    seat?: seatUpdateOneWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cashier_id?: IntFieldUpdateOperationsInput | number
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    baggage_ticket?: baggage_ticketUncheckedUpdateOneWithoutTicketNestedInput
    passenger_ticket?: passenger_ticketUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type ticketUncheckedUpdateManyWithoutTripInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cashier_id?: IntFieldUpdateOperationsInput | number
    ticket_type?: Enumticket_ticket_typeFieldUpdateOperationsInput | $Enums.ticket_ticket_type
    seat_id?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cashierCreateManyUserInput = {
    id?: number
    shift_start?: Date | string | null
    shift_end?: Date | string | null
    station_id: number
    last_name: string
    first_name: string
  }

  export type driverCreateManyUserInput = {
    id?: number
    first_name: string
    last_name: string
  }

  export type cashierUpdateWithoutUserInput = {
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    station?: stationUpdateOneRequiredWithoutCashierNestedInput
    ticket?: ticketUpdateManyWithoutCashierNestedInput
  }

  export type cashierUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    station_id?: IntFieldUpdateOperationsInput | number
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    ticket?: ticketUncheckedUpdateManyWithoutCashierNestedInput
  }

  export type cashierUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    shift_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    shift_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    station_id?: IntFieldUpdateOperationsInput | number
    last_name?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
  }

  export type driverUpdateWithoutUserInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    trip?: tripUpdateManyWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    trip?: tripUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type driverUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}