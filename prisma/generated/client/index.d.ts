
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Animes
 * 
 */
export type Animes = $Result.DefaultSelection<Prisma.$AnimesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Countries
 * 
 */
export type Countries = $Result.DefaultSelection<Prisma.$CountriesPayload>
/**
 * Model Episodes
 * 
 */
export type Episodes = $Result.DefaultSelection<Prisma.$EpisodesPayload>
/**
 * Model CategoriesOnAnimes
 * 
 */
export type CategoriesOnAnimes = $Result.DefaultSelection<Prisma.$CategoriesOnAnimesPayload>
/**
 * Model CountriesOnAnimes
 * 
 */
export type CountriesOnAnimes = $Result.DefaultSelection<Prisma.$CountriesOnAnimesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Animes
 * const animes = await prisma.animes.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Animes
   * const animes = await prisma.animes.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.animes`: Exposes CRUD operations for the **Animes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animes
    * const animes = await prisma.animes.findMany()
    * ```
    */
  get animes(): Prisma.AnimesDelegate<ExtArgs>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs>;

  /**
   * `prisma.countries`: Exposes CRUD operations for the **Countries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.countries.findMany()
    * ```
    */
  get countries(): Prisma.CountriesDelegate<ExtArgs>;

  /**
   * `prisma.episodes`: Exposes CRUD operations for the **Episodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episodes.findMany()
    * ```
    */
  get episodes(): Prisma.EpisodesDelegate<ExtArgs>;

  /**
   * `prisma.categoriesOnAnimes`: Exposes CRUD operations for the **CategoriesOnAnimes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoriesOnAnimes
    * const categoriesOnAnimes = await prisma.categoriesOnAnimes.findMany()
    * ```
    */
  get categoriesOnAnimes(): Prisma.CategoriesOnAnimesDelegate<ExtArgs>;

  /**
   * `prisma.countriesOnAnimes`: Exposes CRUD operations for the **CountriesOnAnimes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CountriesOnAnimes
    * const countriesOnAnimes = await prisma.countriesOnAnimes.findMany()
    * ```
    */
  get countriesOnAnimes(): Prisma.CountriesOnAnimesDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Animes: 'Animes',
    Categories: 'Categories',
    Countries: 'Countries',
    Episodes: 'Episodes',
    CategoriesOnAnimes: 'CategoriesOnAnimes',
    CountriesOnAnimes: 'CountriesOnAnimes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'animes' | 'categories' | 'countries' | 'episodes' | 'categoriesOnAnimes' | 'countriesOnAnimes'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Animes: {
        payload: Prisma.$AnimesPayload<ExtArgs>
        fields: Prisma.AnimesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          findFirst: {
            args: Prisma.AnimesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          findMany: {
            args: Prisma.AnimesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>[]
          }
          create: {
            args: Prisma.AnimesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          createMany: {
            args: Prisma.AnimesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AnimesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          update: {
            args: Prisma.AnimesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          deleteMany: {
            args: Prisma.AnimesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnimesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnimesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnimesPayload>
          }
          aggregate: {
            args: Prisma.AnimesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnimes>
          }
          groupBy: {
            args: Prisma.AnimesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnimesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimesCountArgs<ExtArgs>,
            result: $Utils.Optional<AnimesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Countries: {
        payload: Prisma.$CountriesPayload<ExtArgs>
        fields: Prisma.CountriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          findFirst: {
            args: Prisma.CountriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          findMany: {
            args: Prisma.CountriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>[]
          }
          create: {
            args: Prisma.CountriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          createMany: {
            args: Prisma.CountriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CountriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          update: {
            args: Prisma.CountriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          deleteMany: {
            args: Prisma.CountriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CountriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CountriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesPayload>
          }
          aggregate: {
            args: Prisma.CountriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCountries>
          }
          groupBy: {
            args: Prisma.CountriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CountriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountriesCountArgs<ExtArgs>,
            result: $Utils.Optional<CountriesCountAggregateOutputType> | number
          }
        }
      }
      Episodes: {
        payload: Prisma.$EpisodesPayload<ExtArgs>
        fields: Prisma.EpisodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          findFirst: {
            args: Prisma.EpisodesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          findMany: {
            args: Prisma.EpisodesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>[]
          }
          create: {
            args: Prisma.EpisodesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          createMany: {
            args: Prisma.EpisodesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EpisodesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          update: {
            args: Prisma.EpisodesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          deleteMany: {
            args: Prisma.EpisodesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EpisodesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EpisodesPayload>
          }
          aggregate: {
            args: Prisma.EpisodesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEpisodes>
          }
          groupBy: {
            args: Prisma.EpisodesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EpisodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodesCountArgs<ExtArgs>,
            result: $Utils.Optional<EpisodesCountAggregateOutputType> | number
          }
        }
      }
      CategoriesOnAnimes: {
        payload: Prisma.$CategoriesOnAnimesPayload<ExtArgs>
        fields: Prisma.CategoriesOnAnimesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesOnAnimesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnAnimesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesOnAnimesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnAnimesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesOnAnimesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnAnimesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesOnAnimesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnAnimesPayload>
          }
          findMany: {
            args: Prisma.CategoriesOnAnimesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnAnimesPayload>[]
          }
          create: {
            args: Prisma.CategoriesOnAnimesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnAnimesPayload>
          }
          createMany: {
            args: Prisma.CategoriesOnAnimesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoriesOnAnimesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnAnimesPayload>
          }
          update: {
            args: Prisma.CategoriesOnAnimesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnAnimesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesOnAnimesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesOnAnimesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoriesOnAnimesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoriesOnAnimesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesOnAnimesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategoriesOnAnimes>
          }
          groupBy: {
            args: Prisma.CategoriesOnAnimesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesOnAnimesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesOnAnimesCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoriesOnAnimesCountAggregateOutputType> | number
          }
        }
      }
      CountriesOnAnimes: {
        payload: Prisma.$CountriesOnAnimesPayload<ExtArgs>
        fields: Prisma.CountriesOnAnimesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountriesOnAnimesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesOnAnimesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountriesOnAnimesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesOnAnimesPayload>
          }
          findFirst: {
            args: Prisma.CountriesOnAnimesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesOnAnimesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountriesOnAnimesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesOnAnimesPayload>
          }
          findMany: {
            args: Prisma.CountriesOnAnimesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesOnAnimesPayload>[]
          }
          create: {
            args: Prisma.CountriesOnAnimesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesOnAnimesPayload>
          }
          createMany: {
            args: Prisma.CountriesOnAnimesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CountriesOnAnimesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesOnAnimesPayload>
          }
          update: {
            args: Prisma.CountriesOnAnimesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesOnAnimesPayload>
          }
          deleteMany: {
            args: Prisma.CountriesOnAnimesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CountriesOnAnimesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CountriesOnAnimesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CountriesOnAnimesPayload>
          }
          aggregate: {
            args: Prisma.CountriesOnAnimesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCountriesOnAnimes>
          }
          groupBy: {
            args: Prisma.CountriesOnAnimesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CountriesOnAnimesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountriesOnAnimesCountArgs<ExtArgs>,
            result: $Utils.Optional<CountriesOnAnimesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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
   * Count Type AnimesCountOutputType
   */

  export type AnimesCountOutputType = {
    categories: number
    countries: number
    episodes: number
  }

  export type AnimesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | AnimesCountOutputTypeCountCategoriesArgs
    countries?: boolean | AnimesCountOutputTypeCountCountriesArgs
    episodes?: boolean | AnimesCountOutputTypeCountEpisodesArgs
  }

  // Custom InputTypes

  /**
   * AnimesCountOutputType without action
   */
  export type AnimesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimesCountOutputType
     */
    select?: AnimesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AnimesCountOutputType without action
   */
  export type AnimesCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesOnAnimesWhereInput
  }


  /**
   * AnimesCountOutputType without action
   */
  export type AnimesCountOutputTypeCountCountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountriesOnAnimesWhereInput
  }


  /**
   * AnimesCountOutputType without action
   */
  export type AnimesCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodesWhereInput
  }



  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    animes: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | CategoriesCountOutputTypeCountAnimesArgs
  }

  // Custom InputTypes

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountAnimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesOnAnimesWhereInput
  }



  /**
   * Count Type CountriesCountOutputType
   */

  export type CountriesCountOutputType = {
    animes: number
  }

  export type CountriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | CountriesCountOutputTypeCountAnimesArgs
  }

  // Custom InputTypes

  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesCountOutputType
     */
    select?: CountriesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CountriesCountOutputType without action
   */
  export type CountriesCountOutputTypeCountAnimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountriesOnAnimesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Animes
   */

  export type AggregateAnimes = {
    _count: AnimesCountAggregateOutputType | null
    _avg: AnimesAvgAggregateOutputType | null
    _sum: AnimesSumAggregateOutputType | null
    _min: AnimesMinAggregateOutputType | null
    _max: AnimesMaxAggregateOutputType | null
  }

  export type AnimesAvgAggregateOutputType = {
    id: number | null
  }

  export type AnimesSumAggregateOutputType = {
    id: number | null
  }

  export type AnimesMinAggregateOutputType = {
    id: number | null
    title: string | null
    other_title: string | null
    slug: string | null
    time: string | null
    quality: string | null
    language: string | null
    director: string | null
    actors: string | null
    year: string | null
    description: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnimesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    other_title: string | null
    slug: string | null
    time: string | null
    quality: string | null
    language: string | null
    director: string | null
    actors: string | null
    year: string | null
    description: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AnimesCountAggregateOutputType = {
    id: number
    title: number
    other_title: number
    slug: number
    time: number
    quality: number
    language: number
    director: number
    actors: number
    year: number
    description: number
    image_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AnimesAvgAggregateInputType = {
    id?: true
  }

  export type AnimesSumAggregateInputType = {
    id?: true
  }

  export type AnimesMinAggregateInputType = {
    id?: true
    title?: true
    other_title?: true
    slug?: true
    time?: true
    quality?: true
    language?: true
    director?: true
    actors?: true
    year?: true
    description?: true
    image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type AnimesMaxAggregateInputType = {
    id?: true
    title?: true
    other_title?: true
    slug?: true
    time?: true
    quality?: true
    language?: true
    director?: true
    actors?: true
    year?: true
    description?: true
    image_url?: true
    created_at?: true
    updated_at?: true
  }

  export type AnimesCountAggregateInputType = {
    id?: true
    title?: true
    other_title?: true
    slug?: true
    time?: true
    quality?: true
    language?: true
    director?: true
    actors?: true
    year?: true
    description?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AnimesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animes to aggregate.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationAndSearchRelevanceInput | AnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animes
    **/
    _count?: true | AnimesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimesMaxAggregateInputType
  }

  export type GetAnimesAggregateType<T extends AnimesAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimes[P]>
      : GetScalarType<T[P], AggregateAnimes[P]>
  }




  export type AnimesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimesWhereInput
    orderBy?: AnimesOrderByWithAggregationInput | AnimesOrderByWithAggregationInput[]
    by: AnimesScalarFieldEnum[] | AnimesScalarFieldEnum
    having?: AnimesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimesCountAggregateInputType | true
    _avg?: AnimesAvgAggregateInputType
    _sum?: AnimesSumAggregateInputType
    _min?: AnimesMinAggregateInputType
    _max?: AnimesMaxAggregateInputType
  }

  export type AnimesGroupByOutputType = {
    id: number
    title: string
    other_title: string
    slug: string
    time: string | null
    quality: string | null
    language: string | null
    director: string | null
    actors: string | null
    year: string | null
    description: string | null
    image_url: string
    created_at: Date
    updated_at: Date
    _count: AnimesCountAggregateOutputType | null
    _avg: AnimesAvgAggregateOutputType | null
    _sum: AnimesSumAggregateOutputType | null
    _min: AnimesMinAggregateOutputType | null
    _max: AnimesMaxAggregateOutputType | null
  }

  type GetAnimesGroupByPayload<T extends AnimesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimesGroupByOutputType[P]>
            : GetScalarType<T[P], AnimesGroupByOutputType[P]>
        }
      >
    >


  export type AnimesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    other_title?: boolean
    slug?: boolean
    time?: boolean
    quality?: boolean
    language?: boolean
    director?: boolean
    actors?: boolean
    year?: boolean
    description?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    categories?: boolean | Animes$categoriesArgs<ExtArgs>
    countries?: boolean | Animes$countriesArgs<ExtArgs>
    episodes?: boolean | Animes$episodesArgs<ExtArgs>
    _count?: boolean | AnimesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animes"]>

  export type AnimesSelectScalar = {
    id?: boolean
    title?: boolean
    other_title?: boolean
    slug?: boolean
    time?: boolean
    quality?: boolean
    language?: boolean
    director?: boolean
    actors?: boolean
    year?: boolean
    description?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AnimesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Animes$categoriesArgs<ExtArgs>
    countries?: boolean | Animes$countriesArgs<ExtArgs>
    episodes?: boolean | Animes$episodesArgs<ExtArgs>
    _count?: boolean | AnimesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AnimesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animes"
    objects: {
      categories: Prisma.$CategoriesOnAnimesPayload<ExtArgs>[]
      countries: Prisma.$CountriesOnAnimesPayload<ExtArgs>[]
      episodes: Prisma.$EpisodesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      other_title: string
      slug: string
      time: string | null
      quality: string | null
      language: string | null
      director: string | null
      actors: string | null
      year: string | null
      description: string | null
      image_url: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["animes"]>
    composites: {}
  }


  type AnimesGetPayload<S extends boolean | null | undefined | AnimesDefaultArgs> = $Result.GetResult<Prisma.$AnimesPayload, S>

  type AnimesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnimesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AnimesCountAggregateInputType | true
    }

  export interface AnimesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animes'], meta: { name: 'Animes' } }
    /**
     * Find zero or one Animes that matches the filter.
     * @param {AnimesFindUniqueArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnimesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesFindUniqueArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Animes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnimesFindUniqueOrThrowArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnimesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Animes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindFirstArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnimesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesFindFirstArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Animes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindFirstOrThrowArgs} args - Arguments to find a Animes
     * @example
     * // Get one Animes
     * const animes = await prisma.animes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnimesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Animes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animes
     * const animes = await prisma.animes.findMany()
     * 
     * // Get first 10 Animes
     * const animes = await prisma.animes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animesWithIdOnly = await prisma.animes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnimesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Animes.
     * @param {AnimesCreateArgs} args - Arguments to create a Animes.
     * @example
     * // Create one Animes
     * const Animes = await prisma.animes.create({
     *   data: {
     *     // ... data to create a Animes
     *   }
     * })
     * 
    **/
    create<T extends AnimesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesCreateArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Animes.
     *     @param {AnimesCreateManyArgs} args - Arguments to create many Animes.
     *     @example
     *     // Create many Animes
     *     const animes = await prisma.animes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AnimesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Animes.
     * @param {AnimesDeleteArgs} args - Arguments to delete one Animes.
     * @example
     * // Delete one Animes
     * const Animes = await prisma.animes.delete({
     *   where: {
     *     // ... filter to delete one Animes
     *   }
     * })
     * 
    **/
    delete<T extends AnimesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesDeleteArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Animes.
     * @param {AnimesUpdateArgs} args - Arguments to update one Animes.
     * @example
     * // Update one Animes
     * const animes = await prisma.animes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnimesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesUpdateArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Animes.
     * @param {AnimesDeleteManyArgs} args - Arguments to filter Animes to delete.
     * @example
     * // Delete a few Animes
     * const { count } = await prisma.animes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnimesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnimesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animes
     * const animes = await prisma.animes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnimesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Animes.
     * @param {AnimesUpsertArgs} args - Arguments to update or create a Animes.
     * @example
     * // Update or create a Animes
     * const animes = await prisma.animes.upsert({
     *   create: {
     *     // ... data to create a Animes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animes we want to update
     *   }
     * })
    **/
    upsert<T extends AnimesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnimesUpsertArgs<ExtArgs>>
    ): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesCountArgs} args - Arguments to filter Animes to count.
     * @example
     * // Count the number of Animes
     * const count = await prisma.animes.count({
     *   where: {
     *     // ... the filter for the Animes we want to count
     *   }
     * })
    **/
    count<T extends AnimesCountArgs>(
      args?: Subset<T, AnimesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimesAggregateArgs>(args: Subset<T, AnimesAggregateArgs>): Prisma.PrismaPromise<GetAnimesAggregateType<T>>

    /**
     * Group by Animes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimesGroupByArgs} args - Group by arguments.
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
      T extends AnimesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimesGroupByArgs['orderBy'] }
        : { orderBy?: AnimesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animes model
   */
  readonly fields: AnimesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    categories<T extends Animes$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Animes$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesOnAnimesPayload<ExtArgs>, T, 'findMany'> | Null>;

    countries<T extends Animes$countriesArgs<ExtArgs> = {}>(args?: Subset<T, Animes$countriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountriesOnAnimesPayload<ExtArgs>, T, 'findMany'> | Null>;

    episodes<T extends Animes$episodesArgs<ExtArgs> = {}>(args?: Subset<T, Animes$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Animes model
   */ 
  interface AnimesFieldRefs {
    readonly id: FieldRef<"Animes", 'Int'>
    readonly title: FieldRef<"Animes", 'String'>
    readonly other_title: FieldRef<"Animes", 'String'>
    readonly slug: FieldRef<"Animes", 'String'>
    readonly time: FieldRef<"Animes", 'String'>
    readonly quality: FieldRef<"Animes", 'String'>
    readonly language: FieldRef<"Animes", 'String'>
    readonly director: FieldRef<"Animes", 'String'>
    readonly actors: FieldRef<"Animes", 'String'>
    readonly year: FieldRef<"Animes", 'String'>
    readonly description: FieldRef<"Animes", 'String'>
    readonly image_url: FieldRef<"Animes", 'String'>
    readonly created_at: FieldRef<"Animes", 'DateTime'>
    readonly updated_at: FieldRef<"Animes", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Animes findUnique
   */
  export type AnimesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where: AnimesWhereUniqueInput
  }


  /**
   * Animes findUniqueOrThrow
   */
  export type AnimesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where: AnimesWhereUniqueInput
  }


  /**
   * Animes findFirst
   */
  export type AnimesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationAndSearchRelevanceInput | AnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animes.
     */
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }


  /**
   * Animes findFirstOrThrow
   */
  export type AnimesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationAndSearchRelevanceInput | AnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animes.
     */
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }


  /**
   * Animes findMany
   */
  export type AnimesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter, which Animes to fetch.
     */
    where?: AnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animes to fetch.
     */
    orderBy?: AnimesOrderByWithRelationAndSearchRelevanceInput | AnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animes.
     */
    cursor?: AnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animes.
     */
    skip?: number
    distinct?: AnimesScalarFieldEnum | AnimesScalarFieldEnum[]
  }


  /**
   * Animes create
   */
  export type AnimesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * The data needed to create a Animes.
     */
    data: XOR<AnimesCreateInput, AnimesUncheckedCreateInput>
  }


  /**
   * Animes createMany
   */
  export type AnimesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animes.
     */
    data: AnimesCreateManyInput | AnimesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Animes update
   */
  export type AnimesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * The data needed to update a Animes.
     */
    data: XOR<AnimesUpdateInput, AnimesUncheckedUpdateInput>
    /**
     * Choose, which Animes to update.
     */
    where: AnimesWhereUniqueInput
  }


  /**
   * Animes updateMany
   */
  export type AnimesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animes.
     */
    data: XOR<AnimesUpdateManyMutationInput, AnimesUncheckedUpdateManyInput>
    /**
     * Filter which Animes to update
     */
    where?: AnimesWhereInput
  }


  /**
   * Animes upsert
   */
  export type AnimesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * The filter to search for the Animes to update in case it exists.
     */
    where: AnimesWhereUniqueInput
    /**
     * In case the Animes found by the `where` argument doesn't exist, create a new Animes with this data.
     */
    create: XOR<AnimesCreateInput, AnimesUncheckedCreateInput>
    /**
     * In case the Animes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimesUpdateInput, AnimesUncheckedUpdateInput>
  }


  /**
   * Animes delete
   */
  export type AnimesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimesInclude<ExtArgs> | null
    /**
     * Filter which Animes to delete.
     */
    where: AnimesWhereUniqueInput
  }


  /**
   * Animes deleteMany
   */
  export type AnimesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animes to delete
     */
    where?: AnimesWhereInput
  }


  /**
   * Animes.categories
   */
  export type Animes$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
    where?: CategoriesOnAnimesWhereInput
    orderBy?: CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: CategoriesOnAnimesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesOnAnimesScalarFieldEnum | CategoriesOnAnimesScalarFieldEnum[]
  }


  /**
   * Animes.countries
   */
  export type Animes$countriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
    where?: CountriesOnAnimesWhereInput
    orderBy?: CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: CountriesOnAnimesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountriesOnAnimesScalarFieldEnum | CountriesOnAnimesScalarFieldEnum[]
  }


  /**
   * Animes.episodes
   */
  export type Animes$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodesInclude<ExtArgs> | null
    where?: EpisodesWhereInput
    orderBy?: EpisodesOrderByWithRelationAndSearchRelevanceInput | EpisodesOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: EpisodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }


  /**
   * Animes without action
   */
  export type AnimesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimesInclude<ExtArgs> | null
  }



  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationAndSearchRelevanceInput | CategoriesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    animes?: boolean | Categories$animesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | Categories$animesArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      animes: Prisma.$CategoriesOnAnimesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }


  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Categories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
    **/
    create<T extends CategoriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const categories = await prisma.categories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
    **/
    delete<T extends CategoriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
    **/
    upsert<T extends CategoriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>
    ): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    animes<T extends Categories$animesArgs<ExtArgs> = {}>(args?: Subset<T, Categories$animesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesOnAnimesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Categories model
   */ 
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'Int'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly created_at: FieldRef<"Categories", 'DateTime'>
    readonly updated_at: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationAndSearchRelevanceInput | CategoriesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationAndSearchRelevanceInput | CategoriesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationAndSearchRelevanceInput | CategoriesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }


  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }


  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
  }


  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }


  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }


  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
  }


  /**
   * Categories.animes
   */
  export type Categories$animesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
    where?: CategoriesOnAnimesWhereInput
    orderBy?: CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: CategoriesOnAnimesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesOnAnimesScalarFieldEnum | CategoriesOnAnimesScalarFieldEnum[]
  }


  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesInclude<ExtArgs> | null
  }



  /**
   * Model Countries
   */

  export type AggregateCountries = {
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  export type CountriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CountriesSumAggregateOutputType = {
    id: number | null
  }

  export type CountriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CountriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CountriesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CountriesAvgAggregateInputType = {
    id?: true
  }

  export type CountriesSumAggregateInputType = {
    id?: true
  }

  export type CountriesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CountriesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CountriesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CountriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to aggregate.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationAndSearchRelevanceInput | CountriesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountriesMaxAggregateInputType
  }

  export type GetCountriesAggregateType<T extends CountriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCountries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountries[P]>
      : GetScalarType<T[P], AggregateCountries[P]>
  }




  export type CountriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountriesWhereInput
    orderBy?: CountriesOrderByWithAggregationInput | CountriesOrderByWithAggregationInput[]
    by: CountriesScalarFieldEnum[] | CountriesScalarFieldEnum
    having?: CountriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountriesCountAggregateInputType | true
    _avg?: CountriesAvgAggregateInputType
    _sum?: CountriesSumAggregateInputType
    _min?: CountriesMinAggregateInputType
    _max?: CountriesMaxAggregateInputType
  }

  export type CountriesGroupByOutputType = {
    id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  type GetCountriesGroupByPayload<T extends CountriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountriesGroupByOutputType[P]>
            : GetScalarType<T[P], CountriesGroupByOutputType[P]>
        }
      >
    >


  export type CountriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    animes?: boolean | Countries$animesArgs<ExtArgs>
    _count?: boolean | CountriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countries"]>

  export type CountriesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CountriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | Countries$animesArgs<ExtArgs>
    _count?: boolean | CountriesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CountriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Countries"
    objects: {
      animes: Prisma.$CountriesOnAnimesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["countries"]>
    composites: {}
  }


  type CountriesGetPayload<S extends boolean | null | undefined | CountriesDefaultArgs> = $Result.GetResult<Prisma.$CountriesPayload, S>

  type CountriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountriesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CountriesCountAggregateInputType | true
    }

  export interface CountriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Countries'], meta: { name: 'Countries' } }
    /**
     * Find zero or one Countries that matches the filter.
     * @param {CountriesFindUniqueArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesFindUniqueArgs<ExtArgs>>
    ): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Countries that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CountriesFindUniqueOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindFirstArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesFindFirstArgs<ExtArgs>>
    ): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Countries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindFirstOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.countries.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.countries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countriesWithIdOnly = await prisma.countries.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CountriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Countries.
     * @param {CountriesCreateArgs} args - Arguments to create a Countries.
     * @example
     * // Create one Countries
     * const Countries = await prisma.countries.create({
     *   data: {
     *     // ... data to create a Countries
     *   }
     * })
     * 
    **/
    create<T extends CountriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesCreateArgs<ExtArgs>>
    ): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Countries.
     *     @param {CountriesCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const countries = await prisma.countries.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Countries.
     * @param {CountriesDeleteArgs} args - Arguments to delete one Countries.
     * @example
     * // Delete one Countries
     * const Countries = await prisma.countries.delete({
     *   where: {
     *     // ... filter to delete one Countries
     *   }
     * })
     * 
    **/
    delete<T extends CountriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesDeleteArgs<ExtArgs>>
    ): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Countries.
     * @param {CountriesUpdateArgs} args - Arguments to update one Countries.
     * @example
     * // Update one Countries
     * const countries = await prisma.countries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesUpdateArgs<ExtArgs>>
    ): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {CountriesDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.countries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Countries.
     * @param {CountriesUpsertArgs} args - Arguments to update or create a Countries.
     * @example
     * // Update or create a Countries
     * const countries = await prisma.countries.upsert({
     *   create: {
     *     // ... data to create a Countries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Countries we want to update
     *   }
     * })
    **/
    upsert<T extends CountriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesUpsertArgs<ExtArgs>>
    ): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.countries.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountriesCountArgs>(
      args?: Subset<T, CountriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountriesAggregateArgs>(args: Subset<T, CountriesAggregateArgs>): Prisma.PrismaPromise<GetCountriesAggregateType<T>>

    /**
     * Group by Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesGroupByArgs} args - Group by arguments.
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
      T extends CountriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountriesGroupByArgs['orderBy'] }
        : { orderBy?: CountriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Countries model
   */
  readonly fields: CountriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Countries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    animes<T extends Countries$animesArgs<ExtArgs> = {}>(args?: Subset<T, Countries$animesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountriesOnAnimesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Countries model
   */ 
  interface CountriesFieldRefs {
    readonly id: FieldRef<"Countries", 'Int'>
    readonly name: FieldRef<"Countries", 'String'>
    readonly created_at: FieldRef<"Countries", 'DateTime'>
    readonly updated_at: FieldRef<"Countries", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Countries findUnique
   */
  export type CountriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where: CountriesWhereUniqueInput
  }


  /**
   * Countries findUniqueOrThrow
   */
  export type CountriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where: CountriesWhereUniqueInput
  }


  /**
   * Countries findFirst
   */
  export type CountriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationAndSearchRelevanceInput | CountriesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }


  /**
   * Countries findFirstOrThrow
   */
  export type CountriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationAndSearchRelevanceInput | CountriesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }


  /**
   * Countries findMany
   */
  export type CountriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountriesOrderByWithRelationAndSearchRelevanceInput | CountriesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }


  /**
   * Countries create
   */
  export type CountriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Countries.
     */
    data: XOR<CountriesCreateInput, CountriesUncheckedCreateInput>
  }


  /**
   * Countries createMany
   */
  export type CountriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountriesCreateManyInput | CountriesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Countries update
   */
  export type CountriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Countries.
     */
    data: XOR<CountriesUpdateInput, CountriesUncheckedUpdateInput>
    /**
     * Choose, which Countries to update.
     */
    where: CountriesWhereUniqueInput
  }


  /**
   * Countries updateMany
   */
  export type CountriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountriesUpdateManyMutationInput, CountriesUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountriesWhereInput
  }


  /**
   * Countries upsert
   */
  export type CountriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Countries to update in case it exists.
     */
    where: CountriesWhereUniqueInput
    /**
     * In case the Countries found by the `where` argument doesn't exist, create a new Countries with this data.
     */
    create: XOR<CountriesCreateInput, CountriesUncheckedCreateInput>
    /**
     * In case the Countries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountriesUpdateInput, CountriesUncheckedUpdateInput>
  }


  /**
   * Countries delete
   */
  export type CountriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesInclude<ExtArgs> | null
    /**
     * Filter which Countries to delete.
     */
    where: CountriesWhereUniqueInput
  }


  /**
   * Countries deleteMany
   */
  export type CountriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountriesWhereInput
  }


  /**
   * Countries.animes
   */
  export type Countries$animesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
    where?: CountriesOnAnimesWhereInput
    orderBy?: CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: CountriesOnAnimesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CountriesOnAnimesScalarFieldEnum | CountriesOnAnimesScalarFieldEnum[]
  }


  /**
   * Countries without action
   */
  export type CountriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesInclude<ExtArgs> | null
  }



  /**
   * Model Episodes
   */

  export type AggregateEpisodes = {
    _count: EpisodesCountAggregateOutputType | null
    _avg: EpisodesAvgAggregateOutputType | null
    _sum: EpisodesSumAggregateOutputType | null
    _min: EpisodesMinAggregateOutputType | null
    _max: EpisodesMaxAggregateOutputType | null
  }

  export type EpisodesAvgAggregateOutputType = {
    id: number | null
    animeId: number | null
  }

  export type EpisodesSumAggregateOutputType = {
    id: number | null
    animeId: number | null
  }

  export type EpisodesMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    type: string | null
    animeId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EpisodesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    type: string | null
    animeId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EpisodesCountAggregateOutputType = {
    id: number
    name: number
    url: number
    type: number
    animeId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EpisodesAvgAggregateInputType = {
    id?: true
    animeId?: true
  }

  export type EpisodesSumAggregateInputType = {
    id?: true
    animeId?: true
  }

  export type EpisodesMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    animeId?: true
    created_at?: true
    updated_at?: true
  }

  export type EpisodesMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    animeId?: true
    created_at?: true
    updated_at?: true
  }

  export type EpisodesCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    type?: true
    animeId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EpisodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to aggregate.
     */
    where?: EpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodesOrderByWithRelationAndSearchRelevanceInput | EpisodesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodesMaxAggregateInputType
  }

  export type GetEpisodesAggregateType<T extends EpisodesAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisodes[P]>
      : GetScalarType<T[P], AggregateEpisodes[P]>
  }




  export type EpisodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodesWhereInput
    orderBy?: EpisodesOrderByWithAggregationInput | EpisodesOrderByWithAggregationInput[]
    by: EpisodesScalarFieldEnum[] | EpisodesScalarFieldEnum
    having?: EpisodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodesCountAggregateInputType | true
    _avg?: EpisodesAvgAggregateInputType
    _sum?: EpisodesSumAggregateInputType
    _min?: EpisodesMinAggregateInputType
    _max?: EpisodesMaxAggregateInputType
  }

  export type EpisodesGroupByOutputType = {
    id: number
    name: string
    url: string
    type: string
    animeId: number | null
    created_at: Date
    updated_at: Date
    _count: EpisodesCountAggregateOutputType | null
    _avg: EpisodesAvgAggregateOutputType | null
    _sum: EpisodesSumAggregateOutputType | null
    _min: EpisodesMinAggregateOutputType | null
    _max: EpisodesMaxAggregateOutputType | null
  }

  type GetEpisodesGroupByPayload<T extends EpisodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodesGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodesGroupByOutputType[P]>
        }
      >
    >


  export type EpisodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    animeId?: boolean
    created_at?: boolean
    updated_at?: boolean
    anime?: boolean | Episodes$animeArgs<ExtArgs>
  }, ExtArgs["result"]["episodes"]>

  export type EpisodesSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    type?: boolean
    animeId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type EpisodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | Episodes$animeArgs<ExtArgs>
  }


  export type $EpisodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Episodes"
    objects: {
      anime: Prisma.$AnimesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string
      type: string
      animeId: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["episodes"]>
    composites: {}
  }


  type EpisodesGetPayload<S extends boolean | null | undefined | EpisodesDefaultArgs> = $Result.GetResult<Prisma.$EpisodesPayload, S>

  type EpisodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EpisodesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EpisodesCountAggregateInputType | true
    }

  export interface EpisodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Episodes'], meta: { name: 'Episodes' } }
    /**
     * Find zero or one Episodes that matches the filter.
     * @param {EpisodesFindUniqueArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EpisodesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodesFindUniqueArgs<ExtArgs>>
    ): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Episodes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EpisodesFindUniqueOrThrowArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EpisodesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesFindFirstArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EpisodesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodesFindFirstArgs<ExtArgs>>
    ): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Episodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesFindFirstOrThrowArgs} args - Arguments to find a Episodes
     * @example
     * // Get one Episodes
     * const episodes = await prisma.episodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EpisodesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episodes.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episodes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodesWithIdOnly = await prisma.episodes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EpisodesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Episodes.
     * @param {EpisodesCreateArgs} args - Arguments to create a Episodes.
     * @example
     * // Create one Episodes
     * const Episodes = await prisma.episodes.create({
     *   data: {
     *     // ... data to create a Episodes
     *   }
     * })
     * 
    **/
    create<T extends EpisodesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodesCreateArgs<ExtArgs>>
    ): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Episodes.
     *     @param {EpisodesCreateManyArgs} args - Arguments to create many Episodes.
     *     @example
     *     // Create many Episodes
     *     const episodes = await prisma.episodes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EpisodesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Episodes.
     * @param {EpisodesDeleteArgs} args - Arguments to delete one Episodes.
     * @example
     * // Delete one Episodes
     * const Episodes = await prisma.episodes.delete({
     *   where: {
     *     // ... filter to delete one Episodes
     *   }
     * })
     * 
    **/
    delete<T extends EpisodesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodesDeleteArgs<ExtArgs>>
    ): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Episodes.
     * @param {EpisodesUpdateArgs} args - Arguments to update one Episodes.
     * @example
     * // Update one Episodes
     * const episodes = await prisma.episodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EpisodesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodesUpdateArgs<ExtArgs>>
    ): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodesDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EpisodesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EpisodesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episodes = await prisma.episodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EpisodesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Episodes.
     * @param {EpisodesUpsertArgs} args - Arguments to update or create a Episodes.
     * @example
     * // Update or create a Episodes
     * const episodes = await prisma.episodes.upsert({
     *   create: {
     *     // ... data to create a Episodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episodes we want to update
     *   }
     * })
    **/
    upsert<T extends EpisodesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EpisodesUpsertArgs<ExtArgs>>
    ): Prisma__EpisodesClient<$Result.GetResult<Prisma.$EpisodesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episodes.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodesCountArgs>(
      args?: Subset<T, EpisodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EpisodesAggregateArgs>(args: Subset<T, EpisodesAggregateArgs>): Prisma.PrismaPromise<GetEpisodesAggregateType<T>>

    /**
     * Group by Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodesGroupByArgs} args - Group by arguments.
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
      T extends EpisodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodesGroupByArgs['orderBy'] }
        : { orderBy?: EpisodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EpisodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Episodes model
   */
  readonly fields: EpisodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    anime<T extends Episodes$animeArgs<ExtArgs> = {}>(args?: Subset<T, Episodes$animeArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Episodes model
   */ 
  interface EpisodesFieldRefs {
    readonly id: FieldRef<"Episodes", 'Int'>
    readonly name: FieldRef<"Episodes", 'String'>
    readonly url: FieldRef<"Episodes", 'String'>
    readonly type: FieldRef<"Episodes", 'String'>
    readonly animeId: FieldRef<"Episodes", 'Int'>
    readonly created_at: FieldRef<"Episodes", 'DateTime'>
    readonly updated_at: FieldRef<"Episodes", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Episodes findUnique
   */
  export type EpisodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where: EpisodesWhereUniqueInput
  }


  /**
   * Episodes findUniqueOrThrow
   */
  export type EpisodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where: EpisodesWhereUniqueInput
  }


  /**
   * Episodes findFirst
   */
  export type EpisodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodesOrderByWithRelationAndSearchRelevanceInput | EpisodesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }


  /**
   * Episodes findFirstOrThrow
   */
  export type EpisodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodesOrderByWithRelationAndSearchRelevanceInput | EpisodesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     */
    cursor?: EpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     */
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }


  /**
   * Episodes findMany
   */
  export type EpisodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter, which Episodes to fetch.
     */
    where?: EpisodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     */
    orderBy?: EpisodesOrderByWithRelationAndSearchRelevanceInput | EpisodesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     */
    cursor?: EpisodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     */
    skip?: number
    distinct?: EpisodesScalarFieldEnum | EpisodesScalarFieldEnum[]
  }


  /**
   * Episodes create
   */
  export type EpisodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * The data needed to create a Episodes.
     */
    data: XOR<EpisodesCreateInput, EpisodesUncheckedCreateInput>
  }


  /**
   * Episodes createMany
   */
  export type EpisodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Episodes.
     */
    data: EpisodesCreateManyInput | EpisodesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Episodes update
   */
  export type EpisodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * The data needed to update a Episodes.
     */
    data: XOR<EpisodesUpdateInput, EpisodesUncheckedUpdateInput>
    /**
     * Choose, which Episodes to update.
     */
    where: EpisodesWhereUniqueInput
  }


  /**
   * Episodes updateMany
   */
  export type EpisodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Episodes.
     */
    data: XOR<EpisodesUpdateManyMutationInput, EpisodesUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     */
    where?: EpisodesWhereInput
  }


  /**
   * Episodes upsert
   */
  export type EpisodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * The filter to search for the Episodes to update in case it exists.
     */
    where: EpisodesWhereUniqueInput
    /**
     * In case the Episodes found by the `where` argument doesn't exist, create a new Episodes with this data.
     */
    create: XOR<EpisodesCreateInput, EpisodesUncheckedCreateInput>
    /**
     * In case the Episodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodesUpdateInput, EpisodesUncheckedUpdateInput>
  }


  /**
   * Episodes delete
   */
  export type EpisodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodesInclude<ExtArgs> | null
    /**
     * Filter which Episodes to delete.
     */
    where: EpisodesWhereUniqueInput
  }


  /**
   * Episodes deleteMany
   */
  export type EpisodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Episodes to delete
     */
    where?: EpisodesWhereInput
  }


  /**
   * Episodes.anime
   */
  export type Episodes$animeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animes
     */
    select?: AnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnimesInclude<ExtArgs> | null
    where?: AnimesWhereInput
  }


  /**
   * Episodes without action
   */
  export type EpisodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Episodes
     */
    select?: EpisodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EpisodesInclude<ExtArgs> | null
  }



  /**
   * Model CategoriesOnAnimes
   */

  export type AggregateCategoriesOnAnimes = {
    _count: CategoriesOnAnimesCountAggregateOutputType | null
    _avg: CategoriesOnAnimesAvgAggregateOutputType | null
    _sum: CategoriesOnAnimesSumAggregateOutputType | null
    _min: CategoriesOnAnimesMinAggregateOutputType | null
    _max: CategoriesOnAnimesMaxAggregateOutputType | null
  }

  export type CategoriesOnAnimesAvgAggregateOutputType = {
    animeId: number | null
    categoryId: number | null
  }

  export type CategoriesOnAnimesSumAggregateOutputType = {
    animeId: number | null
    categoryId: number | null
  }

  export type CategoriesOnAnimesMinAggregateOutputType = {
    animeId: number | null
    categoryId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesOnAnimesMaxAggregateOutputType = {
    animeId: number | null
    categoryId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesOnAnimesCountAggregateOutputType = {
    animeId: number
    categoryId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoriesOnAnimesAvgAggregateInputType = {
    animeId?: true
    categoryId?: true
  }

  export type CategoriesOnAnimesSumAggregateInputType = {
    animeId?: true
    categoryId?: true
  }

  export type CategoriesOnAnimesMinAggregateInputType = {
    animeId?: true
    categoryId?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesOnAnimesMaxAggregateInputType = {
    animeId?: true
    categoryId?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesOnAnimesCountAggregateInputType = {
    animeId?: true
    categoryId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriesOnAnimesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesOnAnimes to aggregate.
     */
    where?: CategoriesOnAnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnAnimes to fetch.
     */
    orderBy?: CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesOnAnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoriesOnAnimes
    **/
    _count?: true | CategoriesOnAnimesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesOnAnimesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesOnAnimesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesOnAnimesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesOnAnimesMaxAggregateInputType
  }

  export type GetCategoriesOnAnimesAggregateType<T extends CategoriesOnAnimesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoriesOnAnimes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoriesOnAnimes[P]>
      : GetScalarType<T[P], AggregateCategoriesOnAnimes[P]>
  }




  export type CategoriesOnAnimesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesOnAnimesWhereInput
    orderBy?: CategoriesOnAnimesOrderByWithAggregationInput | CategoriesOnAnimesOrderByWithAggregationInput[]
    by: CategoriesOnAnimesScalarFieldEnum[] | CategoriesOnAnimesScalarFieldEnum
    having?: CategoriesOnAnimesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesOnAnimesCountAggregateInputType | true
    _avg?: CategoriesOnAnimesAvgAggregateInputType
    _sum?: CategoriesOnAnimesSumAggregateInputType
    _min?: CategoriesOnAnimesMinAggregateInputType
    _max?: CategoriesOnAnimesMaxAggregateInputType
  }

  export type CategoriesOnAnimesGroupByOutputType = {
    animeId: number
    categoryId: number
    created_at: Date
    updated_at: Date
    _count: CategoriesOnAnimesCountAggregateOutputType | null
    _avg: CategoriesOnAnimesAvgAggregateOutputType | null
    _sum: CategoriesOnAnimesSumAggregateOutputType | null
    _min: CategoriesOnAnimesMinAggregateOutputType | null
    _max: CategoriesOnAnimesMaxAggregateOutputType | null
  }

  type GetCategoriesOnAnimesGroupByPayload<T extends CategoriesOnAnimesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesOnAnimesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesOnAnimesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesOnAnimesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesOnAnimesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesOnAnimesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animeId?: boolean
    categoryId?: boolean
    created_at?: boolean
    updated_at?: boolean
    anime?: boolean | AnimesDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoriesOnAnimes"]>

  export type CategoriesOnAnimesSelectScalar = {
    animeId?: boolean
    categoryId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoriesOnAnimesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimesDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }


  export type $CategoriesOnAnimesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoriesOnAnimes"
    objects: {
      anime: Prisma.$AnimesPayload<ExtArgs>
      category: Prisma.$CategoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      animeId: number
      categoryId: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["categoriesOnAnimes"]>
    composites: {}
  }


  type CategoriesOnAnimesGetPayload<S extends boolean | null | undefined | CategoriesOnAnimesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesOnAnimesPayload, S>

  type CategoriesOnAnimesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoriesOnAnimesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CategoriesOnAnimesCountAggregateInputType | true
    }

  export interface CategoriesOnAnimesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoriesOnAnimes'], meta: { name: 'CategoriesOnAnimes' } }
    /**
     * Find zero or one CategoriesOnAnimes that matches the filter.
     * @param {CategoriesOnAnimesFindUniqueArgs} args - Arguments to find a CategoriesOnAnimes
     * @example
     * // Get one CategoriesOnAnimes
     * const categoriesOnAnimes = await prisma.categoriesOnAnimes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoriesOnAnimesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesOnAnimesFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoriesOnAnimesClient<$Result.GetResult<Prisma.$CategoriesOnAnimesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CategoriesOnAnimes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoriesOnAnimesFindUniqueOrThrowArgs} args - Arguments to find a CategoriesOnAnimes
     * @example
     * // Get one CategoriesOnAnimes
     * const categoriesOnAnimes = await prisma.categoriesOnAnimes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoriesOnAnimesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesOnAnimesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriesOnAnimesClient<$Result.GetResult<Prisma.$CategoriesOnAnimesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CategoriesOnAnimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnAnimesFindFirstArgs} args - Arguments to find a CategoriesOnAnimes
     * @example
     * // Get one CategoriesOnAnimes
     * const categoriesOnAnimes = await prisma.categoriesOnAnimes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoriesOnAnimesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesOnAnimesFindFirstArgs<ExtArgs>>
    ): Prisma__CategoriesOnAnimesClient<$Result.GetResult<Prisma.$CategoriesOnAnimesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CategoriesOnAnimes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnAnimesFindFirstOrThrowArgs} args - Arguments to find a CategoriesOnAnimes
     * @example
     * // Get one CategoriesOnAnimes
     * const categoriesOnAnimes = await prisma.categoriesOnAnimes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoriesOnAnimesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesOnAnimesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoriesOnAnimesClient<$Result.GetResult<Prisma.$CategoriesOnAnimesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CategoriesOnAnimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnAnimesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoriesOnAnimes
     * const categoriesOnAnimes = await prisma.categoriesOnAnimes.findMany()
     * 
     * // Get first 10 CategoriesOnAnimes
     * const categoriesOnAnimes = await prisma.categoriesOnAnimes.findMany({ take: 10 })
     * 
     * // Only select the `animeId`
     * const categoriesOnAnimesWithAnimeIdOnly = await prisma.categoriesOnAnimes.findMany({ select: { animeId: true } })
     * 
    **/
    findMany<T extends CategoriesOnAnimesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesOnAnimesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesOnAnimesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CategoriesOnAnimes.
     * @param {CategoriesOnAnimesCreateArgs} args - Arguments to create a CategoriesOnAnimes.
     * @example
     * // Create one CategoriesOnAnimes
     * const CategoriesOnAnimes = await prisma.categoriesOnAnimes.create({
     *   data: {
     *     // ... data to create a CategoriesOnAnimes
     *   }
     * })
     * 
    **/
    create<T extends CategoriesOnAnimesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesOnAnimesCreateArgs<ExtArgs>>
    ): Prisma__CategoriesOnAnimesClient<$Result.GetResult<Prisma.$CategoriesOnAnimesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CategoriesOnAnimes.
     *     @param {CategoriesOnAnimesCreateManyArgs} args - Arguments to create many CategoriesOnAnimes.
     *     @example
     *     // Create many CategoriesOnAnimes
     *     const categoriesOnAnimes = await prisma.categoriesOnAnimes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoriesOnAnimesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesOnAnimesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoriesOnAnimes.
     * @param {CategoriesOnAnimesDeleteArgs} args - Arguments to delete one CategoriesOnAnimes.
     * @example
     * // Delete one CategoriesOnAnimes
     * const CategoriesOnAnimes = await prisma.categoriesOnAnimes.delete({
     *   where: {
     *     // ... filter to delete one CategoriesOnAnimes
     *   }
     * })
     * 
    **/
    delete<T extends CategoriesOnAnimesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesOnAnimesDeleteArgs<ExtArgs>>
    ): Prisma__CategoriesOnAnimesClient<$Result.GetResult<Prisma.$CategoriesOnAnimesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CategoriesOnAnimes.
     * @param {CategoriesOnAnimesUpdateArgs} args - Arguments to update one CategoriesOnAnimes.
     * @example
     * // Update one CategoriesOnAnimes
     * const categoriesOnAnimes = await prisma.categoriesOnAnimes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoriesOnAnimesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesOnAnimesUpdateArgs<ExtArgs>>
    ): Prisma__CategoriesOnAnimesClient<$Result.GetResult<Prisma.$CategoriesOnAnimesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CategoriesOnAnimes.
     * @param {CategoriesOnAnimesDeleteManyArgs} args - Arguments to filter CategoriesOnAnimes to delete.
     * @example
     * // Delete a few CategoriesOnAnimes
     * const { count } = await prisma.categoriesOnAnimes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoriesOnAnimesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoriesOnAnimesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoriesOnAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnAnimesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoriesOnAnimes
     * const categoriesOnAnimes = await prisma.categoriesOnAnimes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoriesOnAnimesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesOnAnimesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoriesOnAnimes.
     * @param {CategoriesOnAnimesUpsertArgs} args - Arguments to update or create a CategoriesOnAnimes.
     * @example
     * // Update or create a CategoriesOnAnimes
     * const categoriesOnAnimes = await prisma.categoriesOnAnimes.upsert({
     *   create: {
     *     // ... data to create a CategoriesOnAnimes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoriesOnAnimes we want to update
     *   }
     * })
    **/
    upsert<T extends CategoriesOnAnimesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoriesOnAnimesUpsertArgs<ExtArgs>>
    ): Prisma__CategoriesOnAnimesClient<$Result.GetResult<Prisma.$CategoriesOnAnimesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CategoriesOnAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnAnimesCountArgs} args - Arguments to filter CategoriesOnAnimes to count.
     * @example
     * // Count the number of CategoriesOnAnimes
     * const count = await prisma.categoriesOnAnimes.count({
     *   where: {
     *     // ... the filter for the CategoriesOnAnimes we want to count
     *   }
     * })
    **/
    count<T extends CategoriesOnAnimesCountArgs>(
      args?: Subset<T, CategoriesOnAnimesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesOnAnimesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoriesOnAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnAnimesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesOnAnimesAggregateArgs>(args: Subset<T, CategoriesOnAnimesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesOnAnimesAggregateType<T>>

    /**
     * Group by CategoriesOnAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesOnAnimesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesOnAnimesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesOnAnimesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesOnAnimesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesOnAnimesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesOnAnimesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoriesOnAnimes model
   */
  readonly fields: CategoriesOnAnimesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoriesOnAnimes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesOnAnimesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    anime<T extends AnimesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimesDefaultArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CategoriesOnAnimes model
   */ 
  interface CategoriesOnAnimesFieldRefs {
    readonly animeId: FieldRef<"CategoriesOnAnimes", 'Int'>
    readonly categoryId: FieldRef<"CategoriesOnAnimes", 'Int'>
    readonly created_at: FieldRef<"CategoriesOnAnimes", 'DateTime'>
    readonly updated_at: FieldRef<"CategoriesOnAnimes", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CategoriesOnAnimes findUnique
   */
  export type CategoriesOnAnimesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOnAnimes to fetch.
     */
    where: CategoriesOnAnimesWhereUniqueInput
  }


  /**
   * CategoriesOnAnimes findUniqueOrThrow
   */
  export type CategoriesOnAnimesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOnAnimes to fetch.
     */
    where: CategoriesOnAnimesWhereUniqueInput
  }


  /**
   * CategoriesOnAnimes findFirst
   */
  export type CategoriesOnAnimesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOnAnimes to fetch.
     */
    where?: CategoriesOnAnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnAnimes to fetch.
     */
    orderBy?: CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesOnAnimes.
     */
    cursor?: CategoriesOnAnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesOnAnimes.
     */
    distinct?: CategoriesOnAnimesScalarFieldEnum | CategoriesOnAnimesScalarFieldEnum[]
  }


  /**
   * CategoriesOnAnimes findFirstOrThrow
   */
  export type CategoriesOnAnimesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOnAnimes to fetch.
     */
    where?: CategoriesOnAnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnAnimes to fetch.
     */
    orderBy?: CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoriesOnAnimes.
     */
    cursor?: CategoriesOnAnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoriesOnAnimes.
     */
    distinct?: CategoriesOnAnimesScalarFieldEnum | CategoriesOnAnimesScalarFieldEnum[]
  }


  /**
   * CategoriesOnAnimes findMany
   */
  export type CategoriesOnAnimesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter, which CategoriesOnAnimes to fetch.
     */
    where?: CategoriesOnAnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoriesOnAnimes to fetch.
     */
    orderBy?: CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoriesOnAnimes.
     */
    cursor?: CategoriesOnAnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoriesOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoriesOnAnimes.
     */
    skip?: number
    distinct?: CategoriesOnAnimesScalarFieldEnum | CategoriesOnAnimesScalarFieldEnum[]
  }


  /**
   * CategoriesOnAnimes create
   */
  export type CategoriesOnAnimesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoriesOnAnimes.
     */
    data: XOR<CategoriesOnAnimesCreateInput, CategoriesOnAnimesUncheckedCreateInput>
  }


  /**
   * CategoriesOnAnimes createMany
   */
  export type CategoriesOnAnimesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoriesOnAnimes.
     */
    data: CategoriesOnAnimesCreateManyInput | CategoriesOnAnimesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CategoriesOnAnimes update
   */
  export type CategoriesOnAnimesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoriesOnAnimes.
     */
    data: XOR<CategoriesOnAnimesUpdateInput, CategoriesOnAnimesUncheckedUpdateInput>
    /**
     * Choose, which CategoriesOnAnimes to update.
     */
    where: CategoriesOnAnimesWhereUniqueInput
  }


  /**
   * CategoriesOnAnimes updateMany
   */
  export type CategoriesOnAnimesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoriesOnAnimes.
     */
    data: XOR<CategoriesOnAnimesUpdateManyMutationInput, CategoriesOnAnimesUncheckedUpdateManyInput>
    /**
     * Filter which CategoriesOnAnimes to update
     */
    where?: CategoriesOnAnimesWhereInput
  }


  /**
   * CategoriesOnAnimes upsert
   */
  export type CategoriesOnAnimesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoriesOnAnimes to update in case it exists.
     */
    where: CategoriesOnAnimesWhereUniqueInput
    /**
     * In case the CategoriesOnAnimes found by the `where` argument doesn't exist, create a new CategoriesOnAnimes with this data.
     */
    create: XOR<CategoriesOnAnimesCreateInput, CategoriesOnAnimesUncheckedCreateInput>
    /**
     * In case the CategoriesOnAnimes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesOnAnimesUpdateInput, CategoriesOnAnimesUncheckedUpdateInput>
  }


  /**
   * CategoriesOnAnimes delete
   */
  export type CategoriesOnAnimesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter which CategoriesOnAnimes to delete.
     */
    where: CategoriesOnAnimesWhereUniqueInput
  }


  /**
   * CategoriesOnAnimes deleteMany
   */
  export type CategoriesOnAnimesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoriesOnAnimes to delete
     */
    where?: CategoriesOnAnimesWhereInput
  }


  /**
   * CategoriesOnAnimes without action
   */
  export type CategoriesOnAnimesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesOnAnimes
     */
    select?: CategoriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoriesOnAnimesInclude<ExtArgs> | null
  }



  /**
   * Model CountriesOnAnimes
   */

  export type AggregateCountriesOnAnimes = {
    _count: CountriesOnAnimesCountAggregateOutputType | null
    _avg: CountriesOnAnimesAvgAggregateOutputType | null
    _sum: CountriesOnAnimesSumAggregateOutputType | null
    _min: CountriesOnAnimesMinAggregateOutputType | null
    _max: CountriesOnAnimesMaxAggregateOutputType | null
  }

  export type CountriesOnAnimesAvgAggregateOutputType = {
    animeId: number | null
    countryId: number | null
  }

  export type CountriesOnAnimesSumAggregateOutputType = {
    animeId: number | null
    countryId: number | null
  }

  export type CountriesOnAnimesMinAggregateOutputType = {
    animeId: number | null
    countryId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CountriesOnAnimesMaxAggregateOutputType = {
    animeId: number | null
    countryId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CountriesOnAnimesCountAggregateOutputType = {
    animeId: number
    countryId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CountriesOnAnimesAvgAggregateInputType = {
    animeId?: true
    countryId?: true
  }

  export type CountriesOnAnimesSumAggregateInputType = {
    animeId?: true
    countryId?: true
  }

  export type CountriesOnAnimesMinAggregateInputType = {
    animeId?: true
    countryId?: true
    created_at?: true
    updated_at?: true
  }

  export type CountriesOnAnimesMaxAggregateInputType = {
    animeId?: true
    countryId?: true
    created_at?: true
    updated_at?: true
  }

  export type CountriesOnAnimesCountAggregateInputType = {
    animeId?: true
    countryId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CountriesOnAnimesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountriesOnAnimes to aggregate.
     */
    where?: CountriesOnAnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountriesOnAnimes to fetch.
     */
    orderBy?: CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountriesOnAnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountriesOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountriesOnAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CountriesOnAnimes
    **/
    _count?: true | CountriesOnAnimesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountriesOnAnimesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountriesOnAnimesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountriesOnAnimesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountriesOnAnimesMaxAggregateInputType
  }

  export type GetCountriesOnAnimesAggregateType<T extends CountriesOnAnimesAggregateArgs> = {
        [P in keyof T & keyof AggregateCountriesOnAnimes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountriesOnAnimes[P]>
      : GetScalarType<T[P], AggregateCountriesOnAnimes[P]>
  }




  export type CountriesOnAnimesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountriesOnAnimesWhereInput
    orderBy?: CountriesOnAnimesOrderByWithAggregationInput | CountriesOnAnimesOrderByWithAggregationInput[]
    by: CountriesOnAnimesScalarFieldEnum[] | CountriesOnAnimesScalarFieldEnum
    having?: CountriesOnAnimesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountriesOnAnimesCountAggregateInputType | true
    _avg?: CountriesOnAnimesAvgAggregateInputType
    _sum?: CountriesOnAnimesSumAggregateInputType
    _min?: CountriesOnAnimesMinAggregateInputType
    _max?: CountriesOnAnimesMaxAggregateInputType
  }

  export type CountriesOnAnimesGroupByOutputType = {
    animeId: number
    countryId: number
    created_at: Date
    updated_at: Date
    _count: CountriesOnAnimesCountAggregateOutputType | null
    _avg: CountriesOnAnimesAvgAggregateOutputType | null
    _sum: CountriesOnAnimesSumAggregateOutputType | null
    _min: CountriesOnAnimesMinAggregateOutputType | null
    _max: CountriesOnAnimesMaxAggregateOutputType | null
  }

  type GetCountriesOnAnimesGroupByPayload<T extends CountriesOnAnimesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountriesOnAnimesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountriesOnAnimesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountriesOnAnimesGroupByOutputType[P]>
            : GetScalarType<T[P], CountriesOnAnimesGroupByOutputType[P]>
        }
      >
    >


  export type CountriesOnAnimesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animeId?: boolean
    countryId?: boolean
    created_at?: boolean
    updated_at?: boolean
    anime?: boolean | AnimesDefaultArgs<ExtArgs>
    country?: boolean | CountriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countriesOnAnimes"]>

  export type CountriesOnAnimesSelectScalar = {
    animeId?: boolean
    countryId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CountriesOnAnimesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimesDefaultArgs<ExtArgs>
    country?: boolean | CountriesDefaultArgs<ExtArgs>
  }


  export type $CountriesOnAnimesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CountriesOnAnimes"
    objects: {
      anime: Prisma.$AnimesPayload<ExtArgs>
      country: Prisma.$CountriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      animeId: number
      countryId: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["countriesOnAnimes"]>
    composites: {}
  }


  type CountriesOnAnimesGetPayload<S extends boolean | null | undefined | CountriesOnAnimesDefaultArgs> = $Result.GetResult<Prisma.$CountriesOnAnimesPayload, S>

  type CountriesOnAnimesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountriesOnAnimesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CountriesOnAnimesCountAggregateInputType | true
    }

  export interface CountriesOnAnimesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CountriesOnAnimes'], meta: { name: 'CountriesOnAnimes' } }
    /**
     * Find zero or one CountriesOnAnimes that matches the filter.
     * @param {CountriesOnAnimesFindUniqueArgs} args - Arguments to find a CountriesOnAnimes
     * @example
     * // Get one CountriesOnAnimes
     * const countriesOnAnimes = await prisma.countriesOnAnimes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountriesOnAnimesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesOnAnimesFindUniqueArgs<ExtArgs>>
    ): Prisma__CountriesOnAnimesClient<$Result.GetResult<Prisma.$CountriesOnAnimesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CountriesOnAnimes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CountriesOnAnimesFindUniqueOrThrowArgs} args - Arguments to find a CountriesOnAnimes
     * @example
     * // Get one CountriesOnAnimes
     * const countriesOnAnimes = await prisma.countriesOnAnimes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountriesOnAnimesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesOnAnimesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CountriesOnAnimesClient<$Result.GetResult<Prisma.$CountriesOnAnimesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CountriesOnAnimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesOnAnimesFindFirstArgs} args - Arguments to find a CountriesOnAnimes
     * @example
     * // Get one CountriesOnAnimes
     * const countriesOnAnimes = await prisma.countriesOnAnimes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountriesOnAnimesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesOnAnimesFindFirstArgs<ExtArgs>>
    ): Prisma__CountriesOnAnimesClient<$Result.GetResult<Prisma.$CountriesOnAnimesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CountriesOnAnimes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesOnAnimesFindFirstOrThrowArgs} args - Arguments to find a CountriesOnAnimes
     * @example
     * // Get one CountriesOnAnimes
     * const countriesOnAnimes = await prisma.countriesOnAnimes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountriesOnAnimesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesOnAnimesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CountriesOnAnimesClient<$Result.GetResult<Prisma.$CountriesOnAnimesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CountriesOnAnimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesOnAnimesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountriesOnAnimes
     * const countriesOnAnimes = await prisma.countriesOnAnimes.findMany()
     * 
     * // Get first 10 CountriesOnAnimes
     * const countriesOnAnimes = await prisma.countriesOnAnimes.findMany({ take: 10 })
     * 
     * // Only select the `animeId`
     * const countriesOnAnimesWithAnimeIdOnly = await prisma.countriesOnAnimes.findMany({ select: { animeId: true } })
     * 
    **/
    findMany<T extends CountriesOnAnimesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesOnAnimesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountriesOnAnimesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CountriesOnAnimes.
     * @param {CountriesOnAnimesCreateArgs} args - Arguments to create a CountriesOnAnimes.
     * @example
     * // Create one CountriesOnAnimes
     * const CountriesOnAnimes = await prisma.countriesOnAnimes.create({
     *   data: {
     *     // ... data to create a CountriesOnAnimes
     *   }
     * })
     * 
    **/
    create<T extends CountriesOnAnimesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesOnAnimesCreateArgs<ExtArgs>>
    ): Prisma__CountriesOnAnimesClient<$Result.GetResult<Prisma.$CountriesOnAnimesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CountriesOnAnimes.
     *     @param {CountriesOnAnimesCreateManyArgs} args - Arguments to create many CountriesOnAnimes.
     *     @example
     *     // Create many CountriesOnAnimes
     *     const countriesOnAnimes = await prisma.countriesOnAnimes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountriesOnAnimesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesOnAnimesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CountriesOnAnimes.
     * @param {CountriesOnAnimesDeleteArgs} args - Arguments to delete one CountriesOnAnimes.
     * @example
     * // Delete one CountriesOnAnimes
     * const CountriesOnAnimes = await prisma.countriesOnAnimes.delete({
     *   where: {
     *     // ... filter to delete one CountriesOnAnimes
     *   }
     * })
     * 
    **/
    delete<T extends CountriesOnAnimesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesOnAnimesDeleteArgs<ExtArgs>>
    ): Prisma__CountriesOnAnimesClient<$Result.GetResult<Prisma.$CountriesOnAnimesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CountriesOnAnimes.
     * @param {CountriesOnAnimesUpdateArgs} args - Arguments to update one CountriesOnAnimes.
     * @example
     * // Update one CountriesOnAnimes
     * const countriesOnAnimes = await prisma.countriesOnAnimes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountriesOnAnimesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesOnAnimesUpdateArgs<ExtArgs>>
    ): Prisma__CountriesOnAnimesClient<$Result.GetResult<Prisma.$CountriesOnAnimesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CountriesOnAnimes.
     * @param {CountriesOnAnimesDeleteManyArgs} args - Arguments to filter CountriesOnAnimes to delete.
     * @example
     * // Delete a few CountriesOnAnimes
     * const { count } = await prisma.countriesOnAnimes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountriesOnAnimesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CountriesOnAnimesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountriesOnAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesOnAnimesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountriesOnAnimes
     * const countriesOnAnimes = await prisma.countriesOnAnimes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountriesOnAnimesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesOnAnimesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CountriesOnAnimes.
     * @param {CountriesOnAnimesUpsertArgs} args - Arguments to update or create a CountriesOnAnimes.
     * @example
     * // Update or create a CountriesOnAnimes
     * const countriesOnAnimes = await prisma.countriesOnAnimes.upsert({
     *   create: {
     *     // ... data to create a CountriesOnAnimes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountriesOnAnimes we want to update
     *   }
     * })
    **/
    upsert<T extends CountriesOnAnimesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CountriesOnAnimesUpsertArgs<ExtArgs>>
    ): Prisma__CountriesOnAnimesClient<$Result.GetResult<Prisma.$CountriesOnAnimesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CountriesOnAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesOnAnimesCountArgs} args - Arguments to filter CountriesOnAnimes to count.
     * @example
     * // Count the number of CountriesOnAnimes
     * const count = await prisma.countriesOnAnimes.count({
     *   where: {
     *     // ... the filter for the CountriesOnAnimes we want to count
     *   }
     * })
    **/
    count<T extends CountriesOnAnimesCountArgs>(
      args?: Subset<T, CountriesOnAnimesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountriesOnAnimesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CountriesOnAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesOnAnimesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountriesOnAnimesAggregateArgs>(args: Subset<T, CountriesOnAnimesAggregateArgs>): Prisma.PrismaPromise<GetCountriesOnAnimesAggregateType<T>>

    /**
     * Group by CountriesOnAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesOnAnimesGroupByArgs} args - Group by arguments.
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
      T extends CountriesOnAnimesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountriesOnAnimesGroupByArgs['orderBy'] }
        : { orderBy?: CountriesOnAnimesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountriesOnAnimesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountriesOnAnimesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CountriesOnAnimes model
   */
  readonly fields: CountriesOnAnimesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CountriesOnAnimes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountriesOnAnimesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    anime<T extends AnimesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimesDefaultArgs<ExtArgs>>): Prisma__AnimesClient<$Result.GetResult<Prisma.$AnimesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    country<T extends CountriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountriesDefaultArgs<ExtArgs>>): Prisma__CountriesClient<$Result.GetResult<Prisma.$CountriesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CountriesOnAnimes model
   */ 
  interface CountriesOnAnimesFieldRefs {
    readonly animeId: FieldRef<"CountriesOnAnimes", 'Int'>
    readonly countryId: FieldRef<"CountriesOnAnimes", 'Int'>
    readonly created_at: FieldRef<"CountriesOnAnimes", 'DateTime'>
    readonly updated_at: FieldRef<"CountriesOnAnimes", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * CountriesOnAnimes findUnique
   */
  export type CountriesOnAnimesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter, which CountriesOnAnimes to fetch.
     */
    where: CountriesOnAnimesWhereUniqueInput
  }


  /**
   * CountriesOnAnimes findUniqueOrThrow
   */
  export type CountriesOnAnimesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter, which CountriesOnAnimes to fetch.
     */
    where: CountriesOnAnimesWhereUniqueInput
  }


  /**
   * CountriesOnAnimes findFirst
   */
  export type CountriesOnAnimesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter, which CountriesOnAnimes to fetch.
     */
    where?: CountriesOnAnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountriesOnAnimes to fetch.
     */
    orderBy?: CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountriesOnAnimes.
     */
    cursor?: CountriesOnAnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountriesOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountriesOnAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountriesOnAnimes.
     */
    distinct?: CountriesOnAnimesScalarFieldEnum | CountriesOnAnimesScalarFieldEnum[]
  }


  /**
   * CountriesOnAnimes findFirstOrThrow
   */
  export type CountriesOnAnimesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter, which CountriesOnAnimes to fetch.
     */
    where?: CountriesOnAnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountriesOnAnimes to fetch.
     */
    orderBy?: CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountriesOnAnimes.
     */
    cursor?: CountriesOnAnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountriesOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountriesOnAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountriesOnAnimes.
     */
    distinct?: CountriesOnAnimesScalarFieldEnum | CountriesOnAnimesScalarFieldEnum[]
  }


  /**
   * CountriesOnAnimes findMany
   */
  export type CountriesOnAnimesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter, which CountriesOnAnimes to fetch.
     */
    where?: CountriesOnAnimesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountriesOnAnimes to fetch.
     */
    orderBy?: CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput | CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CountriesOnAnimes.
     */
    cursor?: CountriesOnAnimesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountriesOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountriesOnAnimes.
     */
    skip?: number
    distinct?: CountriesOnAnimesScalarFieldEnum | CountriesOnAnimesScalarFieldEnum[]
  }


  /**
   * CountriesOnAnimes create
   */
  export type CountriesOnAnimesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
    /**
     * The data needed to create a CountriesOnAnimes.
     */
    data: XOR<CountriesOnAnimesCreateInput, CountriesOnAnimesUncheckedCreateInput>
  }


  /**
   * CountriesOnAnimes createMany
   */
  export type CountriesOnAnimesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CountriesOnAnimes.
     */
    data: CountriesOnAnimesCreateManyInput | CountriesOnAnimesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CountriesOnAnimes update
   */
  export type CountriesOnAnimesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
    /**
     * The data needed to update a CountriesOnAnimes.
     */
    data: XOR<CountriesOnAnimesUpdateInput, CountriesOnAnimesUncheckedUpdateInput>
    /**
     * Choose, which CountriesOnAnimes to update.
     */
    where: CountriesOnAnimesWhereUniqueInput
  }


  /**
   * CountriesOnAnimes updateMany
   */
  export type CountriesOnAnimesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CountriesOnAnimes.
     */
    data: XOR<CountriesOnAnimesUpdateManyMutationInput, CountriesOnAnimesUncheckedUpdateManyInput>
    /**
     * Filter which CountriesOnAnimes to update
     */
    where?: CountriesOnAnimesWhereInput
  }


  /**
   * CountriesOnAnimes upsert
   */
  export type CountriesOnAnimesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
    /**
     * The filter to search for the CountriesOnAnimes to update in case it exists.
     */
    where: CountriesOnAnimesWhereUniqueInput
    /**
     * In case the CountriesOnAnimes found by the `where` argument doesn't exist, create a new CountriesOnAnimes with this data.
     */
    create: XOR<CountriesOnAnimesCreateInput, CountriesOnAnimesUncheckedCreateInput>
    /**
     * In case the CountriesOnAnimes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountriesOnAnimesUpdateInput, CountriesOnAnimesUncheckedUpdateInput>
  }


  /**
   * CountriesOnAnimes delete
   */
  export type CountriesOnAnimesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
    /**
     * Filter which CountriesOnAnimes to delete.
     */
    where: CountriesOnAnimesWhereUniqueInput
  }


  /**
   * CountriesOnAnimes deleteMany
   */
  export type CountriesOnAnimesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountriesOnAnimes to delete
     */
    where?: CountriesOnAnimesWhereInput
  }


  /**
   * CountriesOnAnimes without action
   */
  export type CountriesOnAnimesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountriesOnAnimes
     */
    select?: CountriesOnAnimesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CountriesOnAnimesInclude<ExtArgs> | null
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


  export const AnimesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    other_title: 'other_title',
    slug: 'slug',
    time: 'time',
    quality: 'quality',
    language: 'language',
    director: 'director',
    actors: 'actors',
    year: 'year',
    description: 'description',
    image_url: 'image_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AnimesScalarFieldEnum = (typeof AnimesScalarFieldEnum)[keyof typeof AnimesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const CountriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CountriesScalarFieldEnum = (typeof CountriesScalarFieldEnum)[keyof typeof CountriesScalarFieldEnum]


  export const EpisodesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    type: 'type',
    animeId: 'animeId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EpisodesScalarFieldEnum = (typeof EpisodesScalarFieldEnum)[keyof typeof EpisodesScalarFieldEnum]


  export const CategoriesOnAnimesScalarFieldEnum: {
    animeId: 'animeId',
    categoryId: 'categoryId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoriesOnAnimesScalarFieldEnum = (typeof CategoriesOnAnimesScalarFieldEnum)[keyof typeof CategoriesOnAnimesScalarFieldEnum]


  export const CountriesOnAnimesScalarFieldEnum: {
    animeId: 'animeId',
    countryId: 'countryId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CountriesOnAnimesScalarFieldEnum = (typeof CountriesOnAnimesScalarFieldEnum)[keyof typeof CountriesOnAnimesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  export const AnimesOrderByRelevanceFieldEnum: {
    title: 'title',
    other_title: 'other_title',
    slug: 'slug',
    time: 'time',
    quality: 'quality',
    language: 'language',
    director: 'director',
    actors: 'actors',
    year: 'year',
    description: 'description',
    image_url: 'image_url'
  };

  export type AnimesOrderByRelevanceFieldEnum = (typeof AnimesOrderByRelevanceFieldEnum)[keyof typeof AnimesOrderByRelevanceFieldEnum]


  export const CategoriesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CategoriesOrderByRelevanceFieldEnum = (typeof CategoriesOrderByRelevanceFieldEnum)[keyof typeof CategoriesOrderByRelevanceFieldEnum]


  export const CountriesOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CountriesOrderByRelevanceFieldEnum = (typeof CountriesOrderByRelevanceFieldEnum)[keyof typeof CountriesOrderByRelevanceFieldEnum]


  export const EpisodesOrderByRelevanceFieldEnum: {
    name: 'name',
    url: 'url',
    type: 'type'
  };

  export type EpisodesOrderByRelevanceFieldEnum = (typeof EpisodesOrderByRelevanceFieldEnum)[keyof typeof EpisodesOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AnimesWhereInput = {
    AND?: AnimesWhereInput | AnimesWhereInput[]
    OR?: AnimesWhereInput[]
    NOT?: AnimesWhereInput | AnimesWhereInput[]
    id?: IntFilter<"Animes"> | number
    title?: StringFilter<"Animes"> | string
    other_title?: StringFilter<"Animes"> | string
    slug?: StringFilter<"Animes"> | string
    time?: StringNullableFilter<"Animes"> | string | null
    quality?: StringNullableFilter<"Animes"> | string | null
    language?: StringNullableFilter<"Animes"> | string | null
    director?: StringNullableFilter<"Animes"> | string | null
    actors?: StringNullableFilter<"Animes"> | string | null
    year?: StringNullableFilter<"Animes"> | string | null
    description?: StringNullableFilter<"Animes"> | string | null
    image_url?: StringFilter<"Animes"> | string
    created_at?: DateTimeFilter<"Animes"> | Date | string
    updated_at?: DateTimeFilter<"Animes"> | Date | string
    categories?: CategoriesOnAnimesListRelationFilter
    countries?: CountriesOnAnimesListRelationFilter
    episodes?: EpisodesListRelationFilter
  }

  export type AnimesOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    title?: SortOrder
    other_title?: SortOrder
    slug?: SortOrder
    time?: SortOrderInput | SortOrder
    quality?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    director?: SortOrderInput | SortOrder
    actors?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    categories?: CategoriesOnAnimesOrderByRelationAggregateInput
    countries?: CountriesOnAnimesOrderByRelationAggregateInput
    episodes?: EpisodesOrderByRelationAggregateInput
    _relevance?: AnimesOrderByRelevanceInput
  }

  export type AnimesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    other_title?: string
    slug?: string
    AND?: AnimesWhereInput | AnimesWhereInput[]
    OR?: AnimesWhereInput[]
    NOT?: AnimesWhereInput | AnimesWhereInput[]
    time?: StringNullableFilter<"Animes"> | string | null
    quality?: StringNullableFilter<"Animes"> | string | null
    language?: StringNullableFilter<"Animes"> | string | null
    director?: StringNullableFilter<"Animes"> | string | null
    actors?: StringNullableFilter<"Animes"> | string | null
    year?: StringNullableFilter<"Animes"> | string | null
    description?: StringNullableFilter<"Animes"> | string | null
    image_url?: StringFilter<"Animes"> | string
    created_at?: DateTimeFilter<"Animes"> | Date | string
    updated_at?: DateTimeFilter<"Animes"> | Date | string
    categories?: CategoriesOnAnimesListRelationFilter
    countries?: CountriesOnAnimesListRelationFilter
    episodes?: EpisodesListRelationFilter
  }, "id" | "title" | "other_title" | "slug">

  export type AnimesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    other_title?: SortOrder
    slug?: SortOrder
    time?: SortOrderInput | SortOrder
    quality?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    director?: SortOrderInput | SortOrder
    actors?: SortOrderInput | SortOrder
    year?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AnimesCountOrderByAggregateInput
    _avg?: AnimesAvgOrderByAggregateInput
    _max?: AnimesMaxOrderByAggregateInput
    _min?: AnimesMinOrderByAggregateInput
    _sum?: AnimesSumOrderByAggregateInput
  }

  export type AnimesScalarWhereWithAggregatesInput = {
    AND?: AnimesScalarWhereWithAggregatesInput | AnimesScalarWhereWithAggregatesInput[]
    OR?: AnimesScalarWhereWithAggregatesInput[]
    NOT?: AnimesScalarWhereWithAggregatesInput | AnimesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Animes"> | number
    title?: StringWithAggregatesFilter<"Animes"> | string
    other_title?: StringWithAggregatesFilter<"Animes"> | string
    slug?: StringWithAggregatesFilter<"Animes"> | string
    time?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    quality?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    language?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    director?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    actors?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    year?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    description?: StringNullableWithAggregatesFilter<"Animes"> | string | null
    image_url?: StringWithAggregatesFilter<"Animes"> | string
    created_at?: DateTimeWithAggregatesFilter<"Animes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Animes"> | Date | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: IntFilter<"Categories"> | number
    name?: StringFilter<"Categories"> | string
    created_at?: DateTimeFilter<"Categories"> | Date | string
    updated_at?: DateTimeFilter<"Categories"> | Date | string
    animes?: CategoriesOnAnimesListRelationFilter
  }

  export type CategoriesOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    animes?: CategoriesOnAnimesOrderByRelationAggregateInput
    _relevance?: CategoriesOrderByRelevanceInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    created_at?: DateTimeFilter<"Categories"> | Date | string
    updated_at?: DateTimeFilter<"Categories"> | Date | string
    animes?: CategoriesOnAnimesListRelationFilter
  }, "id" | "name">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categories"> | number
    name?: StringWithAggregatesFilter<"Categories"> | string
    created_at?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type CountriesWhereInput = {
    AND?: CountriesWhereInput | CountriesWhereInput[]
    OR?: CountriesWhereInput[]
    NOT?: CountriesWhereInput | CountriesWhereInput[]
    id?: IntFilter<"Countries"> | number
    name?: StringFilter<"Countries"> | string
    created_at?: DateTimeFilter<"Countries"> | Date | string
    updated_at?: DateTimeFilter<"Countries"> | Date | string
    animes?: CountriesOnAnimesListRelationFilter
  }

  export type CountriesOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    animes?: CountriesOnAnimesOrderByRelationAggregateInput
    _relevance?: CountriesOrderByRelevanceInput
  }

  export type CountriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CountriesWhereInput | CountriesWhereInput[]
    OR?: CountriesWhereInput[]
    NOT?: CountriesWhereInput | CountriesWhereInput[]
    created_at?: DateTimeFilter<"Countries"> | Date | string
    updated_at?: DateTimeFilter<"Countries"> | Date | string
    animes?: CountriesOnAnimesListRelationFilter
  }, "id" | "name">

  export type CountriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CountriesCountOrderByAggregateInput
    _avg?: CountriesAvgOrderByAggregateInput
    _max?: CountriesMaxOrderByAggregateInput
    _min?: CountriesMinOrderByAggregateInput
    _sum?: CountriesSumOrderByAggregateInput
  }

  export type CountriesScalarWhereWithAggregatesInput = {
    AND?: CountriesScalarWhereWithAggregatesInput | CountriesScalarWhereWithAggregatesInput[]
    OR?: CountriesScalarWhereWithAggregatesInput[]
    NOT?: CountriesScalarWhereWithAggregatesInput | CountriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Countries"> | number
    name?: StringWithAggregatesFilter<"Countries"> | string
    created_at?: DateTimeWithAggregatesFilter<"Countries"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Countries"> | Date | string
  }

  export type EpisodesWhereInput = {
    AND?: EpisodesWhereInput | EpisodesWhereInput[]
    OR?: EpisodesWhereInput[]
    NOT?: EpisodesWhereInput | EpisodesWhereInput[]
    id?: IntFilter<"Episodes"> | number
    name?: StringFilter<"Episodes"> | string
    url?: StringFilter<"Episodes"> | string
    type?: StringFilter<"Episodes"> | string
    animeId?: IntNullableFilter<"Episodes"> | number | null
    created_at?: DateTimeFilter<"Episodes"> | Date | string
    updated_at?: DateTimeFilter<"Episodes"> | Date | string
    anime?: XOR<AnimesNullableRelationFilter, AnimesWhereInput> | null
  }

  export type EpisodesOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    animeId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    anime?: AnimesOrderByWithRelationAndSearchRelevanceInput
    _relevance?: EpisodesOrderByRelevanceInput
  }

  export type EpisodesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpisodesWhereInput | EpisodesWhereInput[]
    OR?: EpisodesWhereInput[]
    NOT?: EpisodesWhereInput | EpisodesWhereInput[]
    name?: StringFilter<"Episodes"> | string
    url?: StringFilter<"Episodes"> | string
    type?: StringFilter<"Episodes"> | string
    animeId?: IntNullableFilter<"Episodes"> | number | null
    created_at?: DateTimeFilter<"Episodes"> | Date | string
    updated_at?: DateTimeFilter<"Episodes"> | Date | string
    anime?: XOR<AnimesNullableRelationFilter, AnimesWhereInput> | null
  }, "id">

  export type EpisodesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    animeId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: EpisodesCountOrderByAggregateInput
    _avg?: EpisodesAvgOrderByAggregateInput
    _max?: EpisodesMaxOrderByAggregateInput
    _min?: EpisodesMinOrderByAggregateInput
    _sum?: EpisodesSumOrderByAggregateInput
  }

  export type EpisodesScalarWhereWithAggregatesInput = {
    AND?: EpisodesScalarWhereWithAggregatesInput | EpisodesScalarWhereWithAggregatesInput[]
    OR?: EpisodesScalarWhereWithAggregatesInput[]
    NOT?: EpisodesScalarWhereWithAggregatesInput | EpisodesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Episodes"> | number
    name?: StringWithAggregatesFilter<"Episodes"> | string
    url?: StringWithAggregatesFilter<"Episodes"> | string
    type?: StringWithAggregatesFilter<"Episodes"> | string
    animeId?: IntNullableWithAggregatesFilter<"Episodes"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Episodes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Episodes"> | Date | string
  }

  export type CategoriesOnAnimesWhereInput = {
    AND?: CategoriesOnAnimesWhereInput | CategoriesOnAnimesWhereInput[]
    OR?: CategoriesOnAnimesWhereInput[]
    NOT?: CategoriesOnAnimesWhereInput | CategoriesOnAnimesWhereInput[]
    animeId?: IntFilter<"CategoriesOnAnimes"> | number
    categoryId?: IntFilter<"CategoriesOnAnimes"> | number
    created_at?: DateTimeFilter<"CategoriesOnAnimes"> | Date | string
    updated_at?: DateTimeFilter<"CategoriesOnAnimes"> | Date | string
    anime?: XOR<AnimesRelationFilter, AnimesWhereInput>
    category?: XOR<CategoriesRelationFilter, CategoriesWhereInput>
  }

  export type CategoriesOnAnimesOrderByWithRelationAndSearchRelevanceInput = {
    animeId?: SortOrder
    categoryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    anime?: AnimesOrderByWithRelationAndSearchRelevanceInput
    category?: CategoriesOrderByWithRelationAndSearchRelevanceInput
  }

  export type CategoriesOnAnimesWhereUniqueInput = Prisma.AtLeast<{
    animeId_categoryId?: CategoriesOnAnimesAnimeIdCategoryIdCompoundUniqueInput
    AND?: CategoriesOnAnimesWhereInput | CategoriesOnAnimesWhereInput[]
    OR?: CategoriesOnAnimesWhereInput[]
    NOT?: CategoriesOnAnimesWhereInput | CategoriesOnAnimesWhereInput[]
    animeId?: IntFilter<"CategoriesOnAnimes"> | number
    categoryId?: IntFilter<"CategoriesOnAnimes"> | number
    created_at?: DateTimeFilter<"CategoriesOnAnimes"> | Date | string
    updated_at?: DateTimeFilter<"CategoriesOnAnimes"> | Date | string
    anime?: XOR<AnimesRelationFilter, AnimesWhereInput>
    category?: XOR<CategoriesRelationFilter, CategoriesWhereInput>
  }, "animeId_categoryId">

  export type CategoriesOnAnimesOrderByWithAggregationInput = {
    animeId?: SortOrder
    categoryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoriesOnAnimesCountOrderByAggregateInput
    _avg?: CategoriesOnAnimesAvgOrderByAggregateInput
    _max?: CategoriesOnAnimesMaxOrderByAggregateInput
    _min?: CategoriesOnAnimesMinOrderByAggregateInput
    _sum?: CategoriesOnAnimesSumOrderByAggregateInput
  }

  export type CategoriesOnAnimesScalarWhereWithAggregatesInput = {
    AND?: CategoriesOnAnimesScalarWhereWithAggregatesInput | CategoriesOnAnimesScalarWhereWithAggregatesInput[]
    OR?: CategoriesOnAnimesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesOnAnimesScalarWhereWithAggregatesInput | CategoriesOnAnimesScalarWhereWithAggregatesInput[]
    animeId?: IntWithAggregatesFilter<"CategoriesOnAnimes"> | number
    categoryId?: IntWithAggregatesFilter<"CategoriesOnAnimes"> | number
    created_at?: DateTimeWithAggregatesFilter<"CategoriesOnAnimes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CategoriesOnAnimes"> | Date | string
  }

  export type CountriesOnAnimesWhereInput = {
    AND?: CountriesOnAnimesWhereInput | CountriesOnAnimesWhereInput[]
    OR?: CountriesOnAnimesWhereInput[]
    NOT?: CountriesOnAnimesWhereInput | CountriesOnAnimesWhereInput[]
    animeId?: IntFilter<"CountriesOnAnimes"> | number
    countryId?: IntFilter<"CountriesOnAnimes"> | number
    created_at?: DateTimeFilter<"CountriesOnAnimes"> | Date | string
    updated_at?: DateTimeFilter<"CountriesOnAnimes"> | Date | string
    anime?: XOR<AnimesRelationFilter, AnimesWhereInput>
    country?: XOR<CountriesRelationFilter, CountriesWhereInput>
  }

  export type CountriesOnAnimesOrderByWithRelationAndSearchRelevanceInput = {
    animeId?: SortOrder
    countryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    anime?: AnimesOrderByWithRelationAndSearchRelevanceInput
    country?: CountriesOrderByWithRelationAndSearchRelevanceInput
  }

  export type CountriesOnAnimesWhereUniqueInput = Prisma.AtLeast<{
    animeId_countryId?: CountriesOnAnimesAnimeIdCountryIdCompoundUniqueInput
    AND?: CountriesOnAnimesWhereInput | CountriesOnAnimesWhereInput[]
    OR?: CountriesOnAnimesWhereInput[]
    NOT?: CountriesOnAnimesWhereInput | CountriesOnAnimesWhereInput[]
    animeId?: IntFilter<"CountriesOnAnimes"> | number
    countryId?: IntFilter<"CountriesOnAnimes"> | number
    created_at?: DateTimeFilter<"CountriesOnAnimes"> | Date | string
    updated_at?: DateTimeFilter<"CountriesOnAnimes"> | Date | string
    anime?: XOR<AnimesRelationFilter, AnimesWhereInput>
    country?: XOR<CountriesRelationFilter, CountriesWhereInput>
  }, "animeId_countryId">

  export type CountriesOnAnimesOrderByWithAggregationInput = {
    animeId?: SortOrder
    countryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CountriesOnAnimesCountOrderByAggregateInput
    _avg?: CountriesOnAnimesAvgOrderByAggregateInput
    _max?: CountriesOnAnimesMaxOrderByAggregateInput
    _min?: CountriesOnAnimesMinOrderByAggregateInput
    _sum?: CountriesOnAnimesSumOrderByAggregateInput
  }

  export type CountriesOnAnimesScalarWhereWithAggregatesInput = {
    AND?: CountriesOnAnimesScalarWhereWithAggregatesInput | CountriesOnAnimesScalarWhereWithAggregatesInput[]
    OR?: CountriesOnAnimesScalarWhereWithAggregatesInput[]
    NOT?: CountriesOnAnimesScalarWhereWithAggregatesInput | CountriesOnAnimesScalarWhereWithAggregatesInput[]
    animeId?: IntWithAggregatesFilter<"CountriesOnAnimes"> | number
    countryId?: IntWithAggregatesFilter<"CountriesOnAnimes"> | number
    created_at?: DateTimeWithAggregatesFilter<"CountriesOnAnimes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"CountriesOnAnimes"> | Date | string
  }

  export type AnimesCreateInput = {
    title: string
    other_title: string
    slug: string
    time?: string | null
    quality?: string | null
    language?: string | null
    director?: string | null
    actors?: string | null
    year?: string | null
    description?: string | null
    image_url: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: CategoriesOnAnimesCreateNestedManyWithoutAnimeInput
    countries?: CountriesOnAnimesCreateNestedManyWithoutAnimeInput
    episodes?: EpisodesCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUncheckedCreateInput = {
    id?: number
    title: string
    other_title: string
    slug: string
    time?: string | null
    quality?: string | null
    language?: string | null
    director?: string | null
    actors?: string | null
    year?: string | null
    description?: string | null
    image_url: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: CategoriesOnAnimesUncheckedCreateNestedManyWithoutAnimeInput
    countries?: CountriesOnAnimesUncheckedCreateNestedManyWithoutAnimeInput
    episodes?: EpisodesUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    other_title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    actors?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesOnAnimesUpdateManyWithoutAnimeNestedInput
    countries?: CountriesOnAnimesUpdateManyWithoutAnimeNestedInput
    episodes?: EpisodesUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    other_title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    actors?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesOnAnimesUncheckedUpdateManyWithoutAnimeNestedInput
    countries?: CountriesOnAnimesUncheckedUpdateManyWithoutAnimeNestedInput
    episodes?: EpisodesUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesCreateManyInput = {
    id?: number
    title: string
    other_title: string
    slug: string
    time?: string | null
    quality?: string | null
    language?: string | null
    director?: string | null
    actors?: string | null
    year?: string | null
    description?: string | null
    image_url: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AnimesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    other_title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    actors?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    other_title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    actors?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    animes?: CategoriesOnAnimesCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    animes?: CategoriesOnAnimesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animes?: CategoriesOnAnimesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animes?: CategoriesOnAnimesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountriesCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    animes?: CountriesOnAnimesCreateNestedManyWithoutCountryInput
  }

  export type CountriesUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    animes?: CountriesOnAnimesUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animes?: CountriesOnAnimesUpdateManyWithoutCountryNestedInput
  }

  export type CountriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    animes?: CountriesOnAnimesUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountriesCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CountriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodesCreateInput = {
    name: string
    url: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
    anime?: AnimesCreateNestedOneWithoutEpisodesInput
  }

  export type EpisodesUncheckedCreateInput = {
    id?: number
    name: string
    url: string
    type: string
    animeId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EpisodesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    anime?: AnimesUpdateOneWithoutEpisodesNestedInput
  }

  export type EpisodesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    animeId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodesCreateManyInput = {
    id?: number
    name: string
    url: string
    type: string
    animeId?: number | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EpisodesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    animeId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnAnimesCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    anime: AnimesCreateNestedOneWithoutCategoriesInput
    category: CategoriesCreateNestedOneWithoutAnimesInput
  }

  export type CategoriesOnAnimesUncheckedCreateInput = {
    animeId: number
    categoryId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesOnAnimesUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    anime?: AnimesUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoriesUpdateOneRequiredWithoutAnimesNestedInput
  }

  export type CategoriesOnAnimesUncheckedUpdateInput = {
    animeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnAnimesCreateManyInput = {
    animeId: number
    categoryId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesOnAnimesUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnAnimesUncheckedUpdateManyInput = {
    animeId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountriesOnAnimesCreateInput = {
    created_at?: Date | string
    updated_at?: Date | string
    anime: AnimesCreateNestedOneWithoutCountriesInput
    country: CountriesCreateNestedOneWithoutAnimesInput
  }

  export type CountriesOnAnimesUncheckedCreateInput = {
    animeId: number
    countryId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CountriesOnAnimesUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    anime?: AnimesUpdateOneRequiredWithoutCountriesNestedInput
    country?: CountriesUpdateOneRequiredWithoutAnimesNestedInput
  }

  export type CountriesOnAnimesUncheckedUpdateInput = {
    animeId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountriesOnAnimesCreateManyInput = {
    animeId: number
    countryId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CountriesOnAnimesUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountriesOnAnimesUncheckedUpdateManyInput = {
    animeId?: IntFieldUpdateOperationsInput | number
    countryId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type CategoriesOnAnimesListRelationFilter = {
    every?: CategoriesOnAnimesWhereInput
    some?: CategoriesOnAnimesWhereInput
    none?: CategoriesOnAnimesWhereInput
  }

  export type CountriesOnAnimesListRelationFilter = {
    every?: CountriesOnAnimesWhereInput
    some?: CountriesOnAnimesWhereInput
    none?: CountriesOnAnimesWhereInput
  }

  export type EpisodesListRelationFilter = {
    every?: EpisodesWhereInput
    some?: EpisodesWhereInput
    none?: EpisodesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoriesOnAnimesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountriesOnAnimesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimesOrderByRelevanceInput = {
    fields: AnimesOrderByRelevanceFieldEnum | AnimesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AnimesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    other_title?: SortOrder
    slug?: SortOrder
    time?: SortOrder
    quality?: SortOrder
    language?: SortOrder
    director?: SortOrder
    actors?: SortOrder
    year?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AnimesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    other_title?: SortOrder
    slug?: SortOrder
    time?: SortOrder
    quality?: SortOrder
    language?: SortOrder
    director?: SortOrder
    actors?: SortOrder
    year?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    other_title?: SortOrder
    slug?: SortOrder
    time?: SortOrder
    quality?: SortOrder
    language?: SortOrder
    director?: SortOrder
    actors?: SortOrder
    year?: SortOrder
    description?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AnimesSumOrderByAggregateInput = {
    id?: SortOrder
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
    search?: string
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
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type CategoriesOrderByRelevanceInput = {
    fields: CategoriesOrderByRelevanceFieldEnum | CategoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountriesOrderByRelevanceInput = {
    fields: CountriesOrderByRelevanceFieldEnum | CountriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CountriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CountriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CountriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CountriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AnimesNullableRelationFilter = {
    is?: AnimesWhereInput | null
    isNot?: AnimesWhereInput | null
  }

  export type EpisodesOrderByRelevanceInput = {
    fields: EpisodesOrderByRelevanceFieldEnum | EpisodesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EpisodesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    animeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EpisodesAvgOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
  }

  export type EpisodesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    animeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EpisodesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    type?: SortOrder
    animeId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EpisodesSumOrderByAggregateInput = {
    id?: SortOrder
    animeId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type AnimesRelationFilter = {
    is?: AnimesWhereInput
    isNot?: AnimesWhereInput
  }

  export type CategoriesRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type CategoriesOnAnimesAnimeIdCategoryIdCompoundUniqueInput = {
    animeId: number
    categoryId: number
  }

  export type CategoriesOnAnimesCountOrderByAggregateInput = {
    animeId?: SortOrder
    categoryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesOnAnimesAvgOrderByAggregateInput = {
    animeId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoriesOnAnimesMaxOrderByAggregateInput = {
    animeId?: SortOrder
    categoryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesOnAnimesMinOrderByAggregateInput = {
    animeId?: SortOrder
    categoryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesOnAnimesSumOrderByAggregateInput = {
    animeId?: SortOrder
    categoryId?: SortOrder
  }

  export type CountriesRelationFilter = {
    is?: CountriesWhereInput
    isNot?: CountriesWhereInput
  }

  export type CountriesOnAnimesAnimeIdCountryIdCompoundUniqueInput = {
    animeId: number
    countryId: number
  }

  export type CountriesOnAnimesCountOrderByAggregateInput = {
    animeId?: SortOrder
    countryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CountriesOnAnimesAvgOrderByAggregateInput = {
    animeId?: SortOrder
    countryId?: SortOrder
  }

  export type CountriesOnAnimesMaxOrderByAggregateInput = {
    animeId?: SortOrder
    countryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CountriesOnAnimesMinOrderByAggregateInput = {
    animeId?: SortOrder
    countryId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CountriesOnAnimesSumOrderByAggregateInput = {
    animeId?: SortOrder
    countryId?: SortOrder
  }

  export type CategoriesOnAnimesCreateNestedManyWithoutAnimeInput = {
    create?: XOR<CategoriesOnAnimesCreateWithoutAnimeInput, CategoriesOnAnimesUncheckedCreateWithoutAnimeInput> | CategoriesOnAnimesCreateWithoutAnimeInput[] | CategoriesOnAnimesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CategoriesOnAnimesCreateOrConnectWithoutAnimeInput | CategoriesOnAnimesCreateOrConnectWithoutAnimeInput[]
    createMany?: CategoriesOnAnimesCreateManyAnimeInputEnvelope
    connect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
  }

  export type CountriesOnAnimesCreateNestedManyWithoutAnimeInput = {
    create?: XOR<CountriesOnAnimesCreateWithoutAnimeInput, CountriesOnAnimesUncheckedCreateWithoutAnimeInput> | CountriesOnAnimesCreateWithoutAnimeInput[] | CountriesOnAnimesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CountriesOnAnimesCreateOrConnectWithoutAnimeInput | CountriesOnAnimesCreateOrConnectWithoutAnimeInput[]
    createMany?: CountriesOnAnimesCreateManyAnimeInputEnvelope
    connect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
  }

  export type EpisodesCreateNestedManyWithoutAnimeInput = {
    create?: XOR<EpisodesCreateWithoutAnimeInput, EpisodesUncheckedCreateWithoutAnimeInput> | EpisodesCreateWithoutAnimeInput[] | EpisodesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodesCreateOrConnectWithoutAnimeInput | EpisodesCreateOrConnectWithoutAnimeInput[]
    createMany?: EpisodesCreateManyAnimeInputEnvelope
    connect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
  }

  export type CategoriesOnAnimesUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<CategoriesOnAnimesCreateWithoutAnimeInput, CategoriesOnAnimesUncheckedCreateWithoutAnimeInput> | CategoriesOnAnimesCreateWithoutAnimeInput[] | CategoriesOnAnimesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CategoriesOnAnimesCreateOrConnectWithoutAnimeInput | CategoriesOnAnimesCreateOrConnectWithoutAnimeInput[]
    createMany?: CategoriesOnAnimesCreateManyAnimeInputEnvelope
    connect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
  }

  export type CountriesOnAnimesUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<CountriesOnAnimesCreateWithoutAnimeInput, CountriesOnAnimesUncheckedCreateWithoutAnimeInput> | CountriesOnAnimesCreateWithoutAnimeInput[] | CountriesOnAnimesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CountriesOnAnimesCreateOrConnectWithoutAnimeInput | CountriesOnAnimesCreateOrConnectWithoutAnimeInput[]
    createMany?: CountriesOnAnimesCreateManyAnimeInputEnvelope
    connect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
  }

  export type EpisodesUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<EpisodesCreateWithoutAnimeInput, EpisodesUncheckedCreateWithoutAnimeInput> | EpisodesCreateWithoutAnimeInput[] | EpisodesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodesCreateOrConnectWithoutAnimeInput | EpisodesCreateOrConnectWithoutAnimeInput[]
    createMany?: EpisodesCreateManyAnimeInputEnvelope
    connect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CategoriesOnAnimesUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<CategoriesOnAnimesCreateWithoutAnimeInput, CategoriesOnAnimesUncheckedCreateWithoutAnimeInput> | CategoriesOnAnimesCreateWithoutAnimeInput[] | CategoriesOnAnimesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CategoriesOnAnimesCreateOrConnectWithoutAnimeInput | CategoriesOnAnimesCreateOrConnectWithoutAnimeInput[]
    upsert?: CategoriesOnAnimesUpsertWithWhereUniqueWithoutAnimeInput | CategoriesOnAnimesUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: CategoriesOnAnimesCreateManyAnimeInputEnvelope
    set?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    disconnect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    delete?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    connect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    update?: CategoriesOnAnimesUpdateWithWhereUniqueWithoutAnimeInput | CategoriesOnAnimesUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: CategoriesOnAnimesUpdateManyWithWhereWithoutAnimeInput | CategoriesOnAnimesUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: CategoriesOnAnimesScalarWhereInput | CategoriesOnAnimesScalarWhereInput[]
  }

  export type CountriesOnAnimesUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<CountriesOnAnimesCreateWithoutAnimeInput, CountriesOnAnimesUncheckedCreateWithoutAnimeInput> | CountriesOnAnimesCreateWithoutAnimeInput[] | CountriesOnAnimesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CountriesOnAnimesCreateOrConnectWithoutAnimeInput | CountriesOnAnimesCreateOrConnectWithoutAnimeInput[]
    upsert?: CountriesOnAnimesUpsertWithWhereUniqueWithoutAnimeInput | CountriesOnAnimesUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: CountriesOnAnimesCreateManyAnimeInputEnvelope
    set?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    disconnect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    delete?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    connect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    update?: CountriesOnAnimesUpdateWithWhereUniqueWithoutAnimeInput | CountriesOnAnimesUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: CountriesOnAnimesUpdateManyWithWhereWithoutAnimeInput | CountriesOnAnimesUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: CountriesOnAnimesScalarWhereInput | CountriesOnAnimesScalarWhereInput[]
  }

  export type EpisodesUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<EpisodesCreateWithoutAnimeInput, EpisodesUncheckedCreateWithoutAnimeInput> | EpisodesCreateWithoutAnimeInput[] | EpisodesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodesCreateOrConnectWithoutAnimeInput | EpisodesCreateOrConnectWithoutAnimeInput[]
    upsert?: EpisodesUpsertWithWhereUniqueWithoutAnimeInput | EpisodesUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: EpisodesCreateManyAnimeInputEnvelope
    set?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    disconnect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    delete?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    connect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    update?: EpisodesUpdateWithWhereUniqueWithoutAnimeInput | EpisodesUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: EpisodesUpdateManyWithWhereWithoutAnimeInput | EpisodesUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: EpisodesScalarWhereInput | EpisodesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriesOnAnimesUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<CategoriesOnAnimesCreateWithoutAnimeInput, CategoriesOnAnimesUncheckedCreateWithoutAnimeInput> | CategoriesOnAnimesCreateWithoutAnimeInput[] | CategoriesOnAnimesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CategoriesOnAnimesCreateOrConnectWithoutAnimeInput | CategoriesOnAnimesCreateOrConnectWithoutAnimeInput[]
    upsert?: CategoriesOnAnimesUpsertWithWhereUniqueWithoutAnimeInput | CategoriesOnAnimesUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: CategoriesOnAnimesCreateManyAnimeInputEnvelope
    set?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    disconnect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    delete?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    connect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    update?: CategoriesOnAnimesUpdateWithWhereUniqueWithoutAnimeInput | CategoriesOnAnimesUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: CategoriesOnAnimesUpdateManyWithWhereWithoutAnimeInput | CategoriesOnAnimesUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: CategoriesOnAnimesScalarWhereInput | CategoriesOnAnimesScalarWhereInput[]
  }

  export type CountriesOnAnimesUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<CountriesOnAnimesCreateWithoutAnimeInput, CountriesOnAnimesUncheckedCreateWithoutAnimeInput> | CountriesOnAnimesCreateWithoutAnimeInput[] | CountriesOnAnimesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: CountriesOnAnimesCreateOrConnectWithoutAnimeInput | CountriesOnAnimesCreateOrConnectWithoutAnimeInput[]
    upsert?: CountriesOnAnimesUpsertWithWhereUniqueWithoutAnimeInput | CountriesOnAnimesUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: CountriesOnAnimesCreateManyAnimeInputEnvelope
    set?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    disconnect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    delete?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    connect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    update?: CountriesOnAnimesUpdateWithWhereUniqueWithoutAnimeInput | CountriesOnAnimesUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: CountriesOnAnimesUpdateManyWithWhereWithoutAnimeInput | CountriesOnAnimesUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: CountriesOnAnimesScalarWhereInput | CountriesOnAnimesScalarWhereInput[]
  }

  export type EpisodesUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<EpisodesCreateWithoutAnimeInput, EpisodesUncheckedCreateWithoutAnimeInput> | EpisodesCreateWithoutAnimeInput[] | EpisodesUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: EpisodesCreateOrConnectWithoutAnimeInput | EpisodesCreateOrConnectWithoutAnimeInput[]
    upsert?: EpisodesUpsertWithWhereUniqueWithoutAnimeInput | EpisodesUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: EpisodesCreateManyAnimeInputEnvelope
    set?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    disconnect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    delete?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    connect?: EpisodesWhereUniqueInput | EpisodesWhereUniqueInput[]
    update?: EpisodesUpdateWithWhereUniqueWithoutAnimeInput | EpisodesUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: EpisodesUpdateManyWithWhereWithoutAnimeInput | EpisodesUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: EpisodesScalarWhereInput | EpisodesScalarWhereInput[]
  }

  export type CategoriesOnAnimesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoriesOnAnimesCreateWithoutCategoryInput, CategoriesOnAnimesUncheckedCreateWithoutCategoryInput> | CategoriesOnAnimesCreateWithoutCategoryInput[] | CategoriesOnAnimesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesOnAnimesCreateOrConnectWithoutCategoryInput | CategoriesOnAnimesCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoriesOnAnimesCreateManyCategoryInputEnvelope
    connect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
  }

  export type CategoriesOnAnimesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoriesOnAnimesCreateWithoutCategoryInput, CategoriesOnAnimesUncheckedCreateWithoutCategoryInput> | CategoriesOnAnimesCreateWithoutCategoryInput[] | CategoriesOnAnimesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesOnAnimesCreateOrConnectWithoutCategoryInput | CategoriesOnAnimesCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoriesOnAnimesCreateManyCategoryInputEnvelope
    connect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
  }

  export type CategoriesOnAnimesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoriesOnAnimesCreateWithoutCategoryInput, CategoriesOnAnimesUncheckedCreateWithoutCategoryInput> | CategoriesOnAnimesCreateWithoutCategoryInput[] | CategoriesOnAnimesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesOnAnimesCreateOrConnectWithoutCategoryInput | CategoriesOnAnimesCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoriesOnAnimesUpsertWithWhereUniqueWithoutCategoryInput | CategoriesOnAnimesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoriesOnAnimesCreateManyCategoryInputEnvelope
    set?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    disconnect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    delete?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    connect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    update?: CategoriesOnAnimesUpdateWithWhereUniqueWithoutCategoryInput | CategoriesOnAnimesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoriesOnAnimesUpdateManyWithWhereWithoutCategoryInput | CategoriesOnAnimesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoriesOnAnimesScalarWhereInput | CategoriesOnAnimesScalarWhereInput[]
  }

  export type CategoriesOnAnimesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoriesOnAnimesCreateWithoutCategoryInput, CategoriesOnAnimesUncheckedCreateWithoutCategoryInput> | CategoriesOnAnimesCreateWithoutCategoryInput[] | CategoriesOnAnimesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoriesOnAnimesCreateOrConnectWithoutCategoryInput | CategoriesOnAnimesCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoriesOnAnimesUpsertWithWhereUniqueWithoutCategoryInput | CategoriesOnAnimesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoriesOnAnimesCreateManyCategoryInputEnvelope
    set?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    disconnect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    delete?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    connect?: CategoriesOnAnimesWhereUniqueInput | CategoriesOnAnimesWhereUniqueInput[]
    update?: CategoriesOnAnimesUpdateWithWhereUniqueWithoutCategoryInput | CategoriesOnAnimesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoriesOnAnimesUpdateManyWithWhereWithoutCategoryInput | CategoriesOnAnimesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoriesOnAnimesScalarWhereInput | CategoriesOnAnimesScalarWhereInput[]
  }

  export type CountriesOnAnimesCreateNestedManyWithoutCountryInput = {
    create?: XOR<CountriesOnAnimesCreateWithoutCountryInput, CountriesOnAnimesUncheckedCreateWithoutCountryInput> | CountriesOnAnimesCreateWithoutCountryInput[] | CountriesOnAnimesUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CountriesOnAnimesCreateOrConnectWithoutCountryInput | CountriesOnAnimesCreateOrConnectWithoutCountryInput[]
    createMany?: CountriesOnAnimesCreateManyCountryInputEnvelope
    connect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
  }

  export type CountriesOnAnimesUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<CountriesOnAnimesCreateWithoutCountryInput, CountriesOnAnimesUncheckedCreateWithoutCountryInput> | CountriesOnAnimesCreateWithoutCountryInput[] | CountriesOnAnimesUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CountriesOnAnimesCreateOrConnectWithoutCountryInput | CountriesOnAnimesCreateOrConnectWithoutCountryInput[]
    createMany?: CountriesOnAnimesCreateManyCountryInputEnvelope
    connect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
  }

  export type CountriesOnAnimesUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CountriesOnAnimesCreateWithoutCountryInput, CountriesOnAnimesUncheckedCreateWithoutCountryInput> | CountriesOnAnimesCreateWithoutCountryInput[] | CountriesOnAnimesUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CountriesOnAnimesCreateOrConnectWithoutCountryInput | CountriesOnAnimesCreateOrConnectWithoutCountryInput[]
    upsert?: CountriesOnAnimesUpsertWithWhereUniqueWithoutCountryInput | CountriesOnAnimesUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CountriesOnAnimesCreateManyCountryInputEnvelope
    set?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    disconnect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    delete?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    connect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    update?: CountriesOnAnimesUpdateWithWhereUniqueWithoutCountryInput | CountriesOnAnimesUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CountriesOnAnimesUpdateManyWithWhereWithoutCountryInput | CountriesOnAnimesUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CountriesOnAnimesScalarWhereInput | CountriesOnAnimesScalarWhereInput[]
  }

  export type CountriesOnAnimesUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CountriesOnAnimesCreateWithoutCountryInput, CountriesOnAnimesUncheckedCreateWithoutCountryInput> | CountriesOnAnimesCreateWithoutCountryInput[] | CountriesOnAnimesUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CountriesOnAnimesCreateOrConnectWithoutCountryInput | CountriesOnAnimesCreateOrConnectWithoutCountryInput[]
    upsert?: CountriesOnAnimesUpsertWithWhereUniqueWithoutCountryInput | CountriesOnAnimesUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CountriesOnAnimesCreateManyCountryInputEnvelope
    set?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    disconnect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    delete?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    connect?: CountriesOnAnimesWhereUniqueInput | CountriesOnAnimesWhereUniqueInput[]
    update?: CountriesOnAnimesUpdateWithWhereUniqueWithoutCountryInput | CountriesOnAnimesUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CountriesOnAnimesUpdateManyWithWhereWithoutCountryInput | CountriesOnAnimesUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CountriesOnAnimesScalarWhereInput | CountriesOnAnimesScalarWhereInput[]
  }

  export type AnimesCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<AnimesCreateWithoutEpisodesInput, AnimesUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutEpisodesInput
    connect?: AnimesWhereUniqueInput
  }

  export type AnimesUpdateOneWithoutEpisodesNestedInput = {
    create?: XOR<AnimesCreateWithoutEpisodesInput, AnimesUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutEpisodesInput
    upsert?: AnimesUpsertWithoutEpisodesInput
    disconnect?: AnimesWhereInput | boolean
    delete?: AnimesWhereInput | boolean
    connect?: AnimesWhereUniqueInput
    update?: XOR<XOR<AnimesUpdateToOneWithWhereWithoutEpisodesInput, AnimesUpdateWithoutEpisodesInput>, AnimesUncheckedUpdateWithoutEpisodesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnimesCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<AnimesCreateWithoutCategoriesInput, AnimesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutCategoriesInput
    connect?: AnimesWhereUniqueInput
  }

  export type CategoriesCreateNestedOneWithoutAnimesInput = {
    create?: XOR<CategoriesCreateWithoutAnimesInput, CategoriesUncheckedCreateWithoutAnimesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutAnimesInput
    connect?: CategoriesWhereUniqueInput
  }

  export type AnimesUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<AnimesCreateWithoutCategoriesInput, AnimesUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutCategoriesInput
    upsert?: AnimesUpsertWithoutCategoriesInput
    connect?: AnimesWhereUniqueInput
    update?: XOR<XOR<AnimesUpdateToOneWithWhereWithoutCategoriesInput, AnimesUpdateWithoutCategoriesInput>, AnimesUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoriesUpdateOneRequiredWithoutAnimesNestedInput = {
    create?: XOR<CategoriesCreateWithoutAnimesInput, CategoriesUncheckedCreateWithoutAnimesInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutAnimesInput
    upsert?: CategoriesUpsertWithoutAnimesInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutAnimesInput, CategoriesUpdateWithoutAnimesInput>, CategoriesUncheckedUpdateWithoutAnimesInput>
  }

  export type AnimesCreateNestedOneWithoutCountriesInput = {
    create?: XOR<AnimesCreateWithoutCountriesInput, AnimesUncheckedCreateWithoutCountriesInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutCountriesInput
    connect?: AnimesWhereUniqueInput
  }

  export type CountriesCreateNestedOneWithoutAnimesInput = {
    create?: XOR<CountriesCreateWithoutAnimesInput, CountriesUncheckedCreateWithoutAnimesInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutAnimesInput
    connect?: CountriesWhereUniqueInput
  }

  export type AnimesUpdateOneRequiredWithoutCountriesNestedInput = {
    create?: XOR<AnimesCreateWithoutCountriesInput, AnimesUncheckedCreateWithoutCountriesInput>
    connectOrCreate?: AnimesCreateOrConnectWithoutCountriesInput
    upsert?: AnimesUpsertWithoutCountriesInput
    connect?: AnimesWhereUniqueInput
    update?: XOR<XOR<AnimesUpdateToOneWithWhereWithoutCountriesInput, AnimesUpdateWithoutCountriesInput>, AnimesUncheckedUpdateWithoutCountriesInput>
  }

  export type CountriesUpdateOneRequiredWithoutAnimesNestedInput = {
    create?: XOR<CountriesCreateWithoutAnimesInput, CountriesUncheckedCreateWithoutAnimesInput>
    connectOrCreate?: CountriesCreateOrConnectWithoutAnimesInput
    upsert?: CountriesUpsertWithoutAnimesInput
    connect?: CountriesWhereUniqueInput
    update?: XOR<XOR<CountriesUpdateToOneWithWhereWithoutAnimesInput, CountriesUpdateWithoutAnimesInput>, CountriesUncheckedUpdateWithoutAnimesInput>
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
    search?: string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriesOnAnimesCreateWithoutAnimeInput = {
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoriesCreateNestedOneWithoutAnimesInput
  }

  export type CategoriesOnAnimesUncheckedCreateWithoutAnimeInput = {
    categoryId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesOnAnimesCreateOrConnectWithoutAnimeInput = {
    where: CategoriesOnAnimesWhereUniqueInput
    create: XOR<CategoriesOnAnimesCreateWithoutAnimeInput, CategoriesOnAnimesUncheckedCreateWithoutAnimeInput>
  }

  export type CategoriesOnAnimesCreateManyAnimeInputEnvelope = {
    data: CategoriesOnAnimesCreateManyAnimeInput | CategoriesOnAnimesCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type CountriesOnAnimesCreateWithoutAnimeInput = {
    created_at?: Date | string
    updated_at?: Date | string
    country: CountriesCreateNestedOneWithoutAnimesInput
  }

  export type CountriesOnAnimesUncheckedCreateWithoutAnimeInput = {
    countryId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CountriesOnAnimesCreateOrConnectWithoutAnimeInput = {
    where: CountriesOnAnimesWhereUniqueInput
    create: XOR<CountriesOnAnimesCreateWithoutAnimeInput, CountriesOnAnimesUncheckedCreateWithoutAnimeInput>
  }

  export type CountriesOnAnimesCreateManyAnimeInputEnvelope = {
    data: CountriesOnAnimesCreateManyAnimeInput | CountriesOnAnimesCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type EpisodesCreateWithoutAnimeInput = {
    name: string
    url: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EpisodesUncheckedCreateWithoutAnimeInput = {
    id?: number
    name: string
    url: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EpisodesCreateOrConnectWithoutAnimeInput = {
    where: EpisodesWhereUniqueInput
    create: XOR<EpisodesCreateWithoutAnimeInput, EpisodesUncheckedCreateWithoutAnimeInput>
  }

  export type EpisodesCreateManyAnimeInputEnvelope = {
    data: EpisodesCreateManyAnimeInput | EpisodesCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesOnAnimesUpsertWithWhereUniqueWithoutAnimeInput = {
    where: CategoriesOnAnimesWhereUniqueInput
    update: XOR<CategoriesOnAnimesUpdateWithoutAnimeInput, CategoriesOnAnimesUncheckedUpdateWithoutAnimeInput>
    create: XOR<CategoriesOnAnimesCreateWithoutAnimeInput, CategoriesOnAnimesUncheckedCreateWithoutAnimeInput>
  }

  export type CategoriesOnAnimesUpdateWithWhereUniqueWithoutAnimeInput = {
    where: CategoriesOnAnimesWhereUniqueInput
    data: XOR<CategoriesOnAnimesUpdateWithoutAnimeInput, CategoriesOnAnimesUncheckedUpdateWithoutAnimeInput>
  }

  export type CategoriesOnAnimesUpdateManyWithWhereWithoutAnimeInput = {
    where: CategoriesOnAnimesScalarWhereInput
    data: XOR<CategoriesOnAnimesUpdateManyMutationInput, CategoriesOnAnimesUncheckedUpdateManyWithoutAnimeInput>
  }

  export type CategoriesOnAnimesScalarWhereInput = {
    AND?: CategoriesOnAnimesScalarWhereInput | CategoriesOnAnimesScalarWhereInput[]
    OR?: CategoriesOnAnimesScalarWhereInput[]
    NOT?: CategoriesOnAnimesScalarWhereInput | CategoriesOnAnimesScalarWhereInput[]
    animeId?: IntFilter<"CategoriesOnAnimes"> | number
    categoryId?: IntFilter<"CategoriesOnAnimes"> | number
    created_at?: DateTimeFilter<"CategoriesOnAnimes"> | Date | string
    updated_at?: DateTimeFilter<"CategoriesOnAnimes"> | Date | string
  }

  export type CountriesOnAnimesUpsertWithWhereUniqueWithoutAnimeInput = {
    where: CountriesOnAnimesWhereUniqueInput
    update: XOR<CountriesOnAnimesUpdateWithoutAnimeInput, CountriesOnAnimesUncheckedUpdateWithoutAnimeInput>
    create: XOR<CountriesOnAnimesCreateWithoutAnimeInput, CountriesOnAnimesUncheckedCreateWithoutAnimeInput>
  }

  export type CountriesOnAnimesUpdateWithWhereUniqueWithoutAnimeInput = {
    where: CountriesOnAnimesWhereUniqueInput
    data: XOR<CountriesOnAnimesUpdateWithoutAnimeInput, CountriesOnAnimesUncheckedUpdateWithoutAnimeInput>
  }

  export type CountriesOnAnimesUpdateManyWithWhereWithoutAnimeInput = {
    where: CountriesOnAnimesScalarWhereInput
    data: XOR<CountriesOnAnimesUpdateManyMutationInput, CountriesOnAnimesUncheckedUpdateManyWithoutAnimeInput>
  }

  export type CountriesOnAnimesScalarWhereInput = {
    AND?: CountriesOnAnimesScalarWhereInput | CountriesOnAnimesScalarWhereInput[]
    OR?: CountriesOnAnimesScalarWhereInput[]
    NOT?: CountriesOnAnimesScalarWhereInput | CountriesOnAnimesScalarWhereInput[]
    animeId?: IntFilter<"CountriesOnAnimes"> | number
    countryId?: IntFilter<"CountriesOnAnimes"> | number
    created_at?: DateTimeFilter<"CountriesOnAnimes"> | Date | string
    updated_at?: DateTimeFilter<"CountriesOnAnimes"> | Date | string
  }

  export type EpisodesUpsertWithWhereUniqueWithoutAnimeInput = {
    where: EpisodesWhereUniqueInput
    update: XOR<EpisodesUpdateWithoutAnimeInput, EpisodesUncheckedUpdateWithoutAnimeInput>
    create: XOR<EpisodesCreateWithoutAnimeInput, EpisodesUncheckedCreateWithoutAnimeInput>
  }

  export type EpisodesUpdateWithWhereUniqueWithoutAnimeInput = {
    where: EpisodesWhereUniqueInput
    data: XOR<EpisodesUpdateWithoutAnimeInput, EpisodesUncheckedUpdateWithoutAnimeInput>
  }

  export type EpisodesUpdateManyWithWhereWithoutAnimeInput = {
    where: EpisodesScalarWhereInput
    data: XOR<EpisodesUpdateManyMutationInput, EpisodesUncheckedUpdateManyWithoutAnimeInput>
  }

  export type EpisodesScalarWhereInput = {
    AND?: EpisodesScalarWhereInput | EpisodesScalarWhereInput[]
    OR?: EpisodesScalarWhereInput[]
    NOT?: EpisodesScalarWhereInput | EpisodesScalarWhereInput[]
    id?: IntFilter<"Episodes"> | number
    name?: StringFilter<"Episodes"> | string
    url?: StringFilter<"Episodes"> | string
    type?: StringFilter<"Episodes"> | string
    animeId?: IntNullableFilter<"Episodes"> | number | null
    created_at?: DateTimeFilter<"Episodes"> | Date | string
    updated_at?: DateTimeFilter<"Episodes"> | Date | string
  }

  export type CategoriesOnAnimesCreateWithoutCategoryInput = {
    created_at?: Date | string
    updated_at?: Date | string
    anime: AnimesCreateNestedOneWithoutCategoriesInput
  }

  export type CategoriesOnAnimesUncheckedCreateWithoutCategoryInput = {
    animeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesOnAnimesCreateOrConnectWithoutCategoryInput = {
    where: CategoriesOnAnimesWhereUniqueInput
    create: XOR<CategoriesOnAnimesCreateWithoutCategoryInput, CategoriesOnAnimesUncheckedCreateWithoutCategoryInput>
  }

  export type CategoriesOnAnimesCreateManyCategoryInputEnvelope = {
    data: CategoriesOnAnimesCreateManyCategoryInput | CategoriesOnAnimesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesOnAnimesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoriesOnAnimesWhereUniqueInput
    update: XOR<CategoriesOnAnimesUpdateWithoutCategoryInput, CategoriesOnAnimesUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoriesOnAnimesCreateWithoutCategoryInput, CategoriesOnAnimesUncheckedCreateWithoutCategoryInput>
  }

  export type CategoriesOnAnimesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoriesOnAnimesWhereUniqueInput
    data: XOR<CategoriesOnAnimesUpdateWithoutCategoryInput, CategoriesOnAnimesUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoriesOnAnimesUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoriesOnAnimesScalarWhereInput
    data: XOR<CategoriesOnAnimesUpdateManyMutationInput, CategoriesOnAnimesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CountriesOnAnimesCreateWithoutCountryInput = {
    created_at?: Date | string
    updated_at?: Date | string
    anime: AnimesCreateNestedOneWithoutCountriesInput
  }

  export type CountriesOnAnimesUncheckedCreateWithoutCountryInput = {
    animeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CountriesOnAnimesCreateOrConnectWithoutCountryInput = {
    where: CountriesOnAnimesWhereUniqueInput
    create: XOR<CountriesOnAnimesCreateWithoutCountryInput, CountriesOnAnimesUncheckedCreateWithoutCountryInput>
  }

  export type CountriesOnAnimesCreateManyCountryInputEnvelope = {
    data: CountriesOnAnimesCreateManyCountryInput | CountriesOnAnimesCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type CountriesOnAnimesUpsertWithWhereUniqueWithoutCountryInput = {
    where: CountriesOnAnimesWhereUniqueInput
    update: XOR<CountriesOnAnimesUpdateWithoutCountryInput, CountriesOnAnimesUncheckedUpdateWithoutCountryInput>
    create: XOR<CountriesOnAnimesCreateWithoutCountryInput, CountriesOnAnimesUncheckedCreateWithoutCountryInput>
  }

  export type CountriesOnAnimesUpdateWithWhereUniqueWithoutCountryInput = {
    where: CountriesOnAnimesWhereUniqueInput
    data: XOR<CountriesOnAnimesUpdateWithoutCountryInput, CountriesOnAnimesUncheckedUpdateWithoutCountryInput>
  }

  export type CountriesOnAnimesUpdateManyWithWhereWithoutCountryInput = {
    where: CountriesOnAnimesScalarWhereInput
    data: XOR<CountriesOnAnimesUpdateManyMutationInput, CountriesOnAnimesUncheckedUpdateManyWithoutCountryInput>
  }

  export type AnimesCreateWithoutEpisodesInput = {
    title: string
    other_title: string
    slug: string
    time?: string | null
    quality?: string | null
    language?: string | null
    director?: string | null
    actors?: string | null
    year?: string | null
    description?: string | null
    image_url: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: CategoriesOnAnimesCreateNestedManyWithoutAnimeInput
    countries?: CountriesOnAnimesCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUncheckedCreateWithoutEpisodesInput = {
    id?: number
    title: string
    other_title: string
    slug: string
    time?: string | null
    quality?: string | null
    language?: string | null
    director?: string | null
    actors?: string | null
    year?: string | null
    description?: string | null
    image_url: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: CategoriesOnAnimesUncheckedCreateNestedManyWithoutAnimeInput
    countries?: CountriesOnAnimesUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimesCreateOrConnectWithoutEpisodesInput = {
    where: AnimesWhereUniqueInput
    create: XOR<AnimesCreateWithoutEpisodesInput, AnimesUncheckedCreateWithoutEpisodesInput>
  }

  export type AnimesUpsertWithoutEpisodesInput = {
    update: XOR<AnimesUpdateWithoutEpisodesInput, AnimesUncheckedUpdateWithoutEpisodesInput>
    create: XOR<AnimesCreateWithoutEpisodesInput, AnimesUncheckedCreateWithoutEpisodesInput>
    where?: AnimesWhereInput
  }

  export type AnimesUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: AnimesWhereInput
    data: XOR<AnimesUpdateWithoutEpisodesInput, AnimesUncheckedUpdateWithoutEpisodesInput>
  }

  export type AnimesUpdateWithoutEpisodesInput = {
    title?: StringFieldUpdateOperationsInput | string
    other_title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    actors?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesOnAnimesUpdateManyWithoutAnimeNestedInput
    countries?: CountriesOnAnimesUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateWithoutEpisodesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    other_title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    actors?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesOnAnimesUncheckedUpdateManyWithoutAnimeNestedInput
    countries?: CountriesOnAnimesUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesCreateWithoutCategoriesInput = {
    title: string
    other_title: string
    slug: string
    time?: string | null
    quality?: string | null
    language?: string | null
    director?: string | null
    actors?: string | null
    year?: string | null
    description?: string | null
    image_url: string
    created_at?: Date | string
    updated_at?: Date | string
    countries?: CountriesOnAnimesCreateNestedManyWithoutAnimeInput
    episodes?: EpisodesCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    other_title: string
    slug: string
    time?: string | null
    quality?: string | null
    language?: string | null
    director?: string | null
    actors?: string | null
    year?: string | null
    description?: string | null
    image_url: string
    created_at?: Date | string
    updated_at?: Date | string
    countries?: CountriesOnAnimesUncheckedCreateNestedManyWithoutAnimeInput
    episodes?: EpisodesUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimesCreateOrConnectWithoutCategoriesInput = {
    where: AnimesWhereUniqueInput
    create: XOR<AnimesCreateWithoutCategoriesInput, AnimesUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoriesCreateWithoutAnimesInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesUncheckedCreateWithoutAnimesInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesCreateOrConnectWithoutAnimesInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutAnimesInput, CategoriesUncheckedCreateWithoutAnimesInput>
  }

  export type AnimesUpsertWithoutCategoriesInput = {
    update: XOR<AnimesUpdateWithoutCategoriesInput, AnimesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<AnimesCreateWithoutCategoriesInput, AnimesUncheckedCreateWithoutCategoriesInput>
    where?: AnimesWhereInput
  }

  export type AnimesUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: AnimesWhereInput
    data: XOR<AnimesUpdateWithoutCategoriesInput, AnimesUncheckedUpdateWithoutCategoriesInput>
  }

  export type AnimesUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    other_title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    actors?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries?: CountriesOnAnimesUpdateManyWithoutAnimeNestedInput
    episodes?: EpisodesUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    other_title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    actors?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    countries?: CountriesOnAnimesUncheckedUpdateManyWithoutAnimeNestedInput
    episodes?: EpisodesUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type CategoriesUpsertWithoutAnimesInput = {
    update: XOR<CategoriesUpdateWithoutAnimesInput, CategoriesUncheckedUpdateWithoutAnimesInput>
    create: XOR<CategoriesCreateWithoutAnimesInput, CategoriesUncheckedCreateWithoutAnimesInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutAnimesInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutAnimesInput, CategoriesUncheckedUpdateWithoutAnimesInput>
  }

  export type CategoriesUpdateWithoutAnimesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateWithoutAnimesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimesCreateWithoutCountriesInput = {
    title: string
    other_title: string
    slug: string
    time?: string | null
    quality?: string | null
    language?: string | null
    director?: string | null
    actors?: string | null
    year?: string | null
    description?: string | null
    image_url: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: CategoriesOnAnimesCreateNestedManyWithoutAnimeInput
    episodes?: EpisodesCreateNestedManyWithoutAnimeInput
  }

  export type AnimesUncheckedCreateWithoutCountriesInput = {
    id?: number
    title: string
    other_title: string
    slug: string
    time?: string | null
    quality?: string | null
    language?: string | null
    director?: string | null
    actors?: string | null
    year?: string | null
    description?: string | null
    image_url: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: CategoriesOnAnimesUncheckedCreateNestedManyWithoutAnimeInput
    episodes?: EpisodesUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimesCreateOrConnectWithoutCountriesInput = {
    where: AnimesWhereUniqueInput
    create: XOR<AnimesCreateWithoutCountriesInput, AnimesUncheckedCreateWithoutCountriesInput>
  }

  export type CountriesCreateWithoutAnimesInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CountriesUncheckedCreateWithoutAnimesInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CountriesCreateOrConnectWithoutAnimesInput = {
    where: CountriesWhereUniqueInput
    create: XOR<CountriesCreateWithoutAnimesInput, CountriesUncheckedCreateWithoutAnimesInput>
  }

  export type AnimesUpsertWithoutCountriesInput = {
    update: XOR<AnimesUpdateWithoutCountriesInput, AnimesUncheckedUpdateWithoutCountriesInput>
    create: XOR<AnimesCreateWithoutCountriesInput, AnimesUncheckedCreateWithoutCountriesInput>
    where?: AnimesWhereInput
  }

  export type AnimesUpdateToOneWithWhereWithoutCountriesInput = {
    where?: AnimesWhereInput
    data: XOR<AnimesUpdateWithoutCountriesInput, AnimesUncheckedUpdateWithoutCountriesInput>
  }

  export type AnimesUpdateWithoutCountriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    other_title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    actors?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesOnAnimesUpdateManyWithoutAnimeNestedInput
    episodes?: EpisodesUpdateManyWithoutAnimeNestedInput
  }

  export type AnimesUncheckedUpdateWithoutCountriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    other_title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    time?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    director?: NullableStringFieldUpdateOperationsInput | string | null
    actors?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoriesOnAnimesUncheckedUpdateManyWithoutAnimeNestedInput
    episodes?: EpisodesUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type CountriesUpsertWithoutAnimesInput = {
    update: XOR<CountriesUpdateWithoutAnimesInput, CountriesUncheckedUpdateWithoutAnimesInput>
    create: XOR<CountriesCreateWithoutAnimesInput, CountriesUncheckedCreateWithoutAnimesInput>
    where?: CountriesWhereInput
  }

  export type CountriesUpdateToOneWithWhereWithoutAnimesInput = {
    where?: CountriesWhereInput
    data: XOR<CountriesUpdateWithoutAnimesInput, CountriesUncheckedUpdateWithoutAnimesInput>
  }

  export type CountriesUpdateWithoutAnimesInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountriesUncheckedUpdateWithoutAnimesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnAnimesCreateManyAnimeInput = {
    categoryId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CountriesOnAnimesCreateManyAnimeInput = {
    countryId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type EpisodesCreateManyAnimeInput = {
    id?: number
    name: string
    url: string
    type: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesOnAnimesUpdateWithoutAnimeInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutAnimesNestedInput
  }

  export type CategoriesOnAnimesUncheckedUpdateWithoutAnimeInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnAnimesUncheckedUpdateManyWithoutAnimeInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountriesOnAnimesUpdateWithoutAnimeInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: CountriesUpdateOneRequiredWithoutAnimesNestedInput
  }

  export type CountriesOnAnimesUncheckedUpdateWithoutAnimeInput = {
    countryId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountriesOnAnimesUncheckedUpdateManyWithoutAnimeInput = {
    countryId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodesUpdateWithoutAnimeInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodesUncheckedUpdateWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodesUncheckedUpdateManyWithoutAnimeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnAnimesCreateManyCategoryInput = {
    animeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoriesOnAnimesUpdateWithoutCategoryInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    anime?: AnimesUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type CategoriesOnAnimesUncheckedUpdateWithoutCategoryInput = {
    animeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesOnAnimesUncheckedUpdateManyWithoutCategoryInput = {
    animeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountriesOnAnimesCreateManyCountryInput = {
    animeId: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CountriesOnAnimesUpdateWithoutCountryInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    anime?: AnimesUpdateOneRequiredWithoutCountriesNestedInput
  }

  export type CountriesOnAnimesUncheckedUpdateWithoutCountryInput = {
    animeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CountriesOnAnimesUncheckedUpdateManyWithoutCountryInput = {
    animeId?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AnimesCountOutputTypeDefaultArgs instead
     */
    export type AnimesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnimesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriesCountOutputTypeDefaultArgs instead
     */
    export type CategoriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountriesCountOutputTypeDefaultArgs instead
     */
    export type CountriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnimesDefaultArgs instead
     */
    export type AnimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnimesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriesDefaultArgs instead
     */
    export type CategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountriesDefaultArgs instead
     */
    export type CountriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EpisodesDefaultArgs instead
     */
    export type EpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EpisodesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoriesOnAnimesDefaultArgs instead
     */
    export type CategoriesOnAnimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoriesOnAnimesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountriesOnAnimesDefaultArgs instead
     */
    export type CountriesOnAnimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountriesOnAnimesDefaultArgs<ExtArgs>

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