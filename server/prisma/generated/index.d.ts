
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Library
 * 
 */
export type Library = $Result.DefaultSelection<Prisma.$LibraryPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Floor
 * 
 */
export type Floor = $Result.DefaultSelection<Prisma.$FloorPayload>
/**
 * Model PricingPlan
 * 
 */
export type PricingPlan = $Result.DefaultSelection<Prisma.$PricingPlanPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model BookInventory
 * 
 */
export type BookInventory = $Result.DefaultSelection<Prisma.$BookInventoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LibraryType: {
  reading_room: 'reading_room',
  bookstore: 'bookstore',
  library: 'library'
};

export type LibraryType = (typeof LibraryType)[keyof typeof LibraryType]

}

export type LibraryType = $Enums.LibraryType

export const LibraryType: typeof $Enums.LibraryType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.library`: Exposes CRUD operations for the **Library** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libraries
    * const libraries = await prisma.library.findMany()
    * ```
    */
  get library(): Prisma.LibraryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.floor`: Exposes CRUD operations for the **Floor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Floors
    * const floors = await prisma.floor.findMany()
    * ```
    */
  get floor(): Prisma.FloorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingPlan`: Exposes CRUD operations for the **PricingPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingPlans
    * const pricingPlans = await prisma.pricingPlan.findMany()
    * ```
    */
  get pricingPlan(): Prisma.PricingPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookInventory`: Exposes CRUD operations for the **BookInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookInventories
    * const bookInventories = await prisma.bookInventory.findMany()
    * ```
    */
  get bookInventory(): Prisma.BookInventoryDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Library: 'Library',
    Review: 'Review',
    Floor: 'Floor',
    PricingPlan: 'PricingPlan',
    Book: 'Book',
    BookInventory: 'BookInventory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "library" | "review" | "floor" | "pricingPlan" | "book" | "bookInventory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Library: {
        payload: Prisma.$LibraryPayload<ExtArgs>
        fields: Prisma.LibraryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          findFirst: {
            args: Prisma.LibraryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          findMany: {
            args: Prisma.LibraryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          create: {
            args: Prisma.LibraryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          createMany: {
            args: Prisma.LibraryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibraryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          delete: {
            args: Prisma.LibraryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          update: {
            args: Prisma.LibraryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          deleteMany: {
            args: Prisma.LibraryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibraryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>[]
          }
          upsert: {
            args: Prisma.LibraryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPayload>
          }
          aggregate: {
            args: Prisma.LibraryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibrary>
          }
          groupBy: {
            args: Prisma.LibraryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibraryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryCountArgs<ExtArgs>
            result: $Utils.Optional<LibraryCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Floor: {
        payload: Prisma.$FloorPayload<ExtArgs>
        fields: Prisma.FloorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FloorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FloorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findFirst: {
            args: Prisma.FloorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FloorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          findMany: {
            args: Prisma.FloorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          create: {
            args: Prisma.FloorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          createMany: {
            args: Prisma.FloorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FloorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          delete: {
            args: Prisma.FloorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          update: {
            args: Prisma.FloorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          deleteMany: {
            args: Prisma.FloorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FloorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FloorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>[]
          }
          upsert: {
            args: Prisma.FloorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FloorPayload>
          }
          aggregate: {
            args: Prisma.FloorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFloor>
          }
          groupBy: {
            args: Prisma.FloorGroupByArgs<ExtArgs>
            result: $Utils.Optional<FloorGroupByOutputType>[]
          }
          count: {
            args: Prisma.FloorCountArgs<ExtArgs>
            result: $Utils.Optional<FloorCountAggregateOutputType> | number
          }
        }
      }
      PricingPlan: {
        payload: Prisma.$PricingPlanPayload<ExtArgs>
        fields: Prisma.PricingPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          findFirst: {
            args: Prisma.PricingPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          findMany: {
            args: Prisma.PricingPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>[]
          }
          create: {
            args: Prisma.PricingPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          createMany: {
            args: Prisma.PricingPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>[]
          }
          delete: {
            args: Prisma.PricingPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          update: {
            args: Prisma.PricingPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          deleteMany: {
            args: Prisma.PricingPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>[]
          }
          upsert: {
            args: Prisma.PricingPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPlanPayload>
          }
          aggregate: {
            args: Prisma.PricingPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingPlan>
          }
          groupBy: {
            args: Prisma.PricingPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingPlanCountArgs<ExtArgs>
            result: $Utils.Optional<PricingPlanCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      BookInventory: {
        payload: Prisma.$BookInventoryPayload<ExtArgs>
        fields: Prisma.BookInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookInventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookInventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookInventoryPayload>
          }
          findFirst: {
            args: Prisma.BookInventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookInventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookInventoryPayload>
          }
          findMany: {
            args: Prisma.BookInventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookInventoryPayload>[]
          }
          create: {
            args: Prisma.BookInventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookInventoryPayload>
          }
          createMany: {
            args: Prisma.BookInventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookInventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookInventoryPayload>[]
          }
          delete: {
            args: Prisma.BookInventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookInventoryPayload>
          }
          update: {
            args: Prisma.BookInventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookInventoryPayload>
          }
          deleteMany: {
            args: Prisma.BookInventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookInventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookInventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookInventoryPayload>[]
          }
          upsert: {
            args: Prisma.BookInventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookInventoryPayload>
          }
          aggregate: {
            args: Prisma.BookInventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookInventory>
          }
          groupBy: {
            args: Prisma.BookInventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookInventoryCountArgs<ExtArgs>
            result: $Utils.Optional<BookInventoryCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    library?: LibraryOmit
    review?: ReviewOmit
    floor?: FloorOmit
    pricingPlan?: PricingPlanOmit
    book?: BookOmit
    bookInventory?: BookInventoryOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    libraries: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libraries?: boolean | UserCountOutputTypeCountLibrariesArgs
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
  export type UserCountOutputTypeCountLibrariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryWhereInput
  }


  /**
   * Count Type LibraryCountOutputType
   */

  export type LibraryCountOutputType = {
    floors: number
    inventory: number
    reviews: number
  }

  export type LibraryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floors?: boolean | LibraryCountOutputTypeCountFloorsArgs
    inventory?: boolean | LibraryCountOutputTypeCountInventoryArgs
    reviews?: boolean | LibraryCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryCountOutputType
     */
    select?: LibraryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeCountFloorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorWhereInput
  }

  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookInventoryWhereInput
  }

  /**
   * LibraryCountOutputType without action
   */
  export type LibraryCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type FloorCountOutputType
   */

  export type FloorCountOutputType = {
    pricingPlans: number
  }

  export type FloorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricingPlans?: boolean | FloorCountOutputTypeCountPricingPlansArgs
  }

  // Custom InputTypes
  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FloorCountOutputType
     */
    select?: FloorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FloorCountOutputType without action
   */
  export type FloorCountOutputTypeCountPricingPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingPlanWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    inventory: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | BookCountOutputTypeCountInventoryArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookInventoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    phone: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    phone: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    phone?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    phone: string | null
    role: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    libraries?: boolean | User$librariesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "phone" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    libraries?: boolean | User$librariesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      libraries: Prisma.$LibraryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      phone: string | null
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    libraries<T extends User$librariesArgs<ExtArgs> = {}>(args?: Subset<T, User$librariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.libraries
   */
  export type User$librariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    where?: LibraryWhereInput
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    cursor?: LibraryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Library
   */

  export type AggregateLibrary = {
    _count: LibraryCountAggregateOutputType | null
    _avg: LibraryAvgAggregateOutputType | null
    _sum: LibrarySumAggregateOutputType | null
    _min: LibraryMinAggregateOutputType | null
    _max: LibraryMaxAggregateOutputType | null
  }

  export type LibraryAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    rating: number | null
  }

  export type LibrarySumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
    rating: number | null
  }

  export type LibraryMinAggregateOutputType = {
    id: number | null
    ownerId: string | null
    name: string | null
    type: $Enums.LibraryType | null
    address: string | null
    latitude: number | null
    longitude: number | null
    contactNumber: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type LibraryMaxAggregateOutputType = {
    id: number | null
    ownerId: string | null
    name: string | null
    type: $Enums.LibraryType | null
    address: string | null
    latitude: number | null
    longitude: number | null
    contactNumber: string | null
    rating: number | null
    createdAt: Date | null
  }

  export type LibraryCountAggregateOutputType = {
    id: number
    ownerId: number
    name: number
    type: number
    address: number
    latitude: number
    longitude: number
    contactNumber: number
    timings: number
    amenities: number
    rating: number
    createdAt: number
    _all: number
  }


  export type LibraryAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    rating?: true
  }

  export type LibrarySumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
    rating?: true
  }

  export type LibraryMinAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    type?: true
    address?: true
    latitude?: true
    longitude?: true
    contactNumber?: true
    rating?: true
    createdAt?: true
  }

  export type LibraryMaxAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    type?: true
    address?: true
    latitude?: true
    longitude?: true
    contactNumber?: true
    rating?: true
    createdAt?: true
  }

  export type LibraryCountAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    type?: true
    address?: true
    latitude?: true
    longitude?: true
    contactNumber?: true
    timings?: true
    amenities?: true
    rating?: true
    createdAt?: true
    _all?: true
  }

  export type LibraryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Library to aggregate.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Libraries
    **/
    _count?: true | LibraryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibraryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibrarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryMaxAggregateInputType
  }

  export type GetLibraryAggregateType<T extends LibraryAggregateArgs> = {
        [P in keyof T & keyof AggregateLibrary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibrary[P]>
      : GetScalarType<T[P], AggregateLibrary[P]>
  }




  export type LibraryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryWhereInput
    orderBy?: LibraryOrderByWithAggregationInput | LibraryOrderByWithAggregationInput[]
    by: LibraryScalarFieldEnum[] | LibraryScalarFieldEnum
    having?: LibraryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryCountAggregateInputType | true
    _avg?: LibraryAvgAggregateInputType
    _sum?: LibrarySumAggregateInputType
    _min?: LibraryMinAggregateInputType
    _max?: LibraryMaxAggregateInputType
  }

  export type LibraryGroupByOutputType = {
    id: number
    ownerId: string
    name: string
    type: $Enums.LibraryType
    address: string | null
    latitude: number
    longitude: number
    contactNumber: string | null
    timings: JsonValue | null
    amenities: string[]
    rating: number
    createdAt: Date
    _count: LibraryCountAggregateOutputType | null
    _avg: LibraryAvgAggregateOutputType | null
    _sum: LibrarySumAggregateOutputType | null
    _min: LibraryMinAggregateOutputType | null
    _max: LibraryMaxAggregateOutputType | null
  }

  type GetLibraryGroupByPayload<T extends LibraryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryGroupByOutputType[P]>
        }
      >
    >


  export type LibrarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    type?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    contactNumber?: boolean
    timings?: boolean
    amenities?: boolean
    rating?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    floors?: boolean | Library$floorsArgs<ExtArgs>
    inventory?: boolean | Library$inventoryArgs<ExtArgs>
    reviews?: boolean | Library$reviewsArgs<ExtArgs>
    _count?: boolean | LibraryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    type?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    contactNumber?: boolean
    timings?: boolean
    amenities?: boolean
    rating?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    type?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    contactNumber?: boolean
    timings?: boolean
    amenities?: boolean
    rating?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["library"]>

  export type LibrarySelectScalar = {
    id?: boolean
    ownerId?: boolean
    name?: boolean
    type?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    contactNumber?: boolean
    timings?: boolean
    amenities?: boolean
    rating?: boolean
    createdAt?: boolean
  }

  export type LibraryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "name" | "type" | "address" | "latitude" | "longitude" | "contactNumber" | "timings" | "amenities" | "rating" | "createdAt", ExtArgs["result"]["library"]>
  export type LibraryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    floors?: boolean | Library$floorsArgs<ExtArgs>
    inventory?: boolean | Library$inventoryArgs<ExtArgs>
    reviews?: boolean | Library$reviewsArgs<ExtArgs>
    _count?: boolean | LibraryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LibraryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LibraryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LibraryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Library"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      floors: Prisma.$FloorPayload<ExtArgs>[]
      inventory: Prisma.$BookInventoryPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownerId: string
      name: string
      type: $Enums.LibraryType
      address: string | null
      latitude: number
      longitude: number
      contactNumber: string | null
      timings: Prisma.JsonValue | null
      amenities: string[]
      rating: number
      createdAt: Date
    }, ExtArgs["result"]["library"]>
    composites: {}
  }

  type LibraryGetPayload<S extends boolean | null | undefined | LibraryDefaultArgs> = $Result.GetResult<Prisma.$LibraryPayload, S>

  type LibraryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibraryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibraryCountAggregateInputType | true
    }

  export interface LibraryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Library'], meta: { name: 'Library' } }
    /**
     * Find zero or one Library that matches the filter.
     * @param {LibraryFindUniqueArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibraryFindUniqueArgs>(args: SelectSubset<T, LibraryFindUniqueArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Library that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibraryFindUniqueOrThrowArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibraryFindUniqueOrThrowArgs>(args: SelectSubset<T, LibraryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Library that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindFirstArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibraryFindFirstArgs>(args?: SelectSubset<T, LibraryFindFirstArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Library that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindFirstOrThrowArgs} args - Arguments to find a Library
     * @example
     * // Get one Library
     * const library = await prisma.library.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibraryFindFirstOrThrowArgs>(args?: SelectSubset<T, LibraryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libraries
     * const libraries = await prisma.library.findMany()
     * 
     * // Get first 10 Libraries
     * const libraries = await prisma.library.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryWithIdOnly = await prisma.library.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibraryFindManyArgs>(args?: SelectSubset<T, LibraryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Library.
     * @param {LibraryCreateArgs} args - Arguments to create a Library.
     * @example
     * // Create one Library
     * const Library = await prisma.library.create({
     *   data: {
     *     // ... data to create a Library
     *   }
     * })
     * 
     */
    create<T extends LibraryCreateArgs>(args: SelectSubset<T, LibraryCreateArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libraries.
     * @param {LibraryCreateManyArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const library = await prisma.library.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibraryCreateManyArgs>(args?: SelectSubset<T, LibraryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Libraries and returns the data saved in the database.
     * @param {LibraryCreateManyAndReturnArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const library = await prisma.library.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Libraries and only return the `id`
     * const libraryWithIdOnly = await prisma.library.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibraryCreateManyAndReturnArgs>(args?: SelectSubset<T, LibraryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Library.
     * @param {LibraryDeleteArgs} args - Arguments to delete one Library.
     * @example
     * // Delete one Library
     * const Library = await prisma.library.delete({
     *   where: {
     *     // ... filter to delete one Library
     *   }
     * })
     * 
     */
    delete<T extends LibraryDeleteArgs>(args: SelectSubset<T, LibraryDeleteArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Library.
     * @param {LibraryUpdateArgs} args - Arguments to update one Library.
     * @example
     * // Update one Library
     * const library = await prisma.library.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibraryUpdateArgs>(args: SelectSubset<T, LibraryUpdateArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libraries.
     * @param {LibraryDeleteManyArgs} args - Arguments to filter Libraries to delete.
     * @example
     * // Delete a few Libraries
     * const { count } = await prisma.library.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibraryDeleteManyArgs>(args?: SelectSubset<T, LibraryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libraries
     * const library = await prisma.library.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibraryUpdateManyArgs>(args: SelectSubset<T, LibraryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries and returns the data updated in the database.
     * @param {LibraryUpdateManyAndReturnArgs} args - Arguments to update many Libraries.
     * @example
     * // Update many Libraries
     * const library = await prisma.library.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Libraries and only return the `id`
     * const libraryWithIdOnly = await prisma.library.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LibraryUpdateManyAndReturnArgs>(args: SelectSubset<T, LibraryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Library.
     * @param {LibraryUpsertArgs} args - Arguments to update or create a Library.
     * @example
     * // Update or create a Library
     * const library = await prisma.library.upsert({
     *   create: {
     *     // ... data to create a Library
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Library we want to update
     *   }
     * })
     */
    upsert<T extends LibraryUpsertArgs>(args: SelectSubset<T, LibraryUpsertArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryCountArgs} args - Arguments to filter Libraries to count.
     * @example
     * // Count the number of Libraries
     * const count = await prisma.library.count({
     *   where: {
     *     // ... the filter for the Libraries we want to count
     *   }
     * })
    **/
    count<T extends LibraryCountArgs>(
      args?: Subset<T, LibraryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Library.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LibraryAggregateArgs>(args: Subset<T, LibraryAggregateArgs>): Prisma.PrismaPromise<GetLibraryAggregateType<T>>

    /**
     * Group by Library.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryGroupByArgs} args - Group by arguments.
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
      T extends LibraryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryGroupByArgs['orderBy'] }
        : { orderBy?: LibraryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LibraryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Library model
   */
  readonly fields: LibraryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Library.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    floors<T extends Library$floorsArgs<ExtArgs> = {}>(args?: Subset<T, Library$floorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends Library$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Library$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Library$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Library$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Library model
   */
  interface LibraryFieldRefs {
    readonly id: FieldRef<"Library", 'Int'>
    readonly ownerId: FieldRef<"Library", 'String'>
    readonly name: FieldRef<"Library", 'String'>
    readonly type: FieldRef<"Library", 'LibraryType'>
    readonly address: FieldRef<"Library", 'String'>
    readonly latitude: FieldRef<"Library", 'Float'>
    readonly longitude: FieldRef<"Library", 'Float'>
    readonly contactNumber: FieldRef<"Library", 'String'>
    readonly timings: FieldRef<"Library", 'Json'>
    readonly amenities: FieldRef<"Library", 'String[]'>
    readonly rating: FieldRef<"Library", 'Float'>
    readonly createdAt: FieldRef<"Library", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Library findUnique
   */
  export type LibraryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library findUniqueOrThrow
   */
  export type LibraryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library findFirst
   */
  export type LibraryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library findFirstOrThrow
   */
  export type LibraryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Library to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library findMany
   */
  export type LibraryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter, which Libraries to fetch.
     */
    where?: LibraryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibraryOrderByWithRelationInput | LibraryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Libraries.
     */
    cursor?: LibraryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    distinct?: LibraryScalarFieldEnum | LibraryScalarFieldEnum[]
  }

  /**
   * Library create
   */
  export type LibraryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The data needed to create a Library.
     */
    data: XOR<LibraryCreateInput, LibraryUncheckedCreateInput>
  }

  /**
   * Library createMany
   */
  export type LibraryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Libraries.
     */
    data: LibraryCreateManyInput | LibraryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Library createManyAndReturn
   */
  export type LibraryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * The data used to create many Libraries.
     */
    data: LibraryCreateManyInput | LibraryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Library update
   */
  export type LibraryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The data needed to update a Library.
     */
    data: XOR<LibraryUpdateInput, LibraryUncheckedUpdateInput>
    /**
     * Choose, which Library to update.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library updateMany
   */
  export type LibraryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Libraries.
     */
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyInput>
    /**
     * Filter which Libraries to update
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to update.
     */
    limit?: number
  }

  /**
   * Library updateManyAndReturn
   */
  export type LibraryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * The data used to update Libraries.
     */
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyInput>
    /**
     * Filter which Libraries to update
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Library upsert
   */
  export type LibraryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * The filter to search for the Library to update in case it exists.
     */
    where: LibraryWhereUniqueInput
    /**
     * In case the Library found by the `where` argument doesn't exist, create a new Library with this data.
     */
    create: XOR<LibraryCreateInput, LibraryUncheckedCreateInput>
    /**
     * In case the Library was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryUpdateInput, LibraryUncheckedUpdateInput>
  }

  /**
   * Library delete
   */
  export type LibraryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
    /**
     * Filter which Library to delete.
     */
    where: LibraryWhereUniqueInput
  }

  /**
   * Library deleteMany
   */
  export type LibraryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libraries to delete
     */
    where?: LibraryWhereInput
    /**
     * Limit how many Libraries to delete.
     */
    limit?: number
  }

  /**
   * Library.floors
   */
  export type Library$floorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    where?: FloorWhereInput
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    cursor?: FloorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Library.inventory
   */
  export type Library$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
    where?: BookInventoryWhereInput
    orderBy?: BookInventoryOrderByWithRelationInput | BookInventoryOrderByWithRelationInput[]
    cursor?: BookInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookInventoryScalarFieldEnum | BookInventoryScalarFieldEnum[]
  }

  /**
   * Library.reviews
   */
  export type Library$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Library without action
   */
  export type LibraryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Library
     */
    select?: LibrarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Library
     */
    omit?: LibraryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    libraryId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    libraryId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    libraryId: number | null
    reviewerName: string | null
    userType: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    libraryId: number | null
    reviewerName: string | null
    userType: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    libraryId: number
    reviewerName: number
    userType: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    libraryId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    libraryId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    libraryId?: true
    reviewerName?: true
    userType?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    libraryId?: true
    reviewerName?: true
    userType?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    libraryId?: true
    reviewerName?: true
    userType?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    libraryId: number
    reviewerName: string
    userType: string | null
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libraryId?: boolean
    reviewerName?: boolean
    userType?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libraryId?: boolean
    reviewerName?: boolean
    userType?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libraryId?: boolean
    reviewerName?: boolean
    userType?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    libraryId?: boolean
    reviewerName?: boolean
    userType?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libraryId" | "reviewerName" | "userType" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      library: Prisma.$LibraryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libraryId: number
      reviewerName: string
      userType: string | null
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    library<T extends LibraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryDefaultArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly libraryId: FieldRef<"Review", 'Int'>
    readonly reviewerName: FieldRef<"Review", 'String'>
    readonly userType: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Floor
   */

  export type AggregateFloor = {
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  export type FloorAvgAggregateOutputType = {
    id: number | null
    libraryId: number | null
    floorNumber: number | null
    totalSeats: number | null
  }

  export type FloorSumAggregateOutputType = {
    id: number | null
    libraryId: number | null
    floorNumber: number | null
    totalSeats: number | null
  }

  export type FloorMinAggregateOutputType = {
    id: number | null
    libraryId: number | null
    floorNumber: number | null
    name: string | null
    totalSeats: number | null
  }

  export type FloorMaxAggregateOutputType = {
    id: number | null
    libraryId: number | null
    floorNumber: number | null
    name: string | null
    totalSeats: number | null
  }

  export type FloorCountAggregateOutputType = {
    id: number
    libraryId: number
    floorNumber: number
    name: number
    totalSeats: number
    _all: number
  }


  export type FloorAvgAggregateInputType = {
    id?: true
    libraryId?: true
    floorNumber?: true
    totalSeats?: true
  }

  export type FloorSumAggregateInputType = {
    id?: true
    libraryId?: true
    floorNumber?: true
    totalSeats?: true
  }

  export type FloorMinAggregateInputType = {
    id?: true
    libraryId?: true
    floorNumber?: true
    name?: true
    totalSeats?: true
  }

  export type FloorMaxAggregateInputType = {
    id?: true
    libraryId?: true
    floorNumber?: true
    name?: true
    totalSeats?: true
  }

  export type FloorCountAggregateInputType = {
    id?: true
    libraryId?: true
    floorNumber?: true
    name?: true
    totalSeats?: true
    _all?: true
  }

  export type FloorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floor to aggregate.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Floors
    **/
    _count?: true | FloorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FloorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FloorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FloorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FloorMaxAggregateInputType
  }

  export type GetFloorAggregateType<T extends FloorAggregateArgs> = {
        [P in keyof T & keyof AggregateFloor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFloor[P]>
      : GetScalarType<T[P], AggregateFloor[P]>
  }




  export type FloorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FloorWhereInput
    orderBy?: FloorOrderByWithAggregationInput | FloorOrderByWithAggregationInput[]
    by: FloorScalarFieldEnum[] | FloorScalarFieldEnum
    having?: FloorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FloorCountAggregateInputType | true
    _avg?: FloorAvgAggregateInputType
    _sum?: FloorSumAggregateInputType
    _min?: FloorMinAggregateInputType
    _max?: FloorMaxAggregateInputType
  }

  export type FloorGroupByOutputType = {
    id: number
    libraryId: number
    floorNumber: number
    name: string | null
    totalSeats: number
    _count: FloorCountAggregateOutputType | null
    _avg: FloorAvgAggregateOutputType | null
    _sum: FloorSumAggregateOutputType | null
    _min: FloorMinAggregateOutputType | null
    _max: FloorMaxAggregateOutputType | null
  }

  type GetFloorGroupByPayload<T extends FloorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FloorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FloorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FloorGroupByOutputType[P]>
            : GetScalarType<T[P], FloorGroupByOutputType[P]>
        }
      >
    >


  export type FloorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libraryId?: boolean
    floorNumber?: boolean
    name?: boolean
    totalSeats?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    pricingPlans?: boolean | Floor$pricingPlansArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libraryId?: boolean
    floorNumber?: boolean
    name?: boolean
    totalSeats?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libraryId?: boolean
    floorNumber?: boolean
    name?: boolean
    totalSeats?: boolean
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["floor"]>

  export type FloorSelectScalar = {
    id?: boolean
    libraryId?: boolean
    floorNumber?: boolean
    name?: boolean
    totalSeats?: boolean
  }

  export type FloorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libraryId" | "floorNumber" | "name" | "totalSeats", ExtArgs["result"]["floor"]>
  export type FloorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
    pricingPlans?: boolean | Floor$pricingPlansArgs<ExtArgs>
    _count?: boolean | FloorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FloorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }
  export type FloorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }

  export type $FloorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Floor"
    objects: {
      library: Prisma.$LibraryPayload<ExtArgs>
      pricingPlans: Prisma.$PricingPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libraryId: number
      floorNumber: number
      name: string | null
      totalSeats: number
    }, ExtArgs["result"]["floor"]>
    composites: {}
  }

  type FloorGetPayload<S extends boolean | null | undefined | FloorDefaultArgs> = $Result.GetResult<Prisma.$FloorPayload, S>

  type FloorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FloorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FloorCountAggregateInputType | true
    }

  export interface FloorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Floor'], meta: { name: 'Floor' } }
    /**
     * Find zero or one Floor that matches the filter.
     * @param {FloorFindUniqueArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FloorFindUniqueArgs>(args: SelectSubset<T, FloorFindUniqueArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Floor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FloorFindUniqueOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FloorFindUniqueOrThrowArgs>(args: SelectSubset<T, FloorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FloorFindFirstArgs>(args?: SelectSubset<T, FloorFindFirstArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Floor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindFirstOrThrowArgs} args - Arguments to find a Floor
     * @example
     * // Get one Floor
     * const floor = await prisma.floor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FloorFindFirstOrThrowArgs>(args?: SelectSubset<T, FloorFindFirstOrThrowArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Floors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Floors
     * const floors = await prisma.floor.findMany()
     * 
     * // Get first 10 Floors
     * const floors = await prisma.floor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const floorWithIdOnly = await prisma.floor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FloorFindManyArgs>(args?: SelectSubset<T, FloorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Floor.
     * @param {FloorCreateArgs} args - Arguments to create a Floor.
     * @example
     * // Create one Floor
     * const Floor = await prisma.floor.create({
     *   data: {
     *     // ... data to create a Floor
     *   }
     * })
     * 
     */
    create<T extends FloorCreateArgs>(args: SelectSubset<T, FloorCreateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Floors.
     * @param {FloorCreateManyArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FloorCreateManyArgs>(args?: SelectSubset<T, FloorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Floors and returns the data saved in the database.
     * @param {FloorCreateManyAndReturnArgs} args - Arguments to create many Floors.
     * @example
     * // Create many Floors
     * const floor = await prisma.floor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Floors and only return the `id`
     * const floorWithIdOnly = await prisma.floor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FloorCreateManyAndReturnArgs>(args?: SelectSubset<T, FloorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Floor.
     * @param {FloorDeleteArgs} args - Arguments to delete one Floor.
     * @example
     * // Delete one Floor
     * const Floor = await prisma.floor.delete({
     *   where: {
     *     // ... filter to delete one Floor
     *   }
     * })
     * 
     */
    delete<T extends FloorDeleteArgs>(args: SelectSubset<T, FloorDeleteArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Floor.
     * @param {FloorUpdateArgs} args - Arguments to update one Floor.
     * @example
     * // Update one Floor
     * const floor = await prisma.floor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FloorUpdateArgs>(args: SelectSubset<T, FloorUpdateArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Floors.
     * @param {FloorDeleteManyArgs} args - Arguments to filter Floors to delete.
     * @example
     * // Delete a few Floors
     * const { count } = await prisma.floor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FloorDeleteManyArgs>(args?: SelectSubset<T, FloorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FloorUpdateManyArgs>(args: SelectSubset<T, FloorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Floors and returns the data updated in the database.
     * @param {FloorUpdateManyAndReturnArgs} args - Arguments to update many Floors.
     * @example
     * // Update many Floors
     * const floor = await prisma.floor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Floors and only return the `id`
     * const floorWithIdOnly = await prisma.floor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FloorUpdateManyAndReturnArgs>(args: SelectSubset<T, FloorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Floor.
     * @param {FloorUpsertArgs} args - Arguments to update or create a Floor.
     * @example
     * // Update or create a Floor
     * const floor = await prisma.floor.upsert({
     *   create: {
     *     // ... data to create a Floor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Floor we want to update
     *   }
     * })
     */
    upsert<T extends FloorUpsertArgs>(args: SelectSubset<T, FloorUpsertArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Floors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorCountArgs} args - Arguments to filter Floors to count.
     * @example
     * // Count the number of Floors
     * const count = await prisma.floor.count({
     *   where: {
     *     // ... the filter for the Floors we want to count
     *   }
     * })
    **/
    count<T extends FloorCountArgs>(
      args?: Subset<T, FloorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FloorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FloorAggregateArgs>(args: Subset<T, FloorAggregateArgs>): Prisma.PrismaPromise<GetFloorAggregateType<T>>

    /**
     * Group by Floor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FloorGroupByArgs} args - Group by arguments.
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
      T extends FloorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FloorGroupByArgs['orderBy'] }
        : { orderBy?: FloorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FloorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFloorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Floor model
   */
  readonly fields: FloorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Floor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FloorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    library<T extends LibraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryDefaultArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pricingPlans<T extends Floor$pricingPlansArgs<ExtArgs> = {}>(args?: Subset<T, Floor$pricingPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Floor model
   */
  interface FloorFieldRefs {
    readonly id: FieldRef<"Floor", 'Int'>
    readonly libraryId: FieldRef<"Floor", 'Int'>
    readonly floorNumber: FieldRef<"Floor", 'Int'>
    readonly name: FieldRef<"Floor", 'String'>
    readonly totalSeats: FieldRef<"Floor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Floor findUnique
   */
  export type FloorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findUniqueOrThrow
   */
  export type FloorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor findFirst
   */
  export type FloorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findFirstOrThrow
   */
  export type FloorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floor to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Floors.
     */
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor findMany
   */
  export type FloorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter, which Floors to fetch.
     */
    where?: FloorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Floors to fetch.
     */
    orderBy?: FloorOrderByWithRelationInput | FloorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Floors.
     */
    cursor?: FloorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Floors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Floors.
     */
    skip?: number
    distinct?: FloorScalarFieldEnum | FloorScalarFieldEnum[]
  }

  /**
   * Floor create
   */
  export type FloorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to create a Floor.
     */
    data: XOR<FloorCreateInput, FloorUncheckedCreateInput>
  }

  /**
   * Floor createMany
   */
  export type FloorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Floor createManyAndReturn
   */
  export type FloorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to create many Floors.
     */
    data: FloorCreateManyInput | FloorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Floor update
   */
  export type FloorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The data needed to update a Floor.
     */
    data: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
    /**
     * Choose, which Floor to update.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor updateMany
   */
  export type FloorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
  }

  /**
   * Floor updateManyAndReturn
   */
  export type FloorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * The data used to update Floors.
     */
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyInput>
    /**
     * Filter which Floors to update
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Floor upsert
   */
  export type FloorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * The filter to search for the Floor to update in case it exists.
     */
    where: FloorWhereUniqueInput
    /**
     * In case the Floor found by the `where` argument doesn't exist, create a new Floor with this data.
     */
    create: XOR<FloorCreateInput, FloorUncheckedCreateInput>
    /**
     * In case the Floor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FloorUpdateInput, FloorUncheckedUpdateInput>
  }

  /**
   * Floor delete
   */
  export type FloorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
    /**
     * Filter which Floor to delete.
     */
    where: FloorWhereUniqueInput
  }

  /**
   * Floor deleteMany
   */
  export type FloorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Floors to delete
     */
    where?: FloorWhereInput
    /**
     * Limit how many Floors to delete.
     */
    limit?: number
  }

  /**
   * Floor.pricingPlans
   */
  export type Floor$pricingPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    where?: PricingPlanWhereInput
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    cursor?: PricingPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * Floor without action
   */
  export type FloorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Floor
     */
    select?: FloorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Floor
     */
    omit?: FloorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FloorInclude<ExtArgs> | null
  }


  /**
   * Model PricingPlan
   */

  export type AggregatePricingPlan = {
    _count: PricingPlanCountAggregateOutputType | null
    _avg: PricingPlanAvgAggregateOutputType | null
    _sum: PricingPlanSumAggregateOutputType | null
    _min: PricingPlanMinAggregateOutputType | null
    _max: PricingPlanMaxAggregateOutputType | null
  }

  export type PricingPlanAvgAggregateOutputType = {
    id: number | null
    floorId: number | null
    priceAmount: Decimal | null
    seatsAvailable: number | null
  }

  export type PricingPlanSumAggregateOutputType = {
    id: number | null
    floorId: number | null
    priceAmount: Decimal | null
    seatsAvailable: number | null
  }

  export type PricingPlanMinAggregateOutputType = {
    id: number | null
    floorId: number | null
    planType: string | null
    priceAmount: Decimal | null
    seatsAvailable: number | null
  }

  export type PricingPlanMaxAggregateOutputType = {
    id: number | null
    floorId: number | null
    planType: string | null
    priceAmount: Decimal | null
    seatsAvailable: number | null
  }

  export type PricingPlanCountAggregateOutputType = {
    id: number
    floorId: number
    planType: number
    priceAmount: number
    seatsAvailable: number
    features: number
    _all: number
  }


  export type PricingPlanAvgAggregateInputType = {
    id?: true
    floorId?: true
    priceAmount?: true
    seatsAvailable?: true
  }

  export type PricingPlanSumAggregateInputType = {
    id?: true
    floorId?: true
    priceAmount?: true
    seatsAvailable?: true
  }

  export type PricingPlanMinAggregateInputType = {
    id?: true
    floorId?: true
    planType?: true
    priceAmount?: true
    seatsAvailable?: true
  }

  export type PricingPlanMaxAggregateInputType = {
    id?: true
    floorId?: true
    planType?: true
    priceAmount?: true
    seatsAvailable?: true
  }

  export type PricingPlanCountAggregateInputType = {
    id?: true
    floorId?: true
    planType?: true
    priceAmount?: true
    seatsAvailable?: true
    features?: true
    _all?: true
  }

  export type PricingPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingPlan to aggregate.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingPlans
    **/
    _count?: true | PricingPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingPlanMaxAggregateInputType
  }

  export type GetPricingPlanAggregateType<T extends PricingPlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingPlan[P]>
      : GetScalarType<T[P], AggregatePricingPlan[P]>
  }




  export type PricingPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingPlanWhereInput
    orderBy?: PricingPlanOrderByWithAggregationInput | PricingPlanOrderByWithAggregationInput[]
    by: PricingPlanScalarFieldEnum[] | PricingPlanScalarFieldEnum
    having?: PricingPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingPlanCountAggregateInputType | true
    _avg?: PricingPlanAvgAggregateInputType
    _sum?: PricingPlanSumAggregateInputType
    _min?: PricingPlanMinAggregateInputType
    _max?: PricingPlanMaxAggregateInputType
  }

  export type PricingPlanGroupByOutputType = {
    id: number
    floorId: number
    planType: string
    priceAmount: Decimal
    seatsAvailable: number
    features: string[]
    _count: PricingPlanCountAggregateOutputType | null
    _avg: PricingPlanAvgAggregateOutputType | null
    _sum: PricingPlanSumAggregateOutputType | null
    _min: PricingPlanMinAggregateOutputType | null
    _max: PricingPlanMaxAggregateOutputType | null
  }

  type GetPricingPlanGroupByPayload<T extends PricingPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingPlanGroupByOutputType[P]>
            : GetScalarType<T[P], PricingPlanGroupByOutputType[P]>
        }
      >
    >


  export type PricingPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    floorId?: boolean
    planType?: boolean
    priceAmount?: boolean
    seatsAvailable?: boolean
    features?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingPlan"]>

  export type PricingPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    floorId?: boolean
    planType?: boolean
    priceAmount?: boolean
    seatsAvailable?: boolean
    features?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingPlan"]>

  export type PricingPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    floorId?: boolean
    planType?: boolean
    priceAmount?: boolean
    seatsAvailable?: boolean
    features?: boolean
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingPlan"]>

  export type PricingPlanSelectScalar = {
    id?: boolean
    floorId?: boolean
    planType?: boolean
    priceAmount?: boolean
    seatsAvailable?: boolean
    features?: boolean
  }

  export type PricingPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "floorId" | "planType" | "priceAmount" | "seatsAvailable" | "features", ExtArgs["result"]["pricingPlan"]>
  export type PricingPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }
  export type PricingPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }
  export type PricingPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    floor?: boolean | FloorDefaultArgs<ExtArgs>
  }

  export type $PricingPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingPlan"
    objects: {
      floor: Prisma.$FloorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      floorId: number
      planType: string
      priceAmount: Prisma.Decimal
      seatsAvailable: number
      features: string[]
    }, ExtArgs["result"]["pricingPlan"]>
    composites: {}
  }

  type PricingPlanGetPayload<S extends boolean | null | undefined | PricingPlanDefaultArgs> = $Result.GetResult<Prisma.$PricingPlanPayload, S>

  type PricingPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingPlanCountAggregateInputType | true
    }

  export interface PricingPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingPlan'], meta: { name: 'PricingPlan' } }
    /**
     * Find zero or one PricingPlan that matches the filter.
     * @param {PricingPlanFindUniqueArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingPlanFindUniqueArgs>(args: SelectSubset<T, PricingPlanFindUniqueArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PricingPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingPlanFindUniqueOrThrowArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindFirstArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingPlanFindFirstArgs>(args?: SelectSubset<T, PricingPlanFindFirstArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PricingPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindFirstOrThrowArgs} args - Arguments to find a PricingPlan
     * @example
     * // Get one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PricingPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingPlans
     * const pricingPlans = await prisma.pricingPlan.findMany()
     * 
     * // Get first 10 PricingPlans
     * const pricingPlans = await prisma.pricingPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingPlanWithIdOnly = await prisma.pricingPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingPlanFindManyArgs>(args?: SelectSubset<T, PricingPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PricingPlan.
     * @param {PricingPlanCreateArgs} args - Arguments to create a PricingPlan.
     * @example
     * // Create one PricingPlan
     * const PricingPlan = await prisma.pricingPlan.create({
     *   data: {
     *     // ... data to create a PricingPlan
     *   }
     * })
     * 
     */
    create<T extends PricingPlanCreateArgs>(args: SelectSubset<T, PricingPlanCreateArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PricingPlans.
     * @param {PricingPlanCreateManyArgs} args - Arguments to create many PricingPlans.
     * @example
     * // Create many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingPlanCreateManyArgs>(args?: SelectSubset<T, PricingPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingPlans and returns the data saved in the database.
     * @param {PricingPlanCreateManyAndReturnArgs} args - Arguments to create many PricingPlans.
     * @example
     * // Create many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingPlans and only return the `id`
     * const pricingPlanWithIdOnly = await prisma.pricingPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PricingPlan.
     * @param {PricingPlanDeleteArgs} args - Arguments to delete one PricingPlan.
     * @example
     * // Delete one PricingPlan
     * const PricingPlan = await prisma.pricingPlan.delete({
     *   where: {
     *     // ... filter to delete one PricingPlan
     *   }
     * })
     * 
     */
    delete<T extends PricingPlanDeleteArgs>(args: SelectSubset<T, PricingPlanDeleteArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PricingPlan.
     * @param {PricingPlanUpdateArgs} args - Arguments to update one PricingPlan.
     * @example
     * // Update one PricingPlan
     * const pricingPlan = await prisma.pricingPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingPlanUpdateArgs>(args: SelectSubset<T, PricingPlanUpdateArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PricingPlans.
     * @param {PricingPlanDeleteManyArgs} args - Arguments to filter PricingPlans to delete.
     * @example
     * // Delete a few PricingPlans
     * const { count } = await prisma.pricingPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingPlanDeleteManyArgs>(args?: SelectSubset<T, PricingPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingPlanUpdateManyArgs>(args: SelectSubset<T, PricingPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingPlans and returns the data updated in the database.
     * @param {PricingPlanUpdateManyAndReturnArgs} args - Arguments to update many PricingPlans.
     * @example
     * // Update many PricingPlans
     * const pricingPlan = await prisma.pricingPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PricingPlans and only return the `id`
     * const pricingPlanWithIdOnly = await prisma.pricingPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PricingPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PricingPlan.
     * @param {PricingPlanUpsertArgs} args - Arguments to update or create a PricingPlan.
     * @example
     * // Update or create a PricingPlan
     * const pricingPlan = await prisma.pricingPlan.upsert({
     *   create: {
     *     // ... data to create a PricingPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingPlan we want to update
     *   }
     * })
     */
    upsert<T extends PricingPlanUpsertArgs>(args: SelectSubset<T, PricingPlanUpsertArgs<ExtArgs>>): Prisma__PricingPlanClient<$Result.GetResult<Prisma.$PricingPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PricingPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanCountArgs} args - Arguments to filter PricingPlans to count.
     * @example
     * // Count the number of PricingPlans
     * const count = await prisma.pricingPlan.count({
     *   where: {
     *     // ... the filter for the PricingPlans we want to count
     *   }
     * })
    **/
    count<T extends PricingPlanCountArgs>(
      args?: Subset<T, PricingPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingPlanAggregateArgs>(args: Subset<T, PricingPlanAggregateArgs>): Prisma.PrismaPromise<GetPricingPlanAggregateType<T>>

    /**
     * Group by PricingPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingPlanGroupByArgs} args - Group by arguments.
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
      T extends PricingPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingPlanGroupByArgs['orderBy'] }
        : { orderBy?: PricingPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingPlan model
   */
  readonly fields: PricingPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    floor<T extends FloorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FloorDefaultArgs<ExtArgs>>): Prisma__FloorClient<$Result.GetResult<Prisma.$FloorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PricingPlan model
   */
  interface PricingPlanFieldRefs {
    readonly id: FieldRef<"PricingPlan", 'Int'>
    readonly floorId: FieldRef<"PricingPlan", 'Int'>
    readonly planType: FieldRef<"PricingPlan", 'String'>
    readonly priceAmount: FieldRef<"PricingPlan", 'Decimal'>
    readonly seatsAvailable: FieldRef<"PricingPlan", 'Int'>
    readonly features: FieldRef<"PricingPlan", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * PricingPlan findUnique
   */
  export type PricingPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan findUniqueOrThrow
   */
  export type PricingPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan findFirst
   */
  export type PricingPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingPlans.
     */
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan findFirstOrThrow
   */
  export type PricingPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter, which PricingPlan to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingPlans.
     */
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan findMany
   */
  export type PricingPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter, which PricingPlans to fetch.
     */
    where?: PricingPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingPlans to fetch.
     */
    orderBy?: PricingPlanOrderByWithRelationInput | PricingPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingPlans.
     */
    cursor?: PricingPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingPlans.
     */
    skip?: number
    distinct?: PricingPlanScalarFieldEnum | PricingPlanScalarFieldEnum[]
  }

  /**
   * PricingPlan create
   */
  export type PricingPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingPlan.
     */
    data: XOR<PricingPlanCreateInput, PricingPlanUncheckedCreateInput>
  }

  /**
   * PricingPlan createMany
   */
  export type PricingPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingPlans.
     */
    data: PricingPlanCreateManyInput | PricingPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingPlan createManyAndReturn
   */
  export type PricingPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * The data used to create many PricingPlans.
     */
    data: PricingPlanCreateManyInput | PricingPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingPlan update
   */
  export type PricingPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingPlan.
     */
    data: XOR<PricingPlanUpdateInput, PricingPlanUncheckedUpdateInput>
    /**
     * Choose, which PricingPlan to update.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan updateMany
   */
  export type PricingPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingPlans.
     */
    data: XOR<PricingPlanUpdateManyMutationInput, PricingPlanUncheckedUpdateManyInput>
    /**
     * Filter which PricingPlans to update
     */
    where?: PricingPlanWhereInput
    /**
     * Limit how many PricingPlans to update.
     */
    limit?: number
  }

  /**
   * PricingPlan updateManyAndReturn
   */
  export type PricingPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * The data used to update PricingPlans.
     */
    data: XOR<PricingPlanUpdateManyMutationInput, PricingPlanUncheckedUpdateManyInput>
    /**
     * Filter which PricingPlans to update
     */
    where?: PricingPlanWhereInput
    /**
     * Limit how many PricingPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PricingPlan upsert
   */
  export type PricingPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingPlan to update in case it exists.
     */
    where: PricingPlanWhereUniqueInput
    /**
     * In case the PricingPlan found by the `where` argument doesn't exist, create a new PricingPlan with this data.
     */
    create: XOR<PricingPlanCreateInput, PricingPlanUncheckedCreateInput>
    /**
     * In case the PricingPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingPlanUpdateInput, PricingPlanUncheckedUpdateInput>
  }

  /**
   * PricingPlan delete
   */
  export type PricingPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
    /**
     * Filter which PricingPlan to delete.
     */
    where: PricingPlanWhereUniqueInput
  }

  /**
   * PricingPlan deleteMany
   */
  export type PricingPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingPlans to delete
     */
    where?: PricingPlanWhereInput
    /**
     * Limit how many PricingPlans to delete.
     */
    limit?: number
  }

  /**
   * PricingPlan without action
   */
  export type PricingPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingPlan
     */
    select?: PricingPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingPlan
     */
    omit?: PricingPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingPlanInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    isbn: string | null
    genre: string | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    author: string | null
    isbn: string | null
    genre: string | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    author: number
    isbn: number
    genre: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    author?: true
    isbn?: true
    genre?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    author?: true
    isbn?: true
    genre?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    author?: true
    isbn?: true
    genre?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    author: string | null
    isbn: string | null
    genre: string | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    genre?: boolean
    inventory?: boolean | Book$inventoryArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    genre?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    genre?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    author?: boolean
    isbn?: boolean
    genre?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "author" | "isbn" | "genre", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | Book$inventoryArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      inventory: Prisma.$BookInventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      author: string | null
      isbn: string | null
      genre: string | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends Book$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Book$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly title: FieldRef<"Book", 'String'>
    readonly author: FieldRef<"Book", 'String'>
    readonly isbn: FieldRef<"Book", 'String'>
    readonly genre: FieldRef<"Book", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.inventory
   */
  export type Book$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
    where?: BookInventoryWhereInput
    orderBy?: BookInventoryOrderByWithRelationInput | BookInventoryOrderByWithRelationInput[]
    cursor?: BookInventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookInventoryScalarFieldEnum | BookInventoryScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model BookInventory
   */

  export type AggregateBookInventory = {
    _count: BookInventoryCountAggregateOutputType | null
    _avg: BookInventoryAvgAggregateOutputType | null
    _sum: BookInventorySumAggregateOutputType | null
    _min: BookInventoryMinAggregateOutputType | null
    _max: BookInventoryMaxAggregateOutputType | null
  }

  export type BookInventoryAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
    libraryId: number | null
    priceNew: Decimal | null
    priceUsed: Decimal | null
    stockCount: number | null
  }

  export type BookInventorySumAggregateOutputType = {
    id: number | null
    bookId: number | null
    libraryId: number | null
    priceNew: Decimal | null
    priceUsed: Decimal | null
    stockCount: number | null
  }

  export type BookInventoryMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    libraryId: number | null
    priceNew: Decimal | null
    priceUsed: Decimal | null
    stockCount: number | null
    isAvailable: boolean | null
  }

  export type BookInventoryMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    libraryId: number | null
    priceNew: Decimal | null
    priceUsed: Decimal | null
    stockCount: number | null
    isAvailable: boolean | null
  }

  export type BookInventoryCountAggregateOutputType = {
    id: number
    bookId: number
    libraryId: number
    priceNew: number
    priceUsed: number
    stockCount: number
    isAvailable: number
    _all: number
  }


  export type BookInventoryAvgAggregateInputType = {
    id?: true
    bookId?: true
    libraryId?: true
    priceNew?: true
    priceUsed?: true
    stockCount?: true
  }

  export type BookInventorySumAggregateInputType = {
    id?: true
    bookId?: true
    libraryId?: true
    priceNew?: true
    priceUsed?: true
    stockCount?: true
  }

  export type BookInventoryMinAggregateInputType = {
    id?: true
    bookId?: true
    libraryId?: true
    priceNew?: true
    priceUsed?: true
    stockCount?: true
    isAvailable?: true
  }

  export type BookInventoryMaxAggregateInputType = {
    id?: true
    bookId?: true
    libraryId?: true
    priceNew?: true
    priceUsed?: true
    stockCount?: true
    isAvailable?: true
  }

  export type BookInventoryCountAggregateInputType = {
    id?: true
    bookId?: true
    libraryId?: true
    priceNew?: true
    priceUsed?: true
    stockCount?: true
    isAvailable?: true
    _all?: true
  }

  export type BookInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookInventory to aggregate.
     */
    where?: BookInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookInventories to fetch.
     */
    orderBy?: BookInventoryOrderByWithRelationInput | BookInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookInventories
    **/
    _count?: true | BookInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookInventoryMaxAggregateInputType
  }

  export type GetBookInventoryAggregateType<T extends BookInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBookInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookInventory[P]>
      : GetScalarType<T[P], AggregateBookInventory[P]>
  }




  export type BookInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookInventoryWhereInput
    orderBy?: BookInventoryOrderByWithAggregationInput | BookInventoryOrderByWithAggregationInput[]
    by: BookInventoryScalarFieldEnum[] | BookInventoryScalarFieldEnum
    having?: BookInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookInventoryCountAggregateInputType | true
    _avg?: BookInventoryAvgAggregateInputType
    _sum?: BookInventorySumAggregateInputType
    _min?: BookInventoryMinAggregateInputType
    _max?: BookInventoryMaxAggregateInputType
  }

  export type BookInventoryGroupByOutputType = {
    id: number
    bookId: number
    libraryId: number
    priceNew: Decimal | null
    priceUsed: Decimal | null
    stockCount: number
    isAvailable: boolean
    _count: BookInventoryCountAggregateOutputType | null
    _avg: BookInventoryAvgAggregateOutputType | null
    _sum: BookInventorySumAggregateOutputType | null
    _min: BookInventoryMinAggregateOutputType | null
    _max: BookInventoryMaxAggregateOutputType | null
  }

  type GetBookInventoryGroupByPayload<T extends BookInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], BookInventoryGroupByOutputType[P]>
        }
      >
    >


  export type BookInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    libraryId?: boolean
    priceNew?: boolean
    priceUsed?: boolean
    stockCount?: boolean
    isAvailable?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookInventory"]>

  export type BookInventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    libraryId?: boolean
    priceNew?: boolean
    priceUsed?: boolean
    stockCount?: boolean
    isAvailable?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookInventory"]>

  export type BookInventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    libraryId?: boolean
    priceNew?: boolean
    priceUsed?: boolean
    stockCount?: boolean
    isAvailable?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookInventory"]>

  export type BookInventorySelectScalar = {
    id?: boolean
    bookId?: boolean
    libraryId?: boolean
    priceNew?: boolean
    priceUsed?: boolean
    stockCount?: boolean
    isAvailable?: boolean
  }

  export type BookInventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "libraryId" | "priceNew" | "priceUsed" | "stockCount" | "isAvailable", ExtArgs["result"]["bookInventory"]>
  export type BookInventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }
  export type BookInventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }
  export type BookInventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
    library?: boolean | LibraryDefaultArgs<ExtArgs>
  }

  export type $BookInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookInventory"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
      library: Prisma.$LibraryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: number
      libraryId: number
      priceNew: Prisma.Decimal | null
      priceUsed: Prisma.Decimal | null
      stockCount: number
      isAvailable: boolean
    }, ExtArgs["result"]["bookInventory"]>
    composites: {}
  }

  type BookInventoryGetPayload<S extends boolean | null | undefined | BookInventoryDefaultArgs> = $Result.GetResult<Prisma.$BookInventoryPayload, S>

  type BookInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookInventoryCountAggregateInputType | true
    }

  export interface BookInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookInventory'], meta: { name: 'BookInventory' } }
    /**
     * Find zero or one BookInventory that matches the filter.
     * @param {BookInventoryFindUniqueArgs} args - Arguments to find a BookInventory
     * @example
     * // Get one BookInventory
     * const bookInventory = await prisma.bookInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookInventoryFindUniqueArgs>(args: SelectSubset<T, BookInventoryFindUniqueArgs<ExtArgs>>): Prisma__BookInventoryClient<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookInventoryFindUniqueOrThrowArgs} args - Arguments to find a BookInventory
     * @example
     * // Get one BookInventory
     * const bookInventory = await prisma.bookInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookInventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, BookInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookInventoryClient<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookInventoryFindFirstArgs} args - Arguments to find a BookInventory
     * @example
     * // Get one BookInventory
     * const bookInventory = await prisma.bookInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookInventoryFindFirstArgs>(args?: SelectSubset<T, BookInventoryFindFirstArgs<ExtArgs>>): Prisma__BookInventoryClient<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookInventoryFindFirstOrThrowArgs} args - Arguments to find a BookInventory
     * @example
     * // Get one BookInventory
     * const bookInventory = await prisma.bookInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookInventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, BookInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookInventoryClient<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookInventories
     * const bookInventories = await prisma.bookInventory.findMany()
     * 
     * // Get first 10 BookInventories
     * const bookInventories = await prisma.bookInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookInventoryWithIdOnly = await prisma.bookInventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookInventoryFindManyArgs>(args?: SelectSubset<T, BookInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookInventory.
     * @param {BookInventoryCreateArgs} args - Arguments to create a BookInventory.
     * @example
     * // Create one BookInventory
     * const BookInventory = await prisma.bookInventory.create({
     *   data: {
     *     // ... data to create a BookInventory
     *   }
     * })
     * 
     */
    create<T extends BookInventoryCreateArgs>(args: SelectSubset<T, BookInventoryCreateArgs<ExtArgs>>): Prisma__BookInventoryClient<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookInventories.
     * @param {BookInventoryCreateManyArgs} args - Arguments to create many BookInventories.
     * @example
     * // Create many BookInventories
     * const bookInventory = await prisma.bookInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookInventoryCreateManyArgs>(args?: SelectSubset<T, BookInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookInventories and returns the data saved in the database.
     * @param {BookInventoryCreateManyAndReturnArgs} args - Arguments to create many BookInventories.
     * @example
     * // Create many BookInventories
     * const bookInventory = await prisma.bookInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookInventories and only return the `id`
     * const bookInventoryWithIdOnly = await prisma.bookInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookInventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, BookInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookInventory.
     * @param {BookInventoryDeleteArgs} args - Arguments to delete one BookInventory.
     * @example
     * // Delete one BookInventory
     * const BookInventory = await prisma.bookInventory.delete({
     *   where: {
     *     // ... filter to delete one BookInventory
     *   }
     * })
     * 
     */
    delete<T extends BookInventoryDeleteArgs>(args: SelectSubset<T, BookInventoryDeleteArgs<ExtArgs>>): Prisma__BookInventoryClient<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookInventory.
     * @param {BookInventoryUpdateArgs} args - Arguments to update one BookInventory.
     * @example
     * // Update one BookInventory
     * const bookInventory = await prisma.bookInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookInventoryUpdateArgs>(args: SelectSubset<T, BookInventoryUpdateArgs<ExtArgs>>): Prisma__BookInventoryClient<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookInventories.
     * @param {BookInventoryDeleteManyArgs} args - Arguments to filter BookInventories to delete.
     * @example
     * // Delete a few BookInventories
     * const { count } = await prisma.bookInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookInventoryDeleteManyArgs>(args?: SelectSubset<T, BookInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookInventories
     * const bookInventory = await prisma.bookInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookInventoryUpdateManyArgs>(args: SelectSubset<T, BookInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookInventories and returns the data updated in the database.
     * @param {BookInventoryUpdateManyAndReturnArgs} args - Arguments to update many BookInventories.
     * @example
     * // Update many BookInventories
     * const bookInventory = await prisma.bookInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookInventories and only return the `id`
     * const bookInventoryWithIdOnly = await prisma.bookInventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookInventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, BookInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookInventory.
     * @param {BookInventoryUpsertArgs} args - Arguments to update or create a BookInventory.
     * @example
     * // Update or create a BookInventory
     * const bookInventory = await prisma.bookInventory.upsert({
     *   create: {
     *     // ... data to create a BookInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookInventory we want to update
     *   }
     * })
     */
    upsert<T extends BookInventoryUpsertArgs>(args: SelectSubset<T, BookInventoryUpsertArgs<ExtArgs>>): Prisma__BookInventoryClient<$Result.GetResult<Prisma.$BookInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookInventoryCountArgs} args - Arguments to filter BookInventories to count.
     * @example
     * // Count the number of BookInventories
     * const count = await prisma.bookInventory.count({
     *   where: {
     *     // ... the filter for the BookInventories we want to count
     *   }
     * })
    **/
    count<T extends BookInventoryCountArgs>(
      args?: Subset<T, BookInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookInventoryAggregateArgs>(args: Subset<T, BookInventoryAggregateArgs>): Prisma.PrismaPromise<GetBookInventoryAggregateType<T>>

    /**
     * Group by BookInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookInventoryGroupByArgs} args - Group by arguments.
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
      T extends BookInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookInventoryGroupByArgs['orderBy'] }
        : { orderBy?: BookInventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookInventory model
   */
  readonly fields: BookInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    library<T extends LibraryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibraryDefaultArgs<ExtArgs>>): Prisma__LibraryClient<$Result.GetResult<Prisma.$LibraryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookInventory model
   */
  interface BookInventoryFieldRefs {
    readonly id: FieldRef<"BookInventory", 'Int'>
    readonly bookId: FieldRef<"BookInventory", 'Int'>
    readonly libraryId: FieldRef<"BookInventory", 'Int'>
    readonly priceNew: FieldRef<"BookInventory", 'Decimal'>
    readonly priceUsed: FieldRef<"BookInventory", 'Decimal'>
    readonly stockCount: FieldRef<"BookInventory", 'Int'>
    readonly isAvailable: FieldRef<"BookInventory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * BookInventory findUnique
   */
  export type BookInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
    /**
     * Filter, which BookInventory to fetch.
     */
    where: BookInventoryWhereUniqueInput
  }

  /**
   * BookInventory findUniqueOrThrow
   */
  export type BookInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
    /**
     * Filter, which BookInventory to fetch.
     */
    where: BookInventoryWhereUniqueInput
  }

  /**
   * BookInventory findFirst
   */
  export type BookInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
    /**
     * Filter, which BookInventory to fetch.
     */
    where?: BookInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookInventories to fetch.
     */
    orderBy?: BookInventoryOrderByWithRelationInput | BookInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookInventories.
     */
    cursor?: BookInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookInventories.
     */
    distinct?: BookInventoryScalarFieldEnum | BookInventoryScalarFieldEnum[]
  }

  /**
   * BookInventory findFirstOrThrow
   */
  export type BookInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
    /**
     * Filter, which BookInventory to fetch.
     */
    where?: BookInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookInventories to fetch.
     */
    orderBy?: BookInventoryOrderByWithRelationInput | BookInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookInventories.
     */
    cursor?: BookInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookInventories.
     */
    distinct?: BookInventoryScalarFieldEnum | BookInventoryScalarFieldEnum[]
  }

  /**
   * BookInventory findMany
   */
  export type BookInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
    /**
     * Filter, which BookInventories to fetch.
     */
    where?: BookInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookInventories to fetch.
     */
    orderBy?: BookInventoryOrderByWithRelationInput | BookInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookInventories.
     */
    cursor?: BookInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookInventories.
     */
    skip?: number
    distinct?: BookInventoryScalarFieldEnum | BookInventoryScalarFieldEnum[]
  }

  /**
   * BookInventory create
   */
  export type BookInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a BookInventory.
     */
    data: XOR<BookInventoryCreateInput, BookInventoryUncheckedCreateInput>
  }

  /**
   * BookInventory createMany
   */
  export type BookInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookInventories.
     */
    data: BookInventoryCreateManyInput | BookInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookInventory createManyAndReturn
   */
  export type BookInventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * The data used to create many BookInventories.
     */
    data: BookInventoryCreateManyInput | BookInventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookInventory update
   */
  export type BookInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a BookInventory.
     */
    data: XOR<BookInventoryUpdateInput, BookInventoryUncheckedUpdateInput>
    /**
     * Choose, which BookInventory to update.
     */
    where: BookInventoryWhereUniqueInput
  }

  /**
   * BookInventory updateMany
   */
  export type BookInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookInventories.
     */
    data: XOR<BookInventoryUpdateManyMutationInput, BookInventoryUncheckedUpdateManyInput>
    /**
     * Filter which BookInventories to update
     */
    where?: BookInventoryWhereInput
    /**
     * Limit how many BookInventories to update.
     */
    limit?: number
  }

  /**
   * BookInventory updateManyAndReturn
   */
  export type BookInventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * The data used to update BookInventories.
     */
    data: XOR<BookInventoryUpdateManyMutationInput, BookInventoryUncheckedUpdateManyInput>
    /**
     * Filter which BookInventories to update
     */
    where?: BookInventoryWhereInput
    /**
     * Limit how many BookInventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookInventory upsert
   */
  export type BookInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the BookInventory to update in case it exists.
     */
    where: BookInventoryWhereUniqueInput
    /**
     * In case the BookInventory found by the `where` argument doesn't exist, create a new BookInventory with this data.
     */
    create: XOR<BookInventoryCreateInput, BookInventoryUncheckedCreateInput>
    /**
     * In case the BookInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookInventoryUpdateInput, BookInventoryUncheckedUpdateInput>
  }

  /**
   * BookInventory delete
   */
  export type BookInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
    /**
     * Filter which BookInventory to delete.
     */
    where: BookInventoryWhereUniqueInput
  }

  /**
   * BookInventory deleteMany
   */
  export type BookInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookInventories to delete
     */
    where?: BookInventoryWhereInput
    /**
     * Limit how many BookInventories to delete.
     */
    limit?: number
  }

  /**
   * BookInventory without action
   */
  export type BookInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookInventory
     */
    select?: BookInventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookInventory
     */
    omit?: BookInventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInventoryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    phone: 'phone',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LibraryScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    type: 'type',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    contactNumber: 'contactNumber',
    timings: 'timings',
    amenities: 'amenities',
    rating: 'rating',
    createdAt: 'createdAt'
  };

  export type LibraryScalarFieldEnum = (typeof LibraryScalarFieldEnum)[keyof typeof LibraryScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    libraryId: 'libraryId',
    reviewerName: 'reviewerName',
    userType: 'userType',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const FloorScalarFieldEnum: {
    id: 'id',
    libraryId: 'libraryId',
    floorNumber: 'floorNumber',
    name: 'name',
    totalSeats: 'totalSeats'
  };

  export type FloorScalarFieldEnum = (typeof FloorScalarFieldEnum)[keyof typeof FloorScalarFieldEnum]


  export const PricingPlanScalarFieldEnum: {
    id: 'id',
    floorId: 'floorId',
    planType: 'planType',
    priceAmount: 'priceAmount',
    seatsAvailable: 'seatsAvailable',
    features: 'features'
  };

  export type PricingPlanScalarFieldEnum = (typeof PricingPlanScalarFieldEnum)[keyof typeof PricingPlanScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    author: 'author',
    isbn: 'isbn',
    genre: 'genre'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BookInventoryScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    libraryId: 'libraryId',
    priceNew: 'priceNew',
    priceUsed: 'priceUsed',
    stockCount: 'stockCount',
    isAvailable: 'isAvailable'
  };

  export type BookInventoryScalarFieldEnum = (typeof BookInventoryScalarFieldEnum)[keyof typeof BookInventoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LibraryType'
   */
  export type EnumLibraryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LibraryType'>
    


  /**
   * Reference to a field of type 'LibraryType[]'
   */
  export type ListEnumLibraryTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LibraryType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    libraries?: LibraryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    libraries?: LibraryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    libraries?: LibraryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type LibraryWhereInput = {
    AND?: LibraryWhereInput | LibraryWhereInput[]
    OR?: LibraryWhereInput[]
    NOT?: LibraryWhereInput | LibraryWhereInput[]
    id?: IntFilter<"Library"> | number
    ownerId?: StringFilter<"Library"> | string
    name?: StringFilter<"Library"> | string
    type?: EnumLibraryTypeFilter<"Library"> | $Enums.LibraryType
    address?: StringNullableFilter<"Library"> | string | null
    latitude?: FloatFilter<"Library"> | number
    longitude?: FloatFilter<"Library"> | number
    contactNumber?: StringNullableFilter<"Library"> | string | null
    timings?: JsonNullableFilter<"Library">
    amenities?: StringNullableListFilter<"Library">
    rating?: FloatFilter<"Library"> | number
    createdAt?: DateTimeFilter<"Library"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    floors?: FloorListRelationFilter
    inventory?: BookInventoryListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type LibraryOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    timings?: SortOrderInput | SortOrder
    amenities?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    floors?: FloorOrderByRelationAggregateInput
    inventory?: BookInventoryOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type LibraryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: LibraryWhereInput | LibraryWhereInput[]
    OR?: LibraryWhereInput[]
    NOT?: LibraryWhereInput | LibraryWhereInput[]
    ownerId?: StringFilter<"Library"> | string
    type?: EnumLibraryTypeFilter<"Library"> | $Enums.LibraryType
    address?: StringNullableFilter<"Library"> | string | null
    latitude?: FloatFilter<"Library"> | number
    longitude?: FloatFilter<"Library"> | number
    contactNumber?: StringNullableFilter<"Library"> | string | null
    timings?: JsonNullableFilter<"Library">
    amenities?: StringNullableListFilter<"Library">
    rating?: FloatFilter<"Library"> | number
    createdAt?: DateTimeFilter<"Library"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    floors?: FloorListRelationFilter
    inventory?: BookInventoryListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "name">

  export type LibraryOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    address?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    timings?: SortOrderInput | SortOrder
    amenities?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    _count?: LibraryCountOrderByAggregateInput
    _avg?: LibraryAvgOrderByAggregateInput
    _max?: LibraryMaxOrderByAggregateInput
    _min?: LibraryMinOrderByAggregateInput
    _sum?: LibrarySumOrderByAggregateInput
  }

  export type LibraryScalarWhereWithAggregatesInput = {
    AND?: LibraryScalarWhereWithAggregatesInput | LibraryScalarWhereWithAggregatesInput[]
    OR?: LibraryScalarWhereWithAggregatesInput[]
    NOT?: LibraryScalarWhereWithAggregatesInput | LibraryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Library"> | number
    ownerId?: StringWithAggregatesFilter<"Library"> | string
    name?: StringWithAggregatesFilter<"Library"> | string
    type?: EnumLibraryTypeWithAggregatesFilter<"Library"> | $Enums.LibraryType
    address?: StringNullableWithAggregatesFilter<"Library"> | string | null
    latitude?: FloatWithAggregatesFilter<"Library"> | number
    longitude?: FloatWithAggregatesFilter<"Library"> | number
    contactNumber?: StringNullableWithAggregatesFilter<"Library"> | string | null
    timings?: JsonNullableWithAggregatesFilter<"Library">
    amenities?: StringNullableListFilter<"Library">
    rating?: FloatWithAggregatesFilter<"Library"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Library"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    libraryId?: IntFilter<"Review"> | number
    reviewerName?: StringFilter<"Review"> | string
    userType?: StringNullableFilter<"Review"> | string | null
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    libraryId?: SortOrder
    reviewerName?: SortOrder
    userType?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    library?: LibraryOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    libraryId?: IntFilter<"Review"> | number
    reviewerName?: StringFilter<"Review"> | string
    userType?: StringNullableFilter<"Review"> | string | null
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    libraryId?: SortOrder
    reviewerName?: SortOrder
    userType?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    libraryId?: IntWithAggregatesFilter<"Review"> | number
    reviewerName?: StringWithAggregatesFilter<"Review"> | string
    userType?: StringNullableWithAggregatesFilter<"Review"> | string | null
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type FloorWhereInput = {
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    id?: IntFilter<"Floor"> | number
    libraryId?: IntFilter<"Floor"> | number
    floorNumber?: IntFilter<"Floor"> | number
    name?: StringNullableFilter<"Floor"> | string | null
    totalSeats?: IntFilter<"Floor"> | number
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
    pricingPlans?: PricingPlanListRelationFilter
  }

  export type FloorOrderByWithRelationInput = {
    id?: SortOrder
    libraryId?: SortOrder
    floorNumber?: SortOrder
    name?: SortOrderInput | SortOrder
    totalSeats?: SortOrder
    library?: LibraryOrderByWithRelationInput
    pricingPlans?: PricingPlanOrderByRelationAggregateInput
  }

  export type FloorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FloorWhereInput | FloorWhereInput[]
    OR?: FloorWhereInput[]
    NOT?: FloorWhereInput | FloorWhereInput[]
    libraryId?: IntFilter<"Floor"> | number
    floorNumber?: IntFilter<"Floor"> | number
    name?: StringNullableFilter<"Floor"> | string | null
    totalSeats?: IntFilter<"Floor"> | number
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
    pricingPlans?: PricingPlanListRelationFilter
  }, "id">

  export type FloorOrderByWithAggregationInput = {
    id?: SortOrder
    libraryId?: SortOrder
    floorNumber?: SortOrder
    name?: SortOrderInput | SortOrder
    totalSeats?: SortOrder
    _count?: FloorCountOrderByAggregateInput
    _avg?: FloorAvgOrderByAggregateInput
    _max?: FloorMaxOrderByAggregateInput
    _min?: FloorMinOrderByAggregateInput
    _sum?: FloorSumOrderByAggregateInput
  }

  export type FloorScalarWhereWithAggregatesInput = {
    AND?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    OR?: FloorScalarWhereWithAggregatesInput[]
    NOT?: FloorScalarWhereWithAggregatesInput | FloorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Floor"> | number
    libraryId?: IntWithAggregatesFilter<"Floor"> | number
    floorNumber?: IntWithAggregatesFilter<"Floor"> | number
    name?: StringNullableWithAggregatesFilter<"Floor"> | string | null
    totalSeats?: IntWithAggregatesFilter<"Floor"> | number
  }

  export type PricingPlanWhereInput = {
    AND?: PricingPlanWhereInput | PricingPlanWhereInput[]
    OR?: PricingPlanWhereInput[]
    NOT?: PricingPlanWhereInput | PricingPlanWhereInput[]
    id?: IntFilter<"PricingPlan"> | number
    floorId?: IntFilter<"PricingPlan"> | number
    planType?: StringFilter<"PricingPlan"> | string
    priceAmount?: DecimalFilter<"PricingPlan"> | Decimal | DecimalJsLike | number | string
    seatsAvailable?: IntFilter<"PricingPlan"> | number
    features?: StringNullableListFilter<"PricingPlan">
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
  }

  export type PricingPlanOrderByWithRelationInput = {
    id?: SortOrder
    floorId?: SortOrder
    planType?: SortOrder
    priceAmount?: SortOrder
    seatsAvailable?: SortOrder
    features?: SortOrder
    floor?: FloorOrderByWithRelationInput
  }

  export type PricingPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PricingPlanWhereInput | PricingPlanWhereInput[]
    OR?: PricingPlanWhereInput[]
    NOT?: PricingPlanWhereInput | PricingPlanWhereInput[]
    floorId?: IntFilter<"PricingPlan"> | number
    planType?: StringFilter<"PricingPlan"> | string
    priceAmount?: DecimalFilter<"PricingPlan"> | Decimal | DecimalJsLike | number | string
    seatsAvailable?: IntFilter<"PricingPlan"> | number
    features?: StringNullableListFilter<"PricingPlan">
    floor?: XOR<FloorScalarRelationFilter, FloorWhereInput>
  }, "id">

  export type PricingPlanOrderByWithAggregationInput = {
    id?: SortOrder
    floorId?: SortOrder
    planType?: SortOrder
    priceAmount?: SortOrder
    seatsAvailable?: SortOrder
    features?: SortOrder
    _count?: PricingPlanCountOrderByAggregateInput
    _avg?: PricingPlanAvgOrderByAggregateInput
    _max?: PricingPlanMaxOrderByAggregateInput
    _min?: PricingPlanMinOrderByAggregateInput
    _sum?: PricingPlanSumOrderByAggregateInput
  }

  export type PricingPlanScalarWhereWithAggregatesInput = {
    AND?: PricingPlanScalarWhereWithAggregatesInput | PricingPlanScalarWhereWithAggregatesInput[]
    OR?: PricingPlanScalarWhereWithAggregatesInput[]
    NOT?: PricingPlanScalarWhereWithAggregatesInput | PricingPlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PricingPlan"> | number
    floorId?: IntWithAggregatesFilter<"PricingPlan"> | number
    planType?: StringWithAggregatesFilter<"PricingPlan"> | string
    priceAmount?: DecimalWithAggregatesFilter<"PricingPlan"> | Decimal | DecimalJsLike | number | string
    seatsAvailable?: IntWithAggregatesFilter<"PricingPlan"> | number
    features?: StringNullableListFilter<"PricingPlan">
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    author?: StringNullableFilter<"Book"> | string | null
    isbn?: StringNullableFilter<"Book"> | string | null
    genre?: StringNullableFilter<"Book"> | string | null
    inventory?: BookInventoryListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrderInput | SortOrder
    isbn?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    inventory?: BookInventoryOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    isbn?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    author?: StringNullableFilter<"Book"> | string | null
    genre?: StringNullableFilter<"Book"> | string | null
    inventory?: BookInventoryListRelationFilter
  }, "id" | "isbn">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrderInput | SortOrder
    isbn?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    title?: StringWithAggregatesFilter<"Book"> | string
    author?: StringNullableWithAggregatesFilter<"Book"> | string | null
    isbn?: StringNullableWithAggregatesFilter<"Book"> | string | null
    genre?: StringNullableWithAggregatesFilter<"Book"> | string | null
  }

  export type BookInventoryWhereInput = {
    AND?: BookInventoryWhereInput | BookInventoryWhereInput[]
    OR?: BookInventoryWhereInput[]
    NOT?: BookInventoryWhereInput | BookInventoryWhereInput[]
    id?: IntFilter<"BookInventory"> | number
    bookId?: IntFilter<"BookInventory"> | number
    libraryId?: IntFilter<"BookInventory"> | number
    priceNew?: DecimalNullableFilter<"BookInventory"> | Decimal | DecimalJsLike | number | string | null
    priceUsed?: DecimalNullableFilter<"BookInventory"> | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFilter<"BookInventory"> | number
    isAvailable?: BoolFilter<"BookInventory"> | boolean
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
  }

  export type BookInventoryOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    priceNew?: SortOrderInput | SortOrder
    priceUsed?: SortOrderInput | SortOrder
    stockCount?: SortOrder
    isAvailable?: SortOrder
    book?: BookOrderByWithRelationInput
    library?: LibraryOrderByWithRelationInput
  }

  export type BookInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookInventoryWhereInput | BookInventoryWhereInput[]
    OR?: BookInventoryWhereInput[]
    NOT?: BookInventoryWhereInput | BookInventoryWhereInput[]
    bookId?: IntFilter<"BookInventory"> | number
    libraryId?: IntFilter<"BookInventory"> | number
    priceNew?: DecimalNullableFilter<"BookInventory"> | Decimal | DecimalJsLike | number | string | null
    priceUsed?: DecimalNullableFilter<"BookInventory"> | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFilter<"BookInventory"> | number
    isAvailable?: BoolFilter<"BookInventory"> | boolean
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
    library?: XOR<LibraryScalarRelationFilter, LibraryWhereInput>
  }, "id">

  export type BookInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    priceNew?: SortOrderInput | SortOrder
    priceUsed?: SortOrderInput | SortOrder
    stockCount?: SortOrder
    isAvailable?: SortOrder
    _count?: BookInventoryCountOrderByAggregateInput
    _avg?: BookInventoryAvgOrderByAggregateInput
    _max?: BookInventoryMaxOrderByAggregateInput
    _min?: BookInventoryMinOrderByAggregateInput
    _sum?: BookInventorySumOrderByAggregateInput
  }

  export type BookInventoryScalarWhereWithAggregatesInput = {
    AND?: BookInventoryScalarWhereWithAggregatesInput | BookInventoryScalarWhereWithAggregatesInput[]
    OR?: BookInventoryScalarWhereWithAggregatesInput[]
    NOT?: BookInventoryScalarWhereWithAggregatesInput | BookInventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookInventory"> | number
    bookId?: IntWithAggregatesFilter<"BookInventory"> | number
    libraryId?: IntWithAggregatesFilter<"BookInventory"> | number
    priceNew?: DecimalNullableWithAggregatesFilter<"BookInventory"> | Decimal | DecimalJsLike | number | string | null
    priceUsed?: DecimalNullableWithAggregatesFilter<"BookInventory"> | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntWithAggregatesFilter<"BookInventory"> | number
    isAvailable?: BoolWithAggregatesFilter<"BookInventory"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    role?: string
    libraries?: LibraryCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    role?: string
    libraries?: LibraryUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    libraries?: LibraryUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    libraries?: LibraryUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryCreateInput = {
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutLibrariesInput
    floors?: FloorCreateNestedManyWithoutLibraryInput
    inventory?: BookInventoryCreateNestedManyWithoutLibraryInput
    reviews?: ReviewCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateInput = {
    id?: number
    ownerId: string
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
    floors?: FloorUncheckedCreateNestedManyWithoutLibraryInput
    inventory?: BookInventoryUncheckedCreateNestedManyWithoutLibraryInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLibrariesNestedInput
    floors?: FloorUpdateManyWithoutLibraryNestedInput
    inventory?: BookInventoryUpdateManyWithoutLibraryNestedInput
    reviews?: ReviewUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floors?: FloorUncheckedUpdateManyWithoutLibraryNestedInput
    inventory?: BookInventoryUncheckedUpdateManyWithoutLibraryNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryCreateManyInput = {
    id?: number
    ownerId: string
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
  }

  export type LibraryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    reviewerName: string
    userType?: string | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
    library: LibraryCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    libraryId: number
    reviewerName: string
    userType?: string | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    reviewerName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    library?: LibraryUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    libraryId: number
    reviewerName: string
    userType?: string | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    reviewerName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloorCreateInput = {
    floorNumber: number
    name?: string | null
    totalSeats: number
    library: LibraryCreateNestedOneWithoutFloorsInput
    pricingPlans?: PricingPlanCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateInput = {
    id?: number
    libraryId: number
    floorNumber: number
    name?: string | null
    totalSeats: number
    pricingPlans?: PricingPlanUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorUpdateInput = {
    floorNumber?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    totalSeats?: IntFieldUpdateOperationsInput | number
    library?: LibraryUpdateOneRequiredWithoutFloorsNestedInput
    pricingPlans?: PricingPlanUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    totalSeats?: IntFieldUpdateOperationsInput | number
    pricingPlans?: PricingPlanUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type FloorCreateManyInput = {
    id?: number
    libraryId: number
    floorNumber: number
    name?: string | null
    totalSeats: number
  }

  export type FloorUpdateManyMutationInput = {
    floorNumber?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type FloorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type PricingPlanCreateInput = {
    planType: string
    priceAmount: Decimal | DecimalJsLike | number | string
    seatsAvailable: number
    features?: PricingPlanCreatefeaturesInput | string[]
    floor: FloorCreateNestedOneWithoutPricingPlansInput
  }

  export type PricingPlanUncheckedCreateInput = {
    id?: number
    floorId: number
    planType: string
    priceAmount: Decimal | DecimalJsLike | number | string
    seatsAvailable: number
    features?: PricingPlanCreatefeaturesInput | string[]
  }

  export type PricingPlanUpdateInput = {
    planType?: StringFieldUpdateOperationsInput | string
    priceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    seatsAvailable?: IntFieldUpdateOperationsInput | number
    features?: PricingPlanUpdatefeaturesInput | string[]
    floor?: FloorUpdateOneRequiredWithoutPricingPlansNestedInput
  }

  export type PricingPlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    floorId?: IntFieldUpdateOperationsInput | number
    planType?: StringFieldUpdateOperationsInput | string
    priceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    seatsAvailable?: IntFieldUpdateOperationsInput | number
    features?: PricingPlanUpdatefeaturesInput | string[]
  }

  export type PricingPlanCreateManyInput = {
    id?: number
    floorId: number
    planType: string
    priceAmount: Decimal | DecimalJsLike | number | string
    seatsAvailable: number
    features?: PricingPlanCreatefeaturesInput | string[]
  }

  export type PricingPlanUpdateManyMutationInput = {
    planType?: StringFieldUpdateOperationsInput | string
    priceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    seatsAvailable?: IntFieldUpdateOperationsInput | number
    features?: PricingPlanUpdatefeaturesInput | string[]
  }

  export type PricingPlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    floorId?: IntFieldUpdateOperationsInput | number
    planType?: StringFieldUpdateOperationsInput | string
    priceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    seatsAvailable?: IntFieldUpdateOperationsInput | number
    features?: PricingPlanUpdatefeaturesInput | string[]
  }

  export type BookCreateInput = {
    title: string
    author?: string | null
    isbn?: string | null
    genre?: string | null
    inventory?: BookInventoryCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    author?: string | null
    isbn?: string | null
    genre?: string | null
    inventory?: BookInventoryUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: BookInventoryUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    inventory?: BookInventoryUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
    author?: string | null
    isbn?: string | null
    genre?: string | null
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookInventoryCreateInput = {
    priceNew?: Decimal | DecimalJsLike | number | string | null
    priceUsed?: Decimal | DecimalJsLike | number | string | null
    stockCount?: number
    isAvailable?: boolean
    book: BookCreateNestedOneWithoutInventoryInput
    library: LibraryCreateNestedOneWithoutInventoryInput
  }

  export type BookInventoryUncheckedCreateInput = {
    id?: number
    bookId: number
    libraryId: number
    priceNew?: Decimal | DecimalJsLike | number | string | null
    priceUsed?: Decimal | DecimalJsLike | number | string | null
    stockCount?: number
    isAvailable?: boolean
  }

  export type BookInventoryUpdateInput = {
    priceNew?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    book?: BookUpdateOneRequiredWithoutInventoryNestedInput
    library?: LibraryUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type BookInventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    priceNew?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookInventoryCreateManyInput = {
    id?: number
    bookId: number
    libraryId: number
    priceNew?: Decimal | DecimalJsLike | number | string | null
    priceUsed?: Decimal | DecimalJsLike | number | string | null
    stockCount?: number
    isAvailable?: boolean
  }

  export type BookInventoryUpdateManyMutationInput = {
    priceNew?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookInventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    priceNew?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LibraryListRelationFilter = {
    every?: LibraryWhereInput
    some?: LibraryWhereInput
    none?: LibraryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LibraryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumLibraryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeFilter<$PrismaModel> | $Enums.LibraryType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FloorListRelationFilter = {
    every?: FloorWhereInput
    some?: FloorWhereInput
    none?: FloorWhereInput
  }

  export type BookInventoryListRelationFilter = {
    every?: BookInventoryWhereInput
    some?: BookInventoryWhereInput
    none?: BookInventoryWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type FloorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookInventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LibraryCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactNumber?: SortOrder
    timings?: SortOrder
    amenities?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type LibraryAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
  }

  export type LibraryMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactNumber?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type LibraryMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    contactNumber?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
  }

  export type LibrarySumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumLibraryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LibraryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryTypeFilter<$PrismaModel>
    _max?: NestedEnumLibraryTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LibraryScalarRelationFilter = {
    is?: LibraryWhereInput
    isNot?: LibraryWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    reviewerName?: SortOrder
    userType?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    reviewerName?: SortOrder
    userType?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    reviewerName?: SortOrder
    userType?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    rating?: SortOrder
  }

  export type PricingPlanListRelationFilter = {
    every?: PricingPlanWhereInput
    some?: PricingPlanWhereInput
    none?: PricingPlanWhereInput
  }

  export type PricingPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FloorCountOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    floorNumber?: SortOrder
    name?: SortOrder
    totalSeats?: SortOrder
  }

  export type FloorAvgOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    floorNumber?: SortOrder
    totalSeats?: SortOrder
  }

  export type FloorMaxOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    floorNumber?: SortOrder
    name?: SortOrder
    totalSeats?: SortOrder
  }

  export type FloorMinOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    floorNumber?: SortOrder
    name?: SortOrder
    totalSeats?: SortOrder
  }

  export type FloorSumOrderByAggregateInput = {
    id?: SortOrder
    libraryId?: SortOrder
    floorNumber?: SortOrder
    totalSeats?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FloorScalarRelationFilter = {
    is?: FloorWhereInput
    isNot?: FloorWhereInput
  }

  export type PricingPlanCountOrderByAggregateInput = {
    id?: SortOrder
    floorId?: SortOrder
    planType?: SortOrder
    priceAmount?: SortOrder
    seatsAvailable?: SortOrder
    features?: SortOrder
  }

  export type PricingPlanAvgOrderByAggregateInput = {
    id?: SortOrder
    floorId?: SortOrder
    priceAmount?: SortOrder
    seatsAvailable?: SortOrder
  }

  export type PricingPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    floorId?: SortOrder
    planType?: SortOrder
    priceAmount?: SortOrder
    seatsAvailable?: SortOrder
  }

  export type PricingPlanMinOrderByAggregateInput = {
    id?: SortOrder
    floorId?: SortOrder
    planType?: SortOrder
    priceAmount?: SortOrder
    seatsAvailable?: SortOrder
  }

  export type PricingPlanSumOrderByAggregateInput = {
    id?: SortOrder
    floorId?: SortOrder
    priceAmount?: SortOrder
    seatsAvailable?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    genre?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    genre?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    author?: SortOrder
    isbn?: SortOrder
    genre?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type BookInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    priceNew?: SortOrder
    priceUsed?: SortOrder
    stockCount?: SortOrder
    isAvailable?: SortOrder
  }

  export type BookInventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    priceNew?: SortOrder
    priceUsed?: SortOrder
    stockCount?: SortOrder
  }

  export type BookInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    priceNew?: SortOrder
    priceUsed?: SortOrder
    stockCount?: SortOrder
    isAvailable?: SortOrder
  }

  export type BookInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    priceNew?: SortOrder
    priceUsed?: SortOrder
    stockCount?: SortOrder
    isAvailable?: SortOrder
  }

  export type BookInventorySumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    libraryId?: SortOrder
    priceNew?: SortOrder
    priceUsed?: SortOrder
    stockCount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LibraryCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LibraryCreateWithoutOwnerInput, LibraryUncheckedCreateWithoutOwnerInput> | LibraryCreateWithoutOwnerInput[] | LibraryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutOwnerInput | LibraryCreateOrConnectWithoutOwnerInput[]
    createMany?: LibraryCreateManyOwnerInputEnvelope
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
  }

  export type LibraryUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LibraryCreateWithoutOwnerInput, LibraryUncheckedCreateWithoutOwnerInput> | LibraryCreateWithoutOwnerInput[] | LibraryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutOwnerInput | LibraryCreateOrConnectWithoutOwnerInput[]
    createMany?: LibraryCreateManyOwnerInputEnvelope
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LibraryUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LibraryCreateWithoutOwnerInput, LibraryUncheckedCreateWithoutOwnerInput> | LibraryCreateWithoutOwnerInput[] | LibraryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutOwnerInput | LibraryCreateOrConnectWithoutOwnerInput[]
    upsert?: LibraryUpsertWithWhereUniqueWithoutOwnerInput | LibraryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LibraryCreateManyOwnerInputEnvelope
    set?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    disconnect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    delete?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    update?: LibraryUpdateWithWhereUniqueWithoutOwnerInput | LibraryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LibraryUpdateManyWithWhereWithoutOwnerInput | LibraryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
  }

  export type LibraryUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LibraryCreateWithoutOwnerInput, LibraryUncheckedCreateWithoutOwnerInput> | LibraryCreateWithoutOwnerInput[] | LibraryUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LibraryCreateOrConnectWithoutOwnerInput | LibraryCreateOrConnectWithoutOwnerInput[]
    upsert?: LibraryUpsertWithWhereUniqueWithoutOwnerInput | LibraryUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LibraryCreateManyOwnerInputEnvelope
    set?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    disconnect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    delete?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    connect?: LibraryWhereUniqueInput | LibraryWhereUniqueInput[]
    update?: LibraryUpdateWithWhereUniqueWithoutOwnerInput | LibraryUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LibraryUpdateManyWithWhereWithoutOwnerInput | LibraryUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
  }

  export type LibraryCreateamenitiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutLibrariesInput = {
    create?: XOR<UserCreateWithoutLibrariesInput, UserUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibrariesInput
    connect?: UserWhereUniqueInput
  }

  export type FloorCreateNestedManyWithoutLibraryInput = {
    create?: XOR<FloorCreateWithoutLibraryInput, FloorUncheckedCreateWithoutLibraryInput> | FloorCreateWithoutLibraryInput[] | FloorUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutLibraryInput | FloorCreateOrConnectWithoutLibraryInput[]
    createMany?: FloorCreateManyLibraryInputEnvelope
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
  }

  export type BookInventoryCreateNestedManyWithoutLibraryInput = {
    create?: XOR<BookInventoryCreateWithoutLibraryInput, BookInventoryUncheckedCreateWithoutLibraryInput> | BookInventoryCreateWithoutLibraryInput[] | BookInventoryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: BookInventoryCreateOrConnectWithoutLibraryInput | BookInventoryCreateOrConnectWithoutLibraryInput[]
    createMany?: BookInventoryCreateManyLibraryInputEnvelope
    connect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutLibraryInput = {
    create?: XOR<ReviewCreateWithoutLibraryInput, ReviewUncheckedCreateWithoutLibraryInput> | ReviewCreateWithoutLibraryInput[] | ReviewUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutLibraryInput | ReviewCreateOrConnectWithoutLibraryInput[]
    createMany?: ReviewCreateManyLibraryInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FloorUncheckedCreateNestedManyWithoutLibraryInput = {
    create?: XOR<FloorCreateWithoutLibraryInput, FloorUncheckedCreateWithoutLibraryInput> | FloorCreateWithoutLibraryInput[] | FloorUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutLibraryInput | FloorCreateOrConnectWithoutLibraryInput[]
    createMany?: FloorCreateManyLibraryInputEnvelope
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
  }

  export type BookInventoryUncheckedCreateNestedManyWithoutLibraryInput = {
    create?: XOR<BookInventoryCreateWithoutLibraryInput, BookInventoryUncheckedCreateWithoutLibraryInput> | BookInventoryCreateWithoutLibraryInput[] | BookInventoryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: BookInventoryCreateOrConnectWithoutLibraryInput | BookInventoryCreateOrConnectWithoutLibraryInput[]
    createMany?: BookInventoryCreateManyLibraryInputEnvelope
    connect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutLibraryInput = {
    create?: XOR<ReviewCreateWithoutLibraryInput, ReviewUncheckedCreateWithoutLibraryInput> | ReviewCreateWithoutLibraryInput[] | ReviewUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutLibraryInput | ReviewCreateOrConnectWithoutLibraryInput[]
    createMany?: ReviewCreateManyLibraryInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumLibraryTypeFieldUpdateOperationsInput = {
    set?: $Enums.LibraryType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LibraryUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutLibrariesNestedInput = {
    create?: XOR<UserCreateWithoutLibrariesInput, UserUncheckedCreateWithoutLibrariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibrariesInput
    upsert?: UserUpsertWithoutLibrariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLibrariesInput, UserUpdateWithoutLibrariesInput>, UserUncheckedUpdateWithoutLibrariesInput>
  }

  export type FloorUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<FloorCreateWithoutLibraryInput, FloorUncheckedCreateWithoutLibraryInput> | FloorCreateWithoutLibraryInput[] | FloorUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutLibraryInput | FloorCreateOrConnectWithoutLibraryInput[]
    upsert?: FloorUpsertWithWhereUniqueWithoutLibraryInput | FloorUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: FloorCreateManyLibraryInputEnvelope
    set?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    disconnect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    delete?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    update?: FloorUpdateWithWhereUniqueWithoutLibraryInput | FloorUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: FloorUpdateManyWithWhereWithoutLibraryInput | FloorUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: FloorScalarWhereInput | FloorScalarWhereInput[]
  }

  export type BookInventoryUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<BookInventoryCreateWithoutLibraryInput, BookInventoryUncheckedCreateWithoutLibraryInput> | BookInventoryCreateWithoutLibraryInput[] | BookInventoryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: BookInventoryCreateOrConnectWithoutLibraryInput | BookInventoryCreateOrConnectWithoutLibraryInput[]
    upsert?: BookInventoryUpsertWithWhereUniqueWithoutLibraryInput | BookInventoryUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: BookInventoryCreateManyLibraryInputEnvelope
    set?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    disconnect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    delete?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    connect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    update?: BookInventoryUpdateWithWhereUniqueWithoutLibraryInput | BookInventoryUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: BookInventoryUpdateManyWithWhereWithoutLibraryInput | BookInventoryUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: BookInventoryScalarWhereInput | BookInventoryScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<ReviewCreateWithoutLibraryInput, ReviewUncheckedCreateWithoutLibraryInput> | ReviewCreateWithoutLibraryInput[] | ReviewUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutLibraryInput | ReviewCreateOrConnectWithoutLibraryInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutLibraryInput | ReviewUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: ReviewCreateManyLibraryInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutLibraryInput | ReviewUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutLibraryInput | ReviewUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloorUncheckedUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<FloorCreateWithoutLibraryInput, FloorUncheckedCreateWithoutLibraryInput> | FloorCreateWithoutLibraryInput[] | FloorUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: FloorCreateOrConnectWithoutLibraryInput | FloorCreateOrConnectWithoutLibraryInput[]
    upsert?: FloorUpsertWithWhereUniqueWithoutLibraryInput | FloorUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: FloorCreateManyLibraryInputEnvelope
    set?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    disconnect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    delete?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    connect?: FloorWhereUniqueInput | FloorWhereUniqueInput[]
    update?: FloorUpdateWithWhereUniqueWithoutLibraryInput | FloorUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: FloorUpdateManyWithWhereWithoutLibraryInput | FloorUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: FloorScalarWhereInput | FloorScalarWhereInput[]
  }

  export type BookInventoryUncheckedUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<BookInventoryCreateWithoutLibraryInput, BookInventoryUncheckedCreateWithoutLibraryInput> | BookInventoryCreateWithoutLibraryInput[] | BookInventoryUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: BookInventoryCreateOrConnectWithoutLibraryInput | BookInventoryCreateOrConnectWithoutLibraryInput[]
    upsert?: BookInventoryUpsertWithWhereUniqueWithoutLibraryInput | BookInventoryUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: BookInventoryCreateManyLibraryInputEnvelope
    set?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    disconnect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    delete?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    connect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    update?: BookInventoryUpdateWithWhereUniqueWithoutLibraryInput | BookInventoryUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: BookInventoryUpdateManyWithWhereWithoutLibraryInput | BookInventoryUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: BookInventoryScalarWhereInput | BookInventoryScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutLibraryNestedInput = {
    create?: XOR<ReviewCreateWithoutLibraryInput, ReviewUncheckedCreateWithoutLibraryInput> | ReviewCreateWithoutLibraryInput[] | ReviewUncheckedCreateWithoutLibraryInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutLibraryInput | ReviewCreateOrConnectWithoutLibraryInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutLibraryInput | ReviewUpsertWithWhereUniqueWithoutLibraryInput[]
    createMany?: ReviewCreateManyLibraryInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutLibraryInput | ReviewUpdateWithWhereUniqueWithoutLibraryInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutLibraryInput | ReviewUpdateManyWithWhereWithoutLibraryInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type LibraryCreateNestedOneWithoutReviewsInput = {
    create?: XOR<LibraryCreateWithoutReviewsInput, LibraryUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutReviewsInput
    connect?: LibraryWhereUniqueInput
  }

  export type LibraryUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<LibraryCreateWithoutReviewsInput, LibraryUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutReviewsInput
    upsert?: LibraryUpsertWithoutReviewsInput
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutReviewsInput, LibraryUpdateWithoutReviewsInput>, LibraryUncheckedUpdateWithoutReviewsInput>
  }

  export type LibraryCreateNestedOneWithoutFloorsInput = {
    create?: XOR<LibraryCreateWithoutFloorsInput, LibraryUncheckedCreateWithoutFloorsInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutFloorsInput
    connect?: LibraryWhereUniqueInput
  }

  export type PricingPlanCreateNestedManyWithoutFloorInput = {
    create?: XOR<PricingPlanCreateWithoutFloorInput, PricingPlanUncheckedCreateWithoutFloorInput> | PricingPlanCreateWithoutFloorInput[] | PricingPlanUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: PricingPlanCreateOrConnectWithoutFloorInput | PricingPlanCreateOrConnectWithoutFloorInput[]
    createMany?: PricingPlanCreateManyFloorInputEnvelope
    connect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
  }

  export type PricingPlanUncheckedCreateNestedManyWithoutFloorInput = {
    create?: XOR<PricingPlanCreateWithoutFloorInput, PricingPlanUncheckedCreateWithoutFloorInput> | PricingPlanCreateWithoutFloorInput[] | PricingPlanUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: PricingPlanCreateOrConnectWithoutFloorInput | PricingPlanCreateOrConnectWithoutFloorInput[]
    createMany?: PricingPlanCreateManyFloorInputEnvelope
    connect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
  }

  export type LibraryUpdateOneRequiredWithoutFloorsNestedInput = {
    create?: XOR<LibraryCreateWithoutFloorsInput, LibraryUncheckedCreateWithoutFloorsInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutFloorsInput
    upsert?: LibraryUpsertWithoutFloorsInput
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutFloorsInput, LibraryUpdateWithoutFloorsInput>, LibraryUncheckedUpdateWithoutFloorsInput>
  }

  export type PricingPlanUpdateManyWithoutFloorNestedInput = {
    create?: XOR<PricingPlanCreateWithoutFloorInput, PricingPlanUncheckedCreateWithoutFloorInput> | PricingPlanCreateWithoutFloorInput[] | PricingPlanUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: PricingPlanCreateOrConnectWithoutFloorInput | PricingPlanCreateOrConnectWithoutFloorInput[]
    upsert?: PricingPlanUpsertWithWhereUniqueWithoutFloorInput | PricingPlanUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: PricingPlanCreateManyFloorInputEnvelope
    set?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    disconnect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    delete?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    connect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    update?: PricingPlanUpdateWithWhereUniqueWithoutFloorInput | PricingPlanUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: PricingPlanUpdateManyWithWhereWithoutFloorInput | PricingPlanUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: PricingPlanScalarWhereInput | PricingPlanScalarWhereInput[]
  }

  export type PricingPlanUncheckedUpdateManyWithoutFloorNestedInput = {
    create?: XOR<PricingPlanCreateWithoutFloorInput, PricingPlanUncheckedCreateWithoutFloorInput> | PricingPlanCreateWithoutFloorInput[] | PricingPlanUncheckedCreateWithoutFloorInput[]
    connectOrCreate?: PricingPlanCreateOrConnectWithoutFloorInput | PricingPlanCreateOrConnectWithoutFloorInput[]
    upsert?: PricingPlanUpsertWithWhereUniqueWithoutFloorInput | PricingPlanUpsertWithWhereUniqueWithoutFloorInput[]
    createMany?: PricingPlanCreateManyFloorInputEnvelope
    set?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    disconnect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    delete?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    connect?: PricingPlanWhereUniqueInput | PricingPlanWhereUniqueInput[]
    update?: PricingPlanUpdateWithWhereUniqueWithoutFloorInput | PricingPlanUpdateWithWhereUniqueWithoutFloorInput[]
    updateMany?: PricingPlanUpdateManyWithWhereWithoutFloorInput | PricingPlanUpdateManyWithWhereWithoutFloorInput[]
    deleteMany?: PricingPlanScalarWhereInput | PricingPlanScalarWhereInput[]
  }

  export type PricingPlanCreatefeaturesInput = {
    set: string[]
  }

  export type FloorCreateNestedOneWithoutPricingPlansInput = {
    create?: XOR<FloorCreateWithoutPricingPlansInput, FloorUncheckedCreateWithoutPricingPlansInput>
    connectOrCreate?: FloorCreateOrConnectWithoutPricingPlansInput
    connect?: FloorWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PricingPlanUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloorUpdateOneRequiredWithoutPricingPlansNestedInput = {
    create?: XOR<FloorCreateWithoutPricingPlansInput, FloorUncheckedCreateWithoutPricingPlansInput>
    connectOrCreate?: FloorCreateOrConnectWithoutPricingPlansInput
    upsert?: FloorUpsertWithoutPricingPlansInput
    connect?: FloorWhereUniqueInput
    update?: XOR<XOR<FloorUpdateToOneWithWhereWithoutPricingPlansInput, FloorUpdateWithoutPricingPlansInput>, FloorUncheckedUpdateWithoutPricingPlansInput>
  }

  export type BookInventoryCreateNestedManyWithoutBookInput = {
    create?: XOR<BookInventoryCreateWithoutBookInput, BookInventoryUncheckedCreateWithoutBookInput> | BookInventoryCreateWithoutBookInput[] | BookInventoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookInventoryCreateOrConnectWithoutBookInput | BookInventoryCreateOrConnectWithoutBookInput[]
    createMany?: BookInventoryCreateManyBookInputEnvelope
    connect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
  }

  export type BookInventoryUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookInventoryCreateWithoutBookInput, BookInventoryUncheckedCreateWithoutBookInput> | BookInventoryCreateWithoutBookInput[] | BookInventoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookInventoryCreateOrConnectWithoutBookInput | BookInventoryCreateOrConnectWithoutBookInput[]
    createMany?: BookInventoryCreateManyBookInputEnvelope
    connect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
  }

  export type BookInventoryUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookInventoryCreateWithoutBookInput, BookInventoryUncheckedCreateWithoutBookInput> | BookInventoryCreateWithoutBookInput[] | BookInventoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookInventoryCreateOrConnectWithoutBookInput | BookInventoryCreateOrConnectWithoutBookInput[]
    upsert?: BookInventoryUpsertWithWhereUniqueWithoutBookInput | BookInventoryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookInventoryCreateManyBookInputEnvelope
    set?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    disconnect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    delete?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    connect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    update?: BookInventoryUpdateWithWhereUniqueWithoutBookInput | BookInventoryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookInventoryUpdateManyWithWhereWithoutBookInput | BookInventoryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookInventoryScalarWhereInput | BookInventoryScalarWhereInput[]
  }

  export type BookInventoryUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookInventoryCreateWithoutBookInput, BookInventoryUncheckedCreateWithoutBookInput> | BookInventoryCreateWithoutBookInput[] | BookInventoryUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookInventoryCreateOrConnectWithoutBookInput | BookInventoryCreateOrConnectWithoutBookInput[]
    upsert?: BookInventoryUpsertWithWhereUniqueWithoutBookInput | BookInventoryUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookInventoryCreateManyBookInputEnvelope
    set?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    disconnect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    delete?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    connect?: BookInventoryWhereUniqueInput | BookInventoryWhereUniqueInput[]
    update?: BookInventoryUpdateWithWhereUniqueWithoutBookInput | BookInventoryUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookInventoryUpdateManyWithWhereWithoutBookInput | BookInventoryUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookInventoryScalarWhereInput | BookInventoryScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutInventoryInput = {
    create?: XOR<BookCreateWithoutInventoryInput, BookUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: BookCreateOrConnectWithoutInventoryInput
    connect?: BookWhereUniqueInput
  }

  export type LibraryCreateNestedOneWithoutInventoryInput = {
    create?: XOR<LibraryCreateWithoutInventoryInput, LibraryUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutInventoryInput
    connect?: LibraryWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BookUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<BookCreateWithoutInventoryInput, BookUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: BookCreateOrConnectWithoutInventoryInput
    upsert?: BookUpsertWithoutInventoryInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutInventoryInput, BookUpdateWithoutInventoryInput>, BookUncheckedUpdateWithoutInventoryInput>
  }

  export type LibraryUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<LibraryCreateWithoutInventoryInput, LibraryUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: LibraryCreateOrConnectWithoutInventoryInput
    upsert?: LibraryUpsertWithoutInventoryInput
    connect?: LibraryWhereUniqueInput
    update?: XOR<XOR<LibraryUpdateToOneWithWhereWithoutInventoryInput, LibraryUpdateWithoutInventoryInput>, LibraryUncheckedUpdateWithoutInventoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLibraryTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeFilter<$PrismaModel> | $Enums.LibraryType
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedEnumLibraryTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LibraryType | EnumLibraryTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LibraryType[] | ListEnumLibraryTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLibraryTypeWithAggregatesFilter<$PrismaModel> | $Enums.LibraryType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLibraryTypeFilter<$PrismaModel>
    _max?: NestedEnumLibraryTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LibraryCreateWithoutOwnerInput = {
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
    floors?: FloorCreateNestedManyWithoutLibraryInput
    inventory?: BookInventoryCreateNestedManyWithoutLibraryInput
    reviews?: ReviewCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
    floors?: FloorUncheckedCreateNestedManyWithoutLibraryInput
    inventory?: BookInventoryUncheckedCreateNestedManyWithoutLibraryInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutOwnerInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutOwnerInput, LibraryUncheckedCreateWithoutOwnerInput>
  }

  export type LibraryCreateManyOwnerInputEnvelope = {
    data: LibraryCreateManyOwnerInput | LibraryCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type LibraryUpsertWithWhereUniqueWithoutOwnerInput = {
    where: LibraryWhereUniqueInput
    update: XOR<LibraryUpdateWithoutOwnerInput, LibraryUncheckedUpdateWithoutOwnerInput>
    create: XOR<LibraryCreateWithoutOwnerInput, LibraryUncheckedCreateWithoutOwnerInput>
  }

  export type LibraryUpdateWithWhereUniqueWithoutOwnerInput = {
    where: LibraryWhereUniqueInput
    data: XOR<LibraryUpdateWithoutOwnerInput, LibraryUncheckedUpdateWithoutOwnerInput>
  }

  export type LibraryUpdateManyWithWhereWithoutOwnerInput = {
    where: LibraryScalarWhereInput
    data: XOR<LibraryUpdateManyMutationInput, LibraryUncheckedUpdateManyWithoutOwnerInput>
  }

  export type LibraryScalarWhereInput = {
    AND?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
    OR?: LibraryScalarWhereInput[]
    NOT?: LibraryScalarWhereInput | LibraryScalarWhereInput[]
    id?: IntFilter<"Library"> | number
    ownerId?: StringFilter<"Library"> | string
    name?: StringFilter<"Library"> | string
    type?: EnumLibraryTypeFilter<"Library"> | $Enums.LibraryType
    address?: StringNullableFilter<"Library"> | string | null
    latitude?: FloatFilter<"Library"> | number
    longitude?: FloatFilter<"Library"> | number
    contactNumber?: StringNullableFilter<"Library"> | string | null
    timings?: JsonNullableFilter<"Library">
    amenities?: StringNullableListFilter<"Library">
    rating?: FloatFilter<"Library"> | number
    createdAt?: DateTimeFilter<"Library"> | Date | string
  }

  export type UserCreateWithoutLibrariesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    role?: string
  }

  export type UserUncheckedCreateWithoutLibrariesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    phone?: string | null
    role?: string
  }

  export type UserCreateOrConnectWithoutLibrariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLibrariesInput, UserUncheckedCreateWithoutLibrariesInput>
  }

  export type FloorCreateWithoutLibraryInput = {
    floorNumber: number
    name?: string | null
    totalSeats: number
    pricingPlans?: PricingPlanCreateNestedManyWithoutFloorInput
  }

  export type FloorUncheckedCreateWithoutLibraryInput = {
    id?: number
    floorNumber: number
    name?: string | null
    totalSeats: number
    pricingPlans?: PricingPlanUncheckedCreateNestedManyWithoutFloorInput
  }

  export type FloorCreateOrConnectWithoutLibraryInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutLibraryInput, FloorUncheckedCreateWithoutLibraryInput>
  }

  export type FloorCreateManyLibraryInputEnvelope = {
    data: FloorCreateManyLibraryInput | FloorCreateManyLibraryInput[]
    skipDuplicates?: boolean
  }

  export type BookInventoryCreateWithoutLibraryInput = {
    priceNew?: Decimal | DecimalJsLike | number | string | null
    priceUsed?: Decimal | DecimalJsLike | number | string | null
    stockCount?: number
    isAvailable?: boolean
    book: BookCreateNestedOneWithoutInventoryInput
  }

  export type BookInventoryUncheckedCreateWithoutLibraryInput = {
    id?: number
    bookId: number
    priceNew?: Decimal | DecimalJsLike | number | string | null
    priceUsed?: Decimal | DecimalJsLike | number | string | null
    stockCount?: number
    isAvailable?: boolean
  }

  export type BookInventoryCreateOrConnectWithoutLibraryInput = {
    where: BookInventoryWhereUniqueInput
    create: XOR<BookInventoryCreateWithoutLibraryInput, BookInventoryUncheckedCreateWithoutLibraryInput>
  }

  export type BookInventoryCreateManyLibraryInputEnvelope = {
    data: BookInventoryCreateManyLibraryInput | BookInventoryCreateManyLibraryInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutLibraryInput = {
    reviewerName: string
    userType?: string | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUncheckedCreateWithoutLibraryInput = {
    id?: number
    reviewerName: string
    userType?: string | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutLibraryInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutLibraryInput, ReviewUncheckedCreateWithoutLibraryInput>
  }

  export type ReviewCreateManyLibraryInputEnvelope = {
    data: ReviewCreateManyLibraryInput | ReviewCreateManyLibraryInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLibrariesInput = {
    update: XOR<UserUpdateWithoutLibrariesInput, UserUncheckedUpdateWithoutLibrariesInput>
    create: XOR<UserCreateWithoutLibrariesInput, UserUncheckedCreateWithoutLibrariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLibrariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLibrariesInput, UserUncheckedUpdateWithoutLibrariesInput>
  }

  export type UserUpdateWithoutLibrariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutLibrariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type FloorUpsertWithWhereUniqueWithoutLibraryInput = {
    where: FloorWhereUniqueInput
    update: XOR<FloorUpdateWithoutLibraryInput, FloorUncheckedUpdateWithoutLibraryInput>
    create: XOR<FloorCreateWithoutLibraryInput, FloorUncheckedCreateWithoutLibraryInput>
  }

  export type FloorUpdateWithWhereUniqueWithoutLibraryInput = {
    where: FloorWhereUniqueInput
    data: XOR<FloorUpdateWithoutLibraryInput, FloorUncheckedUpdateWithoutLibraryInput>
  }

  export type FloorUpdateManyWithWhereWithoutLibraryInput = {
    where: FloorScalarWhereInput
    data: XOR<FloorUpdateManyMutationInput, FloorUncheckedUpdateManyWithoutLibraryInput>
  }

  export type FloorScalarWhereInput = {
    AND?: FloorScalarWhereInput | FloorScalarWhereInput[]
    OR?: FloorScalarWhereInput[]
    NOT?: FloorScalarWhereInput | FloorScalarWhereInput[]
    id?: IntFilter<"Floor"> | number
    libraryId?: IntFilter<"Floor"> | number
    floorNumber?: IntFilter<"Floor"> | number
    name?: StringNullableFilter<"Floor"> | string | null
    totalSeats?: IntFilter<"Floor"> | number
  }

  export type BookInventoryUpsertWithWhereUniqueWithoutLibraryInput = {
    where: BookInventoryWhereUniqueInput
    update: XOR<BookInventoryUpdateWithoutLibraryInput, BookInventoryUncheckedUpdateWithoutLibraryInput>
    create: XOR<BookInventoryCreateWithoutLibraryInput, BookInventoryUncheckedCreateWithoutLibraryInput>
  }

  export type BookInventoryUpdateWithWhereUniqueWithoutLibraryInput = {
    where: BookInventoryWhereUniqueInput
    data: XOR<BookInventoryUpdateWithoutLibraryInput, BookInventoryUncheckedUpdateWithoutLibraryInput>
  }

  export type BookInventoryUpdateManyWithWhereWithoutLibraryInput = {
    where: BookInventoryScalarWhereInput
    data: XOR<BookInventoryUpdateManyMutationInput, BookInventoryUncheckedUpdateManyWithoutLibraryInput>
  }

  export type BookInventoryScalarWhereInput = {
    AND?: BookInventoryScalarWhereInput | BookInventoryScalarWhereInput[]
    OR?: BookInventoryScalarWhereInput[]
    NOT?: BookInventoryScalarWhereInput | BookInventoryScalarWhereInput[]
    id?: IntFilter<"BookInventory"> | number
    bookId?: IntFilter<"BookInventory"> | number
    libraryId?: IntFilter<"BookInventory"> | number
    priceNew?: DecimalNullableFilter<"BookInventory"> | Decimal | DecimalJsLike | number | string | null
    priceUsed?: DecimalNullableFilter<"BookInventory"> | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFilter<"BookInventory"> | number
    isAvailable?: BoolFilter<"BookInventory"> | boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutLibraryInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutLibraryInput, ReviewUncheckedUpdateWithoutLibraryInput>
    create: XOR<ReviewCreateWithoutLibraryInput, ReviewUncheckedCreateWithoutLibraryInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutLibraryInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutLibraryInput, ReviewUncheckedUpdateWithoutLibraryInput>
  }

  export type ReviewUpdateManyWithWhereWithoutLibraryInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutLibraryInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    libraryId?: IntFilter<"Review"> | number
    reviewerName?: StringFilter<"Review"> | string
    userType?: StringNullableFilter<"Review"> | string | null
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type LibraryCreateWithoutReviewsInput = {
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutLibrariesInput
    floors?: FloorCreateNestedManyWithoutLibraryInput
    inventory?: BookInventoryCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutReviewsInput = {
    id?: number
    ownerId: string
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
    floors?: FloorUncheckedCreateNestedManyWithoutLibraryInput
    inventory?: BookInventoryUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutReviewsInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutReviewsInput, LibraryUncheckedCreateWithoutReviewsInput>
  }

  export type LibraryUpsertWithoutReviewsInput = {
    update: XOR<LibraryUpdateWithoutReviewsInput, LibraryUncheckedUpdateWithoutReviewsInput>
    create: XOR<LibraryCreateWithoutReviewsInput, LibraryUncheckedCreateWithoutReviewsInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutReviewsInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutReviewsInput, LibraryUncheckedUpdateWithoutReviewsInput>
  }

  export type LibraryUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLibrariesNestedInput
    floors?: FloorUpdateManyWithoutLibraryNestedInput
    inventory?: BookInventoryUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floors?: FloorUncheckedUpdateManyWithoutLibraryNestedInput
    inventory?: BookInventoryUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryCreateWithoutFloorsInput = {
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutLibrariesInput
    inventory?: BookInventoryCreateNestedManyWithoutLibraryInput
    reviews?: ReviewCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutFloorsInput = {
    id?: number
    ownerId: string
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
    inventory?: BookInventoryUncheckedCreateNestedManyWithoutLibraryInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutFloorsInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutFloorsInput, LibraryUncheckedCreateWithoutFloorsInput>
  }

  export type PricingPlanCreateWithoutFloorInput = {
    planType: string
    priceAmount: Decimal | DecimalJsLike | number | string
    seatsAvailable: number
    features?: PricingPlanCreatefeaturesInput | string[]
  }

  export type PricingPlanUncheckedCreateWithoutFloorInput = {
    id?: number
    planType: string
    priceAmount: Decimal | DecimalJsLike | number | string
    seatsAvailable: number
    features?: PricingPlanCreatefeaturesInput | string[]
  }

  export type PricingPlanCreateOrConnectWithoutFloorInput = {
    where: PricingPlanWhereUniqueInput
    create: XOR<PricingPlanCreateWithoutFloorInput, PricingPlanUncheckedCreateWithoutFloorInput>
  }

  export type PricingPlanCreateManyFloorInputEnvelope = {
    data: PricingPlanCreateManyFloorInput | PricingPlanCreateManyFloorInput[]
    skipDuplicates?: boolean
  }

  export type LibraryUpsertWithoutFloorsInput = {
    update: XOR<LibraryUpdateWithoutFloorsInput, LibraryUncheckedUpdateWithoutFloorsInput>
    create: XOR<LibraryCreateWithoutFloorsInput, LibraryUncheckedCreateWithoutFloorsInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutFloorsInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutFloorsInput, LibraryUncheckedUpdateWithoutFloorsInput>
  }

  export type LibraryUpdateWithoutFloorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLibrariesNestedInput
    inventory?: BookInventoryUpdateManyWithoutLibraryNestedInput
    reviews?: ReviewUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutFloorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: BookInventoryUncheckedUpdateManyWithoutLibraryNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type PricingPlanUpsertWithWhereUniqueWithoutFloorInput = {
    where: PricingPlanWhereUniqueInput
    update: XOR<PricingPlanUpdateWithoutFloorInput, PricingPlanUncheckedUpdateWithoutFloorInput>
    create: XOR<PricingPlanCreateWithoutFloorInput, PricingPlanUncheckedCreateWithoutFloorInput>
  }

  export type PricingPlanUpdateWithWhereUniqueWithoutFloorInput = {
    where: PricingPlanWhereUniqueInput
    data: XOR<PricingPlanUpdateWithoutFloorInput, PricingPlanUncheckedUpdateWithoutFloorInput>
  }

  export type PricingPlanUpdateManyWithWhereWithoutFloorInput = {
    where: PricingPlanScalarWhereInput
    data: XOR<PricingPlanUpdateManyMutationInput, PricingPlanUncheckedUpdateManyWithoutFloorInput>
  }

  export type PricingPlanScalarWhereInput = {
    AND?: PricingPlanScalarWhereInput | PricingPlanScalarWhereInput[]
    OR?: PricingPlanScalarWhereInput[]
    NOT?: PricingPlanScalarWhereInput | PricingPlanScalarWhereInput[]
    id?: IntFilter<"PricingPlan"> | number
    floorId?: IntFilter<"PricingPlan"> | number
    planType?: StringFilter<"PricingPlan"> | string
    priceAmount?: DecimalFilter<"PricingPlan"> | Decimal | DecimalJsLike | number | string
    seatsAvailable?: IntFilter<"PricingPlan"> | number
    features?: StringNullableListFilter<"PricingPlan">
  }

  export type FloorCreateWithoutPricingPlansInput = {
    floorNumber: number
    name?: string | null
    totalSeats: number
    library: LibraryCreateNestedOneWithoutFloorsInput
  }

  export type FloorUncheckedCreateWithoutPricingPlansInput = {
    id?: number
    libraryId: number
    floorNumber: number
    name?: string | null
    totalSeats: number
  }

  export type FloorCreateOrConnectWithoutPricingPlansInput = {
    where: FloorWhereUniqueInput
    create: XOR<FloorCreateWithoutPricingPlansInput, FloorUncheckedCreateWithoutPricingPlansInput>
  }

  export type FloorUpsertWithoutPricingPlansInput = {
    update: XOR<FloorUpdateWithoutPricingPlansInput, FloorUncheckedUpdateWithoutPricingPlansInput>
    create: XOR<FloorCreateWithoutPricingPlansInput, FloorUncheckedCreateWithoutPricingPlansInput>
    where?: FloorWhereInput
  }

  export type FloorUpdateToOneWithWhereWithoutPricingPlansInput = {
    where?: FloorWhereInput
    data: XOR<FloorUpdateWithoutPricingPlansInput, FloorUncheckedUpdateWithoutPricingPlansInput>
  }

  export type FloorUpdateWithoutPricingPlansInput = {
    floorNumber?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    totalSeats?: IntFieldUpdateOperationsInput | number
    library?: LibraryUpdateOneRequiredWithoutFloorsNestedInput
  }

  export type FloorUncheckedUpdateWithoutPricingPlansInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type BookInventoryCreateWithoutBookInput = {
    priceNew?: Decimal | DecimalJsLike | number | string | null
    priceUsed?: Decimal | DecimalJsLike | number | string | null
    stockCount?: number
    isAvailable?: boolean
    library: LibraryCreateNestedOneWithoutInventoryInput
  }

  export type BookInventoryUncheckedCreateWithoutBookInput = {
    id?: number
    libraryId: number
    priceNew?: Decimal | DecimalJsLike | number | string | null
    priceUsed?: Decimal | DecimalJsLike | number | string | null
    stockCount?: number
    isAvailable?: boolean
  }

  export type BookInventoryCreateOrConnectWithoutBookInput = {
    where: BookInventoryWhereUniqueInput
    create: XOR<BookInventoryCreateWithoutBookInput, BookInventoryUncheckedCreateWithoutBookInput>
  }

  export type BookInventoryCreateManyBookInputEnvelope = {
    data: BookInventoryCreateManyBookInput | BookInventoryCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type BookInventoryUpsertWithWhereUniqueWithoutBookInput = {
    where: BookInventoryWhereUniqueInput
    update: XOR<BookInventoryUpdateWithoutBookInput, BookInventoryUncheckedUpdateWithoutBookInput>
    create: XOR<BookInventoryCreateWithoutBookInput, BookInventoryUncheckedCreateWithoutBookInput>
  }

  export type BookInventoryUpdateWithWhereUniqueWithoutBookInput = {
    where: BookInventoryWhereUniqueInput
    data: XOR<BookInventoryUpdateWithoutBookInput, BookInventoryUncheckedUpdateWithoutBookInput>
  }

  export type BookInventoryUpdateManyWithWhereWithoutBookInput = {
    where: BookInventoryScalarWhereInput
    data: XOR<BookInventoryUpdateManyMutationInput, BookInventoryUncheckedUpdateManyWithoutBookInput>
  }

  export type BookCreateWithoutInventoryInput = {
    title: string
    author?: string | null
    isbn?: string | null
    genre?: string | null
  }

  export type BookUncheckedCreateWithoutInventoryInput = {
    id?: number
    title: string
    author?: string | null
    isbn?: string | null
    genre?: string | null
  }

  export type BookCreateOrConnectWithoutInventoryInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutInventoryInput, BookUncheckedCreateWithoutInventoryInput>
  }

  export type LibraryCreateWithoutInventoryInput = {
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutLibrariesInput
    floors?: FloorCreateNestedManyWithoutLibraryInput
    reviews?: ReviewCreateNestedManyWithoutLibraryInput
  }

  export type LibraryUncheckedCreateWithoutInventoryInput = {
    id?: number
    ownerId: string
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
    floors?: FloorUncheckedCreateNestedManyWithoutLibraryInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutLibraryInput
  }

  export type LibraryCreateOrConnectWithoutInventoryInput = {
    where: LibraryWhereUniqueInput
    create: XOR<LibraryCreateWithoutInventoryInput, LibraryUncheckedCreateWithoutInventoryInput>
  }

  export type BookUpsertWithoutInventoryInput = {
    update: XOR<BookUpdateWithoutInventoryInput, BookUncheckedUpdateWithoutInventoryInput>
    create: XOR<BookCreateWithoutInventoryInput, BookUncheckedCreateWithoutInventoryInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutInventoryInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutInventoryInput, BookUncheckedUpdateWithoutInventoryInput>
  }

  export type BookUpdateWithoutInventoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    isbn?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LibraryUpsertWithoutInventoryInput = {
    update: XOR<LibraryUpdateWithoutInventoryInput, LibraryUncheckedUpdateWithoutInventoryInput>
    create: XOR<LibraryCreateWithoutInventoryInput, LibraryUncheckedCreateWithoutInventoryInput>
    where?: LibraryWhereInput
  }

  export type LibraryUpdateToOneWithWhereWithoutInventoryInput = {
    where?: LibraryWhereInput
    data: XOR<LibraryUpdateWithoutInventoryInput, LibraryUncheckedUpdateWithoutInventoryInput>
  }

  export type LibraryUpdateWithoutInventoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutLibrariesNestedInput
    floors?: FloorUpdateManyWithoutLibraryNestedInput
    reviews?: ReviewUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floors?: FloorUncheckedUpdateManyWithoutLibraryNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryCreateManyOwnerInput = {
    id?: number
    name: string
    type?: $Enums.LibraryType
    address?: string | null
    latitude: number
    longitude: number
    contactNumber?: string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryCreateamenitiesInput | string[]
    rating?: number
    createdAt?: Date | string
  }

  export type LibraryUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floors?: FloorUpdateManyWithoutLibraryNestedInput
    inventory?: BookInventoryUpdateManyWithoutLibraryNestedInput
    reviews?: ReviewUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    floors?: FloorUncheckedUpdateManyWithoutLibraryNestedInput
    inventory?: BookInventoryUncheckedUpdateManyWithoutLibraryNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutLibraryNestedInput
  }

  export type LibraryUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumLibraryTypeFieldUpdateOperationsInput | $Enums.LibraryType
    address?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    timings?: NullableJsonNullValueInput | InputJsonValue
    amenities?: LibraryUpdateamenitiesInput | string[]
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FloorCreateManyLibraryInput = {
    id?: number
    floorNumber: number
    name?: string | null
    totalSeats: number
  }

  export type BookInventoryCreateManyLibraryInput = {
    id?: number
    bookId: number
    priceNew?: Decimal | DecimalJsLike | number | string | null
    priceUsed?: Decimal | DecimalJsLike | number | string | null
    stockCount?: number
    isAvailable?: boolean
  }

  export type ReviewCreateManyLibraryInput = {
    id?: number
    reviewerName: string
    userType?: string | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type FloorUpdateWithoutLibraryInput = {
    floorNumber?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    totalSeats?: IntFieldUpdateOperationsInput | number
    pricingPlans?: PricingPlanUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    totalSeats?: IntFieldUpdateOperationsInput | number
    pricingPlans?: PricingPlanUncheckedUpdateManyWithoutFloorNestedInput
  }

  export type FloorUncheckedUpdateManyWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    floorNumber?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    totalSeats?: IntFieldUpdateOperationsInput | number
  }

  export type BookInventoryUpdateWithoutLibraryInput = {
    priceNew?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    book?: BookUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type BookInventoryUncheckedUpdateWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    priceNew?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookInventoryUncheckedUpdateManyWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    priceNew?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewUpdateWithoutLibraryInput = {
    reviewerName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    reviewerName?: StringFieldUpdateOperationsInput | string
    userType?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingPlanCreateManyFloorInput = {
    id?: number
    planType: string
    priceAmount: Decimal | DecimalJsLike | number | string
    seatsAvailable: number
    features?: PricingPlanCreatefeaturesInput | string[]
  }

  export type PricingPlanUpdateWithoutFloorInput = {
    planType?: StringFieldUpdateOperationsInput | string
    priceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    seatsAvailable?: IntFieldUpdateOperationsInput | number
    features?: PricingPlanUpdatefeaturesInput | string[]
  }

  export type PricingPlanUncheckedUpdateWithoutFloorInput = {
    id?: IntFieldUpdateOperationsInput | number
    planType?: StringFieldUpdateOperationsInput | string
    priceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    seatsAvailable?: IntFieldUpdateOperationsInput | number
    features?: PricingPlanUpdatefeaturesInput | string[]
  }

  export type PricingPlanUncheckedUpdateManyWithoutFloorInput = {
    id?: IntFieldUpdateOperationsInput | number
    planType?: StringFieldUpdateOperationsInput | string
    priceAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    seatsAvailable?: IntFieldUpdateOperationsInput | number
    features?: PricingPlanUpdatefeaturesInput | string[]
  }

  export type BookInventoryCreateManyBookInput = {
    id?: number
    libraryId: number
    priceNew?: Decimal | DecimalJsLike | number | string | null
    priceUsed?: Decimal | DecimalJsLike | number | string | null
    stockCount?: number
    isAvailable?: boolean
  }

  export type BookInventoryUpdateWithoutBookInput = {
    priceNew?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    library?: LibraryUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type BookInventoryUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    priceNew?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookInventoryUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    libraryId?: IntFieldUpdateOperationsInput | number
    priceNew?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    priceUsed?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stockCount?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
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